import { ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { ExternalButton, LinkButton } from "../components/ui-kit";
import { CurveDecoration, MomentCurve } from "../components/CurveDecoration";
import { useLang } from "../i18n/LanguageProvider";
import { JANE_URL } from "../lib/constants";

export function Book() {
  const { t } = useLang();

  return (
    <>
      <Seo title={t("book.meta.title")} description={t("book.meta.desc")} path="/book" />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[var(--brand-olive-soft)] pt-28 pb-20 md:pt-32">
        <CurveDecoration
          draw
          className="pointer-events-none absolute right-[-6%] top-16 hidden h-[28rem] w-[40rem] md:block"
          color="var(--brand-sage)"
          opacity={0.5}
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h1>{t("book.heading")}</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--brand-ink-muted)]">
              {t("book.body")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-[var(--brand-muted-olive)]/20 bg-white/60 p-5 text-center shadow-[0_24px_60px_-42px_rgba(81,84,62,0.5)] backdrop-blur md:p-7">
              <article className="rounded-[1.5rem] bg-white p-7 shadow-[0_20px_50px_-35px_rgba(81,84,62,0.45)]">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-bone)] text-[#B18369]">
                  <Sparkles className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl">{t("book.newClientTitle")}</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--brand-ink-muted)]">{t("book.newClientBody")}</p>
                <ExternalButton
                  href={JANE_URL}
                  variant="ghost"
                  className="mt-7 w-full !bg-[#B18369] !text-white shadow-[0_16px_34px_-18px_rgba(91,61,44,0.72)] hover:!bg-[#9f745e] focus-visible:!ring-[#B18369] sm:w-auto"
                  size="lg"
                >
                  {t("cta.freeConsult")}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </ExternalButton>
              </article>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10">
              <MomentCurve className="mx-auto h-16 w-full max-w-xs" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-[var(--brand-ink-muted)]">{t("book.altContact")}</p>
              <LinkButton to="/contact" variant="outline">
                <MessageCircle className="size-4" aria-hidden="true" />
                {t("cta.contact")}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
