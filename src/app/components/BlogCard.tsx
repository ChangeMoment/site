import { Link } from "react-router";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../i18n/LanguageProvider";
import type { BlogPost } from "../data/blogs";
import { getBlogImage } from "../data/images";
import { localizedPath } from "../lib/seo";

export function BlogCard({ post }: { post: BlogPost }) {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const locale = lang === "fa" ? "fa-IR" : lang === "fr" ? "fr-CA" : "en-CA";
  const dateStr = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const image = post.featuredImage || getBlogImage(post.slug, post.id);

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-muted-olive)]/20 bg-white">
      <Link to={localizedPath(`/blogs/${post.slug}`, lang)} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-[var(--brand-bone-soft)]">
          <ImageWithFallback
            src={image}
            alt={`${post.title[lang]} — ${t("brand.full")}`}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-[var(--brand-sage-soft)] px-3 py-1 font-medium text-[#3c4322]">
            {t(`blogs.categories.${post.category}`)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[var(--brand-ink-muted)]">
            <Calendar className="size-3.5" aria-hidden="true" />
            {dateStr}
          </span>
        </div>
        <h3
          className={`fa-blog-card-title mt-4 ${lang === "fa" ? "text-[1.05rem] leading-[1.7]" : ""}`}
          style={lang === "fa" ? undefined : { fontSize: "1.35rem", lineHeight: 1.25 }}
        >
          <Link to={localizedPath(`/blogs/${post.slug}`, lang)} className="transition-colors hover:text-[var(--brand-deep-olive)]">
            {post.title[lang]}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] text-[var(--brand-ink-muted)]">{post.excerpt[lang]}</p>
        <Link
          to={localizedPath(`/blogs/${post.slug}`, lang)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-deep-olive)] transition-all hover:gap-2.5"
        >
          {t("cta.readMore")}
          <Arrow className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
