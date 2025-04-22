import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
  path: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: ServiceItemProps[];
  className?: string;
}

const ServiceCard = ({ title, description, imageSrc, path }: ServiceItemProps) => {
  return (
    <div className="service-card group">
      <div className="service-card-overlay"></div>
      <img 
        src={imageSrc} 
        alt={title} 
        className="service-card-img"
      />
      <div className="service-card-content">
        <h3 className="text-white text-2xl font-playfair font-semibold mb-2 group-hover:text-primary transition duration-300">{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <Link href={path}>
          <a className="text-primary hover:text-white inline-flex items-center font-medium">
            Learn More
            <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" size={18} />
          </a>
        </Link>
      </div>
    </div>
  );
};

const ServicesGrid = ({ 
  title = "Our Premium Flooring Services",
  subtitle = "From classic to contemporary, we offer comprehensive flooring solutions to meet your specific needs.",
  services,
  className
}: ServicesGridProps) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              path={service.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
