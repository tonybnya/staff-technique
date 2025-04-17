import HeroContact from "./HeroContact";
import HeroCTA from "./HeroCTA";
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
import HeroPhotoMosaic from "./HeroPhotoMosaic";
import HeroSloganSlider from "./HeroSloganSlider";

// Combine all images into a single array for the mosaic
const mosaicImages = [
  {
    src: photo25,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo17,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo23,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo16,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo1,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo6,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo7,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo24,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo21,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo18,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo20,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo14,
    alt: "photo staffier",
    className: "w-full rounded-2xl shadow-2xl hover:shadow-lg object-cover",
  },
];

const HeroLanding = () => {
  return (
    <div
      className="relative overflow-hidden p-12 bg-[#1a1826] min-h-screen"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main flex container */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#602f32] to-black opacity-80"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row gap-10">
        {/* Left side: Content */}
        <div className="md:w-1/2">
          {/* Title section */}
          <h1 className="uppercase text-5xl font-bold max-lg:text-2xl max-lg:text-center mb-6 tracking-tight text-center text-white rounded-xl p-6 bg-gradient-to-br from-[#09090b] via-[#602f32] to-[#09090b] border border-[#9e4b4f]/30 backdrop-blur-sm my-shadow shadow-[#602f32]/50 hover:shadow-[0_0_0_2px_#ffffff20] transition duration-300 ease-in-out">
            le staff technique
          </h1>
          {/* Text content */}
          <div className="text-white text-lg text-shadow-lg/30 font-light mb-2 text-justify tracking-wide">
            Nous sommes un groupe d&apos;amis d&apos;enfance appelés « Staffiers
            », et réunis sous l&apos;appellation « STAFF TECHNIQUE » ou « STAFF
            » dans sa forme simplifiée. Cet espace vise à nous faire connaître
            du grand public afin de dynamiser nos actions et nos oeuvres
            caritatives.
          </div>
          <HeroSloganSlider />
          <div className="mt-4 w-full h-px border border-neutral-400 border-opacity-60 max-md:mt-10" />
          <div className="flex flex-col">
            <HeroCTA />
            <HeroContact />
          </div>
        </div>

        <div>
          <div className="flex flex-col md:w-1/2">
            <HeroPhotoMosaic
              images={mosaicImages.slice(0, 4)}
              direction="left"
            />
            <HeroPhotoMosaic
              images={mosaicImages.slice(4, 8)}
              direction="right"
            />
            <HeroPhotoMosaic
              images={mosaicImages.slice(8, 12)}
              direction="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
