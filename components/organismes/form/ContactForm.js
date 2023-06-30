import React, { useState, useRef, useEffect } from "react";
import Input from "../../atomes/input/Input";
import CheckBox from "../../atomes/input/CheckBox";
import ButtonForm from "../../atomes/button/ButtonForm";
import { gsap } from "gsap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rgpdValid, setRgpdValid] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const rgpdRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [
        nameRef.current,
        emailRef.current,
        phoneRef.current,
        rgpdRef.current,
        buttonRef.current,
      ],
      {
        translateY: 200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        delay: 1,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[300px] pb-10">
      <div ref={nameRef} className="flex flex-col opacity-0">
        <label className="text-xs mb-2" htmlFor="name">
          Nom*
        </label>
        <Input value={name} setValue={setName} placeholder="Nom" />
      </div>
      <div ref={emailRef} className="flex flex-col mt-5 opacity-0">
        <label className="text-xs mb-2" htmlFor="email">
          Email*
        </label>
        <Input
          value={email}
          setValue={setEmail}
          placeholder="exemple@gmail.com"
        />
      </div>
      <div ref={phoneRef} className="flex flex-col mt-5 opacity-0">
        <label className="text-xs mb-2" htmlFor="tel">
          Téléphone*
        </label>
        <Input value={phone} setValue={setPhone} placeholder="06 00 00 00 00" />
      </div>
      <div ref={rgpdRef} className="mt-5 flex  opacity-0">
        <CheckBox value={rgpdValid} setValue={setRgpdValid} />
        <p className="text-xs ml-5 ">
          J'accepte les conditions de la politique de confidentialité et RGPD.
        </p>
      </div>
      <div ref={buttonRef} className="mt-8  opacity-0">
        <ButtonForm />
      </div>
    </form>
  );
};

export default ContactForm;
