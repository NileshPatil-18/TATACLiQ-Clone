import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null, 
    isLoggedIn: false
   },
  reducers:{
    signup: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(action.payload));
    localStorage.setItem("isLoggedIn","true");
  },
  
  
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    localStorage.setItem("isLoggedIn","true");
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn","false");
    },
    
  },
});

export const { login, logout,signup } = authSlice.actions;
export default authSlice.reducer;