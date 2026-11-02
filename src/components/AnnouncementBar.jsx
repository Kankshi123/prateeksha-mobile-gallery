import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrentOffer } from "../hooks/useCurrentOffer";

export default function AnnouncementBar({ simulatedTime }) {
  const { activeOffers, primaryOffer, countdownFormatted } =
    useCurrentOffer(simulatedTime);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate if multiple offers are active
  useEffect(() => {
    if (!activeOffers || activeOffers.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeOffers.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeOffers]);

  const current = (activeOffers && activeOffers[currentIndex]) || primaryOffer;

  if (!current) return null;

  return (
    <div
      role="banner"
      aria-label="Current Offer Announcement"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--accent)",
        borderBottom: "1px solid var(--ink)",
        padding: "0.55rem 1rem",
        fontSize: "0.84rem",
        position: "relative",
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.85rem",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
          <span className="live-dot" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: "var(--pop)",
              padding: "0.1rem 0.4rem",
              borderRadius: "3px",
            }}
          >
            LIVE
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              {current.headline || current.title}
            </span>
            <span
              style={{
                color: "#E2ECEC",
                fontFamily: "var(--font-sans)",
                display: "inline-block",
              }}
            >
              — {current.discountText}
            </span>
          </motion.div>
        </AnimatePresence>

        {countdownFormatted && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.76rem",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              color: "var(--accent)",
              padding: "0.15rem 0.5rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(255, 216, 77, 0.3)",
              letterSpacing: "0.04em",
            }}
          >
            Ends in {countdownFormatted}
          </span>
        )}

        <Link
          to="/offers"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.76rem",
            color: "#FFFFFF",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            marginLeft: "0.25rem",
          }}
        >
          View all offers →
        </Link>
      </div>
    </div>
  );
}
