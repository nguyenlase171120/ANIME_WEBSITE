import { createSlice } from "@reduxjs/toolkit";

export const Phimmoi_slice = createSlice({
  name: "/phimmoi/number",
  initialState: {
    number_header: 1,
    anime_details: {},
    user_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNjAiLCJuYmYiOjE2NDM1MjAwMTgsImV4cCI6MTY0NjExMjAxOCwiaWF0IjoxNjQzNTIwMDE4fQ.hv3jvMLsItFVOJ1JR4-_gRGEc7VchfDc5rIqt_rL58g",
  },
  reducers: {
    handleNumberHeader: (state, actions) => {
      state.number_header = actions.payload;
    },
    handleDetailsAnime: (state, actions) => {
      state.anime_details = actions.payload;
    },
  },
});
