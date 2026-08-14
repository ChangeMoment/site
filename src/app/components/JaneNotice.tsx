import { ShieldCheck } from "lucide-react";
import { useLang } from "../i18n/LanguageProvider";

export function JaneNotice({ className = "", variant = "default" }: { className?: string; variant?: "default" | "muted" }) {
  const { t } = useLang();
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm ${
        variant === "muted" ? "text-[var(--brand-ink-muted)]" : "text-[var(--brand-deep-olive)]"
      } ${className}`}
    >
      <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
      <span>{t("jane.notice")}</span>
    </p>
  );
}
