import DonationContent from "./DonationContent";
import { Button } from "@/components/ui/button";
import photo from "../../assets/images/photos/photo5.jpg";
// import volunteer from "../../assets/images/photos/volunteer.jpg";

const DonationSection = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-6 md:px-20 py-16 md:py-28 bg-zinc-100">
      <div className="flex lg:flex-row max-lg:flex-col justify-center items-center gap-8 max-w-6xl w-full">
        <div className="w-full">
          <img
            src={photo}
            alt="image of a volunteer"
            className="w-full h-auto rounded-lg object-cover aspect-video md:aspect-square"
          />
        </div>
        <div className="w-full">
          <DonationContent />
          <Button
            asChild
            className="bg-black hover:bg-black/70 text-white text-xl w-full mt-6 p-6 max-lg:text-lg max-lg:p-4 shadow-2xl"
          >
            <a href="/advocacy" target="_blank">
              En savoir plus
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
