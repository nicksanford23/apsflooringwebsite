import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn, smoothScrollTo } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

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
  showRating?: boolean;
  className?: string;
}

const HeroSection = ({
  slides = [],
  primaryCta,
  secondaryCta,
  showRating = true,
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
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <section className={cn("relative h-[90vh] w-full overflow-hidden bg-secondary", className)}>
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
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            
            {/* Type Badge */}
            <div className="absolute top-8 right-8 z-20 bg-primary/90 px-4 py-2 text-white font-medium uppercase tracking-wider">
              {slide.type}
            </div>
            
            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full md:w-2/3 lg:w-1/2">
              <h3 className="text-primary uppercase tracking-wider font-medium mb-2">{COMPANY_INFO.name}</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-lg text-white/90 mb-6">{slide.subtitle}</p>
              <Link href={slide.ctaLink}>
                <a className="btn-primary inline-flex items-center">
                  Learn More
                  <ChevronRight className="ml-2" size={18} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-1/2 z-30 flex justify-between items-center px-4">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-primary flex items-center justify-center text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-primary flex items-center justify-center text-white"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentSlide === index 
                ? "bg-primary w-6" 
                : "bg-white/60 hover:bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Bottom Actions */}
      <div className="absolute left-0 right-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-0">
            <Link href={primaryCta.href}>
              <a className="btn-primary text-base px-6 py-3">{primaryCta.text}</a>
            </Link>
            
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <a className="btn-secondary text-base px-6 py-3">{secondaryCta.text}</a>
              </Link>
            )}
          </div>
          
          {/* Rating Badge */}
          {showRating && (
            <div className="bg-black/50 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-sm inline-flex items-center">
              <div className="mr-2 text-primary">
                {"★★★★★"}
              </div>
              <span className="text-white font-medium text-sm">
                {COMPANY_INFO.rating} Google Rating
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => smoothScrollTo('content-start')}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
