import logo from "../assets/images/logo.png";

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
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6f1dbc8fff50bc292bc63717e9472e2a35a8f29663eaf19731e20c63d67d05d?placeholderIfAbsent=true&apiKey=4e3da5d4f0374cc5835ced3b9d5ac9fc",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a563878d996f8aee3a7bb35ee349dc06214364fb543aebe6e8a2cc6e69e9ab02?placeholderIfAbsent=true&apiKey=4e3da5d4f0374cc5835ced3b9d5ac9fc",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3937bc78cd76f818e057c28daf88b3b8006cedbd5a34dca6a340fa64e2f3d79?placeholderIfAbsent=true&apiKey=4e3da5d4f0374cc5835ced3b9d5ac9fc",
      alt: "Instagram",
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
            <a
              key={index}
              href={link.route}
              className="self-stretch my-auto hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white hover:underline"
              tabIndex="0"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 mt-16 sm:mt-24 w-full h-px bg-white fill-white" />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center sm:items-start w-full mt-3 px-4">
          <div className="text-xs sm:text-sm leading-6 text-gray-300 text-center sm:text-left">
            © 2025 Staff Technique. Tous droits réservés.
          </div>
          <div className="flex overflow-hidden gap-4 items-center">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-white"
                tabIndex="0"
              >
                <img
                  loading="lazy"
                  src={icon.src}
                  alt={icon.alt}
                  className="w-5 sm:w-6 aspect-square object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
