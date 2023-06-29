import React, { useEffect, useRef } from "react";
import Pourcentage from "../../organismes/vignettes/Pourcentage";
import Services from "../../molecules/services/Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllServices = () => {
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const pourcentageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      [h2Ref.current, h3Ref.current, pourcentageRef.current],
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section className="w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8 py-14">
      <h2
        ref={h2Ref}
        className="text-2xl text-dark lg:text-4xl font-semibold mb-7 "
      >
        Un service complet et exigeant de gestion Airbnb
      </h2>
      <h3 ref={h3Ref} className="text-dark font-xs lg:w-8/12 w-full">
        Nous avons créé un service complet de prestations vous permettant de
        profiter de votre séjour tout en maximisant vos revenus locatifs.
      </h3>
      <div className="mt-14">
        <div className="flex flex-col xl:flex-row justify-between">
          <div ref={pourcentageRef}>
            <Pourcentage />
          </div>
          <Services />
        </div>
      </div>
    </section>
  );
};

export default AllServices;
