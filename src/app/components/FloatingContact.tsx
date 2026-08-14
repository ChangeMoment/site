import { Mail, Phone } from "lucide-react";
import { useLang } from "../i18n/LanguageProvider";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "../lib/constants";

export function FloatingContact() {
  const { t } = useLang();

  const actions = [
    {
      href: `tel:${CONTACT_PHONE_TEL}`,
      label: t("common.callChangeMoment"),
      visible: CONTACT_PHONE_DISPLAY,
      Icon: Phone,
    },
    {
      href: `mailto:${CONTACT_EMAIL}`,
      label: t("common.emailChangeMoment"),
      visible: CONTACT_EMAIL,
      Icon: Mail,
    },
  ];

  return (
    <aside
      aria-label={t("common.quickContact")}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 md:bottom-8 md:right-6"
    >
      <div className="flex flex-col gap-2 rounded-full border border-white/70 bg-white/72 p-1.5 shadow-[0_18px_46px_-28px_rgba(52,56,45,0.5)] backdrop-blur-xl md:gap-2.5 md:p-2">
        {actions.map(({ href, label, visible, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            title={visible}
            className="group relative inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-bone-soft)] text-[var(--brand-deep-olive)] ring-1 ring-[var(--brand-muted-olive)]/16 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B18369] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B18369] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:size-12"
          >
            <Icon className="size-4.5 md:size-5" strokeWidth={1.75} aria-hidden="true" />
            <span dir="ltr" className="pointer-events-none absolute right-[calc(100%+0.65rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[var(--brand-muted-olive)]/14 bg-white/92 px-3 py-1.5 text-xs font-medium text-[var(--brand-ink)] opacity-0 shadow-[0_14px_34px_-26px_rgba(52,56,45,0.45)] backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
              {visible}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
