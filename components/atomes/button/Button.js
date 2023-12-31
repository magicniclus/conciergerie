import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Button = (props) => {
  const backgroundColor = props.backgroundColor || "bg-white";
  const textColor = props.textColor || "text-orange";
  const link = props.link || "/contact";
  return (
    <a
      href={link}
      className={`${backgroundColor} ${textColor} flex items-center px-4 py-2 w-max max-w-full font-semibold rounded-lg hover:bg-whiteHover hover:text-orange cursor-pointer`}
    >
      Prendre rendez-vous <ArrowSmallRightIcon className="w-5 h-5 ml-2" />
    </a>
  );
};

export default Button;
