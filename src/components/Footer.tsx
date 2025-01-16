import logo from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      label: "Accueil",
      route: "/",
    },
    {
      label: "À Propos",
      route: "/about",
    },
    {
      label: "Plaidoyer",
      route: "/advocacy",
    },
    {
      label: "Documentation",
      route: "/docs",
    },
    {
      label: "Adhésion",
      route: "/membership",
    },
  ];

  const socialIcons = [
    {
      icon: Facebook,
      alt: "Facebook",
      href: "#",
    },
    {
      icon: Twitter,
      alt: "Twitter",
      href: "#",
    },
    {
      icon: Instagram,
      alt: "Instagram",
      href: "#",
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center px-5 sm:px-10 lg:px-20 py-8 sm:py-11 w-full bg-black border-t-2">
      <div className="flex flex-col items-center w-full max-w-[1590px]">
        <div className="text-2xl sm:text-3xl font-semibold text-white">
          <img
            src={logo}
            className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer animate-pulse"
            alt="logo du staff technique"
          />
        </div>
        <nav className="flex flex-col sm:flex-row justify-center overflow-hidden gap-4 sm:gap-6 items-center mt-6 sm:mt-8 text-sm sm:text-base leading-loose text-white text-center w-full">
          {footerLinks.map((link, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              className="text-white hover:text-gray-300 hover:bg-transparent"
              asChild
            >
              <a href={link.route}>{link.label}</a>
            </Button>
          ))}
        </nav>
        <div className="flex shrink-0 mt-16 sm:mt-24 w-full h-px bg-white fill-white" />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center sm:items-center w-full mt-3 px-4">
          <div className="text-xs sm:text-sm leading-6 text-gray-300 text-center sm:text-left">
            2025 Staff Technique. Tous droits réservés.
          </div>
          <div className="flex overflow-hidden gap-4 items-center">
            {socialIcons.map((icon, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                className="text-[#602f32] hover:text-gray-300"
                asChild
              >
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  <icon.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
