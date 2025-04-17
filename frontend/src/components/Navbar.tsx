// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet";
// import { Menu, X } from "lucide-react";
//
// const Navbar = () => {
//   const location = useLocation();
//
//   const [menuState, setMenuState] = React.useState(false);
//   const [isScrolled, setIsScrolled] = React.useState(false);
//
//   const navItems = [
//     { label: "Accueil", href: "/" },
//     { label: "À propos", href: "/about" },
//     { label: "Plaidoyer", href: "/advocacy" },
//     { label: "Médiathèque", href: "/media" },
//     { label: "Documentation", href: "/docs" },
//   ];
//
//   // Track scroll position
//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   const isActive = (path: string) => location.pathname === path;
//
//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled ? "bg-black/90 shadow-md py-4" : "bg-black py-2"
//       }`}
//     >
//       <nav className="container flex h-16 items-center justify-between px-4 mx-auto">
//         {/* Logo */}
//         <div className="flex items-center gap-4">
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="logo du staff technique"
//               className="h-8 w-8 cursor-pointer transition-transform hover:scale-110"
//             />
//           </Link>
//           <span className="text-white text-2xl">
//             <svg
//               width="4"
//               height="30"
//               viewBox="-1 -1 4 30"
//               fill="none"
//               id="svg-511912329_162"
//             >
//               <line x1="0.517395" x2="0.517395" y2="28" stroke="white"></line>
//             </svg>
//           </span>
//           <span className="text-white font-bold">STAFF TECHNIQUE</span>
//         </div>
//
//         {/* Desktop Nav */}
//         <div className="max-sm:hidden md:flex items-center gap-8">
//           <ul className="flex items-center justify-center gap-6">
//             {navItems.map((item, index) => (
//               <li key={index} className="tracking-tight">
//                 <Link
//                   to={item.href}
//                   className={`text-lg font-medium duration-150 ${
//                     isActive(item.href)
//                       ? "text-accent-foreground font-bold"
//                       : "text-muted-foreground hover:text-accent-foreground"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//
//           <Button
//             asChild
//             className="bg-gradient-to-br from-[#602f32] to-[#09090b] text-white hover:bg-[#8f7d5e] shadow-md"
//           >
//             <Link to="/membership">Adhérer</Link>
//           </Button>
//         </div>
//
//         {/* Mobile Nav */}
//         <div className="md:hidden">
//           <Sheet open={menuState} onOpenChange={setMenuState}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="text-white">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//
//             <SheetContent side="right" className="bg-black text-white">
//               <SheetClose asChild className="absolute right-4 top-4">
//                 <div>
//                   <X className="h-5 w-5" />
//                 </div>
//               </SheetClose>
//
//               <ul className="flex flex-col gap-4 mt-12">
//                 {navItems.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.href}
//                       onClick={() => setMenuState(false)}
//                       className={`block text-sm duration-150 ${
//                         isActive(item.href)
//                           ? "text-accent-foreground font-semibold my-shadow-text"
//                           : "text-muted-foreground my-shadow-text hover:text-accent-foreground"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//
//               <Button
//                 asChild
//                 className="mt-6 bg-gradient-to-br from-[#602f32] to-[#09090b] text-white hover:bg-[#602f32] w-full"
//               >
//                 <Link to="/membership" onClick={() => setMenuState(false)}>
//                   Adhérer
//                 </Link>
//               </Button>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// };
//
// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Plaidoyer", href: "/advocacy" },
    { label: "Médiathèque", href: "/media" },
    { label: "Documentation", href: "/docs" },
  ];

  // Track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md py-4" : "bg-black py-2"
      }`}
    >
      <nav className="max-w-full flex h-16 items-center justify-between px-12 mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo du staff technique"
              className="h-8 w-8 cursor-pointer transition-transform hover:scale-110"
            />
          </Link>
          <span className="text-white text-2xl">
            <svg
              width="4"
              height="30"
              viewBox="-1 -1 4 30"
              fill="none"
              id="svg-511912329_162"
            >
              <line x1="0.517395" x2="0.517395" y2="28" stroke="white"></line>
            </svg>
          </span>
          <span className="text-white font-bold">STAFF TECHNIQUE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center justify-center gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="tracking-tight">
                <Link
                  to={item.href}
                  className={`text-lg font-medium duration-150 ${
                    isActive(item.href)
                      ? "text-accent-foreground font-bold"
                      : "text-muted-foreground hover:text-accent-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="bg-gradient-to-br from-[#602f32] to-[#09090b] text-white hover:bg-[#8f7d5e] shadow-md"
          >
            <Link to="/membership">Adhérer</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={menuState} onOpenChange={setMenuState}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-black text-white">
              <SheetClose asChild className="absolute right-4 top-4">
                <button aria-label="Fermer le menu">
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>

              <ul className="flex flex-col gap-4 mt-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => setMenuState(false)}
                      className={`block text-base font-medium duration-150 ${
                        isActive(item.href)
                          ? "text-accent-foreground font-semibold"
                          : "text-muted-foreground hover:text-accent-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-6 bg-gradient-to-br from-[#602f32] to-[#09090b] text-white hover:bg-[#602f32] w-full"
              >
                <Link to="/membership" onClick={() => setMenuState(false)}>
                  Adhérer
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
