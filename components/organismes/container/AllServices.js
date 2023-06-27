import React from "react";
import Pourcentage from "../../organismes/vignettes/Pourcentage";

const AllServices = () => {
  return (
    <section className="w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8 py-10">
      <h2 className="text-2xl text-dark lg:text-4xl font-semibold mb-7 ">
        Un service complet et exigeant de gestion Airbnb
      </h2>
      <h3 className="text-dark font-xs lg:w-8/12 w-full">
        Nous avons créé un service complet de prestations vous permettant de
        profiter de votre séjour tout en maximisant vos revenus locatifs.
      </h3>
      <div>
        <div>
          <Pourcentage />
        </div>
      </div>
    </section>
  );
};

export default AllServices;
