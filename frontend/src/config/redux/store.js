/** STEPS for State Management
 * Submit Action
 * Handle action in it's reducer
 * Register Here -> Reducer
 * */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/authReducer";
import postSlice from "./reducer/postReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    postReducer: postSlice,
  },
});
