import React from "react";

const Footer = () => {
  const content = [
    {
      title: "Nos services",
      content: [
        {
          title: "Gestion locative",
          link: "/gestion-locative",
        },
        {
          title: "Conciergerie",
          link: "/conciergerie",
        },
        {
          title: "Ménage",
          link: "/menage",
        },
        {
          title: "Linge",
          link: "/linge",
        },
      ],
    },
    {
      title: "L'Agence",
      content: [
        {
          title: "Agence de Bordeaux",
          link: "/agence-de-bordeaux",
        },
        {
          title: "Agence de Bassin d'Arcachon",
          link: "/agence-de-bassin-d-arcachon",
        },
      ],
    },
    {
      title: "Support",
      content: [
        {
          title: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      title: "Legal",
      content: [
        {
          title: "Condition d'utilisation",
          link: "/condition-d-utilisation",
        },
        {
          title: "Politique de confidentialité",
          link: "/politique-de-confidentialite",
        },
        {
          title: "Mentions légales",
          link: "/mentions-legales",
        },
      ],
    },
  ];
  return (
    <footer className="w-full max-w-[1450px] relative mx-auto px-3 xs:px-6 lg:px-8">
      <div className="bg-slate-100 w-full py-14 px-6 z-10 relative h-96">
        <div>
          <img src="/img/logos/logo.png" />
        </div>
        <div></div>
      </div>
      <div className="absolute bg-beige w-full min-h-[70%] left-0 bottom-0 hidden lg:block z-0" />
    </footer>
  );
};

export default Footer;
