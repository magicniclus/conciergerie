import React, { useEffect, useRef } from "react";
import ButtonWithoutBorder from "../../atomes/button/ButtonWithoutBorder";
import { gsap } from "gsap";

const AccueilHero = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [
        imgRef.current,
        containerRef.current,
        h2Ref.current,
        h1Ref.current,
        pRef.current,
        buttonRef.current,
      ],
      {
        translateY: 2000,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <div className="w-full max-w-[1450px] relative mx-auto">
      <div className="px-3 xs:px-6 lg:px-8 pb-5 rounded-lg lg:flex lg:flex-col overflow-hidden">
        <img
          ref={imgRef}
          src="/img/background/accueil.png"
          className="lg:max-h-[700px] lg:h-full h-96 h w-full object-cover rounded-lg relative z-10 opacity-0"
        />
        <div
          className="lg:bg-beige lg:absolute z-20 bottom-7 lg:bottom-10 lg:left-16 lg:flex flex-col lg:w-4/12 xs:w-10/12 py-10 lg:pl-6 overflow-hidden opacity-0"
          style={{ borderRadius: "0 170px 0 0" }}
          ref={containerRef}
        >
          <h2
            ref={h2Ref}
            className="text-orange xs:w-full w-8/12 mb-7 opacity-0"
          >
            Conciergerie Airbnb à Bordeaux, ses alentours et sur le bassin
          </h2>
          <h1
            ref={h1Ref}
            className="text-dark xs:w-full w-10/12 text-2xl lg:text-4xl font-semibold mb-7 opacity-0"
          >
            Optimisez la valeur de votre bien{" "}
          </h1>
          <p
            ref={pRef}
            className="text-dark xs:w-full w-10/12 font-xs mb-7 opacity-0 "
          >
            Votre confort est notre priorité. Mettez-nous au défi et transformez
            votre propriété en une source de revenus et rendre l’expérience pour
            vos voyageurs unique. Une entreprise familiale pour un service
            d’exception.{" "}
          </p>
          <div className="opacity-0" ref={buttonRef}>
            <ButtonWithoutBorder />
          </div>
        </div>
      </div>

      <div
        ref={backgroundRef}
        className="absolute bg-beige w-full h-52 bottom-0 hidden lg:block"
      />
    </div>
  );
};

export default AccueilHero;
