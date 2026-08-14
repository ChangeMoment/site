import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";


import { formatLgbtqia2sText } from "../lib/lgbtqia";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-[var(--brand-muted-olive)]/20">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b-0 border-t-0 py-1"
        >
          <AccordionTrigger className="text-start font-heading text-lg text-[var(--brand-ink)] hover:no-underline [&[data-state=open]]:text-[var(--brand-deep-olive)]">
            <span className="min-w-0 flex-1 text-start">
              {formatLgbtqia2sText(item.q)}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-[0.97rem] leading-relaxed text-[var(--brand-ink-muted)]">
            {formatLgbtqia2sText(item.a)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
