import { Phone, Mail } from "lucide-react";

const HeroContact = () => {
  return (
    <div className="flex flex-col items-start w-full text-lg font-medium leading-6 justify-start">
      <div className="my-shadow mt-2 text-2xl max-lg:text-lg text-justify max-lg:mx-auto max-lg:text-center text-white max-md:mt-4 tracking-wide">
        Vous avez des questions ?
      </div>
      <div className="mt-4 text-4xl leading-none flex flex-col tracking-tight text-justify max-lg:mx-auto">
        <div className="flex items-center gap-2 text-white">
          <Phone className="text-[#603f32]" />
          <span className="text-sm tracking-normal">+237 679 10 08 48</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Phone className="text-[#602f32]" />
          <span className="text-sm tracking-normal">+216 29 258 563</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Phone className="text-[#603f32]" />
          <span className="text-sm tracking-normal">+33 7 52 74 18 01</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Mail className="text-[#603f32]" />
          <span className="text-sm tracking-normal">
            lestafftechnique@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
