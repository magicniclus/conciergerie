import React, { useState } from "react";
import Input from "../../atomes/input/Input";
import CheckBox from "../../atomes/input/CheckBox";
import ButtonForm from "../../atomes/button/ButtonForm";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rgpdValid, setRgpdValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[300px] pb-10">
      <div className="flex flex-col">
        <label className="text-xs mb-2" htmlFor="name">
          Nom*
        </label>
        <Input value={name} setValue={setName} placeholder="Nom" />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-xs mb-2" htmlFor="email">
          Email*
        </label>
        <Input
          value={email}
          setValue={setEmail}
          placeholder="exemple@gmail.com"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-xs mb-2" htmlFor="tel">
          Téléphone*
        </label>
        <Input value={phone} setValue={setPhone} placeholder="06 00 00 00 00" />
      </div>
      <div className="mt-5 flex ">
        <CheckBox value={rgpdValid} setValue={setRgpdValid} />
        <p className="text-xs ml-5 ">
          J'accepte les conditions de la politique de confidentialité et RGPD.
        </p>
      </div>
      <div className="mt-8 ">
        <ButtonForm />
      </div>
    </form>
  );
};

export default ContactForm;
