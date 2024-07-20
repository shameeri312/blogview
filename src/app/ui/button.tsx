"use client";
import React, { useEffect, useState } from "react";
import { Categories } from "../lib/definitions";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { revalidatePath } from "next/cache";

const Button = ({ category_id, name }: Categories) => {
  const [active, setActive] = useState<number>(0);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = (category_id: number) => {
    const params = new URLSearchParams(searchParams);

    if (category_id) {
      params.set("postId", JSON.stringify(category_id));
    } else {
      params.delete("postId");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(searchParams.get("postId")?.toString());
  };

  useEffect(() => {
    const postId = searchParams.get("postId");
    if (postId) {
      setActive(Number(postId));
    } else {
      setActive(0);
    }
  }, [searchParams]);

  return (
    <button
      onClick={() => handleClick(category_id)}
      className={clsx("border border-slate-500/30 rounded-full px-3 py-[2px]", {
        "bg-slate-500/70 text-white": category_id === active,
        "text-slate-500": category_id !== active,
      })}
    >
      {name}
    </button>
  );
};

export default Button;
