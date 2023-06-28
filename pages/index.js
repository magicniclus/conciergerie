import Classic from "../components/layouts/Classic";
import AllServices from "../components/organismes/container/AllServices";
import CardsPrestation from "../components/organismes/container/CardsPrestation";
import WhoWeAre from "../components/organismes/container/WhoWeAre";
import AccueilHero from "../components/organismes/hero/AccueilHero";

export default function Home() {
  return (
    <Classic>
      <AccueilHero />
      <WhoWeAre />
      <AllServices />
      <CardsPrestation />
    </Classic>
  );
}
