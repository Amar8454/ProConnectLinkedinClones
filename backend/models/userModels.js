import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: true,
  },
  profilePicture: {
    type: String,
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
