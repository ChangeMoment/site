import {
  Layers,
  Rainbow,
  ShieldCheck,
  HeartHandshake,
  FlaskConical,
  Sprout,
  Network,
  Globe2,
  Sparkles,
  Languages,
  CalendarCheck,
  Wallet,
  FileCheck2,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";
import type { CSSProperties } from "react";
import ChangeMomentLogo from "../../imports/ChangeMomentLogo";
import bitaFounderImage from "../../imports/bita-ramezannia-founder.jpg";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeading, LinkButton } from "../components/ui-kit";
import { CTABand } from "../components/CTABand";
import { MomentCurve } from "../components/CurveDecoration";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { JaneNotice } from "../components/JaneNotice";
import { ParticipatingInsurers } from "../components/ParticipatingInsurers";
import { useLang } from "../i18n/LanguageProvider";
import { absoluteSiteUrl } from "../lib/seo";

const valueIcons = [Layers, Rainbow, ShieldCheck, HeartHandshake, FlaskConical, Sprout, Network, Globe2, Sparkles];

export function About() {
  const { t, lang } = useLang();
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Seo
        title={t("about.meta.title")}
        description={t("about.meta.desc")}
        path="/about"
        schemaType="AboutPage"
        jsonLd={[
          {
            "@type": "Person",
            "@id": "https://changemoment.ca/about#bita-ramezannia",
            name: "Bita Ramezannia",
            jobTitle: t("about.founder.role"),
            image: absoluteSiteUrl(bitaFounderImage),
            worksFor: { "@id": "https://changemoment.ca/#organization" },
          },
        ]}
      />

      <PageHero
        title={t("about.hero.heading")}
        body={t("about.hero.body")}
        mirrorDecoration={lang === "fa"}
      >
        <p className="mb-4 font-heading text-lg text-[var(--brand-copper)] md:text-xl">
          {t("about.hero.tagline")}
        </p>
        <LinkButton to="/book" arrow>
          {t("cta.book")}
        </LinkButton>
      </PageHero>

      {/* Meaning of ChangeMoment */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading title={t("about.meaning.heading")} />
              <p className="mt-5 text-[var(--brand-ink-muted)]">{t("about.meaning.body1")}</p>
              <p className="mt-4 text-[var(--brand-ink-muted)]">{t("about.meaning.body2")}</p>
              <div className="mt-8 max-w-sm">
                <MomentCurve className="h-20 w-[18rem] -translate-x-8 rtl:translate-x-8" />
                <p className="mt-1 text-sm italic text-[var(--brand-deep-olive)]">
                  {t("services.detail.momentCaption")}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto flex min-h-[280px] w-full max-w-[400px] items-center justify-center md:min-h-[320px] lg:min-h-[380px]">
              <div
                role="img"
                aria-label="ChangeMoment"
                className="h-[17rem] w-[14.85rem] text-[var(--brand-copper)] drop-shadow-[0_22px_34px_rgba(91,61,44,0.14)] md:h-[19rem] md:w-[16.6rem] lg:h-[21rem] lg:w-[18.35rem]"
                style={{ "--fill-0": "currentColor" } as CSSProperties}
              >
                <ChangeMomentLogo />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Founder */}
      <Section bg="sage-soft">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-2xl">
              <div
                className="absolute -bottom-3 -left-3 size-28 rounded-bl-[2.75rem] border-b border-l border-[var(--brand-copper)]/45 md:-bottom-5 md:-left-5 md:size-40"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2.75rem] rounded-tr-none bg-[var(--brand-olive-soft)] shadow-[0_24px_60px_rgba(52,56,45,0.14)]">
                <ImageWithFallback
                  src={bitaFounderImage}
                  alt={t("about.founder.photoAlt")}
                  className="aspect-[4/3] w-full object-cover object-[50%_44%] sm:aspect-[3/2] lg:aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto max-w-xl lg:mx-0">
              <blockquote className="border-s-2 border-[var(--brand-copper)]/65 ps-6 md:ps-8">
                <p className="font-heading text-[1.4rem] leading-[1.65] text-[var(--brand-ink)] md:text-[1.65rem] md:leading-[1.58] fa:font-body fa:text-[1.08rem] fa:leading-[2.05] md:fa:text-[1.18rem]">
                  {t("about.founder.quote")}
                </p>
                <footer className="mt-6 text-sm font-semibold tracking-[0.08em] text-[var(--brand-copper)]" dir="ltr">
                  Bita Ramezannia M.A., R.C.C
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <Section bg="bone">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading center title={t("about.mission.heading")} />
            <p className="mt-6 font-heading text-2xl leading-relaxed text-[var(--brand-ink)] md:text-3xl">
              {t("about.mission.body")}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Values */}
      <Section>
        <Reveal>
          <SectionHeading center title={t("about.values.heading")} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="card-lift h-full rounded-3xl border border-[var(--brand-muted-olive)]/20 bg-white p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5" style={{ fontSize: "1.3rem" }}>
                    {t(`about.values.items.${i}.title`)}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-[var(--brand-ink-muted)]">
                    {t(`about.values.items.${i}.body`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Multilingual + booking */}
      <Section bg="sage-soft">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-white/70 p-9 backdrop-blur">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                <Languages className="size-6" strokeWidth={1.5} />
              </span>
              <h2 className="mt-5" style={{ fontSize: "1.9rem" }}>
                {t("about.multilingual.heading")}
              </h2>
              <p className="mt-4 text-[var(--brand-ink-muted)]">{t("about.multilingual.body")}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-3xl bg-white/70 p-9 backdrop-blur">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                <CalendarCheck className="size-6" strokeWidth={1.5} />
              </span>
              <h2 className="mt-5" style={{ fontSize: "1.9rem" }}>
                {t("about.janeBlock.heading")}
              </h2>
              <p className="mt-4 text-[var(--brand-ink-muted)]">{t("about.janeBlock.body")}</p>
              <div className="mt-6">
                <JaneNotice variant="muted" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Direct Billing */}
      <section id="insurance-coverage" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--brand-deep-olive)]/65">{t("about.directBilling.eyebrow")}</p>
              <h2 className="font-heading text-[var(--brand-deep-olive)]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)", lineHeight: 0.98 }}>{t("about.directBilling.heading")}</h2>
              <p className="mt-5 font-heading text-[var(--brand-copper)]" style={{ fontSize: "clamp(1.45rem, 2.8vw, 2.35rem)", lineHeight: 1.15 }}>
                {t("about.directBilling.tagline")}
              </p>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[var(--brand-ink-muted)]">{t("about.directBilling.intro")}</p>
            </div>
          </Reveal>

          {/* Benefit cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {([
              { key: "0", Icon: Wallet },
              { key: "1", Icon: FileCheck2 },
              { key: "2", Icon: ScanSearch },
            ] as const).map(({ key, Icon }, i) => (
              <Reveal key={key} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-[var(--brand-muted-olive)]/20 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(52,56,45,0.32)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-[var(--brand-ink)]" style={{ fontSize: "1.15rem" }}>{t(`about.directBilling.benefits.${key}.title`)}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--brand-ink-muted)]">{t(`about.directBilling.benefits.${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How it works */}
          <Reveal delay={80}>
            <div className="mt-14 rounded-[2.5rem] rounded-tr-none border border-[var(--brand-muted-olive)]/18 bg-[var(--brand-olive-soft)] p-8 md:p-10">
              <h3 className="text-center text-[var(--brand-ink)]" style={{ fontSize: "1.5rem" }}>{t("about.directBilling.stepsHeading")}</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {(["0", "1", "2"] as const).map((key, i) => (
                  <div key={key} className="flex gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-copper)] text-sm text-white">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-heading text-[var(--brand-ink)]" style={{ fontSize: "1rem" }}>{t(`about.directBilling.steps.${key}.title`)}</p>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--brand-ink-muted)]">{t(`about.directBilling.steps.${key}.body`)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--brand-muted-olive)]/18 bg-white/70 px-5 py-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand-deep-olive)]" strokeWidth={1.75} />
                <p className="text-[0.95rem] leading-relaxed text-[var(--brand-ink-muted)]">{t("about.directBilling.note")}</p>
              </div>
            </div>
          </Reveal>

          {/* Insurance providers */}
          <Reveal delay={120}>
            <ParticipatingInsurers
              className="mt-14 rounded-[2rem] border border-[var(--brand-muted-olive)]/16 bg-white px-5 py-7 shadow-[0_18px_42px_-34px_rgba(52,56,45,0.28)] md:mt-16 md:px-9"
            />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
