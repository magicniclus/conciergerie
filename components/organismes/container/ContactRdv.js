import React, { useEffect, useRef } from "react";
import PhoneButton from "../../atomes/button/PhoneButton";
import ContactForm from "../form/ContactForm";
import { gsap } from "gsap";

const ContactRdv = () => {
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);
  const lignRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [
        imgRef.current,
        containerRef.current,
        h1Ref.current,
        buttonRef.current,
        lignRef.current,
      ],
      {
        translateY: 200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[calc(100vh-82px)] lg:bg-beige w-full max-w-[1450px] relative mx-auto flex lg:flex-row flex-col opacity-0"
    >
      <div className=" w-full lg:min-h-none lg:w-1/2 overflow-hidden p-4">
        <img
          ref={imgRef}
          src="/img/background/tranquil.jpg"
          className="h-full w-full rounded-xl relative z-10 object-cover opacity-0"
        />
      </div>
      <div className="bg-white w-full lg:w-1/2 flex flex-col items-center justify-center px-3 xs:px-6 lg:pr-32">
        <h1
          ref={h1Ref}
          className=" text-dark xs:w-full w-10/12 text-2xl lg:text-4xl font-semibold mb-7 text-center lg:w-8/12 lg:mt-0 mt-10 opacity-0"
        >
          <span className="text-orange">Détendez-vous</span>,<br /> on s’occupe
          de <span className="text-orange">tout</span> !
        </h1>
        <div ref={buttonRef} className="opacity-0">
          <PhoneButton />
        </div>
        <div
          ref={lignRef}
          className="w-10 h-0.5 bg-dark my-10 rotate-90 opacity-0"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactRdv;
