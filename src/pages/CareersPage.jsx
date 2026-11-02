import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export default function CareersPage() {
  const jobs = [
    {
      id: "tech-1",
      title: "Senior Mobile Repair Technician (Micro-Soldering)",
      type: "Full Time",
      location: "G.M.S. Road, Dehradun",
      experience: "2+ Years Experience",
      desc: "Lead chip-level diagnostics, OLED screen refurbishing, IC replacements, and motherboard repairs for iPhones and flagship Android smartphones.",
      skills: ["SMD Rework", "Display Glass Lamination", "Schematics Reading", "Component Diagnostics"],
    },
    {
      id: "sales-1",
      title: "Retail Technology Sales Specialist",
      type: "Full Time",
      location: "G.M.S. Road, Dehradun",
      experience: "1+ Year Retail Tech",
      desc: "Assist customers in choosing brand-new smartphones, trade-in valuations, and genuine accessories with deep product knowledge and friendly demeanor.",
      skills: ["Smartphone Specs Expertise", "Customer Relationship", "POS Billing", "WhatsApp Support"],
    },
    {
      id: "qa-1",
      title: "Quality Assurance & Device Inspector",
      type: "Full Time",
      location: "G.M.S. Road, Dehradun",
      experience: "Freshers with Tech Enthusiasm Welcome",
      desc: "Execute our comprehensive 32-point hardware and software diagnostic checklist on pre-owned phones, verifying battery cycles, touch matrix, and cameras.",
      skills: ["Attention to Detail", "Battery Health Testing", "NIST Data Wiping", "Inventory Tagging"],
    },
    {
      id: "logistics-1",
      title: "Logistics & Pan-India Dispatch Coordinator",
      type: "Full Time",
      location: "G.M.S. Road, Dehradun",
      experience: "1 Year Logistics / Courier Experience",
      desc: "Manage tamper-evident packaging, courier coordination with Blue Dart and Delhivery, real-time tracking generation, and transit insurance logging.",
      skills: ["Secure Packing", "Courier Portal Management", "Tracking Communication", "Stock Reconciliation"],
    },
  ];

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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Careers</span>
        </nav>

        <SectionTitle
          eyebrow="Join Our Dehradun Team"
          title="Build Your Career with Prateeksha Mobile Gallery"
          accentWord="Build Your Career"
          subtitle="Work with the latest smartphones, advanced repair workstations, and a team passionate about authentic technology and honest service."
        />

        {/* Perks Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            { title: "Competitive Salary", desc: "Timely monthly payouts with performance and sales bonuses." },
            { title: "Advanced Workstations", desc: "Work with precision microscopes, laser separators, and genuine test fixtures." },
            { title: "Staff Tech Discounts", desc: "Special internal pricing on smartphones, laptops, and curated accessories." },
            { title: "Positive Culture", desc: "Supportive, close-knit team focused on learning and craftsmanship." },
          ].map((perk) => (
            <div
              key={perk.title}
              className="card-tactile"
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--surface)",
              }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.3rem" }}>
                {perk.title}
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.85rem",
              fontWeight: 700,
              color: "var(--ink)",
              marginBottom: "1.5rem",
            }}
          >
            Current Openings in Dehradun
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="card-tactile"
                style={{
                  padding: "1.85rem",
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.28rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.4rem" }}>
                      {job.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                        <MapPin size={13} color="var(--primary)" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span style={{ color: "var(--primary)", fontWeight: 700 }}>{job.type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `Hello Prateeksha Mobile Gallery, I would like to apply for the position: "${job.title}". Here are my details:`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: "0.55rem 1.15rem", fontSize: "0.85rem", gap: "0.4rem" }}
                  >
                    <MessageCircle size={15} />
                    <span>Apply via WhatsApp</span>
                  </a>
                </div>

                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                  {job.desc}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.74rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg)",
                        border: "1px solid var(--line)",
                        color: "var(--ink)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
