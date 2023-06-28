import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      onLign: {
        title: "Gestion en ligne",
        prestation: [
          "Gestion des reservations",
          "Gestion des photos",
          "Création d'annonce",
          "optimisation des prix",
          "Experience unique",
        ],
      },
    },
    {
      gestion: {
        title: "Gestion des voyageurs",
        prestation: [
          "Selection des voyageurs",
          "Check-in / Check-out",
          "Echange avec les voyageurs",
          "Linge et consommable",
          "Experience unique",
        ],
      },
    },
    {
      immobilier: {
        title: "Gestion immobiliere",
        prestation: [
          "Ménage",
          "Entretien",
          "Conseils et optimisation",
          "Contact humain",
          "Experience unique",
        ],
      },
    },
  ];
  return (
    <div className="xl:w-9/12 flex w-full xl:ml-24  sm:justify-between justify-center xl:mt-0 mt-10 flex-wrap">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row mb-10 relative `}
        >
          {Object.keys(service).map((key) => (
            <div key={key} className="">
              <h4 className="text-2xl text-dark font-semibold mb-7">
                {service[key].title}
              </h4>
              <ul className="text-dark font-xs">
                {service[key].prestation.map((presta, index) => (
                  <li key={index} className="flex items-center mb-3">
                    <CheckIcon className="h-5 w-5 mr-3 text-orange" />
                    {presta}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Services;
