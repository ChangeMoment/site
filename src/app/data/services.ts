import type { Lang } from "../i18n/LanguageProvider";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  slug: string;
  icon: string; // lucide-react icon name
  /** localized short fields shown on cards and heroes */
  name: Record<Lang, string>;
  short: Record<Lang, string>;
  intro: Record<Lang, string>;
  /** deeper content (English master; section labels are localized) */
  help: string[];
  experiencing: string[];
  expect: string[];
  who: string[];
  faqs: ServiceFAQ[];
  related: string[]; // service ids
  imageQuery: string; // unsplash query for the service visual
}

export const services: Service[] = [
  {
    id: "online-counselling",
    slug: "online-counselling",
    icon: "Video",
    name: { en: "Online Counselling", fr: "Counselling en ligne", fa: "مشاوره آنلاین" },
    short: {
      en: "Secure, private therapy from the comfort of your own space, wherever you are.",
      fr: "Une thérapie sécurisée et privée, dans le confort de votre espace, où que vous soyez.",
      fa: "درمانی امن و خصوصی در آسایش فضای خودتان، هرجا که باشید",
    },
    intro: {
      en: "Sometimes the right support shouldn’t depend on distance. Online counselling brings calm, professional care to wherever you feel most comfortable.",
      fr: "Le bon soutien ne devrait pas dépendre de la distance. Le counselling en ligne apporte des soins calmes et professionnels là où vous vous sentez le plus à l’aise.",
      fa: "گاهی دریافت حمایت نباید به فاصله یا رفت‌وآمد وابسته باشد. مشاوره آنلاین کمک می‌کند در فضایی که برایتان امن‌تر و راحت‌تر است، به مراقبت حرفه‌ای دسترسی داشته باشید.",
    },
    help: [
      "Access experienced therapists without travel or commute",
      "Maintain continuity of care, even when life is busy or you move",
      "Create a familiar, private setting for difficult conversations",
      "Reduce the barriers that can make reaching out feel hard",
    ],
    experiencing: [
      "Difficulty finding time for in-person appointments",
      "Living far from clinics or preferring to stay home",
      "Feeling more open when you’re in your own space",
      "Wanting flexible, consistent support",
    ],
    expect: [
      "A secure, private video session on your preferred device",
      "The same depth of care as an in-person appointment",
      "A calm, structured space guided by your therapist",
      "Simple, secure booking and appointment reminders",
    ],
    who: [
      "People with busy or unpredictable schedules",
      "Those who live outside major centres",
      "Anyone who feels more at ease at home",
      "People balancing care with work or family",
    ],
    faqs: [
      { q: "Is online counselling as effective as in-person?", a: "Research consistently shows online therapy can be just as effective for many concerns. Your therapist will help you decide what fits best for you." },
      { q: "Is my session private and secure?", a: "Yes. Sessions take place over a secure, confidential platform, and booking is handled through a protected process." },
      { q: "What do I need to join?", a: "A quiet, private space, a stable internet connection, and a device with a camera. That’s it." },
    ],
    related: ["individual-counselling", "anxiety", "depression"],
    imageQuery: "calm person video call laptop home soft light",
  },
  {
    id: "individual-counselling",
    slug: "individual-counselling",
    icon: "User",
    name: { en: "Individual Counselling", fr: "Counselling individuel", fa: "مشاوره فردی" },
    short: {
      en: "One-on-one support to understand yourself and move through what feels heavy.",
      fr: "Un accompagnement individuel pour mieux se comprendre et alléger ce qui pèse.",
      fa: "درمان فردی برای شناخت خود و عبور از چالش ها و بحران ها",
    },
    intro: {
      en: "A space that belongs entirely to you — to think, feel, and understand yourself with the steady support of a professional who listens.",
      fr: "Un espace entièrement à vous — pour penser, ressentir et vous comprendre avec le soutien constant d’un professionnel à l’écoute.",
      fa: "فضایی که کاملاً از آنِ شماست — برای اندیشیدن، احساس کردن و شناخت خود با حمایت پیوسته کسی که می‌شنود.",
    },
    help: [
      "Understand patterns that keep showing up in your life",
      "Build practical tools for stress, emotions, and change",
      "Strengthen self-awareness and self-compassion",
      "Work toward goals that matter to you, at your pace",
    ],
    experiencing: [
      "Feeling stuck, overwhelmed, or unlike yourself",
      "Recurring thoughts or emotions that feel hard to manage",
      "A sense that something needs to change",
      "Wanting to understand yourself more deeply",
    ],
    expect: [
      "A warm, confidential first session to understand your goals",
      "A collaborative plan tailored to you",
      "Evidence-based approaches adapted to your needs",
      "A steady, non-judgemental space session to session",
    ],
    who: [
      "Anyone navigating a difficult season",
      "People wanting personal growth and clarity",
      "Those processing stress, change, or life transitions",
      "Anyone who simply needs to be heard",
    ],
    faqs: [
      { q: "How long does counselling take?", a: "It’s different for everyone. Some people come for a few focused sessions; others stay longer. You and your therapist decide together." },
      { q: "What approaches do you use?", a: "Our therapists draw on evidence-based methods and adapt them to you, rather than using a one-size-fits-all model." },
      { q: "What if I don’t know where to start?", a: "That’s completely okay. Your therapist will gently guide the first conversation." },
    ],
    related: ["anxiety", "depression", "trauma"],
    imageQuery: "calm individual therapy session warm natural light",
  },
  {
    id: "relationship-and-couples-counselling",
    slug: "relationship-and-couples-counselling",
    icon: "HeartHandshake",
    name: { en: "Relationship & Couples Counselling", fr: "Counselling de couple", fa: "مشاوره ازدواج و زوج درمانی" },
    short: {
      en: "Reconnect, communicate, and rebuild understanding together in a supportive space.",
      fr: "Se reconnecter, communiquer et reconstruire la compréhension dans un espace bienveillant.",
      fa: "پیوند دوباره و بازسازی درک متقابل در فضایی همدلانه",
    },
    intro: {
      en: "Relationships move through seasons. Together we create space to understand each other again and find a way forward that feels true to both of you.",
      fr: "Les relations traversent des saisons. Ensemble, nous créons un espace pour se comprendre à nouveau et avancer fidèlement à vous deux.",
      fa: "روابط فصل‌های گوناگون را پشت سر می‌گذارند. با هم فضایی می‌سازیم تا دوباره یکدیگر را درک کنید و راهی بیابید که برای هر دوی شما درست باشد.",
    },
    help: [
      "Improve communication and reduce recurring conflict",
      "Rebuild trust, closeness, and emotional safety",
      "Understand each other’s needs and patterns",
      "Navigate transitions, stress, or difficult decisions together",
    ],
    experiencing: [
      "Frequent misunderstandings or the same arguments",
      "Feeling distant, disconnected, or unheard",
      "Navigating a major change or breach of trust",
      "Wanting to strengthen an already good relationship",
    ],
    expect: [
      "A balanced space where both partners are heard",
      "A neutral, respectful therapist guiding the conversation",
      "Practical communication tools you can use at home",
      "A shared understanding of your goals as a couple",
    ],
    who: [
      "Couples at any stage of their relationship",
      "Partners facing conflict, distance, or change",
      "Those wanting to deepen connection",
      "Anyone preparing for a big transition together",
    ],
    faqs: [
      { q: "Do both partners need to attend?", a: "Couples work is most effective with both partners present, though individual sessions can sometimes support the process." },
      { q: "Will the therapist take sides?", a: "No. Your therapist stays neutral and works for the relationship, helping both of you feel understood." },
      { q: "What if we’re unsure about staying together?", a: "That uncertainty is welcome here. Counselling can help you find clarity, whatever the outcome." },
    ],
    related: ["family-counselling", "individual-counselling", "anger-management"],
    imageQuery: "couple talking calm warm supportive natural light",
  },
  {
    id: "family-counselling",
    slug: "family-counselling",
    icon: "Users",
    name: { en: "Family Counselling", fr: "Counselling familial", fa: "مشاوره خانواده" },
    short: {
      en: "Support for families to understand one another and grow stronger together.",
      fr: "Un soutien pour que les familles se comprennent et se renforcent ensemble.",
      fa: "حمایت برای خانواده‌ها تا بتوانند یکدیگر را درک کنند و در کنار هم قوی‌تر شوند",
    },
    intro: {
      en: "Every family has its own rhythm. When that rhythm feels strained, counselling offers a calm space to listen, understand, and reconnect.",
      fr: "Chaque famille a son propre rythme. Lorsqu’il se tend, le counselling offre un espace calme pour écouter, comprendre et se reconnecter.",
      fa: "هر خانواده ریتم خود را دارد. وقتی این ریتم پرتنش می‌شود، مشاوره فضایی آرام برای شنیدن، درک و بازگشت پیوند فراهم می‌کند.",
    },
    help: [
      "Improve understanding and communication at home",
      "Navigate conflict, transitions, or parenting challenges",
      "Support children and teens within the family system",
      "Rebuild connection and a sense of safety together",
    ],
    experiencing: [
      "Ongoing tension or conflict at home",
      "Difficulty communicating across generations",
      "Adjusting to a major family change",
      "Worry about a child or teen’s wellbeing",
    ],
    expect: [
      "A welcoming space for the whole family",
      "A therapist who helps everyone feel heard",
      "Practical strategies for daily life",
      "A focus on strengths, not blame",
    ],
    who: [
      "Families facing conflict or change",
      "Parents seeking support and guidance",
      "Blended or growing families",
      "Anyone wanting a healthier home life",
    ],
    faqs: [
      { q: "Who should attend family sessions?", a: "It depends on your goals. Your therapist will help decide who to include and when." },
      { q: "Can children take part?", a: "Yes, when appropriate. Sessions are adapted to be comfortable for younger family members." },
      { q: "What if not everyone wants to come?", a: "That’s common. Meaningful change can still begin with those who are ready to start." },
    ],
    related: ["relationship-and-couples-counselling", "individual-counselling", "adhd"],
    imageQuery: "family together calm home warm natural light",
  },
  {
    id: "anxiety",
    slug: "anxiety",
    icon: "Waves",
    name: { en: "Anxiety", fr: "Anxiété", fa: "اضطراب" },
    short: {
      en: "Calm the worry, quiet the overwhelm, and find steadier ground again.",
      fr: "Apaiser l’inquiétude, calmer le débordement et retrouver un sol plus stable.",
      fa: "آرام کردن نگرانی، آشفتگی و یافتن دوباره پایگاهی استوار",
    },
    intro: {
      en: "Anxiety can make everyday life feel loud and exhausting. Together we’ll find ways to quiet the noise and help you feel safe in your own body again.",
      fr: "L’anxiété peut rendre le quotidien bruyant et épuisant. Ensemble, nous apaiserons ce bruit pour que vous vous sentiez à nouveau en sécurité.",
      fa: "اضطراب می‌تواند زندگی روزمره را پرسروصدا و خسته‌کننده کند. با هم راه‌هایی می‌یابیم تا این سروصدا آرام شود و دوباره در بدن خود احساس امنیت کنید.",
    },
    help: [
      "Understand what drives your anxiety",
      "Learn tools to calm your body and mind",
      "Reduce avoidance and reclaim daily life",
      "Build lasting resilience, not just quick fixes",
    ],
    experiencing: [
      "Racing thoughts or constant worry",
      "Physical tension, restlessness, or trouble sleeping",
      "Avoiding situations that feel overwhelming",
      "Feeling on edge without knowing why",
    ],
    expect: [
      "A gentle, paced approach that never rushes you",
      "Evidence-based tools such as CBT and mindfulness",
      "Practical strategies for everyday moments",
      "A therapist who helps you feel safe and understood",
    ],
    who: [
      "People living with constant worry or stress",
      "Those experiencing panic or overwhelm",
      "Anyone avoiding situations due to fear",
      "People wanting calmer, steadier days",
    ],
    faqs: [
      { q: "Will I have to relive everything that worries me?", a: "No. We move at your pace, and you’re always in control of what you share." },
      { q: "Do you use medication?", a: "We provide counselling, not prescriptions, but we can work alongside your physician if helpful." },
      { q: "How soon will I feel better?", a: "Many people notice small shifts early on, with deeper change building over time." },
    ],
    related: ["depression", "trauma", "individual-counselling"],
    imageQuery: "calm misty nature peaceful soft morning light",
  },
  {
    id: "depression",
    slug: "depression",
    icon: "CloudSun",
    name: { en: "Depression", fr: "Dépression", fa: "افسردگی" },
    short: {
      en: "Gentle, steady support to move through heaviness and find light again.",
      fr: "Un soutien doux et constant pour traverser la lourdeur et retrouver la lumière.",
      fa: "درمانی آرام و پیوسته برای عبور از افسردگی و یافتن دوباره روشنی",
    },
    intro: {
      en: "When everything feels heavy and far away, you don’t have to carry it alone. Healing can begin gently, one small step at a time.",
      fr: "Quand tout semble lourd et lointain, vous n’avez pas à le porter seul. La guérison peut commencer doucement, un petit pas à la fois.",
      fa: "وقتی همه‌چیز سنگین و دور از دسترس به نظر می‌رسد، لازم نیست آن را تنهایی تحمل کنید. بهبود می‌تواند آرام و قدم‌به‌قدم شروع شود.",
    },
    help: [
      "Understand and ease the weight of depression",
      "Reconnect with energy, meaning, and motivation",
      "Build small, sustainable routines and supports",
      "Work through difficult thoughts with compassion",
    ],
    experiencing: [
      "Persistent low mood or emptiness",
      "Loss of interest, energy, or motivation",
      "Changes in sleep, appetite, or focus",
      "Feeling disconnected from yourself or others",
    ],
    expect: [
      "A warm, patient space with no pressure",
      "Evidence-based, compassionate approaches",
      "Gentle, achievable steps forward",
      "A therapist who walks alongside you",
    ],
    who: [
      "People feeling persistently low or numb",
      "Those who have lost interest in daily life",
      "Anyone feeling stuck or hopeless",
      "People wanting to feel like themselves again",
    ],
    faqs: [
      { q: "What if I don’t have the energy for therapy?", a: "That’s understood and welcomed. We start small and go gently — showing up is enough." },
      { q: "Is depression something therapy can really help?", a: "Yes. Counselling is one of the most effective supports for depression, often alongside other care." },
      { q: "What if I’m not sure it’s depression?", a: "You don’t need a diagnosis to begin. We’ll explore what you’re feeling together." },
    ],
    related: ["anxiety", "grief-and-loss", "individual-counselling"],
    imageQuery: "soft sunrise calm landscape hope gentle light",
  },
  {
    id: "trauma",
    slug: "trauma",
    icon: "ShieldCheck",
    name: { en: "Trauma", fr: "Traumatisme", fa: "تروما" },
    short: {
      en: "Safe, paced support to help you heal from what you’ve carried.",
      fr: "Un soutien sûr et progressif pour guérir de ce que vous portez.",
      fa: "درمانی امن و گام‌به‌گام برای التیام تجربه‌های دردناک",
    },
    intro: {
      en: "Trauma can stay with the body and mind long after an event. With safety and care, healing is possible — at a pace that protects you.",
      fr: "Le traumatisme peut rester dans le corps et l’esprit bien après l’événement. Avec sécurité et soin, la guérison est possible — à un rythme qui vous protège.",
      fa: "تروما می‌تواند مدت‌ها بعد از یک اتفاق در بدن و ذهن باقی بماند. در فضایی امن و با سرعتی که برای شما قابل‌تحمل است، بهبود ممکن می‌شود.",
    },
    help: [
      "Feel safer in your body and your daily life",
      "Understand how trauma affects you",
      "Process difficult experiences at a safe pace",
      "Rebuild trust, stability, and a sense of control",
    ],
    experiencing: [
      "Flashbacks, intrusive memories, or nightmares",
      "Feeling on guard, numb, or easily triggered",
      "Difficulty trusting or feeling safe",
      "The lasting impact of a painful experience",
    ],
    expect: [
      "A trauma-informed, deeply respectful approach",
      "Safety and stability before processing",
      "You always remain in control of the pace",
      "Evidence-based methods adapted to you",
    ],
    who: [
      "Survivors of difficult or painful experiences",
      "People affected by past or recent events",
      "Those feeling unsafe in their own bodies",
      "Anyone ready to heal with support",
    ],
    faqs: [
      { q: "Will I have to talk about the details?", a: "Not unless and until you’re ready. Safety comes first, and you set the pace." },
      { q: "Is it too late to heal from old trauma?", a: "It’s never too late. Healing is possible long after an experience." },
      { q: "What approaches do you use?", a: "We use trauma-informed, evidence-based methods tailored to your needs." },
    ],
    related: ["anxiety", "depression", "grief-and-loss"],
    imageQuery: "calm safe quiet nature still water soft light",
  },
  {
    id: "grief-and-loss",
    slug: "grief-and-loss",
    icon: "Feather",
    name: { en: "Grief & Loss", fr: "Deuil et perte", fa: "سوگ و فقدان" },
    short: {
      en: "Compassionate space to grieve, remember, and slowly find your footing.",
      fr: "Un espace bienveillant pour faire son deuil, se souvenir et retrouver ses repères.",
      fa: "فضایی همدلانه برای سوگواری، یادآوری و یافتن دوباره تعادل",
    },
    intro: {
      en: "Grief has no timeline and no single shape. Here, your loss is honoured, and you’re supported as you carry it in your own way.",
      fr: "Le deuil n’a ni calendrier ni forme unique. Ici, votre perte est honorée et vous êtes soutenu à votre manière.",
      fa: "سوگ نه زمان‌بندی دارد و نه شکلی یگانه. اینجا فقدان شما ارج نهاده می‌شود و در راه خودتان حمایت می‌شوید.",
    },
    help: [
      "Process loss in your own time and way",
      "Make space for difficult and mixed emotions",
      "Find ways to remember and carry what matters",
      "Move toward living alongside your grief",
    ],
    experiencing: [
      "The loss of a loved one or relationship",
      "Waves of sadness, anger, guilt, or numbness",
      "Difficulty adjusting to life after a loss",
      "Feeling alone in your grief",
    ],
    expect: [
      "A gentle, unhurried space to grieve",
      "No pressure to ‘move on’ before you’re ready",
      "Support for whatever you’re feeling",
      "A therapist who honours your loss",
    ],
    who: [
      "Anyone grieving a death or loss",
      "People facing major life changes",
      "Those struggling with complicated grief",
      "Anyone who needs space to mourn",
    ],
    faqs: [
      { q: "Is it normal to still grieve after a long time?", a: "Yes. Grief has no deadline, and support can help at any stage." },
      { q: "What if my loss isn’t a death?", a: "Grief can follow many kinds of loss. All of them are welcome here." },
      { q: "Will therapy make me forget?", a: "No. The goal is to help you carry your loss in a way that lets you live fully." },
    ],
    related: ["depression", "trauma", "individual-counselling"],
    imageQuery: "soft feather light calm gentle nature quiet",
  },
  {
    id: "anger-management",
    slug: "anger-management",
    icon: "Flame",
    name: { en: "Anger Management", fr: "Gestion de la colère", fa: "مدیریت خشم" },
    short: {
      en: "Understand your anger and respond with calm, clarity, and control.",
      fr: "Comprendre votre colère et réagir avec calme, clarté et maîtrise.",
      fa: "خشم خود را بشناسید و با آرامش و کنترل پاسخ دهید",
    },
    intro: {
      en: "Anger often carries an important message underneath. Together we’ll understand it and build calmer, healthier ways to respond.",
      fr: "La colère porte souvent un message important. Ensemble, nous le comprendrons et bâtirons des réactions plus saines et apaisées.",
      fa: "خشم اغلب پیامی مهم را در دل خود دارد. با هم آن را می‌فهمیم و راه‌هایی آرام‌تر و سالم‌تر برای پاسخ می‌سازیم.",
    },
    help: [
      "Understand the roots and triggers of your anger",
      "Build tools to respond instead of react",
      "Protect your relationships and wellbeing",
      "Feel more in control and at peace",
    ],
    experiencing: [
      "Frequent or intense anger",
      "Reactions you later regret",
      "Tension in your relationships",
      "Feeling overwhelmed by frustration",
    ],
    expect: [
      "A non-judgemental space to understand anger",
      "Practical tools you can use in the moment",
      "Exploration of what’s beneath the anger",
      "A calm, supportive therapist",
    ],
    who: [
      "Anyone who feels controlled by their anger",
      "People wanting calmer relationships",
      "Those reacting more than they’d like",
      "Anyone seeking more inner calm",
    ],
    faqs: [
      { q: "Is anger always a problem?", a: "No. Anger is healthy — it’s how we express it that we work on together." },
      { q: "Will I have to suppress my feelings?", a: "Not at all. The goal is to understand and channel your anger, not bury it." },
      { q: "How long does it take?", a: "Many people build helpful tools within a focused series of sessions." },
    ],
    related: ["individual-counselling", "relationship-and-couples-counselling", "anxiety"],
    imageQuery: "calm warm gentle sunset soft peaceful nature",
  },
  {
    id: "adhd",
    slug: "adhd",
    icon: "Sparkles",
    name: { en: "ADHD", fr: "TDAH", fa: "اختلال بیش‌فعالی و نقص توجه (ADHD)" },
    short: {
      en: "Support to work with your mind, build focus, and ease daily overwhelm.",
      fr: "Un soutien pour composer avec votre esprit, gagner en concentration et apaiser le quotidien.",
      fa: "تجربه‌ای نو برای همراهی با ذهن‌تان، ساختن تمرکز و کاهش آشفتگی روزمره",
    },
    intro: {
      en: "An ADHD mind works differently — not wrongly. Together we’ll find strategies that work with how you think, not against it.",
      fr: "Un esprit TDAH fonctionne différemment — pas incorrectement. Ensemble, nous trouverons des stratégies adaptées à votre façon de penser.",
      fa: "ذهن دارای ADHD متفاوت کار می‌کند — نه نادرست. با هم راهکارهایی می‌یابیم که با شیوه اندیشیدن شما همراه باشد، نه در برابر آن.",
    },
    help: [
      "Build focus, organisation, and routines that fit you",
      "Reduce overwhelm and self-criticism",
      "Understand your strengths and challenges",
      "Improve daily life, work, and relationships",
    ],
    experiencing: [
      "Difficulty with focus, time, or organisation",
      "Feeling overwhelmed by everyday tasks",
      "Restlessness or impulsivity",
      "Frustration or low self-esteem",
    ],
    expect: [
      "Practical, ADHD-informed strategies",
      "A strengths-based, supportive approach",
      "Tools tailored to how your mind works",
      "A therapist who understands ADHD",
    ],
    who: [
      "Adults and youth with ADHD",
      "People exploring a possible diagnosis",
      "Those struggling with focus or overwhelm",
      "Anyone wanting practical support",
    ],
    faqs: [
      { q: "Do you provide an ADHD diagnosis?", a: "We offer counselling and support; formal assessment is done by a qualified professional, and we can guide you." },
      { q: "Can therapy help without medication?", a: "Yes. Counselling builds skills and strategies that help with or without medication." },
      { q: "Is this for adults or children?", a: "We support both youth and adults living with ADHD." },
      { q: "Is ADHD counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts for reimbursement. Please check with your insurance provider to insure the coverage." },
    ],
    related: ["anxiety", "individual-counselling", "family-counselling"],
    imageQuery: "bright creative calm workspace soft natural light",
  },
  {
    id: "prenatal-and-pregnancy",
    slug: "prenatal-and-pregnancy",
    icon: "Baby",
    name: { en: "Pregnancy & Postpartum", fr: "Grossesse et postpartum", fa: "بارداری و دوران پس از زایمان" },
    short: {
      en: "Caring support through the emotional shifts of pregnancy and early parenthood.",
      fr: "Un soutien attentionné à travers les bouleversements de la grossesse et de la parentalité.",
      fa: "فضایی همدلانه برای گذر از تغییرات عاطفی بارداری و آغاز والدگری",
    },
    intro: {
      en: "Pregnancy and new parenthood bring profound change — joyful, tender, and sometimes overwhelming. You deserve support through all of it.",
      fr: "La grossesse et la parentalité apportent un changement profond — joyeux, tendre, parfois accablant. Vous méritez d’être soutenu.",
      fa: "بارداری و شروع والدگری می‌تواند پر از احساسات متناقض باشد؛ شیرین، حساس و گاهی بسیار سنگین. شما در این مسیر شایسته حمایت هستید.",
    },
    help: [
      "Navigate the emotional ups and downs of pregnancy",
      "Support mental health before and after birth",
      "Process anxiety, mood changes, or loss",
      "Prepare for the transition to parenthood",
    ],
    experiencing: [
      "Anxiety or low mood during pregnancy",
      "Overwhelm adjusting to new parenthood",
      "Pregnancy or infant loss",
      "Fear, uncertainty, or pressure to feel ‘happy’",
    ],
    expect: [
      "A safe space for every emotion",
      "Specialised perinatal mental health support",
      "Gentle, non-judgemental care",
      "Support tailored to your stage",
    ],
    who: [
      "Expecting and new parents",
      "Those facing perinatal anxiety or depression",
      "Parents who have experienced loss",
      "Anyone navigating this life change",
    ],
    faqs: [
      { q: "Is it normal to struggle during pregnancy?", a: "Yes. Many parents experience difficult emotions, and support can make a real difference." },
      { q: "Do you support partners too?", a: "Yes. This transition affects partners, and we welcome them into care." },
      { q: "Can I start before the baby arrives?", a: "Absolutely. Support before birth can help you feel more prepared and steady." },
    ],
    related: ["anxiety", "depression", "relationship-and-couples-counselling"],
    imageQuery: "gentle expecting parent calm warm soft natural light",
  },
  {
    id: "lgbtqia2s",
    slug: "lgbtqia2s",
    icon: "Heart",
    name: { en: "LGBTQ+", fr: "LGBTQ+", fa: "LGBTQ+" },
    short: {
      en: "Affirming, respectful care in a space where you can be fully yourself.",
      fr: "Des soins affirmatifs et respectueux, dans un espace où être pleinement soi-même.",
      fa: "حمایتی محترمانه و حرفه ای در فضایی که بتوانید با خیال راحت خودتان باشید",
    },
    intro: {
      en: "You deserve care that sees and honours all of who you are. Our space is affirming, respectful, and free of judgement.",
      fr: "Vous méritez des soins qui voient et honorent tout ce que vous êtes. Notre espace est affirmatif, respectueux et sans jugement.",
      fa: "شما شایسته فضایی هستید که هویت، تجربه و تمامیت شما را ببیند و محترم بداند. رویکرد ما تأییدگر، محترمانه و بدون قضاوت است.",
    },
    help: [
      "Explore identity, belonging, and self-acceptance",
      "Navigate coming out, relationships, or transitions",
      "Process minority stress, discrimination, or isolation",
      "Find a space that fully affirms who you are",
    ],
    experiencing: [
      "Questions around identity or belonging",
      "Stress from discrimination or rejection",
      "Challenges with family, relationships, or coming out",
      "Wanting a space where you feel truly seen",
    ],
    expect: [
      "Affirming, inclusive, and respectful care",
      "A therapist who honours your identity",
      "Support tailored to your experiences",
      "A safe, judgement-free space",
    ],
    who: [
      "People of all identities and orientations",
      "Those exploring or affirming who they are",
      "Anyone facing minority stress",
      "People wanting affirming support",
    ],
    faqs: [
      { q: "Is your care genuinely affirming?", a: "Yes. We provide respectful, affirming care that honours your identity and experiences." },
      { q: "Do I have to explain or justify my identity?", a: "Never. You’re met with acceptance from the very first session." },
      { q: "Can you help with family or relationships?", a: "Yes. We support identity, relationships, family dynamics, and more." },
    ],
    related: ["individual-counselling", "anxiety", "family-counselling"],
    imageQuery: "warm inclusive calm soft natural light community",
  },
  {
    id: "cvap-clients",
    slug: "cvap-clients",
    icon: "ShieldHalf",
    name: { en: "CVAP Clients", fr: "Clients CVAP", fa: "مراجعان CVAP" },
    short: {
      en: "Specialised counselling support for those covered under the Crime Victim Assistance Program.",
      fr: "Un soutien spécialisé pour les personnes couvertes par le programme d’aide aux victimes (CVAP).",
      fa: "درمان تخصصی برای افراد تحت پوشش CVAP",
    },
    intro: {
      en: "If you’ve been affected by crime, you don’t have to navigate recovery alone. We provide trauma-informed care for CVAP clients with care and dignity.",
      fr: "Si vous avez été touché par un crime, vous n’êtes pas seul dans votre rétablissement. Nous offrons des soins adaptés aux clients CVAP, avec dignité.",
      fa: "اگر در اثر جرم یا خشونت آسیب دیده‌اید، لازم نیست مسیر بهبود را تنها طی کنید. ما برای مراجعان CVAP حمایتی آگاه از تروما، محترمانه و محرمانه ارائه می‌دهیم.",
    },
    help: [
      "Access trauma-informed counselling support",
      "Process the impact of a crime safely",
      "Rebuild a sense of safety and control",
      "Receive care coordinated with CVAP coverage",
    ],
    experiencing: [
      "The aftermath of a crime or violence",
      "Trauma, anxiety, or difficulty feeling safe",
      "Uncertainty about how to access support",
      "Needing care covered under CVAP",
    ],
    expect: [
      "Compassionate, trauma-informed counselling",
      "Support that respects your experience",
      "Guidance navigating the process",
      "Care delivered with dignity and patience",
    ],
    who: [
      "Victims of crime in British Columbia",
      "Those eligible for CVAP coverage",
      "People needing trauma-informed support",
      "Anyone recovering from a crime’s impact",
    ],
    faqs: [
      { q: "What is CVAP?", a: "The Crime Victim Assistance Program helps eligible victims of crime in BC access counselling and other supports." },
      { q: "Am I eligible?", a: "Eligibility is determined by CVAP. We can help guide you through what’s involved." },
      { q: "Is the care trauma-informed?", a: "Yes. Our counselling is grounded in trauma-informed, respectful practice." },
    ],
    related: ["trauma", "anxiety", "depression"],
    imageQuery: "calm safe reassuring quiet nature soft light",
  },
  {
    id: "icbc-clients",
    slug: "icbc-clients",
    icon: "ClipboardCheck",
    name: { en: "ICBC Clients", fr: "Clients ICBC", fa: "مراجعان ICBC" },
    short: {
      en: "Counselling support for emotional recovery after a motor vehicle accident.",
      fr: "Un soutien en counselling pour le rétablissement émotionnel après un accident de la route.",
      fa: "مشاوره برای بهبود روانی پس از تجربه تصادف",
    },
    intro: {
      en: "Recovery after an accident isn’t only physical. We offer counselling support for ICBC clients to care for the emotional impact too.",
      fr: "Le rétablissement après un accident n’est pas seulement physique. Nous offrons un soutien aux clients ICBC pour l’impact émotionnel.",
      fa: "بهبود پس از تصادف فقط جسمی نیست. ما برای مراجعان ICBC حمایت مشاوره‌ای ارائه می‌دهیم تا به تأثیر عاطفی نیز رسیدگی شود.",
    },
    help: [
      "Process the emotional impact of an accident",
      "Address anxiety, trauma, or driving fears",
      "Support recovery alongside physical care",
      "Receive counselling coordinated with ICBC",
    ],
    experiencing: [
      "Anxiety or trauma after a motor vehicle accident",
      "Fear of driving or being a passenger",
      "Difficulty sleeping or concentrating",
      "Emotional impact alongside physical injuries",
    ],
    expect: [
      "Counselling focused on emotional recovery",
      "Trauma-informed, compassionate care",
      "Support coordinated with ICBC coverage",
      "A steady space to heal at your pace",
    ],
    who: [
      "People recovering from a motor vehicle accident",
      "ICBC clients seeking counselling support",
      "Those with driving-related anxiety or trauma",
      "Anyone needing emotional recovery care",
    ],
    faqs: [
      { q: "Does ICBC cover counselling?", a: "ICBC may cover counselling for those affected by a motor vehicle accident. We can help you understand the process." },
      { q: "What if I wasn’t physically injured?", a: "Emotional impact is real and valid. Support is available regardless of physical injury." },
      { q: "How do I start?", a: "Reach out and we’ll guide you through getting started with ICBC-related care." },
    ],
    related: ["trauma", "anxiety", "individual-counselling"],
    imageQuery: "calm open road recovery peaceful soft natural light",
  },
  {
    id: "ifhp",
    slug: "ifhp",
    icon: "FileHeart",
    name: {
      en: "Interim Federal Health Program (IFHP)",
      fr: "Programme fédéral de santé intérimaire (PFSI)",
      fa: "برنامه موقت فدرال سلامت (IFHP)",
    },
    short: {
      en: "Counselling coverage for refugees, protected persons, and newcomers under the IFHP.",
      fr: "Une couverture de counselling pour les réfugiés, personnes protégées et nouveaux arrivants grâce au PFSI.",
      fa: "پوشش مشاوره برای پناهندگان، افراد تحت حمایت و تازه‌واردان از طریق IFHP",
    },
    intro: {
      en: "Rebuilding life in a new country can feel overwhelming. Through the Interim Federal Health Program, we offer counselling support with care, dignity, and respect.",
      fr: "Reconstruire sa vie dans un nouveau pays peut être bouleversant. Grâce au PFSI, nous offrons du counselling avec soin, dignité et respect.",
      fa: "ساختن دوباره زندگی در کشوری تازه می‌تواند بسیار سنگین باشد. از طریق برنامه موقت فدرال سلامت (IFHP)، ما با مراقبت و همدلی در کنار شما هستیم.",
    },
    help: [
      "Access counselling covered under the IFHP",
      "Process trauma, loss, and the stress of displacement",
      "Rebuild a sense of safety and belonging in a new country",
      "Receive culturally sensitive, trauma-informed care",
    ],
    experiencing: [
      "The stress of resettlement and adjusting to a new country",
      "Trauma, grief, or loss carried from your journey",
      "Anxiety, low mood, or difficulty sleeping",
      "Uncertainty about how to access mental health support",
    ],
    expect: [
      "Compassionate, trauma-informed counselling",
      "Care that respects your language, culture, and story",
      "Guidance navigating IFHP coverage",
      "A safe space to heal at your own pace",
    ],
    who: [
      "Resettled refugees and protected persons",
      "Refugee claimants awaiting a decision",
      "Newcomers eligible for IFHP coverage",
      "Anyone navigating the emotional impact of displacement",
    ],
    faqs: [
      { q: "What is the IFHP?", a: "The Interim Federal Health Program provides limited, temporary health coverage — including mental health counselling — to eligible refugees, protected persons, and certain other groups who are not yet covered by provincial health insurance." },
      { q: "Am I eligible for IFHP counselling?", a: "Eligibility is determined by the Government of Canada. If you hold valid IFHP coverage that includes mental health services, we can help you get started." },
      { q: "Is the care trauma-informed?", a: "Yes. Our counselling is grounded in trauma-informed, culturally sensitive practice that honours your experience with dignity and respect." },
    ],
    related: ["trauma", "anxiety", "online-counselling"],
    imageQuery: "calm hopeful new beginning soft natural light",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** featured selection for the home page */
export const homeFeaturedServiceIds = [
  "individual-counselling",
  "relationship-and-couples-counselling",
  "family-counselling",
  "anxiety",
  "depression",
  "trauma",
  "online-counselling",
];
