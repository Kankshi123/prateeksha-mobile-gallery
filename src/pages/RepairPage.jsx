import { useState } from "react";
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
  Clock,
  ShieldCheck,
  CalendarCheck,
  Wrench,
  PackageCheck,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl, SHOP_CONFIG } from "../data/shop";
import { REPAIR_STEPS, REPAIR_TYPES } from "../data/content";

const STEP_ICONS = [CalendarCheck, Wrench, ShieldCheck, PackageCheck];

const ESTIMATES = {
  screen: { label: "Display & Touch Replacement", time: "1–2 Hours", cost: "Starting from ₹1,499" },
  battery: { label: "Battery Drain & Replacement", time: "45 Minutes", cost: "Starting from ₹999" },
  charging: { label: "Charging Port & Pin Fix", time: "30–60 Minutes", cost: "Starting from ₹499" },
  water: { label: "Water & Moisture Damage", time: "Same Day", cost: "Starting from ₹799" },
  software: { label: "OS Bootloop & Unlock Issues", time: "1 Hour", cost: "Starting from ₹399" },
  speaker: { label: "Speaker, Mic & Receiver", time: "45 Minutes", cost: "Starting from ₹599" },
};

export default function RepairPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "screen",
    location: "",
  });

  const selectedEst = ESTIMATES[form.issue] || ESTIMATES.screen;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*In-Store Repair Slot Booking (Prateeksha Mobile Gallery)*
Name: ${form.name}
Phone: ${form.phone}
Device: ${form.device}
Selected Issue: ${selectedEst.label}
Customer Area in Dehradun: ${form.location}

Please confirm technician availability and reserve my in-store slot.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", padding: "3rem 0 5rem 0" }}>
      <div className="container">
        {/* Title */}
        <SectionTitle
          eyebrow="G.M.S. Road Service Center"
          title="Expert In-Store Mobile Repair"
          accentWord="Mobile Repair"
          subtitle="Walk in or book an appointment at our Dehradun service store. Fast turnaround, OEM parts, and 90-day warranty on all repairs."
        />

        {/* Highlight Notice Banner */}
        <div
          style={{
            maxWidth: "780px",
            margin: "-1.5rem auto 3.5rem auto",
            backgroundColor: "rgba(14, 90, 90, 0.08)",
            border: "1.5px solid var(--primary)",
            borderRadius: "var(--radius-md)",
            padding: "0.85rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            textAlign: "center",
          }}
        >
          <MapPin size={18} color="var(--primary)" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Notice: Mobile repair available exclusively in Dehradun (In-Store at G.M.S. Road). Product delivery all over India.
          </span>
        </div>

        {/* 4-Step Process */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {REPAIR_STEPS.map((s, idx) => {
            const Icon = STEP_ICONS[idx] || Wrench;
            return (
              <div
                key={s.step}
                className="card-tactile"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
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
                    marginBottom: "1rem",
                    border: "1px solid var(--ink)",
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.25rem",
                  }}
                >
                  STEP {s.step}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.86rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2-Column: Live Cost Estimator & WhatsApp Slot Scheduler */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left: Quick Repair Calculator Preview */}
          <div
            className="card-tactile"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bg)",
              padding: "2rem",
            }}
          >
            <span
              className="eyebrow"
              style={{ color: "var(--accent)", marginBottom: "0.35rem" }}
            >
              Instant Cost & Time Guide
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
              Estimated Pricing & Turnaround
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {Object.entries(ESTIMATES).map(([key, item]) => {
                const isSelected = form.issue === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setForm({ ...form, issue: key })}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.85rem 1rem",
                      backgroundColor: isSelected ? "var(--surface)" : "rgba(255, 255, 255, 0.08)",
                      color: isSelected ? "var(--primary)" : "var(--bg)",
                      border: isSelected ? "1.5px solid var(--accent)" : "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.label}</p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: isSelected ? "var(--muted)" : "#D3E4E4",
                          marginTop: "2px",
                        }}
                      >
                        ⏱ Turnaround: {item.time}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: isSelected ? "var(--primary)" : "var(--accent)",
                      }}
                    >
                      {item.cost}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              style={{
                borderTop: "1px dashed rgba(255, 255, 255, 0.2)",
                paddingTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle2 size={16} color="var(--accent)" strokeWidth={1.5} />
              <span style={{ fontSize: "0.82rem", color: "#D3E4E4" }}>
                90-day written guarantee on all display and battery parts.
              </span>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div
            className="card-tactile"
            style={{
              backgroundColor: "var(--surface)",
              padding: "2rem",
            }}
          >
            <div style={{ marginBottom: "1.25rem" }}>
              <span className="eyebrow">Direct Appointment</span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginTop: "0.2rem",
                }}
              >
                Book In-Store Repair Slot
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  marginTop: "0.25rem",
                }}
              >
                Reserve your priority technician slot. Opens WhatsApp with your device details instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label
                  htmlFor="repair-name"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Your Full Name *
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
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      marginBottom: "0.3rem",
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
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Phone / Device Model *
                  </label>
                  <input
                    id="repair-device"
                    type="text"
                    required
                    placeholder="e.g. iPhone 13 / OnePlus 11"
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
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Repair Requirement *
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
                  {Object.entries(ESTIMATES).map(([k, item]) => (
                    <option key={k} value={k}>
                      {item.label} ({item.cost})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="repair-location"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Your Area in Dehradun *
                </label>
                <input
                  id="repair-location"
                  type="text"
                  required
                  placeholder="e.g. Ballupur Chowk / Rajpur Road / Karanpur"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
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
                Reserve In-Store Slot via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
