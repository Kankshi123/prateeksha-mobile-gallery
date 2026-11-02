import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { ALL_SELL_CATEGORIES } from "../data/sellCategories";
import { buildWhatsAppUrl } from "../data/shop";

export default function SellDeviceDrawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(16, 41, 43, 0.55)",
              backdropFilter: "blur(4px)",
              zIndex: 80,
            }}
          />

          {/* Slide-in Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(520px, 94vw)",
              backgroundColor: "var(--surface)",
              borderLeft: "2px solid var(--primary)",
              zIndex: 90,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-8px 0 24px rgba(14, 90, 90, 0.2)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Sell Your Old Device Now"
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1.5px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "var(--bg)",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  Sell Your Old Device Now
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    margin: "2px 0 0",
                  }}
                >
                  Instant valuation & spot payment at G.M.S. Road, Dehradun
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close sell drawer"
                className="btn btn-secondary"
                style={{
                  padding: "0.45rem 0.55rem",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable Categories Grid (3 Columns like Cashify) */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.9rem",
                }}
              >
                {ALL_SELL_CATEGORIES.map((item) => (
                  <a
                    key={item.id}
                    href={buildWhatsAppUrl(item.whatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      backgroundColor: "#FAF5E8",
                      border: "1.5px solid var(--line)",
                      borderRadius: "12px",
                      padding: "0.85rem 0.6rem 0.75rem",
                      transition: "all 0.15s ease",
                      cursor: "pointer",
                    }}
                    className="sell-drawer-card"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "70px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        marginBottom: "0.5rem",
                        padding: "4px",
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
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div
              style={{
                padding: "1rem 1.25rem max(1.25rem, calc(var(--safe-bottom) + 0.85rem)) 1.25rem",
                borderTop: "1px solid var(--line)",
                backgroundColor: "var(--bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                }}
              >
                Pick & drop not applicable • Spot testing at G.M.S. Road store
              </span>

              <a
                href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I want to sell my device. Please tell me the nearest slot.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  fontSize: "0.82rem",
                  padding: "0.5rem 0.9rem",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={15} />
                <span>Enquire Now</span>
              </a>
            </div>
          </motion.div>
        </>
      )}

      <style>{`
        .sell-drawer-card:hover {
          border-color: var(--primary) !important;
          background-color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(14, 90, 90, 0.1);
        }
      `}</style>
    </AnimatePresence>
  );
}
