/** @format */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-3 flex flex-row items-center space-x-3 hover:bg-[#2e374a] rounded my-1 ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
