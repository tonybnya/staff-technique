import { Button } from "@/components/ui/button";
import logo from "/logo.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex text-white">
      <div className="w-1/2 h-screen">
        <img
          src="/bg.png"
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between max-lg:justify-center items-center p-8 bg-black min-h-screen">
        <div className="flex flex-col items-center gap-3 mb-12">
          <img src={logo} alt="logo" className="h-30 w-80" />
        </div>

        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl max-lg:text-lg font-semibold leading-none tracking-tight">
            Oops! Vous êtes
            <br />
            sur une ressource
            <br />
            introuvable !
          </h1>
          <p className="text-lg max-lg:text-sm font-light leading-6 tracking-tight">
            La page d'accueil est à portée de clic.
            <br />
            Revenons à nos moutons.
          </p>

          <Button
            size="lg"
            className="cursor-pointer px-8 bg-[#602f32] hover:bg-[#8f7d5e]/90 hover:scale-105"
          >
            <a
              href="/"
              className="uppercase font-bold"
              rel="noopener noreferrer"
              aria-label="Go to home page"
            >
              Accueil
            </a>
          </Button>
        </div>

        <div className="mt-12 text-[#8f7d5e] text-sm font-bold">
          <span>Error Code 404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
