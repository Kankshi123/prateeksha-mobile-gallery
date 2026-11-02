import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { buildWhatsAppUrl } from "../data/shop";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 350);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      style={{
        position: "fixed",
        right: "max(16px, calc(var(--safe-right) + 12px))",
        bottom: "max(18px, calc(var(--safe-bottom) + 12px))",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 45,
      }}
    >
      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--surface)",
              color: "var(--primary)",
              border: "1.5px solid var(--primary)",
              boxShadow: "3px 3px 0 var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp in Deep Teal with Butter Yellow Icon */}
      <motion.a
        href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I am reaching out from your website.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Prateeksha Mobile Gallery"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--primary)",
          color: "var(--accent)",
          border: "1.5px solid var(--ink)",
          boxShadow: "3px 3px 0 var(--ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
        id="fab-whatsapp-btn"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}
