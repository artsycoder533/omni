import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between text-white pt-24"
      id="contact">
      <h2 className="text-5xl text-center pb-16">Contact Us Today!</h2>
      <div className="flex flex-col xl:flex-row max-w-[1400px] mx-auto w-[90vw]  lg:gap-24">
        <form className="flex flex-col max-w-[600px] mx-auto pb-16 gap-8">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="email" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"></textarea>
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
        <div className="flex flex-col mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2  w-full justify-between">
            <div className="flex flex-col justify-center items-center p-4 sm:bg-[#018183]">
              <h3 className="flex gap-3">
                <FaPhone className="text-7xl text-[#BDE11A] mb-2" />
              </h3>
              <span>
                <a href="tel:4342535617">(434)-253-5617</a>
              </span>
            </div>
            <div className=" border-[#1A8C91] flex flex-col justify-center items-center p-4">
              <h3 className="flex gap-3">
                <FaEnvelope className="text-7xl text-[#BDE11A]" />
              </h3>
              <span>
                <a href="mailto:lateshia@omniamh.com">lateshia@omniamh.com</a>
              </span>
            </div>
            <div className=" border-[#1A8C91] flex flex-col justify-center items-center p-4">
              <h3 className="flex gap-3">
                <FaClock className="text-7xl text-[#BDE11A] mb-2" />
              </h3>
              <span>Mon - Fri: 8:00AM to 5:00PM</span>
            </div>
            <div className="sm:bg-[#018183] flex flex-col justify-center items-center p-4">
              <h3 className="flex gap-3">
                <FaMapMarkerAlt className="text-7xl text-[#BDE11A] mb-2" />
              </h3>
              <address className="flex flex-col text-center">
                <span>Omni Addiction & Mental Health Services</span>
                <span>102 E. Hicks Street</span>
                <span>Suite 100</span>
                <span>Lawrenceville, VA 23868</span>
              </address>
            </div>
          </div>
          <div className="w-full h-full border flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.1357566116162!2d-77.8472817269141!3d36.75753845973171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1fead4f77a1cf%3A0x5600f0733181897c!2s102%20Hicks%20St%2C%20Lawrenceville%2C%20VA%2023868!5e0!3m2!1sen!2sus!4v1673569610207!5m2!1sen!2sus"
              allowFullScreen=""
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
