import { Link } from "wouter";
import SEOHead from "@/components/shared/seo-head";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, CITY } from "@/lib/constants";
import { teamMembers } from "@/data/team";
import CTASection from "@/components/sections/cta-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const AboutPage = () => {
  // Values and mission statements
  const values = [
    {
      id: "quality",
      title: "Quality Craftsmanship",
      content: "We take pride in our work and use only premium materials and proven techniques to ensure every floor we install or refinish exceeds expectations."
    },
    {
      id: "integrity",
      title: "Integrity & Transparency",
      content: "From honest quotes to clear communication throughout your project, we believe in creating trusting relationships with every customer."
    },
    {
      id: "reliability",
      title: "Reliability & Timeliness", 
      content: "We value your time. Our team is dedicated to completing projects on schedule without sacrificing attention to detail or quality."
    },
    {
      id: "service",
      title: "Customer-First Service",
      content: "Your satisfaction is our priority. We listen to your needs, provide expert guidance, and ensure you're completely happy with the results."
    },
  ];
  
  // Company timeline
  const timeline = [
    { year: "2010", event: "APS Flooring founded in Chalmette, Louisiana" },
    { year: "2013", event: "Expanded service area to include all of New Orleans" },
    { year: "2015", event: "Added luxury vinyl plank installation to our services" },
    { year: "2018", event: "Achieved 5-star Google rating with over 25 reviews" },
    { year: "2020", event: "Weathered pandemic challenges while maintaining service excellence" },
    { year: "2022", event: "Celebrated installation of our 500th hardwood floor" },
    { year: "2023", event: "Continued growth with expanded team and service offerings" }
  ];

  return (
    <>
      <SEOHead 
        seo={{
          title: `Our Story | APS Flooring | Premium Flooring Contractor in ${CITY}`,
          description: `Learn about APS Flooring's journey to becoming ${CITY}'s trusted flooring contractor. Our experienced team provides exceptional hardwood, vinyl, and tile flooring services.`,
          keywords: ["about APS Flooring", "flooring company history", "flooring experts", "Chalmette flooring contractor"]
        }}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "APS Flooring LLC",
          "url": "https://apsflooring.com",
          "logo": "https://i.imgur.com/G8Jnzk4.png",
          "description": `Premium flooring contractor in ${CITY}, Louisiana specializing in hardwood, vinyl plank, and tile flooring installation and refinishing.`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address.street,
            "addressLocality": COMPANY_INFO.address.city,
            "addressRegion": COMPANY_INFO.address.state,
            "postalCode": COMPANY_INFO.address.zip,
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service"
          },
          "sameAs": [
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.instagram
          ]
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Our Story</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-white/80">
              Discover the passion and craftsmanship behind APS Flooring and why we've become the trusted name in premium flooring solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
                Bringing Quality Flooring to {CITY} Since 2010
              </h2>
              <p className="text-secondary/70 mb-6">
                APS Flooring began with a simple mission: to provide exceptional flooring solutions with uncompromising quality and customer service. Founded by expert craftsmen with decades of combined experience, we've built our reputation one beautiful floor at a time.
              </p>
              <p className="text-secondary/70 mb-6">
                What started as a small local business in {CITY} has grown into one of the most trusted flooring contractors in the New Orleans area, serving hundreds of satisfied customers throughout the region.
              </p>
              <p className="text-secondary/70 mb-8">
                Our team combines traditional craftsmanship with modern techniques and materials to deliver flooring solutions that stand the test of time. We take pride in our attention to detail, commitment to quality, and the lasting relationships we build with our clients.
              </p>
              <Link href="/services">
                <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 font-medium">
                  Explore Our Services
                  <ChevronRight className="ml-1" size={18} />
                </a>
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-sm">
              <h3 className="text-2xl font-playfair font-bold text-secondary mb-6">Our Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-16 h-16 bg-primary text-white rounded-sm flex items-center justify-center font-bold text-xl">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-4">
                      <p className="text-secondary/80">{item.event}</p>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-6 bg-primary/20 ml-8 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">Meet Our Team</h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              Our experienced professionals bring expertise, passion, and dedication to every flooring project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-sm shadow-md text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-secondary/70 mb-6">{member.bio}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-secondary/60">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">Our Values & Mission</h2>
              <p className="text-lg text-secondary/70">
                At APS Flooring, our core values guide everything we do. We're committed to excellence in every aspect of our business.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {values.map((value) => (
                <AccordionItem key={value.id} value={value.id} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-4">
                    {value.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary/70 pb-4">
                    {value.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 p-8 bg-primary/10 rounded-sm border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary/80 italic">
                "To transform homes and businesses with exceptional flooring solutions, delivered with integrity, craftsmanship, and a commitment to complete customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Work With Our Expert Team?"
        subtitle={`Contact APS Flooring today to discuss your project with our flooring specialists in ${CITY} and New Orleans.`}
      />
    </>
  );
};

export default AboutPage;
