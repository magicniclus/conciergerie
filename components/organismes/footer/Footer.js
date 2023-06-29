import React from "react";

const Footer = () => {
  const content = [
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
          title: "Contact commercial",
          link: "/contact",
        },
        {
          title: "Contact support",
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
    <footer className="w-full max-w-[1450px] relative mx-auto px-0 xs:px-6 lg:px-8">
      <div className="bg-slate-100 w-full pt-5 lg:pt-14 pb-5 px-6 z-10 relative min-h-[350px] flex flex-col justify-between">
        <div className="flex justify-between  lg:flex-row flex-col items-start">
          <a src="/" className="cursor-pointer">
            <img
              src="/img/logos/logo.png"
              className="w-72 object-contain lg:block hidden"
            />
          </a>
          <div className=" flex lg:w-6/12 lg:mt-0 mt-7 lg:flex-row flex-col w-full justify-between">
            {content.map((el, index) => (
              <div key={index} className="mb-8 lg:w-3/12 w-full">
                <h3 className="text-dark text-xl font-semibold mb-4 ">
                  {el.title}
                </h3>
                {el.content.map((el, index) => (
                  <a
                    key={index}
                    src={el.link}
                    className="text-dark text-xs font-light mb-2 block cursor-pointer"
                  >
                    {el.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <p className="text-dark text-xs">
            © 2023 conciergerie-castera, Tous droits réservés.
          </p>
          <div className="flex justify-between max-w-[50px] lg:mt-0 mt-7">
            <a url="#" className="cursor-pointer">
              <img
                src="/img/logos/facebook.png"
                alt="facebook"
                className="mr-5 text-dark object-contain"
              />
            </a>
            <a url="#" className="cursor-pointer">
              <img
                src="/img/logos/instagram.png"
                alt="instagram"
                className="text-dark object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bg-beige w-full min-h-[70%] left-0 bottom-0 hidden lg:block z-0" />
    </footer>
  );
};

export default Footer;
