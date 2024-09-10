import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    token: "",
    role: "",
    // cId: "",
    isAuthenticated: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    // setId: (state, action) => {
    //   state.cId = action.payload;
    // },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearAuth: (state) => {
      state.email = "";
      state.token = "";
      state.role = "";
      state.isAuthenticated = false;
    },
  },
});

export const {
  setEmail,
  setToken,
  setRole,
  // setId,
  setIsAuthenticated,
  clearAuth,
} = authSlice.actions;
export default authSlice.reducer;
