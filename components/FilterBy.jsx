"use client";

import { setSortBy } from "@Redux/feature/filterSlice/filterSlice";
import { useSelector, useDispatch } from "react-redux";

const FilterBy = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state?.filter?.sortBy);

  console.log(sortBy);
  return (
    <>
      <button
        className={`lws-filter-btn transition-all  ${
          sortBy === "all" && "active-filter"
        }`}
        onClick={() => {
          dispatch(setSortBy("all"));
        }}
      >
        All
      </button>
      <button
        className={`lws-filter-btn  transition-all  ${
          sortBy === "featured" && "active-filter"
        }`}
        onClick={() => {
          dispatch(setSortBy("featured"));
        }}
      >
        Featured
      </button>
    </>
  );
};

export default FilterBy;
