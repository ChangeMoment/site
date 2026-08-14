import { useState, useRef, useEffect, useMemo } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/ui-kit";
import { ServiceCard } from "../components/ServiceCard";
import { ServiceIcon } from "../components/ServiceIcon";
import { CTABand } from "../components/CTABand";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import { JaneNotice } from "../components/JaneNotice";
import { useLang } from "../i18n/LanguageProvider";
import { services, type Service } from "../data/services";
import type { Lang } from "../i18n/LanguageProvider";
import { localizedPath, localizedUrl } from "../lib/seo";

import { makeHaystack, matchesHaystack, tokenize, type Haystack } from "../lib/search";
import { getServiceBodyText } from "./ServiceDetail";
import { formatLgbtqia2sText } from "../lib/lgbtqia";

interface Indexed {
  service: Service;
  /** card-level text: name + short description */
  head: Haystack;
  /** everything else on the service page */
  body: Haystack;
}

/** Build the searchable index once per language. */
function buildIndex(lang: Lang): Indexed[] {
  return services.map((service) => ({
    service,
    head: makeHaystack(service.name[lang], service.short[lang]),
    body: makeHaystack(service.intro[lang], getServiceBodyText(service.id, lang)),
  }));
}

export function Services() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isFa = lang === "fa";
  const index = useMemo(() => buildIndex(lang), [lang]);
  const tokens = useMemo(() => tokenize(query), [query]);

  // Build tiered results: tier 1 = match on the card itself, tier 2 = match deeper in the page
  const { tier1, tier2 } = useMemo(() => {
    const t1: Service[] = [];
    const t2: Service[] = [];
    if (tokens.length) {
      for (const entry of index) {
        if (matchesHaystack(tokens, entry.head)) t1.push(entry.service);
        else if (matchesHaystack(tokens, entry.body)) t2.push(entry.service);
      }
    }
    return { tier1: t1, tier2: t2 };
  }, [index, tokens]);

  const allResults = useMemo(() => [...tier1, ...tier2], [tier1, tier2]);
  const tier1Count = tier1.length;
  const showDropdown = open && tokens.length > 0;

  const goTo = (slug: string) => {
    setQuery("");
    setOpen(false);
    navigate(localizedPath(`/services/${slug}`, lang));
  };

  const clearQuery = () => {
    setQuery("");
    setOpen(false);
    setActiveIdx(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((p) => Math.min(p + 1, allResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((p) => Math.max(p - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && allResults[activeIdx]) goTo(allResults[activeIdx].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIdx(-1);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name[lang],
        url: localizedUrl(`/services/${s.slug}`, lang),
      })),
    },
  ];

  const inContentLabel =
    isFa ? "موارد مرتبط دیگر" : lang === "fr" ? "Également lié à votre recherche" : "Also related to your search";
  const noResultsLabel =
    isFa ? "نتیجه‌ای پیدا نشد." : lang === "fr" ? "Aucun résultat." : "No results found.";

  return (
    <>
      <Seo
        title={t("services.meta.title")}
        description={t("services.meta.desc")}
        path="/services"
        schemaType="CollectionPage"
        jsonLd={jsonLd}
      />

      <PageHero
        title={t("services.hero.heading")}
        body={t("services.hero.body")}
        titleClassName={lang === "en" ? "text-[clamp(2.2rem,3.5vw,3.2rem)] lg:whitespace-nowrap" : ""}
        contentClassName={lang === "en" ? "lg:max-w-5xl" : lang === "fa" ? "lg:max-w-4xl" : ""}
        mirrorDecoration={lang === "fa"}
      >
        <JaneNotice variant="muted" />
      </PageHero>

      <Section className="bg-white">
        {/* Search bar + floating results panel
            The container is outside Reveal so it forms its own stacking context
            above the card Reveal elements (which each have transform → stacking context). */}
        <div className="relative z-10 mx-auto max-w-xl" ref={containerRef}>
          <Reveal>
            <label htmlFor="service-search" className="sr-only">
              {t("services.search.placeholder")}
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 size-5 text-[var(--brand-ink-muted)] ltr:left-4 rtl:right-4"
                aria-hidden="true"
              />
              <input
                id="service-search"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(true); setActiveIdx(-1); }}
                onFocus={() => query && setOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder={t("services.search.placeholder")}
                autoComplete="off"
                aria-autocomplete="list"
                aria-expanded={showDropdown}
                aria-controls="service-results"
                className="w-full rounded-full border border-[var(--brand-muted-olive)]/40 bg-white py-3.5 text-[var(--brand-ink)] outline-none transition-colors placeholder:text-[var(--brand-ink-muted)] focus-visible:border-[var(--brand-deep-olive)] focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] ltr:pl-12 ltr:pr-11 rtl:pr-12 rtl:pl-11"
              />
              {query && (
                <button
                  onClick={clearQuery}
                  aria-label="Clear search"
                  className="absolute top-1/2 -translate-y-1/2 flex size-7 items-center justify-center rounded-full text-[var(--brand-ink-muted)] transition-colors hover:bg-[var(--brand-sage-soft)] hover:text-[var(--brand-ink)] ltr:right-3 rtl:left-3"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </Reveal>

          {/* Floating results panel — sibling of Reveal, not inside it,
              so it escapes the transform stacking context and overlays the cards */}
          {showDropdown && (
            <div
              id="service-results"
              role="listbox"
              className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-[var(--brand-muted-olive)]/20 bg-white shadow-[0_24px_64px_-16px_rgba(52,56,45,0.18)]"
            >
              {allResults.length === 0 ? (
                <p className="px-5 py-4 text-sm text-[var(--brand-ink-muted)]">{noResultsLabel}</p>
              ) : (
                <ul
                  className="max-h-[340px] overflow-y-auto
                    [scrollbar-width:thin]
                    [scrollbar-color:rgba(124,128,103,0.25)_transparent]
                    [&::-webkit-scrollbar]:w-[5px]
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-[var(--brand-muted-olive)]/25
                    [&::-webkit-scrollbar-thumb:hover]:bg-[var(--brand-muted-olive)]/45"
                >
                  {allResults.map((s, i) => {
                    const isSeparator = i === tier1Count && tier1Count > 0 && tier2.length > 0;
                    return (
                      <li key={s.id}>
                        {isSeparator && (
                          <div className="mx-4 my-1 flex items-center gap-3">
                            <div className="h-px flex-1 bg-[var(--brand-muted-olive)]/15" />
                            <span className="shrink-0 text-[0.68rem] tracking-wide text-[var(--brand-ink-muted)]/50 uppercase">
                              {inContentLabel}
                            </span>
                            <div className="h-px flex-1 bg-[var(--brand-muted-olive)]/15" />
                          </div>
                        )}
                        <button
                          role="option"
                          aria-selected={i === activeIdx}
                          onMouseDown={(e) => { e.preventDefault(); goTo(s.slug); }}
                          onMouseEnter={() => setActiveIdx(i)}
                          className={`group flex w-full items-center gap-3 px-4 py-3 text-start transition-colors ${i === activeIdx ? "bg-[var(--brand-sage-soft)]" : "hover:bg-[var(--brand-sage-soft)]/60"}`}
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-bone)] text-[var(--brand-deep-olive)]">
                            <ServiceIcon name={s.icon} className="size-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-[var(--brand-ink)]">{formatLgbtqia2sText(s.name[lang])}</span>
                            <span className="block truncate text-xs text-[var(--brand-ink-muted)]">{s.short[lang]}</span>
                          </span>
                          <ArrowRight
                            className={`size-4 shrink-0 text-[var(--brand-ink-muted)] transition-opacity ltr:block rtl:hidden ${i === activeIdx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                            aria-hidden="true"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Cards — always shown, never filtered */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 60}>
              <ServiceCard service={service} paletteIndex={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <InsuranceCoverageSection variant="services" />

      <CTABand />
    </>
  );
}
