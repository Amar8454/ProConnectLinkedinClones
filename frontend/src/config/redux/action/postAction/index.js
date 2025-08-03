import { clientServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (_, thunkAPI) => {
    try {
      const response = await clientServer.get("/getAllPost");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (userData, thunkAPI) => {
    const { file, body } = userData;
    try {
      const formData = new FormData();
      formData.append("token", localStorage.getItem("token"));
      formData.append("body", body);
      formData.append("media", file);

      const response = await clientServer.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 2000) {
        return thunkAPI.fulfillWithValue(" Post Upload");
      } else {
        return thunkAPI.rejectWithValue("Not Post Data");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (post_id, thunkAPI) => {
    try {
      const response = await clientServer.delete("/deletePost", {
        data: {
          token: localStorage.getItem("token"),
          post_id: post_id.post_id,
        },
      });
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const increamentLikes = createAsyncThunk(
  "post/increamentLikes",
  async (post, thunkAPI) => {
    try {
      const response = await clientServer.post("/likes", {
        post_id: post.post_id,
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllComment = createAsyncThunk(
  "/post/getAllComment",
  async (postData, thunkAPI) => {
    try {
      const response = await clientServer.get("/getAllcomment", {
        params: {
          post_id: postData.post_id,
        },
      });
      return thunkAPI.fulfillWithValue({
        comment: response.data,
        post_id: postData.post_id,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postComments = createAsyncThunk(
  "/post/postComment",
  async (CommentData, thunkAPI) => {
    try {
      const response = await clientServer.post("/comment", {
        token: localStorage.getItem("token"),
        post_id: CommentData.post_id,
        commentBody: CommentData.body,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
