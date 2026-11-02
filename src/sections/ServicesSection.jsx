import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  Smartphone,
  RefreshCw,
  Laptop,
  Wrench,
  Cpu,
  ShieldCheck,
  Watch,
  Headphones,
  Clock,
  Truck,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Camera,
  Gamepad2,
  Tablet,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { SERVICES } from "../data/services";
import { buildWhatsAppUrl } from "../data/shop";

const ICON_MAP = {
  ArrowLeftRight,
  Smartphone,
  RefreshCw,
  Laptop,
  Wrench,
  Cpu,
  Shield: ShieldCheck,
  Watch,
  Headphones,
  Clock,
  Truck,
  MapPin,
  Camera,
  Sparkles,
  Gamepad2,
  Tablet,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1.5px solid var(--line)",
      }}
      aria-label="Our Services"
    >
      <div className="container">
        {/* Section Title with Cashify-style clarity */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2.25rem",
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
                  backgroundColor: "var(--primary)",
                }}
              />
              <span className="eyebrow" style={{ margin: 0 }}>
                Explore What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Our Services
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              color: "var(--muted)",
              maxWidth: "480px",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Direct sales, certified pre-owned devices, walk-in mobile repair in Dehradun, and insured pan-India delivery.
          </p>
        </div>

        {/* Cashify-Style Grid: 8 columns on desktop (2 rows of 8), 4 on tablet, 2 on mobile */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "1rem",
          }}
        >
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Smartphone;

            const isExternal = service.isExternalWhatsApp;
            const href = isExternal
              ? buildWhatsAppUrl(service.whatsAppPrompt)
              : service.route;

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="service-card-cashify"
                style={{
                  backgroundColor: "#FAF5E8",
                  border: "1.5px solid var(--line)",
                  borderRadius: "14px",
                  padding: "1.1rem 0.85rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  textDecoration: "none",
                  position: "relative",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
                  height: "100%",
                }}
              >
                {/* Pill Tag */}
                {service.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "999px",
                      backgroundColor:
                        service.tagTone === "pop"
                          ? "var(--pop)"
                          : service.tagTone === "butter"
                          ? "var(--accent)"
                          : "var(--primary)",
                      color:
                        service.tagTone === "butter"
                          ? "var(--ink)"
                          : "#FFFFFF",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                      lineHeight: 1.2,
                      zIndex: 2,
                    }}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Device Visual Container (Cashify Soft Rounded Container) */}
                <div
                  style={{
                    width: "100%",
                    height: "90px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    border: "1px solid rgba(229, 220, 195, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    marginBottom: "0.75rem",
                    padding: "6px",
                    position: "relative",
                  }}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      transition: "transform 0.25s ease",
                    }}
                    className="service-img"
                  />
                </div>

                {/* Service Label */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: "0 0 0.2rem 0",
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    color: "var(--muted)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {service.subtitle}
                </p>
              </motion.div>
            );

            if (isExternal) {
              return (
                <a
                  key={service.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <Link
                key={service.id}
                to={href}
                style={{ textDecoration: "none", display: "block" }}
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-card-cashify:hover {
          border-color: var(--primary) !important;
          box-shadow: 0 8px 18px rgba(14, 90, 90, 0.12) !important;
          background-color: #FFFFFF !important;
        }
        .service-card-cashify:hover .service-img {
          transform: scale(1.08);
        }

        @media (max-width: 1380px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 820px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.85rem !important;
          }
        }
        @media (max-width: 520px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
