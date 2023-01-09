import React from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'

function Hero() {
  return (
    <section className="min-h-[calc(50vh-91px)] items-center w-full py-4 bg-black text-white">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Image src={logo} priority />
        <div>
          <h1 className="uppercase bold text-6xl">"Helping. Healing. Caring."</h1>
          <div className="mt-6 flex gap-4">
            <button>Schedule Appointment</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero