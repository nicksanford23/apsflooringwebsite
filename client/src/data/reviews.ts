import type { Review } from "@shared/schema";

// This file provides sample review data for display on the initial page load
// The actual data will be fetched from the API
export const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Tammy N.",
    location: "New Orleans, LA",
    rating: 5,
    text: "They did such a great job! They were very responsive and accommodating on start date. Came on time and were very quick and professional. Did an excellent job on both the tile and vinyl floor installations. Finished in 2 days.",
    service: "tile-stone",
    date: new Date("2023-12-15"),
    featured: true
  },
  {
    id: 2,
    name: "Dylon B.",
    location: "Chalmette, LA",
    rating: 5,
    text: "Completely blown away. These guys are the real deal. Completely tore down two bad shower tile jobs I got done last year, and gave us the showers we always wanted. Great communication, very skilled workers, and very quick but not rushed. I recommend this company to anyone wanting a great job done.",
    service: "tile-stone",
    date: new Date("2024-01-22"),
    featured: true
  },
  {
    id: 3,
    name: "Michael R.",
    location: "Metairie, LA",
    rating: 5,
    text: "I think we are all in the same boat when you want a contractor to be honest and timely, but we all want to get the best price. When you're trying to do remodeling or upgrades on a budget, it could turn out great or you could find yourself contacting the local news about a nightmare story. Pereira Flooring does good business and clearly is very competent and experienced.",
    service: "hardwood",
    date: new Date("2024-02-10"),
    featured: true
  },
  {
    id: 4,
    name: "Sarah M.",
    location: "New Orleans, LA",
    rating: 5,
    text: "Excellent tile work in our bathroom! The team was knowledgeable, professional, and completed the job on schedule. The attention to detail was impressive.",
    service: "tile-stone",
    date: new Date("2023-11-28"),
    featured: false
  },
  {
    id: 5,
    name: "David K.",
    location: "Slidell, LA",
    rating: 5,
    text: "APS Flooring installed hardwood throughout our first floor and the results are stunning. They were a pleasure to work with from start to finish.",
    service: "hardwood",
    date: new Date("2023-10-15"),
    featured: false
  },
  {
    id: 6,
    name: "Lisa P.",
    location: "Chalmette, LA",
    rating: 5,
    text: "The vinyl plank flooring APS installed in our rental property looks amazing and is incredibly durable. Exactly what we needed!",
    service: "vinyl-plank",
    date: new Date("2024-01-05"),
    featured: false
  },
  {
    id: 7,
    name: "James R.",
    location: "Metairie, LA",
    rating: 5,
    text: "Professional, punctual, and precise. Our tile floors came out better than we imagined. We'll definitely be calling APS for our next project.",
    service: "tile-stone",
    date: new Date("2023-12-20"),
    featured: false
  },
  {
    id: 8,
    name: "Amanda T.",
    location: "New Orleans, LA",
    rating: 5,
    text: "Our refinished floors look brand new! APS was able to match the existing stain perfectly where we had to replace a few damaged boards. You can't tell the difference at all.",
    service: "refinishing",
    date: new Date("2023-11-12"),
    featured: false
  }
];
