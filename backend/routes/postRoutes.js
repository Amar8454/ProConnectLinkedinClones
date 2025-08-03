import express from "express";
import multer from "multer";
import {
  createPost,
  deleteComment,
  deletePost,
  getAllPost,
  getAllPostComment,
  likepost,
} from "../controllers/postContr.js";
import { commentPost } from "../controllers/userContr.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/post", upload.single("media"), createPost);
router.get("/getAllPost", getAllPost);
router.delete("/deletePost", deletePost);
router.post("/comment", commentPost);
router.get("/getAllcomment", getAllPostComment);
router.delete("/commentDelete", deleteComment);
router.post("/likes", likepost);
export default router;
