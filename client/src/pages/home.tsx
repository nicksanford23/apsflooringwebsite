import { CITY } from "@/lib/constants";
import SEOHead from "@/components/shared/seo-head";
import HeroSection from "@/components/sections/hero-section";
import FeatureCards from "@/components/sections/feature-cards";
import ServicesGrid from "@/components/sections/services-grid";
import GallerySlideshow from "@/components/sections/gallery-slideshow";
import ReviewSlider from "@/components/sections/review-slider";
import CTASection from "@/components/sections/cta-section";
import LocationSection from "@/components/sections/location-section";
import { getLocalBusinessSchema } from "@/lib/seo";
import { servicesData } from "@/data/services";
import { galleryImages } from "@/data/gallery";

const HomePage = () => {
  // Slides for the hero section
  const heroSlides = [
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipP_pbTNVJ1CECiLfi6ZVqTcQdHmNGbimizdYW9M=s680-w680-h510",
      title: "Premium Hardwood Flooring",
      subtitle: "Timeless elegance and warmth that adds character and value to your home.",
      ctaLink: "/services/hardwood",
      type: "Hardwood"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipOOFhtKGkNRATODlPp8i1IFDFEY0CHlhBdqT3lJ=s680-w680-h510",
      title: "Luxury Vinyl Plank",
      subtitle: "Water-resistant, durable, and stunning replicas of natural materials.",
      ctaLink: "/services/vinyl-plank",
      type: "Vinyl"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipNOuphZNPg9Gd5ykPucA-JEJt51XKQ8IAZgvChP=s680-w680-h510",
      title: "Porcelain & Ceramic Tile",
      subtitle: "Elegant, easy-to-maintain tile flooring for kitchens, bathrooms, and more.",
      ctaLink: "/services/tile-stone",
      type: "Tile"
    }
  ];
  
  return (
    <>
      <SEOHead 
        schemaData={getLocalBusinessSchema()} 
        seo={{
          title: `APS Flooring | Premium Flooring Contractor in ${CITY}, Louisiana`,
          description: `APS Flooring offers premium hardwood, vinyl plank, and tile flooring installation and refinishing services in ${CITY} and New Orleans. 5-star rated contractor.`,
        }}
      />
      
      <HeroSection
        slides={heroSlides}
        primaryCta={{ text: "Free Quote", href: "/contact" }}
      />
      
      <FeatureCards />
      
      <ServicesGrid services={servicesData} />
      
      <GallerySlideshow images={galleryImages.slice(0, 6)} />
      
      <ReviewSlider />
      
      <CTASection />
      
      <LocationSection />
    </>
  );
};

export default HomePage;
