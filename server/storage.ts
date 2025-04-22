import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContact,
  reviews, type Review, type InsertReview,
  blogPosts, type BlogPost, type InsertBlogPost,
  galleryImages, type GalleryImage, type InsertGalleryImage 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User operations (from original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  
  // Reviews
  createReview(review: InsertReview): Promise<Review>;
  getReviews(): Promise<Review[]>;
  getFeaturedReviews(limit?: number): Promise<Review[]>;
  
  // Blog posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getFeaturedBlogPosts(limit?: number): Promise<BlogPost[]>;
  
  // Gallery
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImagesByCategory(category: string): Promise<GalleryImage[]>;
  getGalleryImagesByService(serviceSlug: string): Promise<GalleryImage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private reviewsList: Map<number, Review>;
  private posts: Map<number, BlogPost>;
  private gallery: Map<number, GalleryImage>;
  
  currentId: number;
  currentContactId: number;
  currentReviewId: number;
  currentPostId: number;
  currentGalleryId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.reviewsList = new Map();
    this.posts = new Map();
    this.gallery = new Map();
    
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentReviewId = 1;
    this.currentPostId = 1;
    this.currentGalleryId = 1;
    
    // Seed with initial data
    this.seedData();
  }

  // User management (from original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form submissions
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...contact, 
      id, 
      createdAt: new Date(), 
      resolved: false 
    };
    this.contacts.set(id, submission);
    return submission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }
  
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contacts.get(id);
  }
  
  // Reviews
  async createReview(review: InsertReview): Promise<Review> {
    const id = this.currentReviewId++;
    const newReview: Review = { 
      ...review, 
      id, 
      date: new Date(), 
      featured: false 
    };
    this.reviewsList.set(id, newReview);
    return newReview;
  }
  
  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviewsList.values())
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  
  async getFeaturedReviews(limit = 3): Promise<Review[]> {
    return Array.from(this.reviewsList.values())
      .filter(review => review.featured)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
  }
  
  // Blog posts
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentPostId++;
    const newPost: BlogPost = { ...post, id };
    this.posts.set(id, newPost);
    return newPost;
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.posts.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }
  
  async getFeaturedBlogPosts(limit = 3): Promise<BlogPost[]> {
    return Array.from(this.posts.values())
      .filter(post => post.featured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit);
  }
  
  // Gallery
  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.currentGalleryId++;
    const newImage: GalleryImage = { ...image, id };
    this.gallery.set(id, newImage);
    return newImage;
  }
  
  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.gallery.values());
  }
  
  async getGalleryImagesByCategory(category: string): Promise<GalleryImage[]> {
    return Array.from(this.gallery.values())
      .filter(image => image.category === category);
  }
  
  async getGalleryImagesByService(serviceSlug: string): Promise<GalleryImage[]> {
    return Array.from(this.gallery.values())
      .filter(image => image.serviceSlug === serviceSlug);
  }
  
  // Seed with initial data for demo purposes
  private seedData() {
    // Seed with sample reviews
    const sampleReviews: InsertReview[] = [
      {
        name: "Michael T.",
        location: "New Orleans, LA",
        rating: 5,
        text: "The team at APS Flooring transformed our home with beautiful hardwood floors. Their attention to detail and craftsmanship exceeded our expectations!",
        service: "hardwood"
      },
      {
        name: "Jennifer L.",
        location: "Chalmette, LA",
        rating: 5,
        text: "We couldn't be happier with our new luxury vinyl plank floors. The team was professional, efficient, and the quality of work is outstanding. Highly recommended!",
        service: "vinyl-plank"
      },
      {
        name: "Robert W.",
        location: "Metairie, LA",
        rating: 5,
        text: "APS refinished our old hardwood floors and they look brand new! Great communication throughout the process and they finished on time. Will use them again for our kitchen.",
        service: "refinishing"
      }
    ];
    
    sampleReviews.forEach(review => {
      const id = this.currentReviewId++;
      const newReview: Review = {
        ...review,
        id,
        date: new Date(),
        featured: true
      };
      this.reviewsList.set(id, newReview);
    });
    
    // Add more sample reviews
    for (let i = 0; i < 5; i++) {
      const services = ["hardwood", "vinyl-plank", "tile-stone", "refinishing"];
      const locations = ["New Orleans, LA", "Chalmette, LA", "Metairie, LA", "Slidell, LA"];
      const id = this.currentReviewId++;
      
      const review: Review = {
        id,
        name: `Customer ${i+4}`,
        location: locations[Math.floor(Math.random() * locations.length)],
        rating: 5,
        text: `Great service and excellent quality flooring. Would recommend to anyone looking for professional flooring installation.`,
        service: services[Math.floor(Math.random() * services.length)],
        date: new Date(Date.now() - i * 86400000),
        featured: i < 2
      };
      
      this.reviewsList.set(id, review);
    }
    
    // Seed with blog posts
    const blogPosts: InsertBlogPost[] = [
      {
        slug: "choosing-the-right-hardwood-flooring",
        title: "How to Choose the Right Hardwood Flooring for Your Home",
        excerpt: "Discover the key factors to consider when selecting hardwood flooring that will beautify your home for years to come.",
        content: "# How to Choose the Right Hardwood Flooring for Your Home\n\nWhen it comes to home improvement investments, few provide the lasting beauty, value, and character of hardwood flooring. But with so many options available, how do you choose the right hardwood for your specific needs?\n\n## Consider Your Lifestyle\n\nBefore diving into wood species and finishes, assess your household's activity level. Do you have children, pets, or high foot traffic? Harder woods like oak and maple withstand wear better than softer options like pine.\n\n## Think About Maintenance\n\nAll hardwood floors require some maintenance, but some are more forgiving than others. Darker woods show dust more readily, while hand-scraped or distressed finishes help hide minor scratches and dents.\n\n## Explore Wood Species\n\n- **Oak**: The most popular choice for its durability and versatility\n- **Maple**: Exceptionally hard with a clean, contemporary look\n- **Cherry**: Rich, warm tones that deepen over time\n- **Walnut**: Luxurious dark brown with purple undertones\n\n## Finish Options\n\nToday's hardwood floors come with various finish options:\n\n- **Site-finished**: Applied after installation for a completely custom look\n- **Pre-finished**: Factory-applied finishes that are typically more durable\n- **Oil-based**: Traditional look with amber tones\n- **Water-based**: Clearer finish that highlights the wood's natural color\n\n## Environmental Considerations\n\nIf sustainability matters to you, look for FSC-certified woods or consider reclaimed hardwood for eco-friendly character and charm.\n\nAt APS Flooring, we guide you through every step of the selection process. Contact us for a consultation to find the perfect hardwood flooring for your home.",
        coverImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: "Mark Johnson",
        publishedAt: new Date(),
        featured: true,
        tags: ["hardwood", "flooring", "interior design", "home improvement"],
        seo: {
          title: "How to Choose the Right Hardwood Flooring - APS Flooring Guide",
          description: "Learn about different hardwood flooring options and find the perfect match for your home's style, durability needs, and budget.",
          keywords: ["hardwood flooring", "wood floors", "oak flooring", "maple floors"]
        }
      },
      {
        slug: "advantages-of-luxury-vinyl-plank",
        title: "5 Advantages of Luxury Vinyl Plank Flooring",
        excerpt: "Luxury Vinyl Plank (LVP) has become increasingly popular. Here's why it might be the perfect flooring solution for your space.",
        content: "# 5 Advantages of Luxury Vinyl Plank Flooring\n\nLuxury Vinyl Plank (LVP) flooring has surged in popularity over recent years, and for good reason. This innovative flooring solution offers numerous benefits that make it an excellent choice for many homeowners. Here are the top five advantages of LVP flooring:\n\n## 1. Water and Moisture Resistance\n\nUnlike hardwood, LVP is highly resistant to water and moisture, making it perfect for bathrooms, kitchens, basements, and other areas prone to dampness. This resistance also makes cleaning spills a breeze without worrying about damage.\n\n## 2. Durability and Longevity\n\nLVP is designed to withstand heavy foot traffic, resist scratches, and maintain its appearance for years. Many quality LVP products come with warranties of 15-25 years or more, demonstrating their long-term durability.\n\n## 3. Realistic Appearance\n\nToday's luxury vinyl technology can create remarkably authentic reproductions of natural materials. Advanced printing techniques capture the intricate details of wood grain, stone textures, and other natural surfaces with stunning accuracy.\n\n## 4. Easy Installation and Maintenance\n\nMany LVP products feature click-lock installation systems that allow for floating floor installation without adhesives. This makes installation faster and more DIY-friendly. Maintenance is simple too—regular sweeping and occasional mopping are all that's typically needed.\n\n## 5. Cost-Effective Solution\n\nLVP provides the look of premium materials like hardwood or stone at a fraction of the cost. When you factor in the lower installation costs and minimal maintenance requirements, LVP represents an excellent value over its lifetime.\n\nAt APS Flooring, we offer a wide selection of premium luxury vinyl plank options that combine beauty, durability, and practicality. Contact us to explore our collection and find the perfect LVP flooring for your home.",
        coverImage: "https://images.unsplash.com/photo-1571993142257-eae0b44cf0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: "Sarah Williams",
        publishedAt: new Date(Date.now() - 7 * 86400000),
        featured: true,
        tags: ["vinyl plank", "LVP", "waterproof flooring", "home improvement"],
        seo: {
          title: "5 Advantages of Luxury Vinyl Plank Flooring | APS Flooring",
          description: "Discover why luxury vinyl plank flooring has become so popular and the top benefits it offers for durability, maintenance, and style.",
          keywords: ["luxury vinyl plank", "LVP flooring", "waterproof flooring", "vinyl flooring"]
        }
      },
      {
        slug: "tile-flooring-trends",
        title: "Top Tile Flooring Trends for 2023",
        excerpt: "Explore the latest tile flooring trends that are dominating interior design this year.",
        content: "# Top Tile Flooring Trends for 2023\n\nTile flooring continues to evolve with exciting new trends emerging each year. In 2023, we're seeing bold patterns, innovative shapes, and unique installations that are transforming homes. Here are the tile trends making the biggest impact this year:\n\n## Large Format Tiles\n\nOversized tiles (24\"x24\" and larger) are increasingly popular as they create a seamless, contemporary look with fewer grout lines. These large format tiles make spaces appear bigger and more open, perfect for modern interiors.\n\n## Bold Patterns and Colors\n\nWhile neutral palettes remain timeless, we're seeing more homeowners embrace bold, patterned tiles as statement pieces. Moroccan-inspired designs, geometric patterns, and vibrant colors are being used to create focal points in bathrooms, kitchens, and entryways.\n\n## Wood-Look Porcelain\n\nTechnology continues to improve, making porcelain tiles that mimic hardwood nearly indistinguishable from the real thing. These tiles provide the warm aesthetic of wood with the durability and water resistance of porcelain—ideal for bathrooms and kitchens where real wood might not be practical.\n\n## Terrazzo Revival\n\nTerrazzo has made a strong comeback, appearing in both traditional and contemporary spaces. Modern terrazzo tiles offer versatility with custom color combinations and varying chip sizes, allowing for personalized designs.\n\n## Sustainable Options\n\nEco-friendly tiles made from recycled materials are gaining traction as environmental consciousness grows. These sustainable options don't compromise on style or quality while reducing environmental impact.\n\n## Textured Finishes\n\nTextured tiles add dimension and interest to any space. From subtle relief patterns to more pronounced 3D effects, textured tiles create visual and tactile appeal that flat surfaces cannot match.\n\nAt APS Flooring, we stay at the forefront of tile trends, offering the latest designs and innovations. Our experts can help you incorporate these trends into your home in ways that will remain stylish for years to come. Contact us to explore our extensive tile collection and transform your space with the perfect flooring solution.",
        coverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: "Emma Davis",
        publishedAt: new Date(Date.now() - 14 * 86400000),
        featured: true,
        tags: ["tile", "flooring trends", "interior design", "home improvement"],
        seo: {
          title: "Top Tile Flooring Trends for 2023 | APS Flooring Guide",
          description: "Discover the latest tile flooring trends for 2023, from large format tiles to bold patterns and sustainable options.",
          keywords: ["tile trends", "floor tile", "porcelain tile", "ceramic tile trends"]
        }
      }
    ];
    
    blogPosts.forEach(post => {
      const id = this.currentPostId++;
      this.posts.set(id, { ...post, id });
    });
    
    // Seed with gallery images
    const galleryImages: InsertGalleryImage[] = [
      // Hardwood Images
      {
        title: "Modern Oak Hardwood Installation",
        src: "https://images.unsplash.com/photo-1633116536735-0a99af6922ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        alt: "White oak hardwood flooring in modern living room",
        category: "hardwood",
        serviceSlug: "hardwood",
        featured: true,
        width: 1920,
        height: 1080
      },
      {
        title: "Walnut Hardwood in Dining Room",
        src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "Dark walnut hardwood flooring in elegant dining room",
        category: "hardwood",
        serviceSlug: "hardwood",
        featured: true,
        width: 800,
        height: 600
      },
      
      // Vinyl Plank Images
      {
        title: "Waterproof Vinyl Plank Kitchen Floor",
        src: "https://images.unsplash.com/photo-1571993142257-eae0b44cf0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "Luxury vinyl plank flooring in modern kitchen",
        category: "vinyl-plank",
        serviceSlug: "vinyl-plank",
        featured: true,
        width: 800,
        height: 600
      },
      {
        title: "Wood-Look Vinyl in Living Area",
        src: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "Wood-look luxury vinyl plank in contemporary living room",
        category: "vinyl-plank",
        serviceSlug: "vinyl-plank",
        featured: true,
        width: 800,
        height: 600
      },
      
      // Tile & Stone Images
      {
        title: "Large Format Porcelain Tile",
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "Large format porcelain tile in modern bathroom",
        category: "tile-stone",
        serviceSlug: "tile-stone",
        featured: true,
        width: 800,
        height: 600
      },
      {
        title: "Marble Stone Foyer",
        src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "Luxurious marble stone flooring in entryway",
        category: "tile-stone",
        serviceSlug: "tile-stone",
        featured: true,
        width: 800,
        height: 600
      },
      
      // Refinishing Images with Before/After
      {
        title: "Hardwood Floor Refinishing",
        src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        alt: "After: Refinished hardwood floor",
        category: "refinishing",
        serviceSlug: "refinishing",
        featured: true,
        beforeImage: "https://images.unsplash.com/photo-1577099686204-19d51d7a166c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800
      },
      {
        title: "Oak Floor Restoration",
        src: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "After: Restored oak hardwood flooring",
        category: "refinishing",
        serviceSlug: "refinishing",
        featured: true,
        beforeImage: "https://images.unsplash.com/photo-1594846887676-83e12a8cfcae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600
      }
    ];
    
    galleryImages.forEach(image => {
      const id = this.currentGalleryId++;
      this.gallery.set(id, { ...image, id });
    });
  }
}

export const storage = new MemStorage();
