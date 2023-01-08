import React from "react";

function Hamburger({ open, setOpen }) {
  return (
    <button
      aria-label="menu"
      aria-haspopup="menu"
      tabIndex="0"
      onClick={() => setOpen(!open)}
      className="w-11 h-11 flex flex-col justify-center relative md:hidden">
      <span
        className={
          "w-full h-[4px] bg-black rounded-lg transition-all ease-in duration-300 absolute " +
          (open ? "origin-center rotate-[400deg]" : "translate-y-[-14px]")
        }></span>
      <span
        className={
          "w-full h-[4px] bg-black rounded-lg transition-opacity " +
          (open ? "opacity-0" : "opacity-100")
        }></span>
      <span
        className={
          "w-full h-[4px] bg-black rounded-lg transition-all ease-in duration-300 absolute " +
          (open ? "origin-center -rotate-45 bg-white" : "translate-y-[14px]")
        }></span>
    </button>
  );
}

export default Hamburger;
