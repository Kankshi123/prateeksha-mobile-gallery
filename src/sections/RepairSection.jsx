import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Battery,
  Plug,
  Droplets,
  Cpu,
  Volume2,
  CheckCircle2,
  Send,
  MapPin,
  CalendarCheck,
  Truck,
  Wrench,
  PackageCheck,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";
import { REPAIR_STEPS, REPAIR_TYPES } from "../data/content";

const STEP_ICONS = [CalendarCheck, Truck, Wrench, PackageCheck];

const TYPE_ICONS = {
  screen: Smartphone,
  battery: Battery,
  charging: Plug,
  water: Droplets,
  software: Cpu,
  speaker: Volume2,
};

export default function RepairSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "Display & Touch Replacement",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Repair Booking (Prateeksha Mobile Gallery)*
Name: ${form.name}
Phone: ${form.phone}
Device Model: ${form.device}
Issue: ${form.issue}
Customer Area in Dehradun: ${form.address}

Please share time estimate and cost for in-store repair.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  return (
    <section
      id="repair"
      className="section-padding section-teal"
      aria-label="Mobile Repair Service"
    >
      <div className="container">
        {/* Section Header on Dark Teal */}
        <SectionTitle
          eyebrow="In-Store Mobile Repair"
          title="Expert Mobile Repair in Dehradun"
          accentWord="in Dehradun"
          subtitle="Certified technicians, original spare parts, and fast turnaround at our G.M.S. Road store. No diagnostic charges if not repaired."
          onDark={true}
        />

        {/* Highlight Note Banner */}
        <div
          style={{
            maxWidth: "760px",
            margin: "-1.5rem auto 3.5rem auto",
            backgroundColor: "rgba(16, 41, 43, 0.7)",
            border: "1.5px solid var(--accent)",
            borderRadius: "var(--radius-md)",
            padding: "0.75rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            textAlign: "center",
          }}
        >
          <MapPin size={17} color="var(--accent)" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Notice: Mobile repair available exclusively in Dehradun (In-Store at G.M.S. Road). Product delivery all over India.
          </span>
        </div>

        {/* 4 Steps Connected by a Dotted Line */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginBottom: "4.5rem",
          }}
        >
          {/* Thin Dotted Connector Line */}
          <div className="steps-connector" />

          {REPAIR_STEPS.map((s, idx) => {
            const Icon = STEP_ICONS[idx] || Wrench;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--surface)",
                    color: "var(--primary)",
                    border: "2px solid var(--ink)",
                    boxShadow: "3px 3px 0 var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.25rem",
                  }}
                >
                  STEP {s.step}
                </span>

                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--bg)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.title}
                </h4>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "#D3E4E4",
                    lineHeight: 1.5,
                  }}
                >
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Two-Column Split: Repair Types & WhatsApp Booking Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left: What We Repair */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "var(--radius-md)",
              padding: "2rem",
            }}
          >
            <span
              className="eyebrow"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Hardware & Software Diagnostics
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--bg)",
                marginBottom: "1.25rem",
              }}
            >
              Supported Repair Services
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {REPAIR_TYPES.map((t) => {
                const Icon = TYPE_ICONS[t.id] || Smartphone;
                return (
                  <div
                    key={t.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(16, 41, 43, 0.6)",
                      border: "1px solid rgba(255, 216, 77, 0.2)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <Icon size={18} color="var(--accent)" strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.92rem",
                        color: "var(--bg)",
                        fontWeight: 500,
                      }}
                    >
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1.25rem",
                borderTop: "1px dashed rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle2 size={16} color="var(--accent)" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  color: "#D3E4E4",
                }}
              >
                90-day post-repair warranty on screens & batteries.
              </span>
            </div>
          </div>

          {/* Right: Booking Form (No Backend, sends WhatsApp) */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--ink)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-md)",
              boxShadow: "5px 5px 0 var(--accent)",
              padding: "2rem",
            }}
          >
            <div style={{ marginBottom: "1.25rem" }}>
              <span className="eyebrow" style={{ color: "var(--primary)" }}>
                In-Store Consultation Slot
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginTop: "0.2rem",
                }}
              >
                Book Repair Consultation
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  marginTop: "0.25rem",
                }}
              >
                Submit details below. It instantly prepares your WhatsApp inquiry for in-store service.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label
                  htmlFor="repair-name"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="repair-name"
                  type="text"
                  required
                  placeholder="e.g. Aman Verma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                <div>
                  <label
                    htmlFor="repair-phone"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "0.3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="repair-phone"
                    type="tel"
                    required
                    placeholder="98XXXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
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
                    htmlFor="repair-device"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "0.3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Device Model *
                  </label>
                  <input
                    id="repair-device"
                    type="text"
                    required
                    placeholder="e.g. iPhone 13 / Oneplus 11"
                    value={form.device}
                    onChange={(e) => setForm({ ...form, device: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
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
                  htmlFor="repair-issue"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  Primary Issue
                </label>
                <select
                  id="repair-issue"
                  value={form.issue}
                  onChange={(e) => setForm({ ...form, issue: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                >
                  {REPAIR_TYPES.map((t) => (
                    <option key={t.id} value={t.label}>
                      {t.label}
                    </option>
                  ))}
                  <option value="Other / General Diagnostics">Other / General Diagnostics</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="repair-address"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  Your Area in Dehradun (e.g. Ballupur, Rajpur Rd) *
                </label>
                <input
                  id="repair-address"
                  type="text"
                  required
                  placeholder="e.g. Ballupur Chowk / Rajpur Road"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--line)",
                    backgroundColor: "var(--bg)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  fontSize: "0.95rem",
                  marginTop: "0.5rem",
                }}
              >
                <Send size={16} strokeWidth={1.5} />
                Book Repair Slot via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
