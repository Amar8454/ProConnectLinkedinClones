import { createSlice } from "@reduxjs/toolkit";
import { getAllComment, getAllPost } from "../../action/postAction";

const initialState = {
  post: [],
  isError: false,
  isPostFetch: false,
  isLoading: false,
  loggedIn: false,
  message: "",
  comments: [],
  postId: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: () => initialState,
    resetPost: (state) => {
      state.postId = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state, action) => {
        (state.isLoading = true), (state.message = " Fetching all post...");
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        (state.isError = false),
          (state.isLoading = false),
          (state.loggedIn = true),
          (state.isPostFetch = true),
          (state.post = action.payload.post.reverse());
      })
      .addCase(getAllPost.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      })
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.postId = action.payload.post_id;
        state.comments = action.payload.comment;
        console.log(state.comments);
      });
  },
});

export const { resetPost } = postSlice.actions;

export default postSlice.reducer;
