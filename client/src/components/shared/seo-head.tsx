import { Helmet } from "react-helmet";
import { defaultSEO, type SEOProps } from "@/lib/seo";

interface SEOHeadProps {
  seo?: SEOProps;
  schemaData?: any;
  children?: React.ReactNode;
}

const SEOHead = ({ seo, schemaData, children }: SEOHeadProps) => {
  const finalSEO = { ...defaultSEO, ...seo };
  
  return (
    <Helmet>
      <title>{finalSEO.title}</title>
      <meta name="description" content={finalSEO.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalSEO.article ? "article" : "website"} />
      <meta property="og:title" content={finalSEO.title} />
      <meta property="og:description" content={finalSEO.description} />
      {finalSEO.url && <meta property="og:url" content={finalSEO.url} />}
      {finalSEO.ogImage && <meta property="og:image" content={finalSEO.ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalSEO.title} />
      <meta name="twitter:description" content={finalSEO.description} />
      {finalSEO.ogImage && <meta name="twitter:image" content={finalSEO.ogImage} />}
      
      {/* Keywords */}
      {finalSEO.keywords && <meta name="keywords" content={finalSEO.keywords.join(', ')} />}
      
      {/* Structured Data Schema */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      
      {/* Additional Head Elements */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
