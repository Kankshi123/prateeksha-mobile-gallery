export default function SectionTitle({
  eyebrow,
  title,
  accentWord,
  subtitle,
  align = "center",
  onDark = false,
}) {
  // Render title with yellow hand-drawn underline under accentWord if provided
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="underline-hand">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "3rem",
        maxWidth: align === "center" ? "740px" : "100%",
        marginLeft: align === "center" ? "auto" : "0",
        marginRight: align === "center" ? "auto" : "0",
      }}
    >
      {eyebrow && (
        <span className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 700,
          color: onDark ? "var(--bg)" : "var(--ink)",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginTop: "0.25rem",
          marginBottom: subtitle ? "0.85rem" : "0",
        }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            color: onDark ? "#D3E4E4" : "var(--muted)",
            maxWidth: "600px",
            margin: align === "center" ? "0 auto" : "0",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
