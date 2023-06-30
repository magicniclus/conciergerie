import React, { useEffect, useRef } from "react";
import Question from "../../molecules/questions/Question";
import Button from "../../atomes/button/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const questionContent = [
    {
      question: "Qu'est-ce que la Conciergerie Castera ?",
      response:
        "La Conciergerie Castera est une entreprise familiale spécialisée dans la gestion de propriétés pour les locations de courte et moyenne durée. Nous nous occupons de tout, de la gestion des réservations à l'accueil des voyageurs, en passant par le nettoyage et la maintenance.",
    },
    {
      question: "Quels types de propriétés gérez-vous ?",
      response:
        "Nous gérons une variété de propriétés, allant des appartements en ville aux maisons de campagne. Si vous avez un bien que vous aimeriez louer, n'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.",
    },
    {
      question: "Quelles plateformes de réservation utilisez-vous ?",
      response:
        "Nous utilisons plusieurs plateformes de réservation populaires, dont Airbnb. Nous sélectionnons les plateformes en fonction de la nature de votre bien et de l'audience que nous voulons atteindre.",
    },
    {
      question: "Quel est le coût de vos services ?",
      response:
        "Le coût de nos services varie en fonction des besoins spécifiques de votre propriété. Pour obtenir un devis précis, veuillez nous contacter directement.",
    },
    {
      question:
        "Comment garantissez-vous la qualité du nettoyage et de l'entretien de ma propriété ?",
      response:
        "Nous prenons très au sérieux la propreté et l'entretien de votre propriété. Nous travaillons avec des professionnels du nettoyage et de la maintenance pour garantir que votre bien est toujours à son meilleur.",
    },
    {
      question:
        "Que se passe-t-il si un locataire cause des dommages à ma propriété ?",
      response:
        "Nous faisons tout notre possible pour prévenir ce genre de situations en sélectionnant soigneusement les locataires. Cependant, en cas de dommages, nous vous aiderons à gérer la situation, y compris l'utilisation de dépôts de garantie et de politiques d'assurance si nécessaire.",
    },
  ];

  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const questionRef = useRef(null);
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
      [h2Ref.current, h3Ref.current, questionRef.current, imgRef.current],
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
    <div className="bg-white w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-32 pb-24">
      <h2
        ref={h2Ref}
        className="text-2xl text-dark lg:text-4xl font-semibold mb-14"
      >
        F.A.Q
      </h2>
      <div className="flex lg:flex-row flex-col">
        <div ref={questionRef} className="w-full lg:w-1/2 lg:mb-0 mb-10">
          {questionContent.map((el, index) => (
            <Question
              key={index}
              question={el.question}
              response={el.response}
            />
          ))}
        </div>
        <div
          ref={imgRef}
          className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <img
            className="aspect-[3/2] lg:hidden block object-cover lg:aspect-auto h-full w-full relative"
            src="/img/logos/piscine.png"
            alt="piscine"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white opacity-100 hidden lg:flex"></div>
          <div
            className="absolute top-1/2 left-1/2 bg-white px-6 py-10 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"
            style={{ borderRadius: "0 150px 0 0" }}
          >
            <h3 ref={h3Ref} className="lg:text-5xl text-3xl font-dark mb-8">
              <span className="text-orange ">Bienvenue</span> dans notre section
              FAQ!
              <br />
              Vous avez des
              <span className="text-orange "> questions ?</span>
              <br /> Nous avons des {""}
              <span className="text-orange ">réponses</span>.
            </h3>
            <Button backgroundColor="bg-orange" textColor="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
