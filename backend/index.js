dotenv.config();
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import PostRoute from "./routes/postRoutes.js";
import UserRoute from "./routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

// creating routes
app.use(PostRoute);
app.use(UserRoute);
app.use(express.static("uploads"));

const PORT = process.env.PORT || 8081;
const MONOGDB_URI = process.env.MONGODB_URL;

try {
  mongoose.connect(MONOGDB_URI).then(() => console.log("MongoDb Connect"));
} catch (error) {
  console.log(error);
}

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
