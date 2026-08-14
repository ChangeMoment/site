import { createContext, useContext, type ReactNode } from "react";

export interface SeoSnapshot {
  title: string;
  description: string;
  robots: string;
  type: "website" | "article";
  url: string;
  image: string;
  imageAlt: string;
  locale: string;
  publishedTime?: string;
  alternates: { hreflang: string; href: string }[];
  structuredData: Record<string, unknown>;
}

type Collector = (snapshot: SeoSnapshot) => void;

const SeoCollectorContext = createContext<Collector | null>(null);

export function SeoCollectorProvider({
  collect,
  children,
}: {
  collect: Collector;
  children: ReactNode;
}) {
  return <SeoCollectorContext.Provider value={collect}>{children}</SeoCollectorContext.Provider>;
}

export function useSeoCollector() {
  return useContext(SeoCollectorContext);
}
