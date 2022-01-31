import { createSlice } from "@reduxjs/toolkit";

export const Search_slice = createSlice({
  name: "/search-film",
  initialState: {
    listFilm_search: {},
  },
  reducers: {
    handleSearchFilm: (state, actions) => {
      state.listFilm_search = actions.payload;
    },
  },
});
