import { createSlice } from "@reduxjs/toolkit";

const initialUser = () => {
  const item = window.localStorage.getItem("userData");
  return item ? JSON.parse(item) : {};
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: initialUser(),
    logged: false,
    loginError: false,
  },

  reducers: {
    
    SetLoginError: (state, action) => {
        state.loginError = action.payload
    },

    HandleLogin: (state, action) => {
      state.logged = false  
      state.loginError = false  
      console.log("action.payload => ", action.payload)

      if (action.payload.email === 'lucas@gmail.com' && action.payload.password==='123456ljp'){
        
        console.log("login correto")
        state.logged = true
      } else {
        console.log("login invalido")
        state.loginError = true
      }
      
    },
    HandleLogout: () => {
      localStorage.clear();
    },
  },
});

export const { HandleLogin, HandleLogout, SetLoginError } = authSlice.actions;

export default authSlice.reducer;

