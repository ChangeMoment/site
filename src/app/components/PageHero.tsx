import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui-kit";
import { CurveDecoration } from "./CurveDecoration";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
  titleClassName = "",
  contentClassName = "",
  mirrorDecoration = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  mirrorDecoration?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-olive-soft)] pt-32 pb-20 md:pt-40 md:pb-28">
      <CurveDecoration
        draw
        className={`pointer-events-none absolute top-8 hidden h-80 w-[34rem] md:block ${mirrorDecoration ? "left-[-4%] scale-x-[-1]" : "right-[-4%]"}`}
        color="var(--brand-sage)"
        opacity={0.5}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className={`max-w-3xl ${contentClassName}`}>
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1 className={`mt-4 ${titleClassName}`}>{title}</h1>
          </Reveal>
          {body && (
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-[var(--brand-ink-muted)]">{body}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={240}>
              <div className="mt-10">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
