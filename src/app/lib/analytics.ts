export const GTM_CONTAINER_ID = "GTM-T5DG75NW";
export const GA4_MEASUREMENT_ID = "G-DYHQ4QLD1G";

const CONSENT_STORAGE_KEY = "changemoment.analytics-consent";
const SITE_ID = "changemoment";
const SCHEMA_VERSION = "1";

export type AnalyticsConsent = "granted" | "denied" | null;
export type AnalyticsLocale = "en" | "fa" | "fr";
export type AnalyticsEnvironment = "production" | "development";
export type BookingStep = "open_booking_page" | "open_jane";
export type AnalyticsPlacement =
  | "header"
  | "footer"
  | "service_card"
  | "therapist_card"
  | "booking_page"
  | "internal_cta";

interface AnalyticsEventBase {
  schema_version: string;
  site_id: string;
  environment: AnalyticsEnvironment;
  locale: AnalyticsLocale;
}

export interface PageViewEvent extends AnalyticsEventBase {
  event: "page_view";
  page_type: string;
  content_group: string;
  page_path: string;
  article_slug?: string;
}

export interface BookingIntentEvent extends AnalyticsEventBase {
  event: "booking_intent";
  step_id: BookingStep;
  entry_point: string;
  placement: AnalyticsPlacement;
  destination_domain?: "changemoment.janeapp.com";
}

export interface GenerateLeadEvent extends AnalyticsEventBase {
  event: "generate_lead";
  lead_type: "contact_form";
  entry_point: "contact";
}

export interface LanguageChangeEvent extends AnalyticsEventBase {
  event: "language_change";
  from_locale: AnalyticsLocale;
  to_locale: AnalyticsLocale;
  placement: "header";
}

export interface ContentProgressEvent extends AnalyticsEventBase {
  event: "content_progress";
  page_type: "article";
  content_group: "blog";
  article_slug: string;
  percent: 50 | 90;
}

export type ChangeMomentAnalyticsEvent =
  | PageViewEvent
  | BookingIntentEvent
  | GenerateLeadEvent
  | LanguageChangeEvent
  | ContentProgressEvent;

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

function getEnvironment(): AnalyticsEnvironment {
  if (typeof window === "undefined") return "production";
  return window.location.hostname === "changemoment.ca" || window.location.hostname === "www.changemoment.ca"
    ? "production"
    : "development";
}

function buildEventBase(locale: AnalyticsLocale): AnalyticsEventBase {
  return {
    schema_version: SCHEMA_VERSION,
    site_id: SITE_ID,
    environment: getEnvironment(),
    locale,
  };
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
    ...buildEventBase(route.locale),
    page_type: route.pageType,
    content_group: route.contentGroup,
    page_path: route.pagePath,
    ...(route.articleSlug ? { article_slug: route.articleSlug } : {}),
  };
}

export function buildBookingIntentEvent(
  pathname: string,
  stepId: BookingStep,
  placement: AnalyticsPlacement,
): BookingIntentEvent {
  const route = describeRoute(pathname);
  return {
    event: "booking_intent",
    ...buildEventBase(route.locale),
    step_id: stepId,
    entry_point: route.pageType,
    placement,
    // Explicitly clear the field for internal booking events so GTM cannot reuse
    // a destination left in its version-2 data model by an earlier Jane click.
    destination_domain: stepId === "open_jane" ? "changemoment.janeapp.com" : undefined,
  };
}

export function buildGenerateLeadEvent(pathname: string): GenerateLeadEvent {
  const route = describeRoute(pathname);
  return {
    event: "generate_lead",
    ...buildEventBase(route.locale),
    lead_type: "contact_form",
    entry_point: "contact",
  };
}

export function buildLanguageChangeEvent(
  pathname: string,
  toLocale: AnalyticsLocale,
): LanguageChangeEvent {
  const route = describeRoute(pathname);
  return {
    event: "language_change",
    ...buildEventBase(route.locale),
    from_locale: route.locale,
    to_locale: toLocale,
    placement: "header",
  };
}

export function buildContentProgressEvent(
  pathname: string,
  percent: 50 | 90,
): ContentProgressEvent | null {
  const route = describeRoute(pathname);
  if (route.pageType !== "article" || !route.articleSlug) return null;
  return {
    event: "content_progress",
    ...buildEventBase(route.locale),
    page_type: "article",
    content_group: "blog",
    article_slug: route.articleSlug,
    percent,
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

export function isChangeMomentGtmScript(source: string) {
  if (!source) return false;
  try {
    const url = new URL(source, "https://changemoment.ca");
    return url.hostname === "www.googletagmanager.com"
      && url.pathname === "/gtm.js"
      && url.searchParams.get("id") === GTM_CONTAINER_ID;
  } catch {
    return false;
  }
}

function hasExistingGtmScript() {
  return Array.from(document.scripts).some((script) => isChangeMomentGtmScript(script.src));
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (getAnalyticsConsent() !== "granted") return false;
  if (gtmInitialized) return true;

  window.dataLayer = window.dataLayer ?? [];
  queueGtagCommand("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  // Tag Assistant injects the preview-environment loader before the app runs.
  // Reuse any loader for this exact container so Preview and production both
  // execute a single container instance.
  if (hasExistingGtmScript()) {
    gtmInitialized = true;
    return true;
  }

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

export function trackAnalyticsEvent(event: ChangeMomentAnalyticsEvent) {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "granted") return false;
  initializeAnalytics();
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
  return true;
}

export function trackBookingIntent(stepId: BookingStep, placement: AnalyticsPlacement) {
  if (typeof window === "undefined") return false;
  return trackAnalyticsEvent(buildBookingIntentEvent(window.location.pathname, stepId, placement));
}

export function trackGenerateLead(pathname: string) {
  return trackAnalyticsEvent(buildGenerateLeadEvent(pathname));
}

export function trackLanguageChange(pathname: string, toLocale: AnalyticsLocale) {
  const event = buildLanguageChangeEvent(pathname, toLocale);
  if (event.from_locale === event.to_locale) return false;
  return trackAnalyticsEvent(event);
}

export function trackContentProgress(pathname: string, percent: 50 | 90) {
  const event = buildContentProgressEvent(pathname, percent);
  return event ? trackAnalyticsEvent(event) : false;
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
