const HeroContact = () => {
  return (
    <div className="flex flex-col items-start w-full text-lg font-medium leading-6 justify-start">
      <div className="mt-6 text-2xl max-lg:text-xl leading-none text-justify max-lg:mx-auto max-lg:text-center text-black max-md:mt-10 tracking-wide">
        Vous avez des questions ?
        <br />
        Contactez-nous !
      </div>
      <div className="mt-4 text-4xl leading-none text-black flex flex-col tracking-tight text-justify max-lg:mx-auto">
        <span className="text-sm">
          <i className="text-[#603f32] fa-solid fa-phone"></i> +237 679 10 08 48
        </span>
        <span className="text-sm">
          <i className="text-[#603f32] fa-solid fa-phone"></i> +216 29 258 563
        </span>
        <span className="text-sm">
          <i className="text-[#603f32] fa-solid fa-phone"></i> +33 7 52 74 18 01
        </span>
        <span className="text-sm">
          <i className="text-[#603f32] fa-solid fa-envelope"></i> lestafftechnique@gmail.com
        </span>
      </div>
    </div>
  );
};

export default HeroContact;
