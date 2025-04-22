import { FEATURES } from "@/lib/constants";
import { 
  Hammer, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  ThumbsUp,
  Truck
} from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "hammer":
        return <Hammer className="h-8 w-8 text-primary" />;
      case "bolt":
        return <Zap className="h-8 w-8 text-primary" />;
      case "shield-alt":
        return <ShieldCheck className="h-8 w-8 text-primary" />;
      case "clock":
        return <Clock className="h-8 w-8 text-primary" />;
      case "award":
        return <Award className="h-8 w-8 text-primary" />;
      case "thumbs-up":
        return <ThumbsUp className="h-8 w-8 text-primary" />;
      case "truck":
        return <Truck className="h-8 w-8 text-primary" />;
      default:
        return <Award className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-icon">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-secondary/70">{description}</p>
    </div>
  );
};

interface FeatureCardsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeatureCards = ({ 
  title = "Why Choose APS Flooring",
  subtitle = "Our commitment to excellence is reflected in every flooring project we complete for our valued customers.",
  features = FEATURES
}: FeatureCardsProps) => {
  return (
    <section className="section-padding bg-gray-50" id="content-start">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
