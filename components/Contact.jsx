import React from "react";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";

function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col gap-8 text-white pt-24 "
      id="contact">
      <h2 className="text-5xl text-center pb-16">Contact Us Today!</h2>
      <div className="flex flex-col xl:flex-row max-w-[1400px] mx-auto w-[90vw] lg:gap-24">
        <Form />
        <div className="flex flex-col mb-16 w-full mt-16">
          <ContactInfo />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
