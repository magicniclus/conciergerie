import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardPrestation = (props) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const title = props.title;
  const img = props.img;
  const backgroundColor = props.backgroundColor;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      [cardRef.current, contentRef.current, titleRef.current],
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
    <div ref={cardRef} className="w-64 mt-5 z-0 relative sm:ml-3">
      <div
        ref={contentRef}
        className="lg:w-9/12 w-full absolute bottom-0 left-0 lg:-bottom-2 lg:-left-2 py-8 px-2 lg:py-14 lg:px-5"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: "0 100px 0 0",
        }}
      >
        <h3 ref={titleRef} className="text-white w-5/12">
          {title}
        </h3>
      </div>
      <img
        src={img}
        className="w-full h-full object-cover"
        style={{ borderRadius: "0 120px 0 0" }}
      />
    </div>
  );
};

export default CardPrestation;
