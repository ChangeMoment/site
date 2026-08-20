import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "../i18n/LanguageProvider";
import { localizedPath } from "../lib/seo";

/* ── Buttons ───────────────────────────────────────────────── */

type Variant = "primary" | "sage" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--brand-deep-olive)] text-white hover:bg-[#686c55] shadow-[0_10px_30px_-12px_rgba(124,128,103,0.65)]",
  sage: "bg-[var(--brand-sage)] text-[#3c4322] hover:bg-[#b3bb8c]",
  outline:
    "border border-[var(--brand-deep-olive)]/45 text-[var(--brand-deep-olive)] hover:bg-[var(--brand-sage-soft)] hover:border-[var(--brand-deep-olive)]",
  ghost: "text-[var(--brand-deep-olive)] hover:bg-[var(--brand-sage-soft)]",
  light: "bg-white/90 text-[var(--brand-ink)] hover:bg-white backdrop-blur shadow-sm",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[1.05rem]",
};

interface BtnBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** show a trailing arrow that flips for RTL */
  arrow?: boolean;
}

export function BrandButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  arrow = false,
  ...rest
}: BtnBaseProps & ComponentProps<"button">) {
  const { dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {arrow && <Arrow className="size-4" aria-hidden="true" />}
    </button>
  );
}

export function LinkButton({
  to,
  variant = "primary",
  size = "md",
  children,
  className = "",
  arrow = false,
}: BtnBaseProps & { to: string }) {
  const { dir, lang } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <Link to={localizedPath(to, lang)} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {arrow && <Arrow className="size-4" aria-hidden="true" />}
    </Link>
  );
}

export function ExternalButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  arrow = false,
  ...rest
}: BtnBaseProps & ComponentProps<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </a>
  );
}

/* ── Section primitives ────────────────────────────────────── */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block font-body text-sm uppercase tracking-[0.28em] text-[var(--brand-deep-olive)] ${className}`}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  bg = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "bone" | "sage-soft" | "bone-soft";
  id?: string;
}) {
  const bgMap = {
    white: "bg-white",
    bone: "bg-[var(--brand-bone)]",
    "bone-soft": "bg-[var(--brand-bone-soft)]",
    "sage-soft": "bg-[var(--brand-sage-soft)]",
  } as const;
  return (
    <section id={id} className={`${bgMap[bg]} py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {subtitle && <p className="mt-6 leading-8 text-[var(--brand-ink-muted)]">{subtitle}</p>}
    </div>
  );
}
