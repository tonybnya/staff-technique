import HeroImageCard from "./HeroImageCard";
import Marquee from "react-fast-marquee";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface HeroPhotoMosaicProps {
  images: ImageProps[];
  className?: string;
  direction?: "left" | "right";
}

const HeroPhotoMosaic = ({
  images,
  className,
  direction = "left",
}: HeroPhotoMosaicProps) => {
  return (
    <Marquee
      speed={30}
      gradient={false}
      direction={direction}
      className={`mb-4 ${className}`}
    >
      {images.map((image, index) => (
        <div key={index} className="mx-2 w-32 h-32">
          <HeroImageCard
            src={image.src}
            alt={image.alt}
            className="rounded-xl w-full h-full"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default HeroPhotoMosaic;

