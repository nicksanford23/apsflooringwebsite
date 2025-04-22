import ServiceDetail from "./service-detail";
import { faqs } from "@/data/faq";

const VinylPlankServicePage = () => {
  const vinylPlankService = {
    slug: "vinyl-plank",
    title: "Luxury Vinyl Plank",
    description: "Durable, waterproof, and stylish luxury vinyl plank flooring that mimics natural wood or stone.",
    metaDescription: "Professional luxury vinyl plank (LVP) flooring installation in Chalmette and New Orleans. Waterproof, durable, and beautiful wood-look floors by APS Flooring.",
    heroImage: "https://images.unsplash.com/photo-1571993142257-eae0b44cf0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    problem: "Many homeowners need flooring that's both beautiful and can withstand moisture, pets, and high traffic. Traditional hardwood isn't always suitable for these situations, and older vinyl options often look artificial and cheap.",
    solution: "Our luxury vinyl plank flooring combines the beauty of natural wood with enhanced durability and waterproof properties. We install premium LVP that offers realistic wood textures, exceptional durability, and peace of mind for busy households.",
    bulletPoints: [
      "Need for moisture-resistant flooring in bathrooms and kitchens",
      "Concerns about scratches from pets and children",
      "Desire for wood-look flooring at a lower price point",
      "100% waterproof luxury vinyl plank options",
      "Realistic wood textures and appearances",
      "Scratch-resistant wear layers for high-traffic areas",
      "Quick installation with minimal disruption to your home"
    ],
    processSteps: [
      {
        number: 1,
        title: "Consultation & Selection",
        description: "We help you select the perfect LVP style for your space and provide samples to view in your home."
      },
      {
        number: 2,
        title: "Subfloor Preparation",
        description: "We ensure your subfloor is clean, dry, and level to provide a solid foundation for your new vinyl plank flooring."
      },
      {
        number: 3,
        title: "Expert Installation",
        description: "Our technicians install your LVP using the appropriate method for your selected product (floating, glue-down, or click-lock)."
      },
      {
        number: 4,
        title: "Final Touches",
        description: "We install trim pieces, transitions, and perform a detailed clean-up, leaving you with a beautiful, ready-to-use floor."
      }
    ],
    beforeImage: "https://images.unsplash.com/photo-1594846887676-83e12a8cfcae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    faqs: faqs.vinylFaqs
  };

  return <ServiceDetail serviceData={vinylPlankService} />;
};

export default VinylPlankServicePage;
