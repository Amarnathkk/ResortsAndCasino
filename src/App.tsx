import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gaming from "./pages/Gaming";
import Promotions from "./pages/Promotions";
import DiningEntertainment from "./pages/DiningEntertainment";
import Resort from "./pages/Resort";
import About from "./pages/About";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/dining-entertainment" element={<DiningEntertainment />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/about" element={<About />} />
          <Route path="/rewards" element={<Rewards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
