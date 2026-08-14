import { useState } from "react";
import { Link2, Mail, Check } from "lucide-react";
import { useLang } from "../i18n/LanguageProvider";
import { localizedUrl } from "../lib/seo";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

interface BlogShareBarProps {
  slug: string;
  title: string;
  tags: string[];
}

export function BlogShareBar({ slug, title, tags }: BlogShareBarProps) {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);

  const url = localizedUrl(`/blogs/${slug}`, lang);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback for restricted environments
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const channels = [
    {
      label: "X",
      icon: <XIcon />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "Email",
      icon: <Mail className="size-4" />,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <div className="mt-12 space-y-6 border-t border-[var(--brand-muted-olive)]/20 pt-8">
      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-[var(--brand-ink-muted)]">{t("blogs.detail.tags")}:</span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--brand-muted-olive)]/30 bg-[var(--brand-bone-soft)] px-3 py-1 text-xs font-medium text-[var(--brand-deep-olive)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Share */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-[var(--brand-ink-muted)]">{t("blogs.detail.share")}:</span>

        {/* Copy link */}
        <button
          onClick={copyLink}
          aria-label={copied ? t("blogs.detail.copied") : "Copy link"}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
            copied
              ? "border-[var(--brand-sage)] bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]"
              : "border-[var(--brand-muted-olive)]/30 bg-white text-[var(--brand-ink-muted)] hover:border-[var(--brand-deep-olive)] hover:text-[var(--brand-deep-olive)]"
          }`}
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Link2 className="size-3.5" />
          )}
          {copied ? t("blogs.detail.copied") : "Copy link"}
        </button>

        {/* Social channels */}
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("blogs.detail.shareVia")} ${ch.label}`}
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--brand-muted-olive)]/30 bg-white text-[var(--brand-ink-muted)] transition-all hover:border-[var(--brand-deep-olive)] hover:bg-[var(--brand-bone-soft)] hover:text-[var(--brand-deep-olive)]"
          >
            {ch.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
