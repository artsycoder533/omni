import React from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import hero from '../public/images/hero.jpg'

function Hero() {
  return (
    <section className="min-h-[calc(100vh-91px)] w-full text-white relative bg-gray-900 opacity-90 flex rounded-br-full overflow-clip">
      <Image src={hero} fill className="-z-10 mix-blend-multiply" alt="" />
      <div className="max-w-[1400px] mx-auto flex items-center w-full justify-between self-center">
        <div>
          <h1 className="uppercase bold flex flex-col tracking-tighter">
            <span className="text-8xl mb-4 first-letter:text-[#9C9EA0]">
              Helping.
            </span>
            <span className="text-9xl first-letter:text-[#1A8C91]">
              Healing.
            </span>
            <span className="text-[10rem] first-letter:text-[#BDE11A]">
              Caring.
            </span>
          </h1>
          <div className="mt-12 flex gap-6">
            <button className="bg-[#601A7F] border-none">
              Schedule Appointment
            </button>
            <button>Learn More</button>
          </div>
        </div>
        <Image src={logo} alt="" priority width={600} height={600} />
      </div>
     
    </section>
  );
}

export default Hero