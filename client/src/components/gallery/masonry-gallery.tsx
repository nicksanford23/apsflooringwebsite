import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GALLERY_CATEGORIES } from "@/lib/constants";
import type { GalleryImage } from "@shared/schema";

interface MasonryGalleryProps {
  title?: string;
  subtitle?: string;
  className?: string;
  category?: string;
  serviceSlug?: string;
}

const MasonryGallery = ({
  title = "Our Project Gallery",
  subtitle = "Browse our portfolio of completed flooring projects to see our quality craftsmanship.",
  className,
  category,
  serviceSlug
}: MasonryGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState(category || "all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get query params based on filters
  const queryParams = new URLSearchParams();
  if (category && category !== "all") {
    queryParams.append("category", category);
  }
  if (serviceSlug) {
    queryParams.append("service", serviceSlug);
  }
  
  const { data: images = [], isLoading } = useQuery<GalleryImage[]>({
    queryKey: [`/api/gallery?${queryParams.toString()}`],
  });
  
  // Filter images by category client-side
  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);
  
  // Handle next/prev in lightbox
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };
  
  // Close lightbox with escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredImages.length]);
  
  // Calculate masonry layout columns
  const getColumnClass = () => {
    if (filteredImages.length <= 2) return "sm:grid-cols-1 md:grid-cols-2";
    if (filteredImages.length <= 4) return "sm:grid-cols-2 md:grid-cols-2";
    return "sm:grid-cols-2 md:grid-cols-3";
  };
  
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Filter Pills */}
        {!serviceSlug && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors duration-200",
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
                )}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
        
        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 h-64 rounded-sm"></div>
            ))}
          </div>
        ) : filteredImages.length > 0 ? (
          <div className={cn("grid grid-cols-1 gap-4", getColumnClass())}>
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className={cn(
                  "cursor-pointer rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
                  index % 3 === 0 ? "row-span-2" : ""
                )}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-sm">
            <p className="text-secondary/70">No gallery images found for this category.</p>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && filteredImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
            onClick={handleNextImage}
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="max-w-5xl max-h-[80vh]">
            <img 
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-h-[75vh] max-w-full mx-auto object-contain"
            />
            
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-medium">{filteredImages[currentImageIndex].title}</h3>
              
              {filteredImages[currentImageIndex].serviceSlug && (
                <Link href={`/services/${filteredImages[currentImageIndex].serviceSlug}`}>
                  <a className="text-primary hover:underline mt-2 inline-block">
                    View related service
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;
