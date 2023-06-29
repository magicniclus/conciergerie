import React from "react";
import Button from "../../atomes/button/Button";

const Pourcentage = () => {
  return (
    <div className="text-dark max-w-none w-full lg:max-w-[200px] lg:block flex flex-col lg:my-0 my-10">
      <p className="text-sm mb-3">Le tarif sur commission à partir de</p>
      <div className="flex flex-row items-center mb-3">
        <p className="text-orange lg:text-5xl text-3xl">20%</p>
        <p className="text-lg font-semibold ml-5">
          de vos <br /> revenus <br /> locatifs
        </p>
      </div>
      <p className="text-sm mb-3">
        La commission dépend du <br /> profil de votre bien.
      </p>
      <Button backgroundColor="bg-orange" textColor="text-white" />
    </div>
  );
};

export default Pourcentage;
