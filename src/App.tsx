import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n/language";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DynamicLandingPage from "./components/DynamicLandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Default redirect to Russian */}
            <Route path="/" element={<Navigate to="/ru" replace />} />

            {/* Language-prefixed routes */}
            <Route path="/ru" element={<Index />} />
            <Route path="/en" element={<Index />} />
            <Route path="/ru/offer" element={<DynamicLandingPage />} />
            <Route path="/en/offer" element={<DynamicLandingPage />} />
            <Route path="/ru/privacy" element={<PrivacyPolicy />} />
            <Route path="/en/privacy" element={<PrivacyPolicy />} />
            <Route path="/ru/terms" element={<TermsOfService />} />
            <Route path="/en/terms" element={<TermsOfService />} />

            {/* 404 — still works for both languages */}
            <Route path="/ru/*" element={<NotFound />} />
            <Route path="/en/*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
