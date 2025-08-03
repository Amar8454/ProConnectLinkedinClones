import express from "express";
import multer from "multer";
const router = express.Router();
import {
  Login,
  Register,
  getUserProfile,
  updateProfilePic,
  downloadResumePdf,
  UpdateProfileData,
  UpadateUserProfile,
  getAllUserProfileData,
  sendConnectionRequest,
  myConnectionRequest,
  acceptConnectionRequest,
  getUserProfileByUsername,
  getMyConnectionRequest,
} from "../controllers/userContr.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/updateProfilePic",
  upload.single("profilePicture"),
  updateProfilePic
);

router.post("/register", Register);
router.post("/login", Login);
router.post("/userUpdate", UpadateUserProfile);
router.get("/getUserProfile", getUserProfile);
router.post("/updateProfileData", UpdateProfileData);
router.get("/getAllUserProfileData", getAllUserProfileData);
router.get("/downloadResumePdf", downloadResumePdf);
router.post("/connection/sendRequest", sendConnectionRequest);
router.get("/getAllConnectionRequest", getMyConnectionRequest);
router.get("/myConnectionRequest", myConnectionRequest);
router.post("/acceptConnectionRequest", acceptConnectionRequest);
router.get("/getUserProfileByUsername", getUserProfileByUsername);

export default router;
