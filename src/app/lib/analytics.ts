export const GTM_CONTAINER_ID = "GTM-T5DG75NW";
export const GA4_MEASUREMENT_ID = "G-DYHQ4QLD1G";

const CONSENT_STORAGE_KEY = "changemoment.analytics-consent";
const SITE_ID = "changemoment";
const SCHEMA_VERSION = "1";

export type AnalyticsConsent = "granted" | "denied" | null;
export type AnalyticsLocale = "en" | "fa" | "fr";

export interface PageViewEvent {
  event: "page_view";
  schema_version: string;
  site_id: string;
  environment: "production";
  locale: AnalyticsLocale;
  page_type: string;
  content_group: string;
  page_path: string;
  article_slug?: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let gtmInitialized = false;
let lastTrackedPath = "";

function normalizePath(pathname: string) {
  const path = pathname.split(/[?#]/, 1)[0] || "/";
  if (path === "/") return path;
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function describeRoute(pathname: string) {
  const pagePath = normalizePath(pathname);
  const segments = pagePath.split("/").filter(Boolean);
  const first = segments[0];
  const locale: AnalyticsLocale = first === "fa" || first === "fr" ? first : "en";
  const routeSegments = locale === "en" ? segments : segments.slice(1);
  const section = routeSegments[0] ?? "";
  const detail = routeSegments[1];

  if (!section) return { locale, pageType: "home", contentGroup: "general", pagePath };
  if (section === "about") return { locale, pageType: "about", contentGroup: "general", pagePath };
  if (section === "team") return { locale, pageType: "team", contentGroup: "general", pagePath };
  if (section === "services") {
    return {
      locale,
      pageType: detail ? "service_detail" : "service_archive",
      contentGroup: "services",
      pagePath,
    };
  }
  if (section === "blogs") {
    return {
      locale,
      pageType: detail ? "article" : "blog_archive",
      contentGroup: "blog",
      pagePath,
      articleSlug: detail,
    };
  }
  if (section === "contact") return { locale, pageType: "contact", contentGroup: "conversion", pagePath };
  if (section === "book") return { locale, pageType: "booking", contentGroup: "conversion", pagePath };
  if (["privacy", "terms", "accessibility"].includes(section)) {
    return { locale, pageType: "legal", contentGroup: "legal", pagePath };
  }
  return { locale, pageType: "not_found", contentGroup: "error", pagePath };
}

export function buildPageViewEvent(pathname: string): PageViewEvent {
  const route = describeRoute(pathname);
  return {
    event: "page_view",
    schema_version: SCHEMA_VERSION,
    site_id: SITE_ID,
    environment: "production",
    locale: route.locale,
    page_type: route.pageType,
    content_group: route.contentGroup,
    page_path: route.pagePath,
    ...(route.articleSlug ? { article_slug: route.articleSlug } : {}),
  };
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function queueGtagCommand(...command: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  // GTM recognizes gtag commands by their Arguments-object shape. Pushing the
  // rest-parameter array looks similar in DevTools but is not interpreted as a
  // Consent Mode command by Tag Assistant.
  // eslint-disable-next-line prefer-rest-params -- GTM requires an Arguments object, not the rest array.
  window.dataLayer.push(arguments);
}

function updateGoogleConsent(analyticsStorage: "granted" | "denied") {
  if (typeof window === "undefined") return;
  queueGtagCommand("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (getAnalyticsConsent() !== "granted") return false;
  if (gtmInitialized || document.querySelector(`script[data-gtm-container="${GTM_CONTAINER_ID}"]`)) {
    gtmInitialized = true;
    return true;
  }

  window.dataLayer = window.dataLayer ?? [];
  queueGtagCommand("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtmContainer = GTM_CONTAINER_ID;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_CONTAINER_ID)}`;
  document.head.appendChild(script);
  gtmInitialized = true;
  return true;
}

export function trackPageView(pathname: string) {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "granted") return false;
  const event = buildPageViewEvent(pathname);
  if (lastTrackedPath === event.page_path) return false;
  initializeAnalytics();
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
  lastTrackedPath = event.page_path;
  return true;
}

export function grantAnalyticsConsent(pathname: string) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
  } catch {
    return false;
  }
  initializeAnalytics();
  updateGoogleConsent("granted");
  return trackPageView(pathname);
}

export function denyAnalyticsConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
  } catch {
    /* The privacy-safe fallback is still not to load GTM. */
  }
  if (gtmInitialized) updateGoogleConsent("denied");
}

function expireAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const cookieNames = document.cookie
    .split(";")
    .map((entry) => entry.split("=", 1)[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${host}; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${host}; SameSite=Lax`;
  }
}

export function resetAnalyticsConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* The next page load will still default to no analytics. */
  }
  if (gtmInitialized) updateGoogleConsent("denied");
  expireAnalyticsCookies();
  window.location.reload();
}
