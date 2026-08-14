import type { Lang } from "../i18n/LanguageProvider";
import { SITE_URL } from "./constants";

export const SEO_LOCALES: Record<Lang, string> = {
  en: "en-CA",
  fr: "fr-CA",
  fa: "fa-IR",
};

export function stripLanguagePrefix(pathname: string) {
  const stripped = pathname.replace(/^\/(?:fa|fr)(?=\/|$)/, "");
  return stripped || "/";
}

export function localizedPath(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return normalized;
  return normalized === "/" ? `/${lang}` : `/${lang}${normalized}`;
}

export function localizedUrl(path: string, lang: Lang) {
  return `${SITE_URL}${localizedPath(path, lang)}`;
}

export function absoluteSiteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}
