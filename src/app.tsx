import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import {
  SocialFab,
  ScrollToTop,
  CookieAccessibility,
} from "./components/common";
import {
  HomePage,
  ServiceDetailPage,
  AboutPage,
  ContactPage,
  FAQPage,
  PrivacyPage,
  TermsPage,
} from "./pages";
import { getPrimaryServicePath } from "./config/constants";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={<Navigate to={getPrimaryServicePath()} replace />}
        />
        <Route path="/services/service1" element={<Navigate to="/services/ac-repair-replacement" replace />} />
        <Route path="/services/service2" element={<Navigate to="/services/ductwork" replace />} />
        <Route path="/services/service3" element={<Navigate to="/services/rotobrush-duct-cleaning" replace />} />
        <Route path="/services/service4" element={<Navigate to="/services/blown-in-insulation" replace />} />
        <Route path="/services/:serviceKey" element={<ServiceDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <SocialFab />
      <CookieAccessibility />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
