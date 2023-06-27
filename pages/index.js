import Classic from "../components/layouts/Classic";
import WhoWeAre from "../components/organismes/container/WhoWeAre";
import AccueilHero from "../components/organismes/hero/AccueilHero";

export default function Home() {
  return (
    <Classic>
      <AccueilHero />
      <WhoWeAre />
    </Classic>
  );
}
