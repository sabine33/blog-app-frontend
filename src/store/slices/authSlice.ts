import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";
const user = JSON.parse(localStorage.getItem("user") ?? "null");
const code = JSON.parse(localStorage.getItem("code") ?? '""');

type AuthStateType = {
  user: UserType | null;
  isLoggedIn: boolean;
  code: string;
  error: string | null;
};
const initialState: AuthStateType = {
  user: user && code ? user : null,
  isLoggedIn: user && code ? true : false,
  code: code,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.isLoggedIn = false;
      state.code = action.payload.code;
      localStorage.setItem("code", JSON.stringify(state.code));
      console.log(state.code);
    },
    setUserProfile: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log({ code: state.code, user: state.user });
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setLoginFailed: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.user = null;
      state.code = "";
      localStorage.removeItem("code");
      localStorage.removeItem("user");
      state.error = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.code = "";
      localStorage.removeItem("code");
      localStorage.removeItem("user");
      state.isLoggedIn = false;
    },
  },
});
export const { getUserProfile, setUserProfile, removeUser, setLoginFailed } =
  authSlice.actions;
export default authSlice.reducer;
