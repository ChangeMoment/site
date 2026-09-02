import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useLang } from "../i18n/LanguageProvider";
import { localizedPath } from "../lib/seo";
import {
  denyAnalyticsConsent,
  getAnalyticsConsent,
  grantAnalyticsConsent,
  type AnalyticsConsent as AnalyticsConsentChoice,
} from "../lib/analytics";

export function AnalyticsConsent() {
  const { t, lang, dir } = useLang();
  const location = useLocation();
  const [choice, setChoice] = useState<AnalyticsConsentChoice>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setChoice(getAnalyticsConsent());
    setHasMounted(true);
  }, []);

  // The server cannot read browser storage. Keep the server markup and the
  // browser's first render identical, then reveal the consent prompt only
  // after the saved choice is known. This prevents React hydration recovery
  // for returning visitors and avoids briefly flashing the prompt for them.
  if (!hasMounted || choice !== null) return null;

  const allow = () => {
    grantAnalyticsConsent(location.pathname);
    setChoice("granted");
  };

  const decline = () => {
    denyAnalyticsConsent();
    setChoice("denied");
  };

  return (
    <section
      role="dialog"
      aria-label={t("analyticsConsent.title")}
      aria-describedby="analytics-consent-description"
      dir={dir}
      className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-3xl rounded-3xl border border-[var(--brand-muted-olive)]/30 bg-white/95 p-5 text-[var(--brand-ink)] shadow-[0_24px_70px_-24px_rgba(52,56,45,0.55)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-xl">{t("analyticsConsent.title")}</h2>
          <p id="analytics-consent-description" className="mt-2 text-sm leading-6 text-[var(--brand-ink-muted)]">
            {t("analyticsConsent.body")} {" "}
            <Link
              to={localizedPath("/privacy", lang)}
              className="font-medium text-[var(--brand-deep-olive)] underline underline-offset-4"
            >
              {t("analyticsConsent.privacyLink")}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <button
            type="button"
            onClick={decline}
            className="rounded-full border border-[var(--brand-muted-olive)]/40 bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--brand-bone-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)]"
          >
            {t("analyticsConsent.decline")}
          </button>
          <button
            type="button"
            onClick={allow}
            className="rounded-full bg-[var(--brand-deep-olive)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#686c55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2"
          >
            {t("analyticsConsent.allow")}
          </button>
        </div>
      </div>
    </section>
  );
}
