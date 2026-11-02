import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone,
  Headphones,
  RefreshCw,
  Laptop,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { CATEGORY_CARDS } from "../data/content";

const ICON_MAP = {
  smartphones: Smartphone,
  accessories: Headphones,
  "second-hand-phones": RefreshCw,
  "second-hand-laptops": Laptop,
  repair: Wrench,
};

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="section-padding section-surface"
      aria-label="Catalogue Categories"
    >
      <div className="container">
        <SectionTitle
          eyebrow="What We Stock & Service"
          title="Everything Mobile Under One Roof"
          accentWord="Under One Roof"
          subtitle="From brand new flagship iPhones to certified pre-owned laptops and expert repairs in Dehradun."
        />

        {/* Editorial Asymmetric Grid of Mixed Sizes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          {CATEGORY_CARDS.map((cat, i) => {
            const Icon = ICON_MAP[cat.id] || Smartphone;

            let colSpan = "span 4";
            if (i === 0) colSpan = "span 7";
            if (i === 1) colSpan = "span 5";
            if (i === 4) colSpan = "span 12";

            const route = cat.route || "/products";

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                style={{
                  gridColumn: colSpan,
                  display: "flex",
                }}
                className="category-card-col"
              >
                <Link
                  to={route}
                  className="card-tactile category-card-editorial"
                  style={{
                    width: "100%",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  backgroundColor: cat.accentTone === "teal" ? "#EAF2F2" : "var(--surface)",
                  position: "relative",
                  minHeight: i === 4 ? "auto" : "210px",
                }}
              >
                {/* Header: Number 01-05 and Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--primary)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cat.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        backgroundColor: "var(--bg)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--line)",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {cat.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--primary)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--ink)",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Body */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.25rem, 2.2vw, 1.55rem)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                      maxWidth: i === 4 ? "800px" : "100%",
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* Footer link cue */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                  }}
                >
                  <span>Explore category</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            </motion.div>
          );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .category-card-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 600px) {
          .category-card-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
