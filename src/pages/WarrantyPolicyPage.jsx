import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, XCircle, FileText, AlertCircle, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export default function WarrantyPolicyPage() {
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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Warranty Policy</span>
        </nav>

        <SectionTitle
          eyebrow="Consumer Protection & Quality Promise"
          title="Prateeksha Quality & Warranty Policy"
          accentWord="Warranty Policy"
          subtitle="Transparent, written guarantees on every smartphone, curated accessory, pre-owned device, and repair job handled at our G.M.S. Road store."
        />

        {/* 3 Warranty Tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            {
              tier: "Brand New Devices",
              duration: "1 Year Manufacturer Warranty",
              color: "var(--primary)",
              desc: "All brand new iPhones, Samsung Galaxies, Pixels, and accessories carry 100% genuine brand warranty valid at all authorized service centers nationwide.",
              features: [
                "Original sealed box with serial authentication",
                "Official GST tax invoice issued immediately",
                "Zero third-party tampering or gray market stock",
              ],
            },
            {
              tier: "Certified Pre-Owned Phones",
              duration: "Shop Testing & Replacement Guarantee",
              color: "var(--pop)",
              desc: "Rigorous 32-point hardware and software check covering battery degradation, display touch matrix, cameras, face ID / fingerprint sensors.",
              features: [
                "Tested battery health (85%+ guaranteed)",
                "Full functional replacement if hardware fails",
                "Hassle-free walk-in support on G.M.S. Road",
              ],
            },
            {
              tier: "Mobile Repairs (Dehradun)",
              duration: "Up to 90 Days Service Warranty",
              color: "var(--accent-teal)",
              desc: "Screen replacements, original batteries, and charging ports installed by our technicians carry an explicit service and workmanship warranty.",
              features: [
                "90 days on premium display touch response",
                "6 months on battery replacement health",
                "Free follow-up inspection & fine-tuning",
              ],
            },
          ].map((item, idx) => (
            <motion.div
              key={item.tier}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="card-tactile"
              style={{
                padding: "2rem",
                backgroundColor: "var(--surface)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: item.color,
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.tier}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.85rem",
                  }}
                >
                  {item.duration}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div style={{ borderTop: "1px dashed var(--line)", paddingTop: "1rem" }}>
                {item.features.map((feat) => (
                  <div
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--ink)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <CheckCircle2 size={14} color="var(--primary)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Comparison: What's Covered vs What's Not */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Covered */}
          <div
            className="card-tactile"
            style={{
              padding: "2rem",
              backgroundColor: "var(--surface)",
              borderLeft: "4px solid var(--primary)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <ShieldCheck size={24} color="var(--primary)" strokeWidth={1.5} />
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                What Is Fully Covered
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Display touch failure, dead zones, or sudden vertical lines (without external crack/impact)",
                "Battery swelling, abnormal drainage (>20% sudden drops), or refusal to charge",
                "Earpiece, speaker, or microphone volume degradation due to part defect",
                "Motherboard IC failures repaired by our in-store technicians within warranty window",
                "Defective power adapters, MagSafe cables, and GaN chargers (immediate replacement)",
              ].map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Covered */}
          <div
            className="card-tactile"
            style={{
              padding: "2rem",
              backgroundColor: "var(--surface)",
              borderLeft: "4px solid var(--pop)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <AlertCircle size={24} color="var(--pop)" strokeWidth={1.5} />
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                What Is Not Covered
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Physical drops, shattered glass, internal LCD bleeding resulting from high impact",
                "Water submersion, moisture ingress, or liquid corrosion on internal circuits",
                "Unauthorized third-party tampering or software rooting / bootloader bricking",
                "Cosmetic paint chipping, denting, or normal wear-and-tear through daily usage",
                "Loss of original warranty seal sticker placed on internal repair screws",
              ].map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>
                  <XCircle size={16} color="var(--pop)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Claim Procedure Banner */}
        <div
          className="card-tactile"
          style={{
            padding: "2rem 2.5rem",
            backgroundColor: "#FAF4E2",
            border: "1.5px dashed var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
              Need to file a warranty check or service request?
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--muted)", margin: 0, maxWidth: "600px" }}>
              Bring your bill or invoice photo to our G.M.S. Road store, or message our dedicated claims desk on WhatsApp with your serial number for instant resolution.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I would like to inquire about a warranty claim for my device.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: "0.75rem 1.4rem", fontSize: "0.95rem", gap: "0.5rem" }}
          >
            <MessageCircle size={18} />
            <span>Contact Warranty Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
