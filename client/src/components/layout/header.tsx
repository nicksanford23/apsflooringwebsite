import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MENU_ITEMS } from "@/lib/constants";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

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
      isScrolled ? "bg-black/95 backdrop-blur-sm shadow-sm" : "bg-black"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex justify-center items-center">
            <Logo size="default" withText={false} />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {MENU_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "transition duration-200 font-medium",
                  location === item.path 
                    ? "text-[#d4af37]" 
                    : "text-white hover:text-[#d4af37]"
                )}>
                  {item.name}
                </a>
              </Link>
            ))}
            
            <Link href="/contact">
              <a className="text-black bg-[#d4af37] hover:bg-[#c4a030] px-5 py-2 rounded-md transition duration-200 font-medium flex items-center">
                <Phone size={16} className="mr-2" /> Get a Quote
              </a>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white hover:text-[#d4af37]"
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
        "md:hidden bg-black absolute w-full shadow-md transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="px-4 pt-2 pb-3 space-y-3">
          {MENU_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={cn(
                "block px-3 py-2 hover:bg-black/30 rounded-md",
                location === item.path
                  ? "text-[#d4af37]"
                  : "text-white hover:text-[#d4af37]"
              )}>
                {item.name}
              </a>
            </Link>
          ))}
          
          <Link href="/contact">
            <a className="block px-3 py-2 text-black bg-[#d4af37] hover:bg-[#c4a030] rounded-md font-medium">
              Get a Quote
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
