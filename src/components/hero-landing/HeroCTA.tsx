const HeroCTA = () => {
  return (
    <div className="flex gap-2 justify-start my-4 max-w-full font-bold leading-10">
      <a
        href="/membership"
        className="group flex items-center text-center tracking-wider gap-3 px-8 py-3 w-max text-base max-lg:text-sm font-medium rounded-[200px] text-white bg-[#8f7d5e] drop-shadow-md"
      >
        Nous rejoindre
        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </a>
      <a
        href="/donate"
        className="group flex items-center text-center tracking-wider gap-3 px-8 py-3 w-max text-base max-lg:text-sm font-medium rounded-[200px] text-white bg-[#602f32] drop-shadow-md"
      >
        Faire un don
        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </a>
    </div>
  );
};

export default HeroCTA;
