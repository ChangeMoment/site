import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import manulifeLogo from "../../imports/insurance/manulife.png";
import sunLifeLogo from "../../imports/insurance/sun-life.png";
import desjardinsLogo from "../../imports/insurance/desjardins.png";
import pacificBlueCrossLogo from "../../imports/insurance/pacific-blue-cross.png";
import canadaLifeLogo from "../../imports/insurance/canada-life.png";
import greenShieldLogo from "../../imports/insurance/greenshield.png";

const insurerGroups = [
  [
    { name: "Manulife", logo: manulifeLogo },
    { name: "Sun Life", logo: sunLifeLogo },
    { name: "Desjardins", logo: desjardinsLogo },
  ],
  [
    { name: "Pacific Blue Cross", logo: pacificBlueCrossLogo },
    { name: "Canada Life", logo: canadaLifeLogo },
    { name: "GreenShield", logo: greenShieldLogo },
  ],
];

export function ParticipatingInsurers({
  heading,
  compact = false,
  className = "",
}: {
  heading: string;
  compact?: boolean;
  className?: string;
}) {
  const [activeGroup, setActiveGroup] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const headingId = `participating-insurers-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveGroup((current) => (current + 1) % insurerGroups.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <h3
        id={headingId}
        className="text-center font-heading text-white"
        style={{ fontSize: compact ? "clamp(1.2rem, 2vw, 1.55rem)" : "clamp(1.35rem, 2.3vw, 1.85rem)" }}
      >
        {heading}
      </h3>
      <div
        className={`${compact ? "mt-7 min-h-16 sm:min-h-20" : "mt-9 min-h-20 sm:min-h-24 md:min-h-28"} grid`}
        role="region"
        aria-labelledby={headingId}
      >
        {insurerGroups.map((group, groupIndex) => {
          const isActive = groupIndex === activeGroup;

          return (
            <motion.div
              key={groupIndex}
              className="col-start-1 row-start-1 grid grid-cols-3 items-center gap-4 sm:gap-8 md:gap-12"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-hidden={!isActive}
            >
              {group.map((insurer) => (
                <div
                  key={insurer.name}
                  className={`${compact ? "h-16 sm:h-20 md:px-6" : "h-20 sm:h-24 md:h-28 md:px-7"} flex items-center justify-center px-1 sm:px-4`}
                >
                  <img
                    src={insurer.logo}
                    alt={insurer.name}
                    className={`${compact ? "max-h-10 sm:max-h-14" : "max-h-12 sm:max-h-16 md:max-h-20"} w-full object-contain opacity-90`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
