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
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Plaidoyer", href: "/advocacy" },
    { label: "Mediathèque", href: "/media" },
    { label: "Documentation", href: "/docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container flex h-16 items-center px-4 mx-auto">
        {/* Logo */}
        <a href="/" className="mr-6">
          <img
            src={logo}
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform"
            alt="logo du staff technique"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-xl font-semibold tracking-tight text-white text-muted-foreground transition-colors hover:text-gray-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Membership Button */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-[#602f32] text-white hover:bg-[#8f7d5e] shadow-2xl"
          >
            <a href="/membership">Adhérer</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black">
            <SheetClose asChild className="absolute right-4 top-4">
              <div className="text-white">
                <X className="h-5 w-5" />
              </div>
            </SheetClose>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium tracking-tight text-white transition-colors hover:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#602f32] text-white hover:bg-[#8f7d5e] w-full"
              >
                <a href="/membership">Adhérer</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
