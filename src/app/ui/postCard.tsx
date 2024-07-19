import React from "react";
import { getFirst20Words } from "../lib/utils";
import Image from "next/image";
import { fetchBlogs } from "../lib/data";
import { Posts } from "../lib/definitions";
import { format, getDate } from "date-fns";
import { FaBookBookmark, FaStar } from "react-icons/fa6";

export const CardWrapper = async () => {
  const blogs = await fetchBlogs();
  return (
    <div className="container mx-auto border grid grid-cols-4 gap-5 py-10">
      {blogs?.map((blog) => {
        return (
          <div key={blog.post_id}>
            <Card
              title={blog.title}
              content={blog.content}
              user_name={blog.user_name}
              category_name={blog.category_name}
              post_id={0}
              user_id={0}
              created_at={format(new Date(blog.created_at), "MMMM d, yyyy")}
              updated_at={""}
              category_id={0}
            />
          </div>
        );
      })}
    </div>
  );
};

const Card = ({
  title,
  content,
  user_name,
  category_name,
  created_at,
}: Posts) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2 p-4 border border-slate-600 rounded-xl h-full">
      <div className="flex flex-col items-start gap-2">
        <h3 className="bg-slate-500 py-[1px] px-2 rounded-full text-sm text-white">
          {category_name}
        </h3>
        <h1 className="font-bold">{title}</h1>
      </div>
      <p className="text-[13px]">{getFirst20Words(content)}</p>
      <div className="flex gap-2 justify-between">
        <Image src={"/user.svg"} alt="vercel logo" width={32} height={32} />
        <div className="flex justify-between ">
          <p className="flex flex-col ">
            <h2 className="text-sm font-bold capitalize">{user_name}</h2>
            <span className="text-[10px]">{created_at}</span>
          </p>
          <FaStar />
        </div>
      </div>
    </div>
  );
};
