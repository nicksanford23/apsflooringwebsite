import { Link } from "wouter";
import SEOHead from "@/components/shared/seo-head";
import { servicesData } from "@/data/services";
import { faqs } from "@/data/faq";
import CTASection from "@/components/sections/cta-section";
import { CITY } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { getFAQSchema } from "@/lib/seo";

const ServicesIndexPage = () => {
  return (
    <>
      <SEOHead 
        seo={{
          title: `Flooring Services | APS Flooring | ${CITY}, Louisiana`,
          description: `Explore our premium flooring services including hardwood installation, luxury vinyl plank, tile & stone, and floor refinishing in ${CITY} and New Orleans.`,
          keywords: ["flooring services", "hardwood flooring", "vinyl plank", "tile flooring", "floor refinishing", "Chalmette", "New Orleans"]
        }}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": servicesData.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "APS Flooring LLC"
              },
              "url": `https://apsflooring.com${service.path}`
            }
          }))
        }}
      >
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema(faqs.generalFaqs))}
        </script>
      </SEOHead>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Our Flooring Services</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-white/80">
              Discover our comprehensive range of premium flooring solutions tailored to enhance the beauty and value of your home.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="relative h-64 rounded-t-sm overflow-hidden">
                  <img 
                    src={service.imageSrc} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <div className="flex-1 p-8 bg-white shadow-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold mb-4">{service.title}</h2>
                  <p className="text-secondary/70 mb-6">{service.description}</p>
                  <Link href={service.path}>
                    <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 font-medium mt-auto">
                      Learn More
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
                Why Choose APS Flooring for Your Project?
              </h2>
              <p className="text-secondary/70 mb-6">
                When you choose APS Flooring for your flooring needs, you're getting more than just beautiful floors. You're partnering with a team that prioritizes quality, expertise, and customer satisfaction at every step.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary/70">
                    <span className="font-semibold text-secondary">Expert Installation:</span> Our skilled technicians have years of experience and ongoing training to ensure flawless installation.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary/70">
                    <span className="font-semibold text-secondary">Premium Materials:</span> We use only high-quality products that offer exceptional durability, appearance, and value.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary/70">
                    <span className="font-semibold text-secondary">Transparent Pricing:</span> No hidden fees or surprises—just clear, detailed quotes and honest communication.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary/70">
                    <span className="font-semibold text-secondary">Comprehensive Warranty:</span> We stand behind our work with robust warranties that give you peace of mind.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary/70">
                    <span className="font-semibold text-secondary">5-Star Service:</span> Our consistently high ratings reflect our dedication to exceptional customer service.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Flooring installation by APS Flooring team" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-secondary/70">
                Find answers to common questions about our flooring services, installation process, and more.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary/70 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ServicesIndexPage;
