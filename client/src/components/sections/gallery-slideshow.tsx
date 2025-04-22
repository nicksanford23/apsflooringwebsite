import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  title = "Gallery",
  subtitle = ""
}: GallerySlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  if (images.length === 0) return null;
  
  // Only use first 6 images
  const displayImages = images.slice(0, 6);
  
  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <section className={cn("py-20 md:py-28 bg-black", className)} id="gallery-preview">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
          <Link href="/gallery">
            <a className="inline-flex items-center text-[#d4af37] hover:text-white text-lg font-medium transition-colors">
              View All <ArrowRight className="ml-1" size={20} />
            </a>
          </Link>
        </div>
        
        {/* Mobile: Slideshow | Desktop: Grid */}
        {isMobile ? (
          <div className="relative">
            {/* Gallery Navigation Arrows */}
            <div className="flex justify-center space-x-4 mb-6">
              <button 
                onClick={goToPrev}
                aria-label="Previous image"
                className="bg-[#d4af37] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#c4a030] focus:outline-none"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                aria-label="Next image"
                className="bg-[#d4af37] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#c4a030] focus:outline-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Mobile Slideshow */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {displayImages.map((image) => (
                  <div
                    key={image.id}
                    className="w-full flex-shrink-0 flex-grow-0 relative h-80"
                  >
                    <img
                      src={image.src}
                      alt={image.alt || image.title}
                      className="object-cover w-full h-full"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider block mb-2">{image.category}</span>
                      <h3 className="text-white text-xl font-bold mb-4">{image.title}</h3>
                      
                      {image.serviceSlug && (
                        <Link href={`/services/${image.serviceSlug}`}>
                          <a className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black px-5 py-2 rounded-md text-sm font-bold shadow-lg">
                            View {image.category}
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === idx ? "bg-[#d4af37] w-6" : "bg-white/30"
                  )}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((image) => (
              <div 
                key={image.id}
                className="group relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={image.src} 
                  alt={image.alt || image.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider block mb-2">{image.category}</span>
                  <h3 className="text-white text-xl font-bold mb-4">{image.title}</h3>
                  
                  {image.serviceSlug && (
                    <Link href={`/services/${image.serviceSlug}`}>
                      <a className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 shadow-lg">
                        View {image.category}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/gallery">
            <a className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black px-8 py-4 rounded-md font-bold transition-all duration-300 shadow-lg">
              Browse All Projects
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySlideshow;