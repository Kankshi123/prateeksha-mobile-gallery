import { buildWhatsAppUrl } from "../data/shop";
import Button from "./Button";
import { MessageCircle } from "lucide-react";

export default function OfferTicket({
  offer,
  countdownFormatted,
  isHero = false,
}) {
  if (!offer) return null;

  const claimUrl = buildWhatsAppUrl(
    `Hello Prateeksha Mobile Gallery, I want to claim the current live offer: "${offer.headline || offer.title}". Please share details.`
  );

  if (isHero) {
    // Compact hero ticket
    return (
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1.5px dashed var(--primary)",
          borderRadius: "var(--radius-md)",
          padding: "1rem 1.25rem",
          boxShadow: "3px 3px 0 var(--accent)",
          position: "relative",
          maxWidth: "460px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span className="live-dot" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--pop)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              LIVE OFFER
            </span>
          </div>

          {countdownFormatted && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--muted)",
                backgroundColor: "var(--bg)",
                padding: "0.15rem 0.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--line)",
              }}
            >
              Ends in {countdownFormatted}
            </span>
          )}
        </div>

        <h4
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: "0.25rem",
            lineHeight: 1.3,
          }}
        >
          {offer.headline || offer.title}
        </h4>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.86rem",
            color: "var(--muted)",
            lineHeight: 1.45,
            marginBottom: "0.75rem",
          }}
        >
          {offer.description}
        </p>

        <a
          href={claimUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--primary)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          <MessageCircle size={14} strokeWidth={1.5} />
          Claim offer on WhatsApp →
        </a>
      </div>
    );
  }

  // Full ticket banner
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1.5px solid var(--line)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top Header Strip */}
      <div
        style={{
          backgroundColor: "#FAF4E2",
          borderBottom: "1.5px dashed var(--line)",
          padding: "0.85rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span className="live-dot" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "var(--pop)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ACTIVE NOW • {offer.badge}
          </span>
        </div>

        {countdownFormatted && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>Ends in:</span>
            <span
              style={{
                backgroundColor: "var(--surface)",
                padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--line)",
                color: "var(--ink)",
              }}
            >
              {countdownFormatted}
            </span>
          </div>
        )}
      </div>

      {/* Main Body */}
      <div style={{ padding: "1.75rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <span
              className="stamp-tomato"
              style={{ marginBottom: "0.75rem", display: "inline-block" }}
            >
              {offer.discountText}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.25,
                marginBottom: "0.5rem",
              }}
            >
              {offer.headline || offer.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.55,
                maxWidth: "640px",
              }}
            >
              {offer.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-start",
              flexShrink: 0,
            }}
          >
            <Button
              variant="whatsapp"
              href={claimUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle size={17} strokeWidth={1.5} />}
            >
              Claim on WhatsApp
            </Button>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--muted)",
              }}
            >
              Instant reply • In-store & Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
