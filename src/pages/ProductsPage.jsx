import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  SlidersHorizontal,
  Heart,
  MessageCircle,
  ShoppingBag,
  Clock,
  Sparkles,
  Check,
  X,
} from "lucide-react";
import {
  PRODUCTS,
  BRANDS_LIST,
  OS_OPTIONS,
  CONDITION_OPTIONS,
} from "../data/products";
import { buildWhatsAppUrl } from "../data/shop";
import { useCurrentOffer } from "../hooks/useCurrentOffer";
import SectionTitle from "../components/SectionTitle";
import { useShop } from "../context/ShopContext";

export default function ProductsPage({ simulatedTime }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category"); // "smartphone" | "accessories" | "pre-owned"

  const { countdownFormatted } = useCurrentOffer(simulatedTime);

  // Filter States
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedOS, setSelectedOS] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [maxPrice, setMaxPrice] = useState(160000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist, setIsWishlistOpen, setIsCartOpen } = useShop();

  // Sync category param if set in URL
  useEffect(() => {
    if (categoryParam === "accessories") {
      setMaxPrice(25000);
    } else {
      setMaxPrice(160000);
    }
  }, [categoryParam]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedBrand("All Brands");
    setSelectedOS("all");
    setSelectedCondition("all");
    setMaxPrice(categoryParam === "accessories" ? 25000 : 160000);
  };

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter (from URL)
      if (categoryParam) {
        if (categoryParam === "smartphone" && item.category !== "smartphone") return false;
        if (categoryParam === "accessories" && item.category !== "accessories") return false;
        if (categoryParam === "pre-owned" && item.category !== "pre-owned") return false;
      }

      // Brand filter
      if (selectedBrand !== "All Brands" && item.brand !== selectedBrand) {
        return false;
      }

      // OS filter
      if (selectedOS !== "all") {
        if (item.os !== selectedOS) return false;
      }

      // Condition filter
      if (selectedCondition !== "all") {
        if (selectedCondition === "New" && item.condition !== "New") return false;
        if (selectedCondition !== "New" && item.condition !== selectedCondition) return false;
      }

      // Max price filter
      if (item.startingPrice > maxPrice) {
        return false;
      }

      return true;
    });
  }, [categoryParam, selectedBrand, selectedOS, selectedCondition, maxPrice]);

  const hasActiveFilters =
    selectedBrand !== "All Brands" ||
    selectedOS !== "all" ||
    selectedCondition !== "all" ||
    maxPrice < 160000;

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        padding: "2.5rem 0 5rem 0",
      }}
    >
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: "2rem" }}>
          <span className="eyebrow">Official Catalogue</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "var(--ink)",
              lineHeight: 1.15,
            }}
          >
            {categoryParam === "accessories"
              ? "Curated Mobile Accessories"
              : categoryParam === "pre-owned"
              ? "Certified Pre-Owned Devices"
              : "Smartphones & Mobile Devices"}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              marginTop: "0.35rem",
            }}
          >
            All products are genuine, tested, and in-stock at G.M.S. Road, Dehradun with nationwide delivery.
          </p>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div style={{ display: "none" }} className="mobile-filter-bar">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="btn btn-secondary"
            style={{ width: "100%", justifyContent: "space-between", marginBottom: "1.25rem" }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <SlidersHorizontal size={16} strokeWidth={1.5} />
              Filter Products
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
              {filteredProducts.length} Results
            </span>
          </button>
        </div>

        {/* Main 2-Column Layout: Sidebar Filters + Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "270px 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="products-page-layout"
        >
          {/* ─── LEFT SIDEBAR: FILTER PRODUCTS (Matching Reference Photo) ─── */}
          <aside
            className={`sidebar-filters-container ${mobileFilterOpen ? "mobile-open" : ""}`}
            style={{
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              boxShadow: "var(--shadow-sm)",
              position: "sticky",
              top: "92px",
            }}
          >
            {/* Header: Title + Reset Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                borderBottom: "1.5px solid var(--line)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <SlidersHorizontal size={17} strokeWidth={1.5} color="var(--primary)" />
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}
                >
                  FILTER PRODUCTS
                </h3>
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "var(--muted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                title="Reset all filters"
              >
                <RotateCcw size={13} strokeWidth={1.5} />
                Reset
              </button>
            </div>

            {/* Filter 1: BRAND */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label
                htmlFor="filter-brand"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                BRAND
              </label>
              <select
                id="filter-brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.6rem 0.75rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--line)",
                  backgroundColor: "var(--bg)",
                  color: "var(--ink)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {BRANDS_LIST.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: OPERATING SYSTEM (Segmented Buttons: ALL / IOS / ANDROID) */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                OPERATING SYSTEM
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.35rem",
                  backgroundColor: "var(--bg)",
                  padding: "3px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--line)",
                }}
              >
                {OS_OPTIONS.map((opt) => {
                  const active = selectedOS === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedOS(opt.id)}
                      style={{
                        padding: "0.45rem 0",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: active ? 700 : 500,
                        backgroundColor: active ? "var(--primary)" : "transparent",
                        color: active ? "var(--accent)" : "var(--muted)",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter 3: PRE-OWNED CONDITION */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "0.6rem",
                }}
              >
                CONDITION
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {CONDITION_OPTIONS.map((c) => {
                  const checked = selectedCondition === c.id;
                  return (
                    <label
                      key={c.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        color: checked ? "var(--primary)" : "var(--ink)",
                        fontWeight: checked ? 600 : 400,
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="condition-filter"
                        checked={checked}
                        onChange={() => setSelectedCondition(c.id)}
                        style={{ accentColor: "var(--primary)", cursor: "pointer" }}
                      />
                      <span>{c.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter 4: MAX PRICE SLIDER */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}
                >
                  MAX PRICE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  ₹{maxPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="160000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--primary)",
                  cursor: "pointer",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--muted)",
                  marginTop: "0.35rem",
                }}
              >
                <span>₹500</span>
                <span>₹1.6 Lakh</span>
              </div>
            </div>
          </aside>

          {/* ─── RIGHT CONTENT: PRODUCT LISTINGS & CARDS ─── */}
          <div>
            {/* Header: Showing X of Y + Clear Filters */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
                gap: "0.5rem",
                borderBottom: "1.5px solid var(--line)",
                paddingBottom: "0.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                }}
              >
                Showing{" "}
                <strong style={{ color: "var(--ink)" }}>{filteredProducts.length}</strong> of{" "}
                {PRODUCTS.length} products matching filters
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    textDecoration: "underline",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Clear active filters
                </button>
              )}
            </div>

            {/* Grid of Product Cards (Matching Reference Photo) */}
            {filteredProducts.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                  gap: "1.25rem",
                }}
              >
                {filteredProducts.map((prod, i) => {
                  const isWishlisted = isInWishlist(prod.id);
                  const savings = prod.originalPrice
                    ? prod.originalPrice - prod.startingPrice
                    : 0;

                  const buyUrl = buildWhatsAppUrl(
                    `Hello Prateeksha Mobile Gallery, I would like to buy: "${prod.name}" (Price: ₹${prod.startingPrice.toLocaleString(
                      "en-IN"
                    )}). Please confirm stock and delivery/payment.`
                  );

                  const chatUrl = buildWhatsAppUrl(
                    `Hello Prateeksha Mobile Gallery, I have a question about "${prod.name}". Could you share more details and photos?`
                  );

                  return (
                    <motion.div
                      key={prod.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(i * 0.04, 0.2) }}
                      className="card-tactile"
                      style={{
                        backgroundColor: "var(--surface)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {/* Image Stage with Spotlight Effect */}
                      <div
                        style={{
                          backgroundColor: "#162325", // Elegant spotlight contrast dark tone
                          height: "220px",
                          width: "100%",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "1rem",
                          borderBottom: "1.5px solid var(--line)",
                          overflow: "hidden",
                        }}
                      >
                        {/* Top Left Discount Badge (Matching Screenshot) */}
                        {prod.discountBadge && (
                          <span
                            style={{
                              position: "absolute",
                              top: "12px",
                              left: "12px",
                              backgroundColor: "var(--pop)",
                              color: "#FFFFFF",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              letterSpacing: "0.04em",
                              padding: "0.25rem 0.6rem",
                              borderRadius: "var(--radius-sm)",
                              boxShadow: "2px 2px 0 var(--ink)",
                              zIndex: 2,
                            }}
                          >
                            {prod.discountBadge}
                          </span>
                        )}

                        {/* Top Right Wishlist Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(prod);
                            setIsWishlistOpen(true);
                          }}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          title={isWishlisted ? "In Wishlist (Click to view)" : "Add to Wishlist"}
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
                            zIndex: 10,
                            color: isWishlisted ? "var(--pop)" : "var(--muted)",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                          <Heart
                            size={17}
                            strokeWidth={1.8}
                            fill={isWishlisted ? "var(--pop)" : "none"}
                          />
                        </button>

                        {/* Product Image Cutout */}
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          loading="lazy"
                          style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        />
                      </div>

                      {/* Card Body (Matching Reference Photo) */}
                      <div
                        style={{
                          padding: "1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          flex: 1,
                        }}
                      >
                        <div>
                          {/* Brand & In Stock Tag */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "0.35rem",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                color: "var(--muted)",
                                textTransform: "uppercase",
                              }}
                            >
                              {prod.brand}
                            </span>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: "#16A34A",
                              }}
                            >
                              <span
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  backgroundColor: "#16A34A",
                                }}
                              />
                              In Stock
                            </span>
                          </div>

                          {/* Product Title */}
                          <h4
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "1.15rem",
                              fontWeight: 700,
                              color: "var(--ink)",
                              lineHeight: 1.25,
                              marginBottom: "0.35rem",
                            }}
                          >
                            {prod.name}
                          </h4>

                          {/* Specs Line */}
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.82rem",
                              color: "var(--muted)",
                              lineHeight: 1.4,
                              marginBottom: "0.75rem",
                            }}
                          >
                            {prod.specs}
                          </p>

                          {/* Live Offer Timer */}
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              backgroundColor: "var(--bg)",
                              border: "1px dashed var(--line)",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "var(--radius-sm)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              color: "var(--pop)",
                              fontWeight: 600,
                              marginBottom: "1rem",
                            }}
                          >
                            <Clock size={12} strokeWidth={1.5} />
                            <span>Ends in {countdownFormatted}</span>
                          </div>
                        </div>

                        <div>
                          {/* Price & Savings */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: "0.5rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "1.35rem",
                                fontWeight: 800,
                                color: "var(--ink)",
                              }}
                            >
                              ₹{prod.startingPrice.toLocaleString("en-IN")}
                            </span>

                            {prod.originalPrice && (
                              <span
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "0.85rem",
                                  color: "var(--muted)",
                                  textDecoration: "line-through",
                                }}
                              >
                                ₹{prod.originalPrice.toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>

                          {savings > 0 && (
                            <p
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.74rem",
                                fontWeight: 700,
                                color: "#16A34A",
                                marginBottom: "1rem",
                              }}
                            >
                              Save ₹{savings.toLocaleString("en-IN")}
                            </p>
                          )}

                          {/* Dual Action Buttons: Add to Cart & Chat */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1.4fr 1fr",
                              gap: "0.5rem",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                addToCart(prod);
                                setIsCartOpen(true);
                              }}
                              className="btn btn-primary"
                              style={{
                                padding: "0.55rem 0.65rem",
                                fontSize: "0.82rem",
                                justifyContent: "center",
                                cursor: "pointer",
                                gap: "0.35rem",
                              }}
                              id={`cart-${prod.id}`}
                            >
                              <ShoppingBag size={14} strokeWidth={1.8} />
                              <span>Add to Cart</span>
                            </button>

                            <a
                              href={chatUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary"
                              style={{
                                padding: "0.55rem 0.65rem",
                                fontSize: "0.82rem",
                                justifyContent: "center",
                              }}
                            >
                              <MessageCircle size={14} strokeWidth={1.5} />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1.5px dashed var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "3.5rem 2rem",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.3rem",
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  No devices match your selected filters
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Try increasing your maximum price slider or selecting "All Brands".
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="btn btn-primary"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-page-layout {
            grid-template-columns: 1fr !important;
          }
          .mobile-filter-bar {
            display: block !important;
          }
          .sidebar-filters-container {
            display: none !important;
          }
          .sidebar-filters-container.mobile-open {
            display: block !important;
            margin-bottom: 2rem !important;
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
