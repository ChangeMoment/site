import { Seo } from "../components/Seo";
import { Section, LinkButton } from "../components/ui-kit";
import { useLang } from "../i18n/LanguageProvider";

export function NotFound() {
  const { t } = useLang();
  return (
    <>
      <Seo title="404" description={t("common.notFound")} path="/404" noIndex />
      <Section className="pt-40 text-center">
        <div className="mx-auto max-w-lg">
          <span className="font-heading text-7xl text-[var(--brand-sand)]">404</span>
          <h1 className="mt-4">{t("brand.full")}</h1>
          <p className="mt-4 text-[var(--brand-ink-muted)]">
            {t("home.finalCta.body")}
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/" arrow>
              {t("nav.home")}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
