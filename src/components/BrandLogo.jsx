import React from "react";

/**
 * BrandLogo component renders accurate, recognizable vector logos
 * for smartphone, audio, and tech accessory brands.
 */
export default function BrandLogo({ brand = "", size = 22, className = "" }) {
  const norm = String(brand).toLowerCase().trim();

  // Common wrapper styles to ensure perfect vertical alignment and crisp scaling
  const wrapStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    verticalAlign: "middle",
  };

  switch (norm) {
    case "apple":
      return (
        <span style={wrapStyle} className={className} title="Apple" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="#FFFFFF"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.9.04-2.02.6-2.67 1.35-.58.67-.99 1.74-.93 2.79 1.01.08 2.01-.52 2.59-1.27z" />
          </svg>
        </span>
      );

    case "samsung":
      return (
        <span style={wrapStyle} className={className} title="Samsung" aria-hidden="true">
          <svg viewBox="0 0 34 18" width={size * 1.55} height={size * 0.85}>
            <ellipse
              cx="17"
              cy="9"
              rx="16"
              ry="8.2"
              fill="#1428A0"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="0.8"
              transform="rotate(-5 17 9)"
            />
            <text
              x="17"
              y="11.5"
              fill="#FFFFFF"
              fontSize="6.2"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              textAnchor="middle"
              letterSpacing="0.4"
            >
              SAMSUNG
            </text>
          </svg>
        </span>
      );

    case "oneplus":
      return (
        <span style={wrapStyle} className={className} title="OnePlus" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#EB0028">
            <path d="M0 3.74V24h20.26V12.428h-2.256v9.317H2.254V5.995h9.318V3.742zM18.004 0v3.74h-3.758v2.256h3.758v3.758h2.255V5.996H24V3.74h-3.758V0zm-6.45 18.756V8.862H9.562c0 .682-.228 1.189-.577 1.504-.367.297-.91.437-1.556.437h-.245v1.625h2.133v6.31h2.237z" />
          </svg>
        </span>
      );

    case "google":
    case "google pixel":
    case "pixel":
      return (
        <span style={wrapStyle} className={className} title="Google Pixel" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size}>
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </span>
      );

    case "xiaomi":
    case "mi":
      return (
        <span style={wrapStyle} className={className} title="Xiaomi" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF6900">
            <path d="M12 0C8.016 0 4.756.255 2.493 2.516.23 4.776 0 8.033 0 12.012c0 3.98.23 7.235 2.494 9.497C4.757 23.77 8.017 24 12 24c3.983 0 7.243-.23 9.506-2.491C23.77 19.247 24 15.99 24 12.012c0-3.984-.233-7.243-2.502-9.504C19.234.252 15.978 0 12 0zM4.906 7.405h5.624c1.47 0 3.007.068 3.764.827.746.746.827 2.233.83 3.676v4.54a.15.15 0 0 1-.152.147h-1.947a.15.15 0 0 1-.152-.148V11.83c-.002-.806-.048-1.634-.464-2.051-.358-.36-1.026-.441-1.72-.458H7.158a.15.15 0 0 0-.151.147v6.98a.15.15 0 0 1-.152.148H4.906a.15.15 0 0 1-.15-.148V7.554a.15.15 0 0 1 .15-.149zm12.131 0h1.949a.15.15 0 0 1 .15.15v8.892a.15.15 0 0 1-.15.148h-1.949a.15.15 0 0 1-.151-.148V7.554a.15.15 0 0 1 .151-.149zM8.92 10.948h2.046c.083 0 .15.066.15.147v5.352a.15.15 0 0 1-.15.148H8.92a.15.15 0 0 1-.152-.148v-5.352a.15.15 0 0 1 .152-.147Z" />
          </svg>
        </span>
      );

    case "vivo":
      return (
        <span style={wrapStyle} className={className} title="Vivo" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size * 1.15} height={size} fill="#415FFF">
            <path d="M19.604 14.101c-1.159 0-1.262-.95-1.262-1.24 0-.29.103-1.242 1.262-1.242h2.062c1.16 0 1.263.951 1.263 1.242 0 .29-.104 1.24-1.263 1.24m-2.062-3.527c-2.142 0-2.333 1.752-2.333 2.287 0 .535.19 2.286 2.333 2.286h2.062c2.143 0 2.334-1.751 2.334-2.286 0-.535-.19-2.287-2.334-2.287m-5.477.107c-.286 0-.345.05-.456.213-.11.164-2.022 3.082-2.022 3.082-.06.09-.126.126-.206.126-.08 0-.145-.036-.206-.126 0 0-1.912-2.918-2.022-3.082-.11-.164-.17-.213-.456-.213h-.668c-.154 0-.224.12-.127.267l2.283 3.467c.354.521.614.732 1.196.732s.842-.21 1.196-.732l2.284-3.467c.096-.146.026-.267-.128-.267m-8.876.284c0-.203.08-.284.283-.284h.505c.203 0 .283.08.283.283v3.9c0 .202-.08.283-.283.283h-.505c-.203 0-.283-.08-.283-.283zm-1.769-.285c-.287 0-.346.05-.456.213-.11.164-2.022 3.082-2.022 3.082-.061.09-.126.126-.206.126-.08 0-.145-.036-.206-.126 0 0-1.912-2.918-2.023-3.082-.11-.164-.169-.213-.455-.213H.175c-.171 0-.224.12-.127.267l2.283 3.467c.355.521.615.732 1.197.732.582 0 .842-.21 1.196-.732l2.283-3.467c.097-.146.044-.267-.127-.267m1.055-.893c-.165-.164-.165-.295 0-.46l.351-.351c.165-.165.296-.165.46 0l.352.351c.165.165.165.296 0 .46l-.352.352c-.164.165-.295.165-.46 0z" />
          </svg>
        </span>
      );

    case "oppo":
      return (
        <span style={wrapStyle} className={className} title="OPPO" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#00825B">
            <path d="M11.968 0C5.358 0 0 5.38 0 12s5.358 12 11.968 12c6.612 0 11.99-5.38 11.99-12S18.58 0 11.968 0zm0 3.75c4.568 0 8.243 3.69 8.243 8.25s-3.675 8.25-8.243 8.25c-4.57 0-8.244-3.69-8.244-8.25s3.674-8.25 8.244-8.25z" />
          </svg>
        </span>
      );

    case "realme":
      return (
        <span style={wrapStyle} className={className} title="Realme" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size}>
            <rect width="24" height="24" rx="5" fill="#FFC915" />
            <path
              d="M7 6.5h4.8c2.8 0 4.6 1.4 4.6 3.6 0 1.8-1.2 3.1-2.9 3.5l3.2 4.4h-2.9l-2.8-4H9.4v4H7V6.5zm2.4 5.6h2.2c1.4 0 2.3-.6 2.3-1.8 0-1.1-.9-1.8-2.3-1.8H9.4v3.6z"
              fill="#000000"
            />
          </svg>
        </span>
      );

    case "boat":
      return (
        <span style={wrapStyle} className={className} title="boAt" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#E20722">
            <path d="M12.081 0 5.833 17.686 17.15 13.93Zm-10.2 18.223L4.961 24H19.14l2.98-5.777z" />
          </svg>
        </span>
      );

    case "noise":
      return (
        <span style={wrapStyle} className={className} title="Noise" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size}>
            <rect width="24" height="24" rx="5" fill="#00E5FF" />
            <path d="M6 18V6l7.5 8.5V6H17v12l-7.5-8.5V18H6z" fill="#0E1217" />
          </svg>
        </span>
      );

    case "jbl":
      return (
        <span style={wrapStyle} className={className} title="JBL" aria-hidden="true">
          <svg viewBox="0 0 28 20" width={size * 1.35} height={size * 0.9}>
            <rect width="28" height="20" rx="3.5" fill="#FF4200" />
            <text
              x="14"
              y="14"
              fill="#FFFFFF"
              fontSize="10.5"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              textAnchor="middle"
              letterSpacing="-0.5"
            >
              JBL!
            </text>
          </svg>
        </span>
      );

    case "nothing":
      return (
        <span style={wrapStyle} className={className} title="Nothing" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size}>
            <rect
              width="24"
              height="24"
              rx="5"
              fill="#000000"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            <circle cx="8" cy="8" r="1.5" fill="#FFFFFF" />
            <circle cx="12" cy="8" r="1.5" fill="#FFFFFF" />
            <circle cx="16" cy="8" r="1.5" fill="#FFFFFF" />
            <circle cx="8" cy="12" r="1.5" fill="#FFFFFF" />
            <circle cx="16" cy="12" r="1.5" fill="#FFFFFF" />
            <circle cx="8" cy="16" r="1.5" fill="#FFFFFF" />
            <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
            <circle cx="12" cy="16" r="1.5" fill="#E53935" />
          </svg>
        </span>
      );

    case "motorola":
    case "moto":
      return (
        <span style={wrapStyle} className={className} title="Motorola" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#0082C8">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C24.002 5.375 18.632.002 12.007 0H12zm7.327 18.065s-.581-2.627-1.528-4.197c-.514-.857-1.308-1.553-2.368-1.532-.745 0-1.399.423-2.2 1.553-.469.77-.882 1.573-1.235 2.403 0 0-.29-.675-.63-1.343a8.038 8.038 0 0 0-.605-1.049c-.804-1.13-1.455-1.539-2.2-1.553-1.049-.021-1.854.675-2.364 1.528-.948 1.574-1.528 4.197-1.528 4.197h-.864l4.606-15.12 3.56 11.804.024.021.024-.021 3.56-11.804 4.61 15.113h-.862z" />
          </svg>
        </span>
      );

    case "anker":
      return (
        <span style={wrapStyle} className={className} title="Anker" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={size} height={size}>
            <rect width="24" height="24" rx="5" fill="#00A3E0" />
            <path
              d="M12 4.5L6.5 19h3.2l1.4-3.8h4.8L12.5 8.5l3.5 1.5L12 4.5zm-.3 5.5l1.4 3h-2.8l1.4-3z"
              fill="#FFFFFF"
            />
            <polygon
              points="12.5,8 10.5,12 13.5,12 11.5,16 15.5,10.5 12.5,10.5"
              fill="#FFD700"
            />
          </svg>
        </span>
      );

    default:
      return null;
  }
}
