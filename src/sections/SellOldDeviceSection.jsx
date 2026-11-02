import { motion } from "framer-motion";
import { MoreHorizontal, ArrowRight, ShieldCheck } from "lucide-react";
import { POPULAR_SELL_CATEGORIES } from "../data/sellCategories";
import { buildWhatsAppUrl } from "../data/shop";

export default function SellOldDeviceSection({ onOpenDrawer }) {
  return (
    <section
      id="sell-device"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1.5px solid var(--line)",
      }}
      aria-label="Sell Your Old Device Now"
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "1.75rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.4rem" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pop)",
                }}
              />
              <span className="eyebrow" style={{ margin: 0, color: "var(--pop)" }}>
                Instant Store Valuation
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Sell Your Old Device Now
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenDrawer}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--primary)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.35rem 0",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            <span>View All Categories</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Horizontal Cashify-style Strip: 8 Cards (7 Devices + 1 'Sell More') */}
        <div
          className="sell-devices-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "1rem",
          }}
        >
          {POPULAR_SELL_CATEGORIES.map((item, i) => (
            <motion.a
              key={item.id}
              href={buildWhatsAppUrl(item.whatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="sell-card-cashify"
              style={{
                backgroundColor: "#FAF5E8",
                border: "1.5px solid var(--line)",
                borderRadius: "14px",
                padding: "1rem 0.65rem 0.9rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "82px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  marginBottom: "0.65rem",
                  padding: "5px",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    transition: "transform 0.2s ease",
                  }}
                  className="sell-card-img"
                />
              </div>

              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </span>
            </motion.a>
          ))}

          {/* 8th Card: 'Sell More' with three dots like Cashify */}
          <motion.button
            type="button"
            onClick={onOpenDrawer}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.32 }}
            whileHover={{ y: -4 }}
            className="sell-card-cashify"
            style={{
              backgroundColor: "#FAF5E8",
              border: "1.5px solid var(--line)",
              borderRadius: "14px",
              padding: "1rem 0.65rem 0.9rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "82px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                marginBottom: "0.65rem",
                color: "var(--primary)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }} />
              </div>
            </div>

            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--primary)",
                lineHeight: 1.25,
              }}
            >
              Sell More
            </span>
          </motion.button>
        </div>
      </div>

      <style>{`
        .sell-card-cashify:hover {
          border-color: var(--primary) !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 6px 16px rgba(14, 90, 90, 0.12) !important;
        }
        .sell-card-cashify:hover .sell-card-img {
          transform: scale(1.08);
        }

        @media (max-width: 1200px) {
          .sell-devices-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .sell-devices-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 520px) {
          .sell-devices-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
