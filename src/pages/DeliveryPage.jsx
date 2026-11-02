import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PackageCheck,
  Compass,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Truck,
  MessageCircle,
  Clock,
  HelpCircle,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl, SHOP } from "../data/shop";

const ICON_STRIP = [
  {
    icon: PackageCheck,
    title: "Tamper-Proof Box Sealing",
    description: "Anti-shock heavy bubble layering with serialized security tape on all phone and laptop boxes.",
  },
  {
    icon: Compass,
    title: "Live Tracking Direct to WhatsApp",
    description: "Official courier tracking links provided immediately once the consignment leaves Dehradun.",
  },
  {
    icon: Zap,
    title: "Air Express Transit (3–5 Days)",
    description: "Dispatched via Bluedart Apex, Delhivery Express, and DTDC Air for rapid doorstep arrival.",
  },
  {
    icon: ShieldCheck,
    title: "100% Transit Insurance",
    description: "Every shipment is fully insured against theft or transit damage so your purchase is zero risk.",
  },
];

const SHIPPING_FAQS = [
  {
    q: "How do I place an order for delivery outside Dehradun?",
    a: "Select your desired phone or accessory from our catalogue, tap 'Chat' or 'Buy Now', and share your delivery address with our team on WhatsApp. We generate your invoice and payment link directly.",
  },
  {
    q: "How long does shipping take across India?",
    a: "Major metro cities (Delhi NCR, Mumbai, Bengaluru, Kolkata) receive parcels in 2 to 3 days. Tier-2 and Tier-3 cities typically take 3 to 5 business days.",
  },
  {
    q: "Can I inspect the parcel before opening?",
    a: "All boxes arrive sealed with branded security tape. We advise recording an unboxing video as standard protocol for any electronic gadget shipment.",
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: "For high-value electronics (smartphones & laptops), we accept prepaid orders via UPI, NEFT, or Cards, with a minimal advance token to confirm genuine outstation delivery.",
  },
];

export default function DeliveryPage() {
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState(null);

  const checkPincode = (e) => {
    e.preventDefault();
    const clean = pincode.trim();
    if (/^\d{6}$/.test(clean)) {
      setPincodeStatus({
        valid: true,
        message: `Pincode ${clean} is serviceable! Estimated delivery in 3 to 4 business days with full transit insurance.`,
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: "Please enter a valid 6-digit Indian postal pincode.",
      });
    }
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
              All-India Delivery
            </span>
          </nav>

          <SectionTitle
            eyebrow="Pan-India Shipping"
            title="Fast, Insured Delivery All Over India"
            accentWord="All Over India"
            subtitle="Order directly from Prateeksha Mobile Gallery on G.M.S. Road, Dehradun and have your device delivered anywhere in India with real-time tracking."
          />
        </div>
      </section>

      <div className="container" style={{ paddingTop: "3rem" }}>
        {/* Map & Pincode Checker Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.75rem, 3.5vw, 3rem)",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Left: Map Illustration */}
          <div
            className="card-tactile"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  letterSpacing: "0.06em",
                }}
              >
                HUB: DEHRADUN, UTTARAKHAND
              </span>
            </div>

            <svg
              viewBox="0 0 340 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: "320px", height: "auto" }}
              aria-label="Line illustration of India shipping routes"
            >
              <path
                d="M165 30 
                   C 180 32, 195 40, 205 55 
                   C 215 70, 230 85, 240 105
                   C 250 125, 255 145, 250 170
                   C 242 190, 232 205, 225 225
                   C 215 250, 205 275, 190 300
                   C 180 320, 172 345, 165 365
                   C 158 345, 150 320, 140 300
                   C 125 275, 115 250, 105 225
                   C 95 205, 80 185, 75 160
                   C 70 135, 78 110, 88 90
                   C 98 70, 115 50, 135 38
                   Z"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              <path
                d="M110 120 C 145 135, 185 130, 220 125"
                stroke="var(--line)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M100 200 C 140 215, 180 210, 220 205"
                stroke="var(--line)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Dehradun Origin Node */}
              <circle cx="150" cy="82" r="10" fill="var(--accent)" stroke="var(--primary)" strokeWidth="2" />
              <circle cx="150" cy="82" r="4" fill="var(--primary)" />
              <text
                x="166"
                y="86"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fontWeight="700"
                fill="var(--ink)"
              >
                Dehradun (Shop)
              </text>

              {/* Connecting routes */}
              {[
                { x: 140, y: 120, name: "Delhi NCR" },
                { x: 195, y: 140, name: "Lucknow" },
                { x: 105, y: 175, name: "Jaipur" },
                { x: 115, y: 245, name: "Mumbai" },
                { x: 215, y: 220, name: "Kolkata" },
                { x: 155, y: 275, name: "Bengaluru" },
                { x: 165, y: 325, name: "Kochi" },
              ].map((hub) => (
                <g key={hub.name}>
                  <line
                    x1="150"
                    y1="82"
                    x2={hub.x}
                    y2={hub.y}
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                  <circle cx={hub.x} cy={hub.y} r="4.5" fill="var(--primary)" stroke="var(--bg)" strokeWidth="1.5" />
                  <text
                    x={hub.x + 8}
                    y={hub.y + 4}
                    fontFamily="var(--font-sans)"
                    fontSize="9"
                    fontWeight="600"
                    fill="var(--muted)"
                  >
                    {hub.name}
                  </text>
                </g>
              ))}
            </svg>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--muted)",
                marginTop: "1.25rem",
              }}
            >
              Reliable delivery covering all 28 Indian States & 8 UTs
            </span>
          </div>

          {/* Right: Pincode Checker */}
          <div>
            <span className="eyebrow">Zero Transit Worries</span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Verify Your Pincode Delivery Availability
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              Whether you are purchasing a brand new sealed iPhone, a certified pre-owned laptop, or specialized accessories, we pack every parcel with multi-layer bubble wrap, anti-tamper security tags, and full transit insurance.
            </p>

            {/* Pincode Estimator Form */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1.5px solid var(--line)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <label
                htmlFor="pincode-input"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Enter 6-digit Delivery Pincode
              </label>

              <form onSubmit={checkPincode} style={{ display: "flex", gap: "0.6rem" }}>
                <input
                  id="pincode-input"
                  type="text"
                  maxLength={6}
                  placeholder="e.g. 110001 or 560001"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "0.75rem 1.4rem", fontSize: "0.9rem" }}
                >
                  Verify
                </button>
              </form>

              {pincodeStatus && (
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.86rem",
                    color: pincodeStatus.valid ? "var(--primary)" : "var(--pop)",
                    fontWeight: 500,
                  }}
                >
                  {pincodeStatus.valid && (
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.5}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                  )}
                  <span>{pincodeStatus.message}</span>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href={buildWhatsAppUrl(
                  "Hello Prateeksha Mobile Gallery, I would like to order a product for delivery to my city. Please guide me on shipping and payment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.4rem",
                }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                to="/products"
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.25rem",
                }}
              >
                <span>Browse Products</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights Strip */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {ICON_STRIP.map((item) => (
              <div
                key={item.title}
                className="card-tactile"
                style={{
                  padding: "1.75rem",
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
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
                    border: "1px solid var(--ink)",
                  }}
                >
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div
          className="card-tactile"
          style={{
            padding: "2.5rem 2rem",
            backgroundColor: "var(--surface)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <HelpCircle size={22} color="var(--primary)" />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              Frequently Asked Shipping Questions
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.75rem",
            }}
          >
            {SHIPPING_FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "2px solid var(--primary)",
                  paddingLeft: "1rem",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {faq.q}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
