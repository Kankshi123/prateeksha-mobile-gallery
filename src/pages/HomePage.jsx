import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import HeroSection from "../sections/HeroSection";
import BrandMarquee from "../sections/BrandMarquee";
import ServicesSection from "../sections/ServicesSection";
import SellOldDeviceSection from "../sections/SellOldDeviceSection";
import RefurbishedShowcaseSection from "../sections/RefurbishedShowcaseSection";
import SellDeviceDrawer from "../components/SellDeviceDrawer";
import WhyUsSection from "../sections/WhyUsSection";
import DeliverySection from "../sections/DeliverySection";
import FaqSection from "../sections/FaqSection";
import ContactSection from "../sections/ContactSection";
import { useCurrentOffer } from "../hooks/useCurrentOffer";
import { buildWhatsAppUrl } from "../data/shop";

export default function HomePage({ simulatedTime }) {
  const { primaryOffer, countdownFormatted } = useCurrentOffer(simulatedTime);
  const [sellDrawerOpen, setSellDrawerOpen] = useState(false);

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection simulatedTime={simulatedTime} />

      {/* 2. Brand Marquee Strip */}
      <BrandMarquee />

      {/* 3. Deal of the Hour - Compact Small Box (Positioned right before Our Services) */}
      {primaryOffer && (
        <section
          style={{
            backgroundColor: "var(--bg)",
            padding: "1rem 0",
            borderBottom: "1px solid var(--line)",
          }}
          aria-label="Deal of the Hour"
        >
          <div className="container">
            <div
              className="card-tactile"
              style={{
                backgroundColor: "#FAF4E2",
                border: "1.5px dashed var(--primary)",
                borderRadius: "var(--radius-md)",
                padding: "0.85rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {/* Left Side: Live Dot + Title + Headline */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <span className="live-dot" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      backgroundColor: "var(--pop)",
                      color: "#FFFFFF",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "3px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    DEAL OF THE HOUR
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    border: "1px solid var(--line)",
                    backgroundColor: "var(--surface)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  {primaryOffer.discountText}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {primaryOffer.headline || primaryOffer.title}
                </span>
              </div>

              {/* Right Side: Countdown + WhatsApp CTA + View Timetable */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {countdownFormatted && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--muted)",
                      backgroundColor: "var(--surface)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <Clock size={13} strokeWidth={1.5} color="var(--primary)" />
                    <span>Ends in:</span>
                    <strong style={{ color: "var(--ink)" }}>{countdownFormatted}</strong>
                  </div>
                )}

                <a
                  href={buildWhatsAppUrl(
                    `Hello Prateeksha Mobile Gallery, I want to claim the Deal of the Hour: "${primaryOffer.headline || primaryOffer.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    padding: "0.45rem 0.9rem",
                    fontSize: "0.82rem",
                    gap: "0.35rem",
                  }}
                >
                  <MessageCircle size={14} />
                  <span>Claim on WhatsApp</span>
                </a>

                <Link
                  to="/offers"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--primary)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Timetable →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Cashify-Style "Our Services" Grid */}
      <ServicesSection />

      {/* 5. "Sell Your Old Device Now" Section with 'Sell More' action */}
      <SellOldDeviceSection onOpenDrawer={() => setSellDrawerOpen(true)} />

      {/* 6. "Buy Refurbished Devices" Showcase with 'View All' */}
      <RefurbishedShowcaseSection />

      {/* 7. Why Choose Us */}
      <WhyUsSection />

      {/* 8. Delivery Section */}
      <DeliverySection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Contact Section */}
      <ContactSection />

      {/* 10. Slide-In 'Sell Your Old Device Now' Drawer */}
      <SellDeviceDrawer
        isOpen={sellDrawerOpen}
        onClose={() => setSellDrawerOpen(false)}
      />
    </>
  );
}
