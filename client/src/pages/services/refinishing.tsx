import ServiceDetail from "./service-detail";
import { faqs } from "@/data/faq";

const RefinishingServicePage = () => {
  const refinishingService = {
    slug: "refinishing",
    title: "Hardwood Floor Refinishing",
    description: "Revitalize your existing hardwood floors with our professional sanding and refinishing services.",
    metaDescription: "Expert hardwood floor sanding and refinishing in Chalmette and New Orleans. Restore the beauty of your existing wood floors with APS Flooring's professional services.",
    heroImage: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    problem: "Over time, hardwood floors show wear through scratches, discoloration, and dullness. Many homeowners consider replacement when refinishing could restore their floors to like-new condition at a fraction of the cost.",
    solution: "Our refinishing process removes years of wear and damage, allowing us to apply fresh stain and finish that protect your floors while enhancing their natural beauty. We transform tired floors into stunning features of your home.",
    bulletPoints: [
      "Visible scratches, dents, and wear patterns",
      "Faded or discolored finish from sun exposure",
      "Outdated stain color or sheen level",
      "Dustless sanding technology for minimal mess",
      "Multiple sanding passes for optimal smoothness",
      "Custom stain matching or color transformation",
      "Premium water-based or oil-based finish options"
    ],
    processSteps: [
      {
        number: 1,
        title: "Assessment & Preparation",
        description: "We evaluate your floor's condition, discuss finish options, and prepare the space by removing furniture and protecting your home."
      },
      {
        number: 2,
        title: "Precision Sanding",
        description: "Using our dustless sanding equipment, we remove the old finish and a thin layer of wood to reveal fresh hardwood beneath."
      },
      {
        number: 3,
        title: "Staining",
        description: "If desired, we apply your chosen stain color and ensure even absorption for a uniform appearance."
      },
      {
        number: 4,
        title: "Finishing & Curing",
        description: "We apply multiple coats of premium finish with appropriate drying time between coats, then allow for proper curing."
      }
    ],
    beforeImage: "https://images.unsplash.com/photo-1577099686204-19d51d7a166c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    faqs: faqs.refinishingFaqs
  };

  return <ServiceDetail serviceData={refinishingService} />;
};

export default RefinishingServicePage;
