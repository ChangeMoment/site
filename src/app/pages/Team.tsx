import { ArrowRight, Brain, HeartHandshake, Languages, MonitorCheck, ShieldCheck, UsersRound, Quote } from "lucide-react";
import { Seo } from "../components/Seo";
import { absoluteSiteUrl } from "../lib/seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeading, LinkButton } from "../components/ui-kit";
import { CTABand } from "../components/CTABand";
import { useLang } from "../i18n/LanguageProvider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import bitaPhoto from "../../imports/bita-ramezannia-portrait.jpg";

const copy = {
  en: {
    bita: {
      founderEyebrow: "Founder & Director",
      credentials: "MA, RCC · BCACC #19727",
      bioParagraphs: [
        "I created ChangeMoment from a simple belief: meaningful change can begin in a single moment — a moment of understanding ourselves differently, recognizing a pattern, or seeing a new possibility. To me, change is not a destination; it is an ongoing journey of becoming more aware, more connected with ourselves, and more aligned with the life we want to live.",
        "I hold a Master's degree in Psychology and two Bachelor's degrees in Clinical Counselling and Sociology. This background has helped me understand people not only through their individual experiences, but also through the relationships, cultures, communities, and social environments that shape them. For more than a decade, I have worked with adults and couples through a wide range of emotional, relational, and life challenges.",
        "I believe counselling is more than learning coping skills or finding short-term ways to change a behaviour. Practical tools can certainly be helpful, but deeper and more lasting change often comes from understanding what is underneath our distress — our emotions, fears, relationship patterns, and the experiences that have shaped the way we see ourselves and others. I believe each of us carries a capacity for healing and growth, and therapy can help us reconnect with and strengthen that potential through empathy, compassion, curiosity, and genuine human connection.",
        "My own experience of immigration has also deeply shaped the way I work. Living between cultures has given me a personal understanding of the changes immigration can bring to our identity, sense of belonging, relationships, and connection to ourselves. It allows me to meet immigrant clients with both professional knowledge and lived understanding, while respecting that every immigration story is unique.",
        "Beyond my clinical work, I serve as Board Chair of TrueNetwork Community Solutions Society, a nonprofit organization in British Columbia. This community involvement reflects my broader belief that our well-being is shaped not only by what happens within us, but also by the families, cultures, communities, and environments we are part of.",
      ],
      quoteText: "Therapy is most powerful when it creates space for genuine understanding — of ourselves, our patterns, and the connections that shape us.",
      approachEyebrow: "Therapeutic Framework",
      approachHeading: "My Approach to Therapy",
      approachItems: [
        { title: "Psychodynamic Psychotherapy", body: "We explore the deeper roots of emotions and repeating patterns, creating greater self-understanding and space for meaningful, long-lasting change." },
        { title: "Emotion-Focused Therapy (EFT)", body: "We work with underlying emotions and relationship patterns to support healing, stronger connection, and more secure ways of relating." },
        { title: "Attachment-Focused Practice", body: "We explore how important relationships have shaped the way you experience trust, closeness, and safety, helping you build healthier and more secure connections." },
        { title: "Mindfulness-Based Practice", body: "We build awareness of thoughts and emotions with less judgment, creating space for acceptance, growth, and more intentional responses." },
      ],
      focusEyebrow: "Areas of Focus",
      focusHeading: "Who I Have the Privilege to Work With",
      focusItems: [
        { title: "Anxiety, Depression, Loss & Grief", body: "Finding greater relief, steadier balance, and a renewed sense of hope." },
        { title: "Relational & Attachment Trauma", body: "Restoring safety, trust, and the capacity for healthier connection." },
        { title: "Couples & Relationship Distress", body: "Strengthening understanding, communication, and closeness." },
        { title: "Identity & Self-Worth", body: "Developing greater self-understanding, confidence, and self-acceptance." },
        { title: "LGBTQ+ Community", body: "Supporting identity, belonging, relationships, and authentic living." },
      ],
    },
    introEyebrow: "Care teams, not profiles",
    introTitle: "Care begins with what you need and the kind of support that fits.",
    introBody:
      "ChangeMoment brings together therapists with complementary training, languages, and clinical focus areas. You do not need to decide what kind of care you need before you reach out; we begin by listening to what has been feeling hard.",
    teamsTitle: "The care teams we offer",
    teamsSubtitle: "Each team is designed around a different kind of support, with the same calm, professional standard of care.",
    fitTitle: "How we begin with you",
    fitBody:
      "If you are new, start with a free consultation. We listen to what is happening, answer your questions, and make sense of a next step together—without asking you to diagnose yourself first.",
    ctaTitle: "You do not need to know where to begin.",
    ctaBody: "Start with a free consultation and tell us what has been feeling difficult.",
    consultation: "Book a Free Consultation",
    teams: [
      {
        title: "Individual Counselling Team",
        body: "For anxiety, depression, grief, life transitions, identity, stress, and moments when you need a steady private space to understand yourself more clearly.",
        helps: ["Emotional regulation", "Self-understanding", "Personal growth"],
      },
      {
        title: "Relationship & Family Support Team",
        body: "For couples, families, and relational patterns that need more safety, communication, repair, and compassionate structure.",
        helps: ["Communication", "Conflict repair", "Attachment patterns"],
      },
      {
        title: "Trauma-Informed Care Team",
        body: "For people carrying painful experiences, nervous-system overwhelm, or a sense of being stuck in survival mode.",
        helps: ["Stabilization", "Safety", "Gentle processing"],
      },
      {
        title: "Multilingual Care Team",
        body: "For clients who feel most understood in English, Persian/Farsi, or French, and want care that respects language, culture, and nuance.",
        helps: ["English", "Persian / Farsi", "French"],
      },
      {
        title: "Online Counselling Team",
        body: "For clients who prefer flexible, secure sessions from home while receiving the same depth of professional care.",
        helps: ["Flexible access", "Private sessions", "Consistent support"],
      },
      {
        title: "Clinical Intake & Support Team",
        body: "For new clients who are not sure where to begin. We listen to what is happening and help make the next step feel clearer and less overwhelming.",
        helps: ["Free consultation", "Thoughtful listening", "Gentle guidance"],
      },
    ],
    steps: ["Tell us what brings you here", "We listen and make sense of it together", "Take a next step that feels manageable"],
  },
  fa: {
    bita: {
      founderEyebrow: "بنیان‌گذار و مدیر",
      credentials: "MA, RCC · BCACC #19727",
      bioParagraphs: [
        "من ChangeMoment را بر اساس یک باور ساده بنا کردم: تغییر معنادار می‌تواند از یک لحظه‌ی کوچک آغاز شود — لحظه‌ای که خودمان را متفاوت می‌بینیم، الگویی را می‌شناسیم، یا امکانی تازه می‌یابیم. به نظر من، تغییر یک مقصد نیست؛ سفری پیوسته است برای آگاه‌ شدن، ارتباط عمیق‌ با خود، و حرکت به سوی زندگی‌ای که می‌خواهیم.",
        "من دارای مدرک کارشناسی ارشد روانشناسی و دو مدرک کارشناسی در مشاوره‌ی بالینی و جامعه‌شناسی هستم. این پیشینه به من کمک کرده تا انسان‌ها را نه‌تنها از منظر تجربیات فردی‌شان، بلکه از طریق روابط، فرهنگ‌ها، جوامع و محیط‌های اجتماعی‌شان بفهمم. بیش از یک دهه است که با بزرگسالان و زوج‌ها در طیف گسترده‌ای از چالش‌های هیجانی، ارتباطی و زندگی کار می‌کنم.",
        "من باور دارم مشاوره چیزی فراتر از یادگیری مهارت یا راهکارهای کوتاه‌مدت برای تغییر رفتار است. ابزارهای عملی می‌توانند مفید باشند، اما تغییر عمیق‌ و ماندگار اغلب از فهمیدن آنچه زیر رنج ماست سرچشمه می‌گیرد — احساسات، ترس‌ها، الگوهای ارتباطی، و تجربیاتی که نگاه ما به خودمان و دیگران را شکل داده‌اند. من معتقدم هر یک از ما ظرفیتی برای بهبود و رشد در خود داریم و درمان می‌تواند از طریق همدلی، شفقت، کنجکاوی و ارتباط انسانی اصیل، ما را دوباره به این ظرفیت متصل کند.",
        "تجربه‌ی شخصی من از مهاجرت نیز به شکل عمیقی بر شیوه‌ی کارم تأثیر گذاشته است. زندگی میان دو فرهنگ به من درکی شخصی از تغییراتی داده که مهاجرت می‌تواند در هویت، حس تعلق، روابط و ارتباط ما با خودمان ایجاد کند. این تجربه به من این امکان را داده که مراجعان مهاجر را با دانش حرفه‌ای و درک تجربی ملاقات کنم، اگرچه باور من این است که هر داستان مهاجرتی منحصربه‌فرد است.",
        "فراتر از کار بالینی‌ام، به عنوان عضوی از هیئت‌مدیره‌ی TrueNetwork Community Solutions Society، یک سازمان غیرانتفاعی در بریتیش‌کلمبیا، فعالیت می‌کنم. این مشارکت اجتماعی بازتاب این باور من است که سلامت ما نه‌تنها توسط آنچه درون‌مان می‌گذرد، بلکه توسط خانواده‌، فرهنگ‌، جوامع و محیط‌هایی که بخشی از آن‌ها هستیم، شکل می‌گیرد.",
      ],
      quoteText: "تراپی زمانی قدرتمند است که فضایی برای درک واقعی ایجاد کند — از خودمان، از الگوهایمان، و از روابطی که هویت ما را شکل‌ داده‌اند.",
      approachEyebrow: "چارچوب درمانی",
      approachHeading: "رویکرد من به درمان",
      approachItems: [
        { title: "روان‌درمانی پویشی", body: "ما باهم ریشه‌های عمیق‌تر هیجانات و الگوهای تکرارشونده را کشف می‌کنیم تا خودشناسی بیشتری بیابیم و فضایی برای تغییری معنادار و پایدار ایجاد کنیم." },
        { title: "درمان هیجان‌مدار (EFT)", body: "با هیجانات زیرین و الگوهای ارتباطی کار می‌کنیم تا به بهبود، ارتباط عمیق‌ و شیوه‌های امن‌ ارتباطی دست یابیم." },
        { title: "رویکرد مبتنی بر دلبستگی", body: "باهم کشف می‌کنیم چگونه روابط مهم زندگی، تجربه‌ی ما از اعتماد، صمیمیت و امنیت را شکل داده‌اند و به شما کمک می‌کنیم پیوندهایی سالم‌ و امن‌ بسازید." },
        { title: "رویکرد ذهن‌آگاهی", body: "آگاهی بدون قضاوت از افکار و هیجانات را می‌پرورانیم و باهم فضایی برای پذیرش، رشد و پاسخ‌های آگاهانه‌ خلق می‌کنیم." },
      ],
      focusEyebrow: "حوزه‌های تخصصی",
      focusHeading: "افتخار کمک به شما در چه زمینه‌هایی را دارم؟",
      focusItems: [
        { title: "اضطراب، افسردگی، فقدان و سوگ", body: "یافتن آرامش، تعادل پایدار و حس تازه‌ای از امید." },
        { title: "ترومای ارتباطی و دلبستگی", body: "بازیابی امنیت، اعتماد و ظرفیت برای ارتباطی سالم‌تر." },
        { title: "زوج‌ها و چالش‌های ارتباطی", body: "تقویت درک متقابل، گفت‌وگو و صمیمیت." },
        { title: "هویت و ارزش خود", body: "پرورش خودشناسی عمیق‌، اعتمادبه‌نفس و پذیرش خود." },
        { title: "جامعه‌ی LGBTQ+", body: "حمایت از هویت، تعلق، روابط و زندگی اصیل." },
      ],
    },
    introEyebrow: "تیم درمانی، نه فهرستی از اسم‌ها",
    introTitle: "مشاوره با توجه به نیاز شما و هدف شما از درمان شکل می‌گیرد.",
    introBody:
      "در ChangeMoment درمانگرانی با تجربه‌ها، زبان‌ها و حوزه‌های تخصصی متفاوت کنار هم کار می‌کنند. لازم نیست پیش از تماس بدانید دقیقاً چه نوع کمکی می‌خواهید؛ ما از شنیدن آنچه این روزها برایتان سخت شده شروع می‌کنیم.",
    teamsTitle: "تیم‌های درمانی ما",
    teamsSubtitle: "هر تیم برای نوعی نیاز طراحی شده است، با همان فضای آرام، حرفه‌ای و امن.",
    fitTitle: "چطور از شما شروع می‌کنیم",
    fitBody:
      "اگر برای اولین بار مراجعه می‌کنید، می‌توانید با یک مشاوره رایگان شروع کنید. با دقت گوش می‌دهیم، به پرسش‌ها پاسخ می‌دهیم و بدون اینکه لازم باشد خودتان را تشخیص دهید، قدم بعدی را با هم روشن می‌کنیم.",
    ctaTitle: "لازم نیست از همین حالا بدانید از کجا شروع کنید.",
    ctaBody: "با یک مشاوره رایگان شروع کنید و بگویید این روزها چه چیزی برایتان سخت شده است.",
    consultation: "رزرو مشاوره رایگان",
    teams: [
      { title: "تیم مشاوره فردی", body: "برای اضطراب، افسردگی، سوگ، تغییرات زندگی، هویت، استرس و زمان‌هایی که نیاز دارید در فضایی امن خودتان را بهتر بفهمید.", helps: ["تنظیم هیجان", "خودشناسی", "رشد فردی"] },
      { title: "تیم روابط و خانواده", body: "برای زوج‌ها و خانواده‌هایی که به گفت‌وگوی امن‌تر، ترمیم رابطه و الگوهای سالم‌تر ارتباطی نیاز دارند.", helps: ["گفت‌وگو", "ترمیم تعارض", "الگوهای دلبستگی"] },
      { title: "تیم مراقبت آگاه از تروما", body: "برای افرادی که تجربه‌های دردناک، فشار عصبی یا حس گیر افتادن در حالت بقا را تجربه می‌کنند.", helps: ["ثبات", "امنیت", "پردازش آرام"] },
      { title: "تیم چندزبانه", body: "برای مراجعانی که می‌خواهند به انگلیسی، فارسی یا فرانسوی راحت‌تر صحبت کنند و مراقبتی آگاه به زبان و فرهنگ دریافت کنند.", helps: ["انگلیسی", "فارسی", "فرانسوی"] },
      { title: "تیم مشاوره آنلاین", body: "برای مراجعانی که جلسه آنلاین و منعطف را ترجیح می‌دهند، اما همچنان مراقبتی جدی، امن و حرفه‌ای می‌خواهند.", helps: ["دسترسی منعطف", "جلسات خصوصی", "حمایت پیوسته"] },
      { title: "تیم پذیرش و همراهی اولیه", body: "برای مراجعان جدیدی که نمی‌دانند از کجا شروع کنند. با هم به آنچه می‌گذرد نگاه می‌کنیم تا قدم بعدی روشن‌تر و کم‌فشارتر شود.", helps: ["مشاوره رایگان", "شنیدن دقیق", "راهنمایی آرام"] },
    ],
    steps: ["به ما می‌گویید چه چیزی باعث شده اینجا باشید", "باهم درباره آنچه تجربه می‌کنید تامل می‌کنیم", "قدم بعدی را با آرامش برمی‌دارید"],
  },
  fr: {
    bita: {
      founderEyebrow: "Fondatrice et directrice",
      credentials: "MA, RCC · BCACC #19727",
      bioParagraphs: [
        "J'ai créé ChangeMoment à partir d'une conviction simple : un changement significatif peut naître d'un seul moment — un moment de compréhension différente de soi-même, de reconnaissance d'un schéma, ou de découverte d'une nouvelle possibilité. Pour moi, le changement n'est pas une destination ; c'est un voyage continu vers une plus grande conscience de soi, une connexion plus profonde avec soi-même, et un meilleur alignement avec la vie que nous souhaitons vivre.",
        "Je détiens une maîtrise en psychologie et deux baccalauréats en counselling clinique et en sociologie. Cette formation m'a aidée à comprendre les personnes non seulement à travers leurs expériences individuelles, mais aussi à travers les relations, les cultures, les communautés et les environnements sociaux qui les façonnent. Depuis plus d'une décennie, j'accompagne des adultes et des couples face à un large éventail de défis émotionnels, relationnels et existentiels.",
        "Je crois que le counselling va bien au-delà de l'apprentissage de stratégies d'adaptation ou de la recherche de solutions à court terme pour modifier un comportement. Les outils pratiques peuvent certainement être utiles, mais un changement plus profond et plus durable vient souvent de la compréhension de ce qui se trouve sous notre détresse — nos émotions, nos peurs, nos schémas relationnels, et les expériences qui ont façonné notre façon de nous percevoir et de percevoir les autres. Je crois que chacun d'entre nous porte une capacité de guérison et de croissance, et que la thérapie peut nous aider à nous reconnecter à ce potentiel et à le renforcer grâce à l'empathie, à la compassion, à la curiosité et à la véritable connexion humaine.",
        "Ma propre expérience de l'immigration a également profondément influencé ma façon de travailler. Vivre entre deux cultures m'a donné une compréhension personnelle des changements que l'immigration peut apporter à notre identité, à notre sentiment d'appartenance, à nos relations et à notre connexion avec nous-mêmes. Cela me permet d'accueillir les personnes immigrantes avec à la fois une connaissance professionnelle et une compréhension vécue, tout en respectant que chaque histoire d'immigration est unique.",
        "Au-delà de mon travail clinique, j'assume la présidence du conseil d'administration de TrueNetwork Community Solutions Society, un organisme à but non lucratif en Colombie-Britannique. Cet engagement communautaire reflète ma conviction plus large que notre bien-être est façonné non seulement par ce qui se passe en nous, mais aussi par les familles, les cultures, les communautés et les environnements dont nous faisons partie.",
      ],
      quoteText: "La thérapie est la plus puissante quand elle crée un espace de compréhension authentique — de soi-même, de nos schémas, et des liens qui nous ont formés.",
      approachEyebrow: "Cadre thérapeutique",
      approachHeading: "Mon approche en thérapie",
      approachItems: [
        { title: "Psychothérapie psychodynamique", body: "Nous explorons ensemble les racines profondes des émotions et des schémas répétitifs, pour développer une meilleure connaissance de soi et créer un espace de changement significatif et durable." },
        { title: "Thérapie centrée sur les émotions (TCE)", body: "Nous travaillons sur les émotions sous-jacentes et les schémas relationnels pour soutenir la guérison, un lien plus fort et des façons de se relier plus sécurisantes." },
        { title: "Pratique centrée sur l'attachement", body: "Nous explorons comment les relations importantes ont façonné votre façon de vivre la confiance, la proximité et la sécurité, pour vous aider à construire des liens plus sains et plus sécurisants." },
        { title: "Pratique basée sur la pleine conscience", body: "Nous cultivons une conscience des pensées et des émotions avec moins de jugement, créant ainsi un espace d'acceptation, de croissance et de réponses plus intentionnelles." },
      ],
      focusEyebrow: "Domaines d'intervention",
      focusHeading: "Les personnes avec qui j'ai le privilège de travailler",
      focusItems: [
        { title: "Anxiété, dépression, perte et deuil", body: "Trouver davantage de soulagement, un équilibre plus stable et un sens renouvelé de l'espoir." },
        { title: "Trauma relationnel et d'attachement", body: "Retrouver la sécurité, la confiance et la capacité à des liens plus sains." },
        { title: "Détresse conjugale et relationnelle", body: "Renforcer la compréhension mutuelle, la communication et la proximité." },
        { title: "Identité et estime de soi", body: "Développer une meilleure connaissance de soi, de la confiance et une plus grande acceptation de soi." },
        { title: "Communauté LGBTQ+", body: "Soutenir l'identité, l'appartenance, les relations et une vie authentique." },
      ],
    },
    introEyebrow: "Des équipes de soin, pas des profils",
    introTitle: "L’accompagnement commence par vos besoins et le type de soutien qui vous convient.",
    introBody:
      "ChangeMoment réunit des thérapeutes aux formations, langues et domaines cliniques complémentaires. Vous n’avez pas besoin de savoir quel type de soin il vous faut avant de nous joindre; nous commençons par écouter ce qui est difficile en ce moment.",
    teamsTitle: "Nos équipes de soin",
    teamsSubtitle: "Chaque équipe répond à un besoin différent, avec la même qualité de soin calme, professionnelle et sécurisante.",
    fitTitle: "Comment nous commençons avec vous",
    fitBody:
      "Si vous êtes nouveau, commencez par une consultation gratuite. Nous écoutons ce qui se passe, répondons à vos questions et réfléchissons avec vous au prochain pas, sans vous demander de vous diagnostiquer d’abord.",
    ctaTitle: "Vous n’avez pas besoin de savoir par où commencer.",
    ctaBody: "Commencez par une consultation gratuite et racontez-nous ce qui est difficile en ce moment.",
    consultation: "Réserver une consultation gratuite",
    teams: [
      { title: "Équipe de counselling individuel", body: "Pour l’anxiété, la dépression, le deuil, les transitions de vie, l’identité, le stress et le besoin d’un espace personnel stable.", helps: ["Régulation émotionnelle", "Compréhension de soi", "Croissance personnelle"] },
      { title: "Équipe relations et famille", body: "Pour les couples, familles et dynamiques relationnelles qui demandent sécurité, communication, réparation et structure.", helps: ["Communication", "Réparation", "Attachement"] },
      { title: "Équipe sensible au trauma", body: "Pour les personnes portant des expériences douloureuses, une surcharge nerveuse ou un sentiment de survie constante.", helps: ["Stabilisation", "Sécurité", "Traitement doux"] },
      { title: "Équipe multilingue", body: "Pour les clients qui se sentent mieux compris en anglais, persan/farsi ou français, avec une attention à la langue et à la culture.", helps: ["Anglais", "Persan / Farsi", "Français"] },
      { title: "Équipe de counselling en ligne", body: "Pour les clients qui préfèrent des séances sécurisées et flexibles depuis chez eux, avec la même profondeur de soin.", helps: ["Accès flexible", "Séances privées", "Soutien continu"] },
      { title: "Équipe d’accueil et de soutien initial", body: "Pour les nouveaux clients qui ne savent pas par où commencer. Nous écoutons ce qui se passe afin que le prochain pas soit plus clair et moins lourd.", helps: ["Consultation gratuite", "Écoute attentive", "Orientation douce"] },
    ],
    steps: ["Vous nous dites ce qui vous amène", "Nous donnons du sens à ce qui se passe ensemble", "Vous avancez d’un pas qui vous semble possible"],
  },
};

const icons = [Brain, HeartHandshake, ShieldCheck, Languages, MonitorCheck, UsersRound];

export function Team() {
  const { t, lang } = useLang();
  const page = copy[lang];

  return (
    <>
      <Seo
        title={t("team.meta.title")}
        description={t("team.meta.desc")}
        path="/team"
        schemaType="ProfilePage"
        jsonLd={[
          {
            "@type": "Person",
            "@id": "https://changemoment.ca/team#bita-ramezannia",
            name: "Bita Ramezannia",
            jobTitle: page.bita.founderEyebrow,
            image: absoluteSiteUrl(bitaPhoto),
            worksFor: { "@id": "https://changemoment.ca/#organization" },
          },
        ]}
      />

      <PageHero
        title={t("team.hero.heading")}
        body={t("team.hero.body")}
        contentClassName={lang !== "fr" ? "lg:max-w-none" : ""}
        mirrorDecoration={lang === "fa"}
      >
        <LinkButton to="/book" arrow>{page.consultation}</LinkButton>
      </PageHero>

      {/* ── Section 1: Founder bio ───────────────────────────── */}
      <Section>
        <Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
            {/* Text */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--brand-copper)]">{page.bita.founderEyebrow}</p>
              <h2 className="mt-2" style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)" }}>Bita Ramezannia</h2>
              <p className="mt-1 text-base text-[var(--brand-ink-muted)]" dir="ltr">{page.bita.credentials}</p>
              <div className="mt-7 space-y-4 text-[var(--brand-ink-muted)] leading-relaxed">
                {page.bita.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            {/* Photo */}
            <div className="lg:sticky lg:top-28">
              <div
                className="relative overflow-hidden rounded-[2.5rem] rounded-tl-none shadow-[0_30px_70px_-30px_rgba(91,61,44,0.32)]"
                style={{ paddingBottom: "133.33%" }}
              >
                <img
                  src={bitaPhoto}
                  alt={`Bita Ramezannia — ${page.bita.founderEyebrow}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-5 rounded-2xl border border-[var(--brand-muted-olive)]/18 bg-[var(--brand-bone-soft)] px-5 py-4">
                <Quote className="size-5 text-[var(--brand-copper)] mb-2" strokeWidth={1.5} />
                <p className="text-sm italic leading-relaxed text-[var(--brand-ink-muted)]">{page.bita.quoteText}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Section 2: Approach ──────────────────────────────── */}
      <section className="bg-[var(--brand-bone-soft)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-[var(--brand-deep-olive)]/60 text-center">{page.bita.approachEyebrow}</p>
            <h2 className="mt-2 text-center" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)" }}>{page.bita.approachHeading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.bita.approachItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-[var(--brand-muted-olive)]/18 bg-white p-7 shadow-[0_6px_24px_-12px_rgba(52,56,45,0.12)]">
                  <span className="font-heading text-4xl text-[var(--brand-muted-olive)]/50">0{i + 1}</span>
                  <h3 style={{ fontSize: "1.15rem" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-ink-muted)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Who I work with ───────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-widest text-[var(--brand-deep-olive)]/60">{page.bita.focusEyebrow}</p>
            <h2 className="mt-2 text-center text-[var(--brand-ink)]" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)" }}>{page.bita.focusHeading}</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {page.bita.focusItems.map((item, i) => (
              <div key={item.title} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
                <Reveal delay={i * 60}>
                  <div className="flex h-full flex-col gap-2 rounded-2xl border border-[var(--brand-muted-olive)]/18 bg-[var(--brand-sage-soft)] p-6 shadow-[0_18px_40px_-30px_rgba(52,56,45,0.28)]">
                    <h3 className="text-[var(--brand-ink)]" style={{ fontSize: "1.05rem" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--brand-ink-muted)]">{item.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Intro (existing) ──────────────────────── */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal>
            <div>
              <h2 className="max-w-xl">{page.introTitle}</h2>
              <p className="mt-5 max-w-2xl text-[var(--brand-ink-muted)]">{page.introBody}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2.5rem] border border-[var(--brand-muted-olive)]/20 bg-[var(--brand-bone-soft)] p-5 md:p-7">
              <div className="grid gap-3">
                {page.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/75 p-4">
                    <span className="font-heading text-3xl text-[var(--brand-muted-olive)]">0{i + 1}</span>
                    <span className="text-[var(--brand-ink)]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>



      <CTABand />
    </>
  );
}
