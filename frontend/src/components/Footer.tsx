import logo from "../assets/images/logo.png";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Accueil", route: "/" },
    { label: "À Propos", route: "/about" },
    { label: "Plaidoyer", route: "/advocacy" },
    { label: "Médiathèque", route: "/media" },
    { label: "Documentation", route: "/docs" },
    { label: "Adhésion", route: "/membership" },
  ];

  const socialIcons = [
    { icon: Facebook, alt: "Facebook", href: "#" },
    { icon: Twitter, alt: "Twitter", href: "#" },
    { icon: Instagram, alt: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#09090b] border-t-2 border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex justify-center">
            <img
              src={logo}
              className="h-32 object-contain animate-pulse filter brightness-100 hover:scale-150 drop-shadow-[0_0_5px_white]"
              alt="logo du staff"
            />
          </a>

          {/* Navigation Links */}
          <div className="w-full max-w-2xl flex flex-col items-center">
            <h2 className="text-sm font-semibold text-white uppercase mb-4 text-center">
              Liens de navigation
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-10 text-gray-400 text-sm font-medium text-center">
              {footerLinks.map((link, index) => (
                <li key={index} className="hover:scale-105">
                  <a href={link.route} className="hover:text-[#602f32]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <span className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline text-[#602f32]">
              Staff Technique
            </a>
            . Tous Droits Réservés.
          </span>

          {/* Social icons */}
          <div className="flex gap-4">
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
