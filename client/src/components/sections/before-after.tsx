import { useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  linkUrl?: string;
  linkText?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before renovation",
  afterAlt = "After renovation",
  linkUrl = "/gallery",
  linkText = "View Our Full Gallery",
  className,
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  return (
    <section className={cn("section-padding bg-secondary", className)}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Transforming Spaces</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See the difference our craftsmanship makes with these before and after comparisons.
          </p>
        </div>
        
        {/* Before/After Slider */}
        <div 
          ref={sliderRef}
          className="relative h-96 rounded-sm overflow-hidden shadow-xl cursor-ew-resize"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Base Layer) */}
          <img 
            src={beforeImage} 
            alt={beforeAlt} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* After Image (Top Layer with clipping) */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-4 border-primary"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={afterImage} 
              alt={afterAlt} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Slider Control */}
          <div 
            className="absolute inset-y-0 z-20 w-1"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary shadow-lg flex items-center justify-center cursor-pointer">
              <ArrowLeftRight className="text-white" size={20} />
            </div>
          </div>
          
          {/* Before/After Labels */}
          <div className="absolute bottom-4 left-4 bg-secondary/80 text-white px-4 py-2 rounded-sm z-30">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-4 py-2 rounded-sm z-30">
            After
          </div>
        </div>
        
        {/* CTA Link */}
        <div className="text-center mt-10">
          <Link href={linkUrl}>
            <a className="inline-flex items-center text-primary hover:text-white transition duration-200 font-medium text-lg">
              {linkText}
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
