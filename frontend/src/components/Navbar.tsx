// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet";
// import logo from "../assets/images/logo.png";
//
// const Navbar = () => {
//   const location = useLocation();
//
//   const [menuState, setMenuState] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
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
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
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
//       <nav className="max-w-full flex h-16 items-center justify-between px-12 mx-auto">
//         {/* Logo and Title */}
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
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
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
//         {/* Mobile Navigation */}
//         <div className="md:hidden">
//           <Sheet open={menuState} onOpenChange={setMenuState}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="text-white p-2">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//
//             <SheetContent side="right" className="bg-black text-white">
//               <SheetClose asChild className="absolute right-4 top-4">
//                 <button aria-label="Fermer le menu">
//                   <X className="h-5 w-5" />
//                 </button>
//               </SheetClose>
//
//               <ul className="flex flex-col gap-4 mt-12">
//                 {navItems.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.href}
//                       onClick={() => setMenuState(false)}
//                       className={`block text-base font-medium duration-150 ${
//                         isActive(item.href)
//                           ? "text-accent-foreground font-semibold"
//                           : "text-muted-foreground hover:text-accent-foreground"
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
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../assets/images/logo.png";

const menuItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Plaidoyer", href: "/advocacy" },
  { name: "Médiathèque", href: "/media" },
  { name: "Documentation", href: "/docs" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      {/* Overlay for mobile */}
      {menuState && (
        <div
          onClick={() => setMenuState(false)}
          className="fixed inset-0 z-10 bg-black/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-[#09090b] max-w-4xl rounded-xl border-2 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 text-white lg:py-4">
            {/* Logo + Hamburger (mobile) */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link
                to="/"
                aria-label="accueil"
                className="flex items-center space-x-2"
              >
                <img
                  src={logo}
                  alt="logo du staff technique"
                  className="h-10 w-10 animate-pulse filter brightness-100 hover:scale-150 drop-shadow-[0_0_5px_white]"
                />
              </Link>

              {/* Hamburger */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Fermer le menu" : "Ouvrir le menu"}
                  className="relative z-20 p-2.5"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 duration-200",
                      menuState && "rotate-180 scale-0 opacity-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 rotate-180 scale-0 opacity-0 duration-200",
                      menuState && "rotate-0 scale-100 opacity-100",
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm items-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block duration-150 py-2 px-4 rounded-md hover:border-2 hover:border-[#8f7d5e]",
                        isActive(item.href)
                          ? "text-accent-foreground font-semibold"
                          : "text-muted-foreground hover:text-accent-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile dropdown menu */}
            <div
              className={cn(
                "bg-[#09090b] hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden",
                menuState && "block",
              )}
            >
              <ul className="space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => setMenuState(false)}
                      className={cn(
                        "block duration-150",
                        isActive(item.href)
                          ? "text-accent-foreground font-semibold"
                          : "text-muted-foreground hover:text-accent-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
