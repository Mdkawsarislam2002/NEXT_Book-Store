"use client";
const { createSlice } = require("@reduxjs/toolkit");

const filterValueSlice = createSlice({
  name: "filterValue",
  initialState: {
    value: "",
  },
});

export default filterValueSlice;
