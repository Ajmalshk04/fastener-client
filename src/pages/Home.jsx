import About from "@/components/about";
import Capabilities from "@/components/capabilities";
import HeroSection from "@/components/hero";
import Industries from "@/components/industries";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Capabilities></Capabilities>
      <About></About>
      <Industries></Industries>
    </div>
  );
};

export default Home;
