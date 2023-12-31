import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SelectedLanguage = () => {
  const language = ["fr", "en", "es", "it", "de"];
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative">
      <ChevronDownIcon
        className="w-2 text-dark absolute right-1 top-1/2 transform -translate-y-1/2 z-50"
        aria-hidden="true"
      />
      <select
        required
        value={selectedLanguage}
        onChange={handleChange}
        className=" cursor-pointer block bg-gray-50 rounded-md border-dark text-gray-800 shadow-sm ring-1 ring-inset ring-dark placeholder:text-dark focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 relative px-2.5 py-0.5 text-xl"
      >
        {language.map((prestation, index) => (
          <option key={index} value={prestation}>
            {prestation}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectedLanguage;
