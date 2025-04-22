import ServiceDetail from "./service-detail";
import { faqs } from "@/data/faq";

const TileStoneServicePage = () => {
  const tileStoneService = {
    slug: "tile-stone",
    title: "Tile & Stone Flooring",
    description: "Custom tile and stone flooring installation for kitchens, bathrooms, and other areas of your home.",
    metaDescription: "Professional tile and stone flooring installation in Chalmette and New Orleans. Porcelain, ceramic, natural stone, and more. Get a free estimate from APS Flooring.",
    heroImage: "https://lh3.googleusercontent.com/p/AF1QipNOuphZNPg9Gd5ykPucA-JEJt51XKQ8IAZgvChP=s680-w680-h510",
    problem: "Tile and stone installation requires precision and expertise. Improper installation can lead to loose tiles, uneven surfaces, and moisture problems. DIY attempts often result in costly mistakes and future repairs.",
    solution: "Our certified tile installers provide meticulous installation of various tile and stone materials. We handle everything from precise cutting and layout to proper substrate preparation and waterproofing for a beautiful, lasting result.",
    bulletPoints: [
      "Concerns about proper waterproofing in wet areas",
      "Difficulty achieving level, even tile layouts",
      "Complex installation requirements for different tile types",
      "Professional waterproofing for bathrooms and wet areas",
      "Precision cutting and expert pattern layouts",
      "Proper substrate preparation to prevent cracking",
      "Premium grout selection with stain resistance"
    ],
    processSteps: [
      {
        number: 1,
        title: "Design Consultation",
        description: "We help you select the perfect tile type, size, pattern, and grout color for your space."
      },
      {
        number: 2,
        title: "Surface Preparation",
        description: "We properly prepare the substrate with appropriate underlayment, leveling, and waterproofing when needed."
      },
      {
        number: 3,
        title: "Precision Installation",
        description: "Our experts meticulously lay your tile in the chosen pattern, ensuring even spacing and proper alignment."
      },
      {
        number: 4,
        title: "Grouting & Sealing",
        description: "We apply premium grout, clean the surface, and seal both tile and grout when appropriate for lasting protection."
      }
    ],
    beforeImage: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    faqs: faqs.tileFaqs
  };

  return <ServiceDetail serviceData={tileStoneService} />;
};

export default TileStoneServicePage;
