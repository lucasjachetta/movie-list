import { createSlice } from "@reduxjs/toolkit";

const initialUser = () => {
  const item = window.localStorage.getItem("userData");
  return item ? JSON.parse(item) : {};
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: initialUser(),
  },
  reducers: {
    handleLogin: (state, action) => {
      console.log("useData", action);
    },
    handleLogout: () => {
      localStorage.clear();
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
