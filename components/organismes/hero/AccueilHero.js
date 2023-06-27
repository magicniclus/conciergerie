import React from "react";
import ButtonWithoutBorder from "../../atomes/button/ButtonWithoutBorder";

const AccueilHero = () => {
  return (
    <div className="w-full max-w-[1450px] relative mx-auto">
      <div className="px-3 xs:px-6 lg:px-8 pb-5 rounded-lg lg:flex lg:flex-col">
        <img
          src="/img/background/accueil.png"
          className="lg:max-h-[700px] lg:h-full h-96 h w-full object-cover rounded-lg relative z-10"
        />
        <div
          className="lg:bg-beige lg:absolute z-20 bottom-7 lg:bottom-10 lg:left-16 lg:flex flex-col lg:w-4/12 xs:w-10/12 py-10 lg:pl-6 "
          style={{ borderRadius: "0 170px 0 0" }}
        >
          <h2 className="text-orange xs:w-full w-8/12 mb-7">
            Conciergerie Airbnb à Bordeaux, ses alentours et sur le bassin
          </h2>
          <h1 className="text-dark xs:w-full w-10/12 text-2xl lg:text-4xl font-semibold mb-7">
            Optimisez la valeur de votre bien{" "}
          </h1>
          <p className="text-dark xs:w-full w-10/12 lg:text-base text-sm mb-7 ">
            Votre confort est notre priorité. Mettez-nous au défi et transformez
            votre propriété en une source de revenus et rendre l’expérience pour
            vos voyageurs unique. Une entreprise familiale pour un service
            d’exception.{" "}
          </p>
          <ButtonWithoutBorder />
        </div>
        {/* <div>
          <h2 className="text-orange w-8/12 mb-7">
            Conciergerie Airbnb à Bordeaux, ses alentours et sur le bassin
          </h2>
          <h1 className="text-dark w-10/12 text-2xl lg:text-4xl font-semibold mb-7">
            Optimisez la valeur de votre bien{" "}
          </h1>
          <p className="text-dark w-10/12 lg:text-base text-sm mb-7 ">
            Votre confort est notre priorité. Mettez-nous au défi et transformez
            votre propriété en une source de revenus et rendre l’expérience pour
            vos voyageurs unique. Une entreprise familiale pour un service
            d’exception.{" "}
          </p>
          <ButtonWithoutBorder />
        </div> */}
      </div>

      <div className="absolute bg-beige w-full h-52 bottom-0 hidden lg:block" />
    </div>
  );
};

export default AccueilHero;
