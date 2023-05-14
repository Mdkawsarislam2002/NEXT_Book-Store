"use client";

//  components
import HomeSingleBooks from "./HomeSingleBooks";
import { useGetBooksQuery } from "@Redux/feature/apiSlice/apiSlice";

const RenderBooks = () => {
  const { data, isSuccess, error } = useGetBooksQuery({
    filter: "all",
    searchQuery: "",
  });

  console.warn(error);
  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {isSuccess &&
          data?.map((book) => <HomeSingleBooks key={book.id} data={book} />)}
      </div>
    </>
  );
};

export default RenderBooks;
