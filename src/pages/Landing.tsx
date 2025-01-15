import AboutSection from "../components/about-landing/AboutSection";
import BenefitsSection from "../components/benefits-landing/BenefitsSection";
import DonationSection from "../components/donation-landing/DonationSection";
import HeroLanding from "../components/hero-landing/HeroLanding";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <HeroLanding />
      <AboutSection />
      <DonationSection />
      <BenefitsSection />
    </div>
  );
};

export default Landing;
