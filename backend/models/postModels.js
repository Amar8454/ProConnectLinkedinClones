import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  media: {
    type: String,
    default: " ",
  },
  fileType: {
    type: String,
    default: " ",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
