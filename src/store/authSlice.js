import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  user: {
    username: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUsername: (state, action) => {
      state.user.username = action.payload;
    }
  },
});

export const { login, logout, updateUsername } = authSlice.actions;
export default authSlice.reducer;
