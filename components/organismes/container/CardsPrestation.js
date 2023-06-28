import React from "react";
import CardPrestation from "../../molecules/cards/CardPrestation";

const CardsPrestation = () => {
  const cards = [
    {
      title: "Gestion du Ménage",
      img: "/img/background/menage.png",
      background: "#585FCC",
    },
    {
      title: "Gestion des Plateformes",
      img: "/img/background/plateform.png",
      background: "#DCE0F2",
    },
    {
      title: "Gestion des Clés",
      img: "/img/background/key.png",
      background: "#CAE6FE",
    },
    {
      title: "Photos Professionnelles",
      img: "/img/background/photo.png",
      background: "#8FD8B4",
    },
  ];
  return (
    <div className="w-full max-w-[1450px] relative mx-auto hidden lg:block">
      <div className="flex justify-center lg:justify-between px-3 xs:px-6 lg:px-8 pb-14 flex-wrap relative z-10">
        {cards.map((card, index) => (
          <CardPrestation
            key={index}
            title={card.title}
            img={card.img}
            backgroundColor={card.background}
          />
        ))}
      </div>
      <div className="absolute bg-beige w-full h-52 bottom-0 hidden xl:block z-0 max-w-full" />
    </div>
  );
};

export default CardsPrestation;
