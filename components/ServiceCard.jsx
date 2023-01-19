import React from "react";
import Image from "next/image";

function ServiceCard({ title, description, src }) {
  return (
    <div className="shadow-md rounded-lg flex flex-col max-w-[400px] w-full h-[450px] hover:shadow-xl hover:-translate-y-5">
      <div className="w-full rounded-t-xl flex-1 relative border">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4 h-[200px] border">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="leading-">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;