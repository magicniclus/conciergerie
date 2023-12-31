import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const ButtonWithoutBorder = (props) => {
  const link = props.link || "/contact";
  return (
    <a
      className="flex text-orange items-center font-semibold  cursor-pointer"
      href={link}
    >
      Prendre rendez-vous
      <ArrowSmallRightIcon className="w-5 h-5 ml-2" />
    </a>
  );
};

export default ButtonWithoutBorder;
