import React from "react";

const ButtonWithBackground = () => {
  return (
    <a href="/" className="relative">
      <img
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 "
        src="/img/logos/backgroundButton.png"
      />
      <div className="relative flex justify-center items-center  md:min-w-[150px] mb-5 md:mb-0">
        <p className="text-orange md:text-white z-30 text-xl sm:text-sm">
          obtenir un devis
        </p>
      </div>
    </a>
  );
};

export default ButtonWithBackground;
