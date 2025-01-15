import DonationContent from "./DonationContent";
// import DonationImage from "./DonationImage";
import volunteer from "../../assets/images/photos/volunteer.jpg";

const DonationSection = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-6 md:px-20 pt-8 md:pt-16 pb-16 md:pb-28 bg-zinc-100">
      <div className="flex flex-col w-full max-w-[1407px]">
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5">
            <DonationContent />
            <div className="w-full md:w-1/2 h-[300px] md:h-auto">
              <img
                src={volunteer}
                alt="People enjoying hookah"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href="/advocacy"
            className="group relative flex items-center text-center tracking-wider gap-3 px-6 md:px-8 py-3 text-base font-medium rounded-[200px] text-white bg-black drop-shadow-md mt-8 md:mt-4 hover:scale-105 transition-transform"
          >
            En savoir plus
            <div className="absolute inset-0 h-full w-full scale-0 rounded-[200px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
