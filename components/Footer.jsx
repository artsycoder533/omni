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
    link: "FAQ",
    path: "/#faq",
  },
  {
    link: "Contact",
    path: "/#contact",
  },
];

function Footer() {
  const getDate = () => {
    const date = new Date()
    return date.getFullYear()
  }
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="w-[90vw] md:max-w-[1400px] flex flex-col justify-center items-center">
        <Image src={logo} width={300} height={300} />
        <div className="w-full">
          <ul className="w-full border-red-500">
            {footerLinks.map((footerLink, index) => {
              const { link, path } = footerLink;
              return (
                <li key={index} className="py-3">
                  <Link href={path}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-center mt-4">
          Copyright &copy; {getDate()} Omni Addiction & Mental Health Services | All Rights
          Reserved | Website Made By{" "}
          <Link
            href="https://www.natashajohnson.dev"
            target="blank"
            rel="noopener noreferrer"
          className="underline">
            Natasha Johnson
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
