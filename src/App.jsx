import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";

// Components
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import DemoControls from "./components/DemoControls";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./sections/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import PreOwnedPage from "./pages/PreOwnedPage";
import RepairPage from "./pages/RepairPage";
import OffersPage from "./pages/OffersPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import PartnerPage from "./pages/PartnerPage";
import WarrantyPolicyPage from "./pages/WarrantyPolicyPage";
import ReferAndEarnPage from "./pages/ReferAndEarnPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ArticlesPage from "./pages/ArticlesPage";
import WhitepapersPage from "./pages/WhitepapersPage";
import SupersalePartnerPage from "./pages/SupersalePartnerPage";
import PressReleasesPage from "./pages/PressReleasesPage";
import TermsPage from "./pages/TermsPage";

// Context
import { ShopProvider } from "./context/ShopContext";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";

export default function App() {
  const [simulatedTime, setSimulatedTime] = useState(null);

  return (
    <ShopProvider>
      <BrowserRouter>
        {/* Auto-scroll to top on route change */}
        <ScrollToTop />

        {/* Navbar (Fraunces brand wordmark, sticky cream, WhatsApp CTA, More dropdown, Cart & Wishlist) */}
        <Navbar />

        {/* Slide-over Cart & Wishlist Drawers */}
        <CartDrawer />
        <WishlistDrawer />

        {/* Dedicated Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage simulatedTime={simulatedTime} />} />
          <Route path="/products" element={<ProductsPage simulatedTime={simulatedTime} />} />
          <Route path="/pre-owned" element={<PreOwnedPage />} />
          <Route path="/repair" element={<RepairPage />} />
          <Route path="/offers" element={<OffersPage simulatedTime={simulatedTime} />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/warranty" element={<WarrantyPolicyPage />} />
          <Route path="/refer-and-earn" element={<ReferAndEarnPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/whitepapers" element={<WhitepapersPage />} />
          <Route path="/supersale-partner" element={<SupersalePartnerPage />} />
          <Route path="/press-releases" element={<PressReleasesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage simulatedTime={simulatedTime} />} />
        </Routes>

        {/* Footer (Teal, minimal wordmark, navigation links, store hours & location) */}
        <Footer />

        {/* Floating Buttons (WhatsApp quick chat & back to top) */}
        <FloatingButtons />

        {/* Demo Controls (Simulated time changer for live offers) */}
        <DemoControls onSimulatedTimeChange={setSimulatedTime} />
      </BrowserRouter>
    </ShopProvider>
  );
}
