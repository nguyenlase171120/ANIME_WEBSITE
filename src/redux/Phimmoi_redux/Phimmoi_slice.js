import { createSlice } from "@reduxjs/toolkit";

export const Phimmoi_slice = createSlice({
  name: "/phimmoi/number",
  initialState: {
    number_page: 1,
  },
  reducers: {
    hanldeNumberType: (state, actions) => {
      state.number_page = actions.payload;
    },
  },
});
