import Image from "next/image";
import Navbar from "./ui/navbar";
import clsx from "clsx";
import { satisfy } from "./ui/fonts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <h1
          className={clsx(
            `text-xl sm:text-5xl lg:text-8xl text-center`,
            satisfy.className
          )}
        >
          Blog Views
        </h1>
      </div>
    </main>
  );
}
