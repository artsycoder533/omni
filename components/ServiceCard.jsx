import React from "react";
import Image from "next/image";

function ServiceCard({ title, description, src }) {
  return (
    <div className="shadow-md rounded-xl grid grid-rows-2 max-w-[400px] w-full hover:shadow-2xl hover:-translate-y-5">
      <div className="w-full rounded-t-xl">
        <Image src={src} width={400} height={250} style alt={title} className="rounded-t-xl" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="leading-">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
