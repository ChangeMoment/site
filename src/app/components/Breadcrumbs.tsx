import { Link } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLang } from "../i18n/LanguageProvider";
import { localizedPath } from "../lib/seo";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { dir, t, lang } = useLang();
  const Chevron = dir === "rtl" ? ChevronLeft : ChevronRight;
  return (
    <nav aria-label={t("common.breadcrumbLabel")}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--brand-ink-muted)]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={localizedPath(item.to, lang)} className="transition-colors hover:text-[var(--brand-deep-olive)]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--brand-ink)]">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <Chevron className="size-3.5 opacity-60" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
