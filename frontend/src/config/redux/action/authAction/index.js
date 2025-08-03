import { clientServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

// First create Thunk
export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const response = await clientServer.post("/login", {
        email: user.email,
        password: user.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      } else {
        return thunkAPI.rejectWithValue({
          message: "token not provided",
        });
      }
      return thunkAPI.fulfillWithValue(response.data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// registerUser

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await clientServer.post("register", {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "/user/getUserProfile",
  async (user, thunkAPI) => {
    try {
      const response = await clientServer.get("/getUserProfile", {
        params: {
          token: user.token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getAllUserProfileData = createAsyncThunk(
  "/getAllUserProfileData",
  async (_, thunkAPI) => {
    try {
      const response = await clientServer.get("/getAllUserProfileData");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const sendConnectionRequest = createAsyncThunk(
  "/sendConnectionRequest",

  async (sendCon, thunkAPI) => {
    try {
      const response = await clientServer.post("/connection/sendRequest", {
        token: sendCon.token,
        connectionId: sendCon.user_id,
      });

      thunkAPI.dispatch(getConnectionRequest({ token: sendCon.token }));
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getConnectionRequest = createAsyncThunk(
  "/getConnectionRequest",
  async (getCon, thunkAPI) => {
    try {
      const response = await clientServer.get("/getAllConnectionRequest", {
        params: {
          token: getCon.token,
        },
      });

      return thunkAPI.fulfillWithValue(response.data.connections);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const myConnectionRequest = createAsyncThunk(
  "/myConnectionRequest",
  async (myCon, thunkAPI) => {
    try {
      const response = await clientServer.get("/myConnectionRequest", {
        params: {
          token: myCon.token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const acceptConnectionRequest = createAsyncThunk(
  "/acceptConnectionRequest",
  async (accetCon, thunkAPI) => {
    try {
      const response = await clientServer.post("/acceptConnectionRequest", {
        token: accetCon.token,
        action_type: accetCon.action,
        requestId: accetCon.connectionId,
      });

      thunkAPI.dispatch(getConnectionRequest({ token: accetCon.token }));
      thunkAPI.dispatch(myConnectionRequest({ token: accetCon.token }));

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
