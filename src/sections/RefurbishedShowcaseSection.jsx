import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Heart, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { buildWhatsAppUrl } from "../data/shop";
import { useShop } from "../context/ShopContext";

export default function RefurbishedShowcaseSection() {
  const { addToCart, toggleWishlist, isInWishlist, setIsWishlistOpen, setIsCartOpen } = useShop();

  // Filter 4 premier refurbished products for the homepage showcase
  const refurbishedItems = PRODUCTS.filter(
    (p) => p.category === "pre-owned"
  ).slice(0, 4);

  return (
    <section
      id="refurbished-showcase"
      className="section-padding"
      style={{
        backgroundColor: "var(--surface)",
        borderBottom: "1.5px solid var(--line)",
      }}
      aria-label="Buy Refurbished Devices"
    >
      <div className="container">
        {/* Section Header with 'View All' Link matching Cashify */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.4rem" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                }}
              />
              <span className="eyebrow" style={{ margin: 0 }}>
                Certified & 30-Point Tested
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Buy Refurbished Devices
            </h2>
          </div>

          <Link
            to="/pre-owned"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "var(--primary)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            <span>View All</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="refurbished-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {refurbishedItems.map((item, i) => {
            const savings = item.originalPrice - item.startingPrice;
            const savingsFormatted = savings > 0 ? `₹${savings.toLocaleString("en-IN")} OFF` : "SPECIAL PRICE";

            const buyUrl = buildWhatsAppUrl(
              `Hello Prateeksha Mobile Gallery, I would like to buy the refurbished "${item.name}" listed at ₹${item.startingPrice.toLocaleString("en-IN")}. Please share billing and delivery/pickup details.`
            );

            const chatUrl = buildWhatsAppUrl(
              `Hello Prateeksha Mobile Gallery, I have a few questions about the condition/battery health of the refurbished "${item.name}".`
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="card-tactile"
                style={{
                  padding: "1.25rem",
                  backgroundColor: "var(--bg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div>
                  {/* Discount Pill Badge on Top Left (Like Cashify Green/Teal Pill) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        backgroundColor: "#E2F5EA",
                        color: "#166534",
                        border: "1px solid #BBF7D0",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "999px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {savingsFormatted}
                    </span>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.condition}
                    </span>
                  </div>

                  {/* Device Image Spotlight Container */}
                  <div
                    style={{
                      width: "100%",
                      height: "170px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: "1rem",
                      marginBottom: "1rem",
                      position: "relative",
                    }}
                  >
                    {/* Wishlist Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(item);
                        setIsWishlistOpen(true);
                      }}
                      aria-label="Add to wishlist"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--line)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 5,
                        color: isInWishlist(item.id) ? "var(--pop)" : "var(--muted)",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
                      }}
                    >
                      <Heart size={15} strokeWidth={1.8} fill={isInWishlist(item.id) ? "var(--pop)" : "none"} />
                    </button>

                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Title and Specs */}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                      lineHeight: 1.45,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.specs}
                  </p>
                </div>

                {/* Price & Dual Buttons */}
                <div>
                  <div
                    style={{
                      borderTop: "1px dashed var(--line)",
                      paddingTop: "0.85rem",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                      }}
                    >
                      ₹{item.startingPrice.toLocaleString("en-IN")}
                    </span>

                    {item.originalPrice && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.88rem",
                          color: "var(--muted)",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹{item.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Dual Action Buttons (Add to Cart & Chat) */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(item);
                        setIsCartOpen(true);
                      }}
                      className="btn btn-primary"
                      style={{
                        fontSize: "0.82rem",
                        padding: "0.55rem 0.5rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        gap: "0.3rem",
                      }}
                    >
                      <ShoppingBag size={14} strokeWidth={1.8} />
                      <span>Add to Cart</span>
                    </button>

                    <a
                      href={chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        fontSize: "0.82rem",
                        padding: "0.55rem 0.5rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.3rem",
                        textDecoration: "none",
                      }}
                    >
                      <MessageCircle size={14} />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .refurbished-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .refurbished-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
