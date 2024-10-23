import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1  bg-slate-500">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
