interface HeroImageCardProps {
  src: string;
  className?: string;
  alt: string;
}

const HeroImageCard = ({ src, className, alt }: HeroImageCardProps) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-cover aspect-square shadow-[0px_4px_6px_rgba(192,189,189,0.25)] ${className}`}
    />
  );
};

export default HeroImageCard;
