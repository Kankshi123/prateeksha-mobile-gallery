export default function Logo({ size = 46, showText = true, className = "" }) {
  return (
    <div
      className={`brand-logo-wrap ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.65rem",
        textDecoration: "none",
      }}
    >
      {/* Generated Bespoke PMG Brand Logo Emblem */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "10px",
          overflow: "hidden",
          border: "1.5px solid var(--primary)",
          boxShadow: "2px 2px 0 var(--accent)",
          backgroundColor: "#FAF5E8",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/logo.jpg"
          alt="Prateeksha Mobile Gallery Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {showText && (
        <div
          className="brand-logo-text"
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.15,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.18rem",
              fontWeight: 800,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Prateeksha
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--muted)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Mobile Gallery
          </span>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) and (min-width: 1024px) {
          .brand-logo-text {
            display: none !important;
          }
        }
        @media (max-width: 420px) {
          .brand-logo-text span:first-of-type {
            font-size: 1.02rem !important;
          }
        }
        @media (max-width: 360px) {
          .brand-logo-text span:last-of-type {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
