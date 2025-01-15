const BenefitCard = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-wrap m-4 items-start min-w-[240px] max-md:max-w-full">
      <div className="text-7xl font-semibold text-[#8f7d5e] text-opacity-50 w-[68px] max-md:text-4xl">
        {number}
      </div>
      <div className="flex flex-col text-white min-w-[240px] w-[460px] max-md:max-w-full">
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-3xl font-semibold max-md:max-w-full">
            {title}
          </div>
        </div>
        <div className="mt-3 text-lg font-medium leading-6 text-justify tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
