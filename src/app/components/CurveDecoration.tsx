/** Subtle, logo-inspired organic curves used as calm background detail. */
export function CurveDecoration({
  className = "",
  color = "var(--brand-sage)",
  draw = false,
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  draw?: boolean;
  opacity?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity }}
    >
      <path
        className={draw ? "draw-line" : ""}
        d="M40 360 C 120 120, 360 60, 560 180"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className={draw ? "draw-line" : ""}
        style={draw ? { animationDelay: "0.4s" } : undefined}
        d="M20 300 C 160 200, 380 220, 580 90"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** A small dot travelling along a gentle curve — the "moment of change". */
export function MomentCurve({ className = "" }: { className?: string }) {
  const path = "M10 90 C 80 10, 220 10, 290 90";
  return (
    <svg className={className} viewBox="0 0 300 100" fill="none" aria-hidden="true">
      <path d={path} stroke="var(--brand-sand)" strokeWidth="1.5" strokeLinecap="round" />
      <circle
        r="5"
        fill="var(--brand-copper)"
        className="moment-dot"
        style={{ offsetPath: `path('${path}')`, offsetRotate: "0deg" } as React.CSSProperties}
      />
    </svg>
  );
}
