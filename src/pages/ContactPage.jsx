import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Send,
  Building,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { SHOP_CONFIG, buildWhatsAppUrl } from "../data/shop";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Smartphone Purchase",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Prateeksha Mobile Gallery,\n\nMy Name: ${formData.name}\nContact: ${formData.phone}\nInquiry Type: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <main style={{ minHeight: "80vh", paddingBottom: "5rem" }}>
      {/* Editorial Header */}
      <section
        style={{
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--line)",
          padding: "3rem 1.5rem 2.5rem",
        }}
      >
        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--muted)",
              marginBottom: "1.25rem",
            }}
          >
            <Link to="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--primary)", fontWeight: 700 }}>
              Visit & Contact
            </span>
          </nav>

          <SectionTitle
            eyebrow="Visit Our Store"
            title="Come See Us on G.M.S. Road, Dehradun"
            accentWord="G.M.S. Road"
            subtitle="Conveniently situated in Dehradun. Drop by for a hands-on feel of devices, quick repairs, or friendly phone advice."
          />
        </div>
      </section>

      <div className="container" style={{ paddingTop: "3rem" }}>
        {/* Main Grid: Details & Map */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2.5rem",
            alignItems: "stretch",
            marginBottom: "4rem",
          }}
        >
          {/* Left Column: Store Details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Address Card */}
            <div
              className="card-tactile"
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--surface)",
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
                      fontSize: "1.3rem",
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
                      fontSize: "0.8rem",
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
                backgroundColor: "var(--surface)",
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
                    STORE TIMINGS
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.3rem",
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
                      gap: "0.4rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.86rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--muted)" }}>Monday – Saturday:</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                        {SHOP_CONFIG.shopTimings.weekdays}
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--muted)" }}>Sunday:</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                        {SHOP_CONFIG.shopTimings.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <a
                href={`tel:+${SHOP_CONFIG.whatsappCountryCode}${SHOP_CONFIG.phone}`}
                className="btn-secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} strokeWidth={1.5} />
                <span>Call Store</span>
              </a>

              <a
                href={buildWhatsAppUrl(
                  "Hello Prateeksha Mobile Gallery, I would like to inquire about your store products and current deals."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div
            className="card-tactile"
            style={{
              padding: "0.75rem",
              backgroundColor: "var(--surface)",
              minHeight: "420px",
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
                  LIVE STORE NAVIGATION
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
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
                minHeight: "360px",
              }}
            >
              <iframe
                title="Prateeksha Mobile Gallery Location"
                src={SHOP_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div
          className="card-tactile"
          style={{
            padding: "2.5rem 2rem",
            backgroundColor: "var(--surface)",
          }}
        >
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <span className="eyebrow">Have a Question?</span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
              }}
            >
              Send an Instant Store Inquiry
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.5,
                marginBottom: "2rem",
              }}
            >
              Fill out this quick form and it will connect directly with our store team on WhatsApp with all your details ready.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Joshi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.7rem 0.85rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1.5px solid var(--line)",
                      backgroundColor: "var(--bg)",
                      color: "var(--ink)",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.7rem 0.85rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.92rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1.5px solid var(--line)",
                      backgroundColor: "var(--bg)",
                      color: "var(--ink)",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Topic of Inquiry
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                >
                  <option value="New Smartphone Availability">New Smartphone (iPhone, Samsung, etc.)</option>
                  <option value="Curated Accessories">Curated Accessories & Audio</option>
                  <option value="Pre-owned Phone or Laptop">Certified Pre-owned Phones / Laptops</option>
                  <option value="In-Store Mobile Repair">In-Store Mobile Repair (Dehradun)</option>
                  <option value="All-India Delivery Question">All-India Delivery Question</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Message or Model Name
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention model or issue (e.g. iPhone 15 Pro 256GB Black availability or Screen replacement)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "0.5rem",
                }}
              >
                <MessageCircle size={18} />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
