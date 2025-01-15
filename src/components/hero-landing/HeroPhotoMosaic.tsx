import HeroImageCard from "./HeroImageCard";

const HeroPhotoMosaic = ({ images }) => {
  return (
    <div className="md:w-1/2 aspect-square">
      <div
        className="grid w-full h-full gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
          gridTemplateRows: "repeat(auto-fit, minmax(0, 1fr))",
          gridAutoRows: "1fr",
          gridAutoColumns: "1fr",
        }}
      >
        {images.map((image, index) => (
          <HeroImageCard
            key={index}
            {...image}
            className="w-full h-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPhotoMosaic;
