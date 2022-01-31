import { configureStore } from "@reduxjs/toolkit";
import { Phimmoi_slice } from "./Phimmoi_redux/Phimmoi_slice";

//This library used to save redux state when we are refresh website
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pagination_slice } from "./Phimmoi_redux/Pagination_slice";
import { Search_slice } from "./Phimmoi_redux/Search_slice";
import { UserLogin_slice } from "./User/UserLogin_slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Phimmoi_slice.reducer);

export const anime_store = configureStore({
  reducer: {
    store_number: persistedReducer,
    store_anime: pagination_slice.reducer,
    store_search: Search_slice.reducer,
    store_user: UserLogin_slice.reducer,
  },
});
export const persistor = persistStore(anime_store);
