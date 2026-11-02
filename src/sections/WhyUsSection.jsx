import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { WHY_US_POINTS, TESTIMONIALS } from "../data/content";
import { HeartHandshake, Stethoscope, Tag, MessageSquareText } from "lucide-react";

const POINT_ICONS = [HeartHandshake, Stethoscope, Tag, MessageSquareText];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="section-padding section-cream"
      aria-label="Why Choose Prateeksha Mobile Gallery"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Local Trust & Heritage"
          title="Trusted by Thousands Across Dehradun"
          accentWord="Across Dehradun"
          subtitle="Honest advice, fair pricing, and reliable service right on G.M.S. Road."
        />

        {/* 4 Concise Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {WHY_US_POINTS.map((pt, i) => {
            const Icon = POINT_ICONS[i] || HeartHandshake;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="card-tactile"
                style={{
                  padding: "1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  backgroundColor: "var(--surface)",
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

                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {pt.title}
                </h4>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.86rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {pt.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials in Plain Quote Style (Large Serif Quotation, NO star-avatar-card cliché) */}
        <div>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            <span className="eyebrow">Customer Words</span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.85rem",
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              Real Feedback from Local Customers
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1.5px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem 1.75rem",
                  boxShadow: "3px 3px 0 var(--line)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Large Serif Quotation Mark */}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "3.5rem",
                      lineHeight: "1",
                      color: "var(--primary)",
                      display: "block",
                      marginBottom: "-0.5rem",
                    }}
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      color: "var(--ink)",
                      lineHeight: 1.55,
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {t.quote}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "0.85rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--muted)",
                      marginTop: "2px",
                    }}
                  >
                    {t.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
