import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import querySlice from "./querySlice";
import tabsSlice from "./tabsSlice";
import { videosAPI } from "./videosApi";

const store = configureStore({
  reducer: {
    query: querySlice,
    auth: authSlice,
    tabs: tabsSlice,
    [videosAPI.reducerPath]: videosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosAPI.middleware),
});

export default store;
