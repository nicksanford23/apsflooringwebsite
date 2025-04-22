import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "default" | "large" | "small";
  withText?: boolean;
}

const Logo = ({ className, size = "default", withText = true }: LogoProps) => {
  const logoSizes = {
    small: "h-10 w-auto",
    default: "h-16 w-auto",
    large: "h-20 w-auto"
  };

  return (
    <Link href="/">
      <a className={cn("flex items-center justify-center", className)}>
        {/* Using actual logo image */}
        <img 
          src="/images/aps-logo.jpg" 
          alt="APS Flooring" 
          className={cn(logoSizes[size], "object-contain rounded-sm")}
        />
        
        {withText && (
          <div className="ml-3 flex flex-col">
            <span className="text-xl font-playfair font-bold tracking-wider text-[#d4af37]">APS FLOORING</span>
            <span className="text-xs tracking-widest text-white">TILES IN STYLE</span>
          </div>
        )}
      </a>
    </Link>
  );
};

export default Logo;
