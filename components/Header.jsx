import React from "react";
import Navbar from "./Navbar";

function Header() {

  return (
    <header className="px-4 py-2 fixed w-full shadow-lg top-0 z-30 bg-white">
      <Navbar />
    </header>
  );
}

export default Header;
