import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Calendar, ArrowRight, Tag, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export const ARTICLES_DATA = [
  {
    id: "guide-pre-owned",
    category: "Buying Guides",
    title: "How to Safely Buy a Pre-Owned iPhone in India: The 32-Point Checklist",
    date: "October 2026",
    readTime: "5 min read",
    excerpt:
      "Avoid blacklisted devices, counterfeit displays, and third-party battery bypasses. Learn exactly what technicians look for when evaluating pre-owned iPhones.",
    content:
      "When buying a second-hand iPhone, never rely solely on cosmetic looks. Start by verifying the IMEI status on official databases to ensure it isn't carrier-locked or blacklisted. Check Settings > Battery > Battery Health to confirm maximum capacity is genuine. Inspect TrueTone and Face ID functionality, as non-genuine screen swaps disable TrueTone. At Prateeksha Mobile Gallery, every certified unit undergoes our 32-point internal hardware inspection before being placed in our display case.",
  },
  {
    id: "pixel-vs-iphone",
    category: "Comparisons",
    title: "Google Pixel 9 vs iPhone 16: Which Flagship Delivers Better Value?",
    date: "October 2026",
    readTime: "6 min read",
    excerpt:
      "Comparing camera computational photography, battery endurance, serviceability, and long-term resale value in the Indian market.",
    content:
      "Both devices offer spectacular displays and day-long battery life, but they serve different users. If you prioritize portrait clarity and effortless night photography, Google's computational AI is unmatched. If you want maximum ecosystem integration with Apple Watch and higher 3-year resale trade-in value, the iPhone retains a stronger value curve. Visit our G.M.S. Road store to test both side by side.",
  },
  {
    id: "battery-health-guide",
    category: "Repair Tips",
    title: "Why Battery Health Matters: When Should You Actually Replace Your Battery?",
    date: "September 2026",
    readTime: "4 min read",
    excerpt:
      "Does 82% battery health mean your phone needs service immediately? Here is the scientific truth about lithium-ion cycle degradation.",
    content:
      "Lithium-ion batteries naturally degrade as ions shuttle back and forth during charge cycles. As a rule of thumb: when your battery health drops below 80% or passes 500 charge cycles, performance management throttling may trigger sudden shutdowns in colder temperatures. At our G.M.S. Road counter, battery replacements take just 45 minutes using certified high-capacity cells with 6 months warranty.",
  },
  {
    id: "screen-protectors-truth",
    category: "Buying Guides",
    title: "9D Tempered Glass vs Ceramic Protectors: What Actually Saves Your OLED?",
    date: "September 2026",
    readTime: "3 min read",
    excerpt:
      "Don't get tricked by buzzwords. Learn how edge-to-edge curved glass impacts display survivability and touch sensitivity.",
    content:
      "Full glue 9D tempered glass with electroplated oleophobic coating provides the highest scratch resistance and shatter dispersion. Ceramic protectors resist chipping at the edges but have lower hardness against deep scratches. We stock laser-cut tempered glass for all curved Samsung, OnePlus, and flat iPhone displays with bubble-free machine application in-store.",
  },
  {
    id: "data-wiping-tradein",
    category: "Safety & Privacy",
    title: "How to Ensure 100% Data Security Before Selling or Exchanging Your Old Device",
    date: "August 2026",
    readTime: "4 min read",
    excerpt:
      "Factory resetting alone might not be enough. Step-by-step instructions to unlink iCloud, Google FRP, and banking credentials.",
    content:
      "Before trading in your smartphone, back up your photos to Google Photos or iCloud. Remove your Google Account and sign out of Apple ID with 'Find My' turned off. Finally, perform an encrypted factory reset. At Prateeksha Mobile Gallery, our technicians verify complete zero-byte data erasure before any device is accepted into inventory.",
  },
];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Buying Guides", "Comparisons", "Repair Tips", "Safety & Privacy"];

  const filteredArticles = ARTICLES_DATA.filter((a) =>
    activeCategory === "All" ? true : a.category === activeCategory
  );

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
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Articles</span>
        </nav>

        <SectionTitle
          eyebrow="Tech Guides & Insights"
          title="Practical Guides, Device Advice & Reviews"
          accentWord="Device Advice"
          subtitle="Honest insights from our in-store technicians and specialists on G.M.S. Road, Dehradun."
        />

        {/* Category Pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "0.45rem 1rem",
                  borderRadius: "999px",
                  border: `1.5px solid ${isActive ? "var(--primary)" : "var(--line)"}`,
                  backgroundColor: isActive ? "var(--primary)" : "var(--surface)",
                  color: isActive ? "#FFFFFF" : "var(--ink)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {filteredArticles.map((article) => (
            <div
              key={article.id}
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      backgroundColor: "var(--bg)",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {article.category}
                  </span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.35,
                    marginBottom: "0.85rem",
                  }}
                >
                  {article.title}
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
                  {article.excerpt}
                </p>

                <div
                  style={{
                    backgroundColor: "var(--bg)",
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px dashed var(--line)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--ink)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {article.content}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
                  {article.date}
                </span>

                <a
                  href={buildWhatsAppUrl(`Hello Prateeksha Mobile Gallery, I read your article "${article.title}" and have a question:`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    textDecoration: "underline",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span>Ask technician</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
