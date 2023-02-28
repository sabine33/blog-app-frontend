import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, storeToLocalStorage } from "../../helpers";

const user = getFromLocalStorage("user") || null;
const token = getFromLocalStorage("token") || null;
/**
 * Slice for authentication module.
 */
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user,
    token: token,
    error: null,
    loading: false,
    isLoggedIn: false,
  },
  reducers: {
    loginStart: (state, payload) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;

      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
      state.token = token;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  authSlice.actions;

export default authSlice.reducer;
