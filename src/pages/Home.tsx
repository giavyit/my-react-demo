import { useState } from "react";
import HeroSection from "@/components/organisms/HeroSection";
import DocsSection from "@/components/organisms/DocsSection";
import SocialSection from "@/components/organisms/SocialSection";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection count={count} onIncrement={() => setCount((c) => c + 1)} />

      <div className="ticks"></div>

      <section id="next-steps">
        <DocsSection />
        <SocialSection />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};

export default Home;
