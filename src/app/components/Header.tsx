import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, CalendarHeart, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LinkButton } from "./ui-kit";
import { useLang } from "../i18n/LanguageProvider";
import { services } from "../data/services";
import { HeaderLogoMark } from "./HeaderLogoMark";

import { formatLgbtqia2sText } from "../lib/lgbtqia";
import { localizedPath, stripLanguagePrefix } from "../lib/seo";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/team", key: "nav.team" },
  { to: "/services", key: "nav.services" },
  { to: "/blogs", key: "nav.blogs" },
  { to: "/contact", key: "nav.contact" },
];

export function Header() {
  const { t, dir, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const currentBasePath = stripLanguagePrefix(location.pathname);
  const localize = (path: string) => localizedPath(path, lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && headerRef.current?.contains(target)) return;
      setOpen(false);
      setMobileServicesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_-12px_rgba(124,128,103,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8" dir="ltr">
        <Link to={localize("/")} aria-label={t("brand.full")} className="shrink-0">
          <HeaderLogoMark
            title={t("brand.full")}
            className="h-[42px] max-w-[238px] [&_svg]:block [&_svg]:h-full [&_svg]:w-auto [&_svg]:max-w-full"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary" dir={dir}>
          {navItems.map((item) =>
            item.to === "/services" ? (
              <div key={item.to} className="relative" onMouseEnter={() => setDesktopServicesOpen(true)} onMouseLeave={() => setDesktopServicesOpen(false)}>
                <NavLink
                  to={localize(item.to)}
                  onClick={() => setDesktopServicesOpen(false)}
                  onFocus={() => setDesktopServicesOpen(true)}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] transition-colors ${
                      isActive
                        ? "text-[var(--brand-deep-olive)]"
                        : "text-[var(--brand-ink)] hover:text-[var(--brand-deep-olive)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(item.key)}
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-300 ${desktopServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                      {isActive && (
                        <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[var(--brand-sage)]" />
                      )}
                    </>
                  )}
                </NavLink>

                <div className={`absolute left-1/2 top-full z-50 w-[28rem] -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${desktopServicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0 pointer-events-none"}`}>
                  <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.5rem] border border-white/70 bg-[rgba(248,249,243,0.82)] p-2.5 shadow-[0_24px_64px_-30px_rgba(52,56,45,0.46)] backdrop-blur-[18px] backdrop-saturate-125">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={localize(`/services/${service.slug}`)}
                          onClick={() => setDesktopServicesOpen(false)}
                          className="group/item rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--brand-sage-soft)] focus-visible:bg-[var(--brand-sage-soft)] focus-visible:outline-none"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="size-1.5 shrink-0 rounded-full bg-[var(--brand-sage)] ring-3 ring-[var(--brand-olive-soft)] transition-colors group-hover/item:bg-[var(--brand-deep-olive)]" />
                            <span className="block text-sm font-medium leading-snug text-[var(--brand-ink)] transition-colors group-hover/item:text-[var(--brand-deep-olive)]">
                              {formatLgbtqia2sText(service.name[lang])}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1.5 border-t border-[var(--brand-muted-olive)]/15 px-3 py-2.5">
                      <Link
                        to={localize("/services")}
                        onClick={() => setDesktopServicesOpen(false)}
                        className="inline-flex items-center text-xs font-medium text-[var(--brand-deep-olive)] underline-offset-4 hover:underline"
                      >
                        {t("cta.viewAll")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={localize(item.to)}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-[0.95rem] transition-colors ${
                    isActive
                      ? "text-[var(--brand-deep-olive)]"
                      : "text-[var(--brand-ink)] hover:text-[var(--brand-deep-olive)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.key)}
                    {isActive && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[var(--brand-sage)]" />
                    )}
                  </>
                )}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3" dir={dir}>
          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitcher />
            <LinkButton to="/book" variant="sage" size="sm">
              <CalendarHeart className="size-4" aria-hidden="true" />
              {t("cta.letsTalk")}
            </LinkButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-sage-soft)] xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden border-t border-[var(--brand-muted-olive)]/20 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mobile-menu-scroll mx-auto flex max-h-[calc(100vh-5rem)] max-w-7xl flex-col gap-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8"
          aria-label={t("nav.menu")}
        >
          {navItems.map((item, i) => (
            <div key={item.to}>
              {item.to === "/services" ? (
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((value) => !value)}
                  aria-expanded={mobileServicesOpen}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg transition-all ${
                    currentBasePath.startsWith("/services")
                      ? "bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]"
                      : "text-[var(--brand-ink)] hover:bg-[var(--brand-sage-soft)]"
                  }`}
                >
                  <span>{t(item.key)}</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <NavLink
                  to={localize(item.to)}
                  end={item.to === "/"}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-lg transition-all ${
                      isActive
                        ? "bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]"
                        : "text-[var(--brand-ink)] hover:bg-[var(--brand-sage-soft)]"
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              )}
              {item.to === "/services" && (
                <div
                  className={`mt-1 grid overflow-hidden rounded-2xl bg-[var(--brand-bone-soft)]/75 transition-[max-height,opacity,padding] duration-300 ${
                    mobileServicesOpen ? "max-h-[52rem] gap-1 p-2 opacity-100" : "max-h-0 gap-0 p-0 opacity-0"
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={localize(`/services/${service.slug}`)}
                      className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm text-[var(--brand-ink-muted)] transition-colors hover:bg-white hover:text-[var(--brand-deep-olive)]"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-[var(--brand-sage)]" />
                      <span>{formatLgbtqia2sText(service.name[lang])}</span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-[var(--brand-muted-olive)]/18 pt-2">
                    <Link
                      to={localize("/services")}
                      className="flex items-center justify-center rounded-xl bg-[#B18369] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9f745e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B18369] focus-visible:ring-offset-2"
                    >
                      {t("cta.viewAll")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div
            className={`mt-3 flex items-center justify-between gap-3 ${
              dir === "rtl" ? "flex-row-reverse" : ""
            }`}
          >
            <LanguageSwitcher />
            <LinkButton to="/book" variant="sage" size="sm" className="flex-1 justify-center">
              <CalendarHeart className="size-4" aria-hidden="true" />
              {t("cta.letsTalk")}
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
