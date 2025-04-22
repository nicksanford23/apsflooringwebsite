
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowDown, CheckCircle } from "lucide-react";
import { cn, smoothScrollTo } from "@/lib/utils";
import { COMPANY_INFO, CITY } from "@/lib/constants";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { galleryImages } from "@/data/gallery";

interface HeroSectionProps {
  backgroundImage?: string;
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
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  showRating = true,
  className
}: HeroSectionProps) => {
  // Get featured images for the slideshow
  const featuredImages = galleryImages.filter(img => img.featured).slice(0, 5);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [featuredImages.length]);

  return (
    <section className={cn("relative h-[90vh] md:h-[85vh] w-full overflow-hidden bg-secondary", className)}>
      {/* Image Carousel */}
      <Carousel className="absolute inset-0 h-full w-full" 
        setApi={(api) => {
          api?.on("select", () => {
            setActiveSlide(api.selectedScrollSnap());
          });
          // Initially set to active slide
          api?.scrollTo(activeSlide);
        }}
      >
        <CarouselContent className="h-full">
          {featuredImages.map((image, index) => (
            <CarouselItem key={image.id} className="h-full">
              <div className="relative h-full w-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover h-full w-full absolute inset-0"
                />
                {/* Optional before/after transition for refinishing images */}
                {image.beforeImage && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-sm">
                    Before & After
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom carousel controls */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-2">
          <CarouselPrevious className="relative h-10 w-10 border-primary text-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="relative h-10 w-10 border-primary text-primary hover:bg-primary hover:text-white" />
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-10 left-10 z-30 flex gap-2">
          {featuredImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                activeSlide === index ? "bg-primary w-10" : "bg-white/70 hover:bg-white"
              )}
              onClick={() => {
                setActiveSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-20 container-custom h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Diamond logo accent element */}
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute w-full h-full transform rotate-45 border-2 border-primary"></div>
            <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 transform rotate-45 border-2 border-primary"></div>
            <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 transform rotate-45 border-2 border-primary"></div>
            <div className="absolute w-1/4 h-1/4 top-3/8 left-3/8 transform rotate-45 bg-primary"></div>
          </div>

          <span className="text-lg uppercase tracking-[0.2em] text-primary font-medium">APS Flooring</span>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mt-4 mb-6 leading-tight">
            <span className="block">{title}</span>
            {highlight && <span className="block text-primary mt-2">{highlight}</span>}
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">{subtitle}</p>
          
          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center">
              <CheckCircle className="text-primary mr-3" size={20} />
              <span className="text-white">Expert Craftsmanship</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary mr-3" size={20} />
              <span className="text-white">On-Time Completion</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary mr-3" size={20} />
              <span className="text-white">Premium Materials</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary mr-3" size={20} />
              <span className="text-white">5-Year Warranty</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href={primaryCta.href}>
              <a className="btn-primary text-lg px-8 py-4">{primaryCta.text}</a>
            </Link>
            
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <a className="btn-secondary text-lg px-8 py-4">{secondaryCta.text}</a>
              </Link>
            )}
          </div>
          
          {/* Rating Badge */}
          {showRating && (
            <div className="mt-12 bg-black/50 backdrop-blur-sm border border-primary/30 px-6 py-4 rounded-sm inline-flex items-center">
              <div className="mr-3 text-primary text-lg">
                {"★★★★★"}
              </div>
              <span className="text-white font-medium">
                {COMPANY_INFO.rating} Google Rating • Top-Rated Flooring Contractor in {CITY}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative diagonal line */}
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-gradient-to-tr from-primary/80 to-primary-dark/80 transform -skew-x-12 z-10"></div>
      
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
