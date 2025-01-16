import AboutSection from "../components/about-landing/AboutSection";
import BenefitsSection from "../components/benefits-landing/BenefitsSection";
import DonationSection from "../components/donation-landing/DonationSection";
import HeroLanding from "../components/hero-landing/HeroLanding";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <HeroLanding />
      <AboutSection />
      <DonationSection />
      <BenefitsSection />
    </div>
  );
};

export default Landing;
