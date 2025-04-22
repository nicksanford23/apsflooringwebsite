import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
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
    return <div className="container mx-auto py-20">Loading...</div>;
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
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={service.imageSrc}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <Link href="/services">
            <a className="inline-flex items-center text-white/80 mb-5 hover:text-[#d4af37] transition-colors">
              <ArrowLeft className="mr-2" size={18} />
              Back to Services
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <a className="inline-block bg-[#d4af37] hover:bg-[#c4a030] text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-300 shadow-lg">
                Get Free Quote
              </a>
            </Link>
            <a 
              href={`tel:${CITY.phone}`}
              className="inline-block bg-black/40 hover:bg-black/60 text-white border border-white/20 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-300 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our {service.title}?
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black mr-4 mt-0.5">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">Premium Materials</h3>
                    <p className="text-gray-600 text-lg">We only use top-quality flooring products that stand the test of time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black mr-4 mt-0.5">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">Expert Installation</h3>
                    <p className="text-gray-600 text-lg">Our team brings years of specialized experience to every project.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black mr-4 mt-0.5">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">Long-lasting Results</h3>
                    <p className="text-gray-600 text-lg">Our installation techniques ensure your floors will look great for years.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black mr-4 mt-0.5">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">5-Year Workmanship Warranty</h3>
                    <p className="text-gray-600 text-lg">We stand behind our work with a comprehensive warranty.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
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
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-sm font-medium mb-4">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our {service.title} Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your new floors are installed properly and look amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[#d4af37] text-black rounded-full font-bold text-2xl mb-5">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Consultation & Measure</h3>
              <p className="text-gray-600 text-lg">
                We'll visit your home, take precise measurements, and discuss your style preferences and requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[#d4af37] text-black rounded-full font-bold text-2xl mb-5">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Installation</h3>
              <p className="text-gray-600 text-lg">
                Our experienced craftsmen will install your new flooring with meticulous attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[#d4af37] text-black rounded-full font-bold text-2xl mb-5">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Final Inspection</h3>
              <p className="text-gray-600 text-lg">
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
        />
      )}
      
      {/* FAQ Section */}
      {serviceFaqs.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-sm font-medium mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our {service.title} services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {serviceFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={cn(
                    "border-b border-gray-200 py-8",
                    index === 0 && "border-t"
                  )}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-700 mb-6">Have more questions about {service.title}?</p>
              <Link href="/contact">
                <a className="inline-flex items-center text-[#d4af37] hover:text-[#c4a030] font-bold text-lg transition-all duration-300">
                  Contact our flooring experts <ArrowRight className="ml-2" size={20} />
                </a>
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <CTASection 
        title={`Ready for New ${service.title}?`}
        subtitle="Contact us today to schedule a free consultation and estimate."
      />
    </>
  );
};

const ServiceDetailPage = ({ serviceData }: { serviceData?: any }) => {
  // If serviceData is provided directly (from specific service page)
  if (serviceData) {
    return <ServiceDetail slug={serviceData.slug} />;
  }
  
  // Otherwise get slug from URL
  const [, params] = useRoute<{ slug: string }>("/services/:slug");
  
  if (!params || !params.slug) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <p className="text-lg mb-6">The service you're looking for doesn't exist.</p>
        <Link href="/services">
          <a className="text-[#d4af37] hover:underline font-medium">View all services</a>
        </Link>
      </div>
    );
  }
  
  return <ServiceDetail slug={params.slug} />;
};

export default ServiceDetailPage;