import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LocationSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showMap?: boolean;
}

const LocationSection = ({
  title = "Serving Chalmette & New Orleans",
  subtitle = "APS Flooring is your local flooring expert, proudly serving Chalmette, New Orleans, and surrounding communities with premium flooring solutions.",
  className,
  showMap = true
}: LocationSectionProps) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">{title}</h2>
            <p className="text-lg text-secondary/70 mb-8">{subtitle}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <MapPin className="text-primary mr-3" size={20} />
                Our Location
              </h3>
              <p className="text-secondary/70 pl-8">
                {COMPANY_INFO.address.street}<br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Clock className="text-primary mr-3" size={20} />
                Business Hours
              </h3>
              <ul className="text-secondary/70 pl-8 space-y-1">
                <li className="flex justify-between">
                  <span>Monday:</span>
                  <span>{COMPANY_INFO.hours.monday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Tuesday-Friday:</span>
                  <span>{COMPANY_INFO.hours.tuesday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>{COMPANY_INFO.hours.saturday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>{COMPANY_INFO.hours.sunday}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Phone className="text-primary mr-3" size={20} />
                Contact Information
              </h3>
              <p className="text-secondary/70 pl-8">
                Phone:{" "}
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline">
                  {COMPANY_INFO.formattedPhone}
                </a>
                <br />
                Email:{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>
          
          {showMap && (
            <div className="h-[400px] rounded-sm overflow-hidden shadow-lg">
              {/* Google Maps iframe */}
              <iframe
                title="APS Flooring Location Map"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
