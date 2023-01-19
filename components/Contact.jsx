import React from "react";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";

function Contact() {
  return (
    <div
      className="flex flex-col gap-8 text-white pt-24 pb-24"
      id="contact">
      <h2 className="text-5xl text-center pb-16">Contact Us!</h2>
      <div className="flex flex-col xl:flex-row max-w-[1400px] mx-auto w-[90vw] lg:gap-24">
        <Form />
        <div className="flex flex-col  w-full mt-16 md:mt-0 pb-16 xl:pb-0">
          <ContactInfo />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
