import type { Lang } from "../i18n/LanguageProvider";

export interface Therapist {
  id: string;
  name: string;
  role: Record<Lang, string>;
  languages: string[]; // language codes: en, fa, fr
  specialties: string[]; // service ids
  formats: ("online" | "in-person")[];
  bio: Record<Lang, string>;
  imageQuery: string;
}

export const therapists: Therapist[] = [
  {
    id: "therapist-1",
    name: "Dr. Sarah Whitman",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseillère clinique agréée",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en", "fr"],
    specialties: ["anxiety", "depression", "trauma"],
    formats: ["online", "in-person"],
    bio: {
      en: "With over a decade of clinical experience, Sarah brings warmth and steady expertise to her work with anxiety, depression, and trauma.",
      fr: "Forte de plus de dix ans d’expérience clinique, Sarah apporte chaleur et expertise à son travail sur l’anxiété, la dépression et le traumatisme.",
      fa: "سارا با بیش از یک دهه تجربه بالینی، گرمی و تخصصی پایدار را به کار خود در زمینه اضطراب، افسردگی و تروما می‌آورد.",
    },
    imageQuery: "professional therapist woman warm portrait natural light",
  },
  {
    id: "therapist-2",
    name: "Arman Tehrani",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseiller clinique agréé",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en", "fa"],
    specialties: ["relationship-and-couples-counselling", "family-counselling", "anger-management"],
    formats: ["online", "in-person"],
    bio: {
      en: "Arman supports couples and families in Persian and English, helping them rebuild understanding, trust, and connection.",
      fr: "Arman accompagne les couples et les familles en persan et en anglais, pour reconstruire la compréhension, la confiance et le lien.",
      fa: "آرمان به زبان فارسی و انگلیسی از زوج‌ها و خانواده‌ها حمایت می‌کند تا درک، اعتماد و پیوند را بازسازی کنند.",
    },
    imageQuery: "professional therapist man warm portrait natural light",
  },
  {
    id: "therapist-3",
    name: "Maya Lefebvre",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseillère clinique agréée",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en", "fr"],
    specialties: ["prenatal-and-pregnancy", "grief-and-loss", "individual-counselling"],
    formats: ["online"],
    bio: {
      en: "Maya specialises in perinatal mental health and grief, offering gentle, compassionate care through life’s tender transitions.",
      fr: "Maya se spécialise en santé mentale périnatale et en deuil, offrant des soins doux et bienveillants lors des transitions délicates de la vie.",
      fa: "مایا در سلامت روان دوران بارداری و سوگ تخصص دارد و در گذرهای لطیف زندگی مراقبتی آرام و دلسوزانه ارائه می‌دهد.",
    },
    imageQuery: "professional therapist woman gentle portrait soft natural light",
  },
  {
    id: "therapist-4",
    name: "David Okafor",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseiller clinique agréé",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en"],
    specialties: ["adhd", "anxiety", "individual-counselling"],
    formats: ["online", "in-person"],
    bio: {
      en: "David takes a strengths-based, practical approach to ADHD and anxiety, helping clients work with their minds rather than against them.",
      fr: "David adopte une approche pratique et axée sur les forces pour le TDAH et l’anxiété, aidant à composer avec son esprit.",
      fa: "دیوید رویکردی مبتنی بر توانمندی و کاربردی به ADHD و اضطراب دارد و به مراجعان کمک می‌کند با ذهن خود همراه شوند نه در برابر آن.",
    },
    imageQuery: "professional therapist man friendly portrait natural light",
  },
  {
    id: "therapist-5",
    name: "Niloofar Ahmadi",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseillère clinique agréée",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en", "fa"],
    specialties: ["trauma", "lgbtqia2s", "cvap-clients"],
    formats: ["online", "in-person"],
    bio: {
      en: "Niloofar offers trauma-informed, affirming care, creating a safe space where every client feels seen and respected.",
      fr: "Niloofar offre des soins affirmatifs et adaptés au traumatisme, créant un espace sûr où chacun se sent vu et respecté.",
      fa: "نیلوفر مراقبتی آگاه به تروما و تأییدگر ارائه می‌دهد و فضایی امن می‌سازد که در آن هر مراجع دیده و محترم شمرده می‌شود.",
    },
    imageQuery: "professional therapist woman calm portrait natural light",
  },
  {
    id: "therapist-6",
    name: "Thomas Reid",
    role: {
      en: "Registered Clinical Counsellor",
      fr: "Conseiller clinique agréé",
      fa: "مشاور بالینی دارای پروانه",
    },
    languages: ["en", "fr"],
    specialties: ["icbc-clients", "trauma", "anger-management"],
    formats: ["online", "in-person"],
    bio: {
      en: "Thomas supports recovery after accidents and difficult events, blending trauma-informed care with practical, steady guidance.",
      fr: "Thomas accompagne le rétablissement après des accidents et des événements difficiles, alliant soins adaptés au traumatisme et conseils concrets.",
      fa: "توماس از بهبود پس از تصادف‌ها و رویدادهای دشوار حمایت می‌کند و مراقبت آگاه به تروما را با راهنمایی عملی و پایدار می‌آمیزد.",
    },
    imageQuery: "professional therapist man calm portrait soft natural light",
  },
];
