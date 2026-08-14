import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LANGS, useLang } from "../i18n/LanguageProvider";
import { useLocation, useNavigate } from "react-router";
import { localizedPath, stripLanguagePrefix } from "../lib/seo";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  const selectLanguage = (nextLang: (typeof LANGS)[number]["code"]) => {
    const basePath = stripLanguagePrefix(location.pathname);
    setLang(nextLang);
    navigate(`${localizedPath(basePath, nextLang)}${location.search}${location.hash}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.language")}
        className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-muted-olive)]/40 px-3 py-1.5 text-sm text-[var(--brand-ink)] transition-colors hover:border-[var(--brand-deep-olive)]/60 hover:bg-[var(--brand-sage-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] ${className}`}
      >
        <Globe className="size-4" aria-hidden="true" />
        <span className="font-medium">{LANGS.find((l) => l.code === lang)?.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem] rounded-xl">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => selectLanguage(l.code)}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium">{l.label}</span>
              <span className="text-[var(--brand-ink-muted)]">{l.native}</span>
            </span>
            {lang === l.code && <Check className="size-4 text-[var(--brand-deep-olive)]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
