import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { useLang } from "../i18n/LanguageProvider";

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
    </div>
  );
}
