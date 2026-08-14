import type { ReactNode } from "react";

const TOKEN = "LGBTQ+";

/** Keeps the acronym and trailing plus together and in the correct order in RTL copy. */
export function formatLgbtqia2sText(text: string): ReactNode {
  if (!text.includes(TOKEN)) return text;

  const parts = text.split(TOKEN);
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <span dir="ltr" className="inline-block whitespace-nowrap">
          LGBTQ+
        </span>
      )}
    </span>
  ));
}
