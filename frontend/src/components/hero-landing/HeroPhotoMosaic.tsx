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
      speed={40}
      gradient={false}
      direction={direction}
      className={`mb-2 ${className}`}
    >
      {images.map((image, index) => (
        <div key={index} className="m-1 w-32 h-32 bg-[#8f7d5e] p-1 rounded-md">
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
