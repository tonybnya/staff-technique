import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({
  number,
  title,
  description,
  icon,
}: BenefitCardProps) => {
  return (
    <Card className="flex flex-col w-full max-w-md h-[300px] m-4 p-6 rounded-xl border shadow-2xl hover:shadow-lg card-hover shadow-white/40">
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl font-semibold text-[#8f7d5e] text-opacity-50 w-[68px] max-lg:text-4xl">
          {number}
        </div>
        <div className="flex items-center gap-3">
          {icon}
          <CardTitle className="text-3xl font-medium text-black max-lg:text-xl">
            {title}
          </CardTitle>
        </div>
      </div>
      <CardContent className="p-0 flex-grow flex items-end">
        <CardDescription className="text-lg font-light leading-6 my-shadow-text text-justify text-black tracking-wide max-md:text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
