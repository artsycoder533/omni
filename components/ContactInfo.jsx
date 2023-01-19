import React from 'react'
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2  w-full justify-between md:mt-16 lg:mt-0">
      <div className="flex flex-col gap-4 items-center p-4">
        <h3 className="flex gap-3">
          <FaPhone className="text-7xl text-[#BDE11A] mb-2" />
        </h3>
        <span>
          <a className="hover:text-[#1A8B90]" href="tel:4342535617">
            (434)-253-5617
          </a>
        </span>
      </div>
      <div className="  flex flex-col gap-4 items-center p-4">
        <h3 className="flex gap-3">
          <FaEnvelope className="text-7xl text-[#BDE11A]" />
        </h3>
        <span>
          <a
            className="hover:text-[#1A8B90]"
            href="mailto:lateshia@omniamh.com">
            lateshia@omniamh.com
          </a>
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center p-4">
        <h3 className="flex gap-3">
          <FaClock className="text-7xl text-[#BDE11A] mb-2" />
        </h3>
        <div className="flex flex-col text-center">
          <span>Mon - Thurs: 9:00AM to 6:00PM</span>
          <span>Fri - 9:00AM to 1:00PM</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center p-4">
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
  );
}

export default ContactInfo