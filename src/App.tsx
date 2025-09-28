import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import MwanaWev from "./pages/MwanaWev";
import PayWega from "./pages/PayWega";
import SkyGiants from "./pages/SkyGiants";
import SaasMsme from "./pages/SaasMsme";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MwanaWev />} />
          <Route path="/mwanawev" element={<MwanaWev />} />
          <Route path="/paywega" element={<PayWega />} />
          <Route path="/skygiants" element={<SkyGiants />} />
          <Route path="/saas-msme" element={<SaasMsme />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
