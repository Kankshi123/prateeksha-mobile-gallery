import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "whatsapp" | "accent"
  size = "md",        // "sm" | "md" | "lg"
  href,
  to,
  onClick,
  icon,
  className = "",
  style = {},
  ...props
}) {
  const sizeStyles = {
    sm: { padding: "0.5rem 0.95rem", fontSize: "0.82rem" },
    md: { padding: "0.75rem 1.35rem", fontSize: "0.92rem" },
    lg: { padding: "0.9rem 1.75rem", fontSize: "1.05rem" },
  };

  const combinedStyles = {
    ...sizeStyles[size],
    ...style,
  };

  const btnClass = `btn btn-${variant} ${className}`;

  if (to || (href && href.startsWith("/") && !href.startsWith("//"))) {
    return (
      <Link to={to || href} className={btnClass} style={combinedStyles} {...props}>
        {icon && <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={btnClass} style={combinedStyles} {...props}>
        {icon && <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={btnClass}
      style={combinedStyles}
      {...props}
    >
      {icon && <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
