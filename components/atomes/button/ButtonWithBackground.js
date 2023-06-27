import React from "react";

const ButtonWithBackground = () => {
  return (
    <a href="/" className="relative">
      <img
        className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 "
        src="/img/logos/backgroundButton.png"
      />
      <div className="relative flex justify-center items-center  lg:min-w-[150px] mb-7 lg:mb-0">
        <p className="text-orange lg:text-white z-30 text-2xl lg:text-sm">
          Obtenir un devis
        </p>
      </div>
    </a>
  );
};

export default ButtonWithBackground;
