import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Hamburger from "./Hamburger";
import { useEffect } from "react";
import CalendlyButton from "./CalendlyButton";

const navItems = [
  { link: "Home", path: "#/" },
  { link: "About Us", path: "#about-us" },
  { link: "Services", path: "#services" },
  { link: "Contact", path: "#contact" },
  {link: 'Calendly', path: ""},
];

function Navbar() {
  const [open, setOpen] = useState(false);
  // const [_document, setDocument] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style = "scroll";
    }
  }, [open]);

  return (
    <nav
      // className="flex items-center justify-between max-w-[1400px] mx-auto flex-wrap md:flex-nowrap"
      className="flex items-center justify-between max-w-[1400px]  flex-col md:flex-row md:w-full mx-auto"
      open={open}>
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-6 flex-row">
          <Image
            src={logo}
            alt="Omni Addiction & Mental Health Services"
            width={75}
            height={75}
            priority
          />
          <h1 className="text-xl font-semibold text-[#601A7F] hidden xl:block">
            Omni Addiction & Mental Health Services
          </h1>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
        <ul
          // className={
          //   "flex flex-col md:flex-row items-center gap-8 w-full md:w-auto  md:h-full " +
          //   (open
          //     ? "h-[calc(100vh-91px)] p-8 z-10 translate-x-0 justify-center transition-all ease-linear duration-5000"
          //     : "h-0 invisible md:visible ")
          // }>
          // className={
          //   "flex flex-col md:flex-row items-center gap-8 w-full md:w-auto  md:h-full transition-all ease-linear duration-500 " +
          //   (open
          //     ? "h-[calc(100vh-91px)] p-8 z-10 translate-x-0 justify-center transition-all ease-linear duration-500"
          //     : "h-0 invisible md:visible transition-all ease-linear duration-500")
          // }>
          // className={
          //   "flex flex-col md:flex-row items-center gap-8 w-full md:w-auto  md:h-full transition-all ease-linear duration-500 h-[calc(100vh-91px)] p-8 z-10 bg-red-500 absolute top-[91] left-0" +
          //   (open
          //     ? " translate-x-0 justify-center transition-all ease-linear duration-500"
          //     : "translate-x-[100vw] md:transition-x-0 h-0 invisible md:visible")
          // }>
          className={
            "flex flex-col md:flex-row gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[90px] left-0 right-0 h-[calc(100vh-91px)] md:h-auto bg-white transition-all ease-linear duration-500 " +
            (open ? "translate-x-0" : "translate-x-[100vh]")
          }>
          {navItems.map((navItem, index) => {
            const { link, path } = navItem;
            if (link === "Calendly")
              return (
                <li key={index}>
                  <CalendlyButton />
                </li>
              );
            return (
              <li key={index}>
                <Link
                  className="text-2xl md:text-base"
                  href={path}
                  scroll={false}
                  onClick={() => setOpen(false)}>
                  {link}
                </Link>
              </li>
            );
          })}
          {/* <li>
          <CalendlyButton />
        </li> */}
        </ul>
    </nav>
  );
}

export default Navbar;

//transition-all ease-in duration-100 