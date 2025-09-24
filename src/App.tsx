import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MwanaWev from "./pages/MwanaWev";
import PayWega from "./pages/PayWega";
import SkyGiants from "./pages/SkyGiants";
import SaasMsme from "./pages/SaasMsme";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MwanaWev />} />
          <Route path="/mwanawev" element={<MwanaWev />} />
          <Route path="/paywega" element={<PayWega />} />
          <Route path="/skygiants" element={<SkyGiants />} />
          <Route path="/saas-msme" element={<SaasMsme />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
