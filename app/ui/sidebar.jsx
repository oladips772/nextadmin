/** @format */
import React from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";

function Sidebar() {
  // sidebar menu items
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="sticky top-[40px]">
      {/* user info div */}
      <div className="flex items-center mb-2 space-x-2">
        <Image
          src={"/noavatar.png"}
          alt=""
          height={40}
          width={40}
          className="object-contain rounded-full"
        />
        <div className="flex flex-col items-start">
              <span className="text-[14px] font-[600]">Oladipupo Akorede</span>
          <span className="text-whiteSoft text-[13px]">Administrator</span>
        </div>
      </div>
      <ul className="">
        {menuItems.map((item) => (
          <li key={item.title} className="my-2">
            <span className="text-[12px] font-[500]">{item.title}</span>
            {item.list.map((cat) => (
              <MenuLink key={cat.title} item={cat} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
