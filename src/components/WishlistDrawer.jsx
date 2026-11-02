import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trash2, Heart, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { buildWhatsAppUrl } from "../data/shop";

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    wishlistCount,
  } = useShop();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(16, 41, 43, 0.55)",
              backdropFilter: "blur(2px)",
              zIndex: 90,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(440px, 94vw)",
              backgroundColor: "var(--surface)",
              borderLeft: "2px solid var(--primary)",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "-8px 0 0 rgba(14, 90, 90, 0.18)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Wishlist"
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1.5px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "var(--bg)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Heart size={20} color="var(--pop)" fill="var(--pop)" strokeWidth={1.5} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  My Wishlist
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    backgroundColor: "var(--pop)",
                    color: "#FFFFFF",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "999px",
                  }}
                >
                  {wishlistCount}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="btn btn-secondary"
                aria-label="Close wishlist"
                style={{ padding: "0.4rem 0.55rem" }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items List */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="card-tactile"
                    style={{
                      padding: "0.85rem",
                      backgroundColor: "var(--bg)",
                      display: "flex",
                      gap: "0.85rem",
                      alignItems: "center",
                    }}
                  >
                    {/* Item Thumbnail */}
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--line)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "4px",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>

                    {/* Item Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--ink)",
                          lineHeight: 1.25,
                          marginBottom: "0.2rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </div>

                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                          marginBottom: "0.55rem",
                        }}
                      >
                        ₹{(item.price || item.startingPrice || 0).toLocaleString("en-IN")}
                      </div>

                      {/* Action Buttons */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <button
                          type="button"
                          onClick={() => {
                            addToCart(item);
                            toggleWishlist(item);
                          }}
                          className="btn btn-primary"
                          style={{
                            padding: "0.3rem 0.65rem",
                            fontSize: "0.74rem",
                            gap: "0.3rem",
                          }}
                        >
                          <ShoppingBag size={12} />
                          <span>Move to Cart</span>
                        </button>

                        <a
                          href={buildWhatsAppUrl(
                            `Hello Prateeksha Mobile Gallery, I saved "${item.name}" in my wishlist and would like to know today's best price/availability.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{
                            padding: "0.3rem 0.5rem",
                            fontSize: "0.74rem",
                          }}
                          aria-label="Enquire on WhatsApp"
                        >
                          <MessageCircle size={13} color="var(--primary)" />
                        </a>

                        <button
                          type="button"
                          onClick={() => toggleWishlist(item)}
                          aria-label="Remove from wishlist"
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--muted)",
                            cursor: "pointer",
                            padding: "0.25rem",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "auto",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pop)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                        >
                          <Trash2 size={15} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3.5rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#FFF2F2",
                      border: "1.5px solid rgba(224, 76, 56, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--pop)",
                    }}
                  >
                    <Heart size={28} strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      margin: 0,
                    }}
                  >
                    Your Wishlist is Empty
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      color: "var(--muted)",
                      maxWidth: "240px",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Tap the heart icon on any smartphone or accessory to save it for later.
                  </p>
                  <Link
                    to="/products"
                    onClick={() => setIsWishlistOpen(false)}
                    className="btn btn-primary"
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "0.85rem",
                      padding: "0.55rem 1.15rem",
                    }}
                  >
                    <span>Browse Catalog</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            {/* Bottom Footer */}
            <div
              style={{
                padding: "1rem 1.25rem max(1.25rem, calc(var(--safe-bottom) + 0.85rem)) 1.25rem",
                borderTop: "1.5px solid var(--line)",
                backgroundColor: "var(--bg)",
                textAlign: "center",
              }}
            >
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--primary)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Close Wishlist
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
