const HeroSloganItem = ({ text }) => {
  return (
    <div className="text-center p-4 m-2 drop-shadow-xl border border-black rounded-lg shadow bg-gray-700">
      <h1 className="text-5xl font-normal font-righteous text-white">{text}</h1>
    </div>
  );
};

export default HeroSloganItem;
