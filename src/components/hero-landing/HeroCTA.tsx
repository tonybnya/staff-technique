import { Button } from "@/components/ui/button";

const HeroCTA = () => {
  return (
    <div className="flex gap-2 justify-start max-lg:justify-center my-4 max-w-full font-bold leading-10">
      <Button
        asChild
        className="bg-[#602f32] text-white text-xl p-6 max-lg:text-lg max-lg:p-4 shadow-2xl"
      >
        <a href="/membership" target="_blank">Nous rejoindre</a>
      </Button>
      <Button
        asChild
        className="bg-[#8f7d5e] text-white text-xl p-6 max-lg:text-lg max-lg:p-4 shadow-2xl"
      >
        <a href="/donate" target="_blank">Faire un don</a>
      </Button>
    </div>
  );
};

export default HeroCTA;
