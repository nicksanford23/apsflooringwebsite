import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import { MENU_ITEMS, SERVICE_PATHS, COMPANY_INFO } from "@/lib/constants";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo className="mb-4" size="large" />
            <p className="text-white/70 mb-4">
              Premium flooring solutions for homes and businesses in {COMPANY_INFO.address.city}, New Orleans and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className="text-white/70 hover:text-primary transition duration-200">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Our Services</h3>
            <ul className="space-y-3">
              {SERVICE_PATHS.map((service) => (
                <li key={service.path}>
                  <Link href={service.path}>
                    <a className="text-white/70 hover:text-primary transition duration-200">
                      {service.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-primary" size={18} />
                <span>{COMPANY_INFO.address.street}<br />{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary" size={18} />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="hover:text-primary transition duration-200"
                >
                  {COMPANY_INFO.formattedPhone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary" size={18} />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-primary transition duration-200"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-primary" size={18} />
                <span>Tue-Fri: 8AM-5PM<br />Sat: 9AM-2PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} APS Flooring LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy">
              <a className="text-white/50 hover:text-primary text-sm transition duration-200">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a className="text-white/50 hover:text-primary text-sm transition duration-200">
                Terms of Service
              </a>
            </Link>
            <Link href="/sitemap.xml">
              <a className="text-white/50 hover:text-primary text-sm transition duration-200">
                Sitemap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
