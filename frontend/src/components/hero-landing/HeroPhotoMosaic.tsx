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
      speed={70}
      gradient={false}
      direction={direction}
      className={`mb-2 ${className}`}
    >
      {images.map((image, index) => (
        <div key={index} className="m-1 w-32 h-32 bg-white p-1 rounded-md">
          <HeroImageCard
            src={image.src}
            alt={image.alt}
            className="rounded-md w-full h-full"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default HeroPhotoMosaic;
