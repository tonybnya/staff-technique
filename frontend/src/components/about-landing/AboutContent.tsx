interface AboutContentProps {
  data: {
    title: string;
    heading: string;
    content: string;
  };
}

const AboutContent = ({ data }: AboutContentProps) => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start mt-1.5 font-medium text-black max-md:mt-10 max-md:max-w-full">
        <div className="text-base leading-none font-semibold max-lg:mx-auto text-[#8f7d5e] uppercase">
          {data.title}
        </div>
        <div className="mt-5 text-5xl leading-6 font-semibold max-lg:text-4xl max-lg:mx-auto text-muted-foreground">
          {data.heading}
        </div>
        <div className="text-justify tracking-tight font-light mt-10 text-lg max-lg:mx-auto">
          {/* {data.content} */}
          Le STAFF TECHNIQUE a toujours promu et valorisé l’entraide, la
          fraternité et la solidarité entre ses différents membres, les
          Staffiers et ce, depuis sa création en 2002. L’idéologie qui habite
          chaque Staffier, en tout temps et en tout lieu, se résume dans trois
          expressions qui fondent l’esprit des origines du STAFF TECHNIQUE :
          amitié – fraternité – solidarité.
          <br />
          <br />
          Au fil des années, le STAFF a su rester fidèle à ses valeurs
          fondamentales. En s’appuyant sur une organisation structurée et des
          initiatives concrètes, le STAFF s’engage à soutenir les Staffiers dans
          les moments difficiles, à célébrer leurs réussites et à contribuer
          activement au développement de la Communauté. Chaque activité
          entreprise reflète notre désir collectif de construire un avenir
          meilleur, basé sur l’entraide et la solidarité.
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
