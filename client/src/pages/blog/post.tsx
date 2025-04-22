import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/shared/seo-head";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/sections/cta-section";
import { ArrowLeft } from "lucide-react";
import { CITY } from "@/lib/constants";
import type { BlogPost } from "@shared/schema";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${params.slug}`],
  });
  
  // Redirect to blog index page if post not found or error
  useEffect(() => {
    if (!isLoading && (!post || error)) {
      setLocation("/blog");
    }
  }, [post, isLoading, error, setLocation]);
  
  if (isLoading) {
    return (
      <div className="container-custom py-12">
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-12 w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) return null;

  return (
    <>
      <SEOHead 
        seo={{
          title: post.seo?.title || `${post.title} | APS Flooring Blog | ${CITY}, Louisiana`,
          description: post.seo?.description || post.excerpt,
          keywords: post.seo?.keywords?.split(",").map(k => k.trim()) || [],
          article: true,
          ogImage: post.coverImage
        }}
      />
      
      {/* Post Header */}
      <section className="pt-12 pb-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <a className="inline-flex items-center text-primary hover:text-secondary transition duration-200 mb-8">
                <ArrowLeft className="mr-2" size={18} />
                Back to Blog
              </a>
            </Link>
            
            <div className="mb-8">
              {post.tags && post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-2 mb-2 capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-secondary mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-12">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">{post.author.charAt(0)}</span>
                </div>
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-secondary/60">{formatDate(post.publishedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      {post.coverImage && (
        <div className="container-custom pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Post Content */}
      <article className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
      
      {/* Share and Tags */}
      <section className="pb-16 border-t border-gray-100 pt-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://apsflooring.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/60 hover:text-primary transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://apsflooring.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/60 hover:text-primary transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://apsflooring.com/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/60 hover:text-primary transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div>
                  {post.tags && post.tags.map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/blog?tag=${tag}`}
                    >
                      <a className="inline-block bg-gray-100 hover:bg-primary/10 text-secondary hover:text-primary text-sm px-3 py-1 rounded mr-2 mb-2 transition-colors capitalize">
                        {tag}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Floors?"
        subtitle={`Contact APS Flooring for a free consultation on your flooring project in ${CITY} and New Orleans.`}
      />
    </>
  );
};

export default BlogPostPage;
