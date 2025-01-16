const AboutContent = ({ data }) => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start mt-1.5 font-medium text-black max-md:mt-10 max-md:max-w-full">
        <div className="text-base leading-none font-semibold max-lg:mx-auto text-[#8f7d5e] uppercase">{data.title}</div>
        <div className="mt-5 text-5xl leading-6 font-semibold max-lg:text-4xl max-lg:mx-auto text-muted-foreground">
          {data.heading}
        </div>
        <div className="text-justify tracking-tight font-light mt-10 text-lg max-lg:mx-auto">
          {data.content}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
