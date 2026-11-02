import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MORE_MENU_DATA = [
  {
    items: [
      { label: "New Offers", path: "/offers" },
      { label: "Partner with Us", path: "/partner" },
      { label: "Contact Us", path: "/contact" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Refer & Earn", path: "/refer-and-earn" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Articles", path: "/articles" },
      { label: "Whitepapers", path: "/whitepapers" },
      { label: "Become Supersale Partner", path: "/supersale-partner" },
      { label: "Press Releases", path: "/press-releases" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
  },
];

export default function MoreMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      {/* More Button */}
      <button
        type="button"
        className="more-menu-trigger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.5rem 0.85rem",
          borderRadius: "var(--radius-sm)",
          border: `1.5px solid ${isOpen ? "var(--primary)" : "transparent"}`,
          backgroundColor: isOpen ? "var(--bg)" : "transparent",
          color: isOpen ? "var(--primary)" : "var(--ink)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.color = "var(--primary)";
            e.currentTarget.style.backgroundColor = "rgba(14, 90, 90, 0.05)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.color = "var(--ink)";
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        <span>More</span>
        {isOpen ? (
          <ChevronUp size={15} strokeWidth={2} />
        ) : (
          <ChevronDown size={15} strokeWidth={2} />
        )}
      </button>

      {/* Dropdown Menu matching Cashify Reference Screenshot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="more-menu-dropdown-panel"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              width: "250px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid var(--line)",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 12px 32px rgba(16, 41, 43, 0.14)",
              padding: "0.6rem 0",
              zIndex: 100,
            }}
          >
            {MORE_MENU_DATA.map((section, idx) => (
              <div key={idx} style={{ padding: "0.2rem 0" }}>
                {section.title && (
                  <div
                    style={{
                      padding: "0.6rem 1.15rem 0.35rem 1.15rem",
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                      borderTop: idx > 0 ? "1px solid var(--line)" : "none",
                      marginTop: idx > 0 ? "0.35rem" : 0,
                    }}
                  >
                    {section.title}
                  </div>
                )}
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: "block",
                          padding: "0.48rem 1.15rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.88rem",
                          color: "var(--ink)",
                          textDecoration: "none",
                          transition: "all 0.12s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#FAF5E8";
                          e.currentTarget.style.color = "var(--primary)";
                          e.currentTarget.style.paddingLeft = "1.35rem";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "var(--ink)";
                          e.currentTarget.style.paddingLeft = "1.15rem";
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .more-menu-trigger-btn {
            padding: 0.42rem 0.6rem !important;
            font-size: 0.84rem !important;
            gap: 0.2rem !important;
          }
          .more-menu-dropdown-panel {
            right: -20px !important;
            width: 240px !important;
            max-width: 88vw !important;
            max-height: calc(85vh - 74px) !important;
            overflow-y: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
