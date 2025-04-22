import { useEffect, useState } from "react";
import { Check, Plus, Minus, ArrowRight } from "lucide-react";
import { CITY, COMPANY_INFO } from "@/lib/constants";
import { faqs } from "@/data/faq";
import SEOHead from "@/components/shared/seo-head";
import { getServiceSchema } from "@/lib/seo";

// MODERN BRIGHT DESIGN WITH BOLD COLORS AND INTERACTIVE ELEMENTS
const VinylPlankServicePage = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  // Service data
  const serviceData = {
    title: "Luxury Vinyl Plank",
    description: "Durable, waterproof, and stylish luxury vinyl plank flooring that mimics natural wood or stone.",
    metaDescription: "Professional luxury vinyl plank (LVP) flooring installation in Chalmette and New Orleans. Waterproof, durable, and beautiful wood-look floors by APS Flooring.",
    heroImage: "https://lh3.googleusercontent.com/p/AF1QipOOFhtKGkNRATODlPp8i1IFDFEY0CHlhBdqT3lJ=s680-w680-h510",
  };
  
  // LVP features
  const features = [
    {
      title: "100% Waterproof",
      description: "Perfect for kitchens, bathrooms and basements, LVP can handle spills, splashes and humidity without warping or damage.",
      image: "https://images.unsplash.com/photo-1600566752584-e8360d284a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Extremely Durable",
      description: "Resistant to scratches, dents, and stains, vinyl plank flooring stands up to busy households with kids, pets, and high traffic.",
      image: "https://images.unsplash.com/photo-1599047601162-81c7b582e6df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Realistic Wood Look",
      description: "Modern manufacturing techniques create incredibly realistic wood visuals with authentic textures and natural variation.",
      image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Easy Maintenance",
      description: "Simple to clean with just regular sweeping and occasional mopping, requiring no waxing, polishing or refinishing.",
      image: "https://images.unsplash.com/photo-1603848072773-5c95cc3c1865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Before/after examples
  const transformations = [
    {
      before: {
        image: "https://images.unsplash.com/photo-1594846887676-83e12a8cfcae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Dated carpeting with stains and wear"
      },
      after: {
        image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Beautiful vinyl plank with wood appearance"
      }
    }
  ];
  
  return (
    <>
      <SEOHead 
        schemaData={getServiceSchema({ 
          name: serviceData.title, 
          description: serviceData.description,
          url: "/services/vinyl-plank",
          image: serviceData.heroImage,
          area: `${CITY}, LA and surrounding areas`
        })} 
        seo={{
          title: `Luxury Vinyl Plank Flooring | APS Flooring Services in ${CITY}`,
          description: serviceData.metaDescription,
        }}
      />
      
      {/* Circular Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-20">
        <div className="absolute top-0 right-0 w-[150vh] h-[150vh] bg-[#d4af37] rounded-full -translate-x-1/4 -translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-1">
              <h5 className="mb-3 text-lg uppercase tracking-wide font-bold">APS Flooring</h5>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Luxury</span>
                <span className="block">Vinyl Plank</span>
                <span className="block">Flooring</span>
              </h1>
              <p className="text-lg sm:text-xl mb-10 text-gray-700 max-w-xl">
                Beautiful, durable, and 100% waterproof flooring solutions that perfectly mimic the look 
                of hardwood while offering superior resilience and easier maintenance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#get-quote" className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 text-center transition-all duration-300">
                  Get Free Quote
                </a>
                <a href={`tel:${COMPANY_INFO.phone}`} className="border-2 border-black bg-transparent hover:bg-black text-black hover:text-white font-bold py-4 px-10 text-center transition-all duration-300">
                  Call Us Now
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={serviceData.heroImage}
                    alt="Luxury Vinyl Plank Flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-full shadow-xl">
                  <div className="bg-[#d4af37] text-black font-bold rounded-full w-24 h-24 flex flex-col items-center justify-center">
                    <span className="text-sm uppercase tracking-wide">From</span>
                    <span className="text-2xl">$3.99</span>
                    <span className="text-xs">per sq ft</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white py-2 px-4 rounded-full shadow-lg">
                  <span className="text-black font-bold text-sm uppercase">Waterproof</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="inline-block px-4 py-1 bg-[#d4af37] text-black text-sm font-bold uppercase rounded-full mb-4">Why Choose Vinyl Plank</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Benefits & Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Luxury vinyl plank flooring offers numerous advantages over traditional flooring options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            <div>
              <ul className="space-y-8">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className={`cursor-pointer p-6 border-l-4 transition-all duration-300 ${
                      activeFeature === index ? "border-[#d4af37] bg-gray-100" : "border-transparent hover:border-gray-300"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h3 className="text-xl font-bold flex items-center">
                      {feature.title}
                      <span className="ml-auto text-[#d4af37]">
                        {activeFeature === index ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </h3>
                    {activeFeature === index && (
                      <p className="mt-3 text-gray-600 animation-fade-in">
                        {feature.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`aspect-[4/3] absolute inset-0 rounded-lg overflow-hidden shadow-xl transition-opacity duration-500 ${
                    activeFeature === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Show first image if none selected */}
              {activeFeature === null && (
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={features[0].image}
                    alt={features[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Black and White striped section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, index) => (
              <div key={index} className={index % 2 === 0 ? "bg-black" : "bg-white"} />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-8 border-[#d4af37]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Customers Love LVP</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#d4af37] rounded-full flex-shrink-0 p-1 mr-4 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Beautiful Aesthetics</h3>
                  <p className="text-gray-600">Authentic wood and stone looks without the cost</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#d4af37] rounded-full flex-shrink-0 p-1 mr-4 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Pet-Friendly Surface</h3>
                  <p className="text-gray-600">Resists scratches from pet claws and is easy to clean</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#d4af37] rounded-full flex-shrink-0 p-1 mr-4 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Quick Installation</h3>
                  <p className="text-gray-600">Less disruption with fast installation times</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#d4af37] rounded-full flex-shrink-0 p-1 mr-4 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cost-Effective Option</h3>
                  <p className="text-gray-600">Get the look of hardwood at a fraction of the price</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a href="#get-quote" className="inline-block bg-[#d4af37] text-black font-bold py-3 px-8 rounded-full uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transformations with circle-based pattern */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4af37]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#d4af37]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h5 className="inline-block px-4 py-1 bg-black text-white text-sm font-bold uppercase rounded-full mb-4">Real Results</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Before & After</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the dramatic transformations we've achieved with luxury vinyl plank flooring
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {transformations.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={item.before.image} 
                      alt="Before flooring transformation" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Before
                  </div>
                  <p className="mt-4 text-center text-gray-500">{item.before.description}</p>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={item.after.image} 
                      alt="After flooring transformation" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    After
                  </div>
                  <p className="mt-4 text-center text-gray-500">{item.after.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Alternating FAQ section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="inline-block px-4 py-1 bg-[#d4af37] text-black text-sm font-bold uppercase rounded-full mb-4">Questions & Answers</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about luxury vinyl plank flooring
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.vinylFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`mb-4 overflow-hidden transition-all duration-300 rounded-lg ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <span className={`transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}>
                    <Plus size={24} className={openFaq === index ? "text-[#d4af37]" : "text-black"} />
                  </span>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openFaq === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="get-quote" className="py-20 bg-[#d4af37]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Transform Your Space?</h2>
              <p className="text-lg text-black/80 mb-8 max-w-lg">
                Get started with a free consultation and estimate for your luxury vinyl plank flooring project.
                Our team is ready to help you create beautiful, durable floors for your home or business.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-black text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-black">Free, no-obligation estimate</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-black text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-black">Professional installation by experts</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-black text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-black">5-star rated service</span>
                </li>
              </ul>
              
              <div className="flex items-center space-x-4">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center text-black font-bold group"
                >
                  Call {COMPANY_INFO.formattedPhone}
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#d4af37] focus:ring-0 transition-colors" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#d4af37] focus:ring-0 transition-colors" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#d4af37] focus:ring-0 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="area" className="block text-gray-700 mb-1 font-medium">Approximate Square Footage</label>
                  <input 
                    type="text" 
                    id="area" 
                    className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#d4af37] focus:ring-0 transition-colors"
                    placeholder="e.g. 500 sq ft"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Additional Information</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#d4af37] focus:ring-0 transition-colors"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VinylPlankServicePage;