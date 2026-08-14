import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations } from "./translations";

export type Lang = "en" | "fa" | "fr";

export const LANGS: { code: Lang; label: string; native: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "EN", native: "English", dir: "ltr" },
  { code: "fa", label: "FA", native: "فارسی", dir: "rtl" },
  { code: "fr", label: "FR", native: "Français", dir: "ltr" },
];

type Dict = Record<string, unknown>;

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  /** translate by dotted key path, falling back to English then the key itself */
  t: (key: string) => string;
  /** translate to a string array (for bullet lists) */
  tList: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolve(dict: Dict, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Dict)) {
      return (acc as Dict)[part];
    }
    return undefined;
  }, dict);
}

const STORAGE_KEY = "changemoment.lang";

/**
 * Critical Persian fonts to preload the moment FA becomes active.
 * These are the two weights that carry almost all Persian text:
 *   - Doran-Bold  → headings (var(--font-fa-heading))
 *   - Pinar-Medium → body copy (var(--font-fa-body), mapped to 400/500)
 * Preloading lets the browser fetch them in parallel immediately instead of
 * only after CSS is parsed and the text is laid out — this is what removes the
 * slow / late font swap seen on mobile and slow connections.
 */
const FA_CRITICAL_FONTS = [
  { href: "/fonts/Doran-Bold.ttf", type: "font/ttf" },
  { href: "/fonts/Pinar-Medium.ttf", type: "font/ttf" },
];

function preloadPersianFonts() {
  if (typeof document === "undefined") return;
  for (const { href, type } of FA_CRITICAL_FONTS) {
    if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) continue;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = type;
    link.href = href;
    // Fonts are always fetched in CORS mode; without this the preload is
    // discarded and re-fetched, defeating the purpose.
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

// Kick off the Persian font download as early as possible (at module load,
// before React even mounts) when the app is opened directly on a FA page.
if (typeof window !== "undefined") {
  const prefix = window.location.pathname.split("/")[1];
  const saved = window.localStorage?.getItem(STORAGE_KEY);
  if (prefix === "fa" || saved === "fa") preloadPersianFonts();
}

export function LanguageProvider({ children, initialLang }: { children: ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (initialLang) return initialLang;
    if (typeof window === "undefined") return "en";
    const prefix = window.location.pathname.split("/")[1] as Lang | undefined;
    return prefix === "fa" || prefix === "fr" ? prefix : "en";
  });

  const dir: "ltr" | "rtl" = lang === "fa" ? "rtl" : "ltr";

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (lang === "fa") preloadPersianFonts();
  }, [lang, dir]);

  const t = useCallback(
    (key: string): string => {
      const val = resolve(translations[lang] as Dict, key);
      if (typeof val === "string") return val;
      const fallback = resolve(translations.en as Dict, key);
      return typeof fallback === "string" ? fallback : key;
    },
    [lang],
  );

  const tList = useCallback(
    (key: string): string[] => {
      const val = resolve(translations[lang] as Dict, key);
      if (Array.isArray(val)) return val as string[];
      const fallback = resolve(translations.en as Dict, key);
      return Array.isArray(fallback) ? (fallback as string[]) : [];
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, dir, setLang, t, tList }),
    [lang, dir, setLang, t, tList],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (ctx) return ctx;

  const fallbackLang: Lang = (() => {
    if (typeof window === "undefined") return "en";
    const prefix = window.location.pathname.split("/")[1] as Lang | undefined;
    return prefix && ["en", "fa", "fr"].includes(prefix) ? prefix : "en";
  })();
  const fallbackDir = fallbackLang === "fa" ? "rtl" : "ltr";

  return {
    lang: fallbackLang,
    dir: fallbackDir,
    setLang: () => {
      /* LanguageProvider is not mounted yet; keep render safe. */
    },
    t: (key: string) => {
      const val = resolve(translations[fallbackLang] as Dict, key);
      if (typeof val === "string") return val;
      const fallback = resolve(translations.en as Dict, key);
      return typeof fallback === "string" ? fallback : key;
    },
    tList: (key: string) => {
      const val = resolve(translations[fallbackLang] as Dict, key);
      if (Array.isArray(val)) return val as string[];
      const fallback = resolve(translations.en as Dict, key);
      return Array.isArray(fallback) ? (fallback as string[]) : [];
    },
  };
}
