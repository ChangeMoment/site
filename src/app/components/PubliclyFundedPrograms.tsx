import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLang, type Lang } from "../i18n/LanguageProvider";
import { localizedPath } from "../lib/seo";

const copy: Record<Lang, {
  eyebrow: string;
  heading: string;
  body: string;
  learnMore: string;
  programs: Array<{ name: string; slug: string; body: string }>;
}> = {
  en: {
    eyebrow: "Publicly funded programs",
    heading: "Additional routes to counselling support",
    body: "Eligible clients may be able to access counselling through these public programs. Approval, benefits, and any client contribution depend on the program and your individual eligibility.",
    learnMore: "Learn more",
    programs: [
      { name: "ICBC", slug: "icbc-clients", body: "Counselling support for eligible people recovering after a motor-vehicle crash in British Columbia." },
      { name: "CVAP", slug: "cvap-clients", body: "Counselling benefits may be available to eligible victims of violent crime, immediate family members, and witnesses." },
      { name: "IFHP", slug: "ifhp", body: "Temporary, limited health coverage for eligible refugees, refugee claimants, protected persons, and certain other groups. Eligible supplemental counselling has a 30% client co-payment from May 1, 2026." },
    ],
  },
  fr: {
    eyebrow: "Programmes financés par l’État",
    heading: "D’autres voies d’accès au soutien psychologique",
    body: "Les personnes admissibles peuvent accéder à des services de counselling par ces programmes publics. L’autorisation, les prestations et toute contribution du client dépendent du programme et de votre admissibilité individuelle.",
    learnMore: "En savoir plus",
    programs: [
      { name: "ICBC", slug: "icbc-clients", body: "Soutien psychologique pour les personnes admissibles qui se rétablissent après un accident de la route en Colombie-Britannique." },
      { name: "CVAP", slug: "cvap-clients", body: "Des prestations de counselling peuvent être offertes aux victimes admissibles d’un crime violent, à leur famille immédiate et aux témoins." },
      { name: "PFSI (IFHP)", slug: "ifhp", body: "Couverture de santé temporaire et limitée pour les réfugiés, demandeurs d’asile, personnes protégées et certains autres groupes admissibles. Depuis le 1er mai 2026, le counselling complémentaire admissible exige une quote-part de 30 %." },
    ],
  },
  fa: {
    eyebrow: "برنامه‌های دولتی",
    heading: "مسیرهای دیگری برای دسترسی به مشاوره",
    body: "مراجعان واجد شرایط ممکن است بتوانند از طریق این برنامه‌های دولتی خدمات مشاوره دریافت کنند. تأیید، میزان پوشش و سهم پرداختی مراجع به برنامه و شرایط فردی شما بستگی دارد.",
    learnMore: "اطلاعات بیشتر",
    programs: [
      { name: "ICBC", slug: "icbc-clients", body: "حمایت مشاوره‌ای برای افراد واجد شرایطی که پس از سانحه رانندگی در بریتیش کلمبیا در مسیر بهبود هستند." },
      { name: "CVAP", slug: "cvap-clients", body: "مزایای مشاوره ممکن است برای قربانیان واجد شرایط جرایم خشونت‌آمیز، اعضای نزدیک خانواده و شاهدان در دسترس باشد." },
      { name: "IFHP", slug: "ifhp", body: "پوشش سلامت موقت و محدود برای پناهندگان، متقاضیان پناهندگی، افراد تحت حمایت و برخی گروه‌های واجد شرایط دیگر. از ۱ مه ۲۰۲۶، مشاوره تکمیلی واجد شرایط مشمول ۳۰٪ سهم پرداختی مراجع است." },
    ],
  },
};

export function PubliclyFundedPrograms() {
  const { lang, dir } = useLang();
  const content = copy[lang];
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="mt-14 border-t border-white/10 pt-12 md:mt-16 md:pt-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">{content.eyebrow}</p>
        <h3 className="mt-3 font-heading text-2xl text-white md:text-3xl">{content.heading}</h3>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">{content.body}</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {content.programs.map((program) => (
          <article key={program.slug} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm">
            <h4 className="font-heading text-xl text-white">{program.name}</h4>
            <p className="mt-3 flex-1 text-sm leading-7 text-white/75">{program.body}</p>
            <Link
              to={localizedPath(`/services/${program.slug}`, lang)}
              className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-white underline-offset-4 transition-colors hover:text-[var(--brand-copper-soft)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {content.learnMore}
              <Arrow className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
