import { Link } from "react-router";
import { MapPin, Phone, Mail, ExternalLink, Instagram, Facebook } from "lucide-react";
import { FooterLogoMark } from "./FooterLogoMark";
import { useLang } from "../i18n/LanguageProvider";
import { services } from "../data/services";
import { CONTACT_EMAIL, CONTACT_PHONE_TEL, JANE_URL } from "../lib/constants";
import { formatLgbtqia2sText } from "../lib/lgbtqia";
import { localizedPath } from "../lib/seo";
import { FooterCredentials } from "./FooterCredentials";

export function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", key: "nav.about" },
    { to: "/team", key: "nav.team" },
    { to: "/services", key: "nav.services" },
    { to: "/blogs", key: "nav.blogs" },
    { to: "/contact", key: "nav.contact" },
    { to: "/book", key: "nav.book" },
  ];

  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-[var(--brand-olive-soft)] text-[#3c4322]">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:py-16">
        <div className="grid gap-7 text-center sm:grid-cols-2 sm:text-start lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <FooterLogoMark
              title={t("brand.full")}
              className="relative left-[10%] mx-auto h-[52px] max-w-[292px] sm:left-0 sm:mx-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-auto [&_svg]:max-w-full"
            />
            <p className="mt-5 hidden max-w-sm text-sm leading-relaxed text-[#3c4322] sm:block">
              {t("footer.description")}
            </p>
            <div className="mt-7 flex justify-start rtl:justify-center sm:mt-5">
              <a
                href={JANE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-deep-olive)] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(124,128,103,0.65)] transition-colors hover:bg-[#686c55]"
              >
                {t("footer.bookCta")}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t("footer.quickLinks")}>
            <h3 className="font-heading text-[#3c4322]" style={{ fontSize: "1.25rem" }}>
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:mt-4 sm:block sm:space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={localizedPath(l.to, lang)} className="text-[#3c4322] transition-colors hover:text-[var(--brand-deep-olive)]">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={t("footer.serviceLinks")} className="hidden sm:block">
            <h3 className="font-heading text-[#3c4322]" style={{ fontSize: "1.25rem" }}>
              {t("footer.serviceLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <Link
                    to={localizedPath(`/services/${s.slug}`, lang)}
                    className="text-[#3c4322] transition-colors hover:text-[var(--brand-deep-olive)]"
                  >
                    {formatLgbtqia2sText(s.name[lang])}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[#3c4322]" style={{ fontSize: "1.25rem" }}>
              {t("footer.contactTitle")}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-[#3c4322] sm:mt-4 sm:space-y-3">
              <li className="hidden items-start gap-2.5 sm:flex">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{t("footer.addressPlaceholder")}</span>
              </li>
              <li className="flex items-center justify-center gap-2.5 sm:justify-start">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  dir="ltr"
                  className="transition-colors hover:text-[var(--brand-deep-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)]"
                >
                  {t("footer.phonePlaceholder")}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2.5 sm:justify-start">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-[var(--brand-deep-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)]"
                >
                  {t("footer.emailPlaceholder")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterCredentials />

        <div className="mt-7 flex flex-col items-center justify-center gap-4 border-t border-[var(--brand-muted-olive)]/20 pt-5 text-center text-xs text-[#3c4322] sm:mt-9 sm:flex-row sm:justify-between sm:text-start sm:text-sm md:pt-6">
          <p className="min-w-0">
            © {year} · {t("footer.rights")}
          </p>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="https://www.instagram.com/changemoment.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--brand-sage)]/35 text-[#3c4322] transition-colors hover:bg-white hover:text-[var(--brand-deep-olive)] sm:size-10"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/people/ChangeMoment-Mental-Health-Center/61592336473451/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--brand-sage)]/35 text-[#3c4322] transition-colors hover:bg-white hover:text-[var(--brand-deep-olive)] sm:size-10"
            >
              <Facebook className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
