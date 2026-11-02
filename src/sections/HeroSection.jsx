import { ArrowDown, Wrench, ShieldCheck, Truck, MapPin } from "lucide-react";
import Button from "../components/Button";
import Sticker from "../components/Sticker";

export default function HeroSection() {

  return (
    <section
      id="home"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage: `linear-gradient(to right, rgba(254, 247, 220, 0.94) 0%, rgba(254, 247, 220, 0.82) 48%, rgba(254, 247, 220, 0.45) 100%), url(/images/hero_option_1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        padding: "4.5rem 0 4rem 0",
        position: "relative",
        borderBottom: "1.5px solid var(--line)",
      }}
      aria-label="Hero Introduction"
    >
      <div className="container">
        {/* Asymmetric Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Big left-aligned editorial typography */}
          <div>
            {/* Brand Eyebrow Tag */}
            <div style={{ marginBottom: "0.75rem" }}>
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "inline-block",
                  }}
                />
                Official Smartphone & Service Gallery
              </span>
            </div>

            {/* Huge Fraunces Headline */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5.2vw, 4.2rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: "1.35rem",
              }}
            >
              Your Trusted Mobile Store on{" "}
              <span className="underline-hand">G.M.S. Road</span>.
            </h1>

            {/* One-Line Subtext */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "var(--muted)",
                lineHeight: 1.55,
                marginBottom: "2rem",
                maxWidth: "540px",
              }}
            >
              New iPhones & Androids, genuine accessories, certified pre-owned devices & expert mobile repair in Dehradun. Delivery all over India.
            </p>

            {/* Two CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="primary"
                size="lg"
                to="/products"
                icon={<ArrowDown size={18} strokeWidth={1.5} />}
              >
                Explore Products
              </Button>

              <Button
                variant="secondary"
                size="lg"
                to="/repair"
                icon={<Wrench size={18} strokeWidth={1.5} />}
              >
                Book Repair
              </Button>
            </div>
          </div>

          {/* Right Column: Tall Teal Arch holding device cutout with overlapping yellow sticker */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Editorial Teal Arch Frame */}
            <div
              className="arch-frame"
              style={{
                width: "100%",
                maxWidth: "275px",
                height: "360px",
                borderRadius: "80px 80px var(--radius-md) var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "1.5rem 1.25rem 0.9rem 1.25rem",
                position: "relative",
              }}
            >
              {/* Arch Top Corner Stamp */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "0.25rem 0.5rem 0 0.5rem",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.28rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <MapPin size={11} strokeWidth={2.5} />
                  DEHRADUN, UK
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.14)",
                    color: "var(--bg)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.56rem",
                    fontWeight: 600,
                    padding: "0.18rem 0.45rem",
                    borderRadius: "var(--radius-sm)",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                  }}
                >
                  ALL 7 DAYS OPEN
                </span>
              </div>

              {/* Product Cutout Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=85"
                  alt="Flagship smartphones and accessories at Prateeksha Mobile Gallery"
                  loading="eager"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 14px rgba(0, 0, 0, 0.4))",
                  }}
                />
              </div>

              {/* Arch Bottom Banner */}
              <div
                style={{
                  backgroundColor: "rgba(16, 41, 43, 0.85)",
                  border: "1px solid rgba(255, 216, 77, 0.3)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.4rem 0.65rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  zIndex: 2,
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--bg)",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    100% Original Products
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.56rem",
                      color: "var(--accent)",
                      marginTop: "1px",
                      marginBottom: 0,
                    }}
                  >
                    Apple • Samsung • OnePlus • Google
                  </p>
                </div>
                <ShieldCheck size={16} color="var(--accent)" strokeWidth={1.5} />
              </div>
            </div>

            {/* Rotated Yellow Circle Sticker Overlapping Arch */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                right: "-10px",
                zIndex: 10,
                transform: "scale(0.76)",
                transformOrigin: "center",
              }}
            >
              <Sticker variant="circle" rotation={-8}>
                <span>REPAIR</span>
                <span style={{ fontSize: "0.58rem", color: "var(--ink)", fontWeight: 500 }}>
                  DEHRADUN
                </span>
                <span style={{ color: "var(--pop)", fontSize: "0.7rem" }}>★ ONLY ★</span>
              </Sticker>
            </div>

            {/* Rotated Delivery Pill Sticker Overlapping Bottom Left */}
            <div
              style={{
                position: "absolute",
                bottom: "6px",
                left: "-12px",
                zIndex: 10,
                transform: "scale(0.78)",
                transformOrigin: "center",
              }}
            >
              <Sticker variant="pill" rotation={4}>
                <Truck size={14} strokeWidth={1.5} style={{ marginRight: "4px" }} />
                Delivery All India
              </Sticker>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
