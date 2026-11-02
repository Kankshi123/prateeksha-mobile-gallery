import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Award, MapPin, Truck, Wrench, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { SHOP_CONFIG } from "../data/shop";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", padding: "2.5rem 0 5rem 0" }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--muted)",
            marginBottom: "2rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Link to="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>About Us</span>
        </nav>

        <SectionTitle
          eyebrow="Our Heritage & Philosophy"
          title="Rooted on G.M.S. Road, Serving All of India"
          accentWord="Serving All of India"
          subtitle="Built on the conviction that smartphone buying and mobile servicing should be completely transparent, dependable, and free of false promises."
        />

        {/* Story Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.75rem, 3.5vw, 3rem)",
            alignItems: "center",
            marginBottom: "4.5rem",
          }}
        >
          <div>
            <span className="eyebrow">The Prateeksha Story</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.25,
                marginTop: "0.4rem",
                marginBottom: "1.25rem",
              }}
            >
              Honest technology guidance since day one.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              Prateeksha Mobile Gallery started with a clear objective: to give customers in Dehradun a trustworthy alternative to pushy electronics sales. Instead of pushing slow-moving inventory, our philosophy has always been to listen to what the customer actually needs—whether it is a budget phone with lasting battery life, a flagship iPhone with camera versatility, or simply fixing a broken screen cleanly.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Today, our G.M.S. Road gallery serves both local walk-ins and customers nationwide. With insured express logistics and a rigorous 32-point inspection lab for pre-owned devices, we bring neighborhood trust to smart gadget buyers across India.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>
                  15,000+
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase" }}>
                  Devices Serviced & Sold
                </div>
              </div>
              <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>
                  32 Points
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase" }}>
                  Hardware Inspection
                </div>
              </div>
              <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>
                  100%
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase" }}>
                  Authentic Sourcing
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div
            className="card-tactile"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "var(--surface)",
              border: "2px solid var(--line)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "260px",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                marginBottom: "1.5rem",
                backgroundColor: "var(--bg)",
                border: "1px solid var(--line)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=85"
                alt="Prateeksha Mobile Gallery Device Showcase"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.4rem" }}>
              Prateeksha Mobile Gallery
            </h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--muted)", marginBottom: "0.75rem" }}>
              G.M.S. Road, Near Ballupur Chowk / Kamla Palace, Dehradun
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>
              <MapPin size={14} />
              <span>All 7 Days Open: 10:00 AM – 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow">Our Core Principles</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.3rem" }}>
              Why Thousands Trust Our Gallery
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: ShieldCheck,
                title: "Zero Counterfeit Guarantee",
                desc: "We refuse to stock clone screens, generic unbranded power bricks, or gray-market phones. Every item is verified authentic.",
              },
              {
                icon: Wrench,
                title: "Ethical Repairs in Dehradun",
                desc: "If your device only needs a solder touch-up or connector reseat, that is all you pay for. No false motherboard claims.",
              },
              {
                icon: HeartHandshake,
                title: "Transparent Trade-Ins",
                desc: "We inspect your old phone in front of you with real-time market value criteria. Instant UPI payment with zero hidden deductions.",
              },
              {
                icon: Truck,
                title: "Pan-India Insured Dispatch",
                desc: "We ship all high-value devices in anti-shock tamper-evident boxes with live tracking updates via Blue Dart and Delhivery.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="card-tactile"
                  style={{
                    padding: "1.75rem",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.45rem" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
