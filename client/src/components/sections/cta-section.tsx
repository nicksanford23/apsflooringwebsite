import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { cn, getDiagonalPattern } from "@/lib/utils";
import { COMPANY_INFO, CITY } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  className?: string;
}

const CTASection = ({
  title = "Get Your Free Flooring Quote",
  subtitle = `Quick response, no-obligation quotes for your flooring project. Serving ${CITY}, New Orleans, and surrounding areas.`,
  showPhone = true,
  className
}: CTASectionProps) => {
  const backgroundPattern = getDiagonalPattern();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    squareFeet: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    // Simulate form submission
    setTimeout(() => {
      // In production, you'd make an API call here
      console.log("Form data:", formData);
      setFormStatus("success");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          squareFeet: "",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <section className={cn(
      "py-16 md:py-24 bg-black relative overflow-hidden",
      className
    )}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: backgroundPattern }}
      ></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#111]/80 p-6 sm:p-10 md:p-16 rounded-xl shadow-2xl border border-[#d4af37]/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left column - Text content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
                {subtitle}
              </p>
              
              <div className="space-y-5 md:space-y-8 mb-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/20 rounded-full p-2 md:p-3 mt-1">
                    <Phone className="text-white h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Call Us Directly</h3>
                    <p className="text-white/80">
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-white hover:text-[#d4af37] transition-colors"
                      >
                        {COMPANY_INFO.formattedPhone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/20 rounded-full p-2 md:p-3 mt-1">
                    <Mail className="text-white h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-white/80">
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-white hover:text-[#d4af37] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 p-4 md:p-6 rounded-lg border border-[#d4af37]/20">
                <p className="text-white/90 font-medium text-lg mb-2">Why Choose Us:</p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-[#d4af37] rounded-full mr-2"></span>
                    Free detailed quotes with no-obligations
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-[#d4af37] rounded-full mr-2"></span>
                    Premium quality materials and craftsmanship
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-[#d4af37] rounded-full mr-2"></span>
                    5-star rated service with 24+ reviews
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-[#d4af37] rounded-full mr-2"></span>
                    Flooring experts serving New Orleans area since 2010
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right column - Quote form */}
            <div id="quote-form" className="bg-white rounded-lg shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get Your Free Quote</h3>
              
              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 sm:p-6 text-center">
                  <p className="text-lg sm:text-xl font-medium mb-2">Thank you for your request!</p>
                  <p>We've received your information and will contact you within 24 hours to discuss your flooring project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37]"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37]"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37]"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="service" className="block text-gray-700 mb-1 font-medium">
                          Floor Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] appearance-none bg-white"
                        >
                          <option value="">Select a Service</option>
                          <option value="hardwood">Hardwood Flooring</option>
                          <option value="vinyl">Luxury Vinyl Plank</option>
                          <option value="tile">Tile & Stone</option>
                          <option value="refinishing">Floor Refinishing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="squareFeet" className="block text-gray-700 mb-1 font-medium">
                          Approximate Sq. Feet
                        </label>
                        <input
                          type="text"
                          id="squareFeet"
                          name="squareFeet"
                          value={formData.squareFeet}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37]"
                          placeholder="500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37]"
                        placeholder="Tell us more about your project..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className={cn(
                      "w-full bg-[#d4af37] hover:bg-[#c4a030] text-black font-medium px-6 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-lg text-lg",
                      formStatus === "loading" && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {formStatus === "loading" ? "Submitting..." : "Submit Request"}
                  </button>
                  
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted regarding your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;