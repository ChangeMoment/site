import type { Lang } from "../i18n/LanguageProvider";
import { cmsBlogPosts } from "../../generated/cms-blog-snapshot";

export type BlogCategory =
  | "therapy"
  | "selfesteem"
  | "anxiety"
  | "depression"
  | "relationship"
  | "trauma"
  | "selfcare"
  | "bodyimage"
  | "family"
  | "pregnancy"
  | "work"
  | "anger"
  | "lgbtq"
  | "education";

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  date: string; // ISO
  readMinutes: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  /** body lines — prefix "## " for h2, "### " for h3, "• " for list item, else paragraph. Use [text](/path) for internal links. */
  body: string[];
  /** Sanitized rich HTML managed in WordPress, keyed by site language. */
  contentHtml?: Partial<Record<Lang, string>>;
  tags: string[];
  imageQuery: string;
  featuredImage?: string;
  /** Rank Math JSON-LD extracted during the publish refresh. */
  rankMathJsonLd?: Record<string, unknown>[];
}

export const legacyBlogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "what-is-therapy",
    category: "education",
    date: "2026-08-12",
    readMinutes: 10,
    title: {
      en: "What Is Therapy and What Happens in Your First Therapy Session?",
      fr: "Qu'est-ce que la thérapie et que se passe-t-il lors de votre première séance ?",
      fa: "درمان چیست و در اولین جلسه درمانی شما چه اتفاقی می‌افتد؟",
    },
    excerpt: {
      en: "Deciding to start therapy can feel uncertain. Knowing what to expect from your first counselling session can make that first appointment feel a little more manageable.",
      fr: "Décider de commencer une thérapie peut sembler incertain. Savoir à quoi s'attendre lors de votre première séance peut rendre ce premier rendez-vous un peu plus accessible.",
      fa: "شروع درمان می‌تواند با احساس عدم اطمینان همراه باشد. دانستن اینکه از اولین جلسه مشاوره چه انتظاری داشته باشید می‌تواند آن اولین قرار ملاقات را کمی قابل‌تحمل‌تر کند.",
    },
    body: [
      "Deciding to start therapy can feel uncertain, especially if you have never been to [counselling](/services/individual-counselling) before. You may wonder what you are expected to talk about, what your counsellor will ask, or whether you need to know exactly what is wrong before you arrive.",
      "These are understandable questions. The first therapy session involves entering a new kind of conversation — one that may feel unfamiliar at first. Knowing what to expect can make that first appointment feel a little more manageable.",
      "## What Is Therapy?",
      "Therapy, also called psychotherapy or counselling, is a collaborative process in which you work with a trained mental health professional to better understand and address emotional, relational, or psychological concerns.",
      "People come to counselling for many different reasons. Some seek support with [anxiety](/services/anxiety), [depression](/services/depression), [grief](/services/grief-and-loss), stress, [relationship difficulties](/services/relationship-and-couples-counselling), or major life transitions. Others may notice recurring patterns in their relationships, difficulty managing emotions, or a general sense that something does not feel right, even when they cannot clearly explain why.",
      "You do not need to be in crisis to consider therapy.",
      "Counselling can also provide a space to better understand your thoughts, emotions, relationships, and ways of responding to difficult situations. Rather than immediately trying to change what you think or feel, therapy can sometimes begin by becoming more curious about why an experience feels the way it does and what may be contributing to it.",
      "There is not always a simple or immediate answer. Understanding often develops gradually through the therapeutic process.",
      "## What Happens During Your First Therapy Session?",
      "The first [counselling](/services/individual-counselling) session is generally an opportunity for you and your counsellor to begin getting to know one another. Your counsellor will usually want to understand what brought you to therapy and what has been happening in your life. You may be asked questions such as:",
      "• What made you decide to seek counselling now?",
      "• What has been difficult recently?",
      "• How has this been affecting your daily life or relationships?",
      "• Have you experienced something similar before?",
      "• What would you like to get from therapy?",
      "Your counsellor may also ask about your family, relationships, work, health, important life experiences, or previous experiences with counselling. The purpose is not to form a quick conclusion about you — it is to develop a fuller understanding of your experience and the context in which it is happening.",
      "Your first session may also include some practical conversations about how counselling works, privacy and confidentiality, fees, scheduling, and what you can expect from future sessions. Your counsellor should explain confidentiality and its limits so that you understand how your personal information will be handled.",
      "## How Can I Prepare for My First Therapy Session?",
      "You do not need to arrive with a perfectly organized explanation of what is happening. It is completely reasonable to begin with something as simple as: \"I'm not really sure what's wrong, but I haven't been feeling like myself.\"",
      "Sometimes people know exactly what they want to discuss. Other times, understanding what is troubling them becomes part of the counselling process itself.",
      "If you would feel more comfortable preparing beforehand, you could consider a few questions:",
      "• What has been taking up most of my attention lately?",
      "• What prompted me to book this appointment now?",
      "• Is there anything I would like to understand better about myself or my relationships?",
      "• If counselling were helpful, what might feel different over time?",
      "These questions are simply starting points — not requirements.",
      "## Will My Counsellor Judge Me?",
      "Concern about being judged can make talking openly with someone unfamiliar feel difficult. Counselling is intended to provide a professional environment in which experiences can be explored with curiosity and respect rather than criticism.",
      "This does not mean that you need to trust your counsellor immediately or feel comfortable discussing everything in the first session. Trust takes time.",
      "You are also allowed to say that something feels difficult to talk about, that you are unsure how you feel, or that you are not ready to discuss something yet. Not knowing is also useful information in therapy.",
      "## Is It Normal to Feel Nervous Before Therapy?",
      "Yes. Therapy involves talking about experiences that may be personal, confusing, painful, or difficult to put into words. Feeling nervous about doing this with someone you have only just met is understandable. You can tell your counsellor that you are nervous.",
      "There is no expectation that you will immediately know how to \"do therapy.\" Part of the counsellor's role is to help establish a conversation that feels manageable enough to continue exploring together.",
      "## How Do I Know If a Counsellor Is the Right Fit?",
      "The relationship you develop with your counsellor matters. Research on psychotherapy has consistently found that the quality of the relationship between a client and their therapist is connected to better therapy outcomes, across different approaches to treatment. In practical terms, this means that feeling listened to, respected, and understood matters.",
      "This does not mean you need to feel an immediate connection after one appointment. Instead, after the first few sessions, it may be useful to notice:",
      "• Do I feel listened to?",
      "• Do I feel respected?",
      "• Can I ask questions or disagree?",
      "• Do I feel that my counsellor is trying to understand my experience rather than making assumptions about it?",
      "• Does it seem possible to develop trust with this person over time?",
      "It is okay to decide that a particular counsellor is not the right fit. If you are looking for the right match, [our team](/team) is here to help.",
      "## Frequently Asked Questions About Your First Therapy Session",
      "### Do I have to talk about everything in my first session?",
      "No. You can share information at a pace that feels manageable. Some topics may take time before you feel ready to discuss them.",
      "### Is counselling confidential?",
      "Counselling is generally confidential, with specific legal and ethical exceptions. Your counsellor should explain confidentiality and its limits as part of the first sessions.",
      "### What if I cry during my first therapy session?",
      "Crying — or not crying — is entirely okay. People respond differently when discussing emotional experiences, and there is no particular emotional response expected of you.",
      "### What if I don't know what to say?",
      "You can say exactly that. Not knowing where to begin can itself become the beginning of the conversation.",
      "## Your First Therapy Session Is a Starting Point",
      "A first [counselling](/services/individual-counselling) session does not require you to understand yourself completely, tell your story perfectly, or know exactly what needs to change. It is a starting point.",
      "Over time, therapy can create an opportunity to look more closely at thoughts, emotions, relationships, and patterns that may be difficult to understand when you are experiencing them alone.",
      "Sometimes change begins with finding a solution — and sometimes it begins simply with developing a clearer understanding of what is happening.",
      "If you are ready to take that first step, [book a free consultation](/book) with our team at ChangeMoment.",
    ],
    tags: ["Therapy", "Counselling", "First Session", "Mental Health", "Psychotherapy"],
    imageQuery: "calm therapy session warm light counselling",
  },
  {
    id: "blog-2",
    slug: "anxiety-beyond-worry",
    category: "anxiety",
    date: "2026-08-12",
    readMinutes: 9,
    title: {
      en: "Why Do I Feel Anxious Even When Everything Seems Fine?",
      fr: "Pourquoi me sens-je anxieux même quand tout semble aller bien ?",
      fa: "چرا حتی وقتی همه چیز خوب به نظر می‌رسد احساس اضطراب می‌کنم؟",
    },
    excerpt: {
      en: "Anxiety is not always a response to something going wrong right now. Understanding why you feel anxious when everything seems fine can be a meaningful first step.",
      fr: "L'anxiété n'est pas toujours une réponse à quelque chose qui va mal maintenant. Comprendre pourquoi vous vous sentez anxieux quand tout semble aller bien peut être un premier pas significatif.",
      fa: "اضطراب همیشه واکنش به چیزی نیست که الان اشتباه می‌رود. فهمیدن اینکه چرا وقتی همه چیز خوب به نظر می‌رسد احساس اضطراب می‌کنید می‌تواند یک گام معنادار اول باشد.",
    },
    body: [
      "Have you ever had a day when, on paper, everything seemed fine — but you still felt anxious?",
      "Nothing particularly bad had happened. Your work was going reasonably well, your relationships were okay, and there was no immediate problem that needed solving. Yet your body felt tense, your mind kept scanning for something that might go wrong, or you simply found it difficult to relax.",
      "This can be confusing. If there is no obvious reason to feel anxious, you might start wondering: Why do I feel this way? Am I overreacting? Shouldn't I be able to just relax?",
      "The truth is that [anxiety](/services/anxiety) is not always a direct response to something going wrong right now. Sometimes, it has more to do with how we respond to uncertainty, possible threats, and experiences that have shaped the way we understand safety.",
      "## Anxiety Is More Than Worrying",
      "We often think of [anxiety](/services/anxiety) as excessive worrying: imagining what could go wrong, replaying situations, or constantly trying to find solutions.",
      "Worry can certainly be part of anxiety, but anxiety is broader than worry. It can show up in your body before you consciously know what you are worried about. You might notice muscle tension, restlessness, a racing heart, difficulty sleeping, irritability, or trouble concentrating. Sometimes, the experience is simply a vague feeling that something isn't right.",
      "Anxiety involves emotional, physical, cognitive, and behavioural responses to perceived or anticipated threat. In other words, your mind and body can begin preparing for something that might happen, even when there is no immediate danger.",
      "## Sometimes Anxiety Is About What Might Happen",
      "One reason you can feel anxious when everything seems fine is uncertainty.",
      "The present moment may be safe, but the future is never completely predictable. For someone who finds uncertainty particularly difficult, the absence of a current problem does not necessarily create a sense of safety. Instead, the mind may begin asking:",
      "• What if something goes wrong?",
      "• What if I lose what I have?",
      "• What if this doesn't last?",
      "Research on anxiety has highlighted the role of uncertainty and anticipation of possible future threats ([Grupe & Nitschke, 2013](https://www.nature.com/articles/nrn3524); [Craske & Stein, 2016](https://doi.org/10.1016/S0140-6736(16)30381-6)). Anxiety can involve increased attention to potential danger, difficulty learning that something is safe, and attempts to reduce uncertainty through thinking or behaviour.",
      "This can make worrying feel useful. If you can anticipate every possible problem, perhaps you can prevent it.",
      "But uncertainty cannot be completely eliminated. And constantly trying to eliminate it can keep you mentally prepared for a danger that may never arrive.",
      "## When Staying Prepared Becomes Exhausting",
      "Anxiety does not only happen in your thoughts. It can also influence what you do.",
      "You might repeatedly check something, ask other people for reassurance, over-prepare for relatively small situations, avoid situations that feel uncertain, or spend a lot of time analysing whether you made the \"right\" decision.",
      "These behaviours can bring temporary relief. You check, someone reassures you, or you prepare one more time — and for a moment, the anxiety decreases.",
      "But when these strategies become the main way you cope with uncertainty, they can unintentionally keep the cycle going. Instead of discovering that you can tolerate uncertainty, your mind may learn that you need checking, reassurance, or preparation in order to feel safe.",
      "This is one reason [anxiety](/services/anxiety) can persist even when there is no obvious problem in your life.",
      "## Your Past Experiences Can Shape How You Respond to the Present",
      "Our current emotional responses do not develop in isolation.",
      "Experiences of prolonged stress, unpredictability, criticism, loss, or difficult relationships can sometimes shape how a person responds to uncertainty and perceived threat. Early experiences may also influence how we learn to recognize safety and respond to emotional situations ([Gross & Hen, 2004](https://www.nature.com/articles/nrn1429)).",
      "For example, if you spent a lot of time trying to anticipate other people's moods or reactions, you may have become highly attentive to small changes in tone, behaviour, or atmosphere.",
      "That sensitivity may once have been useful. But later in life, it can sometimes make it difficult to fully relax, even in situations that are relatively safe.",
      "This does not mean that your past determines your present, or that there is always a single experience that explains your anxiety. People develop differently, and anxiety is influenced by multiple psychological, biological, and environmental factors.",
      "The more useful question may be: What have I learned to expect, and how might that expectation be shaping what I notice now?",
      "## Sometimes the Feeling Comes Before the Explanation",
      "There are also moments when you know that you feel anxious but cannot explain why.",
      "You may not know whether you are afraid, overwhelmed, lonely, disappointed, angry, or simply under too much pressure.",
      "When an internal experience feels unclear, it is tempting to immediately interpret it as evidence that something is wrong.",
      "Instead, you can try approaching the experience with curiosity. Ask yourself:",
      "• What am I feeling right now?",
      "• What am I expecting to happen?",
      "• What am I afraid might happen?",
      "• What meaning am I giving to this situation?",
      "• Am I trying to make uncertainty disappear before I allow myself to move forward?",
      "These questions are not about analysing every emotion or finding a hidden explanation for everything. They are about creating a little more space between having an anxious feeling and assuming that the feeling means something is wrong.",
      "Sometimes that small shift can change how you respond.",
      "## When Does Anxiety Become a Problem?",
      "Feeling anxious from time to time is a normal part of being human. Anxiety can help us prepare for challenges and respond to potential threats.",
      "It may be worth seeking professional support when anxiety becomes persistent, difficult to manage, disproportionate to the situation, or begins interfering with areas of daily life such as sleep, work, relationships, concentration, or everyday activities.",
      "You do not need to wait until anxiety becomes overwhelming before reaching out for [counselling](/services/individual-counselling).",
      "Therapy can offer a space to understand not only what you are anxious about, but also how your anxiety works. Together with a counsellor, you can begin to notice patterns between your thoughts, emotions, bodily sensations, behaviours, relationships, and expectations. You can explore where these patterns may have come from, how they affect your life now, and whether there are different ways of responding.",
      "The goal is not necessarily to eliminate anxiety completely. Anxiety is part of being human, and trying to never feel anxious can sometimes become another form of struggle. Instead, therapy can help you develop a different relationship with anxiety — one in which you can notice it, understand it, and choose how to respond rather than automatically letting it determine what you do.",
      "## You Don't Always Need an Obvious Reason to Feel Anxious",
      "Perhaps the most difficult part of anxiety is believing that you need a good enough reason to have it.",
      "But emotions do not always arrive with a clear explanation. Feeling anxious when everything seems fine does not mean that you are irrational, ungrateful, or overly sensitive. It may be a sign that your mind and body are responding to uncertainty, perceived threat, or patterns that have developed over time.",
      "So instead of asking only: \"Why am I anxious when nothing is wrong?\" — you might also ask: \"What is my anxiety asking me to notice?\"",
      "Sometimes, understanding that question is where change begins. If you would like to explore how anxiety is affecting your life, [book a free consultation](/book) with our team at ChangeMoment.",
    ],
    tags: ["Anxiety", "Mental Health", "Counselling", "Worry", "Uncertainty", "Emotional Wellbeing"],
    imageQuery: "calm anxiety relief peaceful nature light",
  },
];

const typedCmsBlogPosts = cmsBlogPosts as unknown as BlogPost[];

export const blogPosts: BlogPost[] = [
  ...typedCmsBlogPosts,
  ...legacyBlogPosts.filter(
    (legacy) => !typedCmsBlogPosts.some((cms) => cms.slug === legacy.slug),
  ),
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export const blogCategories: BlogCategory[] = [
  "therapy",
  "selfesteem",
  "anxiety",
  "depression",
  "relationship",
  "trauma",
  "selfcare",
  "bodyimage",
  "family",
  "pregnancy",
  "work",
  "anger",
  "lgbtq",
  "education",
];
