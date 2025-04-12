const DonationContent = () => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-2.5 font-medium text-black max-md:mt-10 max-md:max-w-full">
        <div className="text-base leading-none font-semibold max-lg:mx-auto text-[#8f7d5e] uppercase">
          Comment les dons peuvent aider
        </div>
        <div className="mt-5 text-5xl leading-6 font-semibold max-lg:text-4xl max-lg:mx-auto text-muted-foreground">
          Faites un don
        </div>
        <div className="self-stretch mt-8 text-lg leading-6 max-md:max-w-full text-justify font-light">
          Nous sommes une communauté dynamique et solidaire, unie par des liens
          d&apos;amitié et des valeurs de partage. Ensemble, nous réalisons des
          œuvres caritatives qui impactent positivement la vie de nombreuses
          personnes. Qu&apos;il s&apos;agisse d&apos;aider des orphelins, de
          soutenir des veuves, ou de promouvoir la cohésion sociale, chaque
          geste compte.
          <br />
          <br />
          Vous pouvez nous aider à étendre la portée de nos actions et à
          répondre efficacement aux besoins des communautés les plus
          vulnérables. Que vous soyez une organisation, une entreprise, un
          bienfaiteur, ou simplement une âme généreuse, nous accueillons avec
          gratitude chaque geste de solidarité.
          <br />
          <br />
          Si vous souhaitez contribuer à nos projets, vous êtes au bon endroit.
          Grâce à votre générosité, nous pourrons poursuivre nos engagements en
          faveur du développement et de l’entraide.{" "}
          <strong>
            Ensemble, faisons rayonner nos valeurs et transformons des vies.
          </strong>
        </div>
      </div>
    </div>
  );
};

export default DonationContent;
