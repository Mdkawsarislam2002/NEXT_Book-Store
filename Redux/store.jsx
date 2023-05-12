"use client";
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./feature/apiSlice/apiSlice";
import filterValueSlice from "./feature/filterValueSlice/filterValueSlice";

const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    filterValueSlice: filterValueSlice.reducer,
  },
  // middleware: (defaultMiddleware) =>
  //   defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
