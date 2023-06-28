import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const OnlyPlatform = () => {
  const logos = [
    {
      logo: "/img/logos/airbnb.png",
    },
    {
      logo: "/img/logos/homelike.png",
    },
    {
      logo: "/img/logos/booking.png",
    },
    {
      logo: "/img/logos/abritel.png",
    },
  ];
  return (
    <div className="w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8 py-14 bg-white">
      <h2 className="text-2xl text-dark lg:text-4xl font-semibold mb-7 ">
        Gestion optimale avec les meilleures plateformes
      </h2>
      <h3 className="text-dark font-xs lg:w-8/12 w-full">
        Nous mettons en avant votre bien sur diverses plateformes de location
        pour des séjours de courte et moyenne durée, et ce, de manière
        simultanée.
      </h3>
      <div className="flex justify-between flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.logo}
            alt="logo"
            className="h-24 object-contain my-8"
          />
        ))}
      </div>
    </div>
  );
};

export default OnlyPlatform;
