import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/ui-kit";
import { useLang, type Lang } from "../i18n/LanguageProvider";
import { translations } from "../i18n/translations";

type LegalKey = "privacy" | "terms" | "accessibility";

interface LegalSection {
  title: string;
  body: string;
}

const SCHEMA_TYPE: Record<LegalKey, string> = {
  privacy: "PrivacyPolicy",
  terms: "TermsOfService",
  accessibility: "WebPage",
};

/**
 * Section lists are objects rather than strings, so `t` / `tList` cannot read
 * them. Resolve straight from the dictionary and fall back to English so a
 * missing translation renders real content instead of a raw key.
 */
function legalSections(lang: Lang, which: LegalKey): LegalSection[] {
  const forLang = translations[lang].legal[which].sections as LegalSection[];
  if (forLang.length > 0) return forLang;
  return translations.en.legal[which].sections as LegalSection[];
}

export function Legal({ which }: { which: LegalKey }) {
  const { t, lang } = useLang();
  const sections = legalSections(lang, which);
  const path = `/${which}`;
  const title = t(`legal.${which}.title`);
  const intro = t(`legal.${which}.body`);

  return (
    <>
      <Seo
        title={title}
        description={t(`legal.${which}.metaDesc`)}
        path={path}
        schemaType={SCHEMA_TYPE[which]}
      />
      <PageHero title={title} body={intro} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[var(--brand-ink-muted)]">
            {t("legal.updatedLabel")}: {t("legal.updated")}
          </p>
          <div className="mt-10 space-y-9">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i, 4) * 60}>
                <section>
                  <h2 className="font-heading text-[var(--brand-ink)]" style={{ fontSize: "1.45rem" }}>
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-[var(--brand-ink-muted)]">{section.body}</p>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
