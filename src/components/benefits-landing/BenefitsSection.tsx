import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    number: "1",
    title: "Amitié",
    description:
      "Le fondement de notre union s'appuie sur des années d'histoire commune. Nous cultivons des liens sincères et durables pour préserver cet héritage précieux.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Fraternité",
    description:
      "Plus qu'un groupe, une vraie famille unie par des liens indéfectibles. Ensemble, nous partageons joies, peines et réussites dans une atmosphère de confiance mutuelle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Solidarité",
    description:
      "L'entraide mutuelle est au cœur de nos actions quotidiennes. Nous agissons pour apporter un soutien concret à chaque membre et à la communauté.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Communication",
    description:
      "Un groupe WhatsApp actif pour maintenir le lien et partager nos moments de vie. C'est aussi un espace d'échange d'idées et de coordination de nos activités.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Tontine Mensuelle",
    description:
      "Une tontine organisée chaque mois entre le 1er et le 5, renforçant nos liens de solidarité. Elle constitue un soutien financier précieux pour chacun des membres.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "6",
    title: "Charité",
    description:
      "Nous nous mobilisons pour soutenir les membres en difficulté et pour venir en aide aux plus démunis. Les dons et actions caritatives sont une expression concrète de nos valeurs de solidarité et de partage.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#602f32]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-28 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full max-w-[1614px] max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full text-center text-white w-[922px]">
          <div className="flex flex-col items-center w-full">
            <div className="text-base font-medium leading-none uppercase max-md:max-w-full">
              Devenez l&apos;un des nôtres !
            </div>
            <div className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Avantages pour les membres
            </div>
          </div>
          <div className="self-start mt-9 text-lg font-medium leading-6 max-md:max-w-full">
            Le STAFF TECHNIQUE est une association à but non lucratif qui
            protège, sert et accompagne ses membres, les Staffiers, dans chaque
            étape importante de leur vie. Il ambitionne également de prendre une
            part active dans l&apos;amélioration des conditions de vie des
            populations de sa communauté d&apos;origine.
            <br />
          </div>
        </div>
        <div className="flex flex-wrap items-start mt-20 max-md:mt-10 max-md:max-w-full">
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
