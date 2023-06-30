import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const PhoneButton = () => {
  return (
    <a
      className="bg-orange rounded-lg py-2 px-3 text-white flex cursor-pointer hover:drop-shadow-lg transition-shadow"
      href="tel:0631420045"
    >
      <PhoneIcon className="w-5" />
      <span className="ml-2 font-semibold">06 31 42 00 45</span>
    </a>
  );
};

export default PhoneButton;
