import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/shared/seo-head";
import ReviewCard from "@/components/reviews/review-card";
import CTASection from "@/components/sections/cta-section";
import { CITY } from "@/lib/constants";
import type { Review } from "@shared/schema";

const ReviewsPage = () => {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  return (
    <>
      <SEOHead 
        seo={{
          title: `Customer Reviews | APS Flooring | ${CITY}, Louisiana`,
          description: `See what our customers are saying about APS Flooring's premium flooring services in ${CITY} and New Orleans. 5-star rated hardwood, vinyl, and tile flooring contractor.`,
          keywords: ["flooring reviews", "customer testimonials", "hardwood flooring reviews", "vinyl plank reviews", "floor refinishing reviews", CITY, "New Orleans"]
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Customer Reviews</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <div className="flex items-center justify-center mb-4">
              <div className="text-primary text-3xl">★★★★★</div>
            </div>
            <p className="text-xl text-white/80">
              Our customers' satisfaction speaks for itself. Read what they have to say about our flooring services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              We're proud of the work we do and the relationships we build with our customers. Here's their feedback.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-md animate-pulse">
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
              ))}
            </div>
          ) : reviews?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <p className="text-secondary/70">No reviews available at this time.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Reviews */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
              Featured Testimonials
            </h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              Some of our favorite feedback from our valued customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reviews?.filter(r => r.featured).slice(0, 2).map(review => (
              <ReviewCard 
                key={review.id} 
                review={review} 
                large={true} 
                className="bg-white shadow-lg" 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Review Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-secondary/70">
                We appreciate your feedback! If you've recently worked with APS Flooring, please consider sharing your experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-semibold mb-6">How to Leave a Review</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Google Reviews</h4>
                    <p className="text-secondary/70 mb-3">
                      Visit our Google Business listing and click on "Write a Review" to share your experience.
                    </p>
                    <a 
                      href="https://g.page/r/apsflooring/review" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Leave a Google Review
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Facebook</h4>
                    <p className="text-secondary/70 mb-3">
                      Visit our Facebook page and click on "Reviews" to share your feedback.
                    </p>
                    <a 
                      href="https://facebook.com/apsflooring" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Leave a Facebook Review
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Contact Us Directly</h4>
                    <p className="text-secondary/70 mb-3">
                      If you prefer, you can contact us directly to share your feedback.
                    </p>
                    <a 
                      href="/contact" 
                      className="text-primary hover:underline"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ReviewsPage;
