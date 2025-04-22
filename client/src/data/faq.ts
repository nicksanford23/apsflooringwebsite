interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategories {
  generalFaqs: FAQ[];
  hardwoodFaqs: FAQ[];
  vinylFaqs: FAQ[];
  tileFaqs: FAQ[];
  refinishingFaqs: FAQ[];
}

export const faqs: FAQCategories = {
  generalFaqs: [
    {
      question: "How do I know which flooring type is best for my home?",
      answer: "The best flooring depends on several factors including your lifestyle, the room's function, your budget, and aesthetic preferences. Hardwood offers timeless beauty but requires more maintenance. Luxury vinyl is durable and waterproof, making it great for busy households. Tile is perfect for moisture-prone areas. During our consultation, we'll assess your specific needs and recommend the ideal flooring solution."
    },
    {
      question: "How long will my flooring installation take?",
      answer: "Installation timelines vary based on the flooring type, area size, and existing floor removal needs. As a general guideline: Hardwood installations typically take 3-5 days, vinyl plank 1-3 days, and tile 3-7 days for an average-sized room. Refinishing hardwood usually takes 3-5 days. We'll provide a specific timeline for your project during your consultation."
    },
    {
      question: "Do I need to remove my existing flooring before installation?",
      answer: "No, we handle the entire process including removal and disposal of your existing flooring. This is included in our comprehensive service to ensure proper preparation of the subfloor for the new installation. We carefully assess the existing floor and determine the best approach for removal to prepare for your new flooring."
    },
    {
      question: "What's included in your free estimate?",
      answer: "Our comprehensive estimate includes material costs, removal of existing flooring, subfloor preparation, installation labor, trim work, and cleanup. We provide a detailed breakdown of all costs with no hidden fees. We'll also discuss timeline expectations and answer any questions you may have about the installation process."
    },
    {
      question: "Do you offer warranties on your flooring?",
      answer: "Yes, all our flooring installations come with a comprehensive warranty. Manufacturer warranties cover the flooring materials (typically 10-50 years depending on the product), and we provide a 2-year labor warranty on our installation. This means if any issues arise due to installation within that period, we'll fix it at no cost to you."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Chalmette, New Orleans, Metairie, Slidell, and all surrounding areas throughout St. Bernard Parish and the greater New Orleans region. If you're unsure if we service your location, please contact us, and we'll be happy to let you know if we can accommodate your project."
    },
    {
      question: "Do I need to be home during the installation?",
      answer: "While you don't need to be present the entire time, we recommend being available at the start of the project to review details and at completion for a final walkthrough. We're fully insured and trusted professionals, so many clients provide access and go about their normal routines during installation."
    }
  ],
  
  hardwoodFaqs: [
    {
      question: "What hardwood species do you recommend for high-traffic areas?",
      answer: "For high-traffic areas, we recommend harder wood species like white oak, hickory, or maple. These species have higher Janka hardness ratings, making them more resistant to dents and wear. Red oak is also a good middle-ground option that balances durability with affordability. We can show you samples of each to help you decide which best suits your aesthetic and practical needs."
    },
    {
      question: "Should I choose solid or engineered hardwood?",
      answer: "Both have advantages. Solid hardwood can be refinished multiple times and typically lasts longer (100+ years with proper care). Engineered hardwood is more stable in humid environments and can be installed below grade (basements). For most New Orleans homes, we often recommend engineered hardwood due to our region's humidity, but we assess each situation individually based on your specific conditions and preferences."
    },
    {
      question: "How long does hardwood need to acclimate before installation?",
      answer: "Hardwood flooring should acclimate in your home for a minimum of 3-5 days before installation. This allows the wood to adjust to your home's specific temperature and humidity levels, reducing the risk of expansion, contraction, or warping after installation. Proper acclimation is crucial for a successful hardwood floor installation, especially in our humid Louisiana climate."
    },
    {
      question: "Can hardwood floors be installed in kitchens and bathrooms?",
      answer: "Hardwood can work in kitchens with proper precautions (area rugs near sinks, prompt spill cleanup). For bathrooms, we generally recommend avoiding solid hardwood due to moisture concerns. However, engineered hardwood can be suitable for powder rooms or half baths with limited moisture. For full bathrooms, we typically recommend luxury vinyl plank or tile as more moisture-resistant alternatives."
    },
    {
      question: "What's the difference between site-finished and pre-finished hardwood?",
      answer: "Pre-finished hardwood comes already sanded and finished from the factory, allowing for quicker installation and immediate use. Site-finished hardwood is installed raw, then sanded and finished in your home, creating a completely custom look with no bevels between boards. Site-finishing takes longer (additional 3-5 days) and creates more dust, but many homeowners prefer the seamless, custom result it provides."
    },
    {
      question: "How often should hardwood floors be refinished?",
      answer: "Hardwood floors typically need refinishing every 7-10 years, though this varies based on foot traffic, maintenance, and the hardness of your wood species. Signs it's time to refinish include visible scratches that catch your socks, dull appearance despite cleaning, gray or black discoloration, or water damage. Regular maintenance can extend the time between refinishing."
    }
  ],
  
  vinylFaqs: [
    {
      question: "Is luxury vinyl plank really waterproof?",
      answer: "Yes, luxury vinyl plank (LVP) is fully waterproof. The vinyl material itself doesn't absorb water, and quality LVP has tight-locking systems that prevent water from seeping between planks to the subfloor. This makes it ideal for bathrooms, kitchens, and basements. However, excessive standing water should still be cleaned promptly, as it could potentially seep around the perimeter and damage the subfloor."
    },
    {
      question: "How does vinyl plank compare to laminate flooring?",
      answer: "While both offer affordable wood-look options, vinyl plank is superior to laminate in moisture resistance. LVP is fully waterproof, while laminate's fiberboard core swells when wet. LVP is also typically more flexible, comfortable underfoot, and quieter. However, laminate often provides a harder surface that can feel more like real wood. During your consultation, we can show you samples of both to help you make an informed decision."
    },
    {
      question: "What thickness of vinyl plank should I choose?",
      answer: "For residential use, we recommend luxury vinyl plank with a minimum thickness of 5mm, and preferably 6-8mm for high-traffic areas. Additionally, look for a wear layer thickness of at least 12 mil for average households, or 20 mil for homes with pets, children, or heavy traffic. Thicker vinyl generally provides better durability, sound insulation, comfort underfoot, and temperature stability."
    },
    {
      question: "Can luxury vinyl plank be installed over existing flooring?",
      answer: "In many cases, yes. LVP can often be installed over existing hard surfaces like hardwood, tile, or vinyl if they're in good condition, clean, and level. However, we typically recommend removing carpet before LVP installation. During our assessment, we'll determine if your existing floor is suitable for installation or if removal would be better for optimal results."
    },
    {
      question: "How long does vinyl plank flooring last?",
      answer: "Quality luxury vinyl plank flooring typically lasts 15-25 years in residential settings. Higher-end products often come with warranties of 20+ years. The actual lifespan depends on several factors including the quality of the vinyl, thickness of the wear layer, amount of foot traffic, proper installation, and maintenance. Commercial-grade LVP can last even longer with proper care."
    },
    {
      question: "Will vinyl plank flooring fade in direct sunlight?",
      answer: "Most modern luxury vinyl plank includes UV-resistant layers that significantly reduce fading. However, like all flooring types, prolonged exposure to intense direct sunlight may cause some fading over time. In rooms with large windows and strong sun exposure, we recommend using window treatments and occasionally moving area rugs and furniture to ensure even exposure and aging."
    }
  ],
  
  tileFaqs: [
    {
      question: "What's the difference between ceramic and porcelain tile?",
      answer: "Both are clay-based, but porcelain is fired at higher temperatures, making it denser, less porous, and more durable than ceramic. Porcelain has greater water resistance (0.5% absorption rate vs. 3%+ for ceramic) and is suitable for indoor and outdoor use. Ceramic is typically less expensive and easier to cut. We recommend porcelain for high-traffic areas and bathrooms, while ceramic works well for walls and lower-traffic areas."
    },
    {
      question: "Do I need special underlayment for tile installation?",
      answer: "Proper underlayment is crucial for tile installation. In most cases, we use cement backer board over the subfloor to provide a stable, moisture-resistant foundation. For bathroom installations, we apply waterproofing membrane systems like Schluter-KERDI to prevent moisture damage. The specific underlayment depends on your subfloor condition, the room's purpose, and the tile type. Our installation always adheres to industry standards for long-lasting results."
    },
    {
      question: "How do I choose the right grout color?",
      answer: "Grout color significantly impacts your tile's final appearance. For a seamless look, choose grout that matches your tile color. For a more defined pattern, select a contrasting color. Lighter grouts highlight the tile pattern but show dirt more easily. Darker grouts are better at hiding stains but may fade over time. We'll show you samples to help visualize how different grout colors will look with your selected tile."
    },
    {
      question: "Is tile flooring cold underfoot?",
      answer: "Tile naturally feels cooler than other flooring types as it doesn't retain heat well. However, there are solutions to make tile more comfortable: radiant floor heating systems can be installed beneath tile for consistent warmth, area rugs can add warmth in specific areas, and certain tile materials (like wood-look porcelain) don't feel as cold as stone or traditional ceramic. We can discuss these options based on your comfort preferences."
    },
    {
      question: "How do I maintain and clean tile floors?",
      answer: "Tile is one of the easiest flooring types to maintain. Regular cleaning involves sweeping or vacuuming to remove debris, followed by mopping with a manufacturer-approved tile cleaner or mild detergent solution. For grout, periodic cleaning with a soft-bristle brush and grout cleaner helps maintain its appearance. We recommend applying grout sealer every 1-2 years to protect against stains and moisture. Avoid acidic or abrasive cleaners that can damage the tile or grout."
    },
    {
      question: "Can I get the look of wood or stone with tile?",
      answer: "Absolutely! Modern manufacturing techniques have created incredibly realistic wood-look and stone-look tiles. These offer the appearance of natural materials with the durability and water resistance of tile. Wood-look porcelain planks capture authentic grain patterns and textures, while stone-look tiles replicate marble, travertine, and slate without the maintenance requirements. During your consultation, we can show you these options which provide beauty and practicality."
    }
  ],
  
  refinishingFaqs: [
    {
      question: "How can I tell if my floors need refinishing or replacement?",
      answer: "Refinishing is suitable when your hardwood has surface-level damage (scratches, dullness, minor water spots) but is structurally sound. Signs floors need replacement instead include: warping, buckling, extensive water damage, excessive movement/squeaking, multiple previous sandings that have worn down to the tongue-and-groove, or large gaps between boards. We'll assess your floors during our consultation to determine the best approach."
    },
    {
      question: "Is dust-free refinishing really dust-free?",
      answer: "Our dust containment system eliminates approximately 95-98% of airborne dust typically associated with floor sanding. While we can't guarantee 100% dust elimination, our advanced vacuum-sealed sanding equipment significantly reduces dust compared to traditional methods. This means minimal cleanup and less impact on your home's air quality. Many customers are pleasantly surprised by how clean the process is."
    },
    {
      question: "How long does the refinishing process take?",
      answer: "A standard hardwood floor refinishing project typically takes 3-5 days from start to finish. Day 1: Sanding. Days 2-3: Staining (if applicable) and first coats of finish. Days 4-5: Final coats and curing. Larger projects may take longer. While the floor is usable with stockinged feet after 24 hours following the final coat, full curing takes 7-14 days depending on the finish type. We'll provide a detailed timeline specific to your project."
    },
    {
      question: "Can I change the color of my hardwood floors during refinishing?",
      answer: "Absolutely! Refinishing is the perfect opportunity to change your floor's color. We can apply various stains to dramatically change the look, from light natural tones to rich dark browns, or even custom colors. Different wood species accept stain differently, so we'll create sample areas to show you exactly how your specific floor will look with different stain options before proceeding with the full project."
    },
    {
      question: "What's the difference between oil-based and water-based finishes?",
      answer: "Oil-based polyurethane offers a warm amber glow that deepens over time, higher durability, and typically costs less. However, it has a stronger odor, longer dry time (24+ hours between coats), and yellows with age. Water-based polyurethane dries faster (2-3 hours between coats), has minimal odor, remains clear without yellowing, but is typically more expensive. We offer both options and can discuss which is best for your specific needs and preferences."
    },
    {
      question: "Do I need to move out during floor refinishing?",
      answer: "While you don't need to completely move out, the refinishing process does impact normal living. You cannot walk on the floors during the finishing process (up to 3-4 days), and furniture needs to be removed from the work areas. Oil-based finishes produce strong odors that may be uncomfortable for some people and pets. Many customers choose to stay elsewhere during the process, but it's not strictly necessary if you can secure pets and arrange limited access to the refinished areas."
    }
  ]
};
