import { Link } from "react-router-dom";
import { FileText, Download, BarChart3, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export const WHITEPAPERS_DATA = [
  {
    id: "wp-tier2-market",
    title: "Secondary Electronics Adoption & Circular Smartphone Economy in Uttarakhand (2025–2026)",
    pages: "24 Pages",
    format: "PDF Whitepaper",
    summary:
      "A quantitative study surveying over 4,500 gadget owners across Dehradun, Rishikesh, and Haridwar examining trade-in frequency, device refurbishment trust, and consumer willingness to purchase certified pre-owned flagships over entry-level budget phones.",
    metrics: [
      { label: "Refurbished Preference Growth", val: "+64% YoY" },
      { label: "Average Upgrade Cycle", val: "22 Months" },
      { label: "Battery Health Threshold", val: "84% Min" },
    ],
  },
  {
    id: "wp-right-to-repair",
    title: "Independent Diagnostics & Chip-Level Micro-Soldering: Economic Impact on Consumers",
    pages: "18 Pages",
    format: "PDF Whitepaper",
    summary:
      "Analyzing 1,200 smartphone motherboard and screen repairs handled on G.M.S. Road, demonstrating how precision diagnostics and IC-level rework save consumer households over 65% compared to complete motherboard swap policies at brand service centers.",
    metrics: [
      { label: "Consumer Cost Savings", val: "68% Avg" },
      { label: "Turnaround Reduction", val: "<2 Hours" },
      { label: "E-Waste Diverted", val: "2.8 Tons" },
    ],
  },
  {
    id: "wp-data-security",
    title: "NIST-Compliant Data Sanitization Protocols for Pre-Owned Smart Devices in Retail Environments",
    pages: "16 Pages",
    format: "Technical Standard",
    summary:
      "A technical blueprint outlining our zero-trace data sanitization framework, cryptographic storage erasure verification, and carrier lock compliance before certified resale.",
    metrics: [
      { label: "Erasure Success Rate", val: "100.0%" },
      { label: "NIST Standard", val: "800-88 R1" },
      { label: "Audit Verification", val: "32 Points" },
    ],
  },
];

export default function WhitepapersPage() {
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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Whitepapers</span>
        </nav>

        <SectionTitle
          eyebrow="Research & Industry Analysis"
          title="Whitepapers & Electronics Lifecycle Research"
          accentWord="Lifecycle Research"
          subtitle="Data-driven research reports on smartphone trade-in economics, sustainable repair practices, and regional consumer electronics trends."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
          {WHITEPAPERS_DATA.map((wp) => (
            <div
              key={wp.id}
              className="card-tactile"
              style={{
                padding: "2.25rem 2rem",
                backgroundColor: "var(--surface)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700, marginBottom: "0.5rem" }}>
                    <FileText size={15} />
                    <span>{wp.format}</span>
                    <span>•</span>
                    <span>{wp.pages}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      maxWidth: "750px",
                    }}
                  >
                    {wp.title}
                  </h3>
                </div>

                <a
                  href={buildWhatsAppUrl(`Hello Prateeksha Mobile Gallery, I would like to request a PDF copy of the whitepaper: "${wp.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem", gap: "0.4rem" }}
                >
                  <Download size={15} />
                  <span>Request Full PDF</span>
                </a>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.94rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {wp.summary}
              </p>

              {/* Research Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--bg)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px dashed var(--line)",
                }}
              >
                {wp.metrics.map((m) => (
                  <div key={m.label}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)" }}>
                      {m.val}
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--muted)", marginTop: "2px" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
