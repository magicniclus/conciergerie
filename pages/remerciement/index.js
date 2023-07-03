import React, { useRef, useEffect } from "react";
import Classic from "../../components/layouts/Classic";
import { gsap } from "gsap";

const index = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [h1Ref.current, pRef.current],
      {
        translateY: 500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,

        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <Classic title="Conciergerie | Remerciement">
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-[calc(100vh-72px)] flex justify-center items-center">
        <div className="mx-auto max-w-2xl text-center overflow-hidden">
          <h1
            ref={h1Ref}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl opacity-0"
          >
            Merci
          </h1>
          <p
            ref={pRef}
            className="mt-6 text-lg leading-8 text-gray-600 opacity-0"
          >
            Nous vous contacterons dans les 24/48h.
          </p>
        </div>
      </div>
    </Classic>
  );
};

export default index;
