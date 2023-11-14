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
      question:
        "Comment la conciergerie-castera s'assure-t-elle que ma propriété est toujours propre et bien entretenue ?",
      response:
        "La propreté et l'entretien de votre propriété sont des aspects que nous prenons très à cœur. Pour cela, nous collaborons avec des experts en nettoyage et en maintenance, assurant que votre bien soit toujours au top.",
    },
    {
      question: "Que se passe-t-il si un locataire endommage ma propriété ?",
      response:
        "Nous nous efforçons d'éviter de tels incidents en choisissant avec précaution nos locataires. Néanmoins, si un dommage survient, nous vous aiderons à gérer la situation, y compris l'utilisation de dépôts de garantie et d'assurances si nécessaire.",
    },
    {
      question:
        "Comment choisissez-vous les personnes qui séjourneront dans ma propriété ?",
      response:
        "Notre équipe procède à une sélection rigoureuse des voyageurs, basée sur des critères bien précis. Nous veillons notamment à ce que vos futurs locataires aient reçu des commentaires positifs lors de précédents séjours et possèdent un profil vérifié. De plus, nous contrôlons l'identité de chaque voyageur ainsi que le motif de leur séjour.",
    },
    {
      question: "Comment déterminez-vous le prix de location de ma propriété ?",
      response:
        "Pour définir le juste prix de location, nous prenons en compte plusieurs facteurs tels que les caractéristiques de votre logement, la période et la durée de location. La conciergerie-castera utilise ces informations en temps réel, associées à un outil de tarification dynamique, pour ajuster quotidiennement vos tarifs de location et maximiser vos revenus.",
    },
    {
      question: "Combien coûtent vos services ?",
      response:
        "Nos tarifs de gestion commencent à partir de 18% pour un engagement de 12 mois (20% sans engagement). Ce taux peut varier en fonction de la disponibilité de votre logement, de son emplacement et du nombre de chambres. Les frais de gestion sont établis individuellement avec chaque propriétaire. Ils sont facturés sur le tarif par nuit de chaque réservation, après déduction des frais des plateformes de location saisonnière. N'hésitez pas à nous parler de votre propriété, notre équipe de gestion de compte se fera un plaisir de répondre à toutes vos questions.",
    },
    {
      question: "Comment sont calculés vos frais de gestion ?",
      response:
        "Nos frais sont facturés sur chaque réservation, après déduction des commissions des plateformes. Les frais de ménage sont à la charge du client. Par exemple, pour une réservation de 4 nuits à 219€ par nuit (après déduction des frais de plateforme), les revenus de location s'élèvent à 876€. Les frais de gestion de la conciergerie-castera à 18% s'élèvent à 157,68€, ce qui vous laisse un bénéfice net de 718,32€.",
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
