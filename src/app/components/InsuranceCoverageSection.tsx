import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { ParticipatingInsurers } from "./ParticipatingInsurers";
import { useLang } from "../i18n/LanguageProvider";

export function InsuranceCoverageSection({ variant }: { variant: "home" | "services" }) {
  const { t, tList, lang } = useLang();
  const isCompact = variant === "home";

  return (
    <section
      className={`relative overflow-hidden bg-[var(--brand-deep-olive)] ${isCompact ? "py-16 md:py-20" : "py-20 md:py-28"}`}
      aria-labelledby={`${variant}-insurance-heading`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_88%_80%,rgba(189,151,126,0.18),transparent_34%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {isCompact ? (
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{t("insuranceCoverage.eyebrow")}</p>
              <h2
                id="home-insurance-heading"
                className="mt-3 font-heading text-white"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.35rem)" }}
              >
                {t("home.insurance.heading")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {t("home.insurance.body")}
              </p>
            </div>
            <ParticipatingInsurers
              compact
              className="mx-auto mt-10 max-w-5xl border-t border-white/10 pt-8"
            />
          </Reveal>
        ) : (
          <>
            <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              <Reveal>
                <div className={lang === "fa" ? "text-right" : ""}>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{t("insuranceCoverage.eyebrow")}</p>
                  <h2
                    id="services-insurance-heading"
                    className="mt-3 font-heading text-white"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15 }}
                  >
                    {t("services.insurance.heading")}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                    {t("services.insurance.body")}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-white/50">{t("services.insurance.note")}</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ul className="space-y-5 pt-1">
                  {tList("services.insurance.highlights").map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0">
                      <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-[var(--brand-deep-olive)] shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
                        <CheckCircle2 className="size-4.5" strokeWidth={2.25} />
                      </span>
                      <span className="leading-relaxed text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ParticipatingInsurers
                className="mt-14 border-t border-white/10 pt-10 md:mt-16"
              />
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
