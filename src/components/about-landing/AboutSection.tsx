import { Button } from "@/components/ui/button";
import AboutContent from "./AboutContent";
import photo from "../../assets/images/photos/photo10.jpg";

const AboutSection = () => {
  const aboutData = {
    title: "QUI SOMMES NOUS ?",
    heading: "À propos de nous",
    content: `Le STAFF TECHNIQUE a toujours promu et valorisé l’entraide, la fraternité et la solidarité entre ses différents membres, les Staffiers et ce, depuis sa création en 2002. L’idéologie qui habite chaque Staffier, en tout temps et en tout lieu, se résume dans trois expressions qui fondent l’esprit des origines du STAFF TECHNIQUE : amitié – fraternité – solidarité.`,
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-black" />
      </div>

      {/* Content */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-gradient-to-b from-background via-secondary/10 to-background rounded-xl shadow-2xl hover:shadow-lg p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-6 flex flex-col">
                <AboutContent data={aboutData} />
                <Button
                  asChild
                  className="bg-black hover:bg-black/70 text-white text-xl p-6 max-lg:text-lg max-lg:p-4 shadow-2xl"
                >
                  <a href="/about" target="_blank">
                    En savoir plus
                  </a>
                </Button>
              </div>

              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <img
                  src={photo}
                  alt="People enjoying hookah"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
