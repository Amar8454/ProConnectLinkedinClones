import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUserProfileData,
  getConnectionRequest,
  getUserProfile,
  loginUser,
  myConnectionRequest,
  registerUser,
} from "../../action/authAction";

const initialState = {
  user: [],
  AllUser: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  loggedIn: false,
  isTokenThere: false,
  message: " ",
  getUserProfileFetch: false,
  profileFetch: false,
  connections: [],
  connectionsRequest: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    handleLoginUser: (state) => {
      state.message = " Hello";
    },
    emptyMessage: (state) => {
      state.message = " ";
    },
    setIsTokenThere: (state) => {
      state.isTokenThere = true;
    },
    setIsTokenNotThere: (state) => {
      state.isTokenThere = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        (state.isLoading = true), (state.message = "loading...");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.loggedIn = true),
          (state.isSuccess = true),
          (state.message = "Login success");
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(registerUser.pending, (state, action) => {
        (state.isLoading = true), (state.message = "Register user...");
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.loggedIn = true),
          (state.isSuccess = true),
          (state.message = {
            message: "Register successfully",
          });
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.profileFetch = true),
          (state.user = action.payload.profile);
      })
      .addCase(getAllUserProfileData.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.getUserProfileFetch = true),
          (state.AllUser = action.payload.profile);
      })
      .addCase(getConnectionRequest.fulfilled, (state, action) => {
        state.connections = action.payload;
      })
      .addCase(getConnectionRequest.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(myConnectionRequest.fulfilled, (state, action) => {
        state.connectionsRequest = action.payload;
      })
      .addCase(myConnectionRequest.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export const { reset, emptyMessage, setIsTokenNotThere, setIsTokenThere } =
  authSlice.actions;
export default authSlice.reducer;
