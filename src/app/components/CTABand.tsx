import { Reveal } from "./Reveal";
import { LinkButton } from "./ui-kit";
import { CurveDecoration } from "./CurveDecoration";
import { useLang } from "../i18n/LanguageProvider";

interface CTABandProps {
  heading?: string;
  body?: string;
  primaryTo?: string;
}

export function CTABand({ heading, body, primaryTo = "/book" }: CTABandProps) {
  const { t, lang } = useLang();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--brand-muted-olive)]/20 bg-[var(--brand-bone-soft)] px-6 py-16 text-center md:px-16">
            <CurveDecoration
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-96"
              color="var(--brand-muted-olive)"
              opacity={0.35}
            />
            <CurveDecoration
              className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-96 rotate-180"
              color="var(--brand-sage)"
              opacity={0.4}
            />
            <div className={`relative mx-auto ${lang === "fr" ? "max-w-2xl" : "max-w-6xl"}`}>
              <h2 className={lang === "fr" ? "" : "lg:whitespace-nowrap"}>{heading ?? t("home.finalCta.heading")}</h2>
              <p className={`mx-auto mt-5 text-[var(--brand-ink-muted)] ${lang === "fr" ? "max-w-xl" : "max-w-5xl lg:whitespace-nowrap"}`}>{body ?? t("home.finalCta.body")}</p>
              <p className={`mx-auto mt-4 text-sm leading-6 text-[var(--brand-ink-muted)] ${lang === "fr" ? "max-w-md" : "max-w-[22rem] lg:max-w-none lg:whitespace-nowrap"}`}>{t("home.finalCta.newClientBody")}</p>
              <LinkButton
                to={primaryTo}
                variant="ghost"
                className="mt-8 w-full !bg-[#B18369] !text-white shadow-[0_16px_34px_-18px_rgba(91,61,44,0.72)] hover:!bg-[#9f745e] focus-visible:!ring-[#B18369] sm:w-auto"
                size="md"
                arrow
              >
                {t("cta.freeConsult")}
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
