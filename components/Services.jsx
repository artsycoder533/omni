import React from 'react'
import ServiceCard from './ServiceCard';
import individual from '../public/images/individual.jpg'
import group from '../public/images/group.jpg'
import family from '../public/images/family.jpg'
import supervision from '../public/images/supervision.jpg'
import { GiCheckMark } from "react-icons/gi";

function Services() {

  const services = [
    {
      title: "Individual Therapy",
      description:
        "Offers one-on-one attention and customized treatment at the pace of each individual.",
      src: individual,
    },
    {
      title: "Group Therapy",
      description:
        "Offers the insight, guidance, and support of others with similar issues. These types of groups might include Substance use recovery, Anger Management, and Grief groups.",
      src: group,
    },
    {
      title: "Family Therapy",
      description:
        "Offers opportunities to develop or increase honest communication and conflict resolution within family systems.",
      src: family,
    },
    {
      title: "CSAC Supervision",
      description:
        "Offers one on one supervision toward meeting the requirements set forth by the Commonwealth of VA for those seeking to earn certification as a Substance Abuse Counselor.",
      src: supervision,
    },
  ];
  return (
      <div className="bg-white min-h-screen pt-24" id="services">
        <div className="w-[90vw] max-w-[1400px] mx-auto flex flex-col items-center justify-between pb-24">
          <h2 className="text-5xl text-center pb-16">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              return <ServiceCard key={index} {...service} />;
            })}
          </div>
          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#BDE11A] rounded-md hover:bg-white group border-none text-white mt-16">
            {/* purple box */}
            <span className="w-0 h-0 rounded-md bg-[#601A7F] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:border-[#601A7F] border"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 border-none">
              Schedule Appointment
            </span>
          </button>
          <h3 className="text-4xl text-center py-12">Coming Soon...</h3>        
          <ul className="w-[90vw] max-w-[1400px] mx-auto flex flex-col justify-center items-center gap-4 text-center list-style-none">
            <li className="flex gap-2">
              <GiCheckMark className="text-[#BDE11A]" /> VASAP (Virginia Alcohol
              Safety Action Program) Classes
            </li>
            <li className="flex gap-2">
              <GiCheckMark className="text-[#BDE11A]" />
              LPC Supervision
            </li>
            <li className="flex gap-2">
              <GiCheckMark className="text-[#BDE11A]" />
              LSATP Supervision
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Services