import User from "../models/userModels.js";
import Post from "../models/postModels.js";
import Comment from "../models/commentModels.js";

// createPost
export const createPost = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await User.findOne({ token: token });
    if (!user) {
      return res.status(404).json({ message: " User not Match" });
    }

    const post = new Post({
      userId: user._id,
      body: req.body.body,
      media: req.file != undefined ? req.file.filename : " ",
      fileType: req.file != undefined ? req.file.mimetype.split("/")[1] : "",
    });

    await post.save();
    return res.status(200).json({ posts: post });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//getAllPost

export const getAllPost = async (req, res) => {
  try {
    const post = await Post.find().populate(
      "userId",
      " username name email profilePicture"
    );
    return res.json({ post: post });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// deletePost
export const deletePost = async (req, res) => {
  try {
    const { token, post_id } = req.body;
    const user = await User.findOne({ token: token }).select("_id");
    if (!user) return res.status(404).json({ message: " User not Found" });

    const post = await Post.findOne({ _id: post_id });
    if (!post) return res.status(404).json({ message: "Post not Fund" });

    if (post.userId.toString() !== user._id.toString())
      return res.status(401).json({ message: "Unauthorized person" });

    await post.deleteOne({ _id: post_id });
    return res.json({ message: " Post deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//getAllComment
export const getAllPostComment = async (req, res) => {
  try {
    const { post_id } = req.query;
    const post = await Post.findOne({ _id: post_id });
    if (!post) return res.status(404).json({ message: " Post not found" });

    const comment = await Comment.find({ postId: post_id }).populate(
      "userId",
      "username  name"
    );
    return res.json(comment.reverse());
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// deleteComment
export const deleteComment = async (req, res) => {
  try {
    const { post_id, token, comment_id } = req.body;
    const user = await User.findOne({ token: token }).select("_id");
    if (!user) return res.status(404).json({ message: "User not Found" });
    const comment = await Comment.findOne({ _id: comment_id });
    if (!comment) return res.status(404).json({ message: "Comment not Fund" });

    if (comment.userId.toString() !== user._id.toString())
      return res.status(404).json({ message: " Unauthorized person" });
    await Comment.deleteComment({ _id: comment });
    return res.json({ message: " Comment delete" });
  } catch (error) {
    return res.status(500).json({ mesasge: error.message });
  }
};

// likeincreases
export const likepost = async (req, res) => {
  try {
    const { post_id } = req.body;
    const post = await Post.findOne({ _id: post_id });
    if (!post) return res.status(404).json({ message: "Post not Found" });
    post.likes = post.likes + 1;
    await post.save();
    return res.status(200).json({ message: " Likes increament" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
