"use client";
import React, { useState } from "react";
import { PiHouse } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./menu";
import clsx from "clsx";
import Navlinks from "./navlinks";
import Link from "next/link";

const variants = {
  open: { opacity: 1, zIndex: 1 },
  closed: { opacity: 0, zIndex: -1 },
};

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      <header className="bg-slate-300 w-full flex flex-col">
        <nav className="z-10 w-full px-6 sm:px-10 bg-white h-[15vh] flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <PiHouse className="text-5xl" />
            </Link>
          </div>

          <div onClick={toggleMenu}>
            <Menu state={show} />
          </div>
        </nav>
        <motion.div
          className={clsx(
            "w-full bg-white grid place-content-center h-[85vh] p-20 absolute bottom-0 z-20"
          )}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          exit={{ opacity: 0 }}
        >
          <div
            className="border"
            onClick={() => {
              setShow(!show);
              setIsOpen(!isOpen);
            }}
          >
            <Navlinks />
          </div>
          <h1 className="absolute bottom-0 w-full text-center text-gray-700 py-10 underline">
            COPYRIGHT©2024
          </h1>
        </motion.div>
      </header>
    </AnimatePresence>
  );
};

export default Navbar;
