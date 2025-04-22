import { Link } from "wouter";
import SEOHead from "@/components/shared/seo-head";
import ProcessSteps from "@/components/sections/process-steps";
import BeforeAfterSlider from "@/components/sections/before-after";
import CTASection from "@/components/sections/cta-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getServiceSchema, getFAQSchema } from "@/lib/seo";
import { CITY } from "@/lib/constants";

export interface ServiceDetailProps {
  serviceData: {
    slug: string;
    title: string;
    description: string;
    metaDescription: string;
    heroImage: string;
    problem: string;
    solution: string;
    bulletPoints: string[];
    processSteps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
    beforeImage: string;
    afterImage: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const ServiceDetail = ({ serviceData }: ServiceDetailProps) => {
  const {
    slug,
    title,
    description,
    metaDescription,
    heroImage,
    problem,
    solution,
    bulletPoints,
    processSteps,
    beforeImage,
    afterImage,
    faqs
  } = serviceData;

  return (
    <>
      <SEOHead 
        seo={{
          title: `${title} | APS Flooring | ${CITY}, Louisiana`,
          description: metaDescription,
          keywords: [`${slug} flooring`, `${slug} floors`, "flooring contractor", CITY, "New Orleans", "Louisiana"]
        }}
        schemaData={getServiceSchema({
          name: title,
          description: metaDescription,
          url: `https://apsflooring.com/services/${slug}`,
          image: heroImage
        })}
      >
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema(faqs))}
        </script>
      </SEOHead>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-secondary overflow-hidden">
        <img 
          src={heroImage} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-white/80 mb-8">{description}</p>
            <Link href="/contact">
              <a className="btn-primary inline-block">Get a Free Quote</a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Problem & Solution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-8 rounded-sm">
              <h2 className="text-2xl font-playfair font-bold text-secondary mb-6">The Challenge</h2>
              <p className="text-secondary/70 mb-6">{problem}</p>
              <ul className="space-y-3">
                {bulletPoints.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-secondary/70">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-sm border-l-4 border-primary">
              <h2 className="text-2xl font-playfair font-bold text-secondary mb-6">Our Solution</h2>
              <p className="text-secondary/70 mb-6">{solution}</p>
              <ul className="space-y-3">
                {bulletPoints.slice(3).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-secondary/70">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <ProcessSteps 
        title={`Our ${title} Process`}
        subtitle="We follow a proven approach to ensure exceptional results for your flooring project."
        steps={processSteps}
        className="bg-gray-50"
      />
      
      {/* Before & After Slider */}
      <BeforeAfterSlider 
        beforeImage={beforeImage}
        afterImage={afterImage}
        beforeAlt={`Before: Old ${slug} floor`}
        afterAlt={`After: New ${slug} floor installed by APS Flooring`}
      />
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-secondary/70">
                Find answers to common questions about our {title.toLowerCase()} services.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
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
      
      {/* Navigation Links */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link href="/services">
              <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 font-medium mb-4 sm:mb-0">
                <ArrowLeft className="mr-2" size={18} />
                Back to Services
              </a>
            </Link>
            
            <Link href="/gallery">
              <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 font-medium">
                View Gallery Examples
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title={`Ready for Beautiful ${title}?`}
        subtitle={`Contact us today for a free, no-obligation quote on your ${title.toLowerCase()} project in ${CITY} and New Orleans.`}
      />
    </>
  );
};

export default ServiceDetail;
