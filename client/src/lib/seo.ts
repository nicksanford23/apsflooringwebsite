export interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
  url?: string;
  article?: boolean;
  keywords?: string[];
}

export const defaultSEO = {
  title: "APS Flooring LLC | Premium Flooring Contractor in Chalmette, Louisiana",
  description: "APS Flooring offers premium hardwood, vinyl plank, and tile flooring installation and refinishing services in Chalmette and New Orleans. 5-star rated contractor.",
  ogImage: "https://i.imgur.com/G8Jnzk4.png",
  url: "https://apsflooring.com",
  keywords: [
    "flooring contractor",
    "hardwood flooring",
    "vinyl plank flooring",
    "tile flooring",
    "floor refinishing",
    "Chalmette",
    "New Orleans",
    "Louisiana"
  ]
};

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "APS Flooring LLC",
    "image": "https://i.imgur.com/G8Jnzk4.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "323 E Virtue St",
      "addressLocality": "Chalmette",
      "addressRegion": "LA",
      "postalCode": "70043",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.9427,
      "longitude": -89.9629
    },
    "url": "https://apsflooring.com/",
    "telephone": "+15044023895",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "Closed",
        "closes": "Closed"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "closes": "Closed",
        "opens": "Closed"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.01",
      "reviewCount": "48"
    },
    "priceRange": "$$"
  };
};

export const getServiceSchema = (props: {
  name: string;
  description: string;
  url: string;
  image: string;
  area?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": props.name,
    "description": props.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "APS Flooring LLC"
    },
    "areaServed": props.area || "Chalmette, New Orleans, and surrounding areas",
    "url": props.url,
    "image": props.image
  };
};

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
