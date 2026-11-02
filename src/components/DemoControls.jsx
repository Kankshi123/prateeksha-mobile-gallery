import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, RotateCcw } from "lucide-react";
import { DAY_NAMES } from "../data/offers";

const QUICK_PRESETS = [
  { label: "Early Bird (9 AM)", hour: "09:00", day: "Mon", date: "" },
  { label: "Afternoon Deal (2 PM)", hour: "14:00", day: "Wed", date: "" },
  { label: "Evening Special (7 PM)", hour: "19:00", day: "Fri", date: "" },
  { label: "Night Owl (11 PM)", hour: "23:00", day: "Thu", date: "" },
  { label: "Weekend Showcase (Sun)", hour: "15:00", day: "Sun", date: "" },
  { label: "Festive Season (Nov 2)", hour: "12:00", day: "Mon", date: "2026-11-02" },
];

export default function DemoControls({ onSimulatedTimeChange }) {
  const [open, setOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Live Real Time");

  const applyPreset = (preset) => {
    const base = preset.date ? new Date(preset.date) : new Date();
    if (preset.hour) {
      const [h, m] = preset.hour.split(":").map(Number);
      base.setHours(h, m, 0, 0);
    }
    if (preset.day) {
      const targetDay = DAY_NAMES.indexOf(preset.day);
      const currentDay = base.getDay();
      const diff = ((targetDay - currentDay + 7) % 7);
      base.setDate(base.getDate() + diff);
    }
    setActiveLabel(preset.label);
    onSimulatedTimeChange(base);
  };

  const handleReset = () => {
    setActiveLabel("Live Real Time");
    onSimulatedTimeChange(null);
  };

  return (
    <>
      {/* Small Gear Button pinned to Bottom-Left */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Offer Demo Controls"
        title="Simulate time/day for client presentation"
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--surface)",
          color: "var(--primary)",
          border: "1.5px solid var(--primary)",
          boxShadow: "3px 3px 0 var(--primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 45,
        }}
      >
        <Settings size={18} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              left: "20px",
              bottom: "72px",
              width: "min(330px, 92vw)",
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--primary)",
              borderRadius: "var(--radius-md)",
              boxShadow: "5px 5px 0 var(--primary)",
              padding: "1.25rem",
              zIndex: 50,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.6rem",
                borderBottom: "1px solid var(--line)",
                paddingBottom: "0.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Settings size={15} strokeWidth={1.5} color="var(--primary)" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                  }}
                >
                  Offer Demo Simulator
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  padding: "2px",
                }}
                aria-label="Close"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                color: "var(--muted)",
                marginBottom: "0.85rem",
                lineHeight: 1.45,
              }}
            >
              Click any schedule preset to show the client how greeting, announcement banner, and live offers dynamically shift.
            </p>

            {/* Current Simulation Status */}
            <div
              style={{
                backgroundColor: "var(--bg)",
                border: "1px dashed var(--line)",
                borderRadius: "var(--radius-sm)",
                padding: "0.4rem 0.6rem",
                marginBottom: "0.85rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--ink)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--muted)" }}>Active:</span>
              <span style={{ fontWeight: 600, color: "var(--primary)" }}>{activeLabel}</span>
            </div>

            {/* Presets List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "0.85rem" }}>
              {QUICK_PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => applyPreset(p)}
                  style={{
                    textAlign: "left",
                    padding: "0.45rem 0.65rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    backgroundColor: activeLabel === p.label ? "var(--accent)" : "transparent",
                    color: "var(--ink)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.12s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeLabel !== p.label) e.currentTarget.style.backgroundColor = "var(--bg)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeLabel !== p.label) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span>{p.label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)" }}>
                    {p.hour}
                  </span>
                </button>
              ))}
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary"
              style={{
                width: "100%",
                padding: "0.45rem 0.75rem",
                fontSize: "0.8rem",
                justifyContent: "center",
              }}
            >
              <RotateCcw size={14} strokeWidth={1.5} />
              Reset to Real Time
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
