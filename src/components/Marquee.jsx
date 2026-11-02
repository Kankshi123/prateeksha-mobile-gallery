import BrandLogo from "./BrandLogo";

export default function Marquee({
  items = [],
  speed = "30s",
  separator = "•",
  className = "",
  showLogos = true,
}) {
  return (
    <div
      className={`marquee-wrapper ${className}`}
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--bg)",
        borderTop: "1.5px solid var(--ink)",
        borderBottom: "1.5px solid var(--ink)",
        padding: "0.85rem 0",
      }}
    >
      <div
        className="marquee-content"
        style={{ animationDuration: speed }}
      >
        {items.concat(items).map((item, idx) => {
          const name = typeof item === "string" ? item : item.name;
          const customLogo = typeof item === "object" && item.logo ? item.logo : null;

          return (
            <span
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                paddingRight: "1.6rem",
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: "var(--bg)",
                whiteSpace: "nowrap",
              }}
            >
              {showLogos && (customLogo || <BrandLogo brand={name} size={22} />)}
              <span>{name}</span>
              <span
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  marginLeft: "1rem",
                }}
              >
                {separator}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
