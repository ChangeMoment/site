import { Link } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import { useLang } from "../i18n/LanguageProvider";
import type { Service } from "../data/services";
import { JANE_URL } from "../lib/constants";
import { localizedPath } from "../lib/seo";

import { formatLgbtqia2sText as renderServiceName } from "../lib/lgbtqia";

type ServiceCardProps = {
  service: Service;
  paletteIndex?: number;
};

const servicePalettes = [
  {
    background: "#F8F4EF",
    border: "#E8DDD0",
    card: "border-[#E8DDD0]",
    icon: "bg-[#C0C79E] text-[var(--brand-deep-olive)] group-hover:bg-[#E8DDD0] group-hover:text-[#8F624A]",
    title: "text-[var(--brand-ink)] hover:text-[var(--brand-deep-olive)]",
    body: "text-[var(--brand-ink-muted)]",
    primaryLink: "rounded-full bg-[#EDE3D8] px-4 py-2 text-[#B18369] hover:bg-[#E0D0C0] hover:text-[#8F6249] transition-colors",
    secondaryLink: "text-[var(--brand-ink-muted)] hover:text-[#8F624A]",
    ornament: "bg-[#C0C79E]/16",
  },
] as const;

export function ServiceCard({ service, paletteIndex }: ServiceCardProps) {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const palette = paletteIndex === undefined ? null : servicePalettes[0];

  return (
    <article
      className={`card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 ${palette?.card ?? "border-[var(--brand-muted-olive)]/20 bg-white"} ${palette ? "service-card-uniform" : ""}`}
      style={palette ? { borderColor: palette.border } : undefined}
    >
      {palette && <span className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125 ${palette.ornament}`} aria-hidden="true" />}
      <span className={`relative inline-flex size-14 items-center justify-center rounded-2xl transition-colors ${palette?.icon ?? "bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)] group-hover:bg-[var(--brand-sage)] group-hover:text-[#3c4322]"}`}>
        <ServiceIcon name={service.icon} className="size-7" />
      </span>
      <h3 className="relative mt-5 no-ordinal" style={{ fontSize: "1.4rem" }}>
        <Link to={localizedPath(`/services/${service.slug}`, lang)} className={`transition-colors ${palette?.title ?? "hover:text-[var(--brand-deep-olive)]"}`}>
          {renderServiceName(service.name[lang])}
        </Link>
      </h3>
      <p className={`relative mt-3 flex-1 text-[0.95rem] ${palette?.body ?? "text-[var(--brand-ink-muted)]"}`}>{service.short[lang]}</p>
      <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          to={localizedPath(`/services/${service.slug}`, lang)}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all hover:gap-2.5 ${palette?.primaryLink ?? "text-[var(--brand-deep-olive)]"}`}
        >
          {t("cta.learnMore")}
          <Arrow className="size-4" aria-hidden="true" />
        </Link>
        <a
          href={JANE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm underline-offset-4 transition-colors hover:underline ${palette?.secondaryLink ?? "text-[var(--brand-ink-muted)] hover:text-[var(--brand-deep-olive)]"}`}
        >
          {t("cta.book")}
        </a>
      </div>
    </article>
  );
}
