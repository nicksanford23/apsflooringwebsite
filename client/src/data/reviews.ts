import type { Review } from "@shared/schema";

// This file provides sample review data for display on the initial page load
// The actual data will be fetched from the API
export const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Michael T.",
    location: "New Orleans, LA",
    rating: 5,
    text: "The team at APS Flooring transformed our home with beautiful hardwood floors. Their attention to detail and craftsmanship exceeded our expectations!",
    service: "hardwood",
    date: new Date("2023-04-15"),
    featured: true
  },
  {
    id: 2,
    name: "Jennifer L.",
    location: "Chalmette, LA",
    rating: 5,
    text: "We couldn't be happier with our new luxury vinyl plank floors. The team was professional, efficient, and the quality of work is outstanding. Highly recommended!",
    service: "vinyl-plank",
    date: new Date("2023-03-22"),
    featured: true
  },
  {
    id: 3,
    name: "Robert W.",
    location: "Metairie, LA",
    rating: 5,
    text: "APS refinished our old hardwood floors and they look brand new! Great communication throughout the process and they finished on time. Will use them again for our kitchen.",
    service: "refinishing",
    date: new Date("2023-05-10"),
    featured: true
  },
  {
    id: 4,
    name: "Sarah M.",
    location: "New Orleans, LA",
    rating: 5,
    text: "Excellent tile work in our bathroom! The team was knowledgeable, professional, and completed the job on schedule. The attention to detail was impressive.",
    service: "tile-stone",
    date: new Date("2023-02-28"),
    featured: false
  },
  {
    id: 5,
    name: "David K.",
    location: "Slidell, LA",
    rating: 5,
    text: "APS Flooring installed hardwood throughout our first floor and the results are stunning. They were a pleasure to work with from start to finish.",
    service: "hardwood",
    date: new Date("2023-01-15"),
    featured: false
  },
  {
    id: 6,
    name: "Lisa P.",
    location: "Chalmette, LA",
    rating: 5,
    text: "The vinyl plank flooring APS installed in our rental property looks amazing and is incredibly durable. Exactly what we needed!",
    service: "vinyl-plank",
    date: new Date("2023-04-05"),
    featured: false
  },
  {
    id: 7,
    name: "James R.",
    location: "Metairie, LA",
    rating: 5,
    text: "Professional, punctual, and precise. Our tile floors came out better than we imagined. We'll definitely be calling APS for our next project.",
    service: "tile-stone",
    date: new Date("2023-05-20"),
    featured: false
  },
  {
    id: 8,
    name: "Amanda T.",
    location: "New Orleans, LA",
    rating: 5,
    text: "Our refinished floors look brand new! APS was able to match the existing stain perfectly where we had to replace a few damaged boards. You can't tell the difference at all.",
    service: "refinishing",
    date: new Date("2023-03-12"),
    featured: false
  }
];
