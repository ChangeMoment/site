import { useState } from "react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/ui-kit";
import { BlogCard } from "../components/BlogCard";
import { CTABand } from "../components/CTABand";
import { useLang } from "../i18n/LanguageProvider";
import { blogPosts, blogCategories, type BlogCategory } from "../data/blogs";

export function Blogs() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<BlogCategory | "all">("all");

  const filtered =
    active === "all" ? blogPosts : blogPosts.filter((p) => p.category === active);

  const chip = (selected: boolean) =>
    `rounded-full px-4 py-2 text-sm transition-colors ${
      selected
        ? "bg-[var(--brand-copper)] text-white shadow-[0_8px_18px_-12px_rgba(91,61,44,0.7)]"
        : "bg-[var(--brand-bone)] text-[var(--brand-ink)] hover:bg-[var(--brand-bone-soft)]"
    }`;

  return (
    <>
      <Seo
        title={t("blogs.meta.title")}
        description={t("blogs.meta.desc")}
        path="/blogs"
        schemaType="CollectionPage"
      />

      <PageHero
        title={t("blogs.hero.heading")}
        body={t("blogs.hero.body")}
        mirrorDecoration={lang === "fa"}
        contentClassName={lang !== "fr" ? "lg:max-w-none" : ""}
      />

      <Section>
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            <button type="button" onClick={() => setActive("all")} className={chip(active === "all")}>
              {t("blogs.all")}
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={chip(active === cat)}
              >
                {t(`blogs.categories.${cat}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 70}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
