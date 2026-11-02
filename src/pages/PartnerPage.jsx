import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, Building2, Wrench, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    city: "",
    phone: "",
    partnershipType: "Corporate Buyback",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = `Hello Prateeksha Mobile Gallery, I would like to partner with you!\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nCity: ${formData.city}\nPhone: ${formData.phone}\nType: ${formData.partnershipType}\nDetails: ${formData.message}`;
    window.open(buildWhatsAppUrl(prompt), "_blank");
  };

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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Partner with Us</span>
        </nav>

        <SectionTitle
          eyebrow="B2B & Retail Collaboration"
          title="Grow Your Business with Prateeksha Mobile Gallery"
          accentWord="Grow Your Business"
          subtitle="Join our expanding network across Uttarakhand and Pan-India. We collaborate with corporate fleets, retail outlets, and certified technical specialists."
        />

        {/* 3 Collaboration Tracks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.75rem",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              icon: Building2,
              title: "Corporate Device Buyback",
              desc: "Seamless liquidation of company-issued iPhones, Androids, and laptops with secure NIST data-wiping certificates and bulk payouts.",
              points: ["Certified Data Erasure", "GST Compliant Invoicing", "Immediate UPI/NEFT Settlement"],
            },
            {
              icon: Handshake,
              title: "Retail & Accessory Affiliate",
              desc: "Supply certified pre-owned flagships or premium curated accessories in your store with attractive wholesale margins and warranty backup.",
              points: ["Wholesale Catalog Access", "Zero Minimum Order Penalty", "Return & Replacement Support"],
            },
            {
              icon: Wrench,
              title: "Repair Technician Network",
              desc: "Collaborate with our G.M.S. Road technical hub for OEM display replacements, motherboard micro-soldering, and specialized glass refurbishment.",
              points: ["Original Screen & Battery Inventory", "Express Turnaround", "Technical Diagnostic Support"],
            },
          ].map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
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
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg)",
                      border: "1.5px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {track.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {track.desc}
                  </p>
                </div>
                <div style={{ borderTop: "1px dashed var(--line)", paddingTop: "1rem" }}>
                  {track.points.map((pt) => (
                    <div
                      key={pt}
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
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Form Section */}
        <div
          className="card-tactile"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
            backgroundColor: "var(--surface)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="eyebrow">Connect With Our Team</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.85rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginTop: "0.25rem",
              }}
            >
              Submit Partnership Inquiry
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                marginTop: "0.4rem",
              }}
            >
              Fill out this brief form to discuss bulk trade-ins, wholesale stock, or retail collaboration.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aman Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                  BUSINESS / STORE NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Verma Telecom"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                  CITY / REGION *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dehradun / Haridwar / Delhi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                COLLABORATION TRACK
              </label>
              <select
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--line)",
                  backgroundColor: "var(--bg)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--ink)",
                  outline: "none",
                }}
              >
                <option value="Corporate Buyback">Corporate Device Buyback</option>
                <option value="Retail Wholesale & Distribution">Retail Wholesale & Distribution</option>
                <option value="Technical Repair Collaboration">Technical Repair Collaboration</option>
                <option value="Supersale Franchise Partner">Supersale Franchise Partner</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                BRIEF MESSAGE / REQUIREMENTS
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your business, volume requirements, or how you would like to work together..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--line)",
                  backgroundColor: "var(--bg)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--ink)",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
                justifyContent: "center",
                gap: "0.6rem",
              }}
            >
              <MessageCircle size={18} />
              <span>Connect with Business Head on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
