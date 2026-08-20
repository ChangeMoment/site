import { describe, expect, it } from "vitest";
import { blogPosts } from "./data/blogs";
import { translations } from "./i18n/translations";
import { getServiceBodyText } from "./pages/ServiceDetail";

describe("August 2026 client copy updates", () => {
  it("keeps the anxiety article free of the removed references section", () => {
    const article = blogPosts.find((post) => post.slug === "anxiety-beyond-worry");
    expect(article).toBeDefined();
    expect(article?.body.join(" ")).not.toMatch(/References|Références|منابع/);
  });

  it("uses the approved direct-billing and Persian contact copy", () => {
    expect(translations.en.home.insurance.heading).toBe("Direct Billing for Counselling in Coquitlam, BC");
    expect(translations.fr.home.insurance.heading).toContain("Coquitlam");
    expect(translations.fa.home.insurance.heading).toContain("کوکیتلام");
    expect(translations.fa.contact.hero.body).toBe("اگر پرسشی دارید یا نمی‌دانید از کجا شروع کنید، ما در خدمت شما هستیم.");
    expect(translations.fa.services.insurance.highlights).toContain("ارائه رسید کامل در صورت نبود امکان پرداخت مستقیم بیمه");
  });

  it("keeps IFHP copy current and removes the two unwanted FAQ patterns", () => {
    const en = getServiceBodyText("ifhp", "en");
    const fr = getServiceBodyText("ifhp", "fr");
    const fa = getServiceBodyText("ifhp", "fa");

    expect(en).toContain("30% client co-payment");
    expect(fr).toContain("quote-part de 30 %");
    expect(fa).toContain("۳۰٪ سهم پرداختی مراجع");
    expect(en).toContain("English, and Farsi (Persian)");
    expect(en).not.toContain("English, French, and Farsi");
    expect(en).not.toContain("What if I am not sure whether IFHP counselling is right for me?");
    expect(en).not.toContain("Is IFHP Counselling in Coquitlam, BC counselling covered by insurance?");
  });
});
