import { motion } from "framer-motion";
import { MessageCircle, Heart, ShoppingBag } from "lucide-react";
import { buildWhatsAppUrl } from "../data/shop";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const wishlisted = isInWishlist(product.id);

  const bgTones = {
    butter: "#FEF7DC",
    cream: "#F7F2E2",
    teal: "#E9F2F2",
  };

  const imageBg = bgTones[product.bgTone] || "#F7F2E2";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
      className="card-tactile"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "var(--surface)",
      }}
      aria-label={`Product: ${product.name}`}
    >
      {/* Catalogue Cutout / Image Area on Flat Color */}
      <div
        style={{
          backgroundColor: imageBg,
          height: "220px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderBottom: "1.5px solid var(--line)",
          padding: "1rem",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Tag: New or Pre-owned */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: product.tag === "Pre-owned" ? "var(--primary)" : "var(--accent)",
            color: product.tag === "Pre-owned" ? "var(--bg)" : "var(--ink)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 700,
            padding: "0.2rem 0.55rem",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--primary)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {product.tag}
        </span>

        {/* Wishlist Heart Toggle */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            color: wishlisted ? "var(--pop)" : "var(--muted)",
            transition: "transform 0.15s ease, color 0.15s ease",
            zIndex: 5,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Heart size={17} fill={wishlisted ? "var(--pop)" : "none"} strokeWidth={1.8} />
        </button>

        {/* Discount Offer Badge as Tomato Stamp */}
        {product.hasOffer && product.offerLabel && (
          <span
            className="stamp-tomato"
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              transform: "rotate(4deg)",
            }}
          >
            {product.offerLabel}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 1.25,
              marginBottom: "0.35rem",
            }}
          >
            {product.name}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "var(--muted)",
              lineHeight: 1.45,
              marginBottom: "0.85rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </p>
        </div>

        <div>
          <div
            style={{
              marginBottom: "0.85rem",
              display: "flex",
              alignItems: "baseline",
              gap: "0.35rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--muted)",
              }}
            >
              Starting from
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              ₹{product.startingPrice.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Action Row: Add to Cart + WhatsApp Enquire */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="btn btn-secondary"
              style={{
                flex: 1,
                padding: "0.55rem 0.65rem",
                fontSize: "0.82rem",
                gap: "0.35rem",
                justifyContent: "center",
              }}
              id={`cart-${product.id}`}
            >
              <ShoppingBag size={14} strokeWidth={1.8} />
              <span>Add to Cart</span>
            </button>

            <a
              href={buildWhatsAppUrl(product.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: "0.55rem 0.8rem",
                fontSize: "0.82rem",
                gap: "0.35rem",
                flexShrink: 0,
              }}
              id={`enquire-${product.id}`}
              title="Enquire on WhatsApp"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
