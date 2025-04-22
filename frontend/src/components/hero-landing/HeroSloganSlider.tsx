import Marquee from "react-fast-marquee";
import HeroSloganItem from "./HeroSloganItem";

const sloganArray = ["AMITIÉ", "FRATERNITÉ", "SOLIDARITÉ"];

const HeroSloganSlider = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-white">
      <Marquee speed={80}>
        {sloganArray.map((slogan, index) => (
          <HeroSloganItem key={index} text={slogan} />
        ))}
      </Marquee>
    </div>
  );
};

export default HeroSloganSlider;
