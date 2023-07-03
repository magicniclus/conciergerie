import React from "react";

const ButtonForm = (props) => {
  const backgroundColor = props.backgroundColor || "bg-white";
  const textColor = props.textColor || "text-orange";
  const link = props.link || "/contact";
  return (
    <button
      url={link}
      type="submit"
      className={`${backgroundColor} ${textColor} flex items-center px-4 py-2 w-max max-w-full font-semibold rounded-lg hover:bg-whiteHover hover:text-orange cursor-pointer drop-shadow-lg`}
    >
      Envoyer
    </button>
  );
};

export default ButtonForm;
