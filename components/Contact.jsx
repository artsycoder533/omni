import React from "react";

import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";

function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col gap-8 text-white pt-24 "
      id="contact">
      <h2 className="text-5xl text-center pb-16">Contact Us Today!</h2>
      <div className="flex flex-col xl:flex-row max-w-[1400px] mx-auto w-[90vw] lg:gap-24">
        <form
          name="omni"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify
          className="w-full">
          <input type="hidden" name="form-name" value="omni" />
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="email" required />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required></textarea>
          </div>
          <p>Terms of Use</p>
          <p>
            By submitting this form via this web portal, you acknowledge and
            accept that risks of communicating your health information via this
            unencrypted email and electronic messaging and wish to continue
            despite those risks. By clicking &quot;Yes, I want to submit this
            form&quot;, you agree to hold Omni Addiction & Mental Health
            Services harmless for unauthorized use, disclosure, or access of
            your protected health information sent via this electronic means.
          </p>
          <button
            type="submit"
            className="bg-[#1A8C91] border-none my-6 self-end">
            Send Message
          </button>
        </form>
        <div className="flex flex-col mb-16 w-full">
          <ContactInfo />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
