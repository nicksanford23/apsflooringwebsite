import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { cn, getStars } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";
import type { Review } from "@shared/schema";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const ReviewCard = ({ name, location, rating, text }: ReviewCardProps) => {
  const stars = getStars(rating);

  return (
    <div className="review-card">
      <div className="text-primary mb-4">
        {stars.map((filled, i) => (
          <Star
            key={i}
            className={cn("inline-block", filled ? "fill-primary" : "")}
            size={18}
          />
        ))}
      </div>
      <p className="text-secondary/70 mb-6">{text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary/60 font-semibold">
              {name.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-secondary/70">{location}</p>
        </div>
      </div>
    </div>
  );
};

interface ReviewSliderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  limit?: number;
}

const ReviewSlider = ({
  title = "What Our Clients Say",
  subtitle = "Our customers' satisfaction is our greatest achievement.",
  className,
  limit = 3
}: ReviewSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews/featured"],
  });

  // Responsive slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? (reviews?.length || 0) - slidesToShow : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === (reviews?.length || 0) - slidesToShow ? 0 : prev + 1
    );
  };

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate total pages
  const totalPages = reviews ? Math.ceil(reviews.length / slidesToShow) : 0;
  const currentPage = Math.floor(currentIndex / slidesToShow);

  return (
    <section className={cn("section-padding bg-gray-50", className)}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="text-primary">
              <Star className="inline-block fill-primary" size={18} />
              <Star className="inline-block fill-primary" size={18} />
              <Star className="inline-block fill-primary" size={18} />
              <Star className="inline-block fill-primary" size={18} />
              <Star className="inline-block fill-primary" size={18} />
            </div>
            <span className="ml-2 text-secondary">
              {COMPANY_INFO.rating} Rating Based on {COMPANY_INFO.reviewCount} Reviews
            </span>
          </div>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Slider Controls */}
        <div className="relative" ref={sliderRef}>
          <button 
            className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary hover:text-white hover:bg-primary transition duration-200"
            onClick={goToPrev}
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary hover:text-white hover:bg-primary transition duration-200"
            onClick={goToNext}
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slides Container */}
          <div className="overflow-hidden">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${reviews?.length ? (reviews.length * 100) / slidesToShow : 100}%` 
              }}
            >
              {isLoading ? (
                // Loading state with skeleton cards
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="review-card animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-4 w-1/3"></div>
                    <div className="h-24 bg-gray-200 rounded mb-6"></div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : reviews?.length ? (
                reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    location={review.location}
                    rating={review.rating}
                    text={review.text}
                  />
                ))
              ) : (
                <div className="col-span-3 text-center p-8 bg-white rounded-sm shadow">
                  <p>No reviews available at this time.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Slider Pagination */}
          {reviews?.length > slidesToShow && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition duration-200",
                    currentPage === index ? "bg-primary" : "bg-gray-300 hover:bg-primary/50"
                  )}
                  onClick={() => goToPage(index * slidesToShow)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-10">
          <Link href="/reviews">
            <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 font-medium text-lg">
              Read All Reviews
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
