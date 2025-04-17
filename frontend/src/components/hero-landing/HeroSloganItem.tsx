import { Button } from "@/components/ui/button";

interface HeroSloganItemProps {
  text: string;
}

const HeroSloganItem = ({ text }: HeroSloganItemProps) => {
  return (
    <Button className="text-center m-2 border-2 border-[#8f7d5e] p-8 rounded-lg bg-transparent hover:cursor-auto hover:bg-transparent">
      <h1 className="text-5xl font-light tracking-tight text-white my-shadow">
        {text}
      </h1>
    </Button>
  );
};

export default HeroSloganItem;
