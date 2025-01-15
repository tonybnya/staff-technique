import AboutContent from "./AboutContent";
import photo from "../../assets/images/photos/photo10.jpg";

const AboutSection = () => {
  const aboutData = {
    title: "QUI SOMMES NOUS ?",
    heading: "À propos de nous",
    content: `Le STAFF TECHNIQUE a toujours promu et valorisé l’entraide, la fraternité et la solidarité entre ses différents membres et ce, depuis sa création. L’idéologie qui habite chaque Staffier, en tout temps et en tout lieu, se résume dans trois expressions qui fondent l’esprit des origines du STAFF TECHNIQUE : amitié – fraternité – solidarité.`,
  };

  return (
    <div className="relative">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-black" />
      </div>

      {/* Content */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <AboutContent data={aboutData} />
                <a
                  href="/about"
                  className="group relative inline-flex items-center justify-center text-center tracking-wider gap-3 px-6 sm:px-8 py-3 w-full sm:w-max text-base font-medium rounded-[200px] text-white bg-black drop-shadow-md transition-all duration-300 hover:bg-black/90"
                >
                  En savoir plus
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-[200px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                </a>
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
