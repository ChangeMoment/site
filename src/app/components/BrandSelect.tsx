import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLang } from "../i18n/LanguageProvider";

export interface BrandSelectOption {
  value: string;
  label: string;
}

export function BrandSelect({
  value,
  options,
  onChange,
  ariaLabel,
  className = "",
}: {
  value: string;
  options: BrandSelectOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
  className?: string;
}) {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const selected = options.find((option) => option.value === value) ?? options[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={ariaLabel}
        className={`inline-flex min-h-[2.875rem] w-full items-center justify-between gap-3 rounded-full border border-[var(--brand-muted-olive)]/40 bg-white px-4 py-2.5 text-sm text-[var(--brand-ink)] outline-none transition-colors hover:border-[var(--brand-deep-olive)]/50 hover:bg-[var(--brand-sage-soft)] focus-visible:border-[var(--brand-deep-olive)] focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] ${className}`}
      >
        <span className="flex-1 truncate text-start leading-none">{selected?.label}</span>
        <ChevronDown className="size-4 shrink-0 text-[var(--brand-deep-olive)]" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isFa ? "end" : "start"}
        sideOffset={8}
        className="min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-2xl border border-[var(--brand-muted-olive)]/20 bg-white/95 p-1.5 text-[var(--brand-ink)] shadow-[0_22px_55px_-34px_rgba(52,56,45,0.45)] backdrop-blur-xl"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--brand-ink)] outline-none transition-colors focus:bg-[var(--brand-sage-soft)] hover:bg-[var(--brand-sage-soft)] ${
              isFa ? "flex-row-reverse text-right" : ""
            }`}
          >
            <span className="flex-1 truncate">{option.label}</span>
            {option.value === value && (
              <Check className="size-4 shrink-0 text-[var(--brand-deep-olive)]" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
