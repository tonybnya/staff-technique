import HeroContact from "./HeroContact";
import HeroCTA from "./HeroCTA";
import HeroPhotoMosaic from "./HeroPhotoMosaic";
import HeroStatCard from "./HeroStatCard";
import HeroSloganSlider from "./HeroSloganSlider";

// Import images
import photo1 from "../../assets/images/photos/photo1.jpg";
import photo17 from "../../assets/images/photos/photo17.jpg";
import photo23 from "../../assets/images/photos/photo23.jpeg";
import photo16 from "../../assets/images/photos/photo16.jpg";
import photo25 from "../../assets/images/photos/photo25.jpg";
import photo6 from "../../assets/images/photos/photo6.jpg";
import photo7 from "../../assets/images/photos/photo7.jpg";
import photo24 from "../../assets/images/photos/photo24.jpeg";
import photo21 from "../../assets/images/photos/photo21.jpg";
import photo18 from "../../assets/images/photos/photo18.jpg";
import photo20 from "../../assets/images/photos/photo20.jpg";
import photo14 from "../../assets/images/photos/photo14.jpg";

import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";

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

// Combine all images into a single array
const mosaicImages = [
  { src: photo25, alt: "photo staffier" },
  { src: photo17, alt: "photo staffier" },
  { src: photo23, alt: "photo staffier" },
  { src: photo16, alt: "photo staffier" },
  { src: photo1, alt: "photo staffier" },
  { src: photo6, alt: "photo staffier" },
  { src: photo7, alt: "photo staffier" },
  { src: photo24, alt: "photo staffier" },
  { src: photo21, alt: "photo staffier" },
  { src: photo18, alt: "photo staffier" },
  { src: photo20, alt: "photo staffier" },
  { src: photo14, alt: "photo staffier" },
];

const stats = [
  { label: "Année de création", value: "2002" },
  { label: "Staffiers actifs", value: "50+" },
  { label: "Actions de solidarité", value: "100+" },
  { label: "Familles soutenues", value: "70+" },
];

const HeroLanding = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#1a1826] text-white min-h-screen"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-[#09090b] opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl w-full mx-auto space-y-4 px-4 pt-12">
          <AnimatedGroup variants={transitionVariants}>
            <div className="px-8 py-5 hollow-effect">
              <h1 className="uppercase text-3xl md:text-4xl max-sm:text-xl font-bold tracking-wide text-white animate-pulse">
                le staff technique
              </h1>
            </div>
          </AnimatedGroup>

          <AnimatedGroup variants={transitionVariants}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed tracking-tight">
              Nous sommes un groupe d&apos;amis d&apos;enfance appelés{" "}
              <span className="text-[#8f7d5e]">« Staffiers »</span>, et réunis
              sous l&apos;appellation{" "}
              <span className="text-[#8f7d5e]">« STAFF TECHNIQUE »</span> ou{" "}
              <span className="text-[#8f7d5e]">« STAFF »</span> dans sa forme
              simplifiée. Cet espace vise à nous faire connaître du grand public
              afin de dynamiser nos actions et nos oeuvres caritatives.
            </p>
          </AnimatedGroup>

          <div className="max-w-[75%]">
            <HeroSloganSlider />
          </div>
        </div>

        {/* CTA + Contact + Mosaic Section */}
        <AnimatedGroup variants={transitionVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <HeroCTA />
              <HeroContact />
            </div>

            {/* Right column */}
            <div className="pt-2">
              <HeroPhotoMosaic images={mosaicImages} direction="right" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <HeroStatCard
                    key={index}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
};

export default HeroLanding;
