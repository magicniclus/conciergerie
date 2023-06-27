import React from "react";
import Button from "../../atomes/button/Button";

const WhoWeAre = () => {
  return (
    <section className="px-3 xs:px-6 lg:px-8 py-14 w-full max-w-[1450px] mx-auto bg-beige">
      <h2 className="font-dark font-semibold mb-7 lg:mb-10">
        Qui sommes-nous ?{" "}
      </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <h3 className="lg:text-5xl text-3xl w-8/12 lg:w-3/12 font-dark mb-7 lg:mb-0">
          <span className="text-orange">Propriétaires</span> et{" "}
          <span className="text-orange">voyageurs</span>, vivez une
          <span className="text-orange">expérience</span>{" "}
          <span className="text-orange">unique</span> durant votre séjour.
        </h3>
        <div className="w-full lg:w-8/12">
          <p className="text-dark font-xs mb-7">
            Bienvenue à la Conciergerie Castera, une entreprise familiale qui a
            grandi à partir d'une envie, rendre le séjour pour les propriétaires
            et voyageurs le plus confortable possible. Nous avons commencé notre
            parcours en tant que clients réguliers, avant de devenir
            propriétaires et enfin, concierges experts. L’histoire unique d’une
            mère et son fils a permis de développer une connaissance approfondie
            et pointue de la location de courte durée. Dans notre travail, nous
            nous distinguons par notre exigence et notre attention méticuleuse
            du détail, car nous croyons que ce sont ces petites choses qui font
            une grande différence. Animés par une humanité une envie qui se
            reflète dans notre service, nous nous efforçons de faire en sorte
            que chaque expérience soit aussi confortable et mémorable que
            possible.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;