import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import { cn, smoothScrollTo } from "@/lib/utils";
import { COMPANY_INFO, CITY } from "@/lib/constants";

interface HeroSectionProps {
  backgroundImage: string;
  videoUrl?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showRating?: boolean;
  className?: string;
}

const HeroSection = ({
  backgroundImage,
  videoUrl,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  showRating = true,
  className
}: HeroSectionProps) => {
  return (
    <section className={cn("relative h-[80vh] w-full overflow-hidden bg-secondary", className)}>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      
      {/* Background Video with Fallback Image */}
      {videoUrl ? (
        <>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover h-full w-full absolute inset-0"
          >
            <source src={videoUrl} type="video/webm" />
            <img 
              src={backgroundImage} 
              alt="Luxury flooring installation" 
              className="object-cover h-full w-full absolute inset-0"
            />
          </video>
        </>
      ) : (
        <img 
          src={backgroundImage} 
          alt="Luxury flooring installation" 
          className="object-cover h-full w-full absolute inset-0"
        />
      )}
      
      {/* Content */}
      <div className="relative z-20 container-custom h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
          <span className="block">{title}</span>
          {highlight && <span className="block text-primary mt-2">{highlight}</span>}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-10">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href={primaryCta.href}>
            <a className="btn-primary">{primaryCta.text}</a>
          </Link>
          
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <a className="btn-secondary">{secondaryCta.text}</a>
            </Link>
          )}
        </div>
        
        {/* Rating Badge */}
        {showRating && (
          <div className="mt-16 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-sm flex items-center">
            <div className="mr-3 text-primary">
              {"★★★★★"}
            </div>
            <span className="text-white font-medium">
              {COMPANY_INFO.rating} Google Rating • Top-Rated Flooring Contractor in {CITY}
            </span>
          </div>
        )}
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => smoothScrollTo('content-start')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
