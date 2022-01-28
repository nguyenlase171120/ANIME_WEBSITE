import { createSlice } from "@reduxjs/toolkit";

export const Phimmoi_slice = createSlice({
  name: "/phimmoi/number",
  initialState: {
    number_page: 1,
    number_header: 1,
    anime_details: {},
  },
  reducers: {
    hanldeNumberType: (state, actions) => {
      state.number_page = actions.payload;
    },
    handleNumberHeader: (state, actions) => {
      state.number_header = actions.payload;
    },
    handleDetailsAnime: (state, actions) => {
      state.anime_details = actions.payload;
    },
  },
});
