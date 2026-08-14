import { useEffect, useMemo, useRef } from "react";
import { useLang } from "../i18n/LanguageProvider";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  SITE_NAME,
  SITE_URL,
} from "../lib/constants";
import { absoluteSiteUrl, localizedUrl, SEO_LOCALES } from "../lib/seo";
import { useSeoCollector } from "./SeoCollector";

interface SeoProps {
  title: string;
  description: string;
  /** path beginning with / for the English canonical URL */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  schemaType?: string | string[];
  noIndex?: boolean;
  publishedTime?: string;
  /** extra JSON-LD objects to inject into the shared @graph */
  jsonLd?: Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertHreflang(hreflang: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = "alternate";
    el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

function syncMetaList(property: string, values: string[]) {
  document.head
    .querySelectorAll<HTMLMetaElement>(`meta[property="${property}"][data-cm-seo-list]`)
    .forEach((el) => el.remove());

  values.forEach((content) => {
    const el = document.createElement("meta");
    el.setAttribute("property", property);
    el.setAttribute("content", content);
    el.dataset.cmSeoList = "true";
    document.head.appendChild(el);
  });
}

const JSONLD_ID = "cm-jsonld";
const TITLE_BRAND = "ChangeMoment";

function conciseDescription(value: string, maxLength = 160) {
  if (value.length <= maxLength) return value;
  const candidate = value.slice(0, maxLength + 1);
  const lastSpace = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, lastSpace > 100 ? lastSpace : maxLength).trim()}…`;
}

export function Seo({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  schemaType = "WebPage",
  noIndex = false,
  publishedTime,
  jsonLd = [],
}: SeoProps) {
  const { lang } = useLang();
  const fullTitle = title.includes(SITE_NAME) || title.endsWith(TITLE_BRAND)
    ? title
    : `${title} · ${TITLE_BRAND}`;
  const seoDescription = conciseDescription(description);
  const url = localizedUrl(path, lang);
  const ogImage = absoluteSiteUrl(image ?? "/og-image.jpg");
  const ogImageAlt = imageAlt ?? `${SITE_NAME} — counselling and mental health support`;
  const locale = SEO_LOCALES[lang];
  const collector = useSeoCollector();

  // Inline JSON-LD arrays get a new identity on parent renders. A primitive key
  // prevents the head from being rewritten unless the actual schema changes.
  const jsonLdKey = JSON.stringify(jsonLd);

  const structuredData = useMemo(() => {
    const organization: Record<string, unknown> = {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "ChangeMoment",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: CONTACT_PHONE_TEL,
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#211 - 3030 Lincoln Avenue",
        addressLocality: "Coquitlam",
        addressRegion: "BC",
        postalCode: "V3B 6B4",
        addressCountry: "CA",
      },
      areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" },
      availableService: {
        "@type": "MedicalTherapy",
        name: "Counselling and psychotherapy",
      },
      sameAs: [
        "https://www.instagram.com/changemoment.ca",
        "https://www.facebook.com/people/ChangeMoment-Mental-Health-Center/61592336473451/",
      ],
    };

    const website: Record<string, unknown> = {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "ChangeMoment",
      inLanguage: Object.values(SEO_LOCALES),
      publisher: { "@id": `${SITE_URL}/#organization` },
    };

    const webPage: Record<string, unknown> = {
      "@type": schemaType,
      "@id": `${url}#webpage`,
      url,
      name: fullTitle,
      description: seoDescription,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        caption: ogImageAlt,
      },
    };

    const extras = (JSON.parse(jsonLdKey) as Record<string, unknown>[]).map(
      ({ "@context": _context, ...item }) => item,
    );
    return {
      "@context": "https://schema.org",
      "@graph": [organization, website, webPage, ...extras],
    };
  }, [fullTitle, jsonLdKey, locale, ogImage, ogImageAlt, schemaType, seoDescription, url]);

  const robots = noIndex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const alternates = useMemo(() => [
    { hreflang: "en-CA", href: localizedUrl(path, "en") },
    { hreflang: "fr-CA", href: localizedUrl(path, "fr") },
    { hreflang: "fa-IR", href: localizedUrl(path, "fa") },
    { hreflang: "x-default", href: localizedUrl(path, "en") },
  ], [path]);

  if (collector && typeof document === "undefined") {
    collector({
      title: fullTitle,
      description: seoDescription,
      robots,
      type,
      url,
      image: ogImage,
      imageAlt: ogImageAlt,
      locale,
      publishedTime,
      alternates,
      structuredData,
    });
  }

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta("name", "description", seoDescription);
    upsertMeta(
      "name",
      "robots",
      robots,
    );
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", seoDescription);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", ogImageAlt);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", seoDescription);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", ogImageAlt);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", locale.replace("-", "_"));
    syncMetaList(
      "og:locale:alternate",
      Object.values(SEO_LOCALES)
        .filter((value) => value !== locale)
        .map((value) => value.replace("-", "_")),
    );

    if (type === "article" && publishedTime) {
      upsertMeta("property", "article:published_time", publishedTime);
    } else {
      document.head.querySelector('meta[property="article:published_time"]')?.remove();
    }

    upsertLink("canonical", url);
    alternates.forEach(({ hreflang, href }) => upsertHreflang(hreflang, href));

    let script = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSONLD_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [
    fullTitle,
    seoDescription,
    url,
    ogImage,
    ogImageAlt,
    type,
    schemaType,
    robots,
    publishedTime,
    locale,
    alternates,
    structuredData,
  ]);

  // Scroll only on real navigation, never for metadata-only re-renders.
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if (lastPath.current === path) return;
    lastPath.current = path;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  return null;
}
