import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

/* 
  🧭 Layout Component
  Renders the Navigation and Footer around your routed pages.
  The footer is hidden on the home ("/") route.
*/
const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/"; // Hide footer on home page only

  return (
    <>
      {/* 🧩 Shared Navigation */}
      <Navigation />

      {/* 📄 Page Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 🌍 Shared Footer (hidden on home page) */}
      {!hideFooter && <Footer />}
    </>
  );
};

/* 
  ⚙️ Root App Component
  Wraps the entire app with providers and routing.
*/
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 🧰 Global UI utilities */}
      <Toaster />
      <Sonner />

      {/* 🚦 App Router */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
