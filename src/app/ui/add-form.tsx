import React from "react";

const AddForm = () => {
  return (
    <div className=" w-full ">
      <form
        action=""
        className="flex flex-col items-center mx-auto gap-5 w-3/4 py-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-gray-100 rounded-md w-2/5 p-5 outline-none"
        />
        <div className="relative w-2/5">
          <select
            id="category"
            name="categoryId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-5 text-sm "
            defaultValue=""
          >
            <option value="">Select a category</option>
            {/* {categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))} */}
          </select>
        </div>
        <textarea
          name="blog"
          id="newBlog"
          className="w-2/5 outline-none h-80 rounded-lg p-5 bg-gray-100"
          placeholder="Your blog here..."
        ></textarea>
      </form>
    </div>
  );
};

export default AddForm;
