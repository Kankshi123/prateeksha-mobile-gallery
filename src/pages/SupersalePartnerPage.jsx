import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, PackageCheck, ShieldCheck, CheckCircle2, MessageCircle, Store, Truck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export default function SupersalePartnerPage() {
  const [partnerForm, setPartnerForm] = useState({
    shopName: "",
    ownerName: "",
    city: "",
    phone: "",
    monthlyVolume: "10-25 Units",
  });

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Prateeksha Mobile Gallery, I want to become a Supersale Partner!\n\nStore Name: ${partnerForm.shopName}\nOwner: ${partnerForm.ownerName}\nCity: ${partnerForm.city}\nPhone: ${partnerForm.phone}\nMonthly Device Requirement: ${partnerForm.monthlyVolume}`;
    window.open(buildWhatsAppUrl(text), "_blank");
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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Supersale Partner</span>
        </nav>

        <SectionTitle
          eyebrow="B2B Wholesale & Retail Dealership"
          title="Become an Official Supersale Retail Partner"
          accentWord="Supersale Retail Partner"
          subtitle="Stock high-demand certified pre-owned smartphones and premium accessories in your local shop with unmatched wholesale margins and testing warranties."
        />

        {/* 4 Dealer Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              icon: TrendingUp,
              title: "High Retail Margins",
              desc: "Earn 18% to 32% gross margins on certified iPhones and Android flagships compared to thin single-digit margins on sealed new units.",
            },
            {
              icon: PackageCheck,
              title: "Grade-A Tested Stock",
              desc: "Every single unit passes 32-point diagnostics with pristine glass, minimum 85% battery health, and official GST bills.",
            },
            {
              icon: ShieldCheck,
              title: "Dealer Replacement Warranty",
              desc: "30-day functional return and replacement support so your local retail store bears zero inventory defect risks.",
            },
            {
              icon: Truck,
              title: "Express Insured Delivery",
              desc: "Dispatched direct to your store counter anywhere in India with transit insurance and live tracking via Blue Dart and DTDC.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
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
                    backgroundColor: "#FAF4E2",
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
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.18rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.45rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dealer Onboarding Box */}
        <div
          className="card-tactile"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
            backgroundColor: "var(--surface)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="eyebrow">Immediate Dealer Onboarding</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.3rem" }}>
              Join the Supersale Dealer Network
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--muted)", marginTop: "0.4rem" }}>
              Submit your store details to receive our daily wholesale catalog with real-time stock and volume pricing.
            </p>
          </div>

          <form onSubmit={handlePartnerSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.35rem", color: "var(--ink)" }}>
                  STORE / SHOP NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Telecom"
                  value={partnerForm.shopName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, shopName: e.target.value })}
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
                  OWNER NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohit Rawat"
                  value={partnerForm.ownerName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, ownerName: e.target.value })}
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
                  CITY / STATE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Roorkee, Uttarakhand"
                  value={partnerForm.city}
                  onChange={(e) => setPartnerForm({ ...partnerForm, city: e.target.value })}
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
                  WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={partnerForm.phone}
                  onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
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
                ESTIMATED MONTHLY INVENTORY VOLUME
              </label>
              <select
                value={partnerForm.monthlyVolume}
                onChange={(e) => setPartnerForm({ ...partnerForm, monthlyVolume: e.target.value })}
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
                <option value="5-10 Units (Starter)">5–10 Units (Starter Trial)</option>
                <option value="10-25 Units (Standard Retail)">10–25 Units (Standard Retail)</option>
                <option value="25-50 Units (Wholesale Distributor)">25–50 Units (Wholesale Distributor)</option>
                <option value="50+ Units (Enterprise Lots)">50+ Units (Enterprise Bulk Lots)</option>
              </select>
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
              <span>Get Wholesale Price List on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
