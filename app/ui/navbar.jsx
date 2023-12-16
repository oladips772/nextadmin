/** @format */
"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdPublic,
  MdSearch,
  MdOutlineChat,
} from "react-icons/md";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="m-3 rounded p-4 flex items-center bg-darkSoft">
      <span className="font-[500]">{pathname.split("/").pop()}</span>
      <div></div>
    </div>
  );
}

export default Navbar;
