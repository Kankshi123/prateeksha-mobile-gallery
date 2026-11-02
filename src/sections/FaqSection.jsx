import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, HelpCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { FAQ_CATEGORIES, FAQS } from "../data/faqs";
import { buildWhatsAppUrl } from "../data/shop";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState("faq-1"); // First one open by default

  const searchInputId = useId();

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="section-padding section-cream"
      aria-label="Frequently Asked Questions"
      style={{
        borderTop: "1.5px solid var(--line)",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        <SectionTitle
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          accentWord="Asked Questions"
          subtitle="Everything you need to know about purchasing, exchanging, device repairs in Dehradun, and our pan-India delivery."
        />

        {/* Search Bar + Category Pills */}
        <div style={{ marginBottom: "2.5rem" }}>
          {/* Quick Search Input */}
          <div
            style={{
              position: "relative",
              maxWidth: "520px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <label htmlFor={searchInputId} className="sr-only">
              Search questions
            </label>
            <Search
              size={18}
              strokeWidth={1.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--muted)",
                pointerEvents: "none",
              }}
            />
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. warranty, screen, delivery, exchange)..."
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.6rem",
                borderRadius: "var(--radius-md)",
                border: "1.5px solid var(--line)",
                backgroundColor: "var(--bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.92rem",
                color: "var(--ink)",
                outline: "none",
                boxShadow: "var(--shadow-sm)",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery("");
                  }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.45rem 0.9rem",
                    borderRadius: "999px",
                    border: `1.5px solid ${isActive ? "var(--primary)" : "var(--line)"}`,
                    backgroundColor: isActive ? "var(--primary)" : "var(--surface)",
                    color: isActive ? "#FFFFFF" : "var(--ink)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const headingId = `faq-head-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="card-tactile"
                  style={{
                    backgroundColor: isOpen ? "#FFFDF5" : "var(--surface)",
                    borderColor: isOpen ? "var(--primary)" : "var(--line)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    transition: "background-color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: "100%",
                      padding: "1.25rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--primary)" : "var(--ink)",
                        lineHeight: 1.35,
                      }}
                    >
                      {faq.question}
                    </span>

                    <span
                      style={{
                        flexShrink: 0,
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid var(--line)",
                        backgroundColor: isOpen ? "var(--primary)" : "var(--bg)",
                        color: isOpen ? "#FFFFFF" : "var(--ink)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={17} strokeWidth={2} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 1.4rem 1.35rem 1.4rem",
                            borderTop: "1px dashed var(--line)",
                            paddingTop: "0.9rem",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.94rem",
                              color: "var(--muted)",
                              lineHeight: 1.65,
                              margin: 0,
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div
              className="card-tactile"
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                backgroundColor: "var(--surface)",
              }}
            >
              <HelpCircle
                size={36}
                strokeWidth={1.5}
                color="var(--muted)"
                style={{ margin: "0 auto 0.75rem auto" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.35rem",
                }}
              >
                No matching questions found
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                Have a specific inquiry? Ask our store team directly on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="btn btn-secondary"
                style={{ fontSize: "0.85rem", padding: "0.4rem 0.9rem" }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help Card */}
        <div
          className="card-tactile"
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem 1.75rem",
            backgroundColor: "var(--surface)",
            border: "1.5px dashed var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.08rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "0.25rem",
              }}
            >
              Still have questions about a phone or repair?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "var(--muted)",
                margin: 0,
              }}
            >
              Our staff on G.M.S. Road responds promptly with exact valuations, repair turnaround times, and stock updates.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(
              "Hello Prateeksha Mobile Gallery, I have a question regarding a mobile product / service."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{
              padding: "0.6rem 1.15rem",
              fontSize: "0.88rem",
              gap: "0.5rem",
            }}
          >
            <MessageCircle size={16} />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
