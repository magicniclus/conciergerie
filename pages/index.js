import Classic from "../components/layouts/Classic";
import AllServices from "../components/organismes/container/AllServices";
import CardsPrestation from "../components/organismes/container/CardsPrestation";
import Faq from "../components/organismes/container/Faq";
import OnlyPlatform from "../components/organismes/container/OnlyPlatform";
import WhatWorkWithWe from "../components/organismes/container/WhatWorkWithWe";
import WhoWeAre from "../components/organismes/container/WhoWeAre";
import AccueilHero from "../components/organismes/hero/AccueilHero";

export default function Home() {
  return (
    <Classic title="Conciergerie | Accueil">
      <AccueilHero />
      <WhoWeAre />
      <AllServices />
      <CardsPrestation />
      <WhatWorkWithWe />
      <OnlyPlatform />
      <Faq />
    </Classic>
  );
}
