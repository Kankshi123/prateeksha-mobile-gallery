import { Link } from "react-router-dom";
import { SHOP_CONFIG, buildWhatsAppUrl } from "../data/shop";
import { MapPin, Phone, MessageCircle } from "lucide-react";

// Clean inline SVGs for social platforms (Stroke 1.5 style)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--bg)",
        borderTop: "2px solid var(--ink)",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
      }}
      aria-label="Website Footer"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand & Wordmark */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "var(--bg)",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              {SHOP_CONFIG.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "#D3E4E4",
                lineHeight: 1.6,
                marginBottom: "1rem",
                maxWidth: "320px",
              }}
            >
              {SHOP_CONFIG.tagline}
              <br />
              New mobiles, curated accessories, certified pre-owned devices & repair in Dehradun.
            </p>

            {/* Social Icons Strip */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={SHOP_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)", e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)", e.currentTarget.style.color = "var(--bg)")}
              >
                <InstagramIcon />
              </a>

              <a
                href={SHOP_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)", e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)", e.currentTarget.style.color = "var(--bg)")}
              >
                <FacebookIcon />
              </a>

              <a
                href={SHOP_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch our YouTube channel"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)", e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)", e.currentTarget.style.color = "var(--bg)")}
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              QUICK SECTIONS
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {[
                { label: "Home", to: "/" },
                { label: "Smartphones & Accessories", to: "/products?category=smartphone" },
                { label: "Pre-Owned Devices", to: "/pre-owned" },
                { label: "Mobile Repair (Dehradun)", to: "/repair" },
                { label: "Live Timed Offers", to: "/offers" },
                { label: "All-India Delivery", to: "/delivery" },
                { label: "Frequently Asked Questions", to: "/#faq" },
                { label: "Store Location & Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      color: "#E2ECEC",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#E2ECEC")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours & Location */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              VISIT & CONNECT
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <MapPin size={16} color="var(--accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span style={{ color: "#E2ECEC", lineHeight: 1.45 }}>
                  {SHOP_CONFIG.address}
                </span>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <Phone size={16} color="var(--accent)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <a
                  href={`tel:+${SHOP_CONFIG.whatsappCountryCode}${SHOP_CONFIG.phone}`}
                  style={{ color: "#E2ECEC", textDecoration: "none" }}
                >
                  {SHOP_CONFIG.phoneFormatted}
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <MessageCircle size={16} color="var(--accent)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <a
                  href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  WhatsApp: +91 {SHOP_CONFIG.whatsapp}
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                padding: "0.65rem 0.85rem",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid rgba(255, 216, 77, 0.25)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  marginBottom: "2px",
                }}
              >
                STORE TIMINGS
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#FFF" }}>
                Mon–Sat: {SHOP_CONFIG.shopTimings.weekdays}
                <br />
                Sun: {SHOP_CONFIG.shopTimings.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "#B2C5C5",
            fontFamily: "var(--font-mono)",
          }}
        >
          <p>
            © {currentYear} {SHOP_CONFIG.name}. G.M.S. Road, Dehradun. All rights reserved.
          </p>
          <p>
            Mobile repair available in Dehradun only • Product delivery all over India
          </p>
        </div>
      </div>
    </footer>
  );
}
