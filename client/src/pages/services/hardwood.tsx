import ServiceDetail from "./service-detail";
import { faqs } from "@/data/faq";

const HardwoodServicePage = () => {
  const hardwoodService = {
    slug: "hardwood",
    title: "Hardwood Flooring",
    description: "Premium hardwood floor installation with a variety of wood species, finishes, and patterns to choose from.",
    metaDescription: "Expert hardwood flooring installation in Chalmette and New Orleans. Choose from oak, maple, walnut and more. Get a free quote from APS Flooring today.",
    heroImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    problem: "Finding the right hardwood flooring can be overwhelming with so many options, and improper installation can lead to warping, gaps, and premature wear. Many homeowners struggle to find qualified professionals who understand the nuances of hardwood installation.",
    solution: "APS Flooring provides expert hardwood floor installation with meticulous attention to detail. We guide you through the selection process, prepare your subfloor properly, and use advanced installation techniques to ensure a beautiful, long-lasting result.",
    bulletPoints: [
      "Difficulty choosing the right wood species and finish",
      "Concerns about durability and maintenance",
      "Risk of improper installation causing warping and gaps",
      "Premium selection of domestic and exotic hardwoods",
      "Expert installation by certified hardwood specialists",
      "Proper acclimation and moisture testing before installation",
      "Finishing options including site-finished or pre-finished hardwood"
    ],
    processSteps: [
      {
        number: 1,
        title: "Consultation & Measurement",
        description: "We discuss your preferences, lifestyle needs, and budget while taking precise measurements of your space."
      },
      {
        number: 2,
        title: "Preparation & Acclimation",
        description: "We prepare your subfloor and allow the hardwood to acclimate to your home's environment for optimal stability."
      },
      {
        number: 3,
        title: "Professional Installation",
        description: "Our experts install your hardwood flooring with precision, ensuring perfect alignment and secure fastening."
      },
      {
        number: 4,
        title: "Finishing & Quality Check",
        description: "We apply the chosen finish (if site-finished) and conduct a thorough quality inspection of the completed floor."
      }
    ],
    beforeImage: "https://images.unsplash.com/photo-1577099686204-19d51d7a166c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1633116536735-0a99af6922ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    faqs: faqs.hardwoodFaqs
  };

  return <ServiceDetail serviceData={hardwoodService} />;
};

export default HardwoodServicePage;
