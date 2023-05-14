"use client";
import { configureStore } from "@reduxjs/toolkit";
import filterValueSlice from "./feature/filterSlice/filterSlice";
import apiSlice from "./feature/apiSlice/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterValueSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
