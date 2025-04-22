import { useState } from "react";
import SEOHead from "@/components/shared/seo-head";
import MasonryGallery from "@/components/gallery/masonry-gallery";
import CTASection from "@/components/sections/cta-section";
import { CITY } from "@/lib/constants";
import { galleryImages } from "@/data/gallery";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <SEOHead 
        seo={{
          title: `Project Gallery | APS Flooring | ${CITY}, Louisiana`,
          description: `Browse our gallery of completed flooring projects including hardwood, luxury vinyl plank, tile, and refinishing work in ${CITY} and New Orleans area homes.`,
          keywords: ["flooring gallery", "hardwood floors", "vinyl plank flooring", "tile flooring", "floor refinishing", "before and after", CITY, "New Orleans"]
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Our Work</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-white/80">
              Browse our portfolio of beautiful flooring projects and see the quality of our craftsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <MasonryGallery 
        title="Project Gallery"
        subtitle="Explore our completed flooring installations in homes and businesses throughout the New Orleans area."
      />
      
      {/* Before & After Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
              Before & After Transformations
            </h2>
            <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
              See the dramatic difference our flooring services can make in these before and after comparisons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleryImages
              .filter(img => img.beforeImage)
              .slice(0, 4)
              .map(image => (
                <div key={image.id} className="rounded-sm overflow-hidden shadow-md">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <img 
                          src={image.beforeImage} 
                          alt={`Before: ${image.alt}`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-secondary/80 text-white px-3 py-1 text-sm rounded-sm">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={image.src} 
                          alt={`After: ${image.alt}`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-3 py-1 text-sm rounded-sm">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-secondary/70 mb-4">{image.alt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary/80 capitalize">
                        {image.category.replace("-", " ")}
                      </span>
                      {image.serviceSlug && (
                        <a 
                          href={`/services/${image.serviceSlug}`}
                          className="text-primary hover:text-secondary font-medium text-sm"
                        >
                          View Service Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Highlight */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm">
              <div className="text-primary mb-4">★★★★★</div>
              <p className="text-white/90 italic mb-6">"The team at APS Flooring transformed our home with beautiful hardwood floors. Their attention to detail and craftsmanship exceeded our expectations!"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">M</span>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium">Michael T.</p>
                  <p className="text-white/70 text-sm">New Orleans, LA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm">
              <div className="text-primary mb-4">★★★★★</div>
              <p className="text-white/90 italic mb-6">"APS refinished our old hardwood floors and they look brand new! Great communication throughout the process and they finished on time. Will use them again for our kitchen."</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">R</span>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium">Robert W.</p>
                  <p className="text-white/70 text-sm">Metairie, LA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/reviews" className="inline-block btn-secondary">
              Read All Reviews
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Floors?"
        subtitle={`Contact us today to discuss your flooring project in ${CITY}, New Orleans, and surrounding areas.`}
      />
    </>
  );
};

export default GalleryPage;
