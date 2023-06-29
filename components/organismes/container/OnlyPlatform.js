import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnlyPlatform = () => {
  const logos = [
    {
      logo: "/img/logos/airbnb.png",
    },
    {
      logo: "/img/logos/homelike.png",
    },
    {
      logo: "/img/logos/booking.png",
    },
    {
      logo: "/img/logos/abritel.png",
    },
  ];

  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      [h2Ref.current, h3Ref.current, imgRef.current],
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 0.3,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8 py-14 bg-white">
      <h2
        ref={h2Ref}
        className="text-2xl text-dark lg:text-4xl font-semibold mb-7 "
      >
        Gestion optimale avec les meilleures plateformes
      </h2>
      <h3 ref={h3Ref} className="text-dark font-xs lg:w-8/12 w-full">
        Nous mettons en avant votre bien sur diverses plateformes de location
        pour des séjours de courte et moyenne durée, et ce, de manière
        simultanée.
      </h3>
      <div
        ref={imgRef}
        className="flex justify-between items-center flex-wrap mt-7"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.logo}
            alt="logo"
            className={`object-contain my-8 ${index > 1 ? "h-32" : "h-16"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlyPlatform;
