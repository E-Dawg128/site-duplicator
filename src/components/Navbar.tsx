import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isRecipePage = location.pathname.includes("/recipes");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id?: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/" && !id) return;
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navLinks = (
    <>
      {isRecipePage && (
        <Link to="/" className="hover:text-secondary transition-colors" onClick={() => handleLinkClick()}>
          Home
        </Link>
      )}
      {!isMobile && (
        <Link to="/" className="hover:text-secondary transition-colors" onClick={() => handleLinkClick("about")}>
          About
        </Link>
      )}
      <Link to="/" className="hover:text-secondary transition-colors" onClick={() => handleLinkClick("services")}>
        Services
      </Link>
      <Link to="/" className="hover:text-secondary transition-colors" onClick={() => handleLinkClick("menu")}>
        Menu
      </Link>
      <Link to="/" className="hover:text-secondary transition-colors" onClick={() => handleLinkClick("contact")}>
        Contact
      </Link>
      <a
        href="https://www.instagram.com/ravebaeeats/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="h-12" onClick={() => handleLinkClick()}>
            <img
              src="/lovable-uploads/7683c633-a52a-47e5-8760-38c38e12cb3f.png"
              alt="Rave Bae Eats"
              className="h-full w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-8 items-center">{navLinks}</div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary focus:outline-none"
                aria-label="Close Mobile Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">{navLinks}</nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
