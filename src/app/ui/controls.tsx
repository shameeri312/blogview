"use clent";
import clsx from "clsx";
import { fetchCategories } from "../lib/data";
import React from "react";
import Button from "./button";

const Controls = async () => {
  const categories = await fetchCategories();
  console.log(categories);

  return (
    <div>
      <ul className="flex gap-5 justify-center pt-5">
        {categories?.map((category, i) => {
          return (
            <Button
              key={i}
              category_id={category.category_id}
              name={category.name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Controls;
