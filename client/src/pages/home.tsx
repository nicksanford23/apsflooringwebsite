import { CITY } from "@/lib/constants";
import SEOHead from "@/components/shared/seo-head";
import HeroSection from "@/components/sections/hero-section";
import FeatureCards from "@/components/sections/feature-cards";
import ServicesGrid from "@/components/sections/services-grid";
import BeforeAfterSlider from "@/components/sections/before-after";
import ReviewSlider from "@/components/sections/review-slider";
import CTASection from "@/components/sections/cta-section";
import LocationSection from "@/components/sections/location-section";
import { getLocalBusinessSchema } from "@/lib/seo";
import { servicesData } from "@/data/services";

const HomePage = () => {
  // High-quality image of a luxury wood floor with natural light
  const heroImage = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
  
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
        backgroundImage={heroImage}
        title="Premium Flooring Solutions"
        highlight="For Every Home"
        subtitle={`From classic hardwood to modern tile & luxury vinyl plank, APS Flooring brings exceptional craftsmanship to ${CITY} and New Orleans.`}
        primaryCta={{ text: "Explore Services", href: "/services" }}
        secondaryCta={{ text: "Get Free Quote", href: "/contact" }}
      />
      
      <FeatureCards />
      
      <ServicesGrid services={servicesData} />
      
      <BeforeAfterSlider 
        beforeImage="https://images.unsplash.com/photo-1577099686204-19d51d7a166c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        afterImage="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      
      <ReviewSlider />
      
      <CTASection />
      
      <LocationSection />
    </>
  );
};

export default HomePage;
