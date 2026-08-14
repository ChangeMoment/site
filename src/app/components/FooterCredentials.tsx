import { useEffect, useRef, useState } from "react";
import lgbtqPrideFlag from "../../assets/footer-badges/lgbtq-pride-flag.png";
import bcaccRccLogo from "../../assets/footer-badges/bcacc-rcc.png";
import counsellingBcLogo from "../../assets/footer-badges/counselling-bc.png";

const PSYCHOLOGY_TODAY_SCRIPT_ID = "psychology-today-verified-seal";

function PsychologyTodaySeal() {
  const sealRef = useRef<HTMLAnchorElement>(null);
  const [officialSealRendered, setOfficialSealRendered] = useState(false);

  useEffect(() => {
    const seal = sealRef.current;
    if (!seal) return;

    const updateSealState = () => setOfficialSealRendered(seal.childElementCount > 0);
    const observer = new MutationObserver(updateSealState);
    observer.observe(seal, { childList: true, subtree: true });
    updateSealState();

    if (!document.getElementById(PSYCHOLOGY_TODAY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = PSYCHOLOGY_TODAY_SCRIPT_ID;
      script.type = "text/javascript";
      script.src = "https://member.psychologytoday.com/verified-seal.js";
      script.async = false;
      script.dataset.badge = "11";
      script.dataset.id = "1057338";
      script.dataset.code =
        "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMS9wcm9maWxlLzEwNTczMzg/Y2FsbGJhY2s9c3hjYWxsYmFjaw==";
      document.body.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex min-h-[78px] min-w-[150px] items-center justify-center">
      <a
        ref={sealRef}
        href="https://www.psychologytoday.com/profile/1057338"
        className="sx-verified-seal inline-flex max-w-full items-center justify-center focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)] [&_iframe]:max-w-full [&_img]:h-auto [&_img]:max-h-[78px] [&_img]:max-w-full"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Verified profile on Psychology Today"
      />
      {!officialSealRendered && (
        <a
          href="https://www.psychologytoday.com/profile/1057338"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verified profile on Psychology Today"
          className="inline-flex min-h-[66px] min-w-[150px] flex-col items-center justify-center rounded-sm border border-[#3c4322]/45 bg-white/70 px-4 py-2 text-center text-[#2f3520] shadow-[0_8px_24px_-18px_rgba(60,67,34,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)]"
        >
          <span className="font-heading text-[1.05rem] leading-none">Psychology Today</span>
          <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#596045]">
            Verified Profile
          </span>
        </a>
      )}
    </div>
  );
}

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
            alt="LGBTQ+ inclusive practice"
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
          className="flex min-h-24 items-center justify-center rounded-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep-olive)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-olive-soft)]"
        >
          <img
            src={bcaccRccLogo}
            alt="BC Association of Clinical Counsellors — Registered Clinical Counsellor"
            className="h-auto w-[104px] object-contain sm:w-28 lg:w-[124px]"
            loading="lazy"
            decoding="async"
          />
        </a>

        <div className="flex min-h-24 items-center justify-center">
          <PsychologyTodaySeal />
        </div>

        <div className="col-span-2 flex min-h-24 items-center justify-center lg:col-span-1">
          <img
            src={counsellingBcLogo}
            alt="CounsellingBC — Closer to the help you need, when you need it"
            className="h-auto w-full max-w-[220px] object-contain sm:max-w-[250px] lg:max-w-[230px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
