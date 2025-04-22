import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MENU_ITEMS } from "@/lib/constants";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
    )}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {MENU_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "transition duration-200 font-medium",
                  location === item.path 
                    ? "text-primary" 
                    : "text-secondary/80 hover:text-primary"
                )}>
                  {item.name}
                </a>
              </Link>
            ))}
            
            <Link href="/contact">
              <a className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-sm transition duration-200 font-medium">
                Contact Us
              </a>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white absolute w-full shadow-md transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {MENU_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={cn(
                "block px-3 py-2 hover:bg-gray-50 rounded-sm",
                location === item.path
                  ? "text-primary"
                  : "text-secondary/80 hover:text-primary"
              )}>
                {item.name}
              </a>
            </Link>
          ))}
          
          <Link href="/contact">
            <a className="block px-3 py-2 text-white bg-primary hover:bg-primary-dark rounded-sm">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
