import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Search, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { SHOP_CONFIG, buildWhatsAppUrl } from "../data/shop";
import Logo from "./Logo";
import CashifyAllMenu, { ALL_MENU_DATA } from "./CashifyAllMenu";
import MoreMenu, { MORE_MENU_DATA } from "./MoreMenu";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen } = useShop();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    } else {
      navigate("/products");
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "var(--surface)",
        borderBottom: "1.5px solid var(--line)",
        zIndex: 50,
        boxShadow: "0 2px 0 var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          gap: "1rem",
        }}
      >
        {/* Left Section: Brand Logo + 'All ▾' Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexShrink: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
            }}
            aria-label="Prateeksha Mobile Gallery Home"
          >
            <Logo size={42} showText={true} />
          </Link>

          {/* Cashify 2-Tier 'All ▾' Mega Menu Dropdown (Visible on Both Mobile & Laptop) */}
          <div className="nav-all-menu-wrap">
            <CashifyAllMenu />
          </div>
        </div>

        {/* Central Hub: Search Bar (Desktop only) */}
        <div
          className="desktop-search-wrap"
          style={{
            display: "none",
            alignItems: "center",
            flex: 1,
            maxWidth: "520px",
            margin: "0 0.75rem",
          }}
        >
          {/* Interactive Search Bar matching Cashify Header */}
          <form
            onSubmit={handleSearch}
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search
              size={17}
              strokeWidth={1.8}
              style={{
                position: "absolute",
                left: "14px",
                color: "var(--muted)",
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search for mobiles, accessories & more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.55rem 1rem 0.55rem 2.45rem",
                borderRadius: "999px",
                border: "1.5px solid var(--line)",
                backgroundColor: "#FAF5E8",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                outline: "none",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--primary)";
                e.target.style.backgroundColor = "#FFFFFF";
                e.target.style.boxShadow = "0 2px 8px rgba(14, 90, 90, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--line)";
                e.target.style.backgroundColor = "#FAF5E8";
                e.target.style.boxShadow = "none";
              }}
            />
          </form>
        </div>

        {/* Right Actions: More Menu + Wishlist + Cart + WhatsApp CTA + Mobile Menu Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexShrink: 0 }}>
          {/* More Menu Dropdown (Cashify Style - Visible on Both Mobile & Laptop) */}
          <div className="nav-more-menu-wrap">
            <MoreMenu />
          </div>

          {/* Small Wishlist Option in Navbar */}
          <button
            type="button"
            className="nav-icon-btn"
            onClick={() => setIsWishlistOpen(true)}
            aria-label={`Wishlist (${wishlistCount})`}
            title="My Wishlist"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--line)",
              backgroundColor: "var(--bg)",
              color: wishlistCount > 0 ? "var(--pop)" : "var(--ink)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--pop)";
              e.currentTarget.style.color = "var(--pop)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
              e.currentTarget.style.color = wishlistCount > 0 ? "var(--pop)" : "var(--ink)";
            }}
          >
            <Heart size={18} fill={wishlistCount > 0 ? "var(--pop)" : "none"} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  backgroundColor: "var(--pop)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  minWidth: "18px",
                  height: "18px",
                  padding: "0 4px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
              >
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Small Cart Option in Navbar */}
          <button
            type="button"
            className="nav-icon-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping Cart (${cartCount})`}
            title="Shopping Cart"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--line)",
              backgroundColor: "var(--bg)",
              color: cartCount > 0 ? "var(--primary)" : "var(--ink)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--primary)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
              e.currentTarget.style.color = cartCount > 0 ? "var(--primary)" : "var(--ink)";
            }}
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  backgroundColor: "var(--primary)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  minWidth: "18px",
                  height: "18px",
                  padding: "0 4px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Button */}
          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I would like to inquire about products and services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp nav-whatsapp-cta"
            style={{
              padding: "0.55rem 1.15rem",
              fontSize: "0.88rem",
            }}
            id="nav-whatsapp-btn"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            <span className="hide-mobile">WhatsApp Us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="btn btn-secondary mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            style={{
              padding: "0.45rem 0.55rem",
              display: "inline-flex",
            }}
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-search-wrap { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-search-wrap { display: none !important; }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .nav-whatsapp-cta { display: none !important; }
          .nav-icon-btn {
            width: 34px !important;
            height: 34px !important;
          }
        }
        @media (max-width: 440px) {
          .mobile-menu-btn {
            padding: 0.38rem 0.45rem !important;
          }
        }
      `}</style>

      {/* Mobile Drawer Menu with All Categorized Features */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(16, 41, 43, 0.5)",
                backdropFilter: "blur(2px)",
                zIndex: 60,
              }}
            />
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
                width: "min(360px, 92vw)",
                backgroundColor: "var(--surface)",
                borderLeft: "2px solid var(--primary)",
                zIndex: 70,
                padding: "1.5rem 1.25rem",
                paddingBottom: "max(1.5rem, calc(var(--safe-bottom) + 1rem))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "-6px 0 0 rgba(14, 90, 90, 0.2)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              <div style={{ overflowY: "auto", flex: 1, paddingRight: "0.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1rem",
                    borderBottom: "1.5px solid var(--line)",
                    marginBottom: "1rem",
                  }}
                >
                  <Logo size={38} showText={true} />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="btn btn-secondary"
                    style={{ padding: "0.4rem 0.5rem" }}
                  >
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} style={{ marginBottom: "1.25rem" }}>
                  <input
                    type="text"
                    placeholder="Search devices & accessories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1.5px solid var(--line)",
                      backgroundColor: "var(--bg)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      outline: "none",
                    }}
                  />
                </form>

                {/* Mobile Quick Action Buttons for Cart & Wishlist */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setIsWishlistOpen(true);
                    }}
                    className="btn btn-secondary"
                    style={{
                      padding: "0.55rem 0.65rem",
                      fontSize: "0.82rem",
                      justifyContent: "center",
                      gap: "0.4rem",
                      backgroundColor: "var(--bg)",
                    }}
                  >
                    <Heart size={15} color="var(--pop)" fill={wishlistCount > 0 ? "var(--pop)" : "none"} />
                    <span>Wishlist ({wishlistCount})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="btn btn-secondary"
                    style={{
                      padding: "0.55rem 0.65rem",
                      fontSize: "0.82rem",
                      justifyContent: "center",
                      gap: "0.4rem",
                      backgroundColor: "var(--bg)",
                    }}
                  >
                    <ShoppingBag size={15} color="var(--primary)" />
                    <span>Cart ({cartCount})</span>
                  </button>
                </div>

                {/* Categorized Features list */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  ALL SERVICES & PAGES
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {ALL_MENU_DATA.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={item.mainRoute}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.65rem 0.75rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "#FAF5E8",
                          border: "1px solid var(--line)",
                          textDecoration: "none",
                          color: "var(--ink)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <Icon size={16} color="var(--primary)" />
                          <span
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "0.98rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight size={14} color="var(--primary)" />
                      </Link>
                    );
                  })}
                </div>

                {/* More Features & Company Links */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "1.25rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  MORE & COMPANY
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {MORE_MENU_DATA.flatMap((s) => s.items).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--line)",
                        textDecoration: "none",
                        color: "var(--ink)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={13} color="var(--primary)" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Contact Info */}
              <div
                style={{
                  borderTop: "1.5px solid var(--line)",
                  paddingTop: "1.1rem",
                  marginTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <a
                  href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
