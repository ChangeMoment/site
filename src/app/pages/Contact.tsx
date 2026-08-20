import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, AlertTriangle, CalendarHeart, CheckCircle2 } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, LinkButton } from "../components/ui-kit";
import { BrandSelect } from "../components/BrandSelect";
import { useLang } from "../i18n/LanguageProvider";
import { CONTACT_EMAIL, CONTACT_PHONE_TEL } from "../lib/constants";
import { submitContactForm } from "../lib/contact";

interface FormState {
  name: string;
  email: string;
  phone: string;
  language: string;
  message: string;
  website: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    language: "en",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t("contact.form.required");
    if (!form.email.trim()) next.email = t("contact.form.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = t("contact.form.invalidEmail");
    if (!form.message.trim()) next.message = t("contact.form.required");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);

    try {
      await submitContactForm(form, controller.signal);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", language: "en", message: "", website: "" });
    } catch {
      setSubmitError(true);
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-[var(--brand-muted-olive)]/40 bg-white px-4 py-3 text-[var(--brand-ink)] outline-none transition-colors placeholder:text-[var(--brand-ink-muted)]/70 focus-visible:border-[var(--brand-deep-olive)] focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)]";
  const errClass = "border-[#c0533b] focus-visible:ring-[#c0533b]/40";

  const info = [
    { icon: MapPin, label: t("contact.info.address"), value: t("contact.info.addressValue"), href: undefined, ltr: false },
    { icon: Phone, label: t("contact.info.phone"), value: t("contact.info.phoneValue"), href: `tel:${CONTACT_PHONE_TEL}`, ltr: true },
    { icon: Mail, label: t("contact.info.email"), value: t("contact.info.emailValue"), href: `mailto:${CONTACT_EMAIL}`, ltr: true },
    { icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue"), href: undefined, ltr: false },
  ];

  return (
    <>
      <Seo
        title={t("contact.meta.title")}
        description={t("contact.meta.desc")}
        path="/contact"
        schemaType="ContactPage"
      />

      <PageHero
        title={t("contact.hero.heading")}
        body={t("contact.hero.body")}
        mirrorDecoration={lang === "fa"}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Left column: form + emergency */}
          <div className="flex flex-col gap-6">
          <Reveal>
            <div className="rounded-3xl border border-[var(--brand-muted-olive)]/20 bg-white p-7 sm:p-9">
              <h2 style={{ fontSize: "1.9rem" }}>{t("contact.form.title")}</h2>

              {success ? (
                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[var(--brand-sage-soft)] p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand-sage)]" />
                  <p className="text-[var(--brand-ink)]">{t("contact.form.success")}</p>
                </div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
                  <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="c-website">Website</label>
                    <input
                      id="c-website"
                      type="text"
                      value={form.website}
                      onChange={(e) => set("website", e.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="mb-1.5 block text-sm">
                        {t("contact.form.name")} <span className="text-[#c0533b]">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder={t("contact.form.namePlaceholder")}
                        maxLength={120}
                        className={`${inputClass} ${errors.name ? errClass : ""}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {errors.name && (
                        <p id="err-name" className="mt-1.5 text-sm text-[#c0533b]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-sm">
                        {t("contact.form.email")} <span className="text-[#c0533b]">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder={t("contact.form.emailPlaceholder")}
                        maxLength={254}
                        dir="ltr"
                        className={`${inputClass} ${errors.email ? errClass : ""}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {errors.email && (
                        <p id="err-email" className="mt-1.5 text-sm text-[#c0533b]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-phone" className="mb-1.5 block text-sm">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder={t("contact.form.phonePlaceholder")}
                        maxLength={50}
                        dir="ltr"
                        className={`${inputClass} ${lang === "fa" ? "placeholder:text-right" : ""}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-lang" className="mb-1.5 block text-sm">
                        {t("contact.form.language")}
                      </label>
                      <BrandSelect
                        value={form.language}
                        onChange={(value) => set("language", value)}
                        ariaLabel={t("contact.form.language")}
                        className="min-h-[3rem] rounded-2xl"
                        options={[
                          { value: "en", label: t("contact.form.langEn") },
                          { value: "fa", label: t("contact.form.langFa") },
                          { value: "fr", label: t("contact.form.langFr") },
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="mb-1.5 block text-sm">
                      {t("contact.form.message")} <span className="text-[#c0533b]">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder={t("contact.form.messagePlaceholder")}
                      maxLength={5000}
                      className={`${inputClass} resize-none ${errors.message ? errClass : ""}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "err-message" : undefined}
                    />
                    {errors.message && (
                      <p id="err-message" className="mt-1.5 text-sm text-[#c0533b]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-[var(--brand-ink-muted)]">{t("contact.form.privacy")}</p>

                  {submitError && (
                    <div role="alert" className="rounded-2xl border border-[#c0533b]/30 bg-[#fbf0ec] p-4 text-sm text-[#7a3526]">
                      {t("contact.form.error")}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-deep-olive)] px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-12px_rgba(124,128,103,0.65)] transition-all hover:bg-[#686c55] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2"
                  >
                    {submitting ? t("contact.form.sending") : t("contact.form.submit")}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Emergency card — below form on desktop */}
          <Reveal>
            <div className="rounded-3xl border-2 border-[#c0533b]/30 bg-[#fbf0ec] p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-[#c0533b]" aria-hidden="true" />
                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "#a8442f" }}>
                    {t("contact.emergency.title")}
                  </h3>
                  <p className="mt-2 text-sm text-[#7a3526]">
                    {lang === "fa" ? (
                      <>
                        اگر در خطر هستید یا به کمک فوری نیاز دارید، همین الان با ۹۱۱ تماس بگیرید. برای دریافت کمک در بحران‌های روانی، با خط بحران BC تماس بگیرید:{" "}
                        <bdi dir="ltr">(604) 872-3311</bdi>.
                      </>
                    ) : t("contact.emergency.body")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          </div>

          {/* Right column: info + map + green card */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-3xl bg-[var(--brand-olive-soft)] p-7">
                <h3 style={{ fontSize: "1.3rem" }}>{t("contact.info.title")}</h3>
                <ul className="mt-5 space-y-4">
                  {info.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                        <item.icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block text-sm text-[var(--brand-ink-muted)]">{item.label}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[var(--brand-ink)] underline-offset-4 transition-colors hover:text-[var(--brand-deep-olive)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2"
                            dir={item.ltr ? "ltr" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[var(--brand-ink)]" dir={item.ltr ? "ltr" : undefined}>
                            {item.value}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <a
                href="https://maps.app.goo.gl/Gjekb7iP8Gu2J2276?g_st=it"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-[var(--brand-muted-olive)]/20"
                aria-label="Open in Google Maps"
              >
                <div className="relative aspect-[4/3]">
                  <iframe
                    title="ChangeMoment location"
                    src="https://www.google.com/maps?q=49.2787064,-122.7917019&z=17&output=embed"
                    width="100%"
                    height="100%"
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Click-to-open overlay */}
                  <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[var(--brand-deep-olive)] shadow-sm backdrop-blur-sm">
                      <MapPin className="size-3.5" strokeWidth={2} />
                      Open in Google Maps
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-3xl bg-[var(--brand-sage-soft)] p-7">
                <p className="text-[var(--brand-ink-muted)]">{t("contact.faqLink")}</p>
                <div className="mt-4">
                  <LinkButton to="/book" size="sm">
                    <CalendarHeart className="size-4" aria-hidden="true" />
                    {t("cta.book")}
                  </LinkButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
