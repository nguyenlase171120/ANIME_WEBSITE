import { createSlice } from "@reduxjs/toolkit";

export const pagination_slice = createSlice({
  name: "/phimmoi/pagination",
  initialState: {
    listAnime_pagination: {
      name: "",
      list_anime: [],
    },
    number_pagination: 0,
    number_page: 1,
  },
  reducers: {
    handleListPaging: (state, actions) => {
      state.listAnime_pagination = actions.payload;
    },
    handlePaging: (state, actions) => {
      state.number_pagination = actions.payload;
    },
    handleNumberType: (state, actions) => {
      state.number_page = actions.payload;
    },
  },
});
