"use client";

import { setSearchValue } from "@Redux/feature/filterSlice/filterSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="Filter books..."
        className="search"
        id="lws-search"
        onChange={(e) => {
          dispatch(setSearchValue(e.target.value));
        }}
      />
    </>
  );
};

export default SearchInput;
