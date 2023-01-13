import React from 'react'
// import Image from 'next/image'
// import logo from '../public/images/logo.png'
// import hero from '../public/images/hero.jpg'

function Hero() {
  return (
    <section className="min-h-[calc(70vh-91px)] sm:min-h-[calc(80vh-91px)] w-full text-white relative bg-gray-900 flex xl:rounded-tl-full xl:rounded-br-full overflow-clip mt-[91px]" id="/">
      {/* <Image src={hero} fill className="-z-10 mix-blend-multiply" alt="" /> */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-center w-full">
        <div className="uppercase bold flex flex-col tracking-tighter text-center">
          <p className="text-5xl sm:text-7xl md:text-8xl mb-4 first-letter:text-[#9C9EA0]">
            Helping.
          </p>
          <p className="text-6xl sm:text-8xl md:text-9xl first-letter:text-[#1A8C91]">
            Healing.
          </p>
          <p className="text-8xl sm:text-9xl md:text-[11rem] first-letter:text-[#BDE11A]">
            Caring.
          </p>
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <button className=" bg-[#601A7F] border-none">
              Schedule Appointment
            </button>
            <button>Learn More</button>
          </div>
        </div>
        {/* <Image src={logo} alt="" priority width={600} height={600} /> */}
      </div>
    </section>
  );
}

export default Hero