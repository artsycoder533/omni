import React from 'react'
import ServiceCard from './ServiceCard';
import individual from '../public/images/individual.jpg'
import group from '../public/images/group.jpg'
import family from '../public/images/family.jpg'
import supervision from '../public/images/supervision.jpg'

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
    <div className="bg-white min-h-screen" id="services">
      <div className="w-[90vw] max-w-[1400px] mx-auto flex flex-col border-b-2 pb-16">
        <h2 className="text-5xl text-center py-16">Our Services</h2>
        <div className="flex gap-8 flex-wrap justify-center">
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} />;
          })}
        </div>
        <button className="bg-[#4A076D] text-white self-center my-8">
          Schedule Apppointment
        </button>
        <h3 className="text-4xl text-center py-16">Coming Soon...</h3>

        <ul className="w-[90vw] flex flex-col md:flex-row justify-center gap-4 md:gap-16 list-disc list-inside">
          <li>VASAP (Virginia Alcohol Safety Action Program) Classes</li>
          <li>LPC Supervision</li>
          <li>LSATP Supervision</li>
        </ul>
      </div>
    </div>
  );
}

export default Services

//grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 xl:grid-cols-4 gap-8