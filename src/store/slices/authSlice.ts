import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null, // Store user data like name, email, etc.
    token: null, // JWT or session token
  },
  reducers: {
    login(state, action) {
      const { user, accessToken } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = accessToken;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
