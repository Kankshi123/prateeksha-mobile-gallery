import { useState } from "react";
import { motion } from "framer-motion";
import { PackageCheck, Compass, Zap, CheckCircle2, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

const ICON_STRIP = [
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    description: "Anti-shock bubble layering and serialized tamper-evident seal on all phone boxes.",
  },
  {
    icon: Compass,
    title: "Live Trackable",
    description: "Direct tracking links sent over WhatsApp immediately upon courier pickup.",
  },
  {
    icon: Zap,
    title: "Fast Transit (3–5 Days)",
    description: "Dispatched via Bluedart Air, Delhivery Direct, and DTDC Express networks.",
  },
];

export default function DeliverySection() {
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState(null);

  const checkPincode = (e) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode.trim())) {
      setPincodeStatus({
        valid: true,
        message: `Pincode ${pincode} is serviceable! Estimated delivery within 3 to 4 business days with transit insurance.`,
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: "Please enter a valid 6-digit Indian postal pincode.",
      });
    }
  };

  return (
    <section
      id="delivery"
      className="section-padding section-surface"
      aria-label="All India Shipping"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Pan-India Shipping"
          title="Delivery All Over India"
          accentWord="All Over India"
          subtitle="Shop directly from G.M.S. Road, Dehradun and have your device delivered anywhere in India with complete tracking and transit insurance."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.75rem, 3.5vw, 3rem)",
            alignItems: "center",
            marginBottom: "3.5rem",
          }}
        >
          {/* Left Column: Outlined India Map Illustration (SVG Line Style) */}
          <div
            className="card-tactile"
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg)",
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
                DISPATCH HUB: DEHRADUN
              </span>
            </div>

            {/* SVG Line-Style Map */}
            <svg
              viewBox="0 0 340 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
              aria-label="Line illustration of India shipping routes"
            >
              {/* Minimal Line Art India Map Silhouette */}
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
                strokeDasharray="1 0"
                strokeLinejoin="round"
              />

              {/* Inner subtle terrain guidelines */}
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

              {/* Dehradun Origin Node (Butter Yellow Accent) */}
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

              {/* Route connecting lines */}
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
                fontSize: "0.72rem",
                color: "var(--muted)",
                marginTop: "1rem",
              }}
            >
              Insured courier delivery to all 28 states & 8 UTs
            </span>
          </div>

          {/* Right Column: Pincode Checker & Logistics Details */}
          <div>
            <span className="eyebrow">Zero Transit Worries</span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Order from Home, Delivered to Your Door
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              Whether you need a flagship smartphone or high-end MacBook, we pack every parcel with multi-layer bubble wrap and anti-tamper security tags. Live tracking details are shared on WhatsApp right after dispatch.
            </p>

            {/* Pincode Estimator Form */}
            <div
              style={{
                backgroundColor: "var(--bg)",
                border: "1.5px solid var(--line)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <label
                htmlFor="pincode-input"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Check Your Pincode Delivery Availability
              </label>

              <form onSubmit={checkPincode} style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  id="pincode-input"
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  style={{
                    flex: 1,
                    padding: "0.6rem 0.85rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--surface)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                >
                  Verify
                </button>
              </form>

              {pincodeStatus && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    color: pincodeStatus.valid ? "var(--primary)" : "var(--pop)",
                    fontWeight: 500,
                  }}
                >
                  {pincodeStatus.valid && <CheckCircle2 size={16} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: "2px" }} />}
                  <span>{pincodeStatus.message}</span>
                </div>
              )}
            </div>

            <a
              href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I want to order a product for delivery outside Dehradun. Please explain payment and shipping.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "0.75rem 1.35rem" }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Enquire About All-India Delivery
            </a>
          </div>
        </div>

        {/* 3-Icon Strip: Secure Packing, Trackable, Fast */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {ICON_STRIP.map((item) => (
            <div
              key={item.title}
              className="card-tactile"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                backgroundColor: "var(--surface)",
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
                  flexShrink: 0,
                  border: "1px solid var(--ink)",
                }}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    lineHeight: 1.45,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
