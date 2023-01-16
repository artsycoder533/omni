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
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [_document, setDocument] = useState(null)

  useEffect(() => {
if (open) {
  document.body.style.overflow = "hidden";
} else {
  document.body.style = "scroll";
}
    // setDocument(document)
  }, [open])

  // if (open) _document.body.style.overflow = "hidden"
  // else _document.body.style = "scroll"

  return (
    <nav
      className="flex items-center justify-between max-w-[1400px] mx-auto flex-wrap md:flex-nowrap"
      open={open}>
      <div className="flex items-center gap-6">
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
      <ul
        className={
          "flex flex-col md:flex-row items-center gap-8 w-full md:w-auto transition-all ease-in-out duration-200 md:h-full " +
          (open
            ? "h-[calc(100vh-91px)] p-8 z-10 translate-x-0 justify-center"
            : "h-0 translate-x-[-100] invisible md:visible transition-all ease-in duration-200")
        }>
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link className={"font-normal tracking-wide py-3 text-lg " + (open ? "text-2xl" : "")} href={path} scroll={false} onClick={() => setOpen(false)}>
                {link}
              </Link>
            </li>
          );
        })}
        <li><CalendlyButton/></li>
      </ul>
    </nav>
  );
}

export default Navbar;
