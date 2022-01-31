import { createSlice } from "@reduxjs/toolkit";

export const UserLogin_slice = createSlice({
  name: "/userLogin",
  initialState: {
    user_profile: [
      {
        email: "admin@gmail.com",
        password: "Admin123",
        name: "admin",
      },
    ],
  },
  reducers: {
    handleUserProfile: (state, actions) => {
      state.user_profile.push(actions.payload);
    },
  },
});
