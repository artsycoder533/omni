import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

const footerLinks = [
  {
    link: "About Us",
    path: "/#about-us",
  },
  {
    link: "Our Mission",
    path: "/#our-mission",
  },
  {
    link: "Why Therapy",
    path: "/#why-therapy",
  },
  {
    link: "Services",
    path: "/#services",
  },
  {
    link: "FAQs",
    path: "/#faqs",
  },
  {
    link: "Contact",
    path: "/#contact",
  },
];

function Footer() {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="flex flex-col justify-center items-center sticky top-full bg-black text-white py-4">
      <div className="w-[90vw] md:max-w-[1400px] flex flex-col gap-6 lg:flex-row justify-center md:justify-between items-center ">
        <Image src={logo} width={275} height={275} alt="" />
        <div className="w-full md:w-auto">
          <ul className="w-full md:w-auto grid grid-cols-2 md:gap-x-24">
            {footerLinks.map((footerLink, index) => {
              const { link, path } = footerLink;
              return (
                <li key={index} className="py-3">
                  <Link
                    href={path}
                    scroll={false}
                    className="hover:underline py-2 hover:text-[#1A8B90]">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <address className="text-center py-3 flex flex-col gap-3">
            <p>Omni Addiction & Mental Health Services</p>
            <p>102 E. Hicks Street</p>
            <p>Suite 100</p>
            <p>Lawrenceville, Va 23868</p>
          </address>
        </div>
      </div>
      <p className="text-center mt-4 w-[90vw] md:max-w-[1400px] p-2">
        Copyright &copy; {getDate()} Omni Addiction & Mental Health Services |
        All Rights Reserved | Website Made By{" "}
        <Link
          href="https://www.natashajohnson.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline py-2 hover:text-[#1A8B90]">
          Natasha Johnson
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
//