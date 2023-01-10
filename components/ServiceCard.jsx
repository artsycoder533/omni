import React from "react";
import Image from "next/image";

function ServiceCard({ title, description, src }) {
  return (
    <div className="border rounded-xl flex flex-col w-[300px]">
      <div className="w-full border-t-xl">
        <Image src={src} w={300} height={200} alt={title} className="w-auto rounded-t-xl" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="leading-">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
