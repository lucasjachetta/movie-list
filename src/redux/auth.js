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
    HandleLogin: (state, action) => {
      console.log("useData", action);
    },
    HandleLogout: () => {
      localStorage.clear();
    },
  },
});

export const { HandleLogin, HandleLogout } = authSlice.actions;

export default authSlice.reducer;