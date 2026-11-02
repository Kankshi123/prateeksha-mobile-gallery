import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { SHOP_CONFIG, buildWhatsAppUrl } from "../data/shop";
import Button from "../components/Button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding section-surface"
      aria-label="Visit and Contact Us"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Visit Our Store"
          title="Come See Us on G.M.S. Road"
          accentWord="G.M.S. Road"
          subtitle="Conveniently situated in Dehradun. Drop by for a hands-on feel of devices, quick repairs, or friendly phone advice."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Store Details & Actions */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            {/* Address & Landmark Card */}
            <div
              className="card-tactile"
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--bg)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--primary)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid var(--ink)",
                  }}
                >
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    STORE LOCATION
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginTop: "0.2rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {SHOP_CONFIG.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--ink)",
                      lineHeight: 1.5,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {SHOP_CONFIG.address}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                    }}
                  >
                    Landmark: {SHOP_CONFIG.landmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div
              className="card-tactile"
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--bg)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--primary)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid var(--ink)",
                  }}
                >
                  <Clock size={22} strokeWidth={1.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    OPERATING HOURS
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginTop: "0.2rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Open All 7 Days
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--muted)" }}>Monday – Saturday:</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>{SHOP_CONFIG.shopTimings.weekdays}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--muted)" }}>Sunday:</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>{SHOP_CONFIG.shopTimings.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTAs: Call & WhatsApp */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <Button
                variant="secondary"
                size="md"
                href={`tel:+${SHOP_CONFIG.whatsappCountryCode}${SHOP_CONFIG.phone}`}
                icon={<Phone size={16} strokeWidth={1.5} />}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Call: {SHOP_CONFIG.phone}
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I want to inquire about store hours and available products.")}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle size={16} strokeWidth={1.5} />}
                style={{ width: "100%", justifyContent: "center" }}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Tactile Border */}
          <div
            className="card-tactile"
            style={{
              padding: "0.75rem",
              backgroundColor: "var(--surface)",
              minHeight: "380px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem 0.75rem 0.75rem 0.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Navigation size={15} color="var(--primary)" strokeWidth={1.5} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    letterSpacing: "0.05em",
                  }}
                >
                  INTERACTIVE STORE MAP
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                }}
              >
                G.M.S. Road, Dehradun
              </span>
            </div>

            <div
              style={{
                flex: 1,
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                border: "1.5px solid var(--line)",
                minHeight: "320px",
              }}
            >
              <iframe
                title="Prateeksha Mobile Gallery Location"
                src={SHOP_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
