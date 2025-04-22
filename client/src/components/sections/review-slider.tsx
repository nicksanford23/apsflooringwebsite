import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";
import type { Review } from "@shared/schema";

interface ReviewSliderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ReviewSlider = ({
  title = "What Our Clients Say",
  subtitle = "Our customers' satisfaction is our greatest achievement.",
  className
}: ReviewSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample review data
  const { data: reviews } = useQuery<Review[]>({
    queryKey: ["/api/reviews/featured"],
    initialData: [
      {
        id: 1,
        name: "Tammy N.",
        location: "New Orleans, LA",
        rating: 5,
        text: "They did such a great job! They were very responsive and accommodating on start date. Came on time and were very quick and professional. Did an excellent job on both the tile and vinyl floor installations. Finished in 2 days.",
        service: "tile-stone",
        date: new Date("2023-12-15"),
        featured: true
      },
      {
        id: 2,
        name: "Dylon B.",
        location: "Chalmette, LA",
        rating: 5,
        text: "Completely blown away. These guys are the real deal. Completely tore down two bad shower tile jobs I got done last year, and gave us the showers we always wanted. Great communication, very skilled workers, and very quick but not rushed. I recommend this company to anyone wanting a great job done.",
        service: "tile-stone",
        date: new Date("2024-01-22"),
        featured: true
      },
      {
        id: 3,
        name: "Michael R.",
        location: "Metairie, LA",
        rating: 5,
        text: "I think we are all in the same boat when you want a contractor to be honest and timely, but we all want to get the best price. When you're trying to do remodeling or upgrades on a budget, it could turn out great or you could find yourself contacting the local news about a nightmare story. Pereira Flooring does good business and clearly is very competent and experienced.",
        service: "hardwood",
        date: new Date("2024-02-10"),
        featured: true
      }
    ]
  });

  // Navigation functions
  const goToPrev = () => {
    if (!reviews?.length) return;
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (!reviews?.length) return;
    setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!reviews?.length) return null;

  return (
    <section className={cn("py-16 md:py-24 bg-black text-white", className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#d4af37] fill-[#d4af37] mx-0.5" />
              ))}
            </div>
            <span className="ml-2 text-white">
              {COMPANY_INFO.rating} Rating
            </span>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Review Navigation Controls - ABOVE the slider */}
        <div className="flex justify-center mb-8 space-x-4">
          <button 
            onClick={goToPrev}
            aria-label="Previous review"
            className="bg-[#d4af37] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#c4a030] focus:outline-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNext}
            aria-label="Next review"
            className="bg-[#d4af37] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#c4a030] focus:outline-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Single Review Slider */}
        <div className="max-w-2xl mx-auto relative">
          {/* Slides container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="w-full flex-shrink-0 flex-grow-0 bg-black/40 p-6 md:p-8 rounded-lg border border-[#d4af37]/20 shadow-lg"
                >
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#d4af37] fill-[#d4af37] mr-1" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-white mb-6 leading-relaxed text-base md:text-lg">
                    "{review.text}"
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center mr-3">
                      <span className="text-black font-bold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-white/60">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === idx ? "bg-[#d4af37] w-6" : "bg-white/30"
                )}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/search?q=aps+flooring+reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black font-bold px-6 py-3 rounded-md transition duration-300"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
