import HeroContact from "./HeroContact";
import HeroCTA from "./HeroCTA";
import photo1 from "../../assets/images/photos/photo1.jpg";
import photo2 from "../../assets/images/photos/photo2.jpg";
import photo3 from "../../assets/images/photos/photo3.jpg";
import photo4 from "../../assets/images/photos/photo4.jpg";
import photo5 from "../../assets/images/photos/photo5.jpg";
import photo6 from "../../assets/images/photos/photo6.jpg";
import photo7 from "../../assets/images/photos/photo7.jpg";
import photo8 from "../../assets/images/photos/photo8.jpg";
import photo9 from "../../assets/images/photos/photo9.jpg";
import PhotoMosaic from "./HeroPhotoMosaic";
import HeroSloganSlider from "./HeroSloganSlider";

// Combine all images into a single array for the mosaic
const mosaicImages = [
  {
    src: photo1,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo2,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo3,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo4,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo5,
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
    src: photo8,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
  {
    src: photo9,
    alt: "photo staffier",
    className: "aspect-square w-full rounded-2xl object-cover",
  },
];

const HeroLanding = () => {
  return (
    <div className="overflow-hidden p-14">
      {/* Main flex container */}
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="flex gap-2">
          <PhotoMosaic images={mosaicImages.slice(0, 5)} className="h-full" />
          <PhotoMosaic images={mosaicImages.slice(5, 10)} className="h-full" />
        </div>

        {/* Right side: Content */}
        <div className="md:w-1/2">
          {/* Title section */}
          <h1 className="uppercase text-5xl font-bold max-lg:text-2xl max-lg:text-center mb-6 tracking-tight text-justify text-black">
            le staff technique
          </h1>

          {/* Text content */}
          <div className="text-lg font-medium leading-6 text-black mb-2 text-justify tracking-tight">
            Nous sommes un groupe d&apos;amis d&apos;enfance appelés « Staffiers
            », et réunis sous l&apos;appellation « STAFF TECHNIQUE » ou « STAFF
            » dans sa forme simplifiée. Cet espace vise à nous faire connaître
            du grand public afin de dynamiser nos actions et nos oeuvres
            caritatives.
          </div>
          <HeroSloganSlider />
          <HeroCTA />
          <div className="mt-4 w-full h-px border border-solid border-neutral-400 border-opacity-60 max-md:mt-10" />
          <HeroContact />
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
