/** @format */
import React from "react";
import Sidebar from "../ui/sidebar";
import Navbar from "../ui/navbar";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default Layout;
