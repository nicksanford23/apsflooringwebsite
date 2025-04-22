import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "default" | "large" | "small";
  withText?: boolean;
}

const Logo = ({ className, size = "default", withText = true }: LogoProps) => {
  const logoSizes = {
    small: "h-8 w-auto",
    default: "h-12 w-auto",
    large: "h-16 w-auto"
  };

  return (
    <Link href="/">
      <a className={cn("flex items-center", className)}>
        {/* Using SVG recreation of logo */}
        <svg 
          className={cn(logoSizes[size])} 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E7A0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#goldGradient)" />
          <g fill="black">
            <polygon points="50,15 85,50 50,85 15,50" strokeWidth="6" stroke="black" fill="none"/>
            <polygon points="50,25 75,50 50,75 25,50" strokeWidth="4" stroke="black" fill="none"/>
            <polygon points="50,35 65,50 50,65 35,50" strokeWidth="2" stroke="black" fill="none"/>
            <rect x="45" y="45" width="10" height="10" />
          </g>
        </svg>
        
        {withText && (
          <div className="ml-3 flex flex-col">
            <span className="text-xl font-playfair font-bold tracking-wider text-primary">APS FLOORING</span>
            <span className="text-xs tracking-widest text-secondary">TILES IN STYLE</span>
          </div>
        )}
      </a>
    </Link>
  );
};

export default Logo;
