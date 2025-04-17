import { Button } from "@/components/ui/button";

const HeroCTA = () => {
  return (
    <div className="flex gap-2 justify-start max-lg:justify-center my-4 max-w-full font-bold leading-10">
      <Button
        asChild
        className="bg-gradient-to-br from-[#602f32] to-[#09090b] hover:scale-105 font-semibold text-white text-xl p-6 max-lg:text-lg max-lg:p-4 my-shadow"
      >
        <a href="/membership" target="_blank">
          Nous rejoindre
        </a>
      </Button>
      <Button
        asChild
        className="bg-gradient-to-br from-[#8f7d5e] to-[#09090b] hover:scale-105 font-semibold text-white text-xl p-6 max-lg:text-lg max-lg:p-4 my-shadow"
      >
        <a href="/donate" target="_blank">
          Faire un don
        </a>
      </Button>
    </div>
  );
};

export default HeroCTA;
