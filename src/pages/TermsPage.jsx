import { Link } from "react-router-dom";
import { ShieldAlert, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export const TERMS_SECTIONS = [
  {
    title: "1. Device Purchase & Brand Warranty",
    paragraphs: [
      "All brand-new smartphones, laptops, smartwatches, and audio accessories sold by Prateeksha Mobile Gallery are 100% authentic, sealed Indian units sourced through authorized distribution networks.",
      "Every new smartphone includes official brand manufacturer warranty valid across authorized service centers throughout India. An authentic GST tax invoice is generated upon purchase.",
    ],
  },
  {
    title: "2. Certified Pre-Owned Device Warranty",
    paragraphs: [
      "Certified pre-owned phones undergo a rigorous 32-point hardware and software check. Each unit comes with a store testing warranty covering hardware defects, display touch functionality, and battery health.",
      "Warranty does not cover accidental physical drops, water/moisture submersion, display screen shattering, unauthorized bootloader rooting, or external cosmetic denting occurring post-sale.",
    ],
  },
  {
    title: "3. Mobile Repair Diagnostics & Service Liability (Dehradun Only)",
    paragraphs: [
      "Our repair services (screen replacements, battery swaps, and chip-level motherboard work) are carried out on-site at our G.M.S. Road store. Turnaround typically ranges between 45 and 90 minutes.",
      "Customers are strongly advised to back up sensitive personal data before service. While our technicians take utmost care, Prateeksha Mobile Gallery is not liable for data loss during hardware repair. Replaced screens carry up to a 90-day touch matrix warranty provided physical glass remains intact.",
    ],
  },
  {
    title: "4. Trade-In, Device Sale & Identity Verification",
    paragraphs: [
      "To prevent stolen goods and comply with legal requirements, any individual selling an old smartphone, laptop, or console must provide valid government photo identification (Aadhaar or Voter ID) and confirm legal ownership.",
      "Once an agreed trade-in price is accepted and disbursed via UPI or cash, the transaction is final. The device undergoes irreversible NIST 800-88 cryptographic sanitization.",
    ],
  },
  {
    title: "5. Pan-India Insured Shipping & Transit Terms",
    paragraphs: [
      "All shipments outside Dehradun are dispatched in tamper-evident security packaging with 100% transit insurance coverage via Blue Dart, Delhivery, or DTDC Express.",
      "To claim insurance for transit damage, customers must record a continuous, unedited video while unboxing the parcel from the sealed outer courier bag. Live tracking links are provided via WhatsApp upon courier handover.",
    ],
  },
  {
    title: "6. Jurisdiction & Store Contact",
    paragraphs: [
      "All agreements, claims, and service contracts are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Dehradun, Uttarakhand.",
    ],
  },
];

export default function TermsPage() {
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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Terms & Conditions</span>
        </nav>

        <SectionTitle
          eyebrow="Legal & Customer Assurance"
          title="Terms of Service & Customer Policy"
          accentWord="Customer Policy"
          subtitle="Clear, fair, and transparent guidelines governing retail purchases, trade-ins, repair work in Dehradun, and pan-India shipping."
        />

        <div
          className="card-tactile"
          style={{
            maxWidth: "840px",
            margin: "0 auto 3.5rem auto",
            padding: "2.5rem 2.25rem",
            backgroundColor: "var(--surface)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            {TERMS_SECTIONS.map((sec) => (
              <div key={sec.title} style={{ borderBottom: "1px dashed var(--line)", paddingBottom: "1.75rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {sec.title}
                </h3>
                {sec.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.93rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      marginBottom: i < sec.paragraphs.length - 1 ? "0.65rem" : 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legal Inquiries Contact */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1rem" }}>
            Questions regarding our terms, invoices, or service policies?
          </p>
          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I have a question regarding store terms and policies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
          >
            <MessageCircle size={16} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
