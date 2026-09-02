import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { AnalyticsConsent } from "./AnalyticsConsent";
import { useLang } from "../i18n/LanguageProvider";
import { describeRoute, trackContentProgress, trackPageView } from "../lib/analytics";

export function Layout() {
  const { t, setLang } = useLang();
  const location = useLocation();

  useEffect(() => {
    const prefix = location.pathname.split("/")[1];
    if (["en", "fa", "fr"].includes(prefix)) {
      setLang(prefix as "en" | "fa" | "fr");
    } else {
      setLang("en");
    }
  }, [location.pathname, setLang]);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const route = describeRoute(location.pathname);
    if (route.pageType !== "article") return;

    const sent = new Set<50 | 90>();
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      for (const threshold of [50, 90] as const) {
        if (percent >= threshold && !sent.has(threshold)) {
          if (trackContentProgress(location.pathname, threshold)) sent.add(threshold);
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--brand-deep-olive)] focus:px-5 focus:py-2.5 focus:text-white"
      >
        {t("common.skipToContent")}
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <FloatingContact />
      <Footer />
      <AnalyticsConsent />
    </div>
  );
}
