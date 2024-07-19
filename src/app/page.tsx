import clsx from "clsx";
import { satisfy } from "./ui/fonts";
import Posts from "./ui/posts";
import Controls from "./ui/controls";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="flex flex-col items-center relative">
          <h1
            className={clsx(
              `text-xl sm:text-3xl lg:text-5xl inline`,
              satisfy.className
            )}
          >
            Blog View
          </h1>
          <Controls />
        </div>
      </main>
      <Posts />
    </>
  );
}
