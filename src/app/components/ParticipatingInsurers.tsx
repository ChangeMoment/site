import { useId } from "react";
import manulifeLogo from "../../imports/insurance/manulife.png";
import sunLifeLogo from "../../imports/insurance/sun-life.png";
import desjardinsLogo from "../../imports/insurance/desjardins.png";
import pacificBlueCrossLogo from "../../imports/insurance/pacific-blue-cross.png";
import canadaLifeLogo from "../../imports/insurance/canada-life.png";
import greenShieldLogo from "../../imports/insurance/greenshield.png";

const insurers = [
  { name: "Manulife", logo: manulifeLogo },
  { name: "Sun Life", logo: sunLifeLogo },
  { name: "Desjardins", logo: desjardinsLogo },
  { name: "Pacific Blue Cross", logo: pacificBlueCrossLogo },
  { name: "Canada Life", logo: canadaLifeLogo },
  { name: "GreenShield", logo: greenShieldLogo },
];

export function ParticipatingInsurers({
  heading,
  compact = false,
  className = "",
}: {
  heading?: string;
  compact?: boolean;
  className?: string;
}) {
  const headingId = `participating-insurers-${useId().replace(/:/g, "")}`;

  return (
    <div className={className}>
      {heading ? (
        <h3
          id={headingId}
          className="text-center font-heading text-[var(--brand-ink)]"
          style={{ fontSize: compact ? "clamp(1.2rem, 2vw, 1.55rem)" : "clamp(1.35rem, 2.3vw, 1.85rem)" }}
        >
          {heading}
        </h3>
      ) : null}
      <div
        className={`${heading ? (compact ? "mt-7" : "mt-9") : ""} grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6`}
        role="region"
        aria-labelledby={heading ? headingId : undefined}
        aria-label={heading ? undefined : "Insurance providers that may support direct billing"}
      >
        {insurers.map((insurer) => (
          <div
            key={insurer.name}
            className={`${compact ? "h-20 px-3" : "h-24 px-4"} flex items-center justify-center rounded-2xl border border-[var(--brand-muted-olive)]/14 bg-white shadow-[0_12px_28px_-24px_rgba(52,56,45,0.35)]`}
          >
            <img
              src={insurer.logo}
              alt={`${insurer.name} — insurance provider we can direct bill`}
              className={`${compact ? "max-h-10" : "max-h-12"} w-full object-contain`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
