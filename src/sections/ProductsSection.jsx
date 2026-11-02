import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, FILTER_TABS } from "../data/products";
import { buildWhatsAppUrl } from "../data/shop";
import { MessageCircle } from "lucide-react";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="products"
      className="section-padding section-cream"
      aria-label="Products Catalogue"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Catalogue & Pricing"
          title="Browse Our Current Stock"
          accentWord="Current Stock"
          subtitle="All phones and accessories are official Indian stock with genuine bills. Direct WhatsApp enquiry for real-time availability."
        />

        {/* Filter Tabs with Tactile Offset Shadow */}
        <div
          role="tablist"
          aria-label="Product categories"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  padding: "0.55rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--primary)",
                  backgroundColor: isActive ? "var(--primary)" : "var(--surface)",
                  color: isActive ? "var(--accent)" : "var(--primary)",
                  boxShadow: isActive ? "3px 3px 0 var(--ink)" : "2px 2px 0 var(--line)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  transform: isActive ? "translate(-1px, -1px)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom Order Callout Strip */}
        <div
          style={{
            marginTop: "3.5rem",
            backgroundColor: "var(--surface)",
            border: "1.5px dashed var(--line)",
            borderRadius: "var(--radius-md)",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "0.25rem",
              }}
            >
              Looking for a specific model or color?
            </h4>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--muted)",
              }}
            >
              If an item is not in display, we arrange official units within 24 hours at guaranteed shop prices.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I am looking for a specific phone/accessory model not listed on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Ask for Custom Model
          </a>
        </div>
      </div>
    </section>
  );
}
