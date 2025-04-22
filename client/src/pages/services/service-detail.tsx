import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/shared/seo-head";
import { getServiceSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { CITY } from "@/lib/constants";
import { servicesData } from "@/data/services";
import { faqs } from "@/data/faq";
import { galleryImages } from "@/data/gallery";
import CTASection from "@/components/sections/cta-section";
import GallerySlideshow from "@/components/sections/gallery-slideshow";

interface ServiceDetailProps {
  slug: string;
}

export const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const [service, setService] = useState<any>(null);
  const [serviceGallery, setServiceGallery] = useState<any[]>([]);
  const [serviceFaqs, setServiceFaqs] = useState<any[]>([]);
  
  useEffect(() => {
    // Find service by slug
    const foundService = servicesData.find(s => s.path === `/services/${slug}`);
    if (foundService) {
      setService(foundService);
      
      // Get related gallery images
      const relatedImages = galleryImages.filter(img => img.serviceSlug === slug);
      setServiceGallery(relatedImages);
      
      // Get related FAQs
      let relatedFaqs = [];
      switch (slug) {
        case 'hardwood':
          relatedFaqs = faqs.hardwoodFaqs;
          break;
        case 'vinyl-plank':
          relatedFaqs = faqs.vinylFaqs;
          break;
        case 'tile-stone':
          relatedFaqs = faqs.tileFaqs;
          break;
        case 'refinishing':
          relatedFaqs = faqs.refinishingFaqs;
          break;
        default:
          relatedFaqs = faqs.generalFaqs;
      }
      setServiceFaqs(relatedFaqs);
    }
  }, [slug]);
  
  if (!service) {
    return <div className="container-custom py-20">Loading...</div>;
  }
  
  return (
    <>
      <SEOHead 
        schemaData={getServiceSchema({ 
          name: service.title, 
          description: service.description,
          url: `/services/${slug}`,
          image: service.imageSrc,
          area: `${CITY}, LA and surrounding areas`
        })} 
        seo={{
          title: `${service.title} | APS Flooring Services in ${CITY}`,
          description: `${service.description.substring(0, 120)}...`,
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={service.imageSrc}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="container-custom relative z-20">
          <Link href="/services">
            <a className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2" size={16} />
              Back to Services
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
                Why Choose Our {service.title}?
              </h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Materials</h3>
                    <p className="text-secondary/70">We only use top-quality flooring products that stand the test of time.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Installation</h3>
                    <p className="text-secondary/70">Our team brings years of specialized experience to every project.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Long-lasting Results</h3>
                    <p className="text-secondary/70">Our installation techniques ensure your floors will look great for years.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">5-Year Workmanship Warranty</h3>
                    <p className="text-secondary/70">We stand behind our work with a comprehensive warranty.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="aspect-video rounded-sm overflow-hidden shadow-xl">
              <img 
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
              Our {service.title} Process
            </h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              We follow a proven process to ensure your new floors are installed properly and look amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation & Measure</h3>
              <p className="text-secondary/70">
                We'll visit your home, take precise measurements, and discuss your style preferences and requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
              <p className="text-secondary/70">
                Our experienced craftsmen will install your new flooring with meticulous attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Final Inspection</h3>
              <p className="text-secondary/70">
                We'll walk through the completed project with you to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      {serviceGallery.length > 0 && (
        <GallerySlideshow 
          images={serviceGallery}
          title={`Our ${service.title} Projects`}
          subtitle="See examples of our craftsmanship and attention to detail"
        />
      )}
      
      {/* FAQ Section */}
      {serviceFaqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
                Get answers to common questions about our {service.title} services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {serviceFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={cn(
                    "border-b border-gray-200 py-6",
                    index === 0 && "border-t"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{faq.question}</h3>
                  <p className="text-secondary/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTASection 
        title={`Ready for New ${service.title}?`}
        subtitle="Contact us today to schedule a free consultation and estimate."
        primaryCta={{
          text: "Get Free Quote",
          href: "/contact"
        }}
      />
    </>
  );
};

const ServiceDetailPage = () => {
  const [, params] = useRoute<{ slug: string }>("/services/:slug");
  
  if (!params || !params.slug) {
    return (
      <div className="container-custom py-20">
        <h1>Service not found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link href="/services">
          <a className="text-primary hover:underline">View all services</a>
        </Link>
      </div>
    );
  }
  
  return <ServiceDetail slug={params.slug} />;
};

export default ServiceDetailPage;