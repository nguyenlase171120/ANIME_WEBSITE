import { configureStore } from "@reduxjs/toolkit";
import { Phimmoi_slice } from "./Phimmoi_redux/Phimmoi_slice";

export const anime_store = configureStore({
  reducer: {
    store_number: Phimmoi_slice.reducer,
  },
});
