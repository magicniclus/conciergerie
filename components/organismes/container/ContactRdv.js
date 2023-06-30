import React from "react";
import PhoneButton from "../../atomes/button/PhoneButton";
import ContactForm from "../form/ContactForm";

const ContactRdv = () => {
  return (
    <div className="min-h-[calc(100vh-82px)] lg:bg-beige w-full max-w-[1450px] relative mx-auto flex lg:flex-row flex-col ">
      <div className=" w-full lg:min-h-none lg:w-1/2 overflow-hidden p-4">
        <img
          src="/img/background/tranquil.jpg"
          className="h-full w-full rounded-xl relative z-10 object-cover"
        />
      </div>
      <div className="bg-white w-full lg:w-1/2 flex flex-col items-center justify-center px-3 xs:px-6 lg:pr-32">
        <h1 className=" text-dark xs:w-full w-10/12 text-2xl lg:text-4xl font-semibold mb-7 text-center lg:w-8/12 lg:mt-0 mt-10">
          <span className="text-orange">Détendez-vous</span>,<br /> on s’occupe
          de <span className="text-orange">tout</span> !
        </h1>
        <PhoneButton />
        <div className="w-24 h-0.5 bg-dark my-20 rotate-90" />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactRdv;
