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
              className="object-cover h-full w-full absolute inset-0"
            />
            
            {/* Simple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Simple Content */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 pb-20 md:pb-24 z-20 w-full">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-3 md:mb-4">{slide.title}</h2>
                <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl">{slide.subtitle}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                  <Link href={slide.ctaLink}>
                    <a className="btn-primary text-center text-base sm:text-lg px-6 sm:px-8 py-4 w-full">View {slide.type}</a>
                  </Link>
                  
                  <Link href={primaryCta.href}>
                    <a className="btn-secondary text-center text-base sm:text-lg px-6 sm:px-8 py-4 w-full">{primaryCta.text}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Simple Navigation Controls */}
      <div className="hidden md:flex absolute inset-x-0 bottom-1/2 z-30 justify-between items-center px-8">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black/25 hover:bg-primary/60 flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black/25 hover:bg-primary/60 flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Minimal Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "bg-primary w-8" 
                : "bg-white/40 hover:bg-white/70 w-4"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
