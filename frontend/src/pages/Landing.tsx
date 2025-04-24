import AboutSection from "../components/about-landing/AboutSection";
import BenefitsSection from "../components/benefits-landing/BenefitsSection";
import DonationSection from "../components/donation-landing/DonationSection";
import HeroLanding from "../components/hero-landing/HeroLanding";
import { AnimatedGroup } from "../../components/motion-primitives/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <HeroLanding />

      <AnimatedGroup variants={transitionVariants}>
        <AboutSection />
      </AnimatedGroup>

      <AnimatedGroup variants={transitionVariants}>
        <DonationSection />
      </AnimatedGroup>

      <AnimatedGroup variants={transitionVariants}>
        <BenefitsSection />
      </AnimatedGroup>
    </div>
  );
};

export default Landing;
