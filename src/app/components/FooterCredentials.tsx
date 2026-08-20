import lgbtqPrideFlag from "../../assets/footer-badges/lgbtq-pride-flag.png";
import bcaccRccLogo from "../../assets/footer-badges/bcacc-rcc.png";
import counsellingBcLogo from "../../assets/footer-badges/counselling-bc.png";
import psychologyTodayBadge from "../../assets/footer-badges/psychology-today-verified.webp";

const BADGE_LINK_CLASS =
  "flex min-h-24 items-center justify-center rounded-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)]";

export function FooterCredentials() {
  return (
    <section
      aria-label="Professional affiliations and inclusive practice"
      className="mt-8 border-t border-[var(--brand-muted-olive)]/20 pt-7 sm:mt-11 sm:pt-9 lg:mt-14"
    >
      <div className="grid grid-cols-2 items-center gap-x-5 gap-y-7 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-10">
        <div className="flex min-h-24 items-center justify-center">
          <img
            src={lgbtqPrideFlag}
            alt="Pride flag — ChangeMoment is an LGBTQ+ inclusive counselling practice"
            className="h-auto w-[88px] object-contain sm:w-24 lg:w-[104px]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <a
          href="https://bcacc.ca/counsellors/bita-ramezannia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bita Ramezannia's profile at BC Association of Clinical Counsellors"
          className={BADGE_LINK_CLASS}
        >
          <img
            src={bcaccRccLogo}
            alt="BC Association of Clinical Counsellors — Registered Clinical Counsellor"
            className="h-auto w-[104px] object-contain sm:w-28 lg:w-[124px]"
            loading="lazy"
            decoding="async"
          />
        </a>

        <a
          href="https://www.psychologytoday.com/ca/therapists/bita-ramezannia-byt-rmdn-ny-coquitlam-bc/1057338"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bita Ramezannia's verified profile on Psychology Today"
          className={`col-span-2 lg:col-span-1 ${BADGE_LINK_CLASS}`}
        >
          <img
            src={psychologyTodayBadge}
            alt="Verified by Psychology Today"
            className="h-auto w-full max-w-[236px] object-contain sm:max-w-[260px] lg:max-w-[248px]"
            loading="lazy"
            decoding="async"
          />
        </a>

        <a
          href="https://counsellingbc.com/listings/bitaramezannia.htm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bita Ramezannia's listing on CounsellingBC"
          className={`col-span-2 lg:col-span-1 ${BADGE_LINK_CLASS}`}
        >
          <img
            src={counsellingBcLogo}
            alt="CounsellingBC — Closer to the help you need, when you need it"
            className="h-auto w-full max-w-[220px] object-contain sm:max-w-[250px] lg:max-w-[230px]"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </section>
  );
}
