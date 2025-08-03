import User from "../models/userModels.js";
import Profile from "../models/profileModels.js";
import crypto from "crypto";
import PDFDocument from "pdfkit";
import bcrypt from "bcrypt";
import fs from "fs";
import Connection from "../models/connectionModels.js";
import Comment from "../models/commentModels.js";
import Post from "../models/postModels.js";

const convertUserDataTOPDF = async (userData) => {
  const doc = new PDFDocument();
  const outputPath = crypto.randomBytes(32).toString("hex") + ".pdf";
  const stream = fs.createWriteStream("uploads/" + outputPath);
  doc.pipe(stream);

  // doc.image(`uploads/${userData.userId.profilePicture}`, {
  //   align: "center",
  //   width: 100,
  // });

  doc.fontSize(14).text(`Name : ${userData.userId.name}`);
  doc.fontSize(14).text(`Username : ${userData.userId.username}`);
  doc.fontSize(14).text(`Email : ${userData.userId.email}`);

  doc.fontSize(14).text(`Bio : ${userData.bio}`);
  doc.fontSize(14).text(`Current Position : ${userData.currentPost}`);

  doc.fontSize(14).text("PastWork:");
  userData.pastWork.forEach((work, index) => {
    doc.fontSize(14).text(`Company Name: ${work.company}`);
    doc.fontSize(14).text(`Position: ${work.position}`);
    doc.fontSize(14).text(`Years: ${work.years}`);
  });
  doc.end();
  return outputPath;
};

// register controller
export const Register = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    if (!email || !name || !username || !password) {
      return res.status(400).json({ message: " All field are reqired" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: " User All ready Exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      password: hashPassword,
      email,
      username,
    });
    await newUser.save();
    const profile = new Profile({ userId: newUser._id });
    await profile.save();
    return res.status(200).json({ message: "Register successfully " });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// login controller
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: " All field are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not match" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: " Invailid password" });
    }
    const token = crypto.randomBytes(32).toString("hex");

    await User.updateOne({ _id: user._id }, { token });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//multer for upload controller
export const updateProfilePic = async (req, res) => {
  const { token } = req.body;
  try {
    const user = await User.findOne({ token: token });
    if (!user) {
      return res.status(400).json({ message: " User not match" });
    }
    user.profilePicture = req.file.filename;
    await user.save();
    return res.json({ message: "Profile pic updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// UpdateUserProfile
export const UpadateUserProfile = async (req, res) => {
  const { token, ...newUserData } = req.body;
  try {
    const user = await User.findOne({ token: token });
    if (!user) {
      return res.status(404).json({ message: "User not match" });
    }
    const { username, email } = newUserData;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser || String(existingUser._id !== String(user._id))) {
        return res.json({ message: " User Allready Exists" });
      }
    }
    Object.assign(user, newUserData);
    await user.save();
    return res.status(200).json("User Profile Update");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// getUserProfile
export const getUserProfile = async (req, res) => {
  const { token } = req.query;
  try {
    const user = await User.findOne({ token: token });
    if (!user) {
      return res.status(404).json({ message: "User does not Match" });
    }
    const profile = await Profile.findOne({ userId: user._id }).populate(
      "userId",
      "username  name   email   profilePicture"
    );
    return res.json({ profile: profile });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//UpdateProfileData
export const UpdateProfileData = async (req, res) => {
  const { token, ...newUserData } = req.body;
  try {
    const user = await User.findOne({ token: token });

    if (!user) {
      return res.status(404).json({ message: "User does not Match" });
    }
    const profileData = await Profile.findOne({ userId: user._id });
    Object.assign(profileData, newUserData);
    await profileData.save();
    return res.json({ message: " User Profile Data Update" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// getAllUserData
export const getAllUserProfileData = async (req, res) => {
  try {
    const profileData = await Profile.find({}).populate(
      "userId",
      "username  name   email   profilePicture"
    );
    return res.json({ profile: profileData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// downloadResumePdf
export const downloadResumePdf = async (req, res) => {
  const user_id = req.query.id;
  try {
    const Userprofile = await Profile.findOne({ userId: user_id }).populate(
      "userId",
      "username  name   email   profilePicture"
    );
    const outputPath = await convertUserDataTOPDF(Userprofile);
    return res.json({ message: outputPath });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//sendConectionRequest

export const sendConnectionRequest = async (req, res) => {
  try {
    const { token, connectionId } = req.body;
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(404).json({ message: " User does not Match" });
    }
    const UserConnection = await User.findOne({ _id: connectionId });
    if (!UserConnection) {
      return res.status(404).json({ message: "User Connection not Match" });
    }

    const existingConnection = await Connection.findOne({
      userId: user._id,
      connectionId: UserConnection._id,
    });
    if (existingConnection) {
      return res.status(400).json({ message: " Request Allready sent" });
    }
    const request = new Connection({
      userId: user._id,
      connectionId: UserConnection._id,
    });
    await request.save();
    return res.json({ message: " Request sent" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//getAllConnectionRequest

export const getMyConnectionRequest = async (req, res) => {
  const { token } = req.query;
  try {
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(404).json({ message: " User does not match" });
    }
    const connections = await Connection.find({
      userId: user._id,
    }).populate("connectionId", "username name email profilePicture");
    return res.json({ connections });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// myConnection

export const myConnectionRequest = async (req, res) => {
  try {
    const { token } = req.query;
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(404).json({ message: " User does not match" });
    }
    const connection = await Connection.find({
      connectionId: user._id,
    }).populate("userId", "username name email profilePicture");

    return res.json(connection);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// acceptConnectionRequest

export const acceptConnectionRequest = async (req, res) => {
  try {
    const { token, action_type, requestId } = req.body;
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(404).json({ message: " User does not match" });
    }

    const connection = await Connection.findOne({ _id: requestId });
    if (!connection) {
      return res.status(404).json({ message: " Connection not found" });
    }

    if (action_type === "accept") {
      connection.status_accepted = true;
    } else {
      connection.status_accepted = false;
    }

    await connection.save();
    return res.json({ message: " Request Accepted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//commentOnpost

export const commentPost = async (req, res) => {
  const { token, post_id, commentBody } = req.body;
  try {
    const user = await User.findOne({ token: token }).select("_id");
    if (!user) return res.status(404).json({ message: "User not Found" });

    const post = await Post.findOne({ _id: post_id });
    if (!post) return res.status(404).json({ message: " Post not Found" });

    const comment = new Comment({
      userId: user._id,
      postId: post_id,
      body: commentBody,
    });

    await comment.save();
    return res.status(200).json({ message: " Comment added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserProfileByUsername = async (req, res) => {
  const { username } = req.query;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json("User Not Found");

    const userProfile = await Profile.findOne({ userId: user._id }).populate(
      "userId",
      " username email name profilePicture"
    );
    return res.json({ profile: userProfile });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
