import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { blogPosts } from "./data/blogs";
import { translations } from "./i18n/translations";
import { getServiceBodyText } from "./pages/ServiceDetail";

const source = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");
const expectEvery = (content: string, values: string[]) => {
  values.forEach((value) => expect(content).toContain(value));
};

const files = {
  about: source("./pages/About.tsx"),
  apache: source("../../deploy/wordpress/apache-changemoment.conf"),
  blogDetail: source("./pages/BlogDetail.tsx"),
  blogs: source("./pages/Blogs.tsx"),
  contact: source("./pages/Contact.tsx"),
  footer: source("./components/Footer.tsx"),
  footerCredentials: source("./components/FooterCredentials.tsx"),
  footerLogo: source("./components/FooterLogoMark.tsx"),
  header: source("./components/Header.tsx"),
  index: source("../../index.html"),
  insurance: source("./components/InsuranceCoverageSection.tsx"),
  languageProvider: source("./i18n/LanguageProvider.tsx"),
  pageHero: source("./components/PageHero.tsx"),
  participatingInsurers: source("./components/ParticipatingInsurers.tsx"),
  programs: source("./components/PubliclyFundedPrograms.tsx"),
  serviceDetail: source("./pages/ServiceDetail.tsx"),
  team: source("./pages/Team.tsx"),
  theme: source("../styles/theme.css"),
  uiKit: source("./components/ui-kit.tsx"),
  fonts: source("../styles/fonts.css"),
};

const ifhp = {
  en: getServiceBodyText("ifhp", "en"),
  fr: getServiceBodyText("ifhp", "fr"),
  fa: getServiceBodyText("ifhp", "fa"),
};

describe("Bahar feedback: message-by-message release checklist", () => {
  it("421826 removes References from the anxiety article and future CMS refreshes", () => {
    const article = blogPosts.find((post) => post.slug === "anxiety-beyond-worry");
    expect(article).toBeDefined();
    expect(article?.body.join(" ")).not.toMatch(/References|Références|منابع/);
    expect(source("../../scripts/refresh-blog.mjs")).toContain("stripTrailingReferences");
  });

  it("421827 adds readable paragraph and list spacing to full articles", () => {
    expect(files.blogDetail).toContain('className="mt-6 text-lg leading-8');
    expect(files.blogDetail).toContain('className="mt-5 space-y-2.5"');
  });

  it("421828 uses cream inactive blog filters and a brown active filter", () => {
    expect(files.blogs).toContain("bg-[var(--brand-bone)]");
    expect(files.blogs).toContain("bg-[var(--brand-copper)] text-white");
  });

  it("421829 loads the embedded map and makes the whole card open the supplied Maps URL", () => {
    expect(files.contact).toContain("https://maps.app.goo.gl/Gjekb7iP8Gu2J2276?g_st=it");
    expect(files.contact).toContain("https://www.google.com/maps?q=49.2787064,-122.7917019&z=17&output=embed");
    expect(files.apache).toContain("frame-src https://www.google.com https://maps.google.com");
  });

  it("421830 enlarges the Psychology Today badge responsively", () => {
    expect(files.footerCredentials).toContain('alt="Verified by Psychology Today"');
    expect(files.footerCredentials).toContain("max-w-[236px]");
    expect(files.footerCredentials).toContain("sm:max-w-[260px]");
  });

  it("421831 places all three social icons under Contact and uses the company LinkedIn", () => {
    expectEvery(files.footer, ["Instagram", "Facebook", "Linkedin", "https://www.linkedin.com/company/changemoment/"]);
    expect(files.footer.indexOf("{/* Contact */}")).toBeLessThan(files.footer.indexOf('aria-label="Instagram"'));
  });

  it("421832 centers the footer booking button on mobile in all languages", () => {
    expect(files.footer).toContain("mt-7 flex justify-center sm:mt-5 sm:justify-start");
  });

  it("421833 uses the approved Persian Contact hero text", () => {
    expect(translations.fa.contact.hero.body).toBe("اگر پرسشی دارید یا نمی‌دانید از کجا شروع کنید، ما در خدمت شما هستیم.");
  });

  it("421834 uses the approved Persian emergency copy and preserves the crisis number LTR", () => {
    expect(translations.fa.contact.emergency.body).toContain("اگر در خطر هستید یا به کمک فوری نیاز دارید");
    expect(translations.fa.contact.emergency.body).toContain("(604) 872-3311");
    expect(files.contact).toContain('dir="ltr"');
  });

  it("421835 uses the approved Persian Contact service prompt", () => {
    expect(translations.fa.contact.faqLink).toContain("سرویس‌های مختلف ما را ببینید");
  });

  it("421836 updates and translates the Home direct-billing title and keeps desktop on one line", () => {
    expect(translations.en.home.insurance.heading).toBe("Direct Billing for Counselling in Coquitlam, BC");
    expect(translations.fr.home.insurance.heading).toBe("Facturation directe pour le counselling à Coquitlam, C.-B.");
    expect(translations.fa.home.insurance.heading).toBe("پرداخت مستقیم بیمه برای مشاوره در کوکیتلام، بریتیش کلمبیا");
    expect(files.insurance).toContain("lg:whitespace-nowrap");
    expect(files.insurance).toContain('fontSize: "clamp(1.6rem, 2.7vw, 2.35rem)"');
  });

  it("421837 applies both approved Persian How-it-works replacements", () => {
    const steps = translations.fa.home.how.steps.map((step) => step.body);
    expect(steps).toContain("گوش می‌دهیم، به پرسش‌ها پاسخ می‌دهیم و درباره فضای درمانی مورد نیازتان صحبت می‌کنیم.");
    expect(steps).toContain("با هم تصمیم می‌گیریم در این مرحله چه چیزی می‌تواند برایتان کمک‌کننده باشد.");
  });

  it("421838 adds native EN/FR/FA ICBC, CVAP and IFHP program cards on Home and Services", () => {
    expectEvery(files.programs, ["Publicly funded programs", "Programmes financés par l’État", "برنامه‌های دولتی", "ICBC", "CVAP", "IFHP"]);
    expect(files.insurance.match(/<PubliclyFundedPrograms \/>/g)).toHaveLength(2);
  });

  it("421839 places the ChangeMoment logo above the meaning section on mobile", () => {
    expect(files.about).toContain('className="order-2 lg:order-1"');
    expect(files.about).toContain('className="order-1 lg:order-2"');
  });

  it("421840 widens the Persian founder quote on desktop", () => {
    expect(files.about).toContain('lang === "fa" ? "lg:grid-cols-[0.72fr_1.28fr]"');
    expect(files.about).toContain('lang === "fa" ? "max-w-none" : "max-w-xl"');
  });

  it("421850 applies every Persian Team replacement from the attached Word file", () => {
    expectEvery(files.team, [
      "من ChangeMoment را بر اساس یک باور ساده بنا کردم",
      "من دارای مدرک کارشناسی ارشد روانشناسی و دو مدرک کارشناسی در مشاوره‌ی بالینی و جامعه‌شناسی هستم.",
      "من باور دارم مشاوره چیزی فراتر از یادگیری مهارت یا راهکارهای کوتاه‌مدت برای تغییر رفتار است.",
      "تجربه‌ی شخصی من از مهاجرت نیز به شکل عمیقی بر شیوه‌ی کارم تأثیر گذاشته است.",
      "به عنوان عضوی از هیئت‌مدیره‌ی TrueNetwork Community Solutions Society",
      "تراپی زمانی قدرتمند است که فضایی برای درک واقعی ایجاد کند",
      "روان‌درمانی پویشی",
      "درمان هیجان‌مدار (EFT)",
      "رویکرد مبتنی بر دلبستگی",
      "رویکرد ذهن‌آگاهی",
      "افتخار کمک به شما در چه زمینه‌هایی را دارم؟",
      "یافتن آرامش، تعادل پایدار و حس تازه‌ای از امید.",
      "ترومای ارتباطی و دلبستگی",
      "زوج‌ها و چالش‌های ارتباطی",
      "پرورش خودشناسی عمیق‌، اعتمادبه‌نفس و پذیرش خود.",
      "جامعه‌ی LGBTQ+",
      "مشاوره با توجه به نیاز شما و هدف شما از درمان شکل می‌گیرد.",
      "به ما می‌گویید چه چیزی باعث شده اینجا باشید",
      "باهم درباره آنچه تجربه می‌کنید تامل می‌کنیم",
    ]);
  });

  it("421851 makes the Team CTA use the same shared CTA as Services in every language", () => {
    expect(files.team).toContain("<CTABand />");
    expect(files.team).not.toContain("ctaTitle:");
    expect(translations.fa.home.finalCta.heading).toBe("لازم نیست همه‌چیز را به‌تنهایی حل کنید.");
  });

  it("421852 adds a Direct Billing title above the existing Services heading in all languages", () => {
    expect(translations.en.services.insurance.title).toBe("Direct Billing");
    expect(translations.fr.services.insurance.title).toBe("Facturation directe");
    expect(translations.fa.services.insurance.title).toBe("پرداخت مستقیم بیمه");
    expect(files.insurance.indexOf('t("services.insurance.title")')).toBeLessThan(files.insurance.indexOf('t("services.insurance.heading")'));
  });

  it("421853 uses the exact English Services billing paragraph without rendering the duplicate note", () => {
    expect(translations.en.services.insurance.body).toBe("For eligible plans, we can submit claims directly to many major insurance providers. Coverage and direct billing eligibility vary by plan. Please confirm your benefits with your insurer.");
    expect(files.insurance).not.toContain('t("services.insurance.note")');
  });

  it("421854 applies the approved Persian Services paragraph and four highlight replacements", () => {
    expect(translations.fa.services.insurance.body).toBe("ما برای بیمه‌های واجد شرایط، درخواست هزینه را مستقیماً برای شرکت‌ بیمه ارسال می‌کنیم. میزان پوشش و امکان صورت‌حساب مستقیم به بیمه‌ شما بستگی دارد. لطفاً مزایای بیمه خود را با شرکت بیمه چک کنید.");
    expectEvery(translations.fa.services.insurance.highlights.join(" "), [
      "پرداخت فقط بخشی از هزینه که بیمه‌ پوشش نمی‌دهد",
      "بدون نیاز به پرداخت کامل هزینه از پیش",
      "بدون نیاز به کاغذبازی و پیگیری بیمه از طریق شما",
      "ارائه رسید کامل در صورت نبود امکان پرداخت مستقیم بیمه",
    ]);
  });

  it("421855 keeps the EN/FR IFHP desktop submenu item on one row without changing FA", () => {
    expect(files.header).toContain('service.slug === "ifhp" && lang !== "fa" ? "col-span-2"');
    expect(files.header).toContain('service.slug === "ifhp" && lang !== "fa" ? "whitespace-nowrap"');
  });

  it("421933 keeps IFHP eligibility and coverage wording aligned with current official rules", () => {
    expectEvery(ifhp.en, ["Government of Canada", "IFHP-registered provider", "specific IFHP category", "30% client co-payment", "May 1, 2026"]);
    expect(ifhp.fr).toContain("quote-part de 30 %");
    expect(ifhp.fa).toContain("۳۰٪ سهم پرداختی مراجع");
  });

  it("421934 lists IFHP counselling languages as English and Persian only in EN/FR/FA", () => {
    expect(ifhp.en).toContain("English, and Farsi (Persian)");
    expect(ifhp.en).not.toContain("English, French, and Farsi");
    expect(ifhp.fr).toContain("anglais et en persan (farsi)");
    expect(ifhp.fa).toContain("زبان‌های انگلیسی و فارسی");
  });

  it("421935 removes the unsure-fit IFHP FAQ in all three languages", () => {
    expect(ifhp.en).not.toContain("What if I am not sure whether IFHP counselling is right for me?");
    expect(ifhp.fr).not.toContain("si le counselling PFSI me convient");
    expect(ifhp.fa).not.toContain("اگر مطمئن نباشم این سرویس برای من مناسب است چه؟");
  });

  it("421936 removes the generic insurance IFHP FAQ in all three languages", () => {
    expect(ifhp.en).not.toContain("Is IFHP Counselling in Coquitlam, BC counselling covered by insurance?");
    expect(ifhp.fr).not.toContain("couvert par une assurance privée");
    expect(ifhp.fa).not.toContain("آیا این مشاوره تحت پوشش بیمه است؟");
  });

  it("421937 renders the IFHP definition card in copper with readable white text", () => {
    expect(files.serviceDetail).toContain("border-white/15 bg-[var(--brand-copper)] [&_h2]:!text-white");
    expect(files.serviceDetail).toContain('isIfhpService ? "text-white/90"');
  });

  it("421939 adds the mobile subtitle readability gradient to IFHP", () => {
    expect(files.serviceDetail).toContain('["anxiety", "family-counselling", "depression", "trauma", "anger-management", "ifhp"]');
    expect(files.serviceDetail).toContain("hasMobileSubtitleGradient");
  });

  it("421942 applies the approved Persian IFHP hero subtitle", () => {
    expect(ifhp.fa).toContain("پس از این سفر شجاعانه، شما شایسته یک زندگی تازه هستید.");
  });

  it("421945 applies the approved Persian IFHP introduction and audience replacements", () => {
    expectEvery(ifhp.fa, [
      "با رویکردی متمرکز بر تروما و حساس به فرهنگ",
      "با ابهام، ترس و فشار روانی سنگینی زندگی می‌کنند.",
      "هنوز اثر روحی و روانی آن تجربه‌ها را با خود دارند.",
      "احساس انزوا یا فاصله از منابع حمایتی دارند.",
      "در عین حال تلاش می‌کنند در مکانی ناآشنا امید و ثبات بسازند.",
    ]);
  });

  it("421947 applies every Persian IFHP access, definition and approach replacement", () => {
    expectEvery(ifhp.fa, [
      "اگر تحت پوشش این برنامه هستید، دسترسی به مشاوره می‌تواند با چند قدم ساده شروع شود.",
      "چک کنید که پوشش معتبر IFHP دارید",
      "بررسی کنید که خدمات سلامت روان شامل پوشش شما می‌شود",
      "مدارک IFHP خود را همراه داشته باشید",
      "حتی اگر مطمئن نیستید با ما تماس بگیرید — ما می‌توانیم به شما کمک کنیم",
      "برنامه IFHP چیست؟",
      "تیم ما آماده کمک به مراجعان IFHP در بهبود تروما",
      "مشاوره IFHP چگونه می‌تواند به شما کمک کند؟",
      "احساس ثبات، شنیده شدن و امنیت روانی داشته باشید",
      "مهاجرت، فقدان، ابهام و سوگ",
      "برای زندگی در خانه جدیدتان نیاز دارید",
    ]);
  });

  it("421952 applies every Persian IFHP progress, coverage and trauma FAQ replacement", () => {
    expectEvery(ifhp.fa, [
      "پیشرفت در مشاوره IFHP اغلب با احساس تنهایی کمتر شروع می‌شود",
      "برنامه‌ای دولتی در کانادا است",
      "شرایط پذیرش توسط دولت کانادا تعیین شده.",
      "جزئیات پوشش خود را با IFHP چک کنید.",
      "آیا رویکرد مشاوره شما مبتنی بر تروما است؟",
      "در هر جایی از مسیر رشد فردی قرار داشته باشید.",
    ]);
  });

  it("421953 applies every remaining Persian IFHP session and FAQ replacement", () => {
    expectEvery(ifhp.fa, [
      "ما مشاوره حضوری در کوکیتلام، بریتیش کلمبیا و مشاوره آنلاین",
      "ما مشاوره به زبان‌های انگلیسی و فارسی ارائه می‌دهیم.",
      "در بهبود تروما، سوگ و فقدان",
      "تعداد جلسات تحت پوشش به مزایای فردی IFHP شما بستگی دارد. ما می‌توانیم در این فرایند به شما کمک کنیم.",
      "ما بیمه شما را چک می‌کنیم",
      "اگر به مشاوره نیاز دارم اما پوشش IFHP ندارم چه کنم؟",
      "می‌توانیم درباره گزینه‌های دیگر باهم صحبت کنیم و به شما کمک کنیم.",
    ]);
  });

  it("421954 confirms both Persian duplicate FAQs remain deleted", () => {
    expect(ifhp.fa).not.toContain("اگر مطمئن نباشم این سرویس برای من مناسب است چه؟");
    expect(ifhp.fa).not.toContain("آیا این مشاوره تحت پوشش بیمه است؟");
  });

  it("421955 keeps footer media lazy while prioritizing hero images, fonts and participating insurers", () => {
    expectEvery(files.footerLogo + files.footerCredentials, ['loading="lazy"', 'decoding="async"']);
    expectEvery(files.participatingInsurers, ['loading="eager"', 'fetchpriority: "high"', 'decoding="async"']);
    expect(files.serviceDetail).toContain('loading="eager"');
    expect(files.serviceDetail).toContain('fetchPriority="high"');
    expect(files.index).toContain('rel="preconnect" href="https://fonts.gstatic.com"');
    expect(files.fonts).toContain("font-display: swap");
    expect(files.languageProvider).toContain('if (prefix === "fa") preloadPersianFonts();');
    expect(files.languageProvider).not.toContain('saved === "fa"');
  });

  it("the August 20 follow-up increases shared paragraph, title and section spacing in every language", () => {
    expect(files.uiKit).toContain("py-24 md:py-32");
    expect(files.uiKit).toContain('className="mt-6 leading-8 text-[var(--brand-ink-muted)]"');
    expect(files.pageHero).toContain("pb-20 md:pt-40 md:pb-28");
    expect(files.pageHero).toContain('className="mt-6 text-lg leading-8');
    expect(files.theme).toContain("line-height: 1.8;");
  });

  it("the August 20 follow-up keeps the Persian About quote phrase together in a wider desktop column", () => {
    expect(translations.fa.about.founder.quote).toContain("درمان می‌تواند");
    expect(files.about).toContain('lg:grid-cols-[0.72fr_1.28fr]');
    expect(files.about).toContain('lang === "fa" ? "max-w-none"');
    expect(files.about).toContain("data-founder-quote");
  });

  it("the August 20 follow-up localizes Bita's visible name on Persian About and Team pages", () => {
    expect(files.about).toContain('lang === "fa" ? "بیتا رمضان‌نیا" : "Bita Ramezannia"');
    expect(files.team).toContain('lang === "fa" ? "بیتا رمضان‌نیا" : "Bita Ramezannia"');
    expect(files.about).toContain("{bitaDisplayName}");
    expect(files.team).toContain("{bitaDisplayName}");
  });

  it("the August 20 follow-up requests every insurer logo eagerly instead of waiting for scroll", () => {
    expect(files.participatingInsurers.match(/fetchpriority: "high"/g)).toHaveLength(1);
    expect(files.participatingInsurers).not.toContain('loading="lazy"');
  });
});
