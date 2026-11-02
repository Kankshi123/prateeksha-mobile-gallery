import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { buildWhatsAppUrl } from "../data/config";

export default function OfferBanner({ offer, countdown }) {
  if (!offer) return null;

  return (
    <motion.div
      className="offer-card"
      style={{ background: `linear-gradient(135deg, ${offer.color}, ${offer.color}CC)` }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      key={offer.id}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-1.5rem",
          right: "-1.5rem",
          width: "8rem",
          height: "8rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "-2rem",
          width: "10rem",
          height: "10rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            padding: "0.25rem 0.75rem",
            borderRadius: "2rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: "0.75rem",
          }}
        >
          {offer.badge}
        </span>

        <h3
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
            fontWeight: 800,
            marginBottom: "0.5rem",
            color: "#fff",
          }}
        >
          {offer.title}
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            opacity: 0.9,
            marginBottom: "1.25rem",
            color: "#fff",
          }}
        >
          {offer.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {countdown && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                padding: "0.4rem 0.875rem",
                borderRadius: "0.625rem",
              }}
            >
              <Clock size={14} color="#fff" />
              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "0.95rem",
                  letterSpacing: "0.05em",
                }}
              >
                {countdown}
              </span>
            </div>
          )}

          <span
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {offer.discountText}
          </span>

          <a
            href={buildWhatsAppUrl(
              `Hi! I'd like to know more about the "${offer.title}" offer.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: offer.color,
              fontWeight: 700,
              marginLeft: "auto",
            }}
            id={`offer-cta-${offer.id}`}
          >
            Grab Deal
          </a>
        </div>
      </div>
    </motion.div>
  );
}
