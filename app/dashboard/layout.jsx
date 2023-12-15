/** @format */
import React from "react";
import Sidebar from "../ui/sidebar";
import Navbar from "../ui/navbar";

function Layout({ children }) {
  return (
    <div className="flex">
      <di className="flex-1 bg-darkSoft p-[20px]">
        <Sidebar />
      </di>
      <div className="flex-[4]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
