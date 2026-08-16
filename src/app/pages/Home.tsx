import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Languages,
  Video,
  CheckCircle2,
  Compass,
  CalendarCheck,
  Footprints,
  CalendarHeart,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeading, Eyebrow, LinkButton } from "../components/ui-kit";
import { BlogCard } from "../components/BlogCard";
import { CTABand } from "../components/CTABand";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import { CurveDecoration } from "../components/CurveDecoration";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLang } from "../i18n/LanguageProvider";
import { services } from "../data/services";
import { blogPosts } from "../data/blogs";
import changeMomentHeroImage from "../../imports/1086__1_.jpg";
import secondSectionImage from "../../imports/Second_Section_of_Changemoment.jpg";
import founderSpotlightImage from "../../imports/image-2.png";
import { formatLgbtqia2sText as renderSupportServiceName } from "../lib/lgbtqia";

const trustIcons = [Languages, ShieldCheck, Sparkles, Heart, Video, CalendarCheck];
const howIcons = [Compass, Sparkles, CalendarCheck, Footprints];


const supportCardCornerClass: Record<string, string> = {
  "online-counselling": "rounded-[2.75rem] rounded-br-none",
  "individual-counselling": "rounded-[2.75rem] rounded-bl-none",
  "anxiety": "rounded-[2.75rem] rounded-tr-none",
  "depression": "rounded-[2.75rem] rounded-tl-none",
  "relationship-and-couples-counselling": "rounded-[2.75rem] rounded-br-none",
  "family-counselling": "rounded-[2.75rem] rounded-bl-none",
  "trauma": "rounded-[2.75rem] rounded-tr-none",
  "grief-and-loss": "rounded-[2.75rem] rounded-tl-none",
  "adhd": "rounded-[2.75rem] rounded-br-none",
  "prenatal-and-pregnancy": "rounded-[2.75rem] rounded-bl-none",
  "cvap-clients": "rounded-[2.75rem] rounded-tr-none",
  "icbc-clients": "rounded-[2.75rem] rounded-tl-none",
  "anger-management": "rounded-[2.75rem]",
  "lgbtqia2s": "rounded-[2.75rem]",
  ifhp: "rounded-[2.75rem] rounded-br-none",
};

const supportGatherOffsets = [
  { x: -90, y: -50, r: -2 },
  { x: -35, y: -75, r: 1 },
  { x: 35, y: -75, r: -1 },
  { x: 90, y: -50, r: 2 },
  { x: -95, y: 10, r: 1.5 },
  { x: -35, y: 25, r: -1 },
  { x: 35, y: 25, r: 1 },
  { x: 95, y: 10, r: -1.5 },
  { x: -85, y: 55, r: -1 },
  { x: -30, y: 70, r: 1.5 },
  { x: 30, y: 70, r: -1.5 },
  { x: 85, y: 55, r: 1 },
  { x: -55, y: 90, r: 1 },
  { x: 55, y: 90, r: -1 },
  { x: 0, y: 115, r: 0 },
];

export function Home() {
  const { t, tList, lang } = useLang();
  const supportSectionRef = useRef<HTMLDivElement | null>(null);
  const previewBlogs = blogPosts.slice(0, 3);

  useEffect(() => {
    const section = supportSectionRef.current;
    if (!section) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(() => {
            section.classList.add("is-visible");
            window.setTimeout(() => section.classList.add("is-complete"), isMobile ? 950 : 2200);
          });

          observer.unobserve(section);
        }
      },
      isMobile
        ? { threshold: 0.01, rootMargin: "45% 0px 18% 0px" }
        : { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title={t("home.meta.title")}
        description={t("home.meta.desc")}
        path="/"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[720px] overflow-hidden bg-white pt-28 md:min-h-[780px] md:pt-32 lg:min-h-[984px]">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0 z-0 bg-[var(--brand-olive-soft)]">
          <ImageWithFallback
            src={changeMomentHeroImage}
            alt={t("home.hero.photoAlt")}
            className="home-hero-image size-full object-cover object-[82%_50%] md:object-[68%_50%] lg:object-[64%_50%]"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Atmospheric light: soft readable wash from the left and bottom-left, not a hard overlay */}
        <div className="home-hero-linear pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0.62)_34%,rgba(255,255,255,0.26)_58%,rgba(255,255,255,0)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_27%,rgba(255,255,255,0.48)_48%,rgba(255,255,255,0.12)_70%,rgba(255,255,255,0)_100%)]" />
        <div className="home-hero-radial pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_8%_72%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.5)_30%,rgba(255,255,255,0.18)_55%,rgba(255,255,255,0)_78%)] md:bg-[radial-gradient(circle_at_10%_76%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.88)_25%,rgba(255,255,255,0.38)_50%,rgba(255,255,255,0)_73%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-white/45 to-transparent md:from-white/75" />


        <div
          className={`relative z-10 mx-auto flex min-h-[592px] w-full max-w-7xl items-center px-5 pb-20 sm:px-8 md:min-h-[648px] lg:min-h-[826px] ${
            lang === "fa" ? "justify-start [direction:ltr]" : ""
          }`}
        >
          <div
            dir={lang === "fa" ? "rtl" : undefined}
            className={`max-w-[34rem] translate-y-8 lg:translate-y-12 ${lang === "fr" ? "lg:w-[70%] lg:max-w-[58rem]" : "lg:w-[62%] lg:max-w-[64rem]"}`}
          >
            <Reveal delay={80}>
              <h1
                className={`fa-hero-title mt-6 font-semibold tracking-[-0.005em] text-[var(--brand-ink)] ${lang === "fr" ? "max-w-[34rem] lg:max-w-[58rem] lg:whitespace-nowrap" : "max-w-[64rem]"} ${
                  lang === "fa"
                    ? "text-[clamp(1.62rem,2.75vw,2.85rem)] leading-[1.46]"
                    : "text-[clamp(2.08rem,3.28vw,3.62rem)] leading-[1.1]"
                }`}
              >
                {t("home.hero.heading1")}
                <span className="mt-3 block text-[#C0C79E]">
                  {t("home.hero.heading2")}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[31rem] text-base leading-7 text-[var(--brand-ink-muted)] md:text-[1.05rem] md:leading-8">
                {t("home.hero.shortBody")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={`home-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:items-center ${lang === "fa" ? "items-end" : "items-start"}`}>
                <LinkButton
                  to="/book"
                  variant="ghost"
                  size="md"
                  className="w-[17rem] max-w-full whitespace-nowrap !bg-[#B18369] !text-white text-sm shadow-[0_16px_34px_-18px_rgba(91,61,44,0.72)] hover:!bg-[#9f745e] focus-visible:!ring-[#B18369] sm:w-auto sm:text-base"
                  arrow
                >
                  {t("cta.freeConsult")}
                </LinkButton>
                <LinkButton
                  to="/services"
                  variant="ghost"
                  size="md"
                  className="w-[17rem] max-w-full whitespace-nowrap !border !border-[#B18369]/55 !bg-[#E8DDD0]/92 !text-[#654837] text-sm shadow-[0_14px_30px_-22px_rgba(91,61,44,0.62)] hover:!border-[#B18369] hover:!bg-[#DDBDA6] hover:!text-[#4f382c] focus-visible:!ring-[#B18369] sm:w-auto sm:text-base"
                >
                  {t("cta.exploreServices")}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tagline statement ─────────────────────────────────── */}
      <section className="bg-white py-9 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-[22rem] flex-col items-center justify-center gap-4 sm:max-w-[32rem] md:max-w-none md:flex-row md:gap-8">
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B18369]/45 to-transparent md:w-auto md:flex-1 md:bg-gradient-to-r md:from-transparent md:via-[#B18369]/35 md:to-[#B18369]/10" aria-hidden="true" />
              <p
                className={`text-balance text-center font-heading text-[var(--brand-ink)] md:shrink-0 ${
                  lang === "fa"
                    ? "max-w-[20rem] text-[clamp(1.28rem,6.8vw,1.9rem)] leading-[1.45] sm:max-w-[28rem] md:max-w-3xl md:text-[clamp(1.35rem,2.55vw,2.25rem)] md:leading-[1.38]"
                    : "max-w-[20rem] text-[clamp(1.65rem,8.4vw,2.35rem)] leading-[1.08] sm:max-w-[30rem] md:max-w-none md:whitespace-nowrap md:text-[clamp(1.85rem,3.35vw,3.35rem)] md:leading-none"
                }`}
              >
                {t("home.taglineBand.line")}
              </p>
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B18369]/45 to-transparent md:w-auto md:flex-1 md:bg-gradient-to-l md:from-transparent md:via-[#B18369]/35 md:to-[#B18369]/10" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Welcome / why choose ─────────────────────────────── */}
      <Section bg="sage-soft">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal className="h-full">
            <div className="relative h-full">
              <CurveDecoration
                className="pointer-events-none absolute -left-8 -top-8 h-40 w-56"
                color="var(--brand-muted-olive)"
                opacity={0.6}
              />
              <div className="relative min-h-[440px] overflow-hidden rounded-[2.25rem] rounded-bl-[5rem] bg-[var(--brand-olive-soft)] shadow-[0_32px_78px_-26px_rgba(52,56,45,0.42)] lg:h-full lg:min-h-[560px]">
                <ImageWithFallback
                  src={secondSectionImage}
                  alt={t("home.welcome.photoAlt")}
                  className="absolute inset-0 size-full object-cover object-[54%_50%]"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>

          <div className="flex items-center">
            <div>
              <Reveal>
                <Eyebrow className={lang === "fa" ? "welcome-eyebrow-fa !tracking-normal [letter-spacing:0!important]" : ""}>{t("home.welcome.eyebrow")}</Eyebrow>
              <p className="mt-3 font-heading text-2xl text-[var(--brand-muted-olive)]">
                {t("home.welcome.subtitle")}
              </p>
              <h2 className="mt-4">{t("home.welcome.heading")}</h2>
              <p className="mt-5 text-[var(--brand-ink-muted)]">{t("home.welcome.body")}</p>
            </Reveal>
            <ul className="mt-7 space-y-3.5">
              {tList("home.welcome.points").map((point, i) => (
                <Reveal as="li" key={i} delay={i * 70} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-sage)]"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--brand-ink)]">{point}</span>
                </Reveal>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── How we can support you ───────────────────────────── */}
      <Section className="bg-white">
        <div ref={supportSectionRef} className="support-gather-section overflow-visible" dir="ltr">
        <SectionHeading
          center
          className={lang === "fa" ? "home-support-heading-fa" : lang === "fr" ? "md:max-w-none lg:max-w-4xl [&_h2]:md:whitespace-nowrap" : ""}
          title={t("home.support.heading")}
        />

        <div dir={lang === "fa" ? "rtl" : "ltr"} className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {services.slice(0, 12).map((service, i) => {
            const isSage = (Math.floor(i / 4) + (i % 4)) % 2 === 1;
            return (
              <article
                key={service.id}
                dir={lang === "fa" ? "rtl" : "ltr"}
                className={`support-card-gather flex min-h-[220px] flex-col items-center justify-center rounded-[0_2.75rem_0_2.75rem] px-5 py-7 text-center shadow-[0_26px_54px_-22px_rgba(52,56,45,0.38)] ${isSage ? "bg-[#C0C79E]" : "bg-[var(--brand-bone)]"}`}
                style={{
                  "--gather-x": `${supportGatherOffsets[i].x}px`,
                  "--gather-y": `${supportGatherOffsets[i].y}px`,
                  "--gather-rotate": `${supportGatherOffsets[i].r}deg`,
                  "--gather-delay": `${i * 60}ms`,
                } as CSSProperties}
              >
                <h3
                  className={`fa-support-card-title max-w-[18rem] text-[var(--brand-ink)] ${
                    lang === "fa" ? "text-[0.98rem] leading-[1.62]" : "text-[1.18rem] leading-tight"
                  }`}
                >
                  {renderSupportServiceName(service.name[lang])}
                </h3>
                <p className="mt-3 max-w-[15rem] text-[0.8rem] leading-5 text-[var(--brand-ink-muted)]">
                  {service.short[lang]}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-white/88 px-5 py-2 text-xs font-medium text-[var(--brand-deep-olive)] transition-colors duration-300 hover:bg-[var(--brand-sage-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2"
                >
                  {t("cta.readMore")}
                </Link>
              </article>
            );
          })}
        </div>
        <div dir={lang === "fa" ? "rtl" : "ltr"} className="mt-5 flex flex-wrap justify-center gap-5">
          {services.slice(12, 15).map((service, j) => {
            const i = j + 12;
            const isSage = i === 13;
            return (
              <article
                key={service.id}
                dir={lang === "fa" ? "rtl" : "ltr"}
                className={`support-card-gather flex min-h-[220px] w-full flex-col items-center justify-center rounded-[0_2.75rem_0_2.75rem] px-5 py-7 text-center shadow-[0_26px_54px_-22px_rgba(52,56,45,0.38)] sm:w-[calc((100%-20px)/2)] md:w-[calc((100%-60px)/4)] ${isSage ? "bg-[#C0C79E]" : "bg-[var(--brand-bone)]"}`}
                style={{
                  "--gather-x": `${supportGatherOffsets[i].x}px`,
                  "--gather-y": `${supportGatherOffsets[i].y}px`,
                  "--gather-rotate": `${supportGatherOffsets[i].r}deg`,
                  "--gather-delay": `${i * 60}ms`,
                } as CSSProperties}
              >
                <h3
                  className={`fa-support-card-title max-w-[18rem] text-[var(--brand-ink)] ${
                    lang === "fa" ? "text-[0.98rem] leading-[1.62]" : "text-[1.18rem] leading-tight"
                  }`}
                >
                  {renderSupportServiceName(service.name[lang])}
                </h3>
                <p className="mt-3 max-w-[15rem] text-[0.8rem] leading-5 text-[var(--brand-ink-muted)]">
                  {service.short[lang]}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-white/88 px-5 py-2 text-xs font-medium text-[var(--brand-deep-olive)] transition-colors duration-300 hover:bg-[var(--brand-sage-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2"
                >
                  {t("cta.readMore")}
                </Link>
              </article>
            );
          })}
        </div>
        </div>
      </Section>

      {/* ── How it works ─────────────────────────────────────── */}
      <Section bg="bone-soft">
        <Reveal>
          <SectionHeading center title={t("home.how.heading")} subtitle={t("home.how.subtitle")} />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => {
            const Icon = howIcons[i];
            const step = {
              title: t(`home.how.steps.${i}.title`),
              body: t(`home.how.steps.${i}.body`),
            };
            return (
              <Reveal as="li" key={i} delay={i * 80}>
                <div className="relative flex h-full flex-col rounded-3xl bg-white/70 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`fa-step-number font-heading leading-none text-[var(--brand-muted-olive)] ${
                        lang === "fa" ? "text-4xl" : "text-5xl"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                      <Icon className="size-5.5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3
                    className={`fa-how-card-title mt-5 ${lang === "fa" ? "text-[1rem] leading-[1.62]" : ""}`}
                    style={lang === "fa" ? undefined : { fontSize: "1.25rem" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--brand-ink-muted)]">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* ── Direct billing ───────────────────────────────────── */}
      <InsuranceCoverageSection variant="home" />

      {/* ── Trust ────────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading center title={t("home.trust.heading")} subtitle={t("home.trust.subtitle")} />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tList("home.trust.items").map((item, i) => {
            const Icon = trustIcons[i] ?? ShieldCheck;
            return (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--brand-muted-olive)]/20 bg-white p-5 sage-glow transition-shadow">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className={`font-heading text-[var(--brand-ink)] ${lang === "fa" ? "text-[0.98rem] sm:whitespace-nowrap" : "text-xl"}`}>{item}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── Team preview ─────────────────────────────────────── */}
      <Section bg="bone-soft">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal className="h-full">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2.25rem] rounded-bl-[5rem] bg-[var(--brand-olive-soft)] shadow-[0_24px_58px_-38px_rgba(52,56,45,0.42)] lg:min-h-[540px]">
              <ImageWithFallback
                src={founderSpotlightImage}
                alt={t("home.teamPreview.photoAlt")}
                className="absolute inset-0 size-full object-cover object-[52%_50%]"
                loading="eager"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p
                className={`max-w-2xl font-heading text-[var(--brand-ink)] ${
                  lang === "fa"
                    ? "text-[clamp(1.18rem,2.05vw,1.95rem)] leading-[2.25]"
                    : "text-[clamp(1.55rem,2.75vw,2.65rem)] leading-[1.16]"
                }`}
              >
                {t("home.teamPreview.spotlight")}
              </p>
              <p className="mt-6 max-w-xl text-[var(--brand-ink-muted)]">
                {t("home.teamPreview.body")}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8">
                <LinkButton
                  to="/book"
                  variant="ghost"
                  size="lg"
                  className="!bg-[#B18369] !text-white shadow-[0_16px_34px_-18px_rgba(91,61,44,0.72)] hover:!bg-[#9f745e] focus-visible:!ring-[#B18369]"
                >
                  <CalendarHeart className="size-5" aria-hidden="true" />
                  {t("cta.freeConsult")}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Blog preview ─────────────────────────────────────── */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={t("home.blogPreview.eyebrow")}
              title={t("home.blogPreview.heading")}
              subtitle={t("home.blogPreview.subtitle")}
            />
          </Reveal>
          <Reveal delay={120}>
            <LinkButton to="/blogs" variant="outline" arrow>
              {t("cta.readArticles")}
            </LinkButton>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewBlogs.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
