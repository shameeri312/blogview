import { getFirst20Words } from "../lib/utils";
import Image from "next/image";
import { fetchBlogs } from "../lib/data";
import { Posts } from "../lib/definitions";
import { format } from "date-fns";
import { FaBookmark } from "react-icons/fa6";

export const CardWrapper = async ({ id }: { id: number }) => {
  console.log("Fetched id is:" + id);
  const blogs = await fetchBlogs(id);

  return (
    <div className="container mx-auto gap-5 px-10 sm:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {blogs?.map((blog) => {
        return (
          <div key={blog.post_id}>
            <Card
              title={blog.title}
              content={blog.content}
              user_name={blog.user_name}
              category_name={blog.category_name}
              post_id={blog.post_id}
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
  post_id,
  content,
  user_name,
  category_name,
  created_at,
}: Posts) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2 p-4 border bg-slate-100/0 border-slate-600/10 shadow-lg shadow-slate-300/70 rounded-xl h-full">
      <div className="flex flex-col items-start gap-2">
        <h3 className="bg-slate-400 py-[1px] px-3 rounded-full text-sm text-white sm:text-base md:text-base">
          {category_name}
        </h3>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">{title}</h1>
      </div>
      <div className="h-full">
        <p className="text-[13px] sm:text-sm md:text-base">
          {getFirst20Words(content)}
        </p>
      </div>
      <p className="border-2 w-full"></p>
      <div className="flex gap-2 justify-between w-full">
        <Image src={"/user.svg"} alt="user icon" width={32} height={32} />
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h2 className="text-sm font-bold capitalize sm:text-base">
              {user_name}
            </h2>
            <span className="sm:text-xs">{created_at}</span>
          </div>
          <FaBookmark className="text-slate-600/40" />
        </div>
      </div>
    </div>
  );
};
