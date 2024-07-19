import React from "react";
import AddForm from "../ui/add-form";
import { satisfy } from "../ui/fonts";
import clsx from "clsx";

const AddBlog = () => {
  return (
    <div className="container mx-auto flex items-center flex-col">
      <h1
        className={clsx(
          `text-xl sm:text-5xl lg:text-8xl text-center`,
          satisfy.className
        )}
      >
        Add new blog
      </h1>
      <AddForm />
    </div>
  );
};

export default AddBlog;
