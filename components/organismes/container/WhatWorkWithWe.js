import React from "react";
import Button from "../../atomes/button/Button";

const WhatWorkWithWe = () => {
  return (
    <div className="bg-beige w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8 py-14">
      <h2 className="text-2xl text-dark lg:text-4xl font-semibold mb-7 ">
        Pourquoi travailler avec nous ?
      </h2>
      <p className="text-dark font-xs mb-7">
        Choisir de travailler avec Conciergerie Castera, c'est choisir une
        expérience sans égal en matière de gestion de propriété. En tant
        qu'entreprise familiale issue du monde de la location Airbnb, nous
        comprenons les défis que peuvent représenter la location de votre bien.
        Nous prenons soin de votre propriété comme si elle était la nôtre, avec
        une attention aux détails rigoureuse et une exigeante. De plus, nos
        connaissances fiscales vous assure une optimisation de vos revenus.
        Notre engagement est d'assurer que chaque aspect de la location soit
        géré de manière efficace et professionnelle, vous libérant ainsi de tout
        souci. Nous sommes votre partenaire de confiance, dédié à transformer
        votre bien en source de revenus lucrative.
      </p>
      <Button />
    </div>
  );
};

export default WhatWorkWithWe;
