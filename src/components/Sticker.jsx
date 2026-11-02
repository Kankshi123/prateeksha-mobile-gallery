export default function Sticker({
  children,
  variant = "pill", // "pill" | "circle" | "stamp"
  rotation = -6,
  className = "",
  style = {},
}) {
  if (variant === "circle") {
    return (
      <div
        className={`sticker-circle ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  if (variant === "stamp") {
    return (
      <span
        className={`stamp-tomato ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          ...style,
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`stamp-badge ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
