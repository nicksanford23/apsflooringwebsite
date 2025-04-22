import { CITY } from "@/lib/constants";
import { ArrowDown, Phone, Star, Check } from "lucide-react";
import { faqs } from "@/data/faq";

// ULTRA-PREMIUM DESIGN WITH DARK THEME
const HardwoodServicePage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Full-bleed hero with image overlay */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipP_pbTNVJ1CECiLfi6ZVqTcQdHmNGbimizdYW9M=s680-w680-h510" 
            alt="Hardwood Flooring" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
          <div className="border-4 border-[#d4af37] p-8 lg:p-16 max-w-4xl mx-auto backdrop-blur-sm bg-black/30">
            <h5 className="text-[#d4af37] tracking-[0.3em] font-light uppercase text-sm sm:text-base mb-2">PREMIUM HARDWOOD FLOORING</h5>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">TIMELESS ELEGANCE</h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-10 font-light max-w-3xl mx-auto">
              Exquisite hardwood flooring solutions that transform your spaces with unparalleled beauty and distinction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#quote-form" className="bg-[#d4af37] text-black font-bold uppercase text-sm tracking-wider py-4 px-10 hover:bg-white transition-colors duration-300 border border-transparent">
                REQUEST QUOTE
              </a>
              <a href="tel:+15044023895" className="bg-transparent border border-[#d4af37] text-[#d4af37] font-bold uppercase text-sm tracking-wider py-4 px-10 hover:bg-[#d4af37] hover:text-black transition-colors duration-300 flex items-center">
                <Phone size={16} className="mr-2" /> CALL NOW
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce">
            <a href="#overview" className="text-white/70 hover:text-white transition-colors">
              <ArrowDown size={40} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Overview section with diagonal border */}
      <section id="overview" className="relative py-32 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute top-0 left-0 w-full h-full transform -rotate-1 border-2 border-[#d4af37]/30 -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full transform rotate-1 border-2 border-[#d4af37]/60 -z-10"></div>
            
            <span className="inline-block h-[1px] w-24 bg-[#d4af37] mb-8"></span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">True Craftsmanship</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Our premium hardwood flooring installations are meticulously crafted to elevate your space with 
              the timeless beauty of natural wood. Each plank is carefully selected and installed with precision 
              by our master craftsmen.
            </p>
            <div className="flex justify-center">
              <span className="inline-block h-[1px] w-16 bg-[#d4af37] mb-8"></span>
            </div>
          </div>
        </div>
        
        {/* Stats in horizontal line */}
        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-t border-[#d4af37] pt-8">
              <span className="text-[#d4af37] text-5xl sm:text-7xl font-bold block mb-4">20+</span>
              <p className="text-white/80 uppercase tracking-wider text-sm">Years Experience</p>
            </div>
            <div className="border-t border-[#d4af37] pt-8">
              <span className="text-[#d4af37] text-5xl sm:text-7xl font-bold block mb-4">500+</span>
              <p className="text-white/80 uppercase tracking-wider text-sm">Projects Completed</p>
            </div>
            <div className="border-t border-[#d4af37] pt-8">
              <span className="text-[#d4af37] text-5xl sm:text-7xl font-bold block mb-4">100%</span>
              <p className="text-white/80 uppercase tracking-wider text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid with large images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Exceptional Projects</h2>
          <p className="text-xl text-white/60 text-center mb-16">Our most stunning hardwood installations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood flooring in dining room" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591958911259-bee2173bdcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood flooring in kitchen" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588854337116-d1def689b8ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood details" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood in hallway" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood office flooring" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578338469670-d5f204406220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood in living room" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <a href="/gallery" className="border-b-2 border-[#d4af37] text-[#d4af37] uppercase tracking-wider font-bold text-sm hover:border-white hover:text-white transition-colors duration-300 pb-1">
              View Complete Gallery
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials with large quotes */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-20">Client Testimonials</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col space-y-20">
              <div className="relative">
                <div className="absolute -top-10 -left-10 text-[#d4af37]/20 text-9xl font-serif">"</div>
                <div className="relative z-10 pl-10">
                  <p className="text-white/90 text-xl md:text-2xl italic leading-relaxed mb-10">
                    The craftsmanship of our hardwood floors is absolutely stunning. APS Flooring's attention to detail 
                    and commitment to quality really shows in the finished product. I couldn't be happier with our investment.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4 w-20 h-[1px] bg-[#d4af37]"></div>
                    <div>
                      <h4 className="text-white font-medium">Michael R.</h4>
                      <p className="text-white/60 text-sm">Metairie, LA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-10 -left-10 text-[#d4af37]/20 text-9xl font-serif">"</div>
                <div className="relative z-10 pl-10">
                  <p className="text-white/90 text-xl md:text-2xl italic leading-relaxed mb-10">
                    We were blown away by the incredible transformation of our home with these hardwood floors. 
                    The team's expertise and professionalism made the entire process smooth and stress-free.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4 w-20 h-[1px] bg-[#d4af37]"></div>
                    <div>
                      <h4 className="text-white font-medium">Sarah T.</h4>
                      <p className="text-white/60 text-sm">New Orleans, LA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-24">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-[#d4af37] fill-[#d4af37]" size={24} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process section with large numbers */}
      <section className="py-32 bg-[#070707]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6">The APS Process</h2>
          <p className="text-center text-white/70 text-xl max-w-2xl mx-auto mb-20">
            Our meticulous approach ensures perfect results every time
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-t border-b border-[#d4af37]/20">
            <div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 relative group hover:bg-[#d4af37]/5 transition-colors duration-300">
              <div className="absolute -top-8 left-10 text-[#d4af37] text-6xl font-thin">01</div>
              <h3 className="text-white text-xl font-bold mb-6 mt-10">Consultation</h3>
              <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300">
                Our design team will visit your home to understand your style, preferences, and requirements.
              </p>
            </div>
            
            <div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 relative group hover:bg-[#d4af37]/5 transition-colors duration-300">
              <div className="absolute -top-8 left-10 text-[#d4af37] text-6xl font-thin">02</div>
              <h3 className="text-white text-xl font-bold mb-6 mt-10">Selection</h3>
              <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300">
                Choose from our premium hardwood options, with expert guidance on species, finish, and pattern.
              </p>
            </div>
            
            <div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 relative group hover:bg-[#d4af37]/5 transition-colors duration-300">
              <div className="absolute -top-8 left-10 text-[#d4af37] text-6xl font-thin">03</div>
              <h3 className="text-white text-xl font-bold mb-6 mt-10">Installation</h3>
              <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300">
                Our master craftsmen install your floors with precision, ensuring perfect alignment and finish.
              </p>
            </div>
            
            <div className="p-10 lg:p-20 relative group hover:bg-[#d4af37]/5 transition-colors duration-300">
              <div className="absolute -top-8 left-10 text-[#d4af37] text-6xl font-thin">04</div>
              <h3 className="text-white text-xl font-bold mb-6 mt-10">Completion</h3>
              <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300">
                Final inspection ensures perfection, followed by care instructions for lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs section with elegant styling */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-20">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto flex flex-col space-y-8">
            {faqs.hardwoodFaqs.map((faq, index) => (
              <div key={index} className="border-b border-[#d4af37]/30 pb-8">
                <h3 className="text-white text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="quote-form" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h5 className="text-[#d4af37] uppercase tracking-wider text-sm mb-4">REQUEST A CONSULTATION</h5>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Transform Your Space</h2>
              <p className="text-white/80 text-xl mb-10">
                Contact us today to schedule your free, no-obligation consultation with one of our hardwood flooring specialists.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-bold">Premium Materials</h4>
                    <p className="text-white/60">Top-quality hardwoods for unparalleled beauty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-bold">Master Craftsmanship</h4>
                    <p className="text-white/60">Expert installation by seasoned professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="text-white font-bold">Lifetime Value</h4>
                    <p className="text-white/60">An investment that enhances your property for years</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 border border-[#d4af37]/20 p-10 lg:p-16">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm uppercase tracking-wider">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-black/60 border border-[#d4af37]/30 text-white p-4 focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2 text-sm uppercase tracking-wider">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-black/60 border border-[#d4af37]/30 text-white p-4 focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/60 border border-[#d4af37]/30 text-white p-4 focus:border-[#d4af37] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-black/60 border border-[#d4af37]/30 text-white p-4 focus:border-[#d4af37] transition-colors"
                  ></textarea>
                </div>
                
                <button className="w-full bg-[#d4af37] text-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors duration-300">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardwoodServicePage;