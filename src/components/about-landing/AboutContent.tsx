const AboutContent = ({ data }) => {
  return (
    <div className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start mt-1.5 font-medium text-black max-md:mt-10 max-md:max-w-full">
        <div className="text-base leading-none uppercase">{data.title}</div>
        <div className="mt-5 text-5xl font-semibold max-md:text-4xl">
          {data.heading}
        </div>
        <div className="self-stretch text-justify tracking-wider mt-10 text-lg leading-6 max-md:max-w-full">
          {data.content}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
