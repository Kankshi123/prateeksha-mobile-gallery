import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Truck, ArrowRight } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { buildWhatsAppUrl } from "../data/shop";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  } = useShop();

  const handleCheckoutWhatsApp = () => {
    let orderLines = cart
      .map((item, idx) => `${idx + 1}. ${item.name} (Qty: ${item.quantity}) - Rs ${(item.price * item.quantity).toLocaleString("en-IN")}`)
      .join("\n");

    const message = `Hello Prateeksha Mobile Gallery, I want to order the following items from my cart:\n\n${orderLines}\n\n*Total Amount:* Rs ${cartTotal.toLocaleString("en-IN")}\n*Delivery:* Free Insured All-India Delivery\n\nPlease confirm availability and payment/delivery details!`;

    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
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
            aria-label="Shopping Cart"
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
                <ShoppingBag size={20} color="var(--primary)" strokeWidth={1.8} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  Shopping Cart
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    backgroundColor: "var(--primary)",
                    color: "#FFFFFF",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "999px",
                  }}
                >
                  {cartCount}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-secondary"
                aria-label="Close cart"
                style={{ padding: "0.4rem 0.55rem" }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Delivery Info Strip */}
            <div
              style={{
                backgroundColor: "#FAF4E2",
                borderBottom: "1px dashed var(--line)",
                padding: "0.65rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                color: "var(--primary)",
                fontWeight: 600,
              }}
            >
              <Truck size={14} strokeWidth={1.8} />
              <span>Free Insured Delivery All Over India</span>
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
              {cart.length > 0 ? (
                cart.map((item) => (
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
                          marginBottom: "0.45rem",
                        }}
                      >
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </div>

                      {/* Quantity Toggles */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            border: "1px solid var(--line)",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "var(--surface)",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{
                              padding: "0.25rem 0.45rem",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              color: "var(--ink)",
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              padding: "0 0.45rem",
                              minWidth: "20px",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{
                              padding: "0.25rem 0.45rem",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              color: "var(--ink)",
                            }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
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
                      backgroundColor: "#FAF4E2",
                      border: "1.5px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--muted)",
                    }}
                  >
                    <ShoppingBag size={28} strokeWidth={1.5} />
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
                    Your Cart is Empty
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
                    Discover brand-new smartphones, certified pre-owned devices, and accessories.
                  </p>
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="btn btn-primary"
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "0.85rem",
                      padding: "0.55rem 1.15rem",
                    }}
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            {cart.length > 0 && (
              <div
                style={{
                  padding: "1.1rem 1.25rem max(1.25rem, calc(var(--safe-bottom) + 0.85rem)) 1.25rem",
                  borderTop: "1.5px solid var(--line)",
                  backgroundColor: "var(--bg)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Estimated Subtotal
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                    }}
                  >
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckoutWhatsApp}
                  className="btn btn-whatsapp"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    fontSize: "0.98rem",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Order / Checkout via WhatsApp</span>
                </button>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0.5rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={clearCart}
                    style={{
                      background: "none",
                      border: "none",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--muted)",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Clear Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    style={{
                      background: "none",
                      border: "none",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--primary)",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Continue Shopping →
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
