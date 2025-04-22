import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  title: string;
  src: string;
  category: string;
  serviceSlug?: string | null;
  alt?: string;
  featured?: boolean;
  beforeImage?: string | null;
  width?: number;
  height?: number;
}

interface GallerySlideshowProps {
  images: GalleryImage[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const GallerySlideshow = ({
  images = [],
  className,
  title = "Our Latest Projects",
  subtitle = "Browse through some of our recent work"
}: GallerySlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);
  
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);
  
  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  if (images.length === 0) return null;
  
  return (
    <section className={cn("relative py-16 md:py-24 bg-accent overflow-hidden", className)} id="gallery-preview">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto mb-6">{subtitle}</p>
          <Link href="/gallery">
            <a className="text-primary hover:text-primary-dark font-medium transition-colors">
              View Full Gallery
            </a>
          </Link>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-sm">
          {images.map((image, index) => (
            <div 
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000",
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="object-cover h-full w-full absolute inset-0"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-primary text-sm uppercase tracking-wider font-medium">{image.category}</span>
                    <h3 className="text-white text-xl font-medium">{image.title}</h3>
                  </div>
                  {image.serviceSlug && (
                    <Link href={`/services/${image.serviceSlug}`}>
                      <a className="text-primary hover:text-white text-sm transition-colors">
                        View Service
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Controls */}
          <div className="absolute inset-x-0 bottom-1/2 z-30 flex justify-between items-center px-4">
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
        </div>
        
        {/* Minimal Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentSlide === index 
                  ? "bg-primary w-8" 
                  : "bg-secondary/30 hover:bg-secondary/50 w-4"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlideshow;