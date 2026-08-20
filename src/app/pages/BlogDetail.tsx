import type { ReactNode } from "react";
import { useParams, Navigate, Link } from "react-router";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/ui-kit";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BlogCard } from "../components/BlogCard";
import { CTABand } from "../components/CTABand";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLang, type Lang } from "../i18n/LanguageProvider";
import { getBlogPost, blogPosts } from "../data/blogs";
import { getBlogImage } from "../data/images";
import { absoluteSiteUrl, localizedPath, localizedUrl, SEO_LOCALES } from "../lib/seo";
import { BlogShareBar } from "../components/BlogShareBar";
import DOMPurify from "dompurify";

// ── Rich body line renderer ───────────────────────────────────────────────────
// Each string in body[] is parsed:
//   "## text"   → <h2>
//   "### text"  → <h3>
//   "• text"    → list item (consecutive ones grouped into <ul>)
//   "[label](/path)" inline syntax → <Link>
//   Otherwise   → <p>

function parseInlineLinks(text: string, lang: Lang): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const href = m[2];
      const linkClass = "underline underline-offset-2 decoration-[var(--brand-muted-olive)]/50 text-[var(--brand-deep-olive)] transition-colors hover:text-[var(--brand-copper)] hover:decoration-[var(--brand-copper)]/50";
      if (href.startsWith("http://") || href.startsWith("https://")) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {m[1]}
          </a>
        );
      }
      return (
        <Link key={i} to={localizedPath(href, lang)} className={linkClass}>
          {m[1]}
        </Link>
      );
    }
    return part;
  });
}

function renderBody(lines: string[], lang: Lang): ReactNode[] {
  const elements: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <Reveal key={i}>
          <h2 className="mt-12 mb-1" style={{ fontSize: "clamp(1.35rem, 2vw, 1.65rem)" }}>
            {line.slice(3)}
          </h2>
        </Reveal>
      );
      i++;
    } else if (line.startsWith("### ")) {
      elements.push(
        <Reveal key={i}>
          <h3 className="mt-7 mb-1" style={{ fontSize: "1.1rem" }}>
            {line.slice(4)}
          </h3>
        </Reveal>
      );
      i++;
    } else if (line.startsWith("• ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("• ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <Reveal key={`ul-${i}`}>
          <ul className="mt-5 space-y-2.5">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-lg leading-relaxed text-[var(--brand-ink)]">
                <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-[var(--brand-copper)]" aria-hidden="true" />
                <span>{parseInlineLinks(item, lang)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      );
    } else {
      elements.push(
        <Reveal key={i} delay={(i % 8) * 30}>
          <p className="mt-6 text-lg leading-8 text-[var(--brand-ink)] md:leading-9">
            {parseInlineLinks(line, lang)}
          </p>
        </Reveal>
      );
      i++;
    }
  }
  return elements;
}

// ── Per-post FR translations ──────────────────────────────────────────────────
export const frBlogBodies: Record<string, string[]> = {
  "what-is-therapy": [
    "Décider de commencer une thérapie peut sembler incertain, surtout si vous n'avez jamais consulté en [counselling](/services/individual-counselling) auparavant. Vous vous demandez peut-être ce que vous êtes censé aborder, ce que votre counsellor vous demandera, ou si vous devez savoir exactement ce qui ne va pas avant d'arriver.",
    "Ces questions sont tout à fait compréhensibles. La première séance de thérapie consiste à entrer dans un nouveau type de conversation — qui peut sembler inhabituelle au début. Savoir à quoi s'attendre peut rendre ce premier rendez-vous un peu plus accessible.",
    "## Qu'est-ce que la thérapie ?",
    "La thérapie, également appelée psychothérapie ou counselling, est un processus collaboratif dans lequel vous travaillez avec un professionnel de la santé mentale formé pour mieux comprendre et aborder des préoccupations émotionnelles, relationnelles ou psychologiques.",
    "Les gens consultent pour de nombreuses raisons différentes. Certains cherchent du soutien pour l'[anxiété](/services/anxiety), la [dépression](/services/depression), le [deuil](/services/grief-and-loss), le stress, les [difficultés relationnelles](/services/relationship-and-couples-counselling), ou des transitions de vie importantes. D'autres remarquent des schémas récurrents dans leurs relations, des difficultés à gérer leurs émotions, ou une impression générale que quelque chose ne va pas, même quand ils ne peuvent pas l'expliquer clairement.",
    "Vous n'avez pas besoin d'être en crise pour envisager la thérapie.",
    "Le counselling peut aussi offrir un espace pour mieux comprendre vos pensées, vos émotions, vos relations et vos façons de répondre aux situations difficiles. Plutôt que d'essayer immédiatement de changer ce que vous pensez ou ressentez, la thérapie peut parfois commencer par devenir plus curieux face à pourquoi une expérience est vécue de cette façon et à ce qui peut y contribuer.",
    "Il n'y a pas toujours une réponse simple ou immédiate. La compréhension se développe souvent progressivement au fil du processus thérapeutique.",
    "## Que se passe-t-il lors de votre première séance de thérapie ?",
    "La première séance de [counselling](/services/individual-counselling) est généralement une occasion pour vous et votre counsellor de commencer à faire connaissance. Votre counsellor voudra généralement comprendre ce qui vous a amené en thérapie et ce qui se passe dans votre vie. Des questions comme celles-ci pourraient être posées :",
    "• Qu'est-ce qui vous a décidé à consulter maintenant ?",
    "• Qu'est-ce qui a été difficile récemment ?",
    "• Comment cela affecte-t-il votre vie quotidienne ou vos relations ?",
    "• Avez-vous vécu quelque chose de similaire auparavant ?",
    "• Qu'espérez-vous obtenir de la thérapie ?",
    "Votre counsellor peut également vous interroger sur votre famille, vos relations, votre travail, votre santé, des expériences de vie importantes ou des expériences passées en counselling. L'objectif n'est pas de tirer une conclusion rapide sur vous — c'est de développer une compréhension plus complète de votre expérience et du contexte dans lequel elle s'inscrit.",
    "Votre première séance peut aussi inclure quelques conversations pratiques sur le fonctionnement du counselling, la vie privée et la confidentialité, les honoraires, la planification et ce à quoi vous pouvez vous attendre lors des prochaines séances. Votre counsellor devrait expliquer la confidentialité et ses limites pour que vous compreniez comment vos informations personnelles seront traitées.",
    "## Comment me préparer à ma première séance de thérapie ?",
    "Vous n'avez pas besoin d'arriver avec une explication parfaitement organisée de ce qui se passe. Il est tout à fait raisonnable de commencer par quelque chose d'aussi simple que : « Je ne suis pas vraiment sûr de ce qui ne va pas, mais je ne me sens plus comme moi-même. »",
    "Parfois, les gens savent exactement ce qu'ils veulent aborder. D'autres fois, comprendre ce qui les trouble fait partie du processus de counselling lui-même.",
    "Si vous vous sentez plus à l'aise en vous préparant à l'avance, vous pourriez réfléchir à quelques questions :",
    "• Qu'est-ce qui a le plus occupé mon attention dernièrement ?",
    "• Qu'est-ce qui m'a poussé à prendre ce rendez-vous maintenant ?",
    "• Y a-t-il quelque chose que j'aimerais mieux comprendre sur moi-même ou mes relations ?",
    "• Si le counselling était utile, qu'est-ce qui pourrait être différent avec le temps ?",
    "Ces questions sont simplement des points de départ — pas des exigences.",
    "## Mon counsellor va-t-il me juger ?",
    "La crainte d'être jugé peut rendre difficile le fait de s'ouvrir à quelqu'un que l'on ne connaît pas. Le counselling vise à offrir un environnement professionnel dans lequel les expériences peuvent être explorées avec curiosité et respect plutôt que critique.",
    "Cela ne signifie pas que vous devez faire confiance à votre counsellor immédiatement ou vous sentir à l'aise pour tout aborder dès la première séance. La confiance prend du temps.",
    "Vous pouvez aussi dire que quelque chose est difficile à aborder, que vous n'êtes pas sûr de ce que vous ressentez, ou que vous n'êtes pas prêt à en discuter encore. Ne pas savoir est aussi une information utile en thérapie.",
    "## Est-il normal de se sentir nerveux avant la thérapie ?",
    "Oui. La thérapie implique de parler d'expériences qui peuvent être personnelles, déroutantes, douloureuses ou difficiles à mettre en mots. Se sentir nerveux à l'idée de le faire avec quelqu'un que vous venez tout juste de rencontrer est tout à fait compréhensible. Vous pouvez dire à votre counsellor que vous êtes nerveux.",
    "Rien ne vous oblige à savoir immédiatement comment « faire de la thérapie ». Une partie du rôle du counsellor est d'aider à établir une conversation qui semble suffisamment gérable pour continuer à explorer ensemble.",
    "## Comment savoir si un counsellor me convient ?",
    "La relation que vous développez avec votre counsellor est importante. La recherche en psychothérapie a régulièrement constaté que la qualité de la relation entre un client et son thérapeute est liée à de meilleurs résultats thérapeutiques, toutes approches confondues. En termes pratiques, cela signifie que se sentir écouté, respecté et compris est important.",
    "Cela ne signifie pas que vous devez ressentir une connexion immédiate après un seul rendez-vous. Après les premières séances, il peut être utile de remarquer :",
    "• Est-ce que je me sens écouté ?",
    "• Est-ce que je me sens respecté ?",
    "• Puis-je poser des questions ou exprimer mon désaccord ?",
    "• Est-ce que je sens que mon counsellor essaie de comprendre mon expérience plutôt que de faire des suppositions à mon sujet ?",
    "• Semble-t-il possible de développer une confiance avec cette personne avec le temps ?",
    "Il est tout à fait acceptable de décider qu'un counsellor particulier ne vous convient pas. Si vous cherchez la bonne correspondance, [notre équipe](/team) est là pour vous aider.",
    "## Questions fréquemment posées sur votre première séance de thérapie",
    "### Dois-je tout aborder lors de ma première séance ?",
    "Non. Vous pouvez partager les informations à un rythme qui vous semble gérable. Certains sujets peuvent nécessiter du temps avant que vous vous sentiez prêt à les aborder.",
    "### Le counselling est-il confidentiel ?",
    "Le counselling est généralement confidentiel, avec des exceptions légales et éthiques spécifiques. Votre counsellor devrait expliquer la confidentialité et ses limites lors des premières séances.",
    "### Et si je pleure pendant ma première séance de thérapie ?",
    "Pleurer — ou ne pas pleurer — est tout à fait acceptable. Les gens réagissent différemment lorsqu'ils discutent d'expériences émotionnelles, et aucune réponse émotionnelle particulière n'est attendue de vous.",
    "### Et si je ne sais pas quoi dire ?",
    "Vous pouvez dire exactement cela. Ne pas savoir par où commencer peut lui-même devenir le début de la conversation.",
    "## Votre première séance de thérapie est un point de départ",
    "Une première séance de [counselling](/services/individual-counselling) ne vous demande pas de vous comprendre complètement, de raconter votre histoire parfaitement, ou de savoir exactement ce qui doit changer. C'est un point de départ.",
    "Au fil du temps, la thérapie peut créer une occasion d'examiner de plus près les pensées, les émotions, les relations et les schémas qui peuvent être difficiles à comprendre lorsque vous les vivez seul.",
    "Parfois, le changement commence par trouver une solution — et parfois, il commence simplement par développer une compréhension plus claire de ce qui se passe.",
    "Si vous êtes prêt à franchir ce premier pas, [prenez rendez-vous pour une consultation gratuite](/book) avec notre équipe chez ChangeMoment.",
  ],
  "anxiety-beyond-worry": [
    "Avez-vous déjà vécu une journée où, sur le papier, tout semblait bien se passer — mais vous vous sentiez quand même anxieux ?",
    "Rien de particulièrement grave n'était arrivé. Le travail allait raisonnablement bien, vos relations semblaient bonnes, et il n'y avait pas de problème immédiat à résoudre. Pourtant, votre corps était tendu, votre esprit cherchait quelque chose qui pourrait mal tourner, ou vous trouviez simplement difficile de vous détendre.",
    "Cela peut être déroutant. S'il n'y a pas de raison évidente de se sentir anxieux, vous pourriez vous demander : Pourquoi est-ce que je me sens ainsi ? Est-ce que je réagis de manière excessive ? Ne devrais-je pas pouvoir simplement me détendre ?",
    "La vérité est que l'[anxiété](/services/anxiety) n'est pas toujours une réponse directe à quelque chose qui va mal en ce moment. Parfois, elle est davantage liée à la façon dont nous répondons à l'incertitude, aux menaces possibles et aux expériences qui ont façonné notre compréhension de la sécurité.",
    "## L'anxiété est plus que s'inquiéter",
    "Nous pensons souvent à l'[anxiété](/services/anxiety) comme une inquiétude excessive : imaginer ce qui pourrait mal tourner, repenser des situations, ou essayer constamment de trouver des solutions.",
    "L'inquiétude peut certes faire partie de l'anxiété, mais l'anxiété est plus large que l'inquiétude. Elle peut se manifester dans votre corps avant même que vous sachiez consciemment de quoi vous vous inquiétez. Vous pourriez remarquer des tensions musculaires, de l'agitation, un cœur qui s'emballe, des difficultés à dormir, de l'irritabilité ou des troubles de la concentration. Parfois, l'expérience se traduit simplement par une vague impression que quelque chose ne va pas.",
    "L'anxiété implique des réponses émotionnelles, physiques, cognitives et comportementales face à des menaces perçues ou anticipées. En d'autres termes, votre esprit et votre corps peuvent commencer à se préparer à quelque chose qui pourrait arriver, même lorsqu'il n'y a pas de danger immédiat.",
    "## Parfois, l'anxiété porte sur ce qui pourrait arriver",
    "L'une des raisons pour lesquelles vous pouvez vous sentir anxieux quand tout semble bien se passer est l'incertitude.",
    "Le moment présent peut être sûr, mais l'avenir n'est jamais entièrement prévisible. Pour quelqu'un qui trouve l'incertitude particulièrement difficile, l'absence d'un problème actuel ne crée pas nécessairement un sentiment de sécurité. À la place, l'esprit peut commencer à se demander :",
    "• Et si quelque chose tourne mal ?",
    "• Et si je perds ce que j'ai ?",
    "• Et si ça ne dure pas ?",
    "La recherche sur l'anxiété a mis en lumière le rôle de l'incertitude et l'anticipation des menaces futures possibles ([Grupe & Nitschke, 2013](https://www.nature.com/articles/nrn3524) ; [Craske & Stein, 2016](https://doi.org/10.1016/S0140-6736(16)30381-6)). L'anxiété peut impliquer une attention accrue aux dangers potentiels, des difficultés à apprendre qu'une situation est sûre, et des tentatives de réduire l'incertitude par la pensée ou le comportement.",
    "Cela peut donner l'impression que s'inquiéter est utile. Si vous pouvez anticiper tous les problèmes possibles, peut-être pouvez-vous les prévenir.",
    "Mais l'incertitude ne peut pas être complètement éliminée. Et essayer constamment de l'éliminer peut vous maintenir mentalement prêt pour un danger qui ne viendra peut-être jamais.",
    "## Quand rester préparé devient épuisant",
    "L'anxiété ne se produit pas uniquement dans vos pensées. Elle peut aussi influencer ce que vous faites.",
    "Vous pourriez vérifier quelque chose à plusieurs reprises, demander des réassurances à d'autres personnes, vous sur-préparer pour des situations relativement mineures, éviter des situations qui semblent incertaines, ou passer beaucoup de temps à analyser si vous avez pris la \"bonne\" décision.",
    "Ces comportements peuvent apporter un soulagement temporaire. Vous vérifiez, quelqu'un vous rassure, ou vous vous préparez une fois de plus — et pendant un moment, l'anxiété diminue.",
    "Mais quand ces stratégies deviennent le principal moyen de faire face à l'incertitude, elles peuvent involontairement maintenir le cycle. Au lieu de découvrir que vous pouvez tolérer l'incertitude, votre esprit peut apprendre que vous avez besoin de vérification, de réassurance ou de préparation pour vous sentir en sécurité.",
    "C'est l'une des raisons pour lesquelles l'[anxiété](/services/anxiety) peut persister même quand il n'y a pas de problème évident dans votre vie.",
    "## Vos expériences passées peuvent façonner votre réponse au présent",
    "Nos réponses émotionnelles actuelles ne se développent pas de manière isolée.",
    "Des expériences de stress prolongé, d'imprévisibilité, de critiques, de pertes ou de relations difficiles peuvent parfois façonner la façon dont une personne répond à l'incertitude et aux menaces perçues. Les expériences précoces peuvent également influencer notre façon d'apprendre à reconnaître la sécurité et de répondre aux situations émotionnelles ([Gross & Hen, 2004](https://www.nature.com/articles/nrn1429)).",
    "Par exemple, si vous avez passé beaucoup de temps à essayer d'anticiper les humeurs ou les réactions des autres, vous êtes peut-être devenu très attentif aux petits changements de ton, de comportement ou d'atmosphère.",
    "Cette sensibilité a peut-être été utile un temps. Mais plus tard dans la vie, elle peut parfois rendre difficile de se détendre complètement, même dans des situations relativement sûres.",
    "Cela ne signifie pas que votre passé détermine votre présent, ou qu'il y a toujours une expérience unique qui explique votre anxiété. Les personnes se développent différemment, et l'anxiété est influencée par de multiples facteurs psychologiques, biologiques et environnementaux.",
    "La question la plus utile pourrait être : Qu'ai-je appris à attendre, et comment cette attente pourrait-elle façonner ce que je remarque maintenant ?",
    "## Parfois, le sentiment précède l'explication",
    "Il y a aussi des moments où vous savez que vous vous sentez anxieux sans pouvoir l'expliquer.",
    "Vous ne savez peut-être pas si vous avez peur, si vous êtes submergé, solitaire, déçu, en colère, ou simplement sous trop de pression.",
    "Lorsqu'une expérience intérieure semble floue, il est tentant de l'interpréter immédiatement comme un signe que quelque chose ne va pas.",
    "Au lieu de cela, vous pouvez essayer d'aborder l'expérience avec curiosité. Demandez-vous :",
    "• Qu'est-ce que je ressens en ce moment ?",
    "• À quoi est-ce que je m'attends ?",
    "• De quoi ai-je peur qu'il arrive ?",
    "• Quel sens est-ce que je donne à cette situation ?",
    "• Est-ce que j'essaie de faire disparaître l'incertitude avant de me permettre d'avancer ?",
    "Ces questions ne visent pas à analyser chaque émotion ou à trouver une explication cachée à tout. Elles visent à créer un peu plus d'espace entre le fait d'avoir un sentiment anxieux et le fait de supposer que ce sentiment signifie que quelque chose ne va pas.",
    "Parfois, ce petit changement peut transformer votre façon de répondre.",
    "## Quand l'anxiété devient-elle un problème ?",
    "Se sentir anxieux de temps en temps est une partie normale d'être humain. L'anxiété peut nous aider à nous préparer aux défis et à répondre aux menaces potentielles.",
    "Il peut être judicieux de demander un soutien professionnel lorsque l'anxiété devient persistante, difficile à gérer, disproportionnée par rapport à la situation, ou commence à interférer avec des aspects de la vie quotidienne comme le sommeil, le travail, les relations, la concentration ou les activités courantes.",
    "Vous n'avez pas besoin d'attendre que l'anxiété devienne accablante avant de consulter en [counselling](/services/individual-counselling).",
    "La thérapie peut offrir un espace pour comprendre non seulement ce qui vous rend anxieux, mais aussi comment fonctionne votre anxiété. Avec un counsellor, vous pouvez commencer à remarquer des schémas entre vos pensées, émotions, sensations corporelles, comportements, relations et attentes. Vous pouvez explorer d'où viennent ces schémas, comment ils affectent votre vie maintenant, et s'il existe d'autres façons de répondre.",
    "Le but n'est pas nécessairement d'éliminer complètement l'anxiété. L'anxiété fait partie d'être humain, et essayer de ne jamais se sentir anxieux peut parfois devenir une autre forme de lutte. À la place, la thérapie peut vous aider à développer une relation différente avec l'anxiété — une relation dans laquelle vous pouvez la remarquer, la comprendre et choisir comment répondre plutôt que de la laisser automatiquement déterminer ce que vous faites.",
    "## Vous n'avez pas toujours besoin d'une raison évidente pour vous sentir anxieux",
    "La partie la plus difficile de l'anxiété est peut-être de croire qu'il vous faut une raison suffisamment bonne pour l'avoir.",
    "Mais les émotions n'arrivent pas toujours avec une explication claire. Se sentir anxieux quand tout semble bien se passer ne signifie pas que vous êtes irrationnel, ingrat ou trop sensible. C'est peut-être un signe que votre esprit et votre corps répondent à l'incertitude, à des menaces perçues, ou à des schémas qui se sont développés au fil du temps.",
    "Alors, au lieu de vous demander seulement : « Pourquoi suis-je anxieux alors que rien ne va mal ? » — vous pourriez aussi vous demander : « Qu'est-ce que mon anxiété me demande de remarquer ? »",
    "Parfois, comprendre cette question est là où commence le changement. Si vous souhaitez explorer comment l'anxiété affecte votre vie, [prenez rendez-vous pour une consultation gratuite](/book) avec notre équipe chez ChangeMoment.",
  ],
};

// ── Per-post FA translations ──────────────────────────────────────────────────
export const faBlogBodies: Record<string, string[]> = {
  "what-is-therapy": [
    "شروع درمان می‌تواند با احساس عدم اطمینان همراه باشد، به‌خصوص اگر تا به حال در [مشاوره](/services/individual-counselling) شرکت نکرده باشید. شاید تعجب کنید که باید درباره چه چیزی صحبت کنید، مشاور چه سؤالاتی می‌پرسد، یا آیا قبل از حضور باید دقیقاً بدانید مشکل چیست.",
    "اینها سؤال‌های کاملاً قابل‌درکی هستند. اولین جلسه درمانی شامل ورود به نوعی گفت‌وگوی جدید است — گفت‌وگویی که ممکن است در ابتدا ناآشنا به نظر برسد. دانستن اینکه چه انتظاری داشته باشید می‌تواند آن اولین قرار ملاقات را کمی قابل‌تحمل‌تر کند.",
    "## درمان چیست؟",
    "درمان، که به آن روان‌درمانی یا مشاوره نیز گفته می‌شود، فرآیندی مشارکتی است که در آن با یک متخصص سلامت روان آموزش‌دیده کار می‌کنید تا نگرانی‌های عاطفی، رابطه‌ای یا روانی خود را بهتر بفهمید و به آنها بپردازید.",
    "مردم به دلایل مختلفی به مشاوره مراجعه می‌کنند. برخی برای [اضطراب](/services/anxiety)، [افسردگی](/services/depression)، [سوگ](/services/grief-and-loss)، استرس، [مشکلات رابطه‌ای](/services/relationship-and-couples-counselling) یا تغییرات بزرگ زندگی کمک می‌خواهند. برخی دیگر الگوهای تکراری در روابطشان، دشواری در مدیریت احساسات، یا حسی کلی که چیزی درست نیست را تجربه می‌کنند، حتی وقتی نمی‌توانند به‌وضوح توضیح دهند چرا.",
    "برای در نظر گرفتن درمان نیازی نیست در بحران باشید.",
    "مشاوره می‌تواند فضایی برای درک بهتر افکار، احساسات، روابط و نحوه پاسخ‌دهی شما به موقعیت‌های دشوار فراهم کند. به‌جای تلاش فوری برای تغییر آنچه فکر می‌کنید یا احساس می‌کنید، درمان گاهی می‌تواند با کنجکاوتر شدن نسبت به اینکه چرا یک تجربه این‌گونه احساس می‌شود و چه چیزی ممکن است در آن نقش داشته باشد آغاز شود.",
    "همیشه یک پاسخ ساده یا فوری وجود ندارد. درک اغلب به‌تدریج در طول فرآیند درمانی شکل می‌گیرد.",
    "## در اولین جلسه درمانی شما چه اتفاقی می‌افتد؟",
    "اولین جلسه [مشاوره](/services/individual-counselling) معمولاً فرصتی است برای اینکه شما و مشاورتان شروع به آشنایی با یکدیگر کنید. مشاور معمولاً می‌خواهد بداند چه چیزی شما را به درمان کشانده و در زندگی‌تان چه اتفاقی می‌افتد. ممکن است سؤال‌هایی مثل اینها پرسیده شود:",
    "• چه چیزی باعث شد الان تصمیم به مشاوره بگیرید؟",
    "• اخیراً چه چیزی برایتان دشوار بوده؟",
    "• این موضوع چگونه بر زندگی روزمره یا روابطتان تأثیر گذاشته؟",
    "• آیا قبلاً چیز مشابهی تجربه کرده‌اید؟",
    "• از درمان چه می‌خواهید؟",
    "مشاورتان ممکن است درباره خانواده، روابط، کار، سلامت، تجربیات مهم زندگی یا تجربیات قبلی با مشاوره هم بپرسد. هدف این نیست که نتیجه‌ای سریع درباره شما بگیرد — بلکه می‌خواهد درکی کامل‌تر از تجربه و زمینه زندگی شما به دست آورد.",
    "اولین جلسه شما ممکن است شامل چند گفت‌وگوی عملی درباره نحوه کار مشاوره، حریم خصوصی و محرمانگی، هزینه‌ها، برنامه‌ریزی و آنچه از جلسات آتی می‌توانید انتظار داشته باشید هم باشد. مشاورتان باید محرمانگی و محدودیت‌های آن را توضیح دهد تا بدانید اطلاعات شخصی‌تان چگونه مدیریت خواهد شد.",
    "## چگونه برای اولین جلسه درمانی آماده شوم؟",
    "نیازی نیست با توضیحی کاملاً سازمان‌یافته از آنچه می‌گذرد حاضر شوید. شروع با چیزی ساده کاملاً معقول است، مثل: «مطمئن نیستم دقیقاً چه مشکلی دارم، اما احساس می‌کنم دیگر خودم نیستم.»",
    "گاهی افراد دقیقاً می‌دانند چه می‌خواهند بگویند. گاهی هم فهمیدن آنچه آزارشان می‌دهد خود بخشی از فرآیند مشاوره می‌شود.",
    "اگر ترجیح می‌دهید از قبل آماده شوید، می‌توانید به چند سؤال فکر کنید:",
    "• اخیراً چه چیزی بیشتر ذهنم را درگیر کرده؟",
    "• چه چیزی مرا به گرفتن این وقت ترغیب کرد؟",
    "• آیا چیزی درباره خودم یا روابطم هست که دوست دارم بهتر بفهمم؟",
    "• اگر مشاوره مفید بود، با گذشت زمان چه چیزی ممکن است متفاوت باشد؟",
    "اینها فقط نقاط شروع‌اند — نه الزامات.",
    "## آیا مشاورم من را قضاوت می‌کند؟",
    "نگرانی از قضاوت شدن می‌تواند باز صحبت کردن با کسی که نمی‌شناسیدش را دشوار کند. مشاوره به این منظور است که محیطی حرفه‌ای فراهم کند که در آن تجربیات با کنجکاوی و احترام، نه انتقاد، بررسی شوند.",
    "این به این معنا نیست که باید فوراً به مشاورتان اعتماد کنید یا در اولین جلسه از همه چیز راحت صحبت کنید. اعتماد زمان می‌برد.",
    "این اجازه را هم دارید که بگویید صحبت کردن درباره چیزی سخت است، مطمئن نیستید چه احساسی دارید، یا هنوز آماده بحث درباره آن نیستید. ندانستن هم در درمان اطلاعات مفیدی است.",
    "## آیا عصبی بودن قبل از درمان طبیعی است؟",
    "بله. درمان شامل صحبت کردن درباره تجربیاتی است که ممکن است شخصی، گیج‌کننده، دردناک یا سخت برای بیان باشند. عصبی بودن از انجام این کار با کسی که تازه ملاقات کرده‌اید کاملاً قابل‌درک است. می‌توانید به مشاورتان بگویید که عصبی هستید.",
    "هیچ انتظاری نیست که فوراً بدانید چگونه «درمان کنید». بخشی از نقش مشاور کمک به برقراری گفت‌وگویی است که به‌اندازه کافی قابل مدیریت باشد تا بتوانید با هم به کاوش ادامه دهید.",
    "## چطور بفهمم مشاور برای من مناسب است؟",
    "رابطه‌ای که با مشاورتان ایجاد می‌کنید اهمیت دارد. تحقیقات در حوزه روان‌درمانی به‌طور مداوم نشان داده‌اند که کیفیت رابطه بین مراجع و درمانگر با نتایج بهتر درمانی مرتبط است، در همه رویکردهای درمانی. در عمل، این یعنی احساس شنیده شدن، احترام دیدن و فهمیده شدن اهمیت دارد.",
    "این به این معنا نیست که باید بعد از یک قرار ملاقات احساس ارتباط فوری کنید. پس از چند جلسه اول، ممکن است مفید باشد که توجه کنید:",
    "• آیا احساس می‌کنم به حرف‌هایم گوش داده می‌شود؟",
    "• آیا احساس احترام می‌کنم؟",
    "• آیا می‌توانم سؤال بپرسم یا مخالفت کنم؟",
    "• آیا احساس می‌کنم مشاورم تلاش می‌کند تجربه‌ام را بفهمد، نه اینکه فرض‌هایی درباره‌ام بگیرد؟",
    "• آیا به نظر می‌رسد با گذشت زمان بتوانم به این شخص اعتماد کنم؟",
    "قابل‌قبول است که تصمیم بگیرید یک مشاور خاص برای شما مناسب نیست. اگر به دنبال تراز مناسب هستید، [تیم ما](/team) اینجاست تا کمک کند.",
    "## سؤالات متداول درباره اولین جلسه درمانی",
    "### آیا باید همه چیز را در اولین جلسه بگویم؟",
    "نه. می‌توانید اطلاعات را با سرعتی که برایتان قابل‌مدیریت است به اشتراک بگذارید. برخی موضوعات ممکن است زمان ببرد قبل از اینکه آماده صحبت درباره آنها باشید.",
    "### آیا مشاوره محرمانه است؟",
    "مشاوره به‌طور کلی محرمانه است، با استثناهای قانونی و اخلاقی خاص. مشاورتان باید محرمانگی و محدودیت‌های آن را در جلسات اول توضیح دهد.",
    "### اگر در اولین جلسه درمانی گریه کنم چه؟",
    "گریه کردن — یا نکردن — کاملاً قابل‌قبول است. افراد هنگام صحبت درباره تجربیات عاطفی متفاوت واکنش نشان می‌دهند و هیچ پاسخ عاطفی خاصی از شما انتظار نمی‌رود.",
    "### اگر ندانم چه بگویم چه؟",
    "می‌توانید دقیقاً همین را بگویید. ندانستن از کجا شروع کنید می‌تواند خود آغاز گفت‌وگو شود.",
    "## اولین جلسه درمانی شما یک نقطه شروع است",
    "اولین جلسه [مشاوره](/services/individual-counselling) از شما نمی‌خواهد که خودتان را کاملاً بشناسید، داستانتان را کامل تعریف کنید، یا دقیقاً بدانید چه چیزی باید تغییر کند. این یک نقطه شروع است.",
    "با گذشت زمان، درمان می‌تواند فرصتی ایجاد کند تا نگاه دقیق‌تری به افکار، احساسات، روابط و الگوهایی داشته باشید که وقتی تنها آنها را تجربه می‌کنید درک‌شان دشوار است.",
    "گاهی تغییر با یافتن راه‌حل شروع می‌شود — و گاهی فقط با رسیدن به درک روشن‌تری از آنچه می‌گذرد.",
    "اگر آماده‌اید اولین قدم را بردارید، [یک مشاوره رایگان رزرو کنید](/book) با تیم ما در ChangeMoment.",
  ],
  "anxiety-beyond-worry": [
    "آیا تا به حال روزی داشته‌اید که روی کاغذ همه چیز خوب به نظر می‌رسید — اما باز هم احساس اضطراب می‌کردید؟",
    "هیچ اتفاق بدی نیفتاده بود. کارتان نسبتاً خوب پیش می‌رفت، روابطتان مشکلی نداشت، و هیچ مشکل فوری‌ای وجود نداشت که نیاز به حل داشته باشد. با این حال، بدنتان منقبض بود، ذهنتان دائم در جستجوی چیزی بود که ممکن است اشتباه پیش برود، یا فقط نمی‌توانستید آرام بگیرید.",
    "این می‌تواند گیج‌کننده باشد. اگر دلیل آشکاری برای احساس اضطراب وجود ندارد، ممکن است شروع به این سؤال‌ها کنید: چرا اینجوری احساس می‌کنم؟ آیا واکنش بیش از حد نشان می‌دهم؟ مگر نباید بتوانم فقط آرام باشم؟",
    "حقیقت این است که [اضطراب](/services/anxiety) همیشه واکنش مستقیم به چیزی نیست که الان اشتباه می‌رود. گاهی، بیشتر به نحوه واکنش ما به عدم قطعیت، تهدیدات ممکن، و تجربیاتی مربوط می‌شود که نحوه درک ما از امنیت را شکل داده‌اند.",
    "## اضطراب بیشتر از نگرانی است",
    "اغلب به [اضطراب](/services/anxiety) به عنوان نگرانی بیش از حد فکر می‌کنیم: تصور کردن اینکه چه چیزی ممکن است اشتباه پیش برود، بازپخش موقعیت‌ها، یا تلاش مداوم برای یافتن راه‌حل.",
    "نگرانی مطمئناً می‌تواند بخشی از اضطراب باشد، اما اضطراب گسترده‌تر از نگرانی است. می‌تواند در بدن شما ظاهر شود قبل از اینکه آگاهانه بدانید نگران چه هستید. ممکن است کشش عضلانی، بی‌قراری، ضربان قلب سریع، مشکل در خواب، تحریک‌پذیری یا مشکل در تمرکز را حس کنید. گاهی، تجربه فقط احساسی مبهم است که چیزی درست نیست.",
    "اضطراب شامل پاسخ‌های عاطفی، جسمی، شناختی و رفتاری به تهدید درک‌شده یا پیش‌بینی‌شده است. به عبارت دیگر، ذهن و بدن شما می‌توانند شروع به آماده شدن برای چیزی کنند که ممکن است اتفاق بیفتد، حتی زمانی که هیچ خطر فوری‌ای وجود ندارد.",
    "## گاهی اضطراب درباره آنچه ممکن است اتفاق بیفتد است",
    "یکی از دلایلی که می‌توانید وقتی همه چیز خوب به نظر می‌رسد احساس اضطراب کنید، عدم قطعیت است.",
    "لحظه حال ممکن است امن باشد، اما آینده هرگز کاملاً قابل پیش‌بینی نیست. برای کسی که عدم قطعیت را به‌خصوص دشوار می‌یابد، نبود یک مشکل فعلی لزوماً احساس امنیت ایجاد نمی‌کند. در عوض، ذهن ممکن است شروع به پرسیدن کند:",
    "• اگر چیزی اشتباه پیش برود؟",
    "• اگر آنچه دارم را از دست بدهم؟",
    "• اگر این وضعیت دوام نیاورد؟",
    "تحقیقات در مورد اضطراب نقش عدم قطعیت و پیش‌بینی تهدیدات آینده ممکن را برجسته کرده‌اند ([Grupe & Nitschke, 2013](https://www.nature.com/articles/nrn3524); [Craske & Stein, 2016](https://doi.org/10.1016/S0140-6736(16)30381-6)). اضطراب می‌تواند شامل توجه بیشتر به خطر احتمالی، دشواری در یادگیری اینکه چیزی امن است، و تلاش برای کاهش عدم قطعیت از طریق تفکر یا رفتار باشد.",
    "این می‌تواند باعث شود نگرانی مفید به نظر برسد. اگر بتوانید هر مشکل احتمالی را پیش‌بینی کنید، شاید بتوانید از آن جلوگیری کنید.",
    "اما عدم قطعیت به طور کامل قابل حذف نیست. و تلاش مداوم برای حذف آن می‌تواند شما را به طور ذهنی آماده برای خطری نگه دارد که ممکن است هرگز نرسد.",
    "## وقتی آماده ماندن خسته‌کننده می‌شود",
    "اضطراب فقط در افکار شما اتفاق نمی‌افتد. می‌تواند بر کارهایی که انجام می‌دهید هم تأثیر بگذارد.",
    "ممکن است چیزی را مکرراً چک کنید، از دیگران تأیید بخواهید، برای موقعیت‌های نسبتاً کوچک بیش از حد آماده شوید، از موقعیت‌هایی که نامطمئن به نظر می‌رسند اجتناب کنید، یا زمان زیادی صرف تجزیه و تحلیل کنید که آیا تصمیم «درستی» گرفته‌اید.",
    "این رفتارها می‌توانند تسکین موقتی ایجاد کنند. چک می‌کنید، کسی شما را آرام می‌کند، یا یک بار دیگر آماده می‌شوید — و برای لحظه‌ای، اضطراب کاهش می‌یابد.",
    "اما وقتی این راهبردها به روش اصلی مقابله با عدم قطعیت تبدیل می‌شوند، می‌توانند ناخواسته چرخه را ادامه دهند. به‌جای کشف اینکه می‌توانید عدم قطعیت را تحمل کنید، ذهن شما ممکن است یاد بگیرد که برای احساس امنیت به چک کردن، تأیید یا آمادگی نیاز دارید.",
    "این یکی از دلایلی است که [اضطراب](/services/anxiety) می‌تواند حتی وقتی مشکل آشکاری در زندگی‌تان وجود ندارد ادامه پیدا کند.",
    "## تجربیات گذشته شما می‌توانند نحوه پاسخ شما به حال را شکل دهند",
    "پاسخ‌های عاطفی فعلی ما در انزوا توسعه نمی‌یابند.",
    "تجربیات استرس طولانی، غیرقابل پیش‌بینی بودن، انتقاد، از دست دادن، یا روابط دشوار گاهی می‌توانند نحوه پاسخ یک شخص به عدم قطعیت و تهدید درک‌شده را شکل دهند. تجربیات اولیه ممکن است بر نحوه یادگیری ما برای تشخیص امنیت و پاسخ به موقعیت‌های عاطفی هم تأثیر بگذارند ([Gross & Hen, 2004](https://www.nature.com/articles/nrn1429)).",
    "به عنوان مثال، اگر زمان زیادی را صرف پیش‌بینی خلق و خو یا واکنش‌های دیگران کرده‌اید، ممکن است به تغییرات کوچک در لحن، رفتار یا جو بسیار توجه کرده باشید.",
    "آن حساسیت ممکن است روزگاری مفید بوده باشد. اما در زندگی بعدی، گاهی می‌تواند کامل آرام گرفتن را دشوار کند، حتی در موقعیت‌هایی که نسبتاً امن هستند.",
    "این به این معنی نیست که گذشته شما حال شما را تعیین می‌کند، یا اینکه همیشه یک تجربه واحد وجود دارد که اضطراب شما را توضیح می‌دهد. مردم به شکل‌های مختلف توسعه می‌یابند، و اضطراب تحت تأثیر عوامل روانشناختی، زیستی و محیطی متعددی قرار می‌گیرد.",
    "سؤال مفیدتر ممکن است این باشد: چه چیزی را یاد گرفته‌ام که انتظار داشته باشم، و چطور این انتظار ممکن است آنچه را که الان متوجه می‌شوم شکل دهد؟",
    "## گاهی احساس قبل از توضیح می‌آید",
    "لحظاتی هم هستند که می‌دانید احساس اضطراب می‌کنید اما نمی‌توانید توضیح دهید چرا.",
    "ممکن است ندانید آیا ترسیده‌اید، غرق شده‌اید، تنها هستید، ناامید هستید، عصبانی هستید، یا فقط زیر فشار بیش از حد هستید.",
    "وقتی یک تجربه درونی مبهم به نظر می‌رسد، وسوسه‌انگیز است که فوراً آن را به عنوان نشانه‌ای تفسیر کنید که چیزی اشتباه است.",
    "در عوض، می‌توانید سعی کنید با کنجکاوی به تجربه نزدیک شوید. از خودتان بپرسید:",
    "• الان چه احساسی دارم؟",
    "• انتظار دارم چه اتفاقی بیفتد؟",
    "• می‌ترسم چه اتفاقی بیفتد؟",
    "• چه معنایی به این موقعیت می‌دهم؟",
    "• آیا سعی می‌کنم عدم قطعیت را از بین ببرم قبل از اینکه به خودم اجازه دهم جلو بروم؟",
    "این سؤال‌ها در مورد تجزیه و تحلیل هر احساس یا یافتن توضیح پنهانی برای همه چیز نیستند. در مورد ایجاد فضای بیشتری بین داشتن یک احساس مضطرب و فرض کردن اینکه آن احساس به این معناست که چیزی اشتباه است هستند.",
    "گاهی همین تغییر کوچک می‌تواند نحوه پاسخ شما را تغییر دهد.",
    "## اضطراب چه زمانی به مشکل تبدیل می‌شود؟",
    "گاهی احساس اضطراب کردن بخش عادی انسان بودن است. اضطراب می‌تواند به ما کمک کند برای چالش‌ها آماده شویم و به تهدیدات احتمالی پاسخ دهیم.",
    "ممکن است ارزش داشته باشد که حمایت حرفه‌ای بخواهید وقتی اضطراب مداوم، سخت قابل مدیریت، نامتناسب با موقعیت می‌شود، یا شروع به تداخل با جنبه‌های زندگی روزمره مانند خواب، کار، روابط، تمرکز یا فعالیت‌های روزانه می‌کند.",
    "لازم نیست صبر کنید تا اضطراب طاقت‌فرسا شود قبل از مراجعه به [مشاوره](/services/individual-counselling).",
    "درمان می‌تواند فضایی برای درک نه تنها آنچه نگرانش هستید، بلکه اینکه اضطراب شما چطور کار می‌کند ارائه دهد. با یک مشاور، می‌توانید شروع به توجه به الگوهای بین افکار، احساسات، احساسات بدنی، رفتارها، روابط و انتظارات کنید. می‌توانید کشف کنید این الگوها از کجا آمده‌اند، چطور زندگی شما را الان تحت تأثیر قرار می‌دهند، و آیا راه‌های متفاوتی برای پاسخ وجود دارد.",
    "هدف لزوماً حذف کامل اضطراب نیست. اضطراب بخشی از انسان بودن است، و تلاش برای هرگز احساس اضطراب نکردن گاهی می‌تواند به شکل دیگری از تلاش تبدیل شود. در عوض، درمان می‌تواند به شما کمک کند رابطه متفاوتی با اضطراب ایجاد کنید — رابطه‌ای که در آن می‌توانید آن را بشناسید، درک کنید، و انتخاب کنید چطور پاسخ دهید به‌جای اینکه به طور خودکار به آن اجازه دهید تعیین کند چه کاری انجام می‌دهید.",
    "## همیشه برای احساس اضطراب به دلیل آشکاری نیاز ندارید",
    "شاید سخت‌ترین بخش اضطراب این باور باشد که به دلیل کافی برای داشتن آن نیاز دارید.",
    "اما احساسات همیشه با توضیح واضحی نمی‌آیند. احساس اضطراب وقتی همه چیز خوب به نظر می‌رسد به این معنی نیست که غیرمنطقی، ناسپاس یا بیش از حد حساس هستید. ممکن است نشانه‌ای باشد که ذهن و بدن شما به عدم قطعیت، تهدیدات درک‌شده، یا الگوهایی که در طول زمان توسعه یافته‌اند پاسخ می‌دهند.",
    "پس به‌جای اینکه فقط بپرسید: «چرا وقتی هیچ چیز اشتباه نیست مضطرب هستم؟» — می‌توانید هم بپرسید: «اضطراب من چه چیزی را از من می‌خواهد که متوجه شوم؟»",
    "گاهی، درک آن سؤال جایی است که تغییر شروع می‌شود. اگر می‌خواهید بررسی کنید اضطراب چگونه بر زندگی شما تأثیر می‌گذارد، [یک مشاوره رایگان رزرو کنید](/book) با تیم ما در ChangeMoment.",
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────
export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, dir } = useLang();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blogs" replace />;

  const Back = dir === "rtl" ? ArrowRight : ArrowLeft;
  const locale = lang === "fa" ? "fa-IR" : lang === "fr" ? "fr-CA" : "en-CA";
  const dateStr = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const image = post.featuredImage || getBlogImage(post.slug, post.id);
  const articleUrl = localizedUrl(`/blogs/${post.slug}`, lang);
  const seoTitle = post.slug === "what-is-therapy"
    ? lang === "fa"
      ? "درمان چیست؟ راهنمای اولین جلسه درمان"
      : lang === "fr"
        ? "Qu’est-ce que la thérapie? Première séance"
        : "What Is Therapy? Your First Therapy Session"
    : post.slug === "anxiety-beyond-worry"
      ? lang === "fa"
        ? "اضطراب فراتر از نگرانی"
        : lang === "fr"
          ? "L’anxiété au-delà de l’inquiétude"
          : "Anxiety Beyond Worry: Why You Feel Anxious"
      : post.title[lang];

  const bodyLines =
    lang === "fr"
      ? frBlogBodies[post.slug] ?? post.body
      : lang === "fa"
      ? faBlogBodies[post.slug] ?? post.body
      : post.body;

  const jsonLd = [
    ...(post.rankMathJsonLd ?? []),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      headline: post.title[lang],
      description: post.excerpt[lang],
      datePublished: post.date,
      dateModified: post.date,
      image: absoluteSiteUrl(image),
      inLanguage: SEO_LOCALES[lang],
      keywords: post.tags.join(", "),
      author: { "@id": "https://changemoment.ca/#organization" },
      publisher: { "@id": "https://changemoment.ca/#organization" },
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.breadcrumbHome"), item: localizedUrl("/", lang) },
        { "@type": "ListItem", position: 2, name: t("blogs.detail.breadcrumb"), item: localizedUrl("/blogs", lang) },
        { "@type": "ListItem", position: 3, name: post.title[lang], item: articleUrl },
      ],
    },
  ];

  return (
    <>
      <Seo
        title={seoTitle}
        description={post.excerpt[lang]}
        path={`/blogs/${post.slug}`}
        type="article"
        publishedTime={post.date}
        jsonLd={jsonLd}
      />

      <article>
        <section className="bg-[var(--brand-olive-soft)] pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { label: t("common.breadcrumbHome"), to: "/" },
                { label: t("blogs.detail.breadcrumb"), to: "/blogs" },
                { label: post.title[lang] },
              ]}
            />
            <Reveal>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--brand-ink-muted)]">
                <span className="rounded-full bg-[var(--brand-sage-soft)] px-3 py-1 font-medium text-[#3c4322]">
                  {t(`blogs.categories.${post.category}`)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4" aria-hidden="true" />
                  {dateStr}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" aria-hidden="true" />
                  {post.readMinutes} {t("blogs.minRead")}
                </span>
              </div>
              <h1 className="mt-5">{post.title[lang]}</h1>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <div className="-mt-2 overflow-hidden rounded-[2rem] border-8 border-white shadow-[0_30px_60px_-35px_rgba(177,131,105,0.5)]">
            <ImageWithFallback
              src={image}
              alt={`${post.title[lang]} — ${t("brand.full")}`}
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="py-12">
            {post.contentHtml?.[lang] ? (
              <div
                className="cms-article-content"
                // WordPress output is allowlist-sanitized by the CMS endpoint;
                // DOMPurify is a second browser-side boundary for network data.
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.contentHtml[lang]!) }}
              />
            ) : (
              renderBody(bodyLines, lang)
            )}

            <BlogShareBar
              slug={post.slug}
              title={post.title[lang]}
              tags={post.tags}
            />

            <div className="mt-8 pt-2">
              <Link
                to={localizedPath("/blogs", lang)}
                className="inline-flex items-center gap-2 text-[var(--brand-deep-olive)] transition-all hover:gap-3"
              >
                <Back className="size-4" aria-hidden="true" />
                {t("blogs.detail.backToBlogs")}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <Section bg="bone-soft">
          <Reveal>
            <h2>{t("blogs.detail.related")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}
