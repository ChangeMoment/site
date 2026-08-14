import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui-kit";
import { useLang } from "../i18n/LanguageProvider";

type LegalKey = "privacy" | "terms" | "accessibility";

export function Legal({ which }: { which: LegalKey }) {
  const { t } = useLang();
  const path = `/${which}`;
  return (
    <>
      <Seo
        title={t(`legal.${which}.title`)}
        description={t(`legal.${which}.body`)}
        path={path}
        noIndex
      />
      <PageHero title={t(`legal.${which}.title`)} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--brand-ink-muted)]">
            {t(`legal.${which}.body`)}
          </p>
        </div>
      </Section>
    </>
  );
}
