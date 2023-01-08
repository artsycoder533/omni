import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Hamburger from "./Hamburger";

const navItems = [
  { link: "Home", path: "/#home" },
  { link: "About Us", path: "/#about-us" },
  { link: "Services", path: "/#services" },
  { link: "Contact", path: "/#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between max-w-[1400px] mx-auto flex-wrap md:flex-nowrap"
      open={open}>
      <Image
        src={logo}
        alt="Omni Addiction & Mental Health Services"
        width={75}
        height={75}
        priority
      />
      <Hamburger open={open} setOpen={setOpen} />
      <ul
        className={
          "flex flex-col md:flex-row items-center gap-6 w-full md:w-auto transition-all ease-in duration-200 md:h-full " +
          (open
            ? "h-full p-8 z-10"
            : "h-0 invisible md:visible transition-all ease-in duration-200")
        }>
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link className="font-semibold tracking-wide text-lg" href={path}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
