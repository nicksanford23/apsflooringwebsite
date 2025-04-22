import { Star } from "lucide-react";
import { formatDate, cn, getStars } from "@/lib/utils";
import type { Review } from "@shared/schema";

interface ReviewCardProps {
  review: Review;
  className?: string;
  large?: boolean;
}

const ReviewCard = ({ review, className, large = false }: ReviewCardProps) => {
  const stars = getStars(review.rating);
  
  return (
    <div className={cn("review-card", large && "p-10", className)}>
      <div className="text-primary mb-4">
        {stars.map((filled, i) => (
          <Star
            key={i}
            className={cn("inline-block", filled ? "fill-primary" : "")}
            size={large ? 20 : 18}
          />
        ))}
      </div>
      
      <p className={cn(
        "text-secondary/70 mb-6", 
        large && "text-lg"
      )}>
        "{review.text}"
      </p>
      
      <div className="flex items-center">
        <div className={cn(
          "bg-gray-200 rounded-full overflow-hidden mr-4",
          large ? "w-14 h-14" : "w-12 h-12"
        )}>
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary/60 font-semibold">
              {review.name.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <h4 className={cn("font-semibold", large && "text-lg")}>
            {review.name}
          </h4>
          <p className={cn("text-secondary/70", large ? "text-base" : "text-sm")}>
            {review.location} • {formatDate(review.date)}
          </p>
        </div>
      </div>
      
      {review.service && large && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-secondary/60">
            Service: <span className="capitalize">{review.service.replace("-", " ")}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
