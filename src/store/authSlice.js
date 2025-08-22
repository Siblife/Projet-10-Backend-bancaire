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
      state.user = {
        username: action.payload.username,
        firstname: action.payload.firstName,
        lastname: action.payload.lastName
      };
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUsername: (state, action) => {
      state.user.username = action.payload;
    },
    setUserProfile: (state, action) => {
      state.user = {
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    },
  },
});

export const { login, logout, updateUsername, setUserProfile } = authSlice.actions;
export default authSlice.reducer;
