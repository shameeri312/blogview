import clsx from "clsx";
import React, { ReactNode } from "react";
import { satisfy } from "../ui/fonts";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="">
        <div className="flex flex-col items-center relative">
          <h1
            className={clsx(`text-3xl  lg:text-5xl inline`, satisfy.className)}
          >
            Blog View
          </h1>
        </div>
        {children}
      </main>
    </>
  );
};

export default Layout;
