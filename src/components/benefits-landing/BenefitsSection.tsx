import BenefitCard from "./BenefitCard";
import {
  Users,
  Heart,
  MessageCircle,
  DollarSign,
  HandHeart,
  Smile,
} from "lucide-react";

const benefitsData = [
  {
    number: "1",
    title: "Amitié",
    description:
      "Le fondement de notre union s'appuie sur des années d'histoire commune. Nous cultivons des liens sincères et durables pour préserver cet héritage précieux.",
    icon: <Users className="w-8 h-8 text-[#602f32]" />,
  },
  {
    number: "2",
    title: "Fraternité",
    description:
      "Plus qu'un groupe, une vraie famille unie par des liens indéfectibles. Ensemble, nous partageons joies, peines et réussites dans une atmosphère de confiance mutuelle.",
    icon: <Heart className="w-8 h-8 text-[#602f32]" />,
  },
  {
    number: "3",
    title: "Solidarité",
    description:
      "L'entraide mutuelle est au cœur de nos actions quotidiennes. Nous agissons pour apporter un soutien concret à chaque membre et à la communauté.",
    icon: <HandHeart className="w-8 h-8 text-[#602f32]" />,
  },
  {
    number: "4",
    title: "Communication",
    description:
      "Un groupe WhatsApp actif pour maintenir les liens et partager des moments de vie. C'est aussi un espace d'échange d'idées et de coordination de nos activités.",
    icon: <MessageCircle className="w-8 h-8 text-[#602f32]" />,
  },
  {
    number: "5",
    title: "Tontine Mensuelle",
    description:
      "Une tontine organisée chaque mois entre le 1er et le 5, renforçant nos liens de solidarité. Elle constitue un soutien financier précieux pour chacun des membres.",
    icon: <DollarSign className="w-8 h-8 text-[#602f32]" />,
  },
  {
    number: "6",
    title: "Charité",
    description:
      "Nous nous mobilisons pour soutenir les membres en difficulté et pour venir en aide aux plus démunis. Les dons et actions caritatives sont une expression concrète de nos valeurs de solidarité et de partage.",
    icon: <Smile className="w-8 h-8 text-[#602f32]" />,
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-28 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full max-w-[1614px] max-md:max-w-full items-center">
        <div className="flex flex-col self-center max-w-full text-center text-white w-[922px]">
          <div className="flex flex-col items-center w-full">
            <div className="text-base font-semibold text-[#8f7d5e] uppercase max-md:max-w-full">
              Devenez l&apos;un des nôtres !
            </div>
            <div className="text-5xl font-semibold text-muted-foreground max-md:max-w-full max-md:text-4xl">
              Avantages pour les Staffiers
            </div>
          </div>
          <div className="self-start mt-9 text-lg font-medium tracking-tight max-md:max-w-full text-black">
            Le STAFF TECHNIQUE est une association à but non lucratif qui
            protège, sert et accompagne ses membres, les Staffiers, dans chaque
            étape importante de leur vie. Il ambitionne également de prendre une
            part active dans l&apos;amélioration des conditions de vie des
            populations de sa communauté d&apos;origine.
            <br />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full mt-20 max-md:mt-10 max-md:max-w-full">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
