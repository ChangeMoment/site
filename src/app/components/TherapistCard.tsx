import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../i18n/LanguageProvider";
import type { Therapist } from "../data/team";
import { therapistImages } from "../data/images";
import { services } from "../data/services";
import { JANE_URL } from "../lib/constants";
import { LANGS } from "../i18n/LanguageProvider";
import { formatLgbtqia2sText } from "../lib/lgbtqia";

export function TherapistCard({ therapist }: { therapist: Therapist }) {
  const { t, lang } = useLang();

  const specialtyNames = therapist.specialties
    .map((id) => services.find((s) => s.id === id)?.name[lang])
    .filter(Boolean) as string[];

  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-muted-olive)]/20 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--brand-bone-soft)]">
        <ImageWithFallback
          src={therapistImages[therapist.id]}
          alt={`${therapist.name}, ${therapist.role[lang]}`}
          className="size-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 style={{ fontSize: "1.4rem" }}>{therapist.name}</h3>
        <p className="mt-1 text-sm text-[var(--brand-deep-olive)]">{therapist.role[lang]}</p>

        <p className="mt-4 text-sm leading-relaxed text-[var(--brand-ink-muted)]">
          {therapist.bio[lang]}
        </p>

        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium text-[var(--brand-ink)]">{t("team.card.languages")}:</dt>
            <dd className="text-[var(--brand-ink-muted)]">
              {therapist.languages
                .map((code) => LANGS.find((l) => l.code === code)?.native ?? code)
                .join(" · ")}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--brand-ink)]">{t("team.card.specialties")}:</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {specialtyNames.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-[var(--brand-sage-soft)] px-2.5 py-1 text-xs text-[var(--brand-ink)]"
                >
                  {formatLgbtqia2sText(name)}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <a
          href={JANE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-deep-olive)]/45 px-5 py-2.5 text-sm font-medium text-[var(--brand-deep-olive)] transition-all hover:bg-[var(--brand-deep-olive)] hover:text-white"
        >
          {t("cta.bookWith")}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
