"use client";
import { useAddBookMutation } from "@Redux/feature/apiSlice/apiSlice";
import React, { useState } from "react";

const AddBooks = () => {
  const [addBook, { isSuccess, error, isError }] = useAddBookMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const FormDataHandler = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "thumbnail":
        setThumbnail(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "featured":
        setFeatured((pre) => !pre);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook({ name, author, thumbnail, price, rating, featured });
  };

  return (
    <>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-bookName"
                  name="name"
                  value={name}
                  onChange={(e) => FormDataHandler(e.target.value, "name")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-author"
                  name="author"
                  value={author}
                  onChange={(e) => FormDataHandler(e.target.value, "author")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={(e) => FormDataHandler(e.target.value, "thumbnail")}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="lws-price">Price</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-price"
                    name="price"
                    value={price}
                    onChange={(e) => FormDataHandler(e.target.value, "price")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lws-rating">Rating</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => FormDataHandler(e.target.value, "rating")}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={featured}
                  onChange={(e) => FormDataHandler(e.target.value, "featured")}
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm">
                  This is a featured book{" "}
                </label>
              </div>

              <button type="submit" className="submit" id="lws-submit">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddBooks;
