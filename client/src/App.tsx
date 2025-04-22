import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/layout";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesIndexPage from "@/pages/services/index";
import HardwoodServicePage from "@/pages/services/hardwood";
import VinylPlankServicePage from "@/pages/services/vinyl-plank";
import TileStoneServicePage from "@/pages/services/tile-stone";
import RefinishingServicePage from "@/pages/services/refinishing";
import GalleryPage from "@/pages/gallery";
import ReviewsPage from "@/pages/reviews";
import BlogIndexPage from "@/pages/blog/index";
import BlogPostPage from "@/pages/blog/post";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesIndexPage} />
        <Route path="/services/hardwood" component={HardwoodServicePage} />
        <Route path="/services/vinyl-plank" component={VinylPlankServicePage} />
        <Route path="/services/tile-stone" component={TileStoneServicePage} />
        <Route path="/services/refinishing" component={RefinishingServicePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/blog" component={BlogIndexPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
