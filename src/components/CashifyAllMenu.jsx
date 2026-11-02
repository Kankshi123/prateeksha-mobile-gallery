import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Smartphone,
  RefreshCw,
  Wrench,
  Headphones,
  Tag,
  Truck,
  MapPin,
  Laptop,
  Tablet,
  Watch,
  Gamepad2,
  Camera,
  ShieldCheck,
  CheckCircle2,
  X,
} from "lucide-react";
import { buildWhatsAppUrl } from "../data/shop";

export const ALL_MENU_DATA = [
  {
    id: "sell",
    label: "Sell & Trade-In",
    categoryTitle: "Sell Your Old Device",
    icon: RefreshCw,
    mainRoute: "/pre-owned",
    subItems: [
      {
        title: "Phone",
        route: "/pre-owned",
        whatsAppPrompt: "Hello Prateeksha Mobile Gallery, I want to sell/trade my old mobile phone.",
        topBrandsTitle: "Top Selling Brands",
        brands: [
          { name: "Apple iPhone", route: "/pre-owned" },
          { name: "Samsung Galaxy", route: "/pre-owned" },
          { name: "OnePlus", route: "/pre-owned" },
          { name: "Google Pixel", route: "/pre-owned" },
          { name: "Xiaomi", route: "/pre-owned" },
        ],
        topProductsTitle: "Popular Exchange Models",
        products: [
          { name: "iPhone 14 Pro", route: "/pre-owned" },
          { name: "iPhone 13", route: "/pre-owned" },
          { name: "Galaxy S22 Ultra", route: "/pre-owned" },
          { name: "OnePlus 11", route: "/pre-owned" },
        ],
      },
      {
        title: "Laptop",
        route: "/pre-owned",
        whatsAppPrompt: "Hello Prateeksha Mobile Gallery, I want to sell/exchange my old laptop.",
        topBrandsTitle: "Top Laptop Brands",
        brands: [
          { name: "Apple MacBook", route: "/pre-owned" },
          { name: "Lenovo ThinkPad", route: "/pre-owned" },
          { name: "Dell Latitude / XPS", route: "/pre-owned" },
          { name: "HP EliteBook", route: "/pre-owned" },
        ],
        topProductsTitle: "Popular Trade-In Models",
        products: [
          { name: "MacBook Air M1", route: "/pre-owned" },
          { name: "MacBook Pro M2", route: "/pre-owned" },
          { name: "ThinkPad T14", route: "/pre-owned" },
        ],
      },
      {
        title: "Tablet / iPad",
        route: "/pre-owned",
        whatsAppPrompt: "Hello Prateeksha Mobile Gallery, I want to sell my iPad or tablet.",
        topBrandsTitle: "Tablet Brands",
        brands: [
          { name: "Apple iPad Pro / Air", route: "/pre-owned" },
          { name: "Samsung Galaxy Tab", route: "/pre-owned" },
        ],
        topProductsTitle: "Popular Tablets",
        products: [
          { name: "iPad 10th Gen", route: "/pre-owned" },
          { name: "iPad Air M1", route: "/pre-owned" },
          { name: "Galaxy Tab S8", route: "/pre-owned" },
        ],
      },
      {
        title: "Smartwatch",
        route: "/pre-owned",
        whatsAppPrompt: "Hello Prateeksha Mobile Gallery, I want to sell my smartwatch.",
        topBrandsTitle: "Watch Brands",
        brands: [
          { name: "Apple Watch Series", route: "/pre-owned" },
          { name: "Samsung Galaxy Watch", route: "/pre-owned" },
        ],
        topProductsTitle: "Popular Watches",
        products: [
          { name: "Apple Watch Series 8", route: "/pre-owned" },
          { name: "Apple Watch SE", route: "/pre-owned" },
        ],
      },
    ],
  },
  {
    id: "buy-phones",
    label: "Buy New Phones",
    categoryTitle: "Brand New Sealed Smartphones",
    icon: Smartphone,
    mainRoute: "/products?category=smartphone",
    subItems: [
      {
        title: "iOS (Apple)",
        route: "/products?category=smartphone&brand=Apple",
        topBrandsTitle: "Latest iPhones",
        brands: [
          { name: "Apple iPhone 16 Pro", route: "/products?category=smartphone&brand=Apple" },
          { name: "Apple iPhone 16", route: "/products?category=smartphone&brand=Apple" },
          { name: "Apple iPhone 15 Pro Max", route: "/products?category=smartphone&brand=Apple" },
          { name: "Apple iPhone 15", route: "/products?category=smartphone&brand=Apple" },
        ],
        topProductsTitle: "Features",
        products: [
          { name: "Official Indian Billing", route: "/products?category=smartphone" },
          { name: "Apple Manufacturer Warranty", route: "/products?category=smartphone" },
          { name: "Spot Setup in Store", route: "/contact" },
        ],
      },
      {
        title: "Android Flagships",
        route: "/products?category=smartphone",
        topBrandsTitle: "Top Android Brands",
        brands: [
          { name: "Samsung Galaxy", route: "/products?category=smartphone&brand=Samsung" },
          { name: "Google Pixel", route: "/products?category=smartphone&brand=Google" },
          { name: "OnePlus", route: "/products?category=smartphone&brand=OnePlus" },
          { name: "Xiaomi Redmi", route: "/products?category=smartphone&brand=Xiaomi" },
        ],
        topProductsTitle: "Trending Flagships",
        products: [
          { name: "Samsung Galaxy S24 Ultra", route: "/products?category=smartphone" },
          { name: "Google Pixel 9 Pro", route: "/products?category=smartphone" },
          { name: "OnePlus 13", route: "/products?category=smartphone" },
        ],
      },
    ],
  },
  {
    id: "pre-owned",
    label: "Certified Pre-Owned",
    categoryTitle: "30-Point Inspected Gadgets",
    icon: ShieldCheck,
    mainRoute: "/pre-owned",
    subItems: [
      {
        title: "Pre-Owned iPhones",
        route: "/pre-owned",
        topBrandsTitle: "Tested Apple Phones",
        brands: [
          { name: "iPhone 14 Pro (Like New)", route: "/pre-owned" },
          { name: "iPhone 13 (Superb)", route: "/pre-owned" },
          { name: "iPhone 12 (Budget)", route: "/pre-owned" },
        ],
        topProductsTitle: "Warranty & Trust",
        products: [
          { name: "3 to 6 Months Warranty", route: "/pre-owned" },
          { name: "85%+ Battery Health", route: "/pre-owned" },
          { name: "GST Tax Invoice", route: "/pre-owned" },
          { name: "7-Day Easy Exchange", route: "/pre-owned" },
        ],
      },
      {
        title: "Pre-Owned Laptops",
        route: "/pre-owned",
        topBrandsTitle: "Tested Laptops",
        brands: [
          { name: "MacBook Air M1", route: "/pre-owned" },
          { name: "MacBook Pro M2", route: "/pre-owned" },
          { name: "Lenovo ThinkPad T14", route: "/pre-owned" },
          { name: "Dell Latitude", route: "/pre-owned" },
        ],
        topProductsTitle: "Hardware Testing",
        products: [
          { name: "Battery Cycle Verified", route: "/pre-owned" },
          { name: "100% SSD Health Tested", route: "/pre-owned" },
          { name: "Original Charger Included", route: "/pre-owned" },
        ],
      },
    ],
  },
  {
    id: "repair",
    label: "Mobile Repair",
    categoryTitle: "In-Store Repair in Dehradun",
    icon: Wrench,
    mainRoute: "/repair",
    subItems: [
      {
        title: "Screen & Display",
        route: "/repair",
        topBrandsTitle: "Supported Brands",
        brands: [
          { name: "Apple iPhone Screen", route: "/repair" },
          { name: "Samsung AMOLED Display", route: "/repair" },
          { name: "OnePlus 120Hz Screen", route: "/repair" },
          { name: "Xiaomi & Vivo Screen", route: "/repair" },
        ],
        topProductsTitle: "Service Guarantee",
        products: [
          { name: "Replaced in 90 Minutes", route: "/repair" },
          { name: "90-Day Written Warranty", route: "/repair" },
          { name: "Original Quality Parts", route: "/repair" },
        ],
      },
      {
        title: "Battery & Charging",
        route: "/repair",
        topBrandsTitle: "Battery Services",
        brands: [
          { name: "High-Capacity Batteries", route: "/repair" },
          { name: "Charging Port Fix", route: "/repair" },
          { name: "Water Damage Inspection", route: "/repair" },
          { name: "Motherboard Micro-soldering", route: "/repair" },
        ],
        topProductsTitle: "Store Info",
        products: [
          { name: "Free Spot Diagnosis", route: "/repair" },
          { name: "G.M.S. Road, Dehradun", route: "/contact" },
          { name: "No Pick & Drop Outside Dun", route: "/repair" },
        ],
      },
    ],
  },
  {
    id: "accessories",
    label: "Curated Accessories",
    categoryTitle: "Audio, Power & Protection",
    icon: Headphones,
    mainRoute: "/products?category=accessories",
    subItems: [
      {
        title: "Audio & AirPods",
        route: "/products?category=accessories",
        topBrandsTitle: "Audio Brands",
        brands: [
          { name: "Apple AirPods & Max", route: "/products?category=accessories" },
          { name: "boAt TWS Earbuds", route: "/products?category=accessories" },
          { name: "OnePlus Bullets Wireless", route: "/products?category=accessories" },
          { name: "Noise Smart Audio", route: "/products?category=accessories" },
        ],
        topProductsTitle: "Categories",
        products: [
          { name: "True Wireless Earbuds", route: "/products?category=accessories" },
          { name: "Bluetooth Speakers", route: "/products?category=accessories" },
          { name: "Noise Cancelling Headsets", route: "/products?category=accessories" },
        ],
      },
      {
        title: "Covers & Power",
        route: "/products?category=accessories",
        topBrandsTitle: "Protection & Power",
        brands: [
          { name: "MagSafe Silicone Cases", route: "/products?category=accessories" },
          { name: "Anti-Static 9D Tempered Glass", route: "/products?category=accessories" },
          { name: "65W GaN Fast Chargers", route: "/products?category=accessories" },
          { name: "20,000mAh Power Banks", route: "/products?category=accessories" },
        ],
        topProductsTitle: "Quality Promise",
        products: [
          { name: "Drop-Tested Protection", route: "/products?category=accessories" },
          { name: "Free In-Store Installation", route: "/contact" },
        ],
      },
    ],
  },
  {
    id: "offers",
    label: "Daily Timed Deals",
    categoryTitle: "Dynamic In-Store Offers",
    icon: Tag,
    mainRoute: "/offers",
    subItems: [
      {
        title: "Active Promotions",
        route: "/offers",
        topBrandsTitle: "Offer Slots",
        brands: [
          { name: "Morning Deal (Before 12 PM)", route: "/offers" },
          { name: "Afternoon Deal (10% Audio)", route: "/offers" },
          { name: "Evening Charger Special", route: "/offers" },
          { name: "Weekend Refurbished Sale", route: "/offers" },
        ],
        topProductsTitle: "Claim Instructions",
        products: [
          { name: "Show Screen at Checkout", route: "/offers" },
          { name: "Reserve on WhatsApp", route: "/offers" },
          { name: "View 24h Timetable", route: "/offers" },
        ],
      },
    ],
  },
  {
    id: "delivery",
    label: "Pan-India Delivery",
    categoryTitle: "Fast Courier to All States",
    icon: Truck,
    mainRoute: "/delivery",
    subItems: [
      {
        title: "Shipping Features",
        route: "/delivery",
        topBrandsTitle: "Courier Network",
        brands: [
          { name: "Bluedart Air Express", route: "/delivery" },
          { name: "Delhivery Direct", route: "/delivery" },
          { name: "DTDC Prime", route: "/delivery" },
        ],
        topProductsTitle: "Customer Security",
        products: [
          { name: "Check 6-Digit Pincode", route: "/delivery" },
          { name: "Tamper-Proof Bubble Seal", route: "/delivery" },
          { name: "100% Transit Insurance", route: "/delivery" },
          { name: "Live WhatsApp Tracking", route: "/delivery" },
        ],
      },
    ],
  },
  {
    id: "contact",
    label: "Store & Contact",
    categoryTitle: "Prateeksha Mobile Gallery",
    icon: MapPin,
    mainRoute: "/contact",
    subItems: [
      {
        title: "Visit G.M.S. Road",
        route: "/contact",
        topBrandsTitle: "Store Info",
        brands: [
          { name: "G.M.S. Road, Dehradun", route: "/contact" },
          { name: "Near Ballupur Chowk", route: "/contact" },
          { name: "Open All 7 Days (10 AM – 9 PM)", route: "/contact" },
        ],
        topProductsTitle: "Get in Touch",
        products: [
          { name: "Instant WhatsApp Chat", route: "/contact" },
          { name: "Call: 9800000000", route: "/contact" },
          { name: "Live Google Map Directions", route: "/contact" },
        ],
      },
    ],
  },
];

export default function CashifyAllMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCategory = ALL_MENU_DATA[activeCategoryIndex] || ALL_MENU_DATA[0];
  const currentSubItem = currentCategory.subItems[activeSubIndex] || currentCategory.subItems[0];

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div
      ref={menuRef}
      style={{ position: "relative" }}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* "All ▾" Trigger Button matching Cashify */}
      <button
        type="button"
        className="all-menu-trigger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => {
          if (typeof window !== "undefined" && window.innerWidth >= 768) {
            setIsOpen(true);
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.52rem 0.85rem",
          borderRadius: "var(--radius-sm)",
          backgroundColor: isOpen ? "var(--primary)" : "#FAF5E8",
          color: isOpen ? "var(--accent)" : "var(--ink)",
          border: "1.5px solid",
          borderColor: isOpen ? "var(--primary)" : "var(--line)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: isOpen ? "2px 2px 0 var(--accent)" : "none",
        }}
      >
        <span>All</span>
        <ChevronDown
          size={15}
          strokeWidth={2}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {/* Cashify 2-Tier Mega Menu Floating Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cashify-all-dropdown"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--line)",
              borderRadius: "14px",
              boxShadow: "0 18px 38px rgba(16, 41, 43, 0.16)",
              display: "flex",
              width: "560px",
              maxWidth: "92vw",
              zIndex: 100,
              overflow: "hidden",
            }}
          >
            {/* Tier 1: Left Categories List (Width: 230px) */}
            <div
              className="cashify-all-left-col"
              style={{
                width: "230px",
                backgroundColor: "#FAF5E8",
                borderRight: "1px solid var(--line)",
                padding: "0.6rem 0",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  padding: "0.4rem 1.1rem 0.6rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(229, 220, 195, 0.7)",
                  marginBottom: "0.4rem",
                }}
              >
                CATEGORIES
              </div>

              {ALL_MENU_DATA.map((cat, idx) => {
                const isSelected = activeCategoryIndex === idx;
                const Icon = cat.icon || Smartphone;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    className="cashify-all-cat-btn"
                    onMouseEnter={() => {
                      if (typeof window !== "undefined" && window.innerWidth >= 768) {
                        setActiveCategoryIndex(idx);
                        setActiveSubIndex(0);
                      }
                    }}
                    onClick={(e) => {
                      if (activeCategoryIndex !== idx) {
                        e.preventDefault();
                        setActiveCategoryIndex(idx);
                        setActiveSubIndex(0);
                      } else {
                        handleNavigate(cat.mainRoute);
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.6rem 1.1rem",
                      backgroundColor: isSelected ? "var(--surface)" : "transparent",
                      color: isSelected ? "var(--primary)" : "var(--ink)",
                      border: "none",
                      borderLeft: isSelected ? "3px solid var(--primary)" : "3px solid transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      fontWeight: isSelected ? 700 : 500,
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Icon size={15} color={isSelected ? "var(--primary)" : "var(--muted)"} strokeWidth={1.5} />
                      <span style={{ fontSize: "0.85rem" }}>{cat.label}</span>
                    </div>
                    <ChevronRight size={14} color={isSelected ? "var(--primary)" : "#A0AEC0"} />
                  </button>
                );
              })}
            </div>

            {/* Tier 2: Right Detail Panel (Width: 330px) */}
            <div
              className="cashify-all-right-panel"
              style={{
                flex: 1,
                padding: "1.25rem 1.4rem",
                backgroundColor: "var(--surface)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflowY: "auto",
                maxHeight: "440px",
              }}
            >
              <div>
                {/* Category Header with Close button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px dashed var(--line)",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      {currentCategory.categoryTitle}
                    </h4>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                      }}
                    >
                      More in {currentCategory.label}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(currentCategory.mainRoute)}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--primary)",
                        fontWeight: 700,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      View All →
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0,0,0,0.06)",
                        border: "none",
                        color: "var(--ink)",
                        cursor: "pointer",
                        marginLeft: "0.3rem",
                      }}
                    >
                      <X size={15} />
                    </button>
                  </div>
                </div>

                {/* Sub-Items Tabs / Pills if multiple */}
                {currentCategory.subItems.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                    }}
                  >
                    {currentCategory.subItems.map((sub, sIdx) => {
                      const isSubActive = activeSubIndex === sIdx;
                      return (
                        <button
                          key={sub.title}
                          type="button"
                          onMouseEnter={() => setActiveSubIndex(sIdx)}
                          onClick={() => handleNavigate(sub.route)}
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.76rem",
                            fontWeight: isSubActive ? 700 : 500,
                            backgroundColor: isSubActive ? "var(--primary)" : "#FAF5E8",
                            color: isSubActive ? "var(--accent)" : "var(--ink)",
                            border: "1px solid var(--line)",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "999px",
                            cursor: "pointer",
                          }}
                        >
                          {sub.title}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Brands / Items List */}
                {currentSubItem && (
                  <div>
                    <div style={{ marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "var(--muted)",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {currentSubItem.topBrandsTitle || "Top Options"}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        {currentSubItem.brands.map((b) => (
                          <button
                            key={b.name}
                            type="button"
                            onClick={() => handleNavigate(b.route)}
                            style={{
                              background: "none",
                              border: "none",
                              padding: "0.2rem 0",
                              textAlign: "left",
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.85rem",
                              fontWeight: 500,
                              color: "var(--ink)",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                            className="sub-item-link"
                          >
                            <span>{b.name}</span>
                            <span style={{ fontSize: "0.72rem", color: "var(--primary)" }}>Open</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {currentSubItem.products && currentSubItem.products.length > 0 && (
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--muted)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "0.4rem",
                          }}
                        >
                          {currentSubItem.topProductsTitle || "Featured"}
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          {currentSubItem.products.map((p) => (
                            <button
                              key={p.name}
                              type="button"
                              onClick={() => handleNavigate(p.route)}
                              style={{
                                background: "none",
                                border: "none",
                                padding: "0.2rem 0",
                                textAlign: "left",
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.84rem",
                                color: "var(--muted)",
                                cursor: "pointer",
                              }}
                              className="sub-item-link"
                            >
                              • {p.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Quick Action */}
              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  paddingTop: "0.75rem",
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                  }}
                >
                  Prateeksha Mobile Gallery • G.M.S. Road
                </span>
                <button
                  type="button"
                  onClick={() => handleNavigate(currentCategory.mainRoute)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Explore →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .sub-item-link:hover {
          color: var(--primary) !important;
          font-weight: 700 !important;
          padding-left: 4px !important;
        }
        @media (max-width: 768px) {
          .all-menu-trigger-btn {
            padding: 0.42rem 0.65rem !important;
            font-size: 0.84rem !important;
            gap: 0.2rem !important;
          }
          .cashify-all-dropdown {
            position: fixed !important;
            top: 74px !important;
            left: 8px !important;
            right: 8px !important;
            width: auto !important;
            max-width: calc(100vw - 16px) !important;
            max-height: calc(85vh - 74px) !important;
            box-shadow: 0 16px 40px rgba(16, 41, 43, 0.3) !important;
            border-radius: 12px !important;
          }
          .cashify-all-left-col {
            width: 135px !important;
            padding: 0.4rem 0 !important;
          }
          .cashify-all-cat-btn {
            padding: 0.5rem 0.6rem !important;
          }
          .cashify-all-cat-btn span {
            font-size: 0.78rem !important;
            line-height: 1.2 !important;
          }
          .cashify-all-right-panel {
            padding: 0.85rem 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
}
