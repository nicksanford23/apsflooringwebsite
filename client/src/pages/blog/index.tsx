import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/shared/seo-head";
import { formatDate, truncateText } from "@/lib/utils";
import CTASection from "@/components/sections/cta-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CITY } from "@/lib/constants";
import type { BlogPost } from "@shared/schema";

const BlogIndexPage = () => {
  const [activeTag, setActiveTag] = useState("all");
  
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });
  
  // Get unique tags from all posts
  const allTags = Array.from(new Set(posts?.flatMap(post => post.tags || [])));
  
  // Filter posts by tag if active tag is not 'all'
  const filteredPosts = activeTag === "all" 
    ? posts 
    : posts?.filter(post => post.tags?.includes(activeTag));

  return (
    <>
      <SEOHead 
        seo={{
          title: `Flooring Blog | APS Flooring | ${CITY}, Louisiana`,
          description: `Expert advice, tips, and trends on hardwood, vinyl plank, and tile flooring from ${CITY}'s premier flooring contractor. Stay informed with APS Flooring's blog.`,
          keywords: ["flooring blog", "hardwood floor tips", "vinyl plank advice", "tile flooring trends", "floor maintenance", CITY, "New Orleans"]
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Flooring Blog</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-white/80">
              Expert advice, tips, and the latest trends in flooring to help you make informed decisions for your home.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Tags/Categories Filter */}
          {allTags.length > 0 && (
            <div className="mb-12">
              <Tabs defaultValue="all" onValueChange={setActiveTag}>
                <TabsList className="w-full flex flex-wrap justify-center">
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  {allTags.map((tag) => (
                    <TabsTrigger key={tag} value={tag} className="capitalize">
                      {tag}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="h-24 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-sm shadow-md overflow-hidden h-full flex flex-col">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="block relative h-48 overflow-hidden">
                      {post.coverImage ? (
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-secondary/30 text-lg">No image</span>
                        </div>
                      )}
                    </a>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-2">
                      {post.tags && post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-2 mb-2 capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-block mb-3">
                        <h2 className="text-xl font-bold hover:text-primary transition-colors">{post.title}</h2>
                      </a>
                    </Link>
                    
                    <p className="text-secondary/70 mb-4 flex-grow">
                      {truncateText(post.excerpt, 120)}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-secondary/50">
                        {formatDate(post.publishedAt)}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <a className="text-primary hover:underline text-sm font-medium">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <p className="text-secondary/70">No blog posts available for this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Posts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              Our most popular and informative posts to help you with your flooring decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts
              ?.filter(post => post.featured)
              .slice(0, 2)
              .map((post) => (
                <article key={post.id} className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="block relative h-64 overflow-hidden">
                      {post.coverImage ? (
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-secondary/30 text-lg">No image</span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-sm">
                        Featured
                      </div>
                    </a>
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-3">
                      {post.tags && post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-2 mb-2 capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-block mb-4">
                        <h2 className="text-2xl font-bold hover:text-primary transition-colors">{post.title}</h2>
                      </a>
                    </Link>
                    
                    <p className="text-secondary/70 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="mr-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">{post.author.charAt(0)}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-secondary/50">{formatDate(post.publishedAt)}</p>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <a className="text-primary hover:underline font-medium">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
      
      {/* Subscribe CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">
              Stay Updated on Flooring Trends
            </h2>
            <p className="text-lg text-secondary/70 mb-8">
              Subscribe to our newsletter to receive the latest flooring tips, trends, and special offers directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-sm transition duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-secondary/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default BlogIndexPage;
