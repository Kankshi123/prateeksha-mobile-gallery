import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Receipt, ArrowLeftRight, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { buildWhatsAppUrl } from "../data/shop";
import { SECOND_HAND_TRUST } from "../data/content";

const TRUST_ICONS = [ShieldCheck, BadgeCheck, Receipt, ArrowLeftRight];

export default function SecondHandSection() {
  const secondHandProducts = PRODUCTS.filter(
    (p) =>
      p.category === "second-hand-phones" || p.category === "second-hand-laptops"
  ).slice(0, 4);

  return (
    <section
      id="second-hand"
      className="section-padding section-cream"
      aria-label="Certified Pre-Owned Devices"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Certified & Inspected"
          title="Certified Pre-owned Phones & Laptops"
          accentWord="Pre-owned"
          subtitle="Pre-owned without the risk. Every device undergoes a rigorous 30-point hardware checklist with written store warranty."
        />

        {/* 4 Trust Points in Tactile Printed Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {SECOND_HAND_TRUST.map((pt, i) => {
            const Icon = TRUST_ICONS[i] || ShieldCheck;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="card-tactile"
                style={{
                  padding: "1.5rem",
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
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                    border: "1.5px solid var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
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
                    fontSize: "0.85rem",
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

        {/* Featured Pre-Owned Catalogue Grid */}
        {secondHandProducts.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                Featured In-Store Pre-Owned Stock
              </h3>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                }}
              >
                Stocks update weekly • G.M.S. Road
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {secondHandProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Action Callout */}
        <div style={{ textAlign: "center" }}>
          <a
            href={buildWhatsAppUrl(
              "Hello Prateeksha Mobile Gallery, I would like to see the complete list of available second-hand phones and laptops with real pictures and condition reports."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{
              padding: "0.85rem 1.75rem",
              fontSize: "0.98rem",
            }}
            id="second-hand-whatsapp-btn"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Ask for Full Pre-Owned Inventory on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
