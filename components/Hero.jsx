import React from "react";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
// import CalendlyButton from "./CalendlyButton";
// import { PopupModal } from "react-calendly";
// import Image from 'next/image'
// import logo from '../public/images/logo.png'
// import hero from '../public/images/hero.jpg'

const heroVariants = {
  hidden: {
    opacity: 0,
    x: -200,
    y: -200,
    // scale: 0.25
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    // scale: 1,
    transition: {
      // delay: 0.5,
      type: "tween",
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.5,
      // stiffness: 30,
    },
  },
};

function Hero() {
  return (
    <section
      className="min-h-[calc(70vh-91px)] sm:min-h-[calc(80vh-91px)] w-full text-white relative bg-gray-900 flex xl:rounded-tl-full xl:rounded-br-full overflow-clip mt-[91px] py-4"
      id="/">
      {/* <Image src={hero} fill className="-z-10 mix-blend-multiply" alt="" /> */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-center w-full mt-[91px] pb-8">
        <motion.div
          className="uppercase bold flex flex-col tracking-tighter text-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}>
          <motion.p
            variants={heroVariants}
            className="text-5xl sm:text-7xl md:text-8xl mb-4 first-letter:text-[#BDE11A]"
            data-replace="{translate-y-12: translate-y-0}">
            Helping.
          </motion.p>
          <motion.p
            variants={heroVariants}
            className="text-6xl sm:text-8xl md:text-9xl first-letter:text-[#1A8C91]">
            Healing.
          </motion.p>
          <motion.p
            variants={heroVariants}
            className="text-8xl sm:text-9xl md:text-[11rem] first-letter:text-[#4A076D]">
            Caring.
          </motion.p>
          <motion.div
            variants={heroVariants}
            className="mt-12 flex flex-col md:flex-row justify-center gap-6 items-center">
            {/* <CalendlyButton /> */}
            <Link
              href="#why-therapy"
              scroll={false}
              className="border px-5 py-4 rounded-md uppercase font-medium tracking-wider hover:text-[#BDE11A] hover:border-[#BDE11A] flex items-center gap-2 animate-bounce">
              Learn More <AiOutlineArrowDown className="text-lg" />
            </Link>
          </motion.div>
        </motion.div>
        {/* <Image src={logo} alt="" priority width={600} height={600} /> */}
      </div>
    </section>
  );
}

export default Hero;
