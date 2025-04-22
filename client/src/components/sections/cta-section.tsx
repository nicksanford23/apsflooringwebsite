import { Link } from "wouter";
import { Phone } from "lucide-react";
import { cn, getDiagonalPattern } from "@/lib/utils";
import { COMPANY_INFO, CITY } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
  className?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Floors?",
  subtitle = `Contact us today for a free, no-obligation quote on your flooring project. Serving ${CITY}, New Orleans, and surrounding areas.`,
  primaryCta = {
    text: "Get a Free Quote",
    href: "/contact"
  },
  showPhone = true,
  className
}: CTASectionProps) => {
  const backgroundPattern = getDiagonalPattern();

  return (
    <section className={cn(
      "section-padding bg-secondary relative overflow-hidden",
      className
    )}>
      {/* Diagonal pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: backgroundPattern }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="gold-gradient p-10 md:p-16 rounded-sm shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCta.href}>
              <a className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-sm font-medium text-lg transition duration-200 shadow-md">
                {primaryCta.text}
              </a>
            </Link>
            
            {showPhone && (
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-sm font-medium text-lg transition duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                {COMPANY_INFO.formattedPhone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
