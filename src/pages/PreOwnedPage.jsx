import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Receipt,
  ArrowLeftRight,
  MessageCircle,
  BatteryMedium,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { PRODUCTS } from "../data/products";
import { SECOND_HAND_TRUST } from "../data/content";
import { buildWhatsAppUrl } from "../data/shop";

const TRUST_ICONS = [ShieldCheck, BadgeCheck, Receipt, ArrowLeftRight];

export default function PreOwnedPage() {
  const [subFilter, setSubFilter] = useState("all");

  const preOwnedItems = PRODUCTS.filter(
    (p) => p.category === "pre-owned"
  ).filter((p) => {
    if (subFilter === "all") return true;
    if (subFilter === "phones") return p.subCategory === "pre-owned-phone";
    if (subFilter === "laptops") return p.subCategory === "pre-owned-laptop";
    return true;
  });

  return (
    <div style={{ backgroundColor: "var(--bg)", padding: "3rem 0 5rem 0" }}>
      <div className="container">
        {/* Page Title */}
        <SectionTitle
          eyebrow="Certified Quality Guarantee"
          title="Certified Pre-Owned Phones & Laptops"
          accentWord="Pre-Owned"
          subtitle="Every device passes our 30-point internal hardware checklist. Comes with written store warranty, tested battery, and genuine GST bill."
        />

        {/* 4 Trust Points */}
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
              <div
                key={pt.title}
                className="card-tactile"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
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
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {pt.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.86rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Filter Sub-Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { id: "all", label: "All Pre-Owned" },
            { id: "phones", label: "Pre-Owned Phones" },
            { id: "laptops", label: "Pre-Owned Laptops" },
          ].map((tab) => {
            const active = subFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSubFilter(tab.id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "0.55rem 1.15rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--primary)",
                  backgroundColor: active ? "var(--primary)" : "var(--surface)",
                  color: active ? "var(--accent)" : "var(--primary)",
                  boxShadow: active ? "3px 3px 0 var(--ink)" : "2px 2px 0 var(--line)",
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Listings Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {preOwnedItems.map((prod) => {
            const chatUrl = buildWhatsAppUrl(
              `Hello Prateeksha Mobile Gallery, I am enquiring about the pre-owned "${prod.name}" (Price: ₹${prod.startingPrice.toLocaleString(
                "en-IN"
              )}). Please share battery report and current photos.`
            );

            return (
              <div
                key={prod.id}
                className="card-tactile"
                style={{
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#162325",
                    height: "220px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    borderBottom: "1.5px solid var(--line)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      backgroundColor: "var(--accent)",
                      color: "var(--primary)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--primary)",
                    }}
                  >
                    {prod.condition}
                  </span>

                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    loading="lazy"
                    style={{
                      maxWidth: "85%",
                      maxHeight: "85%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {prod.brand}
                    </span>
                    <h4
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        lineHeight: 1.25,
                        marginTop: "0.2rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {prod.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {prod.specs}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                        lineHeight: 1.45,
                        marginBottom: "1rem",
                      }}
                    >
                      {prod.description}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.5rem",
                        marginBottom: "1rem",
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
                            fontSize: "0.82rem",
                            color: "var(--muted)",
                            textDecoration: "line-through",
                          }}
                        >
                          MRP ₹{prod.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <a
                      href={chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      <MessageCircle size={16} strokeWidth={1.5} />
                      Request Real Photos on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inspection Guarantee Strip */}
        <div
          className="card-tactile"
          style={{
            backgroundColor: "var(--surface)",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "0.35rem",
              }}
            >
              Have a phone or laptop you want to exchange or sell?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--muted)",
              }}
            >
              Bring your old device to our G.M.S. Road store for an instant evaluation and exchange discount toward your upgrade.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Hello Prateeksha Mobile Gallery, I would like to get an exchange quote for my current device.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <ArrowLeftRight size={16} strokeWidth={1.5} />
            Get Exchange Value Quote
          </a>
        </div>
      </div>
    </div>
  );
}
