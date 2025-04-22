import { FEATURES } from "@/lib/constants";
import { 
  Hammer, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  ThumbsUp,
  Truck,
  CheckCircle2
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "hammer":
        return <Hammer className="h-14 w-14 text-primary" />;
      case "bolt":
        return <Zap className="h-14 w-14 text-primary" />;
      case "shield-alt":
        return <ShieldCheck className="h-14 w-14 text-primary" />;
      case "clock":
        return <Clock className="h-14 w-14 text-primary" />;
      case "award":
        return <Award className="h-14 w-14 text-primary" />;
      case "thumbs-up":
        return <ThumbsUp className="h-14 w-14 text-primary" />;
      case "truck":
        return <Truck className="h-14 w-14 text-primary" />;
      default:
        return <CheckCircle2 className="h-14 w-14 text-primary" />;
    }
  };

  return (
    <div className="text-center group">
      <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 group-hover:bg-primary/30 transition-all duration-300">
        {getIcon()}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-white/80 max-w-sm mx-auto">{description}</p>
    </div>
  );
};

interface FeatureCardsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeatureCards = ({ 
  title = "Why APS Flooring",
  subtitle = "Premium flooring craftsmanship that transforms your space",
  features = FEATURES
}: FeatureCardsProps) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax effect
      if (top < windowHeight && top > -sectionRef.current.offsetHeight) {
        setOffset(scrollPosition * 0.15);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      id="content-start"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/473092980_617488114143093_7828898336288653427_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QPfJrGh5SpsQ7kNvwGfox1v&_nc_oc=AdlVXtB0pX5oakcn0VzyhiETkIKVg-CvsWKL13MWBxhr_BY9_ek1OqAZVXXr2FwpQnQ1vTjECYI3cEPMhQtmzHdL&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=tV5CMkQ_HcM9VhzgyByC5w&oh=00_AfHowAdodA12Lee4CrEpHjgaWbMu1iuycSeuwvUUqR-0-A&oe=680CF470')",
          transform: `translateY(${offset}px)`,
          transformOrigin: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
      
      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{title}</h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-10 py-5 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
