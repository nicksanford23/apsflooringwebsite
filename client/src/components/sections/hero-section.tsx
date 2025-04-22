import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  ctaLink: string;
  type: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
}

const HeroSection = ({
  slides = [],
  primaryCta,
  secondaryCta,
  className
}: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);
  
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);
  
  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <section className={cn("relative h-[85vh] w-full overflow-hidden bg-secondary", className)}>
      {/* Slide Show */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover h-full w-full absolute inset-0 brightness-105 contrast-105"
              style={{ objectPosition: "center center" }}
            />
            
            {/* Lighter gradient overlay for better image visibility */}
            <div className="absolute inset-0 bg-black/30 sm:bg-gradient-to-t sm:from-black/40 sm:to-transparent"></div>
            
            {/* Content - Better centered on all screens */}
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center items-center z-20">
              <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-0 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl text-shadow-black">{slide.title}</h2>
                  <p className="text-lg sm:text-xl text-white mb-8 mx-auto drop-shadow-xl text-shadow-sm">{slide.subtitle}</p>
                  
                  {/* Buttons centered on all screens */}
                  <div className="flex flex-row gap-4 justify-center">
                    <Link href={slide.ctaLink}>
                      <a className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black font-bold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md text-center shadow-[0_4px_14px_rgba(212,175,55,0.5)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.7)] transition-all duration-300">View {slide.type}</a>
                    </Link>
                    
                    <a 
                      href="#quote-form" 
                      className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md text-center shadow-[0_4px_14px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)] transition-all duration-300"
                    >
                      Get Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls - Repositioned for better visibility */}
      <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 z-30 flex justify-between items-center pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide Indicators - More visible on mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 sm:h-2.5 rounded-full transition-all duration-300 shadow-md",
              currentSlide === index 
                ? "bg-primary w-8 sm:w-10" 
                : "bg-white/60 hover:bg-white/90 w-4 sm:w-5"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
