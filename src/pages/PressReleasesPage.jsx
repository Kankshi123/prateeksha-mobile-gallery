import { Link } from "react-router-dom";
import { Newspaper, Calendar, ArrowRight, Download, MessageCircle, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export const PRESS_RELEASES = [
  {
    id: "pr-all-india-delivery",
    title: "Prateeksha Mobile Gallery Expands Insured Pan-India Delivery for Smartphones & Electronics",
    date: "October 18, 2026",
    location: "Dehradun, India",
    lead: "Prateeksha Mobile Gallery, Dehradun's premier destination for smartphones and chip-level device repair on G.M.S. Road, today announced the nationwide expansion of its insured e-commerce fulfillment network.",
    body: "In partnership with leading national express carriers including Blue Dart Air, Delhivery, and DTDC, customers across all Indian states can now order verified brand-new units and certified pre-owned Apple, Samsung, and Google Pixel flagships with serialized tamper-evident sealing, live WhatsApp tracking, and zero in-transit risk.",
  },
  {
    id: "pr-inspection-lab",
    title: "Launch of Advanced 32-Point Device Testing Lab and Transparent Trade-In Center on G.M.S. Road",
    date: "August 12, 2026",
    location: "Dehradun, India",
    lead: "To address consumer hesitation around second-hand electronics, Prateeksha Mobile Gallery unveiled its proprietary 32-point hardware and software diagnostic protocol.",
    body: "The facility inspects every pre-owned device across display touch grid accuracy, battery degradation cycles, camera lens integrity, biometric sensors, and certified NIST-compliant data erasure. The initiative ensures every buyer receives written testing warranties and GST invoices.",
  },
  {
    id: "pr-milestone-15k",
    title: "Milestone: Prateeksha Mobile Gallery Celebrates 15,000 Devices Serviced and Sold Across Uttarakhand",
    date: "May 25, 2026",
    location: "Dehradun, India",
    lead: "Rooted in ethical repair practices and transparent trade-ins, the gallery achieved a landmark milestone of servicing over 15,000 satisfied tech consumers.",
    body: "The store credits its rapid organic word-of-mouth growth to strict policies against counterfeit parts, genuine competitive pricing against online platforms, and same-day turnaround on mobile screen and battery replacements.",
  },
];

export default function PressReleasesPage() {
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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Press Releases</span>
        </nav>

        <SectionTitle
          eyebrow="Media & Company Announcements"
          title="Official Press Releases & Brand News"
          accentWord="Brand News"
          subtitle="Updates, facility expansions, service launches, and milestone announcements from Prateeksha Mobile Gallery."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
          {PRESS_RELEASES.map((pr) => (
            <article
              key={pr.id}
              className="card-tactile"
              style={{
                padding: "2.25rem 2rem",
                backgroundColor: "var(--surface)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.75rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                  <Calendar size={13} color="var(--primary)" />
                  {pr.date}
                </span>
                <span>•</span>
                <span style={{ color: "var(--ink)", fontWeight: 700 }}>{pr.location}</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.3,
                  marginBottom: "1rem",
                }}
              >
                {pr.title}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  marginBottom: "0.85rem",
                }}
              >
                {pr.lead}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.93rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {pr.body}
              </p>
            </article>
          ))}
        </div>

        {/* Media Inquiries Card */}
        <div
          className="card-tactile"
          style={{
            padding: "2rem 2.25rem",
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
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.3rem" }}>
              Media & Press Inquiries
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>
              Journalists, bloggers, and tech reviewers can reach our media communication desk directly for interviews and high-resolution asset kits.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I am reaching out regarding a media inquiry / press release.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: "0.65rem 1.25rem", fontSize: "0.9rem" }}
          >
            <MessageCircle size={16} />
            <span>Contact Media Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
