export const COMPANY_INFO = {
  name: "APS Flooring LLC",
  tagline: "TILES IN STYLE",
  phone: "+15044023895",
  formattedPhone: "(504) 402-3895",
  email: "info@apsflooring.com",
  address: {
    street: "323 E Virtue St",
    city: "Chalmette",
    state: "LA",
    zip: "70043",
    full: "323 E Virtue St, Chalmette, LA 70043"
  },
  hours: {
    monday: "Closed",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed"
  },
  rating: "5.01",
  reviewCount: "48",
  social: {
    facebook: "https://facebook.com/apsflooring",
    instagram: "https://instagram.com/apsflooring",
    pinterest: "https://pinterest.com/apsflooring",
    houzz: "https://houzz.com/pro/apsflooring"
  },
  googleMapsUrl: "https://www.google.com/maps/place/323+E+Virtue+St,+Chalmette,+LA+70043",
  servingAreas: ["Chalmette", "New Orleans", "Metairie", "Slidell", "St. Bernard Parish"]
};

export const MENU_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

export const SERVICE_PATHS = [
  { name: "Hardwood Flooring", path: "/services/hardwood" },
  { name: "Luxury Vinyl Plank", path: "/services/vinyl-plank" },
  { name: "Tile & Stone", path: "/services/tile-stone" },
  { name: "Sanding & Refinishing", path: "/services/refinishing" }
];

export const FEATURES = [
  {
    icon: "hammer",
    title: "Exceptional Craftsmanship",
    description: "Every floor we install meets our rigorous quality standards, ensuring beautiful, long-lasting results for your home or business."
  },
  {
    icon: "bolt",
    title: "Efficient Completion",
    description: "We respect your time and space by completing projects efficiently without compromising on quality or attention to detail."
  },
  {
    icon: "shield-alt",
    title: "Comprehensive Warranty",
    description: "Our confidence in our work is backed by industry-leading warranties, giving you peace of mind for years to come."
  }
];

export const GALLERY_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "hardwood", name: "Hardwood" },
  { id: "vinyl-plank", name: "Vinyl" },
  { id: "tile-stone", name: "Tile" },
  { id: "refinishing", name: "Refinish" }
];

export const CITY = "Chalmette";
