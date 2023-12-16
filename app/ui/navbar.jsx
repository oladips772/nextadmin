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
    <div className="m-3 rounded p-3 flex items-center justify-between bg-darkSoft">
      <span className="font-[500]">{pathname.split("/").pop()}</span>
      <div className="flex items-center space-x-3">
        {/* search input div */}
        <div className="bg-darkLight flex items-center p-[7px] rounded-[20px] w-[250px]">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search.."
            className="bg-darkLight flex-1 outline-none border-none"
          />
        </div>
        {/* icons div */}
        <div className="flex items-center space-x-3">
          <MdNotifications size={21} />
          <MdPublic size={21} />
          <MdOutlineChat size={21} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
