export interface ManifestPost { slug?: string }
export interface LocaleRoute {
  code: "en" | "fr" | "fa";
  hreflang: string;
  prefix: string;
  dir: "ltr" | "rtl";
  basePath: string;
  path: string;
}
export const STATIC_PATHS: string[];
export const SERVICE_SLUGS: string[];
export const LEGACY_BLOG_SLUGS: string[];
export const LOCALES: Omit<LocaleRoute, "basePath" | "path">[];
export function localizedPath(path: string, prefix: string): string;
export function basePaths(cmsPosts?: ManifestPost[]): string[];
export function localizedRoutes(cmsPosts?: ManifestPost[]): LocaleRoute[];
