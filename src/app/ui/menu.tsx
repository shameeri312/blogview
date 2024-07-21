"use client";
import clsx from "clsx";
import React, { useState } from "react";
import styles from "./css/menu.module.css";

const Menu = ({ state }: { state: boolean }) => {
  const [menuState, changeState] = useState(false);
  const handleChange = () => {
    changeState(!state);
  };

  return (
    <div
      className={clsx(
        `flex flex-col justify-between transition-all items-stretch`,
        styles.menu
      )}
      onClick={handleChange}
    >
      <span
        className={clsx(
          "transition-all duration-75",
          {
            "opacity-0 mt-[14px]": menuState,
            "mt-0 opacity-100": !menuState,
          },
          styles.line
        )}
      ></span>
      <span
        className={clsx(
          {
            "justify-center": menuState,
            "justify-between": !menuState,
          },
          styles.line
        )}
      ></span>
      <span
        className={clsx(
          "transition-all duration-75",
          {
            "opacity-0 mb-[14px]": menuState,
            "mb-0 opacity-100": !menuState,
          },
          styles.line
        )}
      ></span>
    </div>
  );
};

export default Menu;
