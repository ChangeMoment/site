import { useParams, Navigate, Link } from "react-router";
import {
  CalendarHeart,
  CheckCircle2,
  Heart,
  Compass,
  Laptop,
  Users,
  Home,
  MapPin,
  Accessibility,
  Clock3,
  ShieldCheck,
  Link2,
  ReceiptText,
  MessageCircle,
  Repeat2,
  CircleAlert,
  Brain,
  Moon,
  HeartHandshake,
  Baby,
  Car,
  Rainbow,
  Flame,
  CloudRain,
  CloudLightning,
  HandHeart,
  ScanHeart,
  CircleOff,
  Scale,
  Waves,
  Search,
  MessageSquareHeart,
  UserRound,
  House,
  BriefcaseBusiness,
  MapPinned,
  CalendarClock,
  BrainCircuit,
  HeartPulse,
  CloudSun,
  GitFork,
  HeartCrack,
  MessagesSquare,
  Unplug,
  MessageCircleWarning,
  Milestone,
  LockKeyhole,
  HousePlus,
  UserRoundCheck,
  MessageSquareMore,
  Languages,
  Network,
  Workflow,
  BadgeAlert,
  BrainCog,
  Footprints,
  RadioTower,
  MoonStar,
  BatteryLow,
  BedDouble,
  Utensils,
  UserMinus,
  History,
  EyeOff,
  ShieldAlert,
  CloudFog,
  Handshake,
  Flower2,
  CloudDrizzle,
  CalendarDays,
  ArchiveX,
  ClockAlert,
  FileQuestion,
  Annoyed,
  VolumeX,
  Archive,
  Activity,
  Swords,
  ListTodo,
  TimerReset,
  FolderKanban,
  CloudCog,
  MousePointer2,
  CircleUserRound,
  BadgeHelp,
  Vibrate,
  Award,
  GitCompareArrows,
  Fingerprint,
  DoorOpen,
  VenusAndMars,
  Shield,
  Siren,
  UsersRound,
  Eye,
  ShieldQuestion,
  Route,
  Scan,
  Ban,
  PersonStanding,
  ThumbsDown,
  FileHeart,
  Globe,
  MountainSnow,
  TreePine,
  MessageCircleHeart,
  Landmark,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeading, LinkButton } from "../components/ui-kit";
import { ServiceCard } from "../components/ServiceCard";
import { FAQ } from "../components/FAQ";
import { CTABand } from "../components/CTABand";
import { MomentCurve } from "../components/CurveDecoration";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLang } from "../i18n/LanguageProvider";
import { getService, services } from "../data/services";
import { serviceImages } from "../data/images";
import { localizedPath, localizedUrl, SEO_LOCALES } from "../lib/seo";
import onlineOpeningImage from "../../imports/Online_Counselling_-_Opening_image.jpg";
import onlineSectionImage2 from "../../imports/Online_Counselling_-_2.jpg";
import onlineSectionImage3 from "../../imports/Online_Counselling_-_3.jpg";
import onlineSectionImage4 from "../../imports/Online_Counselling_-_4__1_.jpg";
import individualOpeningImage from "../../imports/Individual_Counselling_-_Opening_image.jpg";
import individualSectionImage2 from "../../imports/Individual_Counselling_-_2.jpg";
import individualSectionImage3 from "../../imports/Individual_Counselling_-_3.jpg";
import individualSectionImage4 from "../../imports/Individual_Counselling_-_4.jpg";
import couplesOpeningImage from "../../imports/Relationship___Couples_Counselling_-_Opening_image.jpg";
import couplesSectionImage2 from "../../imports/Relationship___Couples_Counselling_-_2.jpg";
import couplesSectionImage3 from "../../imports/Relationship___Couples_Counselling_-_3.jpg";
import couplesSectionImage4 from "../../imports/Relationship___Couples_Counselling_-_4__1_.jpg";
import familyOpeningImage from "../../imports/Family_Counselling_-_Opening_image.jpg";
import familySectionImage2 from "../../imports/Family_Counselling_-_2.jpg";
import familySectionImage3 from "../../imports/Family_Counselling_-_3.jpg";
import familySectionImage4 from "../../imports/Family_Counselling_-_4__1_.jpg";
import anxietyOpeningImage from "../../imports/Anxiety_-_Opening_image.jpg";
import anxietySectionImage2 from "../../imports/Anxiety_-_2.jpg";
import anxietySectionImage3 from "../../imports/Anxiety_-_3.jpg";
import anxietySectionImage4 from "../../imports/Anxiety_-_4.jpg";
import anxietyProgressImage from "../../imports/Anxiety_-_5.jpg";
import depressionOpeningImage from "../../imports/Depression_-_Opening_image__3_.jpg";
import depressionSectionImage2 from "../../imports/Depression_-_2__1_.jpg";
import depressionSectionImage3 from "../../imports/Depression_-_3.jpg";
import depressionProgressImage from "../../imports/Depression_-_5.jpg";
import traumaOpeningImage from "../../imports/Trauma_-_Opening_image.jpg";
import traumaSectionImage2 from "../../imports/Trauma_-_2.jpg";
import traumaSectionImage3 from "../../imports/Trauma_-_3.jpg";
import traumaSectionImage4 from "../../imports/Trauma_-_4.jpg";
import traumaProgressImage from "../../imports/Trauma_-_5.jpg";
import griefOpeningImage from "../../imports/Grief___Loss_-_Opening_image.jpg";
import griefSectionImage2 from "../../imports/Grief___Loss_-_2.jpg";
import griefSectionImage3 from "../../imports/Grief___Loss_-_3.jpg";
import griefSectionImage4 from "../../imports/Grief___Loss_-_4__1_.jpg";
import angerOpeningImage from "../../imports/Anger_Management_-_Opening_image.jpg";
import angerSectionImage2 from "../../imports/Anger_Management_-_2.jpg";
import angerSectionImage3 from "../../imports/Anger_Management_-_3.jpg";
import angerSectionImage4 from "../../imports/Anger_Management_-_4.jpg";
import angerIntroImage from "../../imports/Anger_Management_-_5.jpg";
import adhdOpeningImage from "../../imports/ADHD_-_Opening_image.jpg";
import adhdSectionImage2 from "../../imports/ADHD_-_2.jpg";
import adhdSectionImage3 from "../../imports/ADHD_-_3.jpg";
import adhdSectionImage4 from "../../imports/ADHD_-_4.jpg";
import pregnancyOpeningImage from "../../imports/Pregnancy___Postpartum_-_Opening_image__2_.jpg";
import pregnancySectionImage2 from "../../imports/Pregnancy___Postpartum_-_2__1_.jpg";
import pregnancySectionImage3 from "../../imports/Pregnancy___Postpartum_-_3.jpg";
import pregnancySectionImage4 from "../../imports/Pregnancy___Postpartum_-_4.jpg";
import lgbtqOpeningImage from "../../imports/LGBTQIA2S__-_Opening_image.jpg";
import lgbtqSectionImage2 from "../../imports/LGBTQIA2S__-_2.jpg";
import lgbtqSectionImage3 from "../../imports/LGBTQIA2S__-_3.jpg";
import lgbtqSectionImage4 from "../../imports/LGBTQIA2S__-_4.jpg";
import cvapOpeningImage from "../../imports/CVAP_Clients_-_Opening_image.jpg";
import cvapSectionImage2 from "../../imports/CVAP_Clients_-_2.jpg";
import cvapSectionImage3 from "../../imports/CVAP_Clients_-_3.jpg";
import cvapSectionImage4 from "../../imports/CVAP_Clients_-_4.jpg";
import icbcOpeningImage from "../../imports/ICBC_Clients_-_Opening_image.jpg";
import icbcSectionImage2 from "../../imports/ICBC_Clients_-_2.jpg";
import icbcSectionImage3 from "../../imports/ICBC_Clients_-_3.jpg";
import icbcSectionImage4 from "../../imports/ICBC_Clients_-_4.jpg";
import onlineMobileOpeningImage from "../../imports/Online_Counselling_-_Opening_image_-_mobile.jpg";
import individualMobileOpeningImage from "../../imports/Individual_Counselling_-_Opening_image_-_mobile.jpg";
import couplesMobileOpeningImage from "../../imports/Relationship___Couples_Counselling_-_Opening_image_-_mobile.jpg";
import familyMobileOpeningImage from "../../imports/Family_Counselling_-_Opening_image_-_mobile.jpg";
import anxietyMobileOpeningImage from "../../imports/Anxiety_-_Opening_image_-_mobile.jpg";
import depressionMobileOpeningImage from "../../imports/Depression_-_Opening_image_-_mobile.jpg";
import traumaMobileOpeningImage from "../../imports/Trauma_-_Opening_image_-_mobile.jpg";
import griefMobileOpeningImage from "../../imports/Grief___Loss_-_Opening_image_-_mobile.jpg";
import angerMobileOpeningImage from "../../imports/Anger_Management_-_Opening_image_-_mobile.jpg";
import adhdMobileOpeningImage from "../../imports/ADHD_-_Opening_image_-_mobile.jpg";
import pregnancyMobileOpeningImage from "../../imports/Pregnancy___Postpartum_-_Opening_image_-_mobile-1.jpg";
import lgbtqMobileOpeningImage from "../../imports/LGBTQIA2S__-_Opening_image_-_mobile-1.jpg";
import cvapMobileOpeningImage from "../../imports/CVAP_Clients_-_Opening_image_-_mobile__1_.jpg";
import icbcMobileOpeningImage from "../../imports/ICBC_Clients_-_Opening_image_-_mobile_2.jpg";

import ifhpOpeningImage from "../../imports/IFHP_-_Opening_image_-_desktop.jpg";
import ifhpMobileOpeningImage from "../../imports/IFHP_-_Opening_image_-_mobile.jpg";
import ifhpSectionImage2 from "../../imports/IFHP_-_2.jpg";
import ifhpSectionImage3 from "../../imports/IFHP_-_3.jpg";
import ifhpSectionImage4 from "../../imports/IFHP_-_4.jpg";

import { formatLgbtqia2sText } from "../lib/lgbtqia";

const frServiceContent: Record<string, { help: string[]; experiencing: string[]; expect: string[]; who: string[]; faqs: { q: string; a: string }[] }> = {
  "online-counselling": {
    help: ["Accéder à des thérapeutes expérimentés sans déplacement", "Maintenir une continuité de soins, même lorsque la vie est chargée", "Créer un cadre familier et privé pour les conversations difficiles", "Réduire les obstacles qui peuvent rendre la demande d’aide plus difficile"],
    experiencing: ["Difficulté à trouver du temps pour des rendez-vous en personne", "Vivre loin des cliniques ou préférer rester à la maison", "Se sentir plus ouvert dans son propre espace", "Souhaiter un soutien flexible et constant"],
    expect: ["Une séance vidéo sécurisée et privée sur votre appareil", "La même profondeur de soin qu’un rendez-vous en personne", "Un espace calme et structuré guidé par votre thérapeute", "Une réservation simple et des rappels de rendez-vous"],
    who: ["Les personnes aux horaires chargés ou imprévisibles", "Celles qui vivent à l’extérieur des grands centres", "Toute personne plus à l’aise à la maison", "Les personnes qui concilient soins, travail et famille"],
    faqs: [{ q: "Le counselling en ligne est-il aussi efficace qu’en personne ?", a: "Les recherches montrent que la thérapie en ligne peut être tout aussi efficace pour de nombreuses préoccupations. Votre thérapeute vous aidera à déterminer ce qui vous convient." }, { q: "Ma séance est-elle privée et sécurisée ?", a: "Oui. Les séances se déroulent sur une plateforme sécurisée et confidentielle, et la réservation suit un processus protégé." }, { q: "De quoi ai-je besoin pour participer ?", a: "Un espace calme et privé, une connexion Internet stable et un appareil avec caméra. C’est tout." }],
  },
  "individual-counselling": {
    help: ["Comprendre les schémas qui reviennent dans votre vie", "Développer des outils concrets pour le stress, les émotions et le changement", "Renforcer la conscience de soi et l’autocompassion", "Avancer vers des objectifs importants pour vous, à votre rythme"],
    experiencing: ["Vous sentir bloqué, dépassé ou différent de vous-même", "Des pensées ou émotions récurrentes difficiles à gérer", "L’impression que quelque chose doit changer", "Le désir de mieux vous comprendre"],
    expect: ["Une première séance chaleureuse et confidentielle pour comprendre vos objectifs", "Un plan collaboratif adapté à vous", "Des approches fondées sur des données probantes et ajustées à vos besoins", "Un espace stable, sans jugement, séance après séance"],
    who: ["Toute personne traversant une période difficile", "Les personnes qui souhaitent gagner en clarté et évoluer", "Celles qui vivent du stress, un changement ou une transition", "Toute personne qui a simplement besoin d’être entendue"],
    faqs: [{ q: "Combien de temps dure un accompagnement ?", a: "Cela varie d’une personne à l’autre. Certaines viennent pour quelques séances ciblées; d’autres poursuivent plus longtemps. Vous décidez ensemble avec votre thérapeute." }, { q: "Quelles approches utilisez-vous ?", a: "Nos thérapeutes s’appuient sur des méthodes fondées sur des données probantes et les adaptent à votre réalité, plutôt que d’appliquer un modèle unique." }, { q: "Et si je ne sais pas par où commencer ?", a: "C’est tout à fait correct. Votre thérapeute guidera doucement la première conversation." }],
  },
  "relationship-and-couples-counselling": {
    help: ["Améliorer la communication et réduire les conflits répétitifs", "Reconstruire la confiance, la proximité et la sécurité émotionnelle", "Comprendre les besoins et les schémas de chacun", "Traverser ensemble les transitions, le stress ou les décisions difficiles"],
    experiencing: ["Des malentendus fréquents ou les mêmes disputes", "Un sentiment de distance, de déconnexion ou de ne pas être entendu", "Un changement important ou une rupture de confiance", "Le désir de renforcer une relation déjà solide"],
    expect: ["Un espace équilibré où les deux partenaires sont entendus", "Un thérapeute neutre et respectueux pour guider la conversation", "Des outils de communication concrets à utiliser à la maison", "Une compréhension partagée de vos objectifs comme couple"],
    who: ["Les couples à toute étape de leur relation", "Les partenaires confrontés au conflit, à la distance ou au changement", "Ceux qui souhaitent approfondir leur connexion", "Les personnes qui se préparent à une grande transition ensemble"],
    faqs: [{ q: "Les deux partenaires doivent-ils être présents ?", a: "Le travail de couple est généralement plus efficace lorsque les deux partenaires sont présents, même si des séances individuelles peuvent parfois soutenir le processus." }, { q: "Le thérapeute prendra-t-il parti ?", a: "Non. Votre thérapeute reste neutre et travaille au service de la relation, afin que chacun se sente compris." }, { q: "Et si nous ne savons pas si nous voulons rester ensemble ?", a: "Cette incertitude a sa place ici. Le counselling peut vous aider à trouver de la clarté, quelle que soit l’issue." }],
  },
  "family-counselling": {
    help: ["Améliorer la compréhension et la communication à la maison", "Traverser les conflits, transitions ou défis parentaux", "Soutenir les enfants et les adolescents dans le système familial", "Reconstruire le lien et un sentiment de sécurité ensemble"],
    experiencing: ["Des tensions ou conflits persistants à la maison", "Des difficultés à communiquer entre générations", "Une adaptation à un grand changement familial", "Des inquiétudes au sujet du bien-être d’un enfant ou d’un adolescent"],
    expect: ["Un espace accueillant pour toute la famille", "Un thérapeute qui aide chacun à se sentir entendu", "Des stratégies concrètes pour le quotidien", "Un regard centré sur les forces, et non sur le blâme"],
    who: ["Les familles qui vivent des conflits ou des changements", "Les parents qui cherchent soutien et orientation", "Les familles recomposées ou en croissance", "Toute personne souhaitant une vie familiale plus saine"],
    faqs: [{ q: "Qui devrait participer aux séances familiales ?", a: "Cela dépend de vos objectifs. Votre thérapeute vous aidera à décider qui inclure et à quel moment." }, { q: "Les enfants peuvent-ils participer ?", a: "Oui, lorsque c’est approprié. Les séances sont adaptées pour être confortables pour les plus jeunes." }, { q: "Et si tout le monde ne veut pas venir ?", a: "C’est fréquent. Un changement significatif peut tout de même commencer avec les personnes prêtes à faire un premier pas." }],
  },
  "anxiety": {
    help: ["Comprendre ce qui alimente votre anxiété", "Apprendre des outils pour calmer le corps et l’esprit", "Réduire l’évitement et reprendre votre quotidien", "Bâtir une résilience durable, au-delà des solutions rapides"],
    experiencing: ["Des pensées qui s’emballent ou des inquiétudes constantes", "Des tensions physiques, de l’agitation ou des troubles du sommeil", "L’évitement de situations qui semblent accablantes", "Se sentir sur le qui-vive sans savoir pourquoi"],
    expect: ["Une approche douce et progressive, sans vous brusquer", "Des outils fondés sur des données probantes comme la TCC et la pleine conscience", "Des stratégies pratiques pour les moments du quotidien", "Un thérapeute qui vous aide à vous sentir en sécurité et compris"],
    who: ["Les personnes vivant avec une inquiétude ou un stress constant", "Celles qui vivent de la panique ou un débordement", "Toute personne qui évite certaines situations par peur", "Les personnes qui souhaitent des journées plus calmes et stables"],
    faqs: [{ q: "Devrai-je revivre tout ce qui m’inquiète ?", a: "Non. Nous avançons à votre rythme, et vous gardez toujours le contrôle de ce que vous partagez." }, { q: "Prescrivez-vous des médicaments ?", a: "Nous offrons du counselling, pas de prescriptions, mais nous pouvons collaborer avec votre médecin si cela vous aide." }, { q: "En combien de temps vais-je me sentir mieux ?", a: "Plusieurs personnes remarquent de petits changements assez tôt, tandis que les changements plus profonds se construisent avec le temps." }],
  },
  "depression": { help: ["Comprendre la dépression avec douceur et sans jugement", "Retrouver progressivement de l’énergie, du sens et de la motivation", "Développer des outils pour les pensées lourdes et l’isolement", "Reconstruire des routines qui soutiennent votre bien-être"], experiencing: ["Une tristesse persistante ou un sentiment de vide", "Une perte d’intérêt pour ce qui comptait auparavant", "De la fatigue, de l’irritabilité ou un sommeil perturbé", "L’impression d’être seul ou coincé"], expect: ["Un espace chaleureux où vous n’avez pas à faire semblant", "Une approche graduelle qui respecte votre rythme", "Des stratégies concrètes et adaptées à votre réalité", "Un soutien constant pour retrouver de la stabilité"], who: ["Les personnes vivant une baisse d’humeur", "Celles qui se sentent épuisées ou déconnectées", "Les personnes traversant une période difficile", "Toute personne qui souhaite retrouver un appui"], faqs: [{ q: "La thérapie peut-elle aider la dépression ?", a: "Oui. Un soutien thérapeutique peut aider à comprendre ce qui se passe, à réduire l’isolement et à bâtir des stratégies réalistes pour aller mieux." }, { q: "Dois-je attendre d’aller très mal pour consulter ?", a: "Non. Vous pouvez demander du soutien dès que vous sentez que quelque chose devient lourd à porter." }, { q: "Et si je n’ai pas beaucoup d’énergie pour parler ?", a: "Les séances peuvent avancer doucement, selon ce qui est possible pour vous ce jour-là." }] },
  "trauma": { help: ["Créer un sentiment de sécurité avant d’aborder les souvenirs difficiles", "Comprendre les réactions du système nerveux", "Réduire les déclencheurs et le sentiment d’être en mode survie", "Avancer vers une vie plus stable et plus libre"], experiencing: ["Des souvenirs intrusifs ou des réactions intenses", "Une hypervigilance, de l’évitement ou de l’engourdissement", "Des difficultés à faire confiance ou à se sentir en sécurité", "La sensation que le passé est encore présent"], expect: ["Une approche sensible au trauma, sans pression", "Un rythme qui vous laisse toujours le choix", "Des outils de stabilisation et d’ancrage", "Un accompagnement respectueux et profondément sécurisant"], who: ["Les personnes ayant vécu des événements douloureux", "Celles qui vivent avec des déclencheurs ou de l’hypervigilance", "Les survivants qui souhaitent retrouver du contrôle", "Toute personne qui veut se sentir plus en sécurité dans son corps"], faqs: [{ q: "Devrai-je raconter tous les détails ?", a: "Non. Le travail commence par la sécurité et la stabilisation. Vous choisissez ce que vous partagez." }, { q: "Pourquoi mon corps réagit-il encore ?", a: "Le trauma peut rester inscrit dans le système nerveux. La thérapie aide à comprendre ces réactions et à les apaiser." }, { q: "La guérison est-elle possible ?", a: "Oui. Elle prend du temps et se fait à votre rythme." }] },
  "grief-and-loss": { help: ["Accueillir votre deuil sans le presser", "Donner une place à l’amour, à la douleur et aux souvenirs", "Traverser les changements d’identité et de quotidien", "Trouver une façon de continuer sans oublier"], experiencing: ["Une tristesse profonde, de la colère ou de la confusion", "Des vagues d’émotions imprévisibles", "Un sentiment de vide ou de solitude", "La difficulté à reprendre le cours de la vie"], expect: ["Un espace doux pour parler de ce qui a été perdu", "Aucune pression pour aller mieux rapidement", "Un soutien pour comprendre les réactions du deuil", "Des repères pour avancer avec compassion"], who: ["Les personnes vivant une perte récente ou ancienne", "Celles qui accompagnent un deuil compliqué", "Les personnes touchées par une séparation ou un changement majeur", "Toute personne qui a besoin d’un espace pour déposer sa peine"], faqs: [{ q: "Est-ce normal que le deuil dure longtemps ?", a: "Oui. Le deuil n’a pas de calendrier fixe." }, { q: "Dois-je être prêt à parler de tout ?", a: "Non. Vous pouvez commencer par ce qui est possible." }, { q: "La thérapie enlève-t-elle la douleur ?", a: "Elle ne remplace pas la perte, mais elle peut aider à porter la douleur avec moins de solitude." }] },
  "anger-management": { help: ["Comprendre ce qui se cache sous la colère", "Reconnaître les signes avant que l’intensité monte", "Développer des façons plus sûres de répondre", "Réparer les impacts sur soi et sur les relations"], experiencing: ["Des réactions rapides ou difficiles à contrôler", "Des conflits qui se répètent", "De la honte ou du regret après coup", "La peur de blesser ou d’éloigner les autres"], expect: ["Un espace sans jugement pour comprendre la colère", "Des outils concrets de régulation", "Un travail sur les déclencheurs et les besoins", "Des stratégies pour communiquer plus clairement"], who: ["Les personnes qui se sentent dépassées par la colère", "Celles qui vivent des conflits relationnels", "Les personnes qui souhaitent réagir autrement", "Toute personne voulant plus de calme et de contrôle"], faqs: [{ q: "La colère est-elle toujours un problème ?", a: "Non. La colère est une émotion humaine; le travail consiste à l’exprimer de façon plus sécuritaire." }, { q: "Vais-je être jugé ?", a: "Non. Nous travaillons avec respect, responsabilité et compassion." }, { q: "Peut-on changer ses réactions ?", a: "Oui. Avec de la pratique et du soutien, il est possible de créer de nouvelles réponses." }] },
  "adhd": { help: ["Mieux comprendre l’attention, l’impulsivité et l’organisation", "Créer des stratégies réalistes pour le quotidien", "Réduire la honte et l’autocritique", "Soutenir les relations, le travail ou les études"], experiencing: ["Difficulté à commencer ou terminer des tâches", "Oublis, désorganisation ou surcharge mentale", "Impulsivité ou émotions intenses", "Le sentiment de ne jamais en faire assez"], expect: ["Une approche pratique, bienveillante et structurée", "Des outils adaptés à votre cerveau et à votre vie", "Un soutien pour les routines et les priorités", "Un espace pour renforcer l’estime de soi"], who: ["Les adultes vivant avec le TDAH ou des traits d’inattention", "Les personnes qui se sentent constamment débordées", "Les étudiants ou professionnels qui cherchent des stratégies", "Toute personne voulant mieux comprendre son fonctionnement"], faqs: [{ q: "Offrez-vous une évaluation diagnostique ?", a: "Nous offrons du counselling et du soutien thérapeutique. Si une évaluation formelle est nécessaire, nous pouvons vous orienter." }, { q: "La thérapie peut-elle aider le TDAH ?", a: "Oui. Elle peut soutenir l’organisation, la régulation émotionnelle et la confiance en soi." }, { q: "Dois-je avoir un diagnostic ?", a: "Non. Vous pouvez recevoir du soutien avec ou sans diagnostic formel." }] },
  "prenatal-and-pregnancy": { help: ["Soutenir les émotions pendant la grossesse et la période périnatale", "Accueillir les peurs, changements et attentes", "Renforcer le soutien autour de vous", "Créer un espace pour votre identité de parent"], experiencing: ["Anxiété, tristesse ou irritabilité pendant la grossesse", "Inquiétudes autour de l’accouchement ou de la parentalité", "Changements dans le couple ou la famille", "Le besoin d’un espace pour être entendu"], expect: ["Un soutien doux et informé sur la période périnatale", "Des conversations sur les émotions, le corps et les relations", "Des outils pour l’anxiété et la surcharge", "Un accompagnement respectueux de votre histoire"], who: ["Les personnes enceintes ou en parcours périnatal", "Les partenaires et familles en transition", "Les personnes vivant une perte ou une inquiétude liée à la grossesse", "Toute personne qui souhaite du soutien pendant cette période"], faqs: [{ q: "Puis-je consulter même si tout semble aller bien ?", a: "Oui. La période périnatale peut soulever beaucoup d’émotions." }, { q: "Les partenaires peuvent-ils participer ?", a: "Oui, lorsque cela correspond à vos besoins." }, { q: "Parlez-vous de deuil périnatal ?", a: "Oui. Nous accueillons avec douceur les expériences de perte et d’incertitude." }] },
  "lgbtqia2s": { help: ["Offrir un espace affirmatif, respectueux et sécuritaire", "Explorer l’identité, les relations et l’appartenance", "Soutenir la santé mentale face au stress minoritaire", "Renforcer l’autocompassion et la confiance"], experiencing: ["Le besoin d’être accueilli sans avoir à expliquer son identité", "Du stress lié à la discrimination ou au rejet", "Des questionnements sur l’identité ou les relations", "Le désir d’un soutien culturellement sensible et affirmatif"], expect: ["Un accueil inclusif et sans jugement", "Un langage respectueux de votre identité", "Un soutien adapté à votre réalité", "Un espace où vous pouvez être pleinement vous-même"], who: ["Les personnes LGBTQ+", "Celles qui explorent leur identité ou leur expression", "Les proches qui cherchent à mieux soutenir", "Toute personne qui veut un espace affirmatif"], faqs: [{ q: "Dois-je expliquer mon identité au thérapeute ?", a: "Vous n’avez pas à vous justifier. Votre identité est accueillie avec respect." }, { q: "Puis-je parler d’autres sujets ?", a: "Absolument. Tous les aspects de votre vie ont leur place." }, { q: "Le service est-il affirmatif ?", a: "Oui. Nous travaillons dans une approche inclusive et affirmative." }] },
  "cvap-clients": { help: ["Soutenir les personnes admissibles au CVAP", "Créer un espace sécuritaire après un événement violent ou traumatique", "Aider à stabiliser les émotions et le quotidien", "Vous accompagner avec respect dans le processus de guérison"], experiencing: ["Des réactions liées à un crime ou à un événement traumatique", "De l’anxiété, de la peur ou de l’hypervigilance", "Des difficultés à reprendre confiance", "Le besoin d’un soutien professionnel et confidentiel"], expect: ["Un accueil sensible au trauma", "Une aide pour comprendre les prochaines étapes", "Un rythme respectueux de votre sécurité", "Un soutien centré sur la stabilité et la reconstruction"], who: ["Les clients admissibles au CVAP", "Les survivants d’actes criminels ou de violence", "Les personnes touchées indirectement par un événement traumatique", "Toute personne cherchant un soutien lié au CVAP"], faqs: [{ q: "Qu’est-ce que le CVAP ?", a: "Le CVAP est un programme de la Colombie-Britannique qui peut soutenir l’accès à des services pour les victimes admissibles." }, { q: "Pouvez-vous m’aider à comprendre le processus ?", a: "Nous pouvons vous aider à clarifier les étapes liées au soutien thérapeutique." }, { q: "Le soutien est-il confidentiel ?", a: "Oui. Votre confidentialité et votre sécurité sont essentielles." }] },
  "icbc-clients": { help: ["Soutenir la santé mentale après un accident de la route", "Aider à gérer l’anxiété, le stress ou les réactions traumatiques", "Rebâtir la confiance dans les déplacements et le quotidien", "Accompagner la récupération émotionnelle avec structure"], experiencing: ["Peur de conduire ou d’être passager", "Souvenirs intrusifs ou tension après l’accident", "Irritabilité, anxiété ou troubles du sommeil", "Difficulté à reprendre les activités habituelles"], expect: ["Une approche calme et orientée vers la récupération", "Des outils pour stabiliser le système nerveux", "Un soutien pour reprendre confiance graduellement", "Un accompagnement adapté à vos objectifs"], who: ["Les clients ICBC après un accident", "Les personnes vivant du stress ou de l’anxiété post-accident", "Celles qui ont peur de reprendre la route", "Toute personne qui souhaite soutenir sa récupération émotionnelle"], faqs: [{ q: "Travaillez-vous avec les clients ICBC ?", a: "Oui. Nous pouvons offrir un soutien thérapeutique aux clients ICBC selon leur situation." }, { q: "La thérapie peut-elle aider après un accident ?", a: "Oui. Elle peut aider à réduire l’anxiété et à reprendre confiance." }, { q: "Dois-je avoir des symptômes graves ?", a: "Non. Même des réactions plus subtiles peuvent mériter du soutien." }] },
  ifhp: { help: ["Accéder à du counselling couvert par le PFSI", "Traiter le trauma, la perte et le stress du déplacement", "Reconstruire un sentiment de sécurité et d’appartenance dans un nouveau pays", "Recevoir des soins sensibles à la culture et au trauma"], experiencing: ["Le stress de la réinstallation et de l’adaptation à un nouveau pays", "Du trauma, du deuil ou des pertes liés à votre parcours", "De l’anxiété, une humeur basse ou des troubles du sommeil", "De l’incertitude quant à l’accès au soutien en santé mentale"], expect: ["Un counselling compatissant et sensible au trauma", "Des soins qui respectent votre langue, votre culture et votre histoire", "De l’accompagnement pour la couverture du PFSI", "Un espace sécuritaire pour guérir à votre rythme"], who: ["Les réfugiés réinstallés et les personnes protégées", "Les demandeurs d’asile en attente d’une décision", "Les nouveaux arrivants admissibles au PFSI", "Toute personne touchée par l’impact émotionnel du déplacement"], faqs: [{ q: "Qu’est-ce que le PFSI ?", a: "Le Programme fédéral de santé intérimaire offre une couverture de santé limitée et temporaire — incluant le counselling — aux réfugiés et personnes protégées admissibles qui ne sont pas encore couverts par l’assurance provinciale." }, { q: "Suis-je admissible au counselling du PFSI ?", a: "L’admissibilité est déterminée par le gouvernement du Canada. Si vous détenez une couverture PFSI valide incluant la santé mentale, nous pouvons vous aider à commencer." }, { q: "L’approche est-elle sensible au trauma ?", a: "Oui. Notre counselling repose sur une pratique sensible au trauma et à la culture, dans le respect et la dignité." }] },

};

const faServiceContent: Record<string, { help: string[]; experiencing: string[]; expect: string[]; who: string[]; faqs: { q: string; a: string }[] }> = {
  "online-counselling": { help: ["دسترسی به درمانگران باتجربه بدون رفت‌وآمد", "حفظ پیوستگی درمان حتی در روزهای شلوغ یا هنگام جابه‌جایی", "ساختن فضایی آشنا و خصوصی برای گفت‌وگوهای دشوار", "کم کردن موانعی که درخواست کمک را سخت می‌کنند"], experiencing: ["سختی در پیدا کردن زمان برای جلسات حضوری", "دور بودن از مراکز درمانی یا ترجیح دادن خانه", "احساس راحتی بیشتر در فضای شخصی خود", "نیاز به حمایتی منعطف و پیوسته"], expect: ["جلسه ویدیویی امن و خصوصی با دستگاه دلخواه شما", "همان عمق مراقبت جلسه حضوری", "فضایی آرام و ساختارمند با راهنمایی درمانگر", "رزرو ساده و یادآوری وقت"], who: ["افرادی با برنامه‌های شلوغ یا غیرقابل‌پیش‌بینی", "کسانی که خارج از مراکز شهری زندگی می‌کنند", "هر کسی که در خانه احساس آرامش بیشتری دارد", "افرادی که کار، خانواده و مراقبت از خود را هم‌زمان پیش می‌برند"], faqs: [{ q: "آیا مشاوره آنلاین به اندازه حضوری مؤثر است؟", a: "پژوهش‌ها نشان می‌دهند درمان آنلاین برای بسیاری از مسائل می‌تواند به همان اندازه مؤثر باشد. درمانگر کمک می‌کند ببینید چه چیزی برای شما مناسب‌تر است." }, { q: "آیا جلسه من خصوصی و امن است؟", a: "بله. جلسات در بستری امن و محرمانه برگزار می‌شوند و فرایند رزرو نیز محافظت‌شده است." }, { q: "برای شرکت در جلسه به چه چیزی نیاز دارم؟", a: "یک فضای آرام و خصوصی، اینترنت پایدار و دستگاهی با دوربین. همین کافی است." }] },
  "individual-counselling": { help: ["شناخت الگوهایی که در زندگی‌تان تکرار می‌شوند", "ساختن ابزارهای کاربردی برای استرس، احساسات و تغییر", "تقویت خودآگاهی و مهربانی با خود", "حرکت به سوی هدف‌هایی که برایتان مهم‌اند، با ریتم خودتان"], experiencing: ["احساس گیر افتادن، آشفتگی یا دور شدن از خود", "افکار یا احساسات تکرارشونده و سخت برای مدیریت", "این حس که چیزی نیاز به تغییر دارد", "میل به شناخت عمیق‌تر خود"], expect: ["جلسه اول گرم و محرمانه برای شناخت هدف‌های شما", "برنامه‌ای مشترک و متناسب با نیاز شما", "رویکردهای مبتنی بر شواهد و سازگار با شرایطتان", "فضایی ثابت، امن و بدون قضاوت در هر جلسه"], who: ["هر کسی که از دوره‌ای دشوار عبور می‌کند", "افرادی که رشد فردی و وضوح بیشتری می‌خواهند", "کسانی که با استرس، تغییر یا گذارهای زندگی روبه‌رو هستند", "هر کسی که نیاز دارد شنیده شود"], faqs: [{ q: "مشاوره چقدر طول می‌کشد؟", a: "برای هر فرد متفاوت است. بعضی افراد چند جلسه متمرکز می‌آیند و بعضی طولانی‌تر ادامه می‌دهند. شما و درمانگرتان با هم تصمیم می‌گیرید." }, { q: "از چه رویکردهایی استفاده می‌کنید؟", a: "درمانگران ما از روش‌های مبتنی بر شواهد استفاده می‌کنند و آن‌ها را با نیاز شما تطبیق می‌دهند، نه اینکه یک نسخه واحد برای همه به کار ببرند." }, { q: "اگر ندانم از کجا شروع کنم چه؟", a: "کاملاً طبیعی است. درمانگر گفت‌وگوی اول را با آرامش و احترام هدایت می‌کند." }] },
  "relationship-and-couples-counselling": { help: ["بهبود گفت‌وگو و کاهش تعارض‌های تکراری", "بازسازی اعتماد، نزدیکی و امنیت عاطفی", "شناخت نیازها و الگوهای هر دو نفر", "عبور از تغییرات، فشارها یا تصمیم‌های دشوار در کنار هم"], experiencing: ["سوءتفاهم‌های مکرر یا بحث‌های تکراری", "احساس فاصله، قطع ارتباط یا شنیده نشدن", "عبور از تغییری بزرگ یا خدشه به اعتماد", "میل به عمیق‌تر کردن رابطه‌ای که هنوز ارزشمند است"], expect: ["فضایی متعادل که هر دو نفر شنیده شوند", "درمانگری بی‌طرف و محترم برای هدایت گفت‌وگو", "ابزارهای عملی ارتباطی برای استفاده در خانه", "درک مشترک از هدف‌های رابطه"], who: ["زوج‌ها در هر مرحله‌ای از رابطه", "شریک‌هایی که با تعارض، فاصله یا تغییر روبه‌رو هستند", "کسانی که می‌خواهند پیوندشان را عمیق‌تر کنند", "افرادی که برای گذار مهمی آماده می‌شوند"], faqs: [{ q: "آیا هر دو نفر باید در جلسه باشند؟", a: "کار زوج‌درمانی معمولاً با حضور هر دو نفر مؤثرتر است، هرچند گاهی جلسات فردی هم می‌تواند به روند کمک کند." }, { q: "آیا درمانگر طرف کسی را می‌گیرد؟", a: "خیر. درمانگر بی‌طرف می‌ماند و به رابطه کمک می‌کند تا هر دو نفر احساس فهمیده شدن داشته باشند." }, { q: "اگر درباره ادامه رابطه مطمئن نباشیم چه؟", a: "این تردید هم در این فضا جا دارد. مشاوره می‌تواند به روشن شدن مسیر کمک کند، هر نتیجه‌ای که داشته باشد." }] },
  "family-counselling": { help: ["بهبود درک و ارتباط در خانه", "عبور از تعارض، تغییر یا چالش‌های والدگری", "حمایت از کودکان و نوجوانان در سیستم خانواده", "بازسازی پیوند و حس امنیت در کنار هم"], experiencing: ["تنش یا تعارض مداوم در خانه", "سختی در ارتباط میان نسل‌ها", "سازگار شدن با تغییری بزرگ در خانواده", "نگرانی درباره سلامت روان کودک یا نوجوان"], expect: ["فضایی پذیرنده برای همه اعضای خانواده", "درمانگری که کمک می‌کند هر فرد شنیده شود", "راهکارهای عملی برای زندگی روزمره", "تمرکز بر توانمندی‌ها، نه سرزنش"], who: ["خانواده‌هایی که با تعارض یا تغییر روبه‌رو هستند", "والدینی که حمایت و راهنمایی می‌خواهند", "خانواده‌های ترکیبی یا در حال رشد", "هر کسی که زندگی خانوادگی سالم‌تری می‌خواهد"], faqs: [{ q: "چه کسانی باید در جلسات خانواده شرکت کنند؟", a: "بستگی به هدف‌های شما دارد. درمانگر کمک می‌کند تصمیم بگیرید چه کسانی و چه زمانی حضور داشته باشند." }, { q: "آیا کودکان هم می‌توانند شرکت کنند؟", a: "بله، وقتی مناسب باشد. جلسات برای اعضای کوچک‌تر خانواده به شکلی راحت و قابل‌فهم تنظیم می‌شود." }, { q: "اگر همه اعضا نخواهند بیایند چه؟", a: "این موضوع رایج است. تغییر معنادار می‌تواند با همان کسانی شروع شود که آماده‌اند." }] },
  "anxiety": { help: ["شناخت عواملی که اضطراب شما را فعال می‌کنند", "یادگیری ابزارهایی برای آرام کردن بدن و ذهن", "کاهش اجتناب و بازگشت به زندگی روزمره", "ساختن تاب‌آوری پایدار، نه فقط راه‌حل‌های کوتاه‌مدت"], experiencing: ["افکار تند و نگرانی مداوم", "تنش بدنی، بی‌قراری یا مشکل خواب", "اجتناب از موقعیت‌هایی که سنگین یا ترسناک‌اند", "احساس آماده‌باش بدون دانستن دلیل آن"], expect: ["رویکردی آرام و مرحله‌به‌مرحله، بدون عجله", "ابزارهای مبتنی بر شواهد مانند CBT و ذهن‌آگاهی", "راهکارهای کاربردی برای لحظه‌های روزمره", "درمانگری که کمک می‌کند احساس امنیت و فهمیده شدن داشته باشید"], who: ["افرادی که با نگرانی یا استرس مداوم زندگی می‌کنند", "کسانی که حمله پانیک یا آشفتگی شدید را تجربه می‌کنند", "هر کسی که به دلیل ترس از موقعیت‌هایی دوری می‌کند", "افرادی که روزهایی آرام‌تر و پایدارتر می‌خواهند"], faqs: [{ q: "آیا باید همه چیزهایی را که نگرانم می‌کند دوباره تجربه کنم؟", a: "خیر. با ریتم شما پیش می‌رویم و همیشه اختیار دارید چه چیزی را به اشتراک بگذارید." }, { q: "آیا دارو تجویز می‌کنید؟", a: "ما مشاوره ارائه می‌دهیم و دارو تجویز نمی‌کنیم، اما در صورت نیاز می‌توانیم کنار پزشک شما کار کنیم." }, { q: "چه زمانی احساس بهتری خواهم داشت؟", a: "بسیاری از افراد تغییرات کوچک را زودتر حس می‌کنند و تغییرات عمیق‌تر به مرور ساخته می‌شوند." }] },
  "depression": { help: ["شناخت افسردگی با آرامش و بدون قضاوت", "بازگشت تدریجی انرژی، معنا و انگیزه", "ساختن ابزارهایی برای افکار سنگین و انزوا", "بازسازی روتین‌هایی که از حال شما حمایت می‌کنند"], experiencing: ["غم پایدار یا احساس تهی بودن", "از دست دادن علاقه به چیزهایی که قبلاً مهم بودند", "خستگی، تحریک‌پذیری یا اختلال خواب", "احساس تنهایی یا گیر افتادن"], expect: ["فضایی گرم که لازم نیست در آن تظاهر کنید", "رویکردی تدریجی و هماهنگ با توان شما", "راهکارهای واقعی و متناسب با زندگی‌تان", "حمایتی پیوسته برای بازگشت به ثبات"], who: ["افرادی که افت خلق را تجربه می‌کنند", "کسانی که احساس خستگی یا قطع ارتباط دارند", "افرادی که از دوره‌ای دشوار عبور می‌کنند", "هر کسی که می‌خواهد دوباره تکیه‌گاهی پیدا کند"], faqs: [{ q: "آیا درمان می‌تواند به افسردگی کمک کند؟", a: "بله. حمایت درمانی می‌تواند به فهم آنچه می‌گذرد، کاهش انزوا و ساختن راهکارهای قابل‌اجرا کمک کند." }, { q: "آیا باید صبر کنم حالم خیلی بد شود؟", a: "خیر. هر زمان چیزی برایتان سنگین شد، می‌توانید حمایت بگیرید." }, { q: "اگر انرژی زیادی برای حرف زدن نداشته باشم چه؟", a: "اشکالی ندارد. جلسه می‌تواند آرام و متناسب با توان همان روز شما پیش برود." }] },
  "trauma": { help: ["ساختن حس امنیت پیش از ورود به خاطرات دشوار", "شناخت واکنش‌های سیستم عصبی", "کاهش محرک‌ها و احساس زندگی در حالت بقا", "حرکت به سوی زندگی باثبات‌تر و آزادتر"], experiencing: ["خاطرات مزاحم یا واکنش‌های شدید", "گوش‌به‌زنگی، اجتناب یا بی‌حسی", "سختی در اعتماد یا احساس امنیت", "این حس که گذشته هنوز در حال اتفاق افتادن است"], expect: ["رویکردی آگاه از تروما و بدون فشار", "ریتمی که همیشه حق انتخاب را برای شما نگه می‌دارد", "ابزارهای ثبات‌بخشی و زمین‌گیری", "همراهی محترمانه و عمیقاً امن"], who: ["افرادی که تجربه‌های دردناک داشته‌اند", "کسانی که با محرک‌ها یا گوش‌به‌زنگی زندگی می‌کنند", "بازماندگانی که می‌خواهند کنترل بیشتری حس کنند", "هر کسی که می‌خواهد در بدن خود احساس امنیت بیشتری داشته باشد"], faqs: [{ q: "آیا باید همه جزئیات را تعریف کنم؟", a: "خیر. کار با امنیت و ثبات شروع می‌شود. شما انتخاب می‌کنید چه چیزی را مطرح کنید." }, { q: "چرا بدنم هنوز واکنش نشان می‌دهد؟", a: "تروما می‌تواند در سیستم عصبی باقی بماند. درمان کمک می‌کند این واکنش‌ها را بفهمید و آرام‌تر کنید." }, { q: "آیا بهبود ممکن است؟", a: "بله. بهبود زمان می‌برد و با ریتم شما پیش می‌رود، اما ممکن است." }] },
  "grief-and-loss": { help: ["پذیرفتن سوگ بدون عجله دادن به آن", "جا دادن به عشق، درد و خاطره‌ها", "عبور از تغییرات هویتی و روزمره پس از فقدان", "یافتن راهی برای ادامه دادن بدون فراموش کردن"], experiencing: ["غم عمیق، خشم یا سردرگمی", "موج‌های احساسی غیرقابل‌پیش‌بینی", "احساس تهی بودن یا تنهایی", "سختی در بازگشت به جریان زندگی"], expect: ["فضایی آرام برای حرف زدن از آنچه از دست رفته", "بدون فشار برای زود خوب شدن", "حمایت برای فهم واکنش‌های سوگ", "نقطه‌هایی برای ادامه دادن با مهربانی نسبت به خود"], who: ["افرادی که فقدانی تازه یا قدیمی را تجربه کرده‌اند", "کسانی که با سوگی پیچیده همراه‌اند", "افرادی که جدایی یا تغییر بزرگی را پشت سر گذاشته‌اند", "هر کسی که نیاز دارد اندوهش را در فضایی امن بگذارد"], faqs: [{ q: "آیا طبیعی است سوگ طولانی شود؟", a: "بله. سوگ زمان‌بندی ثابت ندارد و برای هر فرد شکل متفاوتی پیدا می‌کند." }, { q: "اگر فقدان من مرگ نباشد چه؟", a: "سوگ می‌تواند پس از انواع فقدان رخ دهد؛ همه آن‌ها در این فضا پذیرفته‌اند." }, { q: "درمان درد را از بین می‌برد؟", a: "درمان فقدان را حذف نمی‌کند، اما کمک می‌کند درد را با تنهایی کمتر حمل کنید." }] },
  "anger-management": { help: ["شناخت آنچه زیر خشم پنهان است", "تشخیص نشانه‌ها پیش از بالا رفتن شدت احساس", "یادگیری پاسخ‌های امن‌تر و روشن‌تر", "ترمیم اثر خشم بر خود و رابطه‌ها"], experiencing: ["واکنش‌های سریع یا سخت برای کنترل", "تعارض‌هایی که تکرار می‌شوند", "شرم یا پشیمانی بعد از واکنش", "ترس از آسیب زدن یا دور کردن دیگران"], expect: ["فضایی بدون قضاوت برای فهم خشم", "ابزارهای کاربردی برای تنظیم هیجان", "کار روی محرک‌ها و نیازهای پنهان", "راهکارهایی برای بیان روشن‌تر و آرام‌تر"], who: ["افرادی که خشم برایشان سنگین یا کنترل‌ناپذیر شده", "کسانی که در رابطه‌ها تعارض تکراری دارند", "افرادی که می‌خواهند واکنش متفاوتی داشته باشند", "هر کسی که آرامش و اختیار بیشتری می‌خواهد"], faqs: [{ q: "آیا خشم همیشه مشکل است؟", a: "خیر. خشم یک احساس انسانی است؛ مهم این است که پیام آن را بفهمیم و امن‌تر بیانش کنیم." }, { q: "آیا قضاوت می‌شوم؟", a: "خیر. با احترام، مسئولیت‌پذیری و مهربانی کار می‌کنیم." }, { q: "می‌شود واکنش‌ها را تغییر داد؟", a: "بله. با تمرین و حمایت می‌توان پاسخ‌های تازه ساخت." }] },
  "adhd": { help: ["شناخت بهتر توجه، تکانشگری و سازمان‌دهی", "ساختن راهکارهای واقعی برای زندگی روزمره", "کاهش شرم و سرزنش خود", "حمایت از رابطه‌ها، کار یا تحصیل"], experiencing: ["سختی در شروع یا تمام کردن کارها", "فراموشی، بی‌نظمی یا شلوغی ذهن", "تکانشگری یا احساسات شدید", "این حس که هرگز کافی نیستید"], expect: ["رویکردی عملی، مهربان و ساختارمند", "ابزارهایی متناسب با ذهن و زندگی شما", "حمایت برای روتین‌ها و اولویت‌ها", "فضایی برای تقویت عزت‌نفس"], who: ["بزرگسالانی با ADHD یا ویژگی‌های بی‌توجهی", "افرادی که همیشه احساس آشفتگی و فشار دارند", "دانشجویان یا شاغلانی که راهکار می‌خواهند", "هر کسی که می‌خواهد شیوه عملکرد ذهنش را بهتر بفهمد"], faqs: [{ q: "آیا ارزیابی تشخیصی انجام می‌دهید؟", a: "ما مشاوره و حمایت درمانی ارائه می‌دهیم. اگر ارزیابی رسمی لازم باشد، می‌توانیم شما را به منابع مناسب راهنمایی کنیم." }, { q: "درمان می‌تواند به ADHD کمک کند؟", a: "بله. درمان می‌تواند به سازمان‌دهی، تنظیم هیجان و اعتمادبه‌نفس کمک کند." }, { q: "آیا باید تشخیص رسمی داشته باشم؟", a: "خیر. با یا بدون تشخیص رسمی می‌توانید برای دشواری‌هایتان حمایت بگیرید." }] },
  "prenatal-and-pregnancy": { help: ["حمایت از احساسات در بارداری و دوره پیرامون زایمان", "پذیرفتن ترس‌ها، تغییرات و انتظارها", "تقویت حمایت اطراف شما", "ساختن فضایی برای هویت تازه والدگری"], experiencing: ["اضطراب، غم یا تحریک‌پذیری در بارداری", "نگرانی درباره زایمان یا والد شدن", "تغییر در رابطه زوج یا خانواده", "نیاز به فضایی برای شنیده شدن"], expect: ["حمایتی آرام و آگاه از دوره پیرامون زایمان", "گفت‌وگو درباره احساسات، بدن و رابطه‌ها", "ابزارهایی برای اضطراب و فشار", "همراهی محترمانه با داستان شخصی شما"], who: ["افراد باردار یا در مسیر پیرامون زایمان", "همسران و خانواده‌هایی در دوره گذار", "افرادی که فقدان یا نگرانی مرتبط با بارداری دارند", "هر کسی که در این دوره حمایت می‌خواهد"], faqs: [{ q: "اگر ظاهراً همه چیز خوب است باز هم می‌توانم مراجعه کنم؟", a: "بله. این دوره می‌تواند احساسات زیادی را بیدار کند و داشتن فضای حمایت ارزشمند است." }, { q: "آیا همسر می‌تواند شرکت کند؟", a: "بله، اگر با نیازها و هدف‌های شما هماهنگ باشد." }, { q: "درباره سوگ بارداری هم کار می‌کنید؟", a: "بله. تجربه‌های فقدان، ابهام و درد را با آرامش و احترام می‌پذیریم." }] },
  "lgbtqia2s": { help: ["فراهم کردن فضایی تأییدگر، محترمانه و امن", "کاوش هویت، رابطه‌ها و حس تعلق", "حمایت از سلامت روان در برابر فشارهای اقلیت بودن", "تقویت مهربانی با خود و اعتمادبه‌نفس"], experiencing: ["نیاز به پذیرفته شدن بدون توضیح دادن هویت", "استرس ناشی از تبعیض یا طرد", "پرسش‌هایی درباره هویت یا رابطه‌ها", "نیاز به حمایتی حساس و تأییدگر"], expect: ["پذیرشی فراگیر و بدون قضاوت", "زبانی محترمانه نسبت به هویت شما", "حمایتی متناسب با واقعیت زندگی‌تان", "فضایی که بتوانید کاملاً خودتان باشید"], who: ["افراد LGBTQ+", "کسانی که هویت یا بیان خود را کاوش می‌کنند", "نزدیکانی که می‌خواهند بهتر حمایت کنند", "هر کسی که فضای درمانی تأییدگر می‌خواهد"], faqs: [{ q: "آیا باید هویتم را برای درمانگر توضیح بدهم؟", a: "لازم نیست خودتان را توجیه کنید. هویت شما با احترام پذیرفته می‌شود." }, { q: "می‌توانم درباره موضوعات غیرمرتبط با هویتم هم حرف بزنم؟", a: "کاملاً. شما یک انسان کامل هستید و همه بخش‌های زندگی‌تان در جلسه جا دارد." }, { q: "آیا این فضا تأییدگر است؟", a: "بله. رویکرد ما محترمانه، فراگیر و تأییدگر است." }] },
  "cvap-clients": { help: ["حمایت از افراد واجد شرایط CVAP", "ساختن فضایی امن پس از رویداد خشونت‌آمیز یا آسیب‌زا", "کمک به ثبات احساسات و زندگی روزمره", "همراهی محترمانه در مسیر بهبود"], experiencing: ["واکنش‌هایی پس از جرم یا رویداد آسیب‌زا", "اضطراب، ترس یا گوش‌به‌زنگی", "سختی در بازسازی اعتماد", "نیاز به حمایتی حرفه‌ای و محرمانه"], expect: ["پذیرشی آگاه از تروما", "کمک برای روشن شدن قدم‌های بعدی", "ریتمی هماهنگ با احساس امنیت شما", "حمایتی متمرکز بر ثبات و بازسازی"], who: ["مراجعان واجد شرایط CVAP", "بازماندگان جرم یا خشونت", "افرادی که به‌طور غیرمستقیم از رویدادی آسیب‌زا تأثیر گرفته‌اند", "هر کسی که حمایتی مرتبط با CVAP می‌خواهد"], faqs: [{ q: "CVAP چیست؟", a: "CVAP برنامه‌ای در بریتیش کلمبیاست که می‌تواند دسترسی قربانیان واجد شرایط جرم به خدمات حمایتی را آسان‌تر کند." }, { q: "آیا در فهم روند کمک می‌کنید؟", a: "می‌توانیم به روشن شدن قدم‌های مربوط به حمایت درمانی و نیازهای شما کمک کنیم." }, { q: "آیا حمایت محرمانه است؟", a: "بله. محرمانگی و امنیت شما در مرکز فرایند قرار دارد." }] },
  "icbc-clients": { help: ["حمایت از سلامت روان پس از تصادف رانندگی", "کمک به مدیریت اضطراب، استرس یا واکنش‌های تروما", "بازسازی اعتماد در رفت‌وآمد و زندگی روزمره", "همراهی ساختارمند در بهبود عاطفی"], experiencing: ["ترس از رانندگی یا سرنشین بودن", "خاطرات مزاحم یا تنش پس از تصادف", "تحریک‌پذیری، اضطراب یا اختلال خواب", "سختی در بازگشت به فعالیت‌های معمول"], expect: ["رویکردی آرام و متمرکز بر بهبود", "ابزارهایی برای آرام کردن سیستم عصبی", "حمایت برای بازگشت تدریجی اعتماد", "همراهی متناسب با هدف‌های شما"], who: ["مراجعان ICBC پس از تصادف", "افرادی که پس از تصادف دچار استرس یا اضطراب شده‌اند", "کسانی که از بازگشت به جاده می‌ترسند", "هر کسی که می‌خواهد بهبود عاطفی خود را حمایت کند"], faqs: [{ q: "آیا با مراجعان ICBC کار می‌کنید؟", a: "بله. بسته به شرایط و نیاز شما، می‌توانیم حمایت درمانی برای مراجعان ICBC ارائه دهیم." }, { q: "درمان پس از تصادف کمک می‌کند؟", a: "بله. می‌تواند اضطراب را کاهش دهد، واکنش‌های تروما را روشن کند و به بازگشت اعتماد کمک کند." }, { q: "آیا باید علائم شدید داشته باشم؟", a: "خیر. حتی واکنش‌های ظریف‌تر هم می‌توانند نیازمند حمایت باشند." }] },
  ifhp: { help: ["دسترسی به مشاوره تحت پوشش IFHP", "پردازش تروما، فقدان و استرس ناشی از مهاجرت و جابه‌جایی", "بازسازی حس امنیت و تعلق در کشوری تازه", "دریافت مراقبتی حساس به فرهنگ و آگاه از تروما"], experiencing: ["استرس اسکان مجدد و سازگاری با کشوری تازه", "تروما، سوگ یا فقدان‌هایی که در مسیر مهاجرت با خود دارید", "اضطراب، افت خلق یا مشکل خواب", "بی‌اطمینانی درباره چگونگی دسترسی به حمایت سلامت روان"], expect: ["مشاوره‌ای همدلانه و آگاه از تروما", "مراقبتی که به زبان، فرهنگ و داستان شما احترام می‌گذارد", "راهنمایی برای استفاده از پوشش IFHP", "فضایی امن برای بهبود با ریتم مناسب شما"], who: ["پناهندگان اسکان‌یافته و افراد تحت حمایت", "متقاضیان پناهندگی در انتظار تصمیم", "تازه‌واردانی که واجد شرایط پوشش IFHP هستند", "هر کسی که با اثر عاطفی مهاجرت و جابه‌جایی روبه‌روست"], faqs: [{ q: "IFHP چیست؟", a: "برنامه موقت فدرال سلامت (IFHP) پوششی محدود و موقت برای خدمات سلامت — از جمله مشاوره روان — به پناهندگان، افراد تحت حمایت و برخی گروه‌های دیگر واجد شرایط ارائه می‌دهد که هنوز تحت پوشش بیمه سلامت استانی نیستند." }, { q: "آیا واجد شرایط مشاوره IFHP هستم؟", a: "واجد شرایط بودن توسط دولت کانادا تعیین می‌شود. اگر پوشش معتبر IFHP دارید که شامل خدمات سلامت روان می‌شود، می‌توانیم به شما کمک کنیم شروع کنید." }, { q: "آیا رویکرد درمانی شما متمرکز بر تروماست؟", a: "بله. مشاوره ما بر پایه رویکردی آگاه از تروما و حساس به فرهنگ ارائه می‌شود که تجربه شما را با احترام و کرامت می‌بیند." }] },

};

type OnlineCopy = {
  heroTitle: string;
  heroIntro: string;
  introTitle: string;
  introBody: string;
  whoTitle: string;
  whoItems: { title: string; body: string }[];
  howTitle: string;
  howItems: { title: string; body: string }[];
  progressTitle: string;
  progressBody: string;
  extraListTitle?: string;
  extraListIntro?: string;
  extraListItems?: string[];
  extraBodyTitle?: string;
  extraBody?: string;
  extraBodyPlacement?: "beforeHow" | "afterHow";
  ctaTitle: string;
  ctaButton: string;
};

const onlineCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Online Counselling in Coquitlam, BC",
    heroIntro: "Counselling from a space where you feel safe, comfortable, and ready to begin.",
    introTitle: "Online Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our online counselling services offer a flexible and confidential way to access support from the comfort of your own space. Our Registered Clinical Counsellors provide virtual counselling for clients across British Columbia, as well as in-person counselling in Coquitlam, BC, supporting individuals and couples who are looking for compassionate, evidence-informed care without the stress of commuting. Through secure online counselling sessions, we help clients explore emotions, understand patterns, strengthen relationships, and move toward meaningful change in a way that fits more easily into everyday life.",
    whoTitle: "Who is Online Counselling for?",
    whoItems: [
      { title: "Busy professionals", body: "Online counselling can make it easier to attend sessions between work, meetings, family responsibilities, and a full schedule." },
      { title: "Parents and caregivers", body: "Virtual counselling may feel more manageable when leaving home, arranging childcare, or travelling to appointments is difficult." },
      { title: "People living in rural or remote communities", body: "Online counselling can help you access professional support even when local counselling options are limited." },
      { title: "Clients with mobility or health-related barriers", body: "Counselling from home can reduce the physical and emotional stress of travel, parking, or attending an office in person." },
      { title: "Those who feel more comfortable at home", body: "Some people feel more at ease opening up when they are in a familiar, private, and calming environment." },
      { title: "People who need more flexibility", body: "Online counselling can support consistency when life feels busy, unpredictable, or difficult to plan around." },
    ],
    howTitle: "How Online Counselling Works",
    howItems: [
      { title: "Everything is organized in one secure place", body: "We organize the online counselling process for you, so your appointments, session details, and important information are easy to access through one confidential platform." },
      { title: "You receive your private session link", body: "Before your virtual counselling session, you receive a secure link. At the time of your appointment, you simply click the link and join from a quiet, comfortable space of your choice." },
      { title: "Simple invoicing and insurance support", body: "After your counselling session, we provide clear documentation for your records and insurance needs, making it easier to use your extended health benefits when counselling coverage is included in your plan." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in online counselling can feel just as meaningful as in-person counselling. You may begin to understand your emotions more clearly, feel more grounded in your daily life, communicate with more confidence, or respond to stress with greater awareness. Over time, online counselling can become a steady and supportive part of your routine, helping you feel less alone and more connected to yourself, your relationships, and your healing.",
    ctaTitle: "Ready to begin counselling from a space that feels comfortable for you?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling en ligne à Coquitlam, BC",
    heroIntro: "Du counselling à partir d’un espace où vous vous sentez en sécurité, à l’aise et prêt à commencer.",
    introTitle: "Le counselling en ligne chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling en ligne offrent une façon flexible et confidentielle d’accéder à du soutien depuis votre propre espace. Nos conseillers cliniques agréés offrent du counselling virtuel aux clients partout en Colombie-Britannique, ainsi que du counselling en personne à Coquitlam, BC, pour les personnes et les couples qui recherchent un accompagnement compatissant, éclairé par les données probantes, sans le stress des déplacements. Grâce à des séances en ligne sécurisées, nous aidons les clients à explorer leurs émotions, comprendre leurs schémas, renforcer leurs relations et avancer vers un changement significatif qui s’intègre plus facilement au quotidien.",
    whoTitle: "À qui s’adresse le counselling en ligne?",
    whoItems: [
      { title: "Professionnels occupés", body: "Le counselling en ligne peut faciliter la participation aux séances entre le travail, les réunions, les responsabilités familiales et un horaire chargé." },
      { title: "Parents et proches aidants", body: "Le counselling virtuel peut être plus réaliste lorsque quitter la maison, organiser la garde d’enfants ou se déplacer est difficile." },
      { title: "Personnes vivant en région rurale ou éloignée", body: "Le counselling en ligne peut vous donner accès à un soutien professionnel même lorsque les options locales sont limitées." },
      { title: "Clients ayant des obstacles liés à la mobilité ou à la santé", body: "Consulter de la maison peut réduire le stress physique et émotionnel lié aux déplacements, au stationnement ou aux rendez-vous en personne." },
      { title: "Personnes plus à l’aise à la maison", body: "Certaines personnes s’ouvrent plus facilement dans un environnement familier, privé et apaisant." },
      { title: "Personnes qui ont besoin de flexibilité", body: "Le counselling en ligne peut soutenir la régularité lorsque la vie est chargée, imprévisible ou difficile à planifier." },
    ],
    howTitle: "Comment fonctionne le counselling en ligne",
    howItems: [
      { title: "Tout est organisé dans un seul espace sécurisé", body: "Nous organisons le processus pour que vos rendez-vous, les détails des séances et les renseignements importants soient faciles d’accès sur une plateforme confidentielle." },
      { title: "Vous recevez votre lien privé de séance", body: "Avant votre séance virtuelle, vous recevez un lien sécurisé. Au moment du rendez-vous, il suffit de cliquer et de vous joindre depuis un endroit calme et confortable." },
      { title: "Facturation simple et soutien pour les assurances", body: "Après la séance, nous fournissons une documentation claire pour vos dossiers et vos assurances, afin de faciliter l’utilisation de vos prestations lorsque votre régime couvre le counselling." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling en ligne peut être tout aussi significatif qu’en personne. Vous pourriez mieux comprendre vos émotions, vous sentir plus ancré au quotidien, communiquer avec plus d’assurance ou répondre au stress avec davantage de conscience. Avec le temps, le counselling en ligne peut devenir un repère stable et soutenant dans votre routine, vous aidant à vous sentir moins seul et plus connecté à vous-même, à vos relations et à votre guérison.",
    ctaTitle: "Prêt à commencer le counselling depuis un espace où vous vous sentez bien?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره آنلاین در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "تراپی در فضایی که در آن احساس امنیت و راحتی می‌کنید و آماده یک شروع دوباره هستید.",
    introTitle: "مشاوره آنلاین در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، مشاوره آنلاین راهی منعطف و محرمانه برای دسترسی به مراقبت حرفه‌ای از فضای امن خودتان فراهم می‌کند. مشاوران رجیسترد ما برای مراجعان در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند و همچنین در کوکیتلام، بریتیش کلمبیا، امکان مشاوره حضوری وجود دارد. ما به افراد و زوج‌هایی کمک می‌کنیم که به دنبال مراقبتی همدلانه، علمی و کاربردی هستند، بدون فشار رفت‌وآمد. در جلسات امن آنلاین، کمک می‌کنیم احساسات خود را بهتر بشناسید، الگوها را شناسایی کنید، رابطه‌ها را تقویت کنید و به سمت تغییری معنادار حرکت کنید.",
    whoTitle: "مشاوره آنلاین برای چه کسانی مناسب است؟",
    whoItems: [
      { title: "افراد پرمشغله", body: "مشاوره آنلاین می‌تواند حضور در جلسه را میان کار، جلسات، مسئولیت‌های خانوادگی و برنامه‌های فشرده آسان‌تر کند." },
      { title: "والدین و مراقبان", body: "وقتی بیرون رفتن از خانه یا هماهنگ کردن برای مراقبت از کودک دشوار است، مشاوره آنلاین می‌تواند قابل‌مدیریت‌تر باشد." },
      { title: "افراد ساکن مناطق دور یا بی‌امکانات", body: "مشاوره آنلاین کمک می‌کند حتی زمانی که گزینه‌های محلی محدودند، دسترسی به مراقبت حرفه‌ای داشته باشید." },
      { title: "مراجعانی با محدودیت حرکتی", body: "مشاوره از خانه می‌تواند فشار جسمی و روانی رفت‌وآمد، پارکینگ یا حضور در دفتر را کمتر کند." },
      { title: "کسانی که در خانه راحت‌تر هستند", body: "بعضی افراد وقتی در محیطی آشنا، خصوصی و آرام هستند، راحت‌تر احساسات خود را بیان می‌کنند." },
      { title: "افرادی که به انعطاف بیشتری نیاز دارند", body: "وقتی زندگی شلوغ، غیرقابل‌پیش‌بینی یا سخت برای برنامه‌ریزی است، مشاوره آنلاین می‌تواند تداوم جلسات را ممکن‌ کند." },
    ],
    howTitle: "مشاوره آنلاین چگونه انجام می‌شود؟",
    howItems: [
      { title: "همه چیز در یک فضای امن سازمان‌دهی می‌شود", body: "ما روند مشاوره آنلاین را برای شما مرتب می‌کنیم تا نوبت‌ها، رسیدها و اطلاعات مهم از طریق یک پلتفرم محرمانه به‌راحتی در دسترس باشند." },
      { title: "لینک خصوصی جلسه را دریافت می‌کنید", body: "پیش از جلسه، یک لینک امن دریافت می‌کنید. در زمان جلسه، کافی است روی لینک کلیک کنید و وارد جلسه شوید." },
      { title: "صورتحساب ساده و پشتیبانی برای بیمه", body: "پس از جلسه، رسید پرداختی شما ارسال می‌شود تا در صورت پوشش مشاوره در بیمه تکمیلی، امکان استفاده از بیمه خود را داشته‌باشد." },
    ],
    progressTitle: "پیشرفت در فرایند مشاوره آنلاین چگونه است؟",
    progressBody: "پیشرفت در مشاوره آنلاین درست به اندازه مشاوره حضوری موثر است. می‌توانید احساسات خود را روشن‌تر درک کنید، با آگاهی بیشتری با دیگران ارتباط برقرار کنید، به استرس واکنش سالم‌تری نشان دهید و در زندگی روزمره آرام‌تر باشید. با گذشت زمان، مشاوره آنلاین می‌تواند به بخشی از روتین شما تبدیل شود و کمک کند کمتر احساس تنهایی کنید و ارتباط عمیق‌تری با خودتان، دیگران و مسیر بهبودی‌تان داشته باشید.",
    ctaTitle: "آماده‌اید مشاوره آنلاین را امتحان کنید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const individualCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Individual Counselling in Coquitlam, BC",
    heroIntro: "A warm space to understand yourself, feel supported, and begin meaningful change.",
    introTitle: "Individual Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our individual counselling services offer a supportive and confidential space for adults who are feeling overwhelmed, anxious, emotionally stuck, or disconnected from themselves. Our Registered Clinical Counsellors provide in-person counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients explore their emotions, understand repeating patterns, and develop healthier ways of coping, relating, and moving forward. Whether you are facing a specific challenge or simply feel that something in your life needs attention, we are here to support you with warmth, care, and evidence-informed therapy.",
    whoTitle: "When Individual Counselling May Be Helpful",
    whoItems: [
      { title: "Anxiety and constant overthinking", body: "Your mind may feel busy with worries, doubts, or pressure to make the right decision." },
      { title: "Emotional overwhelm", body: "You may feel that your emotions are too intense, too confusing, or difficult to manage on your own." },
      { title: "Low mood or loss of motivation", body: "You may feel tired, disconnected, unmotivated, or no longer like yourself." },
      { title: "Repeating relationship patterns", body: "You may notice the same fears, conflicts, or emotional reactions showing up in different relationships." },
      { title: "Difficulty with boundaries", body: "You may feel guilty saying no, responsible for others’ emotions, or unsure how to express your needs." },
      { title: "Life changes and uncertainty", body: "Changes in work, relationships, family, immigration, or identity may leave you feeling lost or unsure of your next step." },
    ],
    howTitle: "Our Path Toward Healing",
    howItems: [
      { title: "Understanding what you are carrying", body: "We begin by listening carefully to your story and exploring what has been feeling heavy, confusing, or painful in your life." },
      { title: "Making sense of emotional patterns", body: "Together, we look at how your thoughts, emotions, relationships, and past experiences may be connected to what you are experiencing now." },
      { title: "Creating healthier ways forward", body: "We support you in building emotional awareness, self-compassion, coping skills, and new ways of responding to yourself and others." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in individual counselling often begins with small but meaningful shifts. You may start to understand your emotions instead of feeling controlled by them. You may notice yourself pausing before reacting, speaking more honestly, setting clearer boundaries, or treating yourself with more kindness. Over time, therapy can help you feel more grounded, more connected to yourself, and more confident in how you move through your life.",
    ctaTitle: "Are you ready to feel more connected to yourself again?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling individuel à Coquitlam, BC",
    heroIntro: "Un espace chaleureux pour mieux vous comprendre, vous sentir soutenu et amorcer un changement significatif.",
    introTitle: "Le counselling individuel chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling individuel offrent aux adultes un espace confidentiel et soutenant lorsqu’ils se sentent dépassés, anxieux, bloqués émotionnellement ou déconnectés d’eux-mêmes. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi que du counselling en ligne partout en Colombie-Britannique, afin d’aider les clients à explorer leurs émotions, comprendre les schémas qui se répètent et développer des façons plus saines de composer, d’être en relation et d’avancer. Que vous traversiez une difficulté précise ou que vous sentiez simplement qu’une partie de votre vie demande de l’attention, nous vous accompagnons avec chaleur, soin et une approche éclairée par les données probantes.",
    whoTitle: "Quand le counselling individuel peut aider",
    whoItems: [
      { title: "Anxiété et rumination constante", body: "Votre esprit peut être occupé par des inquiétudes, des doutes ou la pression de prendre la bonne décision." },
      { title: "Débordement émotionnel", body: "Vos émotions peuvent sembler trop intenses, trop confuses ou difficiles à gérer seul." },
      { title: "Humeur basse ou perte de motivation", body: "Vous pouvez vous sentir fatigué, déconnecté, démotivé ou ne plus vous reconnaître." },
      { title: "Schémas relationnels répétitifs", body: "Vous pouvez remarquer les mêmes peurs, conflits ou réactions émotionnelles dans différentes relations." },
      { title: "Difficulté à poser des limites", body: "Vous pouvez vous sentir coupable de dire non, responsable des émotions des autres ou incertain de vos besoins." },
      { title: "Changements de vie et incertitude", body: "Des changements liés au travail, aux relations, à la famille, à l’immigration ou à l’identité peuvent vous laisser perdu ou incertain." },
    ],
    howTitle: "Notre chemin vers la guérison",
    howItems: [
      { title: "Comprendre ce que vous portez", body: "Nous commençons par écouter attentivement votre histoire et explorer ce qui vous semble lourd, confus ou douloureux." },
      { title: "Donner du sens aux schémas émotionnels", body: "Ensemble, nous regardons comment vos pensées, émotions, relations et expériences passées peuvent être reliées à ce que vous vivez maintenant." },
      { title: "Créer des façons d’avancer plus saines", body: "Nous vous aidons à développer la conscience émotionnelle, l’autocompassion, des outils d’adaptation et de nouvelles façons de répondre à vous-même et aux autres." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "En counselling individuel, le progrès commence souvent par de petits changements qui comptent vraiment. Vous pourriez comprendre vos émotions au lieu de vous sentir contrôlé par elles, prendre une pause avant de réagir, parler avec plus d’honnêteté, poser des limites plus claires ou vous traiter avec davantage de douceur. Avec le temps, la thérapie peut vous aider à vous sentir plus ancré, plus connecté à vous-même et plus confiant dans votre façon d’avancer.",
    ctaTitle: "Êtes-vous prêt à vous sentir à nouveau plus connecté à vous-même?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره فردی در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "فضایی گرم برای شناخت بهتر خود و آغاز تغییری معنادار.",
    introTitle: "مشاوره فردی در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، ما فضایی حمایتگر و محرمانه برای افرادی فراهم کرده‌ایم که احساس فشار، اضطراب، بحران عاطفی یا فاصله گرفتن از خودشان را تجربه می‌کنند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند و به مراجعان کمک می‌کنند احساساتشان را بهتر بشناسند، الگوهای تکرارشونده را تشخیص دهند و راه‌های سالم‌تری برای ارتباط و حرکت رو به جلو بسازند. چه با چالشی مشخص روبه‌رو باشید و چه فقط حس کنید بخشی از زندگی‌تان نیاز به رسیدگی دارد، ما در فضایی گرم و صمیمی، با درمان علمی و کاربردی کنار شما هستیم.",
    whoTitle: "چه زمانی مشاوره فردی می‌تواند مفید باشد؟",
    whoItems: [
      { title: "اضطراب و افکار تکراری", body: "زمانی‌که ذهنتان درگیر نگرانی، تردید یا فشار برای گرفتن تصمیم درست است." },
      { title: "فشار و آشفتگی عاطفی", body: "زمانی‌که احساس می‌کنید هیجان‌هایتان خیلی شدید و گیج‌کننده هستند و قادر به مدیریتشان نیستید." },
      { title: "بی‌حوصلگی یا از دست دادن انگیزه", body: "زمانی‌که خسته و بی‌انگیزه هستید یا دیگر شبیه خودتان نیستید." },
      { title: "الگوهای تکراری در روابط", body: "زمانی‌که ترس‌ها، تعارض‌ها یا واکنش‌های عاطفی مشابهی را در رابطه‌های مختلف تجربه می‌کنید." },
      { title: "سختی در مرزگذاری", body: "زمانی‌که نه گفتن شما را دچار احساس گناه می‌کند یا در بیان نیازهایتان تردید دارید." },
      { title: "تغییرات زندگی و بلاتکلیفی", body: "زمانی‌که تغییر در کار، رابطه، خانواده، مهاجرت یا هویت، شما را سردرگم یا نامطمئن کرده." },
    ],
    howTitle: "مسیر ما برای بهبود",
    howItems: [
      { title: "شناخت آنچه درگیرش هستید", body: "ما با گوش دادن دقیق به داستان شما شروع می‌کنیم و آنچه سنگین، گیج‌کننده یا دردناک بوده را با هم بررسی می‌کنیم." },
      { title: "شناخت الگوهای عاطفی", body: "با هم کشف می‌کنیم افکار، احساسات، روابط و تجربه‌های گذشته چطور ممکن است با وضعیت کنونی شما مرتبط باشند." },
      { title: "ساختن راه‌های سالم‌تر برای ادامه مسیر", body: "به شما کمک می‌کنیم آگاهی عاطفی، مهربانی با خود، مهارت‌های مدیریت عاطفی و شیوه‌های تازه پاسخ دادن به خود و دیگران را تجربه کنید." },
    ],
    progressTitle: "پیشرفت در فرایند مشاوره فردی چگونه است؟",
    progressBody: "پیشرفت در مشاوره فردی اغلب با تغییرات کوچک اما معنادار شروع می‌شود. کم‌کم احساساتتان را تجربه می‌کنید، به جای اینکه احساس کنید تحت کنترل آنها هستید. قبل از واکنش نشان دادن مکث می‌کنید، شفاف‌تر ارتباط برقرار می‌کنید، می‌توانید مرزهای روشن‌تری بگذارید و با خودتان مهربان‌تر باشید. با گذشت زمان، درمان می‌تواند کمک کند مطمئن‌تر در مسیر زندگی حرکت کنید.",
    ctaTitle: "آماده‌اید دوباره ارتباطی عمیق‌ با خودتان تجربه کنید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const couplesCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Couples Counselling in Coquitlam, BC",
    heroIntro: "A supportive space to feel heard, rebuild connection, and find your way back to each other.",
    introTitle: "Couples Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our couples counselling services support partners who feel stuck in conflict, emotionally distant, disconnected, or unsure how to communicate without hurting each other. Our Registered Clinical Counsellors provide in-person couples counselling in Coquitlam, BC, and online couples counselling across British Columbia, helping couples slow down difficult conversations, understand repeating patterns, rebuild trust, and create a more secure emotional connection. Whether you are facing ongoing arguments, intimacy concerns, life transitions, or a painful rupture in the relationship, our team offers a compassionate and evidence-informed space where both partners can feel respected and supported.",
    whoTitle: "When Couples Counselling May Be Helpful",
    whoItems: [
      { title: "Infidelity and betrayal", body: "A betrayal, secrecy, disappointment, or repeated hurt may have made it difficult to feel safe with each other." },
      { title: "Repeating arguments", body: "You may find yourselves having the same conflict again and again without feeling truly understood." },
      { title: "Emotional distance", body: "You may live together or love each other, but still feel lonely, unseen, or disconnected." },
      { title: "Communication breakdowns", body: "Conversations may quickly turn into defensiveness, silence, criticism, or emotional shutdown." },
      { title: "Life transitions and stress", body: "Changes around parenting, immigration, work, family pressure, finances, or health may be affecting the relationship." },
      { title: "Intimacy struggles", body: "You may feel less emotionally or physically close and not know how to talk about it without shame, blame, or fear." },
    ],
    extraListTitle: "What Kinds of Couples Can Benefit from Couples Counselling?",
    extraListIntro: "At ChangeMoment Mental Health Center, we respect and support diverse relationships, identities, cultures, and ways of building connection.",
    extraListItems: ["Married couples", "Dating couples", "Common-law partners", "New parents", "Couples navigating separation or uncertainty", "Cross-cultural couples", "Interfaith couples", "LGBTQ+ couples", "Monogamous couples", "Consensually non-monogamous couples", "Couples rebuilding after betrayal", "Couples experiencing intimacy or sexual concerns", "Couples adjusting to major life transitions"],
    howTitle: "How We Work With Couples",
    howItems: [
      { title: "De-escalating the conflict", body: "We begin by helping both partners slow down the intensity of conflict, so conversations can feel safer and less reactive." },
      { title: "Recognizing the negative cycle", body: "Together, we explore the repeating pattern that takes over during arguments, distance, or emotional shutdown, so the problem becomes the cycle, not either partner." },
      { title: "Rebuilding emotional connection", body: "We support couples in expressing deeper feelings, needs, and longings in a safer way, helping partners move toward repair, trust, and closeness." },
    ],
    extraBodyTitle: "How Can Couples Counselling Help With Intimacy and Sex Issues?",
    extraBody: "Intimacy and sexual concerns are often connected to emotional safety, trust, stress, past hurt, body image, communication, resentment, or feeling unseen in the relationship. In couples counselling, we create a respectful and non-judgmental space where partners can talk about intimacy and sex with more honesty and less shame. Our counsellors help couples understand what may be creating distance, how emotional disconnection may affect physical closeness, and how both partners can communicate their needs, boundaries, fears, and desires in a safer way. The goal is not to pressure either partner, but to support deeper understanding, emotional closeness, consent, and a more compassionate connection.",
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in couples counselling can begin when both partners feel less alone in the relationship. You may start to recognize the pattern instead of blaming each other. Conversations may become softer, more honest, and less reactive. Over time, couples may feel more emotionally safe, more connected, and more able to repair after conflict. Progress does not mean never struggling; it means learning how to turn toward each other with more understanding, care, and respect.",
    ctaTitle: "Are you ready to feel closer, safer, and more connected in your relationship?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling de couple à Coquitlam, BC",
    heroIntro: "Un espace soutenant pour vous sentir entendus, reconstruire le lien et retrouver votre chemin l’un vers l’autre.",
    introTitle: "Le counselling de couple chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling de couple soutiennent les partenaires qui se sentent coincés dans le conflit, éloignés émotionnellement, déconnectés ou incertains de savoir communiquer sans se blesser. Nos conseillers cliniques agréés offrent du counselling de couple en personne à Coquitlam, BC, ainsi que du counselling de couple en ligne partout en Colombie-Britannique, afin d’aider les couples à ralentir les conversations difficiles, comprendre les schémas répétitifs, rebâtir la confiance et créer une connexion émotionnelle plus sécurisante. Que vous traversiez des disputes récurrentes, des préoccupations liées à l’intimité, des transitions de vie ou une rupture douloureuse dans la relation, notre équipe offre un espace compatissant et éclairé par les données probantes où les deux partenaires peuvent se sentir respectés et soutenus.",
    whoTitle: "Quand le counselling de couple peut aider",
    whoItems: [
      { title: "Infidélité et trahison", body: "Une trahison, un secret, une déception ou des blessures répétées peuvent avoir rendu la sécurité émotionnelle difficile." },
      { title: "Disputes répétitives", body: "Vous pouvez vous retrouver dans le même conflit encore et encore, sans vous sentir vraiment compris." },
      { title: "Distance émotionnelle", body: "Vous pouvez vivre ensemble ou vous aimer, tout en vous sentant seul, invisible ou déconnecté." },
      { title: "Ruptures de communication", body: "Les conversations peuvent rapidement devenir défensives, silencieuses, critiques ou fermées émotionnellement." },
      { title: "Transitions de vie et stress", body: "La parentalité, l’immigration, le travail, les pressions familiales, les finances ou la santé peuvent peser sur la relation." },
      { title: "Difficultés d’intimité", body: "Vous pouvez vous sentir moins proches émotionnellement ou physiquement, sans savoir comment en parler sans honte, blâme ou peur." },
    ],
    extraListTitle: "Quels couples peuvent bénéficier du counselling de couple?",
    extraListIntro: "Chez ChangeMoment Mental Health Center, nous respectons et soutenons la diversité des relations, des identités, des cultures et des façons de créer du lien.",
    extraListItems: ["Couples mariés", "Couples en fréquentation", "Partenaires conjoints de fait", "Nouveaux parents", "Couples en séparation ou dans l’incertitude", "Couples interculturels", "Couples interconfessionnels", "Couples LGBTQ+", "Couples monogames", "Couples en non-monogamie consensuelle", "Couples qui reconstruisent après une trahison", "Couples vivant des préoccupations liées à l’intimité ou à la sexualité", "Couples qui s’adaptent à de grandes transitions de vie"],
    howTitle: "Comment nous travaillons avec les couples",
    howItems: [
      { title: "Désamorcer le conflit", body: "Nous aidons d’abord les deux partenaires à ralentir l’intensité du conflit, pour que les conversations deviennent plus sécurisantes et moins réactives." },
      { title: "Reconnaître le cycle négatif", body: "Ensemble, nous explorons le schéma répétitif qui prend le dessus lors des disputes, de la distance ou de la fermeture émotionnelle, afin que le problème devienne le cycle, et non l’un des partenaires." },
      { title: "Reconstruire la connexion émotionnelle", body: "Nous soutenons les couples dans l’expression plus sécuritaire de leurs émotions profondes, besoins et attentes, afin de favoriser la réparation, la confiance et la proximité." },
    ],
    extraBodyTitle: "Comment le counselling de couple peut aider avec l’intimité et la sexualité?",
    extraBody: "Les préoccupations liées à l’intimité et à la sexualité sont souvent reliées à la sécurité émotionnelle, à la confiance, au stress, aux blessures passées, à l’image corporelle, à la communication, au ressentiment ou au sentiment de ne pas être vu dans la relation. En counselling de couple, nous créons un espace respectueux et sans jugement où les partenaires peuvent parler d’intimité et de sexualité avec plus d’honnêteté et moins de honte. Nos conseillers aident les couples à comprendre ce qui peut créer de la distance, comment la déconnexion émotionnelle peut toucher la proximité physique et comment chaque partenaire peut communiquer ses besoins, limites, peurs et désirs de façon plus sécuritaire. L’objectif n’est pas de mettre de la pression sur qui que ce soit, mais de soutenir une compréhension plus profonde, la proximité émotionnelle, le consentement et une connexion plus compatissante.",
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling de couple peut commencer lorsque les deux partenaires se sentent moins seuls dans la relation. Vous pourriez reconnaître le schéma au lieu de vous blâmer mutuellement. Les conversations peuvent devenir plus douces, plus honnêtes et moins réactives. Avec le temps, les couples peuvent se sentir plus en sécurité émotionnelle, plus connectés et plus capables de réparer après un conflit. Le progrès ne signifie pas ne jamais vivre de difficultés; il signifie apprendre à se tourner l’un vers l’autre avec plus de compréhension, de soin et de respect.",
    ctaTitle: "Êtes-vous prêts à vous sentir plus proches, plus en sécurité et plus connectés?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "زوج درمانی در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "فضایی امن و حمایتگر برای شنیده شدن، بازسازی پیوند و پیدا کردن راهی دوباره به سوی هم.",
    introTitle: "زوج درمانی در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات زوج درمانی به پارتنرهایی کمک می‌کند که در تعارض گیر افتاده‌اند، از نظر عاطفی فاصله گرفته‌اند، ارتباطشان باهم قطع شده یا نمی‌دانند چطور بدون آسیب زدن، با هم گفت‌وگو کنند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات زوج درمانی حضوری و در سراسر بریتیش کلمبیا زوج درمانی آنلاین ارائه می‌دهند. ما به زوج‌ها کمک می‌کنیم گفت‌وگوهای دشوار را آرام‌تر کنند، الگوهای تکراری را بشناسند، اعتماد را بازسازی کنند و پیوند عاطفی بسازند. اگر از بحث‌های مداوم، چالش‌های جنسی، تغییرات زندگی یا زخمی دردناک در رابطه رنج می‌برید، تیم ما فضایی همدلانه، محترمانه و علمی و کاربردی فراهم می‌کند تا هر دو نفر احساس حمایت و احترام داشته باشند.",
    whoTitle: "چه زمانی زوج درمانی می‌تواند مفید باشد؟",
    whoItems: [
      { title: "خیانت و از دست رفتن اعتماد", body: "زمانی‌که خیانت، پنهان‌کاری، ناامیدی یا آسیب‌های تکراری احساس امنیت را از بین برده باشد." },
      { title: "بحث‌های تکراری", body: "زمانی‌که بارها وارد همان دعوا می‌شوید، بدون اینکه واقعاً احساس کنید فهمیده شده‌اید." },
      { title: "فاصله عاطفی", body: "زمانی‌که با هم زندگی می‌کنید و همدیگر را دوست دارید، اما همچنان احساس تنهایی، دیده نشدن یا قطع ارتباط می‌کنید." },
      { title: "اختلال در ارتباط", body: "زمانی‌که گفت‌وگوها خیلی زود به دفاع، سکوت، انتقاد یا بحران عاطفی تبدیل می‌شوند." },
      { title: "تغییرات زندگی و فشار روانی", body: "زمانی‌که مسائل مربوط به فرزندپروری، مهاجرت، کار، فشار خانواده، مسائل مالی یا سلامت روی رابطه شما اثر گذاشته." },
      { title: "چالش‌های جنسی", body: "زمانی‌که نزدیکی عاطفی یا جسمی کمتر شده و نمی‌دانید چطور بدون شرم، سرزنش یا ترس درباره آن حرف بزنید." },
    ],
    extraListTitle: "چه نوع زوج‌هایی می‌توانند از زوج درمانی بهره ببرند؟",
    extraListIntro: "در مرکز سلامت روان ChangeMoment، ما به تنوع رابطه‌ها، هویت‌ها، فرهنگ‌ها و شیوه‌های مختلف پیوند احترام می‌گذاریم و از آن‌ها حمایت می‌کنیم.",
    extraListItems: ["زوج‌های متأهل", "زوج‌هایی که در رابطه عاطفی هستند", "پارتنرهای هم‌خانه", "والدین تازه", "زوج‌هایی که با تصمیم جدایی روبه‌رو هستند", "زوج‌های بین‌فرهنگی", "زوج‌های با ادیان مختلف", "زوج‌های LGBTQ+", "زوج‌های تک‌همسر", "زوج‌های دارای رابطه غیرتک‌همسری توافقی", "زوج‌هایی که پس از تجربه خیانت در حال ترمیم و بازسازی رابطه هستند", "زوج‌های با چالش‌های جنسی", "زوج‌هایی که با تغییرات بزرگ زندگی سازگار می‌شوند"],
    howTitle: "ما چگونه با زوج‌ها کار می‌کنیم؟",
    howItems: [
      { title: "کاهش شدت تعارض", body: "ابتدا کمک می‌کنیم هر دو نفر شدت تعارض را کاهش دهند تا گفت‌وگوها امن‌تر و کمتر واکنشی شوند." },
      { title: "شناخت چرخه منفی", body: "با هم الگوی ارتباطی تکرارشونده را کشف می‌کنیم تا هنگام دعوا، فاصله یا بن‌بست عاطفی بتوانید رابطه را مدیریت کنید. بنابراین تمرکز روی چرخه ارتباطی است، نه یکی از پارتنرها." },
      { title: "بازسازی پیوند عاطفی", body: "به زوج‌ها کمک می‌کنیم احساسات عمیق‌تر، نیازها و خواسته‌هایشان را با امنیت بیان کنند و به سمت ترمیم، اعتماد و صمیمیت حرکت کنند." },
    ],
    extraBodyTitle: "زوج درمانی چگونه می‌تواند به چالش‌های جنسی کمک کند؟",
    extraBody: "چالش‌های مربوط به رابطه جنسی اغلب با امنیت عاطفی، اعتماد، استرس، زخم‌های گذشته، تصویر بدن، ارتباط، رنجش یا دیده نشدن در رابطه ارتباط دارند. در زوج درمانی، فضایی محترمانه و بدون قضاوت ایجاد می‌کنیم تا پارتنرها بتوانند درباره صمیمیت و رابطه جنسی با صداقت بیشتر و شرم کمتر حرف بزنند. مشاوران ما کمک می‌کنند زوج‌ها بفهمند چه چیزی بینشان فاصله ایجاد کرده، قطع ارتباط عاطفی چطور می‌تواند نزدیکی جسمی را تحت تأثیر قرار دهد و هر دو نفر چگونه می‌توانند نیازها، مرزها، ترس‌ها و خواسته‌هایشان را امن‌تر بیان کنند. هدف فشار آوردن به هیچ‌کدام از پارتنرها نیست؛ هدف، کمک به فهم عمیق‌تر، نزدیکی عاطفی، رضایت و پیوندی همدلانه‌تر است.",
    progressTitle: "پیشرفت در فرایند زوج‌درمانی چگونه است؟",
    progressBody: "پیشرفت در زوج درمانی زمانی شروع می‌شود که هر دو نفر در رابطه کمتر احساس تنهایی می‌کنند. به جای سرزنش همدیگر، الگوهای ارتباطی را می‌شناسند. گفت‌وگوها نرم‌تر، صادقانه‌تر و کمتر واکنشی می‌شوند. با گذشت زمان، زوج‌ها امنیت عاطفی بیشتری تجربه می‌کنند، به هم نزدیک‌تر می‌شوند و پس از تعارض بهتر رابطه را ترمیم می‌کنند. پیشرفت به معنی هرگز مشکل نداشتن نیست؛ بلکه یعنی یاد بگیرید با درک، مراقبت و احترام بیشتری به سوی هم بازگردید.",
    ctaTitle: "آماده‌اید در رابطه‌تان احساس نزدیکی، امنیت و پیوند داشته باشید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const familyCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Family Counselling in Coquitlam, BC",
    heroIntro: "When home feels tense, counselling can help your family find more peace, connection, and care.",
    introTitle: "Family Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our family counselling services support families who are feeling overwhelmed by conflict, distance, misunderstanding, or major life changes. Our Registered Clinical Counsellors provide in-person family counselling in Coquitlam, BC, and online family counselling across British Columbia, helping family members communicate more clearly, understand each other’s emotions, and move away from blame toward healthier connection. Whether your family is navigating parenting challenges, cultural or generational differences, separation, grief, stress, or ongoing tension at home, our team offers a compassionate and evidence-informed space where each person’s voice can be heard and respected.",
    whoTitle: "When Family Counselling May Be Helpful",
    whoItems: [
      { title: "Frequent conflict at home", body: "Conversations may quickly turn into arguments, criticism, silence, or emotional distance." },
      { title: "Parent-child disconnection", body: "Parents and children may love each other deeply, but still struggle to feel understood or emotionally close." },
      { title: "Communication breakdowns", body: "Family members may feel unheard, misunderstood, blamed, or unsure how to talk without escalating the situation." },
      { title: "Major life transitions", body: "Changes such as separation, remarriage, immigration, moving, loss, illness, or financial stress may affect the whole family system." },
      { title: "Cultural or generational differences", body: "Differences in values, expectations, language, identity, or family roles may create tension or emotional distance." },
      { title: "One family member’s struggle affecting everyone", body: "Anxiety, depression, trauma, school stress, work stress, or emotional distress in one person can impact the entire family." },
    ],
    extraBodyTitle: "Is Your Teen Pulling Away, Shutting Down, or Struggling to Talk?",
    extraBodyPlacement: "beforeHow",
    extraBody: "The teenage years can bring big emotional, social, and identity changes, and sometimes the whole family feels the impact. Parents may notice more conflict, silence, irritability, anxiety, sadness, school stress, or distance at home, while the teen may feel misunderstood, pressured, or unsure how to express what they are going through. In family counselling, we support both teenagers and parents in creating safer conversations, reducing blame, and understanding what may be happening beneath the behaviour. Our goal is to help families rebuild trust, strengthen communication, and create a home environment where teenagers can feel more supported, respected, and emotionally safe.",
    howTitle: "How We Support Families",
    howItems: [
      { title: "Creating a safer space for conversation", body: "We begin by helping family members slow down difficult interactions, listen with more care, and speak in a way that feels less blaming or defensive." },
      { title: "Understanding the family pattern", body: "Together, we explore the repeating roles, expectations, conflicts, and emotional reactions that keep the family feeling stuck." },
      { title: "Rebuilding trust and connection", body: "We support families in developing healthier communication, clearer boundaries, and more compassionate ways of responding to one another." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in family counselling may begin with small changes in how family members listen, speak, and respond to each other. Over time, conversations may feel less tense, conflicts may become easier to repair, and each person may feel more seen and respected. Family counselling can help create more emotional safety at home, where differences can be understood, needs can be expressed, and connection can slowly begin to grow again.",
    ctaTitle: "Ready to bring more warmth, peace, and connection back into your home?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling familial à Coquitlam, BC",
    heroIntro: "Quand la maison devient tendue, le counselling peut aider votre famille à retrouver plus de calme, de lien et de douceur.",
    introTitle: "Le counselling familial chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling familial soutiennent les familles dépassées par les conflits, la distance, les malentendus ou les grands changements de vie. Nos conseillers cliniques agréés offrent du counselling familial en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les membres de la famille à communiquer plus clairement, comprendre les émotions de chacun et sortir du blâme pour retrouver un lien plus sain. Que votre famille traverse des défis parentaux, des différences culturelles ou générationnelles, une séparation, un deuil, du stress ou des tensions persistantes à la maison, notre équipe offre un espace compatissant et éclairé par les données probantes où chaque voix peut être entendue et respectée.",
    whoTitle: "Quand le counselling familial peut aider",
    whoItems: [
      { title: "Conflits fréquents à la maison", body: "Les conversations peuvent rapidement devenir des disputes, des critiques, du silence ou de la distance émotionnelle." },
      { title: "Distance parent-enfant", body: "Parents et enfants peuvent s’aimer profondément, tout en ayant du mal à se sentir compris ou proches émotionnellement." },
      { title: "Ruptures de communication", body: "Les membres de la famille peuvent se sentir ignorés, incompris, blâmés ou incertains de savoir parler sans escalade." },
      { title: "Grandes transitions de vie", body: "Séparation, remariage, immigration, déménagement, perte, maladie ou stress financier peuvent toucher tout le système familial." },
      { title: "Différences culturelles ou générationnelles", body: "Des différences de valeurs, d’attentes, de langue, d’identité ou de rôles familiaux peuvent créer de la tension ou de la distance." },
      { title: "La difficulté d’un membre affecte tout le monde", body: "L’anxiété, la dépression, le trauma, le stress scolaire ou professionnel, ou la détresse d’une personne peuvent toucher toute la famille." },
    ],
    extraBodyTitle: "Votre ado se referme, s’éloigne ou a du mal à parler?",
    extraBodyPlacement: "beforeHow",
    extraBody: "L’adolescence peut apporter de grands changements émotionnels, sociaux et identitaires, et toute la famille peut en ressentir l’impact. Les parents peuvent remarquer plus de conflits, de silence, d’irritabilité, d’anxiété, de tristesse, de stress scolaire ou de distance à la maison, tandis que l’adolescent peut se sentir incompris, sous pression ou incapable d’exprimer ce qu’il traverse. En counselling familial, nous soutenons les adolescents et les parents pour créer des conversations plus sécuritaires, réduire le blâme et comprendre ce qui peut se cacher sous les comportements. Notre objectif est d’aider les familles à rebâtir la confiance, renforcer la communication et créer un milieu familial où les adolescents se sentent mieux soutenus, respectés et en sécurité émotionnelle.",
    howTitle: "Comment nous soutenons les familles",
    howItems: [
      { title: "Créer un espace plus sécuritaire pour parler", body: "Nous aidons d’abord les membres de la famille à ralentir les interactions difficiles, à écouter avec plus de soin et à parler avec moins de blâme ou de défense." },
      { title: "Comprendre le schéma familial", body: "Ensemble, nous explorons les rôles, attentes, conflits et réactions émotionnelles qui se répètent et gardent la famille coincée." },
      { title: "Rebâtir la confiance et le lien", body: "Nous soutenons les familles dans le développement d’une communication plus saine, de limites plus claires et de réponses plus compatissantes." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling familial peut commencer par de petits changements dans la façon dont les membres de la famille écoutent, parlent et se répondent. Avec le temps, les conversations peuvent devenir moins tendues, les conflits plus faciles à réparer et chacun peut se sentir davantage vu et respecté. Le counselling familial peut aider à créer plus de sécurité émotionnelle à la maison, où les différences peuvent être comprises, les besoins exprimés et le lien recommencer à grandir doucement.",
    ctaTitle: "Prêt à ramener plus de chaleur, de paix et de connexion à la maison?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره خانواده در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "اگر خانه شما پرتنش است، مشاوره می‌تواند به خانواده شما کمک کند آرامش و گرما را دوباره به خانه بازگردانید.",
    introTitle: "مشاوره خانواده در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات مشاوره خانواده به خانواده‌هایی کمک می‌کند که درگیر اختلاف، فاصله، سوءتفاهم یا تغییرات بزرگ زندگی شده‌اند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری خانواده و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به اعضای خانواده کمک می‌کنیم شفاف‌تر با هم حرف بزنند، احساسات یکدیگر را بهتر درک کنند و از سرزنش پرهیز کنند تا ارتباطی سالم‌تر شکل بگیرد. اگر خانواده شما با چالش‌های فرزندپروری، تفاوت‌های فرهنگی یا نسلی، جدایی، سوگ، استرس یا تنش‌های ادامه‌دار در خانه روبه‌روست، تیم ما فضایی همدلانه، محترمانه و علمی و کاربردی فراهم می‌کند تا صدای هر نفر شنیده و درک شود.",
    whoTitle: "چه زمانی مشاوره خانواده می‌تواند مفید باشد؟",
    whoItems: [
      { title: "اختلافات مکرر در خانه", body: "زمانی‌که مکالمه‌ها خیلی زود به بحث، انتقاد، سکوت یا فاصله عاطفی تبدیل می‌شوند." },
      { title: "فاصله میان والدین و فرزندان", body: "زمانی‌که والدین و فرزندان عمیقاً همدیگر را دوست دارند، اما همچنان احساس فهمیده شدن یا نزدیکی عاطفی نمی‌کنند." },
      { title: "اختلال در گفت‌وگو", body: "زمانی‌که اعضای خانواده احساس می‌کنند شنیده نمی‌شوند، بد فهمیده می‌شوند، سرزنش می‌شوند یا نمی‌دانند چطور بدون تشدید تنش حرف بزنند." },
      { title: "تغییرات بزرگ زندگی", body: "زمانی‌که خانواده درگیر جدایی، ازدواج مجدد، مهاجرت، جابه‌جایی، سوگ، بیماری، فشار مالی و غیره است." },
      { title: "تفاوت‌های فرهنگی یا نسلی", body: "زمانی‌که تفاوت در ارزش‌ها، انتظارات، زبان، هویت یا نقش‌های خانوادگی تنش یا فاصله عاطفی ایجاد کرده." },
      { title: "تأثیر مشکل یک نفر روی همه", body: "زمانی‌که اضطراب، افسردگی، تروما، فشار مدرسه یا کار، یا آشفتگی عاطفی یک نفر کل خانواده را تحت تأثیر قرار داده." },
    ],
    extraBodyTitle: "آیا فرزند نوجوانتان از شما فاصله گرفته، سکوت می‌کند یا سخت حرف می‌زند؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "سال‌های نوجوانی می‌تواند با تغییرات بزرگ عاطفی، اجتماعی و هویتی همراه باشد و گاهی همه خانواده اثر آن را احساس می‌کنند. والدین ممکن است در خانه تعارض، سکوت، تحریک‌پذیری، اضطراب، غم، فشار مدرسه یا فاصله بیشتری تجربه کنند، در حالی که نوجوان احساس کند فهمیده نمی‌شود، تحت فشار است یا نمی‌داند چطور آنچه را تجربه می‌کند بیان کند. در مشاوره خانواده، ما به نوجوانان و والدین کمک می‌کنیم تا گفت‌وگوهای امن‌تری بسازند، سرزنش را کنار بگذارند و بفهمند زیر رفتارها چه چیزی ممکن است در جریان باشد. هدف ما کمک به بازسازی اعتماد، تقویت ارتباط و ساختن خانه‌ای است که نوجوان در آن حمایت، احترام و امنیت عاطفی بیشتری تجربه کند.",
    howTitle: "ما چگونه به خانواده‌ها کمک می‌کنیم؟",
    howItems: [
      { title: "ایجاد فضایی امن‌تر برای گفت‌وگو", body: "ابتدا کمک می‌کنیم تعامل‌های پرتنش آرام‌تر شوند، اعضای خانواده با دقت بیشتری گوش بدهند و با سرزنش یا دفاع کمتر حرف بزنند." },
      { title: "شناخت الگوی خانوادگی", body: "با هم نقش‌ها، انتظارات، اختلافات و واکنش‌های عاطفی تکرارشونده را بررسی می‌کنیم." },
      { title: "بازسازی اعتماد و ارتباط", body: "به خانواده‌ها کمک می‌کنیم ارتباط سالم‌تر، مرزهای روشن‌تر و شیوه‌های همدلانه‌تری برای پاسخ‌دهی بسازند." },
    ],
    progressTitle: "پیشرفت در فرایند درمان مشاوره خانواده چگونه است؟",
    progressBody: "پیشرفت در مشاوره خانواده ممکن است با تغییرات کوچک در گوش دادن، حرف زدن و پاسخ دادن اعضای خانواده به هم شروع شود. با گذشت زمان، گفت‌وگوها می‌توانند تنش کمتری داشته باشند، ترمیم پس از اختلاف آسان‌تر شود و هر نفر بیشتر دیده و شنیده شود. مشاوره خانواده می‌تواند به ایجاد امنیت عاطفی در خانه کمک کند؛ جایی که تفاوت‌ها فهمیده شوند، نیازها بیان شوند و ارتباط آرام‌آرام دوباره رشد کند.",
    ctaTitle: "آماده‌اید گرما، آرامش و پیوند دوباره را به خانه برگردانید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const anxietyCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Anxiety Counselling in Coquitlam, BC",
    heroIntro: "When your mind feels too full, counselling can help you find calm, clarity, and steadier ground.",
    introTitle: "Anxiety Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our anxiety counselling services support individuals who feel overwhelmed by worry, overthinking, fear, tension, or a constant sense of pressure. Our Registered Clinical Counsellors provide in-person anxiety counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients understand the roots of their anxiety, recognize how it shows up in the body and mind, and develop healthier ways to feel grounded and in control. Whether anxiety is affecting your work, relationships, sleep, confidence, or daily life, our team offers a compassionate and evidence-informed space to help you feel less alone and more supported.",
    whoTitle: "Signs and Symptoms of Anxiety",
    whoItems: [
      { title: "Constant worry", body: "Your mind may keep jumping to worst-case scenarios, even when part of you knows you are safe." },
      { title: "Overthinking and self-doubt", body: "You may replay conversations, question your decisions, or feel pressure to get everything right." },
      { title: "Physical tension", body: "Anxiety may show up as a tight chest, racing heart, stomach discomfort, restlessness, or difficulty relaxing." },
      { title: "Avoiding situations", body: "You may start avoiding people, places, conversations, or responsibilities because they feel too stressful or overwhelming." },
      { title: "Feeling on edge", body: "Even during quiet moments, your body may feel alert, unsettled, or unable to fully rest." },
      { title: "Difficulty sleeping or focusing", body: "Worry may follow you into the night or make it hard to stay present during the day." },
    ],
    extraListTitle: "What are the different types of anxiety?",
    extraListIntro: "Anxiety can show up in different ways. Some common types of anxiety include:",
    extraListItems: ["Generalized Anxiety Disorder (GAD) — constant worry about work, family, health, money, relationships, or the future.", "Social Anxiety — everyday interactions can feel stressful, unsafe, or full of fear of judgment.", "Panic Attacks — sudden, intense fear with strong physical symptoms such as racing heart or shortness of breath.", "Trauma-Related Anxiety — feeling on alert, easily triggered, emotionally unsafe, or unable to relax after painful experiences.", "Phobias — intense fear of a specific situation, object, or experience that can lead to avoidance."],
    howTitle: "Our Approach to Anxiety Counselling",
    howItems: [
      { title: "Understanding your anxiety", body: "We begin by exploring how anxiety shows up in your thoughts, body, emotions, and daily life, so your experience feels less confusing and more understandable." },
      { title: "Recognizing the anxiety cycle", body: "Together, we look at the patterns that keep anxiety going, such as avoidance, overthinking, perfectionism, people-pleasing, or fear of uncertainty." },
      { title: "Building a lasting toolkit", body: "We support you in developing practical coping tools, emotional awareness, and more compassionate ways of responding to yourself when anxiety appears." },
    ],
    extraBodyTitle: "What happens if anxiety is not treated?",
    extraBodyPlacement: "beforeHow",
    extraBody: "When anxiety is left untreated, it may grow stronger over time and begin affecting more areas of life. You may start avoiding important conversations, opportunities, relationships, or responsibilities because they feel too overwhelming. Untreated anxiety can also affect sleep, mood, confidence, work, school, parenting, physical health, and emotional connection with others. Reaching out for support early can help prevent anxiety from becoming more limiting and help you begin feeling more in control.",
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in anxiety counselling may begin with small moments of relief. You may start to notice anxiety earlier, understand what triggers it, and respond with more calm instead of panic or self-criticism. Over time, counselling can help you feel more grounded in your body, clearer in your decisions, and more confident in facing situations that once felt overwhelming.",
    ctaTitle: "Ready to make more room for calm in your life? Just take the first step.",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling pour l’anxiété à Coquitlam, BC",
    heroIntro: "Quand votre esprit est trop plein, le counselling peut vous aider à retrouver calme, clarté et stabilité.",
    introTitle: "Le counselling pour l’anxiété chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling pour l’anxiété soutiennent les personnes envahies par l’inquiétude, la rumination, la peur, la tension ou une impression constante de pression. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à comprendre les racines de leur anxiété, reconnaître comment elle se manifeste dans le corps et l’esprit, et développer des façons plus saines de se sentir ancrés et en contrôle. Que l’anxiété touche votre travail, vos relations, votre sommeil, votre confiance ou votre quotidien, notre équipe offre un espace compatissant et éclairé par les données probantes pour vous aider à vous sentir moins seul et mieux soutenu.",
    whoTitle: "Signes et symptômes de l’anxiété",
    whoItems: [
      { title: "Inquiétude constante", body: "Votre esprit peut passer sans cesse aux pires scénarios, même lorsqu’une partie de vous sait que vous êtes en sécurité." },
      { title: "Rumination et doute de soi", body: "Vous pouvez rejouer des conversations, remettre vos décisions en question ou ressentir la pression de tout faire correctement." },
      { title: "Tension physique", body: "L’anxiété peut se manifester par une poitrine serrée, un cœur qui bat vite, des inconforts digestifs, de l’agitation ou de la difficulté à relaxer." },
      { title: "Évitement de certaines situations", body: "Vous pouvez commencer à éviter des personnes, lieux, conversations ou responsabilités parce qu’ils semblent trop stressants." },
      { title: "Sensation d’être sur le qui-vive", body: "Même dans les moments calmes, votre corps peut rester alerte, agité ou incapable de vraiment se reposer." },
      { title: "Difficulté à dormir ou à se concentrer", body: "L’inquiétude peut vous suivre la nuit ou rendre la présence difficile pendant la journée." },
    ],
    extraListTitle: "Quels sont les différents types d’anxiété?",
    extraListIntro: "L’anxiété peut se présenter de plusieurs façons. Parmi les formes courantes, on retrouve :",
    extraListItems: ["Trouble d’anxiété généralisée (TAG) — une inquiétude constante au sujet du travail, de la famille, de la santé, de l’argent, des relations ou de l’avenir.", "Anxiété sociale — les interactions quotidiennes peuvent sembler stressantes, dangereuses ou remplies de peur d’être jugé.", "Attaques de panique — une peur soudaine et intense accompagnée de symptômes physiques comme le cœur qui s’emballe ou l’essoufflement.", "Anxiété liée au trauma — se sentir en alerte, facilement déclenché, peu en sécurité émotionnelle ou incapable de relaxer après des expériences douloureuses.", "Phobies — une peur intense d’une situation, d’un objet ou d’une expérience précise, qui peut mener à l’évitement."],
    howTitle: "Notre approche du counselling pour l’anxiété",
    howItems: [
      { title: "Comprendre votre anxiété", body: "Nous explorons d’abord comment l’anxiété se manifeste dans vos pensées, votre corps, vos émotions et votre quotidien, pour rendre l’expérience moins confuse." },
      { title: "Reconnaître le cycle de l’anxiété", body: "Ensemble, nous observons les schémas qui entretiennent l’anxiété, comme l’évitement, la rumination, le perfectionnisme, le besoin de plaire ou la peur de l’incertitude." },
      { title: "Construire une boîte à outils durable", body: "Nous vous soutenons dans le développement d’outils pratiques, d’une conscience émotionnelle et de réponses plus compatissantes envers vous-même." },
    ],
    extraBodyTitle: "Que se passe-t-il si l’anxiété n’est pas traitée?",
    extraBodyPlacement: "beforeHow",
    extraBody: "Lorsqu’elle n’est pas soutenue, l’anxiété peut prendre plus de place avec le temps et toucher davantage de sphères de la vie. Vous pourriez éviter des conversations importantes, des occasions, des relations ou des responsabilités parce qu’elles semblent trop difficiles. L’anxiété non traitée peut aussi affecter le sommeil, l’humeur, la confiance, le travail, les études, la parentalité, la santé physique et le lien émotionnel avec les autres. Demander de l’aide tôt peut éviter que l’anxiété devienne plus limitante et vous aider à retrouver un plus grand sentiment de maîtrise.",
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling pour l’anxiété peut commencer par de petits moments de soulagement. Vous pourriez remarquer l’anxiété plus tôt, comprendre ce qui la déclenche et répondre avec plus de calme plutôt qu’avec panique ou autocritique. Avec le temps, le counselling peut vous aider à vous sentir plus ancré dans votre corps, plus clair dans vos décisions et plus confiant face aux situations qui semblaient autrefois accablantes.",
    ctaTitle: "Prêt à faire plus de place au calme dans votre vie? Commencez par un premier pas.",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "درمان اضطراب در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "وقتی ذهن شما پریشان است، مشاوره می‌تواند کمک کند آرامش، وضوح و استقرار پیدا کنید.",
    introTitle: "درمان اضطراب در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، ما در خدمت افرادی هستیم که با نگرانی، افکار تکراری، ترس، تنش یا احساس فشار دائمی درگیرند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات حضوری درمان اضطراب و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به مراجعان کمک می‌کنیم ریشه‌های اضطراب خود را بهتر بشناسند، ببینند اضطراب چگونه در بدن و ذهنشان ظاهر می‌شود و راه‌های سالم‌تری برای احساس ثبات و کنترل بسازند. وقتی اضطراب روی کار، روابط، خواب، اعتمادبه‌نفس یا زندگی روزمره شما اثر گذاشته است، تیم ما فضایی همدلانه، محترمانه و علمی و کاربردی فراهم می‌کند تا کمتر احساس تنهایی کنید و مراقبت بیشتری دریافت کنید.",
    whoTitle: "نشانه‌ها و علائم اضطراب",
    whoItems: [
      { title: "نگرانی مداوم", body: "ذهنتان ممکن است مدام به بدترین سناریوها فکر کند، حتی وقتی می‌داند در امنیت هستید." },
      { title: "افکار تکراری و تردید نسبت به خود", body: "ممکن است گفت‌وگوها را بارها مرور کنید، تصمیم‌هایتان را زیر سؤال ببرید یا فشار زیادی برای درست انجام دادن همه چیز حس کنید." },
      { title: "تنش جسمی", body: "اضطراب می‌تواند به شکل فشار در قفسه سینه، تپش قلب، ناراحتی معده، بی‌قراری یا دشواری در آرام شدن ظاهر شود." },
      { title: "اجتناب از موقعیت‌ها", body: "ممکن است از آدم‌ها، مکان‌ها، گفت‌وگوها یا مسئولیت‌هایی دوری کنید که بیش از حد استرس‌زا یا سنگین به نظر می‌رسند." },
      { title: "احساس آماده‌باش دائمی", body: "حتی در لحظه‌های آرام، بدن ممکن است هشیار، ناآرام یا ناتوان از آرامش کامل باشد." },
      { title: "سختی در خواب یا تمرکز", body: "نگرانی ممکن است هر شب درگیرتان کند یا در طول روز تمرکز شما را از بین ببرد." },
    ],
    extraListTitle: "انواع مختلف اضطراب کدام‌اند؟",
    extraListIntro: "اضطراب می‌تواند به شکل‌های مختلفی ظاهر شود. چند نمونه رایج شامل:",
    extraListItems: ["اختلال اضطراب فراگیر (GAD) — نگرانی مداوم درباره کار، خانواده، سلامت، پول، رابطه‌ها یا آینده.", "اضطراب اجتماعی — تعامل‌های روزمره می‌توانند پرتنش یا ناامن به نظر برسند و با ترس از قضاوت همراه شوند.", "حمله پانیک — ترسی ناگهانی و شدید همراه با نشانه‌های جسمی مثل تپش قلب، تنگی نفس، سرگیجه یا لرزش.", "اضطراب مرتبط با تروما — آماده‌باش دائمی، تحریک‌پذیری، ناامنی عاطفی یا سختی در آرام شدن پس از تجربه‌های دردناک.", "فوبیا — ترس شدید از یک موقعیت، شیء یا تجربه مشخص مثل پرواز، رانندگی، سوزن، ارتفاع یا بعضی حیوانات."],
    howTitle: "رویکرد ما در درمان اضطراب",
    howItems: [
      { title: "درک عمیق اضطراب شما", body: "ابتدا بررسی می‌کنیم اضطراب چگونه در افکار، بدن، احساسات و زندگی روزمره شما ظاهر می‌شود تا تجربه‌تان کاملا قابل‌فهم‌ شود." },
      { title: "شناخت چرخه اضطراب", body: "با هم الگوهایی را می‌بینیم که اضطراب را شکل می‌دهند؛ مثل اجتناب، افکار تکراری، کمال‌گرایی، راضی نگه داشتن دیگران یا ترس از ابهام." },
      { title: "ساختن ابزارهایی ماندگار", body: "کمک می‌کنیم ابزارهای عملی برای کنار آمدن، آگاهی عاطفی و پاسخ‌های مهربانانه‌تر به خودتان هنگام بروز اضطراب بسازید." },
    ],
    extraBodyTitle: "اگر اضطراب درمان نشود چه اتفاقی می‌افتد؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "وقتی اضطراب بدون درمان رها شود، ممکن است با گذشت زمان شدیدتر شود و بخش‌های بیشتری از زندگی را درگیر کند. ممکن است از گفت‌وگوهای مهم، فرصت‌ها، رابطه‌ها یا مسئولیت‌ها دوری کنید چون بیش از حد سنگین به نظر می‌رسند. اضطراب درمان‌نشده می‌تواند خواب، خلق‌وخو، اعتمادبه‌نفس، کار، تحصیل، فرزندپروری، سلامت جسمی و ارتباط عاطفی با دیگران را هم تحت تأثیر قرار دهد. کمک گرفتن به‌موقع می‌تواند از محدودتر شدن زندگی جلوگیری کند و به شما کمک کند دوباره احساس کنترل داشته باشید.",
    progressTitle: "پیشرفت در فرایند درمان اضطراب چگونه است؟",
    progressBody: "پیشرفت در درمان اضطراب ممکن است با لحظه‌های کوچک آرامش شروع شود. زودتر متوجه اضطراب می‌شوید، محرک‌های آن را می‌شناسید و به جای پانیک یا سرزنش خود، با آرامش بیشتری پاسخ می‌دهید. با گذشت زمان، مشاوره می‌تواند کمک کند در بدن خود آرامش داشته باشید، در تصمیم‌هایتان وضوح بیشتری داشته باشید و در مواجهه با موقعیت‌هایی که قبلاً طاقت‌فرسا بودند، اعتماد بیشتری احساس کنید.",
    ctaTitle: "آماده‌اید جای بیشتری برای آرامش در زندگی‌تان باز کنید؟ فقط قدم اول را بردارید.",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const depressionCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Depression Counselling in Coquitlam, BC",
    heroIntro: "When life feels heavy, counselling can help you find your way back to yourself.",
    introTitle: "Depression Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our depression counselling services support individuals who are feeling low, disconnected, exhausted, unmotivated, or emotionally weighed down. Our Registered Clinical Counsellors provide in-person depression counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients understand what may be contributing to their depression, explore difficult emotions, and slowly rebuild connection with themselves and their daily life. Whether depression is affecting your mood, energy, relationships, work, sleep, or sense of hope, our team offers a compassionate and evidence-informed space where you do not have to face it alone.",
    whoTitle: "Signs you may need counselling for Depression",
    whoItems: [
      { title: "Feeling low or empty", body: "You may feel sad, numb, emotionally flat, or disconnected from the things that once mattered to you." },
      { title: "Loss of interest or motivation", body: "Activities, relationships, work, or daily responsibilities may feel harder to care about or begin." },
      { title: "Low energy and exhaustion", body: "Even simple tasks may feel heavy, and rest may not fully restore your energy." },
      { title: "Changes in sleep or appetite", body: "Depression may affect how much you sleep, how rested you feel, or how your body responds to food and routine." },
      { title: "Self-criticism or hopeless thoughts", body: "You may find yourself feeling not good enough, stuck, guilty, or unsure if things can improve." },
      { title: "Withdrawing from others", body: "You may pull away from friends, family, or social situations, even when part of you still wants connection." },
    ],
    extraBodyTitle: "What Can Happen When Depression Is Not Addressed?",
    extraBodyPlacement: "beforeHow",
    extraBody: "When depression is ignored or pushed aside, it can slowly begin to affect many parts of life. It may become harder to keep up with work, school, relationships, self-care, or daily routines. People may become more isolated, more self-critical, and less able to enjoy moments that used to bring comfort or meaning. Depression can also affect the body through sleep changes, fatigue, appetite changes, and difficulty concentrating. Getting support early can help interrupt this cycle before depression becomes more deeply rooted in daily life.",
    howTitle: "Our Approach to Depression Counselling",
    howItems: [
      { title: "Understanding your depression", body: "We begin by exploring how depression is showing up in your thoughts, emotions, body, relationships, and everyday life." },
      { title: "Recognizing the depression cycle", body: "Together, we look at patterns such as withdrawal, self-criticism, emotional numbness, unresolved grief, stress, or loss of meaning that may be keeping depression going." },
      { title: "Rebuilding connection and hope", body: "We support you in taking gentle, realistic steps toward emotional awareness, self-compassion, meaningful routines, and a stronger connection to yourself and others." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in depression counselling may begin with small signs of movement. You may feel a little more understood, a little less alone, or a little more able to name what is happening inside. Over time, counselling can help you reconnect with your emotions, rebuild energy, soften self-criticism, and create more space for meaning, connection, and hope in your life.",
    ctaTitle: "Ready to begin moving toward light again?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling pour la dépression à Coquitlam, BC",
    heroIntro: "Quand la vie semble lourde, le counselling peut vous aider à retrouver le chemin vers vous-même.",
    introTitle: "Le counselling pour la dépression chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling pour la dépression soutiennent les personnes qui se sentent tristes, déconnectées, épuisées, démotivées ou émotionnellement alourdies. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à comprendre ce qui peut contribuer à leur dépression, explorer les émotions difficiles et reconstruire doucement le lien avec eux-mêmes et leur quotidien. Que la dépression touche votre humeur, votre énergie, vos relations, votre travail, votre sommeil ou votre sentiment d’espoir, notre équipe offre un espace compatissant et éclairé par les données probantes où vous n’avez pas à traverser cela seul.",
    whoTitle: "Signes que le counselling pour la dépression peut aider",
    whoItems: [
      { title: "Se sentir bas ou vide", body: "Vous pouvez vous sentir triste, engourdi, émotionnellement plat ou déconnecté de ce qui comptait auparavant." },
      { title: "Perte d’intérêt ou de motivation", body: "Les activités, les relations, le travail ou les responsabilités quotidiennes peuvent sembler plus difficiles à commencer ou à investir." },
      { title: "Peu d’énergie et épuisement", body: "Même les tâches simples peuvent sembler lourdes, et le repos ne suffit pas toujours à refaire vos forces." },
      { title: "Changements de sommeil ou d’appétit", body: "La dépression peut modifier votre sommeil, votre sensation de repos ou la façon dont votre corps réagit à l’alimentation et aux routines." },
      { title: "Autocritique ou pensées sans espoir", body: "Vous pouvez vous sentir pas assez bon, coincé, coupable ou incertain que les choses puissent s’améliorer." },
      { title: "Retrait des autres", body: "Vous pouvez vous éloigner des proches ou des situations sociales, même si une partie de vous souhaite encore du lien." },
    ],
    extraBodyTitle: "Que peut-il arriver si la dépression n’est pas abordée?",
    extraBodyPlacement: "beforeHow",
    extraBody: "Lorsqu’elle est ignorée ou mise de côté, la dépression peut lentement toucher de nombreuses sphères de la vie. Il peut devenir plus difficile de maintenir le travail, les études, les relations, les soins personnels ou les routines quotidiennes. Les personnes peuvent devenir plus isolées, plus autocritiques et moins capables de profiter des moments qui apportaient autrefois du réconfort ou du sens. La dépression peut aussi affecter le corps par des changements de sommeil, de la fatigue, des variations d’appétit et des difficultés de concentration. Demander du soutien tôt peut aider à interrompre ce cycle avant qu’il ne s’enracine davantage dans le quotidien.",
    howTitle: "Notre approche du counselling pour la dépression",
    howItems: [
      { title: "Comprendre votre dépression", body: "Nous explorons d’abord comment la dépression se manifeste dans vos pensées, vos émotions, votre corps, vos relations et votre quotidien." },
      { title: "Reconnaître le cycle de la dépression", body: "Ensemble, nous observons les schémas comme le retrait, l’autocritique, l’engourdissement émotionnel, le deuil non résolu, le stress ou la perte de sens." },
      { title: "Reconstruire le lien et l’espoir", body: "Nous vous soutenons dans des pas doux et réalistes vers la conscience émotionnelle, l’autocompassion, des routines significatives et un lien plus fort avec vous-même et les autres." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling pour la dépression peut commencer par de petits signes de mouvement. Vous pourriez vous sentir un peu mieux compris, un peu moins seul ou un peu plus capable de nommer ce qui se passe à l’intérieur. Avec le temps, le counselling peut vous aider à vous reconnecter à vos émotions, reconstruire votre énergie, adoucir l’autocritique et créer plus d’espace pour le sens, le lien et l’espoir.",
    ctaTitle: "Prêt à recommencer à avancer vers la lumière?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "درمان افسردگی در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "وقتی جریان زندگی متوقف می‌شود، مشاوره می‌تواند کمک کند دوباره راهی به سوی خودتان پیدا کنید.",
    introTitle: "درمان افسردگی در مرکز سلامت روان ChangeMoment",
    introBody: "ما در خدمت افرادی هستیم که دچار افسردگی، انزوا، خستگی، بی‌انگیزگی یا بحران عاطفی هستند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات درمان حضوری افسردگی و در سراسر بریتیش کلمبیا جلسات آنلاین ارائه می‌دهند. ما به مراجعان کمک می‌کنیم تا دریابند علت زیربنایی افسردگیشان چیست، احساسات سنگین را در فضایی امن تجربه کنند و به تدریج ارتباط با خود و جریان زندگی را از نو بسازند. چنان چه افسردگی روی خلق، روابط، کار و زندگی روزمره شما تاثیر گذاشته، تیم ما در فضایی همدلانه، علمی و کاربردی در مسیر درمان کنار شماست.",
    whoTitle: "علائم و نشانه‌های افسردگی",
    whoItems: [
      { title: "احساس غم یا خالی بودن", body: "ممکن است غمگین، بی‌حس و یا بی‌تفاوت نسبت به چیزهایی باشید که قبلاً برایتان مهم بودند." },
      { title: "از دست دادن علاقه یا انگیزه", body: "ممکن است شروع فعالیت‌ها، کار یا مسئولیت‌های روزمره برای شما سخت باشد و یا دیگر اهمیت سابق را نداشته باشند." },
      { title: "کمبود انرژی و فرسودگی", body: "حتی کارهای ساده ممکن است دشوار به نظر برسند و استراحت هم انرژی شما را کامل برنگرداند." },
      { title: "تغییر در خواب یا اشتها", body: "افسردگی می‌تواند روی میزان خواب، استراحت یا واکنش بدن به غذا تاثیر بگذارد." },
      { title: "خودسرزنشی یا افکار ناامیدکننده", body: "ممکن است احساس کنید کافی نیستید، گیر افتاده‌اید، مقصرید یا ناامید باشید از اینکه شرایط بهتر شود." },
      { title: "فاصله گرفتن از دیگران", body: "ممکن است از دوستان، خانواده یا موقعیت‌های اجتماعی فاصله بگیرید، حتی وقتی بخشی از شما هنوز نیاز به ارتباط دارد." },
    ],
    extraBodyTitle: "اگر افسردگی نادیده گرفته شود چه اتفاقی می‌افتد؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "درصورتی‌که افسردگی نادیده گرفته شود، به تدریج بخش‌های مختلفی از زندگی تحت تأثیر قرار می‌گیرند. ممکن است ادامه دادن کار، تحصیل، رابطه‌ها، مراقبت از خود یا روتین‌های روزمره دشوارتر شود. فرد به تدریج منزوی‌تر، خودسرزنش‌گرتر و کمتر قادر به لذت بردن از لحظه‌هایی شود که قبلاً آرام‌بخش یا شادی‌آفرین بوده‌اند. افسردگی می‌تواند بدن را هم از طریق تغییر خواب، اشتها و اختلال در تمرکز درگیر کند. دریافت کمک در زمان مناسب می‌تواند این چرخه را متوقف کند، پیش از اینکه افسردگی آسیب بزرگتری به جسم و جان ما بزند.",
    howTitle: "رویکرد ما در درمان افسردگی",
    howItems: [
      { title: "درک عمیق افسردگی شما", body: "ابتدا بررسی می‌کنیم افسردگی چگونه در افکار، احساسات، بدن، رابطه‌ها و زندگی روزمره شما ظاهر می‌شود." },
      { title: "شناخت چرخه افسردگی", body: "با هم الگوهایی مثل اجتناب، خودسرزنشی، بی‌حسی عاطفی، سوگ حل‌نشده، استرس یا از دست رفتن معنا را بررسی می‌کنیم." },
      { title: "بازسازی ارتباط و امید", body: "ما به شما کمک می‌کنیم قدم‌های آرام و واقعی به سوی آگاهی عاطفی، مهربانی با خود، روتین‌های معنادار و ارتباط قوی‌تر با خود و دیگران بردارید." },
    ],
    progressTitle: "پیشرفت در فرایند درمان افسردگی چگونه است؟",
    progressBody: "پیشرفت در درمان افسردگی با نشانه‌های کوچک تغییر شروع می‌شود. بیشتر احساس فهمیده شدن می‌کنید، کمتر احساس تنهایی می‌کنید و بهتر می‌توانید دنیای درونیتان را توصیف کنید. با گذشت زمان، تراپی به شما کمک می‌کند دوباره با احساساتتان ارتباط برقرار کنید، خودسرزنشی‌تان به تدریج کاهش یابد، انرژی دوباره‌ای کسب کنید و معنا و امید در زندگیتان جاری شود.",
    ctaTitle: "آماده‌اید دوباره به سمت روشنایی حرکت کنید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const traumaCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Trauma Counselling in Coquitlam, BC",
    heroIntro: "You do not have to carry the weight of painful experiences alone.",
    introTitle: "Trauma Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our trauma counselling services support individuals who are living with the emotional, physical, and relational impact of painful or overwhelming experiences. Our Registered Clinical Counsellors provide in-person trauma counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients feel safer in their bodies, understand trauma responses, and begin healing at a pace that feels respectful and manageable. Whether trauma is connected to a single event, repeated experiences, childhood wounds, relationship injuries, loss, immigration stress, or ongoing emotional pain, our team offers a compassionate and evidence-informed space where your story can be approached with care, safety, and dignity.",
    whoTitle: "When Trauma Counselling May Be Helpful",
    whoItems: [
      { title: "Feeling stuck in the past", body: "Memories, emotions, or body sensations from painful experiences may still feel present, even when life has moved forward." },
      { title: "Avoiding reminders", body: "You may avoid certain places, conversations, people, feelings, or situations because they bring up distress or fear." },
      { title: "Feeling constantly on alert", body: "Your body may feel tense, watchful, easily startled, or unable to fully relax." },
      { title: "Emotional numbness or disconnection", body: "You may feel distant from yourself, your emotions, your relationships, or the life you used to enjoy." },
      { title: "Shame, guilt, or self-blame", body: "You may carry painful beliefs about yourself, even when what happened was not your fault." },
      { title: "Difficulty trusting others", body: "Trauma can make closeness, safety, boundaries, and emotional vulnerability feel complicated or frightening." },
    ],
    extraListTitle: "Different Kinds of Trauma We Support",
    extraListIntro: "Trauma can happen in many ways, and it does not always look the same from one person to another. At ChangeMoment Mental Health Center, we support clients with different experiences of trauma, including:",
    extraListItems: ["Childhood trauma", "Attachment and relational trauma", "Emotional abuse or neglect", "Physical abuse", "Sexual trauma", "Family violence or high-conflict family environments", "Immigration and displacement trauma", "Medical trauma", "Birth or reproductive trauma", "Grief and traumatic loss", "Accident-related trauma", "Workplace trauma or bullying", "Cultural, racial, or identity-related trauma", "Repeated stress or complex trauma"],
    howTitle: "Our Approach to Trauma Healing",
    howItems: [
      { title: "Building safety first", body: "We begin by helping you feel more grounded, supported, and emotionally safe, so trauma counselling does not feel rushed or overwhelming." },
      { title: "Understanding your trauma responses", body: "Together, we explore how trauma may be affecting your body, emotions, thoughts, relationships, and sense of self." },
      { title: "Moving toward integration and healing", body: "At your pace, we support you in processing painful experiences, strengthening self-compassion, and reconnecting with parts of life that trauma may have interrupted." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in trauma counselling often begins with feeling a little less alone and a little more in control of your inner world. You may start to understand your reactions with more compassion, notice your triggers earlier, and feel more grounded when distress shows up. Over time, counselling can help painful experiences feel less present in everyday life, allowing more space for safety, trust, connection, and hope.",
    ctaTitle: "Ready to begin healing in a space that honours your pace, safety, and story?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling pour le trauma à Coquitlam, BC",
    heroIntro: "Vous n’avez pas à porter seul le poids des expériences douloureuses.",
    introTitle: "Le counselling pour le trauma chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling pour le trauma soutiennent les personnes qui vivent avec les impacts émotionnels, physiques et relationnels d’expériences douloureuses ou accablantes. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à se sentir plus en sécurité dans leur corps, comprendre leurs réponses traumatiques et commencer à guérir à un rythme respectueux et soutenable. Que le trauma soit lié à un événement unique, à des expériences répétées, à des blessures d’enfance, à des blessures relationnelles, à une perte, au stress migratoire ou à une douleur émotionnelle persistante, notre équipe offre un espace compatissant et éclairé par les données probantes où votre histoire peut être accueillie avec soin, sécurité et dignité.",
    whoTitle: "Quand le counselling pour le trauma peut aider",
    whoItems: [
      { title: "Se sentir coincé dans le passé", body: "Des souvenirs, émotions ou sensations corporelles liés à des expériences douloureuses peuvent encore sembler présents." },
      { title: "Éviter les rappels", body: "Vous pouvez éviter certains lieux, conversations, personnes, émotions ou situations parce qu’ils réveillent de la détresse ou de la peur." },
      { title: "Se sentir toujours en alerte", body: "Votre corps peut être tendu, vigilant, facilement surpris ou incapable de vraiment se détendre." },
      { title: "Engourdissement ou déconnexion", body: "Vous pouvez vous sentir loin de vous-même, de vos émotions, de vos relations ou de la vie que vous aimiez." },
      { title: "Honte, culpabilité ou auto-blâme", body: "Vous pouvez porter des croyances douloureuses sur vous-même, même lorsque ce qui est arrivé n’était pas votre faute." },
      { title: "Difficulté à faire confiance", body: "Le trauma peut rendre la proximité, la sécurité, les limites et la vulnérabilité émotionnelle complexes ou effrayantes." },
    ],
    extraListTitle: "Différents types de trauma que nous accompagnons",
    extraListIntro: "Le trauma peut prendre plusieurs formes et ne se présente pas de la même façon d’une personne à l’autre. Chez ChangeMoment Mental Health Center, nous soutenons notamment :",
    extraListItems: ["Trauma d’enfance", "Trauma d’attachement et relationnel", "Violence psychologique ou négligence", "Violence physique", "Trauma sexuel", "Violence familiale ou milieux familiaux très conflictuels", "Trauma lié à l’immigration ou au déplacement", "Trauma médical", "Trauma de naissance ou reproductif", "Deuil et perte traumatique", "Trauma lié à un accident", "Trauma ou intimidation au travail", "Trauma culturel, racial ou lié à l’identité", "Stress répété ou trauma complexe"],
    howTitle: "Notre approche de la guérison du trauma",
    howItems: [
      { title: "Construire la sécurité d’abord", body: "Nous commençons par vous aider à vous sentir plus ancré, soutenu et en sécurité émotionnelle, afin que le travail ne soit pas précipité." },
      { title: "Comprendre vos réponses traumatiques", body: "Ensemble, nous explorons comment le trauma peut toucher votre corps, vos émotions, vos pensées, vos relations et votre sentiment de vous-même." },
      { title: "Aller vers l’intégration et la guérison", body: "À votre rythme, nous vous soutenons pour traverser les expériences douloureuses, renforcer l’autocompassion et vous reconnecter aux parties de la vie que le trauma a interrompues." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès en counselling pour le trauma commence souvent par le sentiment d’être un peu moins seul et un peu plus en maîtrise de son monde intérieur. Vous pourriez comprendre vos réactions avec plus de compassion, remarquer vos déclencheurs plus tôt et vous sentir plus ancré lorsque la détresse apparaît. Avec le temps, le counselling peut aider les expériences douloureuses à être moins présentes au quotidien, laissant plus d’espace pour la sécurité, la confiance, le lien et l’espoir.",
    ctaTitle: "Prêt à commencer à guérir dans un espace qui respecte votre rythme, votre sécurité et votre histoire?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "درمان تروما در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "شما لایق رهایی از تجربه‌های دردناک هستید.",
    introTitle: "درمان تروما در مرکز سلامت روان ChangeMoment",
    introBody: "ما در خدمت افرادی هستیم که از آثار جسمی، روحی و ارتباطی تروماهای گذشته رنج می‌برند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات درمان حضوری تروما و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به مراجعان کمک می‌کنیم در بدن خود آرامش بیشتری تجربه کنند، واکنش‌ها و رفتارهای ناشی از تروما را بهتر بشناسند و با ریتمی متناسب شرایط خود، مسیر بهبودی را آغاز کنند. فارغ از اینکه ترومای شما به یک رویداد، آسیب‌های کودکی، تجربیات دردناک تکرارشونده، زخم‌های ارتباطی، فقدان یا مهاجرت مربوط باشد، تیم ما در فضایی امن، همدلانه، علمی و کاربردی کنار شماست تا داستان شما با احترام و امنیت شنیده و مراقبت شود.",
    whoTitle: "چه زمانی درمان تروما می‌تواند مفید باشد؟",
    whoItems: [
      { title: "گیر کردن در گذشته", body: "زمانی‌که خاطره‌ها، احساسات یا حس‌های بدنی مربوط به تجربه‌های دردناک هنوز زنده و حاضر هستند." },
      { title: "اجتناب از یادآورها", body: "زمانی‌که مجبورید از بعضی از افراد، مکان‌ها، مکالمات، احساسات یا موقعیت‌ها دوری کنید چون شما را دچار اضطراب یا ترس می‌کنند." },
      { title: "وضعیت آماده‌باش دائمی", body: "زمانی‌که بدن شما منقبض، محتاط یا ناتوان از آرام شدن کامل است." },
      { title: "بی‌حسی عاطفی یا قطع ارتباط", body: "زمانی‌که از خودتان، احساساتتان، رابطه‌هایتان یا زندگی‌ای که قبلاً دوست داشتید فاصله گرفته‌اید." },
      { title: "شرم، گناه یا سرزنش خود", body: "زمانی‌که درگیر باورهای دردناکی درباره خودتان هستید، با وجود اینکه آنچه اتفاق افتاده اصلا تقصیر شما نبوده است." },
      { title: "سختی در اعتماد به دیگران", body: "زمانی‌که تروما نزدیکی، امنیت، مرزها و آسیب‌پذیری عاطفی را پیچیده یا ترسناک کرده." },
    ],
    extraListTitle: "انواع تروماها:",
    extraListIntro: "تروما می‌تواند به شکل‌های مختلفی اتفاق بیفتد و تجربه آن برای همه یکسان نیست. در مرکز سلامت روان ChangeMoment، از مراجعان با تجربه‌های مختلف تروما مراقبت می‌کنیم، از جمله:",
    extraListItems: ["ترومای کودکی", "ترومای دلبستگی و ارتباطی", "سواستفاده عاطفی یا غفلت", "آزار جسمی", "ترومای جنسی", "خشونت خانگی یا محیط‌های خانوادگی پرتنش", "ترومای مهاجرت و جابه‌جایی", "ترومای پزشکی", "ترومای زایمان یا تجربه‌های باروری", "سوگ و فقدان", "ترومای ناشی از تصادف", "ترومای محیط کار یا قلدری", "ترومای فرهنگی، نژادی یا مرتبط با هویت", "ترومای پیچیده یا استرس مکرر"],
    howTitle: "رویکرد ما در بهبود تروما",
    howItems: [
      { title: "ساختن احساس امنیت", body: "ابتدا کمک می‌کنیم احساس ثبات، حمایت و امنیت عاطفی داشته باشید تا مطمئن باشیم فضای درمانی تروما برای شما شتاب‌زده یا طاقت‌فرسا نباشد." },
      { title: "کشف واکنش‌های ناشی از تروما", body: "با هم کشف می‌کنیم تروما چگونه ممکن است روی بدن، احساسات، افکار، روابط و حس شما نسبت به خودتان اثر گذاشته باشد." },
      { title: "حرکت به سوی یکپارچگی و بهبود", body: "به شما کمک می‌کنیم تجربیات دردناک را پردازش کنید، مهربانی با خود را تجربه کنید و دوباره به بخش‌هایی از زندگی که تروما از شما گرفته متصل شوید." },
    ],
    progressTitle: "پیشرفت در فرایند درمان تروما چگونه است؟",
    progressBody: "پیشرفت در درمان تروما با احساس تعلق بیشتر و مدیریت بهتر دنیای درونی آغاز می‌شود. به تدریج محرک‌های مربوط به تروما را زودتر تشخیص می‌دهید، پاسخ‌هایتان را بهتر درک می‌کنید، و حتی در صورت بروز آشفتگی، احساس ثبات دارید. با گذشت زمان، تراپی به شما کمک می‌کند این تجربیات دردناک در زندگی روزمره شما کمتر حاضر و مسلط باشند و فضای بیشتری برای تجربه امنیت، اعتماد، ارتباط و امید باشد.",
    ctaTitle: "آماده‌اید بهبودی را در فضایی امن شروع کنید که درک رنج شما در اولویت است؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const griefCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: { heroTitle: "Grief Counselling in Coquitlam, BC", heroIntro: "When loss changes your world, counselling can help you carry it with more support and care.", introTitle: "Grief Counselling at ChangeMoment Mental Health Center", introBody: "At ChangeMoment Mental Health Center, our grief counselling services support individuals who are navigating the pain of loss, whether it is the death of a loved one, the end of a relationship, a major life transition, a loss of identity, or a future that no longer looks the way you hoped. Our Registered Clinical Counsellors provide in-person grief counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients make space for sadness, confusion, anger, love, memory, and meaning. Grief does not follow one timeline, and our team offers a compassionate and evidence-informed space where your loss can be honoured without pressure to move on before you are ready.", whoTitle: "How Grief Can Show Up in Your Life", whoItems: [{ title: "Feeling overwhelmed by loss", body: "The sadness, shock, anger, guilt, or longing may feel too heavy to carry alone." }, { title: "Numbness or disconnection", body: "You may feel emotionally frozen, distant from others, or unable to fully take in what has happened." }, { title: "Difficulty returning to daily life", body: "Work, family responsibilities, sleep, appetite, or simple routines may feel much harder than before." }, { title: "Complicated feelings about the relationship", body: "Grief can feel confusing when the relationship included love, conflict, distance, regret, or unfinished conversations." }, { title: "Feeling pressured to be ok", body: "Others may expect you to move forward, while inside you still feel deeply affected by the loss." }, { title: "A loss that others do not fully recognize", body: "You may be grieving something private, invisible, or hard to explain, such as a relationship, fertility journey, home, identity, health, or sense of belonging." }], howTitle: "Our Approach to Grief Counselling", howItems: [{ title: "Settling the nervous system", body: "We begin by creating a steady and compassionate space where your emotions can be expressed and your fight-or-flight response can be gently addressed." }, { title: "Processing the stuck moments", body: "Together, we explore what this loss means to you, how it has changed your life, and what emotions, memories, or questions may still need care." }, { title: "Building a new narrative", body: "We support you in carrying your grief in a way that honours what mattered, while slowly reconnecting with life, relationships, and moments of meaning." }], progressTitle: "What Progress Can Look Like", progressBody: "Progress in grief counselling does not mean forgetting, replacing, or getting over what happened. It may look like breathing a little easier, feeling less alone with your pain, or finding words for emotions that once felt impossible to explain. Over time, counselling can help grief feel less overwhelming in daily life, while making room for memory, love, connection, and new meaning.", ctaTitle: "Let’s make space for your grief, your memories, and the life you are slowly learning to live now.", ctaButton: "Schedule a free consultation" },
  fr: { heroTitle: "Counselling pour le deuil à Coquitlam, BC", heroIntro: "Quand une perte bouleverse votre monde, le counselling peut vous aider à la porter avec plus de soutien et de douceur.", introTitle: "Le counselling pour le deuil chez ChangeMoment Mental Health Center", introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling pour le deuil soutiennent les personnes qui traversent la douleur d’une perte, qu’il s’agisse du décès d’un être cher, de la fin d’une relation, d’une grande transition de vie, d’une perte d’identité ou d’un avenir qui ne ressemble plus à ce que vous aviez espéré. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à faire de la place à la tristesse, à la confusion, à la colère, à l’amour, aux souvenirs et au sens. Le deuil ne suit pas un calendrier unique; votre perte peut être honorée sans pression d’avancer avant d’être prêt.", whoTitle: "Comment le deuil peut se manifester", whoItems: [{ title: "Être submergé par la perte", body: "La tristesse, le choc, la colère, la culpabilité ou le manque peuvent sembler trop lourds à porter seul." }, { title: "Engourdissement ou déconnexion", body: "Vous pouvez vous sentir figé émotionnellement, loin des autres ou incapable d’intégrer ce qui est arrivé." }, { title: "Difficulté à reprendre le quotidien", body: "Le travail, les responsabilités familiales, le sommeil, l’appétit ou les routines simples peuvent sembler plus difficiles." }, { title: "Sentiments complexes", body: "Le deuil peut être confus lorsque la relation contenait amour, conflit, distance, regret ou conversations inachevées." }, { title: "Pression d’aller bien", body: "Les autres peuvent s’attendre à ce que vous avanciez alors que la perte vous touche encore profondément." }, { title: "Une perte peu reconnue", body: "Vous pouvez pleurer quelque chose de privé ou invisible, comme une relation, un foyer, une identité, la santé ou un sentiment d’appartenance." }], howTitle: "Notre approche du counselling pour le deuil", howItems: [{ title: "Apaiser le système nerveux", body: "Nous créons un espace stable et compatissant où vos émotions peuvent être exprimées et accueillies." }, { title: "Traverser les moments bloqués", body: "Nous explorons ce que cette perte signifie, comment elle a changé votre vie et ce qui demande encore du soin." }, { title: "Construire un nouveau récit", body: "Nous vous aidons à porter votre deuil d’une façon qui honore ce qui a compté, tout en vous reconnectant à la vie." }], progressTitle: "À quoi peut ressembler le progrès", progressBody: "Le progrès ne signifie pas oublier ou dépasser ce qui est arrivé. Il peut ressembler à respirer plus facilement, se sentir moins seul avec sa douleur ou trouver des mots pour l’inexprimable. Avec le temps, le deuil peut prendre moins toute la place au quotidien, tout en laissant de l’espace aux souvenirs, à l’amour, au lien et au sens.", ctaTitle: "Faisons de la place à votre deuil, à vos souvenirs et à la vie que vous apprenez doucement à habiter.", ctaButton: "Planifier une consultation gratuite" },
  fa: { heroTitle: "مشاوره سوگ در کوکیتلام، بریتیش کلمبیا", heroIntro: "وقتی فقدان جهان شما را تغییر داده، مشاوره به شما کمک می‌کند آن را با حمایت و مراقبت بیشتری تجربه کنید.", introTitle: "مشاوره سوگ در مرکز سلامت روان ChangeMoment", introBody: "ما در خدمت افرادی هستیم که با درد فقدان روبه‌رو هستند؛ چه از دست دادن عزیز، پایان یک رابطه، تغییر بزرگ زندگی، از دست دادن بخشی از هویت یا آینده‌ای که دیگر شبیه رویاهای شما نیست. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری سوگ و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما کمک می‌کنیم برای تجربه غم، سردرگمی، خشم، عشق، خاطره و معنا آماده‌تر شوید. سوگ زمان‌بندی مشخصی ندارد و ما فقدان شما را بدون عجله برای بهبود، درک می‌کنیم و محترم می‌شماریم.", whoTitle: "سوگ چگونه می‌تواند در زندگی شما ظاهر شود؟", whoItems: [{ title: "سنگینی بیش از حد فقدان", body: "غم، شوک، خشم، احساس گناه یا دلتنگی ممکن است آن‌قدر سنگین باشد که تنها حمل کردنش سخت شود." }, { title: "بی‌حسی یا قطع ارتباط", body: "ممکن است از نظر عاطفی بی‌حس باشید، از دیگران فاصله بگیرید یا نتوانید آنچه رخ داده را کامل درک کنید." }, { title: "سختی در برگشتن به زندگی روزمره", body: "کار، مسئولیت‌های خانوادگی، خواب، تغذیه یا روتین‌های ساده ممکن است خیلی سخت‌تر از قبل شوند." }, { title: "احساسات پیچیده درباره رابطه", body: "وقتی رابطه ترکیبی از عشق، تعارض، فاصله، پشیمانی یا حرف‌های ناتمام بوده، سوگ می‌تواند گیج‌کننده شود." }, { title: "فشار برای خوب بودن", body: "دیگران ممکن است انتظار داشته باشند حالتان هرچه سریعتر خوب شود، در حالی که درونتان هنوز عمیقاً تحت تأثیر فقدان است." }, { title: "سوگی که دیگران نمی‌توانند ببینند", body: "ممکن است برای چیزی خصوصی، نامرئی یا غیر قابل توضیح سوگواری کنید؛ مثل رابطه، خانه، هویت، سلامت یا حس تعلق." }], howTitle: "رویکرد ما در مشاوره سوگ", howItems: [{ title: "آرام کردن سیستم عصبی", body: "ابتدا در فضایی امن، آرام و همدلانه به شما کمک می‌کنیم احساساتتان را تجربه و ابراز کنید تا پاسخ جنگ یا گریز بدن، بهبود یابد." }, { title: "رسیدگی به تجربیاتی که زندگی در آن متوقف شده", body: "با هم بررسی می‌کنیم این فقدان چه معنایی برای شما داشته، چگونه زندگیتان را تغییر داده و کدام خاطره‌ها یا پرسش‌ها هنوز نیاز به رسیدگی دارند." }, { title: "ساختن روایت تازه", body: "ما به شما کمک می‌کنیم روایت تازه‌ای از سوگ خلق کنید که در عین اینکه فقدان شما ارزشمند است، کم کم می‌توانید به جریان زندگی و روابط باز‌گردید." }], progressTitle: "پیشرفت در فرایند درمان سوگ و فقدان چگونه است؟", progressBody: "پیشرفت در درمان سوگ به معنای فراموش کردن آنچه رخ داده نیست. بلکه به معنای تنها نبودن با درد و بیان احساساتی است که پیش از آن، قابل توضیح دادن نبودند. با گذشت زمان، سوگ می‌تواند در زندگی روزمره جای خود را پیدا کند و همزمان فضا برای خاطره، عشق، ارتباط و معنای تازه باشد.", ctaTitle: "بیاید برای خاطره‌ها، سوگ و زندگی‌ کردن در لحظه اکنون آماده شویم.", ctaButton: "رزرو وقت مشاوره رایگان" },
};

const angerCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: { heroTitle: "Anger Management Counselling in Coquitlam, BC", heroIntro: "When anger feels bigger than you, counselling can help you respond with more calm, choice, and control.", introTitle: "Anger Management Counselling at ChangeMoment Mental Health Center", introBody: "At ChangeMoment Mental Health Center, our anger management counselling services support individuals who feel overwhelmed by anger, irritability, resentment, or emotional reactions that feel difficult to control. Our Registered Clinical Counsellors provide in-person anger management counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients understand what activates their anger, recognize early warning signs, and build healthier ways to express emotions without damaging relationships, work, or self-respect. Our team offers a compassionate space where anger is not treated as something bad, but as an important emotional signal that can be understood, regulated, and expressed more safely.", whoTitle: "Is Anger Starting to Affect Your Life or Relationships?", whoItems: [{ title: "Reacting before you can pause", body: "You may say or do things in the moment that you later regret, even when you did not mean to hurt others." }, { title: "Feeling easily irritated", body: "Small comments, delays, mistakes, or disagreements may feel bigger than they used to." }, { title: "Raising your voice or shutting down", body: "Anger may come out through yelling, criticism, sarcasm, silence, withdrawal, or emotional distance." }, { title: "Holding on to resentment", body: "You may replay what happened, feel treated unfairly, or struggle to let go of hurt and frustration." }, { title: "Tension in your body", body: "Anger may show up as a tight chest, clenched jaw, racing heart, restlessness, or difficulty relaxing." }, { title: "Conflict at home or work", body: "Anger may be affecting your relationship with your partner, children, family members, friends, coworkers, or yourself." }], howTitle: "Our Approach to Anger Management Counselling", howItems: [{ title: "Identifying your anger triggers", body: "We begin by exploring the situations, words, thoughts, body signals, or relationship patterns that tend to activate your anger, so you can recognize it earlier and respond before it takes over." }, { title: "Recognizing the anger cycle", body: "Together, we explore how anger builds from a trigger into body tension, intense thoughts, emotional reactions, and behaviours you may later regret, so you can interrupt the cycle earlier." }, { title: "Building calmer ways to respond", body: "We support you in developing practical tools for emotional regulation, clearer communication, repair after conflict, and healthier boundaries." }], progressTitle: "What Progress Can Look Like", progressBody: "Progress in anger management counselling may begin with noticing the first signs of anger before it becomes too intense. You may start to pause, breathe, step away, or choose your words more carefully. Over time, counselling can help you feel more in control of your reactions, express your needs without aggression or withdrawal, and repair relationships with more honesty, responsibility, and care.", ctaTitle: "Ready to turn anger into understanding, control, and healthier connection?", ctaButton: "Schedule a free consultation" },
  fr: { heroTitle: "Counselling en gestion de la colère à Coquitlam, BC", heroIntro: "Quand la colère semble plus grande que vous, le counselling peut vous aider à répondre avec plus de calme, de choix et de contrôle.", introTitle: "Le counselling en gestion de la colère chez ChangeMoment Mental Health Center", introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling en gestion de la colère soutiennent les personnes dépassées par la colère, l’irritabilité, le ressentiment ou des réactions émotionnelles difficiles à contrôler. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à comprendre ce qui active leur colère, reconnaître les premiers signes et développer des façons plus saines d’exprimer leurs émotions sans nuire aux relations, au travail ou au respect de soi.", whoTitle: "La colère commence-t-elle à affecter votre vie ou vos relations?", whoItems: [{ title: "Réagir avant de faire une pause", body: "Vous pouvez dire ou faire des choses que vous regrettez ensuite, même sans vouloir blesser." }, { title: "Se sentir facilement irrité", body: "De petites remarques, délais, erreurs ou désaccords peuvent sembler plus grands qu’avant." }, { title: "Hausser le ton ou se fermer", body: "La colère peut sortir par les cris, la critique, le sarcasme, le silence ou la distance émotionnelle." }, { title: "Garder du ressentiment", body: "Vous pouvez rejouer ce qui s’est passé ou avoir du mal à lâcher la blessure et la frustration." }, { title: "Tension dans le corps", body: "La colère peut se manifester par une poitrine serrée, la mâchoire crispée, le cœur qui bat vite ou l’agitation." }, { title: "Conflits à la maison ou au travail", body: "La colère peut toucher votre partenaire, vos enfants, votre famille, vos amis, vos collègues ou vous-même." }], howTitle: "Notre approche de la gestion de la colère", howItems: [{ title: "Identifier vos déclencheurs", body: "Nous explorons les situations, mots, pensées, signaux corporels ou schémas relationnels qui activent votre colère." }, { title: "Reconnaître le cycle de la colère", body: "Nous observons comment la colère passe d’un déclencheur à la tension, aux pensées intenses et aux comportements regrettés." }, { title: "Construire des réponses plus calmes", body: "Nous développons des outils de régulation émotionnelle, de communication claire, de réparation et de limites plus saines." }], progressTitle: "À quoi peut ressembler le progrès", progressBody: "Le progrès peut commencer lorsque vous remarquez les premiers signes avant que l’intensité monte trop. Vous pourriez apprendre à faire une pause, respirer, vous éloigner ou choisir vos mots avec plus de soin. Avec le temps, le counselling peut vous aider à exprimer vos besoins sans agressivité ni retrait et à réparer les relations avec plus d’honnêteté et de soin.", ctaTitle: "Prêt à transformer la colère en compréhension, en contrôle et en liens plus sains?", ctaButton: "Planifier une consultation gratuite" },
  fa: { heroTitle: "مشاوره مدیریت خشم در کوکیتلام، بریتیش کلمبیا", heroIntro: "وقتی خشم از شما قوی‌تر به نظر می‌رسد، مشاوره می‌تواند کمک کند با آرامش و کنترل بیشتری پاسخ بدهید.", introTitle: "مشاوره مدیریت خشم در مرکز سلامت روان ChangeMoment", introBody: "ما در کنار افرادی هستیم که در موقعیت‌های مختلف قادر به مدیریت خشم خود نیستند و این مساله زندگی و روابط آنان را تحت تاثیر قرار داده.  مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری مدیریت خشم و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به شما کمک کنیم که دریابید چه چیزهایی خشم شما را برانگیخته می‌کند، نشانه‌های اولیه بروز پرخاشگری را زودتر تشخیص دهید و بدون آسیب زدن به روابط و تصویر خود، راههای سالم‌تری برای بیان خشم خود یاد بگیرید.", whoTitle: "آیا خشم زندگی یا روابط شما را تحت تاثیر قرار داده؟", whoItems: [{ title: "واکنش بدون فکر", body: "در لحظه چیزهایی بدون فکر می‌گویید یا کارهایی می‌کنید که بعداً پشیمان می‌شوید، حتی اگر قصد آسیب زدن نداشته باشید." }, { title: "زود تحریک شدن", body: "حرفهای ساده، تأخیرها، اشتباهات یا اختلاف‌نظرها بدتر از واقعیتشان احساس می‌شوند." }, { title: "بالا بردن صدا یا ساکت شدن", body: "خشم به شکل فریاد، انتقاد، کنایه، سکوت، عقب‌نشینی یا فاصله عاطفی بروز می‌کند." }, { title: "نگه داشتن رنجش", body: "هر اتفاقی را بارها مرور می‌کنید و نمی‌توانید درد و رنج را رها کنید." }, { title: "تنش در بدن", body: "خشم می‌تواند به شکل فشار در قفسه سینه، فک منقبض، تپش قلب، بی‌قراری یا سختی در آرام شدن ظاهر شود." }, { title: "بحران در خانه یا کار", body: "خشم روی رابطه با پارتنر، فرزندان، خانواده، دوستان، همکاران یا حتی خودتان اثر گذاشته." }], howTitle: "رویکرد ما در مشاوره مدیریت خشم", howItems: [{ title: "شناخت محرک‌های خشم", body: "ابتدا موقعیت‌ها، کلمه‌ها، افکار، نشانه‌های بدنی یا الگوهای ارتباطی را کشف می‌کنیم که خشم شما را تحریک می‌کنند." }, { title: "شناخت چرخه خشم", body: "با هم می‌بینیم خشم چگونه از یک محرک به تنش بدنی، افکار مخرب و رفتارهای ناسالمی می‌رسد که ممکن است بعداً پشیمانی بیاورند." }, { title: "ساختن پاسخ‌های آرام‌تر", body: "کمک می‌کنیم ابزارهای عملی برای تنظیم هیجان، ارتباط شفاف‌تر، ترمیم پس از شکست و مرزهای سالم‌تر بسازید." }], progressTitle: "پیشرفت در فرایند درمان مدیریت خشم چگونه است؟", progressBody: "پیشرفت با تشخیص اولین نشانه‌های خشم قبل از بروز پرخاشگری شروع می‌شود. یاد می‌گیرید مکث کنید، نفس بکشید، فاصله بگیرید و کلماتتان را با دقت بیشتری انتخاب کنید. با گذشت زمان، تراپی کمک می‌کند کنترل بیشتری روی واکنش‌هایتان داشته باشید و رابطه‌ها را با صداقت، مسئولیت‌پذیری و مراقبت بیشتری ترمیم کنید.", ctaTitle: "آماده‌اید خشم را به درک، کنترل و ارتباط سالم‌تر تبدیل کنید؟", ctaButton: "رزرو وقت مشاوره رایگان" },
};


const adhdCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "ADHD Counselling in Coquitlam, BC",
    heroIntro: "When your mind feels scattered, counselling can help you build clarity, structure, and self-understanding.",
    introTitle: "ADHD Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our ADHD counselling services support individuals who struggle with focus, procrastination, emotional overwhelm, restlessness, impulsivity, time management, or difficulty following through. Our Registered Clinical Counsellors provide in-person ADHD counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients understand how ADHD symptoms may be affecting their work, school, relationships, self-esteem, and daily life. Whether you have an ADHD diagnosis, are waiting for an assessment, or are wondering if ADHD may be part of your experience, our team offers a professional space to build insight, practical strategies, and a kinder relationship with yourself.",
    whoTitle: "Symptoms of ADHD",
    whoItems: [
      { title: "Difficulty starting or finishing tasks", body: "You may know what needs to be done, but still feel stuck, delayed, distracted, or unable to begin." },
      { title: "Procrastination and time blindness", body: "Time may feel hard to estimate, deadlines may sneak up on you, or simple tasks may take much longer than expected." },
      { title: "Disorganization and forgetfulness", body: "You may lose track of appointments, messages, paperwork, bills, belongings, or the many small steps needed to keep life organized." },
      { title: "Emotional overwhelm", body: "Stress, criticism, rejection, conflict, or disappointment may feel intense and difficult to regulate." },
      { title: "Impulsivity or restlessness", body: "You may interrupt, act quickly, spend impulsively, feel physically restless, or struggle to slow your thoughts down." },
      { title: "Low self-esteem and self-criticism", body: "Years of feeling lazy, too much, behind, or not trying hard enough may have affected how you see yourself." },
    ],
    howTitle: "Our Approach to ADHD Counselling",
    howItems: [
      { title: "Understanding your ADHD patterns", body: "We begin by exploring how attention, energy, motivation, emotions, routines, and executive functioning show up in your everyday life." },
      { title: "Building realistic systems that work for you", body: "Together, we develop practical tools for planning, prioritizing, time management, emotional regulation, communication, and follow-through, without relying on shame or pressure." },
      { title: "Strengthening self-trust and self-compassion", body: "We support you in moving away from self-blame and toward a more accurate understanding of your brain, your needs, and the supports that help you function." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in ADHD counselling may begin with understanding yourself in a new way. You may start to notice patterns earlier, create routines that feel more realistic, and respond to challenges with less shame. Over time, counselling can help you feel more organized, more emotionally steady, and more capable of managing daily life in a way that fits your brain, not someone else’s expectations.",
    ctaTitle: "Ready to work with your brain instead of constantly fighting against it?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling pour le TDAH à Coquitlam, BC",
    heroIntro: "Quand votre esprit semble éparpillé, le counselling peut vous aider à bâtir clarté, structure et compréhension de vous-même.",
    introTitle: "Le counselling pour le TDAH chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling pour le TDAH soutiennent les personnes qui vivent des difficultés de concentration, de procrastination, de débordement émotionnel, d’agitation, d’impulsivité, de gestion du temps ou de suivi des tâches. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à comprendre comment les symptômes du TDAH peuvent toucher le travail, les études, les relations, l’estime de soi et le quotidien. Que vous ayez un diagnostic, attendiez une évaluation ou vous demandiez si le TDAH fait partie de votre expérience, notre équipe offre un espace professionnel pour développer de la clarté, des stratégies concrètes et une relation plus douce avec vous-même.",
    whoTitle: "Symptômes du TDAH",
    whoItems: [
      { title: "Difficulté à commencer ou terminer", body: "Vous pouvez savoir quoi faire, mais vous sentir bloqué, retardé, distrait ou incapable de commencer." },
      { title: "Procrastination et perception du temps", body: "Le temps peut être difficile à estimer, les échéances peuvent arriver soudainement ou les tâches simples prendre beaucoup plus longtemps que prévu." },
      { title: "Désorganisation et oublis", body: "Vous pouvez perdre le fil des rendez-vous, messages, papiers, factures, objets ou petites étapes nécessaires au quotidien." },
      { title: "Débordement émotionnel", body: "Le stress, la critique, le rejet, le conflit ou la déception peuvent sembler très intenses et difficiles à réguler." },
      { title: "Impulsivité ou agitation", body: "Vous pouvez interrompre, agir vite, dépenser impulsivement, vous sentir agité ou avoir du mal à ralentir vos pensées." },
      { title: "Faible estime de soi", body: "Des années à vous sentir paresseux, trop intense, en retard ou pas assez volontaire peuvent avoir affecté votre image de vous-même." },
    ],
    howTitle: "Notre approche du counselling pour le TDAH",
    howItems: [
      { title: "Comprendre vos schémas TDAH", body: "Nous explorons comment l’attention, l’énergie, la motivation, les émotions, les routines et les fonctions exécutives apparaissent dans votre quotidien." },
      { title: "Créer des systèmes réalistes", body: "Ensemble, nous développons des outils pour planifier, prioriser, gérer le temps, réguler les émotions, communiquer et aller au bout des choses sans honte ni pression." },
      { title: "Renforcer la confiance en soi", body: "Nous vous aidons à sortir du blâme et à mieux comprendre votre cerveau, vos besoins et les soutiens qui vous aident à fonctionner." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès peut commencer par une nouvelle compréhension de vous-même. Vous pourriez repérer vos schémas plus tôt, créer des routines plus réalistes et répondre aux défis avec moins de honte. Avec le temps, le counselling peut vous aider à vous sentir plus organisé, plus stable émotionnellement et plus capable de gérer la vie quotidienne d’une façon qui respecte votre cerveau.",
    ctaTitle: "Prêt à travailler avec votre cerveau au lieu de lutter constamment contre lui?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "درمان ADHD در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "وقتی ذهن شما پراکنده و شلوغ است، مشاوره می‌تواند کمک کند وضوح، ساختار و شناخت بهتری از خود بسازید.",
    introTitle: "درمان ADHD در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز ChangeMoment ما در کنار افرادی هستیم که از ADHD (اختلال نقص توجه و بیش‌فعالی) رنج می‌برند و درگیر بی‌قراری، تکانشگری، آشفتگی عاطفی، مشکل در مدیریت زمان، دائما عقب انداختن کارها و غیره هستند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، درمان حضوری ADHD و در سراسر بریتیش کلمبیا جلسات درمان آنلاین ارائه می‌دهند. ما به شما کمک می کنیم دریابید علائم ADHD (اختلال نقص توجه و بیش فعالی)  چگونه عزت نفس، روابط، کار ، تحصیل و زندگی روزمره شما را تحت تاثیر قرار می‌دهد.  در صورتی که تشخیص ADHD (اختلال نقص توجه و بیش فعالی) گرفته باشید، یا منتظر وقت ارزیابی باشید یا خودتان فکر کنید دچار ADHD هستید، تیم ما در فضایی حرفه‌ای و همدلانه کنار شماست تا به درک عمیق‌تر، راهکارهای کاربردی و ارتباطی مهربان‌تر با خودتان دست یابید.",
    whoTitle: "علائم و نشانه‌های ADHD (اختلال نقص توجه و بیش‌فعالی)",
    whoItems: [
      { title: "سختی در شروع کردن یا تمام کردن کارها", body: "ممکن است بدانید چه کاری باید انجام شود، اما همچنان گیر کنید، عقب بیفتید، حواس‌تان پرت شود یا نتوانید شروع کنید." },
      { title: "عقب انداختن کارها و گم کردن زمان", body: "تخمین زمان ممکن است سخت باشد، موعدها ناگهان برسند یا کارهای ساده خیلی بیشتر از انتظار طول بکشند." },
      { title: "بی‌نظمی و فراموشی", body: "ممکن است قرارها، پیام‌ها، مدارک، قبض‌ها، وسایل یا قدم‌های کوچک لازم برای نظم دادن به زندگی از دستتان در برود." },
      { title: "آشفتگی عاطفی", body: "استرس، انتقاد، طرد شدن، تعارض یا ناامیدی ممکن است باعث شود تنظیم احساس دشوار شود." },
      { title: "تکانشگری یا بی‌قراری", body: "ممکن است وسط حرف بپرید، سریع عمل کنید، از نظر جسمی بی‌قرار باشید یا نتوانید روند افکارتان را آرام کنید." },
      { title: "عزت‌نفس پایین و خودسرزنشی", body: "سال‌ها شنیدن یا حس کردن اینکه تنبل، ضعیف یا کم‌تلاش هستید می‌تواند روی نگاهتان به خودتان اثر گذاشته باشد." },
    ],
    howTitle: "رویکرد ما در درمان ADHD",
    howItems: [
      { title: "شناخت الگوهای ADHD شما", body: "ابتدا کشف می‌کنیم توجه، انرژی، انگیزه، احساسات، روتین‌ها و عملکرد اجرایی در زندگی روزمره شما چگونه ظاهر می‌شوند." },
      { title: "ساختن سیستم‌های واقعی و مناسب شما", body: "با هم ابزارهایی برای برنامه‌ریزی، اولویت‌بندی، مدیریت زمان، تنظیم هیجان، ارتباط و پیگیری کارها می‌سازیم؛ تا به تدریج از مکانیزم‌های مخربی مثل شرم و اجبار رها شوید." },
      { title: "تقویت اعتماد و مهربانی با خود", body: "کمک می‌کنیم از سرزنش خود پرهیز کنید و درک دقیق‌تری از دنیای درونیتان پیدا کنید که به عملکرد بهتر شما کمک می‌کنند." },
    ],
    progressTitle: "پیشرفت در فرایند درمان ADHD چگونه است؟",
    progressBody: "پیشرفت در درمان نقص توجه و بیش‌فعالی ابتدا با شناخت بهتر خود آغاز می‌شود. به تدریج می‌توانید الگوها را بهتر ببینید، روتین‌های واقعی‌تری برای خود بسازید و با تجربه شرم کمتری به چالش‌های روزمره پاسخ دهید. با گذشت زمان، تراپی به شما کمک می‌کند منظم‌تر، به لحاظ عاطفی باثبات‌تر و در مدیریت زندگی روزمره توانمندتر باشید.",
    ctaTitle: "آماده‌اید به جای جنگیدن دائمی با مغزتان، با آن همکاری کنید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const pregnancyCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "Pregnancy & Postpartum Counselling in Coquitlam, BC",
    heroIntro: "You deserve care, support, and steadiness through pregnancy, birth, and early parenthood.",
    introTitle: "Pregnancy & Postpartum Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our pregnancy and postpartum counselling services support parents who are navigating the emotional changes, pressure, uncertainty, and identity shifts that can come with pregnancy, birth, and the first year after having a baby. Our Registered Clinical Counsellors provide in-person pregnancy and postpartum counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients understand postpartum depression, postpartum anxiety, perinatal mental health concerns, relationship stress, birth experiences, and the emotional weight of becoming a parent. Our team offers a compassionate and evidence-informed space where you can feel supported without judgment, whether this season feels joyful, overwhelming, lonely, confusing, or far from what you expected.",
    whoTitle: "When Pregnancy & Postpartum Counselling may be helpful ?",
    whoItems: [
      { title: "Persistent sadness or low mood", body: "You may feel tearful, empty, hopeless, or unlike yourself for longer than you expected." },
      { title: "Postpartum anxiety or constant worry", body: "Your mind may feel busy with fears about the baby, your health, parenting, the future, or whether you are doing enough." },
      { title: "Irritability or emotional overwhelm", body: "Small things may feel too much, and emotions may shift quickly from anger to guilt, fear, sadness, or numbness." },
      { title: "Feeling disconnected from yourself or your baby", body: "You may love your baby and still feel distant, detached, confused, or unsure why bonding does not feel the way you imagined." },
      { title: "Guilt, shame, or pressure to be happy", body: "You may feel judged by the idea that this should be the happiest time, while inside you are struggling." },
      { title: "Relationship and identity changes", body: "Pregnancy and postpartum can affect your sense of self, your partnership, intimacy, family roles, and how supported you feel." },
    ],
    extraBodyTitle: "What Is Normal, and When Is Extra Support Needed?",
    extraBodyPlacement: "beforeHow",
    extraBody: "It is common to feel emotional, tired, tearful, or overwhelmed during pregnancy and after birth, especially with major hormonal changes, sleep disruption, and the responsibility of caring for a baby. Extra support may be needed when sadness, anxiety, irritability, numbness, intrusive worries, or disconnection feel persistent, intense, or begin to interfere with daily life, bonding, relationships, sleep, or your ability to feel like yourself. You do not need to wait until things feel unbearable before reaching out. Early counselling can help you understand what is happening, reduce isolation, strengthen coping, and support your emotional connection with yourself, your baby, and your relationships.",
    howTitle: "Our Approach to Pregnancy & Postpartum Counselling",
    howItems: [
      { title: "Creating a steady space for you", body: "We begin by offering a calm, non-judgmental space where you can speak honestly about what this season has really felt like." },
      { title: "Understanding the emotional and relational changes", body: "Together, we explore how pregnancy, birth, parenting, identity, sleep, support, culture, family expectations, and relationship dynamics may be affecting your mental health." },
      { title: "Building support, coping, and connection", body: "We support you in developing realistic coping tools, self-compassion, clearer communication, and a stronger sense of connection with yourself, your baby, and your support system." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in pregnancy and postpartum counselling may begin with feeling less alone and less ashamed of what you are experiencing. You may start to understand your emotions more clearly, ask for support with more confidence, feel more grounded in your body, or respond to difficult moments with more care toward yourself. Over time, counselling can help you feel steadier, more connected, and more supported as you move through pregnancy, birth, and parenthood.",
    ctaTitle: "Ready to feel more supported in this tender and life-changing season?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling grossesse et post-partum à Coquitlam, BC",
    heroIntro: "Vous méritez du soin, du soutien et de la stabilité pendant la grossesse, la naissance et les débuts de la parentalité.",
    introTitle: "Le counselling grossesse et post-partum chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling grossesse et post-partum soutiennent les parents qui traversent les changements émotionnels, la pression, l’incertitude et les bouleversements identitaires liés à la grossesse, à la naissance et à la première année avec un bébé. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à comprendre la dépression post-partum, l’anxiété post-partum, les préoccupations de santé mentale périnatale, le stress relationnel, les expériences de naissance et le poids émotionnel de devenir parent. Notre équipe offre un espace compatissant où vous pouvez vous sentir soutenu sans jugement.",
    whoTitle: "Quand le counselling grossesse et post-partum peut être utile",
    whoItems: [
      { title: "Tristesse persistante ou humeur basse", body: "Vous pouvez vous sentir souvent en larmes, vide, sans espoir ou différent de vous-même plus longtemps que prévu." },
      { title: "Anxiété post-partum ou inquiétude constante", body: "Votre esprit peut être rempli de peurs au sujet du bébé, de votre santé, de la parentalité, de l’avenir ou de ne pas en faire assez." },
      { title: "Irritabilité ou débordement émotionnel", body: "De petites choses peuvent sembler trop lourdes, et les émotions peuvent passer vite de la colère à la culpabilité, la peur, la tristesse ou l’engourdissement." },
      { title: "Déconnexion de vous-même ou du bébé", body: "Vous pouvez aimer votre bébé et pourtant vous sentir distant, détaché, confus ou surpris que le lien ne ressemble pas à ce que vous imaginiez." },
      { title: "Culpabilité, honte ou pression d’être heureux", body: "Vous pouvez vous sentir jugé par l’idée que ce devrait être la période la plus heureuse, alors qu’à l’intérieur vous luttez." },
      { title: "Changements relationnels et identitaires", body: "La grossesse et le post-partum peuvent toucher votre identité, votre couple, l’intimité, les rôles familiaux et votre sentiment d’être soutenu." },
    ],
    extraBodyTitle: "Qu’est-ce qui est normal, et quand demander plus de soutien?",
    extraBodyPlacement: "beforeHow",
    extraBody: "Il est courant de se sentir émotif, fatigué, en larmes ou dépassé pendant la grossesse et après la naissance, surtout avec les changements hormonaux, le manque de sommeil et la responsabilité de prendre soin d’un bébé. Un soutien supplémentaire peut être nécessaire lorsque la tristesse, l’anxiété, l’irritabilité, l’engourdissement, les inquiétudes intrusives ou la déconnexion deviennent persistants, intenses ou interfèrent avec la vie quotidienne, le lien, les relations, le sommeil ou votre capacité à vous sentir vous-même. Vous n’avez pas besoin d’attendre que la situation devienne insupportable avant de demander de l’aide.",
    howTitle: "Notre approche du counselling grossesse et post-partum",
    howItems: [
      { title: "Créer un espace stable pour vous", body: "Nous offrons d’abord un espace calme et sans jugement où vous pouvez parler honnêtement de ce que cette période représente vraiment." },
      { title: "Comprendre les changements", body: "Ensemble, nous explorons comment la grossesse, la naissance, le rôle parental, l’identité, le sommeil, le soutien, la culture, les attentes familiales et la relation affectent votre santé mentale." },
      { title: "Bâtir soutien et connexion", body: "Nous vous aidons à développer des outils réalistes, l’autocompassion, une communication plus claire et un lien plus solide avec vous-même, votre bébé et votre réseau." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès peut commencer par se sentir moins seul et moins honteux de ce que vous vivez. Vous pourriez mieux comprendre vos émotions, demander du soutien avec plus de confiance, vous sentir plus ancré dans votre corps ou répondre aux moments difficiles avec plus de douceur envers vous-même. Avec le temps, le counselling peut vous aider à vous sentir plus stable, plus connecté et mieux soutenu.",
    ctaTitle: "Prêt à vous sentir mieux soutenu dans cette période tendre et transformante?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره بارداری و پس از زایمان در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "شما در مسیر بارداری، تولد و روزهای نخستین والد شدن، شایسته مراقبت، حمایت و ثبات هستید.",
    introTitle: "مشاوره بارداری و پس از زایمان در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات مشاوره بارداری و پس از زایمان از والدینی مراقبت می‌کند که با تغییرات عاطفی، اضطراب و تغییر هویت در دوران بارداری، زایمان و سال اول بعد از تولد نوزاد روبه‌رو هستند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات مشاوره حضوری بارداری و پس از زایمان و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به مراجعان کمک می‌کنیم افسردگی پس از زایمان، اضطراب پس از زایمان، دغدغه‌های سلامت روان والدگری، فشار رابطه، تجربه زایمان و سنگینی عاطفی والد شدن را بهتر بفهمند و راحت‌تر تجربه کنند. این فضا همدلانه و بدون قضاوت است؛ فارغ از اینکه این دوره برایتان شیرین، تلخ، سخت یا دور از انتظار باشد.",
    whoTitle: "چه زمانی مشاوره بارداری و پس از زایمان می‌تواند مفید باشد؟",
    whoItems: [
      { title: "غم ماندگار یا افت خلق", body: "زمانی‌که بیش از انتظار گریه‌تان می‌گیرد و احساس خالی بودن، ناامیدی یا دور شدن از خودتان دارید." },
      { title: "اضطراب پس از زایمان یا نگرانی دائمی", body: "زمانی‌که ذهنتان دائما درگیر ترس‌هایی درباره سلامت خودتان و نوزاد، والدگری، آینده یا کافی بودن شماست." },
      { title: "تحریک‌پذیری یا آشفتگی عاطفی", body: "زمانی‌که چیزهای کوچک خیلی بزرگ به نظر می‌رسند و احساسات سریع از خشم به گناه، ترس، غم یا بی‌حسی تغییر می‌کنند." },
      { title: "قطع ارتباط با خود یا نوزاد", body: "زمانی‌که نوزادتان را دوست دارید اما همچنان احساس فاصله، گیجی یا ابهام درباره پیوند با او دارید." },
      { title: "احساس گناه، شرم یا فشار برای خوشحال بودن", body: "زمانی‌که زیر فشار این باور هستید که این باید شادترین دوره زندگی شما باشد، در حالی که تجربه درونی‌تان کاملا متفاوت است." },
      { title: "تغییرات رابطه و هویت", body: "زمانی‌که بارداری و دوره پس از زایمان روی حس شما از خود، رابطه زوجی، صمیمیت و نقش‌های خانوادگی اثر گذاشته." },
    ],
    extraBodyTitle: "در دوران بارداری و پس از زایمان چه چیزی طبیعی است و چه زمانی نیاز به کمک دارید؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "در دوران بارداری و پس از تولد، احساساتی بودن، خستگی، گریه یا آشفتگی تا حدی طبیعی است؛ به‌خصوص با تغییرات هورمونی، کم‌خوابی و مسئولیت سنگین مراقبت از نوزاد. اما وقتی غم، اضطراب، تحریک‌پذیری، بی‌حسی، نگرانی‌های مزاحم یا قطع ارتباط، برای شما ماندگار، شدید یا مختل‌کننده زندگی روزمره و پیوند با نوزاد می‌شود، نیاز به کمک حرفه‌ای دارید. لازم نیست صبر کنید تا همه چیز غیرقابل‌تحمل شود. کمک گرفتن به‌موقع قدمی بزرگ برای مراقبت از خودتان و خانواده‌تان است.",
    howTitle: "رویکرد ما در مشاوره بارداری و پس از زایمان",
    howItems: [
      { title: "ساختن فضایی باثبات برای شما", body: "ابتدا فضایی آرام و بدون قضاوت فراهم می‌کنیم تا بتوانید صادقانه درباره احساسات واقعی این دوران حرف بزنید." },
      { title: "درک تغییرات عاطفی و ارتباطی", body: "با هم بررسی می‌کنیم بارداری، زایمان، والدگری، هویت، فرهنگ، انتظارهای خانواده و رابطه چگونه  سلامت روان شما را تحت تاثیر قرار داده." },
      { title: "ساختن حمایت، مهارت و ارتباط", body: "کمک می‌کنیم مهربانی با خود، ارتباط روشن‌تر و پیوند قوی‌تر با خودتان، نوزاد و سیستم حمایتی‌تان را یاد بگیرید و تمرین کنید." },
    ],
    progressTitle: "پیشرفت در فرایند مشاوره دوران بارداری و پس از زایمان چگونه است؟",
    progressBody: "پیشرفت با بهبود احساس انزوا و شرم نسبت به تجربه‌تان آغاز می‌شود. احساساتتان را بهتر درک می‌کنید، در بدن خود ثبات بیشتری حس می‌کنید، از دیگران راحت‌تر درخواست کمک می‌کنید و در لحظه‌های سخت، از خودتان مراقبت بیشتری می‌کنید. با گذشت زمان، تراپی به شما کمک می‌کند در سفر بارداری، زایمان و والد شدن، احساس ثبات، حمایت و پیوند بیشتری داشته باشید.",
    ctaTitle: "آماده‌اید در این فصل حساس و دگرگون‌کننده، حمایت بیشتری دریافت کنید؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const lgbtqCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "LGBTQ+ Counselling in Coquitlam, BC",
    heroIntro: "A respectful space to feel seen, supported, and fully yourself.",
    introTitle: "LGBTQ+ Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our LGBTQ+ counselling services offer an affirming and confidential space for individuals and couples exploring identity, relationships, family dynamics, emotional health, and life transitions. Our Registered Clinical Counsellors provide in-person LGBTQ+ counselling in Coquitlam, BC, and online counselling across British Columbia, supporting clients with care that respects sexual orientation, gender identity, culture, relationships, and lived experience. Whether you are seeking support around anxiety, depression, coming out, self-acceptance, family conflict, relationship stress, discrimination, or simply wanting a counselling space where you do not have to explain or defend who you are, our team is here to meet you with warmth and respect.",
    whoTitle: "Common Concerns LGBTQ+ Counselling Can Support",
    whoItems: [
      { title: "Identity exploration and self-acceptance", body: "You may be exploring who you are, how you want to express yourself, or what it means to feel more at home in your identity." },
      { title: "Coming out or choosing not to come out", body: "You may be navigating when, how, or whether to share parts of your identity with family, friends, work, or community." },
      { title: "Family or cultural conflict", body: "You may feel caught between your identity, family expectations, cultural values, religion, or fear of rejection." },
      { title: "Relationship and dating concerns", body: "You may be navigating communication, trust, intimacy, boundaries, attachment, or relationship structures." },
      { title: "Discrimination and minority stress", body: "Experiences of stigma, exclusion, misgendering, homophobia, transphobia, or feeling unsafe can take a real emotional toll." },
      { title: "Shame, self-doubt, or loneliness", body: "You may feel isolated, misunderstood, or tired from carrying parts of yourself alone." },
    ],
    extraBodyTitle: "Understanding the Ongoing Challenges for LGBTQ+ People",
    extraBodyPlacement: "beforeHow",
    extraBody: "LGBTQ+ people may face stressors that are not always visible to others, including discrimination, rejection, safety concerns, pressure to hide parts of themselves, or the emotional labour of constantly explaining their identity. These experiences can affect self-esteem, relationships, trust, belonging, and mental health. Counselling can offer a space to name these pressures clearly, understand their impact, and reconnect with your own voice, needs, and sense of worth. Anxiety and depression can affect anyone, but LGBTQ+ clients may also carry the added weight of rejection, discrimination, concealment, family conflict, or feeling unsafe in certain spaces. The goal is not to reduce your experience to your identity, but to understand the full context of your life with care and respect.",
    howTitle: "What to Expect from LGBTQ+ Therapy in Coquitlam",
    howItems: [
      { title: "Identity affirmation and self-understanding", body: "Counselling can support you in exploring your identity, strengthening self-acceptance, working through shame, and feeling more grounded in who you are." },
      { title: "Trans and non-binary support", body: "Our counsellors provide respectful support around gender identity, pronouns, social transition, family conversations, body-related stress, emotional safety, and navigating systems that may not always feel affirming." },
      { title: "Relationship and family counselling", body: "We support LGBTQ+ clients and couples with dating, intimacy, communication, boundaries, family conflict, cultural expectations, coming out conversations, and rebuilding connection with important people in their lives." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in LGBTQ+ counselling may begin with feeling less alone and less guarded. You may start to feel safer naming your needs, setting boundaries, understanding your emotions, or showing up more honestly in your relationships. Over time, counselling can help you feel more grounded in who you are, more connected to supportive people, and more able to move through life with confidence, self-respect, and belonging.",
    ctaTitle: "Ready to begin counselling in a space where every part of you is welcome?",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling LGBTQ+ à Coquitlam, BC",
    heroIntro: "Un espace respectueux pour vous sentir vu, soutenu et pleinement vous-même.",
    introTitle: "Le counselling LGBTQ+ chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling LGBTQ+ offrent un espace affirmatif et confidentiel aux personnes et aux couples qui explorent l’identité, les relations, la dynamique familiale, la santé émotionnelle et les transitions de vie. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, avec une approche qui respecte l’orientation sexuelle, l’identité de genre, la culture, les relations et l’expérience vécue. Que vous cherchiez du soutien pour l’anxiété, la dépression, le coming out, l’acceptation de soi, un conflit familial, le stress relationnel, la discrimination ou simplement un espace où vous n’avez pas à expliquer ni défendre qui vous êtes, notre équipe vous accueille avec chaleur et respect.",
    whoTitle: "Ce que le counselling LGBTQ+ peut soutenir",
    whoItems: [
      { title: "Exploration de l’identité", body: "Vous pouvez explorer qui vous êtes, comment vous souhaitez vous exprimer ou ce qui vous aide à vous sentir chez vous dans votre identité." },
      { title: "Coming out ou choix de ne pas le faire", body: "Vous pouvez naviguer quand, comment ou si vous souhaitez partager certaines parties de votre identité." },
      { title: "Conflits familiaux ou culturels", body: "Vous pouvez vous sentir pris entre votre identité, les attentes familiales, les valeurs culturelles, la religion ou la peur du rejet." },
      { title: "Relations et fréquentations", body: "Vous pouvez travailler la communication, la confiance, l’intimité, les limites, l’attachement ou les structures relationnelles." },
      { title: "Discrimination et stress minoritaire", body: "La stigmatisation, l’exclusion, le mégenrage, l’homophobie, la transphobie ou l’insécurité peuvent peser lourd émotionnellement." },
      { title: "Honte, doute ou solitude", body: "Vous pouvez vous sentir isolé, incompris ou fatigué de porter seul certaines parties de vous-même." },
    ],
    extraBodyTitle: "Comprendre les défis vécus par les personnes LGBTQ+",
    extraBodyPlacement: "beforeHow",
    extraBody: "Les personnes LGBTQ+ peuvent vivre des facteurs de stress peu visibles pour les autres : discrimination, rejet, enjeux de sécurité, pression de cacher des parties de soi ou fatigue d’expliquer constamment son identité. Ces expériences peuvent toucher l’estime de soi, les relations, la confiance, l’appartenance et la santé mentale. Le counselling offre un espace pour nommer ces pressions, comprendre leur impact et retrouver votre voix, vos besoins et votre valeur. L’anxiété et la dépression peuvent toucher tout le monde, mais les clients LGBTQ+ peuvent aussi porter le poids du rejet, de la discrimination, du secret, du conflit familial ou du manque de sécurité dans certains espaces.",
    howTitle: "À quoi s’attendre du counselling LGBTQ+ à Coquitlam",
    howItems: [
      { title: "Affirmation de l’identité", body: "Le counselling peut soutenir l’exploration de votre identité, renforcer l’acceptation de soi, traverser la honte et vous aider à vous sentir plus ancré." },
      { title: "Soutien trans et non binaire", body: "Nos conseillers offrent un soutien respectueux autour de l’identité de genre, des pronoms, de la transition sociale, des conversations familiales, du stress corporel et de la sécurité émotionnelle." },
      { title: "Counselling relationnel et familial", body: "Nous soutenons les clients et couples LGBTQ+ autour de l’intimité, la communication, les limites, les conflits familiaux, les attentes culturelles et les conversations de coming out." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès peut commencer par se sentir moins seul et moins sur ses gardes. Vous pourriez vous sentir plus en sécurité pour nommer vos besoins, poser des limites, comprendre vos émotions ou vous présenter plus honnêtement dans vos relations. Avec le temps, le counselling peut vous aider à vous sentir plus ancré dans qui vous êtes, plus connecté aux personnes soutenantes et plus capable d’avancer avec confiance, respect de soi et appartenance.",
    ctaTitle: "Prêt à commencer dans un espace où chaque partie de vous est bienvenue?",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره LGBTQ+ در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "فضایی محترمانه و همدلانه برای اینکه خود واقعی شما دیده و فهمیده شود.",
    introTitle: "مشاوره LGBTQ+ در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات مشاوره LGBTQ+ فضایی تأییدگر و محرمانه برای افراد و زوج‌هایی فراهم می‌کند که با هویت، روابط، داینامیک خانواده، سلامت روان و تغییرات زندگی درگیرند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، جلسات مشاوره حضوری LGBTQ+ و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. فرایند مشاوره ما با احترام به گرایش جنسی، هویت جنسیتی، فرهنگ، رورابط و تجربه زیسته شما انجام می‌شود. چه برای اضطراب، افسردگی، آشکارسازی هویت، پذیرش خود، تعارض خانوادگی، فشار رابطه و تبعیض مراجعه کنید یا فقط برای داشتن فضایی که لازم نباشد توضیح دهید یا از خودتان دفاع کنید، تیم ما با همدلی و احترام کنار شماست.",
    whoTitle: "مشاوره LGBTQ+ در چه زمینه‌هایی می‌تواند کمک کند؟",
    whoItems: [
      { title: "شناخت هویت و پذیرش خود", body: "وقتی در حال کشف خود، شیوه بیان خود یا تجربه احساس راحتی بیشتر با هویت جدیدتان هستید." },
      { title: "تصمیم‌گیری برای آشکارسازی هویت", body: "وقتی درگیر این هستید که چه زمانی، چگونه یا اصلاً آیا هویت واقعیتان را با خانواده، دوستان یا جامعه در میان بگذارید یا نه." },
      { title: "تعارض خانوادگی یا فرهنگی", body: "وقتی بین هویت خود، انتظارهای خانواده، ارزش‌های فرهنگی، مذهب یا ترس از طرد شدن گیر کرده‌اید." },
      { title: "رابطه و آشنایی", body: "وقتی نیاز دارید روی ارتباط، اعتماد، صمیمیت، مرزها، دلبستگی یا ساختار رابطه کار کنید." },
      { title: "تبعیض و فشار اقلیت بودن", body: "وقتی انگ، حذف، اشتباه خطاب شدن، همجنس‌گراهراسی، ترنس‌هراسی یا ناامن بودن فضاها به شما آسیب زده." },
      { title: "شرم، تردید یا تنهایی", body: "وقتی دچار احساس انزوا، فهمیده نشدن یا خستگی از تنها بودن با بخش‌هایی از خودتان هستید." },
    ],
    extraBodyTitle: "درک چالش‌های همیشگی افراد LGBTQ+",
    extraBodyPlacement: "beforeHow",
    extraBody: "افراد LGBTQ+ ممکن است با فشارهایی روبه‌رو باشند که دیگران حتی قادر به دیدنشان نیستند؛ مثل تبعیض، طرد، نگرانی درباره امنیت، فشار برای پنهان کردن بخش‌هایی از خود یا خستگی عاطفیِ ناشی از توضیح دادن مداوم هویتشان. این تجربه‌ها می‌تواند روی عزت‌نفس، روابط، اعتماد، حس تعلق و سلامت روان تاثیر جدی بگذارد. مشاوره فضایی فراهم می‌کند تا این آسیب‌ها دیده شوند، تاثیراتشان بررسی شود و دوباره با نیازها و احساساتتان ارتباط بگیرید. هدف این نیست که همه تجربه شما به هویتتان تقلیل داده شود؛ هدف دیدن تمام زندگی شما با مراقبت و احترام است.",
    howTitle: "از مشاوره LGBTQ+ در کوکیتلام چه انتظاری می‌توانید داشته باشید؟",
    howItems: [
      { title: "تأیید هویت و شناخت خود", body: "مشاوره می‌تواند در شناخت هویت، پذیرش خود و رهایی از شرم به شما کمک کند." },
      { title: "حمایت از افراد Trans و Non-binary", body: "مشاوران ما درباره هویت جنسیتی، ضمایر، گذار اجتماعی، چالش‌های خانوادگی، تجربیات مربوط به بدن و امنیت عاطفی به شما کمک حرفه‌ای و همدلانه ارائه می‌دهند." },
      { title: "مشاوره رابطه و خانواده", body: "به افراد و زوج‌های LGBTQ+ در زمینه آشنایی، صمیمیت، ارتباط، مرزها، بحران خانوادگی، انتظارات فرهنگی، آشکارسازی هویت و بازسازی پیوند با افراد مهم زندگی کمک می‌کنیم." },
    ],
    progressTitle: "پیشرفت در فرایند مشاوره LGBTQ+ چگونه است؟",
    progressBody: "پیشرفت در مشاوره LGBTQ+ با تجربه پیوند با دیگران آغاز می‌شود. به تدریج می‌توانید احساساتتان را درک کنید، نیازهایتان را بیان کنید، در روابط مرز بگذارید و به طور کلی صادقانه‌تر و شفاف‌تر در روابط حضور داشته باشید. با گذشت زمان، مشاوره به شما کمک می‌کند هویت واقعی خود را بپذیرید، زندگی کنید و حس تعلق و اعتماد به نفس بیشتری داشته باشید.",
    ctaTitle: "آماده‌اید مشاوره را در فضایی شروع کنید که همه بخش‌های شما پذیرفته است؟",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const cvapCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "CVAP Counselling in Coquitlam, BC",
    heroIntro: "What happened to you matters, and your healing deserves to be supported with care and respect.",
    introTitle: "CVAP Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, our CVAP counselling services support individuals who have been emotionally or psychologically impacted by violent crime, abuse, assault, family violence, sexual violence, or other traumatic experiences. Our Registered Clinical Counsellors provide in-person CVAP counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients process trauma, rebuild a sense of safety, and receive compassionate support through the Crime Victim Assistance Program. Our team understands that healing after crime can feel overwhelming, and we offer a trauma-informed counselling space where your story is approached with care, dignity, and respect.",
    whoTitle: "Who Can Benefit From CVAP Counselling?",
    whoItems: [
      { title: "Victims of violent crime", body: "You may be eligible for support if you experienced physical or psychological injury because of a violent crime in British Columbia." },
      { title: "Survivors of abuse or assault", body: "Counselling can support survivors of sexual violence, physical assault, intimate partner violence, or other traumatic violations." },
      { title: "Immediate family members", body: "Family members may need support when someone they love has been injured or killed because of a crime." },
      { title: "Witnesses impacted by crime", body: "Some witnesses may experience fear, shock, guilt, anxiety, or trauma after seeing or being closely affected by a violent event." },
      { title: "People feeling unsafe after trauma", body: "You may feel constantly alert, afraid, disconnected, or unable to relax after what happened." },
      { title: "People struggling to return to daily life", body: "Work, relationships, sleep, parenting, school, or basic routines may feel much harder after a traumatic experience." },
    ],
    extraListTitle: "How to Get Started With CVAP Counselling",
    extraListIntro: "If you have experienced a violent crime in British Columbia and want to access counselling through CVAP, the process usually begins with an application to the Crime Victim Assistance Program.",
    extraListItems: ["Choose the right CVAP application", "Complete the application form", "Include counselling as a requested benefit", "Submit your application to CVAP", "Ask for help if the form feels overwhelming", "If time has passed, still check your options"],
    extraBodyTitle: "What Is CVAP?",
    extraBodyPlacement: "beforeHow",
    extraBody: "CVAP stands for the Crime Victim Assistance Program. It is a Government of British Columbia program that may provide financial assistance and benefits to eligible victims of violent crime, immediate family members of injured or deceased victims, and some witnesses. These benefits may include counselling services, medical or dental expenses, prescription drug expenses, protective measures, transportation to counselling, and other supports related to recovery. At ChangeMoment Mental Health Center, we bring a trauma-informed and compassionate approach to CVAP counselling, supporting clients with trauma, abuse, emotional injury, anxiety, depression, grief, relationship wounds, and the long-term impact of painful experiences.",
    howTitle: "How CVAP Counselling Can Support Healing",
    howItems: [
      { title: "Restoring safety and stability", body: "We begin by helping you feel more grounded, supported, and emotionally safe, especially if your nervous system still feels on alert." },
      { title: "Processing trauma at your pace", body: "Together, we explore the emotional impact of what happened without rushing you or pushing you to share more than feels manageable." },
      { title: "Rebuilding connection and strength", body: "We support you in reconnecting with yourself, your relationships, your boundaries, and the parts of life that trauma may have interrupted." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in CVAP counselling may begin with feeling less alone and more understood. You may start to recognize trauma responses with less shame, feel calmer in your body, sleep more steadily, or feel more able to manage reminders of what happened. Over time, counselling can help you rebuild a sense of safety, strengthen boundaries, reduce fear and self-blame, and move toward life with more stability, confidence, and support.",
    ctaTitle: "Reach out today and let us support you in taking the next step toward safety and healing.",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling CVAP à Coquitlam, BC",
    heroIntro: "Ce qui vous est arrivé compte, et votre guérison mérite d’être soutenue avec soin et respect.",
    introTitle: "Le counselling CVAP chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nos services de counselling CVAP soutiennent les personnes touchées émotionnellement ou psychologiquement par un crime violent, de l’abus, une agression, de la violence familiale, de la violence sexuelle ou d’autres expériences traumatiques. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à traiter le trauma, reconstruire un sentiment de sécurité et recevoir un soutien compatissant par l’entremise du Crime Victim Assistance Program. Nous savons que guérir après un crime peut sembler accablant; votre histoire est accueillie avec soin, dignité et respect.",
    whoTitle: "À qui le counselling CVAP peut-il convenir?",
    whoItems: [
      { title: "Victimes de crime violent", body: "Vous pourriez être admissible si vous avez subi une blessure physique ou psychologique liée à un crime violent en Colombie-Britannique." },
      { title: "Survivants d’abus ou d’agression", body: "Le counselling peut soutenir les survivants de violence sexuelle, d’agression physique, de violence conjugale ou d’autres atteintes traumatiques." },
      { title: "Membres de la famille immédiate", body: "La famille peut avoir besoin de soutien lorsqu’un proche a été blessé ou tué à cause d’un crime." },
      { title: "Témoins touchés par un crime", body: "Certains témoins peuvent vivre peur, choc, culpabilité, anxiété ou trauma après un événement violent." },
      { title: "Personnes qui ne se sentent plus en sécurité", body: "Vous pouvez vous sentir constamment en alerte, effrayé, déconnecté ou incapable de relaxer." },
      { title: "Retour difficile au quotidien", body: "Le travail, les relations, le sommeil, la parentalité, l’école ou les routines peuvent sembler beaucoup plus difficiles après un trauma." },
    ],
    extraListTitle: "Comment commencer avec le counselling CVAP",
    extraListIntro: "Si vous avez vécu un crime violent en Colombie-Britannique et souhaitez accéder au counselling par CVAP, le processus commence habituellement par une demande au programme.",
    extraListItems: ["Choisir la bonne demande CVAP", "Remplir le formulaire", "Inclure le counselling comme bénéfice demandé", "Soumettre la demande à CVAP", "Demander de l’aide si le formulaire semble lourd", "Vérifier vos options même si du temps a passé"],
    extraBodyTitle: "Qu’est-ce que CVAP?",
    extraBodyPlacement: "beforeHow",
    extraBody: "CVAP est le Crime Victim Assistance Program, un programme du gouvernement de la Colombie-Britannique pouvant offrir de l’aide financière et des bénéfices aux victimes admissibles de crime violent, à certains membres de la famille immédiate et à certains témoins. Les bénéfices peuvent inclure du counselling, des frais médicaux ou dentaires, des médicaments, des mesures de protection, le transport vers les séances et d’autres soutiens liés au rétablissement. Chez ChangeMoment Mental Health Center, nous offrons une approche sensible au trauma, compatissante et structurée pour soutenir la sécurité, la régulation émotionnelle et la reconstruction.",
    howTitle: "Comment le counselling CVAP peut soutenir la guérison",
    howItems: [
      { title: "Restaurer sécurité et stabilité", body: "Nous commençons par vous aider à vous sentir plus ancré, soutenu et en sécurité émotionnelle, surtout si votre système nerveux reste en alerte." },
      { title: "Traiter le trauma à votre rythme", body: "Ensemble, nous explorons l’impact émotionnel de ce qui est arrivé sans vous presser ni vous pousser à partager plus que ce qui est soutenable." },
      { title: "Reconstruire lien et force", body: "Nous vous soutenons pour vous reconnecter à vous-même, à vos relations, à vos limites et aux parties de la vie que le trauma a interrompues." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès peut commencer par se sentir moins seul et mieux compris. Vous pourriez reconnaître vos réponses traumatiques avec moins de honte, vous sentir plus calme dans votre corps, dormir plus régulièrement ou gérer plus facilement les rappels de ce qui est arrivé. Avec le temps, le counselling peut aider à reconstruire un sentiment de sécurité, renforcer les limites, réduire la peur et l’auto-blâme, et avancer avec plus de stabilité, de confiance et de soutien.",
    ctaTitle: "Contactez-nous aujourd’hui pour être soutenu dans votre prochain pas vers la sécurité et la guérison.",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره CVAP در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "آنچه برای شما اتفاق افتاده مهم است و شما شایسته مراقبت و محبت هستید.",
    introTitle: "مشاوره CVAP در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات مشاوره CVAP در اختیار مراجعانی قرار می‌گیرد که از نظر عاطفی یا روانی تحت تأثیر انواع خشونت یا تجربیات آسیب‌زننده قرار گرفته‌اند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری CVAP و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند. ما به مراجعان کمک می‌کنیم تروما را با احساس امنیت پشت سر بگذارند، حس امنیت را بازسازی کنند و از طریق Crime Victim Assistance Program حمایت حرفه‌ای و همدلانه دریافت کنند. می‌دانیم بهبود بعد از چنین تجربیات دردناکی می‌تواند چقدر سخت و طاقت‌فرسا باشد؛ بنابراین ما داستان شما را با مراقبت و احترام می‌بینیم و در کنار شما هستیم.",
    whoTitle: "چه کسانی می‌توانند از مشاوره CVAP استفاده کنند؟",
    whoItems: [
      { title: "قربانیان خشونت‌", body: "اگر به دلیل جرم خشونت‌آمیز در بریتیش کلمبیا آسیب جسمی یا روحی دیده‌اید، می‌توانید از این پروگرم استفاده کنید." },
      { title: "بازماندگان آزار یا حمله", body: "مشاوره می‌تواند به بازماندگان خشونت جنسی، حمله جسمی، ضربه عاطفی یا آسیب‌های مشابه رسیدگی کند." },
      { title: "اعضای نزدیک خانواده", body: "وقتی عزیزتان به دلیل خشونت آسیب دیده یا فوت شده، اعضای خانواده هم نیاز به مراقبت حرفه‌ای دارند." },
      { title: "شاهدان خشونت", body: "برخی شاهدان پس از دیدن یا نزدیک بودن به یک رویداد خشونت‌آمیز، دچار ترس، شوک، گناه، اضطراب یا تروما می‌شوند." },
      { title: "افرادی که بعد از تروما احساس ناامنی دارند", body: "ممکن است پس از آنچه اتفاق افتاده، مدام در حالت آماده‌باش، ترسیده، جدا از خود یا ناتوان از آرام کردن خودتان باشید." },
      { title: "سختی در بازگشت به زندگی روزمره", body: "تحصیل، کار، روابط، خواب، فرزندپروری یا روتین‌های ساده ممکن است بعد از تجربه آسیب‌زا بسیار دشوار شوند." },
    ],
    extraListTitle: "چگونه مشاوره CVAP را شروع کنیم؟",
    extraListIntro: "اگر در بریتیش کلمبیا جرم خشونت‌آمیزی را تجربه کرده‌اید و می‌خواهید از طریق CVAP به مشاوره دسترسی داشته باشید، باید برای برنامه Crime Victim Assistance Program اپلای کنید.",
    extraListItems: ["برنامه مناسب CVAP را انتخاب کنید", "فرم اپلیکیشن را پر کنید", "مشاوره را به عنوان سرویس موردنیاز انتخاب کنید", "فرم را برای CVAP ارسال کنید", "اگر تکمیل فرم برایتان دشوار است حتما کمک بگیرید", "حتی اگر از وقوع اتفاق گذشته باشد، باز هم از CVAP بپرسید"],
    extraBodyTitle: "CVAP چیست؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "CVAP مخفف Crime Victim Assistance Program است؛ برنامه‌ای از دولت بریتیش کلمبیا که حمایت‌های مختلفی در اختیار قربانیان خشونت‌، اعضای نزدیک خانواده قربانیان آسیب‌دیده یا فوت‌شده و برخی شاهدان قرار می‌دهد. این خدمات می‌تواند شامل روان‌درمانی و مشاوره، هزینه‌های پزشکی یا دندان‌پزشکی، دارو، اقدامات حفاظتی، رفت‌وآمد به مشاوره و حمایت‌های مرتبط با بهبود باشد. در مرکز سلامت روان ChangeMoment، ما با رویکردی همدلانه و متمرکز بر تروما، برای بازگشت به مسیر زندگی در کنار شما هستیم.",
    howTitle: "مشاوره CVAP چگونه می‌تواند به بهبود کمک کند؟",
    howItems: [
      { title: "بازسازی امنیت و ثبات", body: "ابتدا به شما کمک می‌کنیم به تدریج احساس ثبات و امنیت عاطفی کسب کنید؛ به‌خصوص اگر سیستم عصبی شما هنوز در حالت آماده‌باش است." },
      { title: "پردازش تروما با سرعت مناسب شما", body: "با هم اثر روحی و روانی آنچه رخ داده را بررسی می‌کنیم، بدون هیچ‌گونه عجله‌ای برای روبه‌رو شدن با چیزی که آماده‌اش نیستید." },
      { title: "بازسازی ارتباط و توانمندی", body: "به شما کمک می‌کنیم دوباره با خودتان، دیگران و بخش‌هایی از زندگی که تروما متوقف یا مختل کرده ارتباط برقرار کنید." },
    ],
    progressTitle: "پیشرفت در فرایند درمان CVAP چگونه است؟",
    progressBody: "پیشرفت در مشاوره CVAP با کمتر احساس تنها بودن و بیشتر فهمیده شدن آغاز می‌شود. به تدریج می‌توانید واکنش‌های ناشی از تروما را تشخیص دهید و یادآوری دائمی آنچه رخ داده را مدیریت کنید. با گذشت زمان، مشاوره به کاهش احساس شرم، ترس و خودسرزنشی، بازسازی حس امنیت و حرکت به سوی زندگی آرام و باثبات کمک می‌کند.",
    ctaTitle: "امروز با ما تماس بگیرید تا در قدم بعدی به سوی امنیت و بهبود، کنار شما باشیم.",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const icbcCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "ICBC Counselling in Coquitlam, BC",
    heroIntro: "Support for the mental impact of a car accident, so you do not have to recover alone.",
    introTitle: "ICBC Counselling at ChangeMoment Mental Health Center",
    introBody: "A motor vehicle accident can affect more than your body. Even after the crash is over, you may notice anxiety, fear of driving, sleep problems, irritability, flashbacks, low mood, body tension, or a sense that you no longer feel fully safe. At ChangeMoment Mental Health Center, our ICBC counselling services support clients who are recovering mentally after a car accident. Our Registered Clinical Counsellors provide in-person ICBC counselling in Coquitlam, BC, and online counselling across British Columbia, helping clients process the mental impact of the accident, rebuild confidence, and feel more grounded in daily life.",
    whoTitle: "Mental Effects After a Motor Vehicle Accident",
    whoItems: [
      { title: "Anxiety about driving or being a passenger", body: "You may feel tense, unsafe, or on edge when returning to the road, even if the accident was not severe." },
      { title: "Flashbacks or intrusive memories", body: "Images, sounds, or moments from the accident may come back suddenly and feel difficult to control." },
      { title: "Sleep problems", body: "You may have trouble falling asleep, staying asleep, or feeling rested because your body remains on alert." },
      { title: "Irritability or mental overwhelm", body: "Small stresses may feel harder to manage, and you may notice anger, crying, panic, or mental shutdown." },
      { title: "Avoidance", body: "You may avoid driving, certain roads, intersections, conversations, or anything that reminds you of the accident." },
      { title: "Feeling disconnected or not like yourself", body: "After a crash, some people feel numb, detached, low, or unsure why they are still affected." },
    ],
    extraListTitle: "How ICBC Counselling Works After a Car Accident",
    extraListIntro: "If you have been injured in a motor vehicle accident in British Columbia, the ICBC counselling process can usually begin soon after you open your claim.",
    extraListItems: ["Report your accident to ICBC", "Book counselling within the first 12 weeks", "No doctor’s referral is needed", "Bring your claim information", "Use your pre-approved counselling sessions", "Ask about further support if you need more time"],
    howTitle: "How ICBC Counselling Can Support Your Recovery",
    howItems: [
      { title: "Stabilizing after the accident", body: "We begin by helping you feel more grounded, safe, and supported as your body and mind recover from the shock of the crash." },
      { title: "Understanding trauma and stress responses", body: "Together, we explore how the accident may be affecting your nervous system, mental health, thoughts, sleep, relationships, and confidence." },
      { title: "Rebuilding confidence and daily functioning", body: "We support you in developing coping tools, reducing avoidance, processing the accident, and slowly returning to the parts of life that feel difficult after the crash." },
    ],
    extraBodyTitle: "Why Choose ChangeMoment Mental Health Center for ICBC Counselling?",
    extraBody: "At ChangeMoment Mental Health Center, we understand that recovering from a car accident is not only about physical injury. Mental recovery matters too. Our team offers a warm, respectful, and evidence-informed counselling space where your reactions are taken seriously and your recovery is supported at your pace. We provide in-person ICBC counselling in Coquitlam and online counselling across BC, making it easier to access care during a stressful time.",
    extraBodyPlacement: "beforeHow",
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in ICBC counselling may begin with feeling less alone and less confused by your reactions. You may start sleeping better, feeling calmer in your body, or feeling more prepared to return to driving, work, or daily routines. Over time, counselling can help the accident feel less present in your everyday life, while supporting more confidence, mental steadiness, and a stronger sense of safety.",
    ctaTitle: "Been in a car accident? Let us help you take the next step in your mental recovery.",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling ICBC à Coquitlam, BC",
    heroIntro: "Du soutien pour l’impact sur la santé mentale d’un accident de voiture, afin que vous n’ayez pas à vous rétablir seul.",
    introTitle: "Le counselling ICBC chez ChangeMoment Mental Health Center",
    introBody: "Un accident de la route peut toucher bien plus que le corps. Même après l’impact, vous pourriez remarquer de l’anxiété, une peur de conduire, des troubles du sommeil, de l’irritabilité, des flashbacks, une humeur basse, des tensions corporelles ou l’impression de ne plus vous sentir pleinement en sécurité. Chez ChangeMoment Mental Health Center, nos services de counselling ICBC soutiennent les clients qui se rétablissent sur le plan mental après un accident. Nos conseillers cliniques agréés offrent du counselling ICBC en personne à Coquitlam, BC, ainsi qu’en ligne partout en Colombie-Britannique, afin d’aider les clients à traiter l’impact sur la santé mentale de l’accident, reconstruire leur confiance et se sentir plus ancrés au quotidien.",
    whoTitle: "Effets sur la santé mentale après un accident de la route",
    whoItems: [
      { title: "Anxiété à conduire ou être passager", body: "Vous pouvez vous sentir tendu, en insécurité ou sur le qui-vive en retournant sur la route, même si l’accident n’était pas grave." },
      { title: "Flashbacks ou souvenirs intrusifs", body: "Des images, sons ou moments de l’accident peuvent revenir soudainement et sembler difficiles à contrôler." },
      { title: "Problèmes de sommeil", body: "Vous pouvez avoir du mal à vous endormir, rester endormi ou vous sentir reposé parce que votre corps demeure en alerte." },
      { title: "Irritabilité ou détresse mentale", body: "Les petits stress peuvent devenir plus difficiles à gérer, avec colère, larmes, panique ou repli mental." },
      { title: "Évitement", body: "Vous pouvez éviter de conduire, certaines routes, intersections, conversations ou tout ce qui rappelle l’accident." },
      { title: "Se sentir déconnecté ou différent", body: "Après un accident, certaines personnes se sentent engourdies, détachées, déprimées ou ne comprennent pas pourquoi elles restent affectées." },
    ],
    extraListTitle: "Comment fonctionne le counselling ICBC après un accident",
    extraListIntro: "Si vous avez été blessé dans un accident de la route en Colombie-Britannique, le processus de counselling ICBC peut généralement commencer peu après l’ouverture de votre réclamation.",
    extraListItems: ["Déclarer l’accident à ICBC", "Réserver du counselling dans les 12 premières semaines", "Aucune référence médicale n’est nécessaire", "Apporter les informations de réclamation", "Utiliser les séances préapprouvées", "Demander du soutien supplémentaire si nécessaire"],
    howTitle: "Comment le counselling ICBC peut soutenir votre rétablissement",
    howItems: [
      { title: "Se stabiliser après l’accident", body: "Nous commençons par vous aider à vous sentir plus ancré, en sécurité et soutenu pendant que le corps et l’esprit se remettent du choc." },
      { title: "Comprendre les réponses de trauma et de stress", body: "Ensemble, nous explorons comment l’accident peut toucher votre système nerveux, votre santé mentale, vos pensées, votre sommeil, vos relations et votre confiance." },
      { title: "Rebâtir confiance et fonctionnement quotidien", body: "Nous vous aidons à développer des outils, réduire l’évitement, traiter l’accident et revenir graduellement aux aspects de la vie devenus difficiles." },
    ],
    extraBodyTitle: "Pourquoi choisir ChangeMoment Mental Health Center pour le counselling ICBC?",
    extraBody: "Chez ChangeMoment Mental Health Center, nous savons que se rétablir d’un accident de voiture ne concerne pas seulement les blessures physiques. Le rétablissement sur le plan mental compte aussi. Notre équipe offre un espace chaleureux, respectueux et éclairé par les données probantes où vos réactions sont prises au sérieux et votre rétablissement est soutenu à votre rythme. Nous offrons du counselling ICBC en personne à Coquitlam et en ligne partout en Colombie-Britannique, pour rendre le soutien plus accessible pendant une période stressante.",
    extraBodyPlacement: "beforeHow",
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès peut commencer par se sentir moins seul et moins confus face à ses réactions. Vous pourriez mieux dormir, vous sentir plus calme dans votre corps ou plus prêt à reprendre la conduite, le travail ou les routines. Avec le temps, le counselling peut aider l’accident à être moins présent au quotidien, tout en soutenant plus de confiance, de stabilité mentale et de sécurité.",
    ctaTitle: "Vous avez eu un accident de voiture? Laissez-nous vous aider à franchir la prochaine étape de votre rétablissement sur le plan mental.",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره ICBC در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "یک تصادف، خسارات و پیامدهای فراوانی دارد. ما در کنار شما هستیم تا از آسیب‌های روانی آن به زودی بهبود یابید.",
    introTitle: "مشاوره ICBC در مرکز سلامت روان ChangeMoment",
    introBody: "تصادف رانندگی فقط بدن را تحت تأثیر قرار نمی‌دهد. حتی بعد از تمام شدن حادثه، ممکن است اضطراب، ترس از رانندگی، مشکل خواب، تحریک‌پذیری، فلش‌بک، افت خلق، تنش بدنی یا احساس ناامنی را تجربه کنید. در مرکز سلامت روان ChangeMoment، خدمات مشاوره ICBC در خدمت مراجعانی است که در اثر تصادف، دچار آسیب روانی شده‌اند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا، مشاوره حضوری ICBC و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند و به مراجعان کمک می‌کنند اثر روحی و روانی تصادف را پشت سر بگذارند، اعتمادبه‌نفس خود را دوباره کسب کنند و در زندگی روزمره ثبات بیشتری تجربه کنند.",
    whoTitle: "آسیب‌های روانی تصادفات رانندگی",
    whoItems: [
      { title: "اضطراب از رانندگی یا سرنشین بودن", body: "ممکن است هنگام تجربه دوباره رانندگی، دائما احساس تنش، ناامنی یا آماده‌باش داشته باشید." },
      { title: "فلش‌بک یا خاطرات مزاحم", body: "تصاویر، صداها یا لحظه‌هایی از تصادف ممکن است ناگهان برگردند و کنترلشان سخت باشد." },
      { title: "مشکلات خواب", body: "ممکن است استراحت یا خوابیدن، برایتان سخت شود چون بدن هنوز در حالت آماده‌باش است." },
      { title: "تحریک‌پذیری یا آشفتگی روانی", body: "استرس‌های کوچک ممکن است سخت‌تر مدیریت شوند و خشم، گریه، پانیک یا آشفتگی روانی را تجربه کنید." },
      { title: "اجتناب", body: "ممکن است از رانندگی، بعضی مسیرها، چهارراه‌ها، گفت‌وگوها یا هر چیزی که یادآور تصادف است اجتناب کنید." },
      { title: "احساس قطع ارتباط یا شبیه خود نبودن", body: "پس از تصادف، بعضی افراد دچار بی‌حسی، فاصله، افت خلق یا سردرگمی می‌شوند." },
    ],
    extraListTitle: "مشاوره ICBC بعد از تصادف چگونه انجام می‌شود؟",
    extraListIntro: "اگر در استان بریتیش کلمبیا در یک تصادف رانندگی آسیب دیده‌اید، روند مشاوره ICBC معمولاً کمی بعد از باز شدن claim می‌تواند شروع شود.",
    extraListItems: ["تصادف را به ICBC گزارش کنید", "در ۱۲ هفته اول پس از حادثه، وقت مشاوره را رزرو کنید", "نیازی به ارجاع پزشک نیست", "اطلاعات claim را همراه داشته باشید", "از جلسات مشاوره پذیرفته‌شده استفاده کنید", "اگر نیاز به جلسات مشاوره بیشتری داشته باشید می‌توانید دوباره درخواست دهید"],
    howTitle: "مشاوره ICBC چگونه به بهبود شما کمک می‌کند؟",
    howItems: [
      { title: "ثبات پس از تصادف", body: "ابتدا به شما کمک می‌کنیم هم‌زمان با بهبود بدن و ذهن از شوک تصادف، بیشتر احساس امنیت و ثبات داشته باشید." },
      { title: "درک واکنش‌های ناشی از تروما و استرس", body: "با هم بررسی می‌کنیم تصادف چگونه روی سیستم عصبی، سلامت روان، افکار، خواب، روابط و اعتمادبه‌نفس شما اثر گذاشته باشد." },
      { title: "بازسازی اعتماد و عملکرد روزمره", body: "به شما کمک می‌کنیم ابزارهایی برای مدیریت استرس بسازید، از اجتناب پرهیز کنید، حادثه را پردازش کنید و آرام‌آرام به بخش‌هایی از زندگی که بعد از تصادف سخت شده برگردید." },
    ],
    extraBodyTitle: "چرا باید مرکز سلامت روان ChangeMoment را برای مشاوره ICBC انتخاب کنید؟",
    extraBody: "در مرکز سلامت روان ChangeMoment، ما می‌دانیم بهبود بعد از تصادف فقط مربوط به آسیب جسمی نیست. بهبود روانی هم مهم است. تیم ما فضایی گرم، محترمانه و علمی و کاربردی فراهم می‌کند که در آن واکنش‌های شما جدی گرفته می‌شود و روند بهبود با ریتم مناسب شما به تدریج اتفاق می‌افتد. ما مشاوره حضوری ICBC در کوکیتلام و مشاوره آنلاین در سراسر بریتیش کلمبیا ارائه می‌دهیم تا دسترسی به مراقبت در زمان پراسترس برای شما آسان‌تر باشد.",
    extraBodyPlacement: "beforeHow",
    progressTitle: "پیشرفت در فرایند درمان ICBC چگونه است؟",
    progressBody: "پیشرفت در مشاوره ICBC ابتدا با درک عمیق‌تر واکنش‌هایتان آغاز می‌شود. به تدریج بدنتان آرام‌تر می‌شود، خواب بهتری تجربه می‌کنید و برای بازگشت به کار، رانندگی یا روتین‌های روزمره آماده می‌شوید. با گذشت زمان، مشاوره به شما کمک می‌کند آن حادثه دیگر در زندگی شما نقش پررنگ و مسلطی نداشته باشد و احساس امنیت و ثبات عاطفی را تجربه کنید.",
    ctaTitle: "تصادف داشته‌اید؟ اجازه بدهید در قدم بعدی بهبود روانی کنارتان باشیم.",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};

const ifhpCounsellingCopy: Record<"en" | "fr" | "fa", OnlineCopy> = {
  en: {
    heroTitle: "IFHP Counselling in Coquitlam, BC",
    heroIntro: "Building a new life deserves care that honours your journey, your courage, and your story.",
    introTitle: "IFHP Counselling at ChangeMoment Mental Health Center",
    introBody: "At ChangeMoment Mental Health Center, we provide counselling for individuals covered under the Interim Federal Health Program (IFHP) — a Government of Canada benefit that offers temporary health coverage to eligible refugees, protected persons, refugee claimants, and certain other groups who are not yet enrolled in a provincial health plan. Our Registered Clinical Counsellors offer in-person IFHP counselling in Coquitlam, BC, and online counselling across British Columbia, providing trauma-informed, culturally sensitive support for the emotional impact of displacement, resettlement, and starting over in a new country. We understand that the road to this moment may have been long and difficult, and we meet you with respect, patience, and care.",
    whoTitle: "Who Can Benefit From IFHP Counselling?",
    whoItems: [
      { title: "Resettled refugees", body: "Government-assisted or privately sponsored refugees navigating the emotional and psychological demands of starting life in a new country." },
      { title: "Protected persons", body: "Individuals who have received protected person status and may be carrying the weight of what they experienced before and during their journey." },
      { title: "Refugee claimants", body: "People waiting for a decision on their refugee claim, often living with significant uncertainty, fear, and emotional strain." },
      { title: "Survivors of trauma or violence", body: "Those who experienced war, persecution, displacement, loss, or violence and are still carrying the emotional impact of those experiences." },
      { title: "People facing cultural and language barriers", body: "Newcomers navigating a new language, culture, and system who feel isolated, misunderstood, or disconnected from support." },
      { title: "Families and individuals in transition", body: "People managing grief over what was left behind, while trying to build hope and stability in an unfamiliar place." },
    ],
    extraListTitle: "How to Access IFHP Counselling",
    extraListIntro: "If you are covered under the Interim Federal Health Program, accessing counselling support can begin with a few straightforward steps.",
    extraListItems: [
      "Confirm you hold valid IFHP coverage",
      "Check that mental health services are included",
      "Contact us to book a first appointment",
      "Bring your IFHP coverage documentation",
      "Ask about online counselling if travel is difficult",
      "Reach out even if you are unsure — we can help you find out",
    ],
    extraBodyTitle: "What Is the Interim Federal Health Program (IFHP)?",
    extraBodyPlacement: "beforeHow",
    extraBody: "The Interim Federal Health Program (IFHP) is a Government of Canada program that provides limited, temporary health coverage — including mental health counselling — to eligible refugees, protected persons, refugee claimants, and certain other groups who are not yet covered by a provincial or territorial health insurance plan. IFHP coverage may include counselling services provided by Registered Clinical Counsellors. At ChangeMoment Mental Health Center, our team is available to support IFHP clients with trauma recovery, anxiety, depression, grief, resettlement stress, cultural adjustment, family challenges, and the many layers of emotional experience that come with starting over.",
    howTitle: "How IFHP Counselling Can Support You",
    howItems: [
      { title: "Creating safety and stability first", body: "We begin by helping you feel grounded, heard, and emotionally safe — especially important if your nervous system has been under pressure for a long time." },
      { title: "Processing trauma and loss at your pace", body: "Together, we explore the emotional weight of your journey — displacement, loss, uncertainty, and grief — at a pace that feels manageable and respectful." },
      { title: "Building roots and resilience", body: "We support you in rebuilding a sense of belonging, strengthening your connections, and developing the inner resources you need to move forward in your new home." },
    ],
    progressTitle: "What Progress Can Look Like",
    progressBody: "Progress in IFHP counselling often begins with feeling less alone — a sense that someone truly hears your story without judgement. You may begin to sleep a little better, feel less on edge, or find words for what you have been carrying. Over time, counselling can help reduce the grip of trauma, ease anxiety and sadness, strengthen your sense of identity and belonging, and build confidence as you settle into your life in Canada.",
    ctaTitle: "You do not have to carry everything alone. Reach out today and let us walk alongside you.",
    ctaButton: "Schedule a free consultation",
  },
  fr: {
    heroTitle: "Counselling PFSI à Coquitlam, BC",
    heroIntro: "Construire une nouvelle vie mérite un soutien qui honore votre parcours, votre courage et votre histoire.",
    introTitle: "Le counselling PFSI chez ChangeMoment Mental Health Center",
    introBody: "Chez ChangeMoment Mental Health Center, nous offrons du counselling aux personnes couvertes par le Programme fédéral de santé intérimaire (PFSI) — un programme du gouvernement du Canada qui fournit une couverture de santé temporaire aux réfugiés admissibles, aux personnes protégées, aux demandeurs d'asile et à certains autres groupes qui ne sont pas encore inscrits à un régime provincial. Nos conseillers cliniques agréés offrent du counselling en personne à Coquitlam, BC, et en ligne partout en Colombie-Britannique, avec une approche sensible au trauma et à la culture pour soutenir l'impact émotionnel du déplacement et de la réinstallation. Nous comprenons que le chemin jusqu'ici a pu être long et difficile, et nous vous accueillons avec respect, patience et bienveillance.",
    whoTitle: "À qui le counselling PFSI peut-il convenir?",
    whoItems: [
      { title: "Réfugiés réinstallés", body: "Les réfugiés assistés par le gouvernement ou parrainés qui naviguent dans les défis émotionnels et psychologiques de recommencer leur vie dans un nouveau pays." },
      { title: "Personnes protégées", body: "Les personnes ayant obtenu le statut de personnes protégées qui portent encore le poids de ce qu'elles ont vécu avant et pendant leur parcours." },
      { title: "Demandeurs d'asile", body: "Les personnes en attente d'une décision sur leur demande d'asile, souvent confrontées à l'incertitude, la peur et la tension émotionnelle." },
      { title: "Survivants de trauma ou de violence", body: "Ceux qui ont vécu la guerre, la persécution, le déplacement, la perte ou la violence et qui portent encore l'impact émotionnel de ces expériences." },
      { title: "Personnes confrontées à des barrières culturelles et linguistiques", body: "Les nouveaux arrivants qui naviguent dans une nouvelle langue, culture et système, et qui se sentent isolés, incompris ou coupés des ressources." },
      { title: "Familles et individus en transition", body: "Les personnes qui vivent le deuil de ce qu'elles ont laissé derrière, tout en essayant de bâtir espoir et stabilité dans un lieu inconnu." },
    ],
    extraListTitle: "Comment accéder au counselling PFSI",
    extraListIntro: "Si vous êtes couvert par le Programme fédéral de santé intérimaire, accéder au soutien en counselling peut commencer par quelques étapes simples.",
    extraListItems: [
      "Confirmer que vous avez une couverture PFSI valide",
      "Vérifier que les services de santé mentale sont inclus",
      "Nous contacter pour prendre un premier rendez-vous",
      "Apporter vos documents de couverture PFSI",
      "Vous renseigner sur le counselling en ligne si les déplacements sont difficiles",
      "Nous contacter même si vous n'êtes pas certain — nous pouvons vous aider",
    ],
    extraBodyTitle: "Qu'est-ce que le Programme fédéral de santé intérimaire (PFSI)?",
    extraBodyPlacement: "beforeHow",
    extraBody: "Le Programme fédéral de santé intérimaire (PFSI) est un programme du gouvernement du Canada qui offre une couverture de santé limitée et temporaire — incluant le counselling en santé mentale — aux réfugiés admissibles, aux personnes protégées, aux demandeurs d'asile et à certains autres groupes non encore couverts par un régime provincial. La couverture PFSI peut inclure des services de counselling fournis par des conseillers cliniques agréés. Chez ChangeMoment Mental Health Center, notre équipe est disponible pour soutenir les clients PFSI avec le trauma, l'anxiété, la dépression, le deuil, le stress de réinstallation, l'adaptation culturelle, les défis familiaux et les nombreuses couches d'expérience émotionnelle liées à recommencer sa vie.",
    howTitle: "Comment le counselling PFSI peut vous soutenir",
    howItems: [
      { title: "Créer sécurité et stabilité d'abord", body: "Nous commençons par vous aider à vous sentir ancré, entendu et en sécurité émotionnelle — particulièrement important si votre système nerveux a été sous pression depuis longtemps." },
      { title: "Traiter le trauma et la perte à votre rythme", body: "Ensemble, nous explorons le poids émotionnel de votre parcours — déplacement, perte, incertitude et deuil — à un rythme qui vous convient et qui vous respecte." },
      { title: "Bâtir des racines et de la résilience", body: "Nous vous soutenons dans la reconstruction d'un sentiment d'appartenance, le renforcement de vos liens et le développement des ressources intérieures dont vous avez besoin pour avancer dans votre nouvelle maison." },
    ],
    progressTitle: "À quoi peut ressembler le progrès",
    progressBody: "Le progrès dans le counselling PFSI commence souvent par se sentir moins seul — l'impression que quelqu'un entend vraiment votre histoire sans jugement. Vous pourriez commencer à dormir un peu mieux, vous sentir moins sur le qui-vive, ou trouver des mots pour ce que vous portez. Avec le temps, le counselling peut réduire l'emprise du trauma, apaiser l'anxiété et la tristesse, renforcer votre sens de l'identité et de l'appartenance, et bâtir votre confiance en vous installant dans votre vie au Canada.",
    ctaTitle: "Vous n'avez pas à tout porter seul. Contactez-nous aujourd'hui et laissez-nous marcher à vos côtés.",
    ctaButton: "Planifier une consultation gratuite",
  },
  fa: {
    heroTitle: "مشاوره IFHP در کوکیتلام، بریتیش کلمبیا",
    heroIntro: "ساختن زندگی تازه شایسته مراقبتی است که سفر، شجاعت و داستان شما را ارج می‌نهد.",
    introTitle: "مشاوره IFHP در مرکز سلامت روان ChangeMoment",
    introBody: "در مرکز سلامت روان ChangeMoment، خدمات مشاوره را برای افرادی که تحت پوشش برنامه موقت فدرال سلامت (IFHP) هستند ارائه می‌دهیم — برنامه‌ای از دولت کانادا که پوشش بهداشتی موقت و محدود به پناهندگان واجد شرایط، افراد تحت حمایت، متقاضیان پناهندگی و برخی گروه‌های دیگر که هنوز تحت پوشش بیمه سلامت استانی نیستند ارائه می‌کند. مشاوران رجیسترد ما در کوکیتلام، بریتیش کلمبیا مشاوره حضوری IFHP و در سراسر بریتیش کلمبیا مشاوره آنلاین ارائه می‌دهند؛ با رویکردی آگاه از تروما و حساس به فرهنگ که اثر عاطفی مهاجرت، جابه‌جایی و شروع دوباره در کشوری تازه را با احترام و کرامت می‌بیند. می‌دانیم مسیر رسیدن به اینجا ممکن است طولانی و سخت بوده باشد؛ ما با صبر و همدلی در کنار شما هستیم.",
    whoTitle: "چه کسانی می‌توانند از مشاوره IFHP بهره‌مند شوند؟",
    whoItems: [
      { title: "پناهندگان اسکان‌یافته", body: "پناهندگانی که با کمک دولت یا حامیان خصوصی اسکان یافته‌اند و با چالش‌های عاطفی و روانی شروع دوباره در کشوری تازه روبه‌رو هستند." },
      { title: "افراد تحت حمایت", body: "افرادی که وضعیت «شخص تحت حمایت» را دریافت کرده‌اند و هنوز سنگینی آنچه پیش از مهاجرت و در طول سفرشان تجربه کردند را با خود دارند." },
      { title: "متقاضیان پناهندگی", body: "افرادی که در انتظار تصمیم درباره درخواست پناهندگی خود هستند و اغلب با بی‌اطمینانی، ترس و فشار عاطفی قابل‌توجهی زندگی می‌کنند." },
      { title: "بازماندگان تروما یا خشونت", body: "کسانی که جنگ، آزار، جابه‌جایی، فقدان یا خشونت را تجربه کرده‌اند و هنوز اثر عاطفی آن تجربه‌ها را با خود دارند." },
      { title: "افرادی که با موانع فرهنگی و زبانی روبه‌رو هستند", body: "تازه‌واردانی که در زبان، فرهنگ و سیستم تازه‌ای دست‌وپنجه نرم می‌کنند و احساس انزوا، سوءتفاهم یا فاصله از منابع حمایتی دارند." },
      { title: "خانواده‌ها و افراد در دوران گذار", body: "کسانی که سوگ آنچه پشت سر گذاشتند را تجربه می‌کنند و در همان حال تلاش می‌کنند در مکانی ناآشنا امید و ثبات بسازند." },
    ],
    extraListTitle: "چگونه به مشاوره IFHP دسترسی داشته باشم؟",
    extraListIntro: "اگر تحت پوشش برنامه موقت فدرال سلامت هستید، دسترسی به حمایت مشاوره می‌تواند با چند قدم ساده شروع شود.",
    extraListItems: [
      "تأیید کنید که پوشش معتبر IFHP دارید",
      "بررسی کنید که خدمات سلامت روان در پوشش شما گنجانده شده",
      "با ما تماس بگیرید تا اولین وقت را رزرو کنید",
      "مدارک پوشش IFHP خود را همراه داشته باشید",
      "اگر رفت‌وآمد دشوار است، درباره مشاوره آنلاین بپرسید",
      "حتی اگر مطمئن نیستید با ما تماس بگیرید — می‌توانیم کمک کنیم",
    ],
    extraBodyTitle: "برنامه موقت فدرال سلامت (IFHP) چیست؟",
    extraBodyPlacement: "beforeHow",
    extraBody: "برنامه موقت فدرال سلامت (IFHP) برنامه‌ای از دولت کانادا است که پوشش بهداشتی محدود و موقتی — از جمله مشاوره سلامت روان — به پناهندگان واجد شرایط، افراد تحت حمایت، متقاضیان پناهندگی و برخی گروه‌های دیگری که هنوز تحت پوشش برنامه بیمه سلامت استانی نیستند ارائه می‌دهد. پوشش IFHP می‌تواند شامل خدمات مشاوره توسط مشاوران رجیسترد باشد. در مرکز سلامت روان ChangeMoment، تیم ما آماده حمایت از مراجعان IFHP در بهبود از تروما، اضطراب، افسردگی، سوگ، استرس اسکان مجدد، سازگاری فرهنگی، چالش‌های خانوادگی و لایه‌های مختلف تجربه عاطفی ناشی از شروع دوباره است.",
    howTitle: "مشاوره IFHP چگونه می‌تواند شما را حمایت کند؟",
    howItems: [
      { title: "ایجاد امنیت و ثبات در وهله اول", body: "ابتدا به شما کمک می‌کنیم احساس ثبات، شنیده شدن و امنیت عاطفی داشته باشید — به‌ویژه اگر سیستم عصبی شما مدت طولانی زیر فشار بوده است." },
      { title: "پردازش تروما و فقدان با ریتم مناسب شما", body: "با هم سنگینی عاطفی سفر شما — جابه‌جایی، فقدان، بی‌اطمینانی و سوگ — را با ریتمی که قابل‌تحمل و محترمانه است بررسی می‌کنیم." },
      { title: "ساختن ریشه و تاب‌آوری", body: "در بازسازی حس تعلق، تقویت پیوندهایتان و پرورش منابع درونی که برای پیش رفتن در خانه جدیدتان نیاز دارید، کنارتان هستیم." },
    ],
    progressTitle: "پیشرفت در فرایند درمان IFHP چگونه است؟",
    progressBody: "پیشرفت در مشاوره IFHP اغلب با احساس کمتر تنها بودن شروع می‌شود — حسی که کسی واقعاً داستان شما را بدون قضاوت می‌شنود. ممکن است کمی بهتر بخوابید، کمتر در حالت آماده‌باش باشید یا کلماتی برای آنچه با خود دارید بیابید. با گذشت زمان، مشاوره می‌تواند به کاهش فشار تروما، کاهش اضطراب و غم، تقویت حس هویت و تعلق و ساختن اعتمادبه‌نفس در مسیر اسکان در کانادا کمک کند.",
    ctaTitle: "لازم نیست همه چیز را تنها تحمل کنید. امروز با ما تماس بگیرید تا در کنارتان باشیم.",
    ctaButton: "رزرو وقت مشاوره رایگان",
  },
};


const serviceFaqOverrides: Record<string, Partial<Record<"en" | "fr" | "fa", { q: string; a: string }[]>>> = {
  "online-counselling": {
    en: [
      { q: "Is online counselling as effective as in-person counselling?", a: "Yes. Research consistently shows online therapy can be just as effective as in-person therapy. It allows you to receive support from a comfortable and private space." },
      { q: "Is my session private and secure?", a: "Yes. Your privacy is very important to us. Sessions are held through a secure online platform, and your personal information is kept confidential." },
      { q: "How does an online session work?", a: "After booking your appointment, you will receive a private link to join your session. At the scheduled time, you simply click the link and meet with your counsellor online." },
      { q: "What do I need to join?", a: "A quiet, private space, a stable internet connection, and a device with a camera. That’s it." },
      { q: "What if I’m not comfortable with technology?", a: "That is completely okay. The platform is very easy to use and will guide you step by step so you feel comfortable joining your session." },
      { q: "Can I do therapy on my phone?", a: "Yes. You can join your online counselling session from your phone, as long as you have a stable internet connection and a private space." },
      { q: "Can couples or families do therapy together online?", a: "Yes. Couples and family members can join online sessions together, even if they are in different locations." },
      { q: "What if I’m not sure this service is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "How often do I need to attend online counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "Is online counselling covered by insurance?", a: "Yes, if you have coverage for in-person counselling, most insurance providers will provide coverage for online therapy. Coverage depends on your insurance provider, and we provide receipts that you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Le counselling en ligne est-il aussi efficace qu’en personne?", a: "Oui. Les recherches montrent régulièrement que la thérapie en ligne peut être aussi efficace que la thérapie en personne. Elle vous permet de recevoir du soutien dans un espace confortable et privé." },
      { q: "Ma séance est-elle privée et sécurisée?", a: "Oui. Votre confidentialité est très importante pour nous. Les séances se déroulent sur une plateforme sécurisée et vos renseignements personnels demeurent confidentiels." },
      { q: "Comment se déroule une séance en ligne?", a: "Après la réservation, vous recevez un lien privé pour rejoindre votre séance. À l’heure prévue, il suffit de cliquer sur le lien et de rencontrer votre conseiller en ligne." },
      { q: "De quoi ai-je besoin pour participer?", a: "Un endroit calme et privé, une connexion Internet stable et un appareil avec caméra. C’est tout." },
      { q: "Et si je ne suis pas à l’aise avec la technologie?", a: "C’est tout à fait correct. La plateforme est simple à utiliser et vous guide étape par étape pour que vous puissiez rejoindre la séance confortablement." },
      { q: "Puis-je faire la thérapie sur mon téléphone?", a: "Oui. Vous pouvez participer depuis votre téléphone, tant que vous avez une connexion stable et un espace privé." },
      { q: "Les couples ou les familles peuvent-ils faire une thérapie en ligne ensemble?", a: "Oui. Les couples et les membres d’une famille peuvent participer ensemble, même s’ils sont dans des lieux différents." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "À quelle fréquence devrais-je consulter en ligne?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Le counselling en ligne est-il couvert par les assurances?", a: "Souvent, oui. Si votre régime couvre le counselling en personne, plusieurs assureurs couvrent aussi la thérapie en ligne. La couverture dépend de votre assureur, et nous fournissons des reçus à soumettre pour remboursement. Veuillez vérifier votre couverture auprès de votre assureur." },
    ],
    fa: [
      { q: "آیا مشاوره آنلاین به اندازه مشاوره حضوری مؤثر است؟", a: "بله. پژوهش‌ها نشان می‌دهند درمان آنلاین می‌تواند به اندازه درمان حضوری مؤثر باشد و به شما این امکان را می‌دهد از فضایی راحت و خصوصی کمک حرفه‌ای دریافت کنید." },
      { q: "آیا جلسه من خصوصی و امن است؟", a: "بله. حریم خصوصی شما برای ما بسیار مهم است. جلسات از طریق یک پلتفرم امن برگزار می‌شوند و اطلاعات شخصی شما محرمانه می‌ماند." },
      { q: "جلسه آنلاین چگونه انجام می‌شود؟", a: "بعد از رزرو وقت مشاوره رایگان، لینک خصوصی جلسه را دریافت می‌کنید. در زمان مقرر، روی لینک کلیک می‌کنید و آنلاین با مشاور خود ملاقات می‌کنید." },
      { q: "برای شرکت در جلسه به چه چیزهایی نیاز دارم؟", a: "یک فضای آرام و خصوصی، اینترنت پایدار و دستگاهی که دوربین داشته باشد. همین کافی است." },
      { q: "اگر با تکنولوژی راحت نباشم چه؟", a: "کاملاً قابل درک است. پلتفرم ما بسیار ساده است و مرحله‌به‌مرحله شما را راهنمایی می‌کند تا از جلسات خود با آرامش بهره ببرید." },
      { q: "می‌توانم با گوشی در جلسه شرکت کنم؟", a: "بله. تا زمانی که اینترنت پایدار و فضای خصوصی داشته باشید، می‌توانید با گوشی وارد جلسه مشاوره آنلاین شوید." },
      { q: "آیا زوج‌ها یا خانواده‌ها می‌توانند آنلاین با هم درمان داشته باشند؟", a: "بله. زوج‌ها و اعضای خانواده می‌توانند حتی از مکان‌های متفاوت در جلسه آنلاین مشترک شرکت کنند." },
      { q: "اگر مطمئن نباشم این سرویس برای من مناسب است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره آنلاین برای شما انتخاب مناسبی هست یا نه." },
      { q: "جلسات مشاوره آنلاین هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "آیا مشاوره آنلاین تحت پوشش بیمه است؟", a: "در بسیاری از موارد بله. اگر بیمه شما مشاوره حضوری را پوشش دهد، بیشتر بیمه‌ها مشاوره آنلاین را هم پوشش می‌دهند. پوشش به بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم. لطفاً پوشش خود را با شرکت بیمه بررسی کنید." },
    ],
  },
};


Object.assign(serviceFaqOverrides, {
  "individual-counselling": {
    en: [
      { q: "How do I know if I’m ready for individual counselling?", a: "There is no perfect time to start therapy. If you feel drawn to exploring therapy, that is often reason enough to reach out. You do not need to have everything figured out before starting." },
      { q: "What if I don’t know where to start?", a: "That is very common. Your counsellor will help you slow down, explore what has been happening, and find a starting point together." },
      { q: "How do I choose the right therapist?", a: "Beyond credentials, the right therapist is someone you feel safe, respected, and comfortable with. A free consultation can help you sense whether the connection feels right." },
      { q: "What is the difference between counselling and therapy?", a: "The terms are often used in similar ways. Both can support healing, self-understanding, and personal growth. What matters most is finding a counsellor who feels right for you and your needs." },
      { q: "What approaches do you use?", a: "At ChangeMoment Mental Health Center, we use an evidence-based and personalized approach based on your needs, emotions, relationships, and life experiences." },
      { q: "Can individual counselling be done online?", a: "Yes. Individual counselling can be offered online, so you can attend sessions from a private and comfortable space." },
      { q: "How often should I attend individual counselling?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does individual counselling take?", a: "There is no fixed timeline. Some people come for a few focused sessions, while others continue longer to work through deeper patterns and experiences." },
      { q: "What if I’m not sure this service is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is individual counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your insurance provider, and we provide receipts you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Comment savoir si je suis prêt pour le counselling individuel?", a: "Il n’y a pas de moment parfait pour commencer. Si vous sentez l’élan d’explorer la thérapie, c’est souvent une raison suffisante pour demander du soutien. Vous n’avez pas besoin d’avoir tout compris avant de commencer." },
      { q: "Et si je ne sais pas par où commencer?", a: "C’est très fréquent. Votre conseiller vous aidera à ralentir, à explorer ce qui se passe et à trouver un point de départ ensemble." },
      { q: "Comment choisir le bon thérapeute?", a: "Au-delà des qualifications, le bon thérapeute est une personne avec qui vous vous sentez en sécurité, respecté et à l’aise. Une consultation gratuite peut aider à sentir si le lien est juste." },
      { q: "Quelle est la différence entre counselling et thérapie?", a: "Les termes sont souvent utilisés de façon similaire. Les deux peuvent soutenir la guérison, la compréhension de soi et la croissance personnelle. Le plus important est de trouver un conseiller qui vous convient." },
      { q: "Quelles approches utilisez-vous?", a: "Chez ChangeMoment Mental Health Center, nous utilisons une approche personnalisée et fondée sur les données probantes, selon vos besoins, émotions, relations et expériences de vie." },
      { q: "Le counselling individuel peut-il se faire en ligne?", a: "Oui. Le counselling individuel peut être offert en ligne, afin que vous puissiez participer depuis un espace privé et confortable." },
      { q: "À quelle fréquence devrais-je consulter?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling individuel?", a: "Il n’y a pas de durée fixe. Certaines personnes viennent pour quelques séances ciblées, tandis que d’autres poursuivent plus longtemps pour travailler des schémas plus profonds." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Le counselling individuel est-il couvert par les assurances?", a: "Plusieurs régimes d’assurance couvrent le counselling avec un conseiller clinique agréé. La couverture dépend de votre assureur, et nous fournissons des reçus à soumettre pour remboursement." },
    ],
    fa: [
      { q: "از کجا بدانم برای مشاوره فردی آماده‌ام؟", a: "زمان ایده‌آلی برای شروع درمان وجود ندارد. اگر احساس می‌کنید می‌خواهید درمان را بررسی کنید، همین می‌تواند دلیل کافی برای مراجعه باشد. نیازی نیست قبل از شروع همه چیز را بدانید." },
      { q: "اگر ندانم از کجا شروع کنم چه؟", a: "این کاملاً طبیعی است. تراپیست شما کمک می‌کند آرام‌ پیش بروید، آنچه در جریان بوده را بررسی کنید و با هم نقطه شروع را پیدا کنید." },
      { q: "چطور تراپیست مناسب را انتخاب کنم؟", a: "فراتر از مدرک و تخصص، درمانگر مناسب کسی است که کنار او احساس امنیت، احترام و راحتی داشته باشید. مشاوره رایگان می‌تواند کمک کند ببینید این ارتباط برایتان مناسب هست یا نه." },
      { q: "تفاوت counselling و therapy چیست؟", a: "این واژه‌ها اغلب به شکل مشابه استفاده می‌شوند. هر دو می‌توانند به بهبود، شناخت خود و رشد فردی کمک کنند. مهم‌تر از عنوان، پیدا کردن مشاوری است که با نیازهای شما هماهنگ باشد." },
      { q: "از چه رویکردهایی استفاده می‌کنید؟", a: "در مرکز سلامت روان ChangeMoment از رویکردی علمی، کاربردی و شخصی‌سازی‌شده استفاده می‌کنیم که بر اساس نیازها، احساسات، رابطه‌ها و تجربه‌های زندگی شما شکل می‌گیرد." },
      { q: "آیا مشاوره فردی آنلاین هم انجام می‌شود؟", a: "بله. مشاوره فردی می‌تواند آنلاین برگزار شود تا از فضایی خصوصی و راحت در جلسه شرکت کنید." },
      { q: "هر چند وقت یک‌بار باید در مشاوره فردی شرکت کنم؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره فردی چقدر طول می‌کشد؟", a: "زمان ثابت و یکسانی وجود ندارد. بعضی افراد برای چند جلسه متمرکز مراجعه می‌کنند و بعضی دیگر برای کار عمیق‌تر روی الگوها و تجربه‌ها زمان بیشتری نیاز دارند." },
      { q: "اگر مطمئن نباشم این سرویس برای من مناسب است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره فردی برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره فردی تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. پوشش به بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
  "relationship-and-couples-counselling": {
    en: [
      { q: "When should couples seek couples counselling?", a: "Couples counselling can be helpful when you feel stuck in repeated conflicts, emotional distance, trust issues, communication problems, or major life transitions. You do not have to wait until things feel too difficult." },
      { q: "What can we expect during our first session?", a: "Your counsellor will get to know both of you, understand your concerns, and explore what brings you to counselling. It is a space to slow down and begin understanding the patterns between you." },
      { q: "What if we are unsure about staying together?", a: "That uncertainty is welcome here. Couples counselling can help you explore your relationship with more clarity, honesty, and care, whether your goal is to rebuild the relationship or better understand what each of you needs." },
      { q: "Do we have to attend all sessions together?", a: "Most sessions are attended together, but sometimes individual sessions may be recommended as part of the process. This will be discussed clearly with both partners." },
      { q: "Can you help with high-conflict co-parenting?", a: "Yes, counselling can support communication, boundaries, and emotional regulation in co-parenting relationships. However, we do not provide legal advice, custody recommendations, or formal parenting assessments." },
      { q: "Will the therapist take sides?", a: "No. Your counsellor stays neutral and works for the relationship, helping both of you feel heard, respected, and understood." },
      { q: "What if we can’t agree on a therapist?", a: "It is important that both partners feel comfortable with the therapist. A free consultation can help you both ask questions and see whether the fit feels right." },
      { q: "How often do we need to attend sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does couples counselling take?", a: "There is no fixed timeline. Some couples come for short-term support, while others need more time to work through deeper patterns, wounds, or trust concerns." },
      { q: "Can we do couples counselling online?", a: "Yes. Couples counselling can be offered online, and partners can join from the same location or different locations." },
      { q: "Do you provide legal or financial advice?", a: "No. Couples counselling is not a substitute for legal or financial advice. We can support emotional communication and decision-making, but legal or financial questions should be discussed with the appropriate professionals." },
      { q: "Is couples counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your insurance provider, and we provide receipts you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Quand un couple devrait-il consulter?", a: "Le counselling de couple peut aider lorsque vous vous sentez coincés dans des conflits répétitifs, une distance émotionnelle, des enjeux de confiance, des difficultés de communication ou des transitions importantes. Il n’est pas nécessaire d’attendre que la situation devienne trop difficile." },
      { q: "À quoi s’attendre lors de la première séance?", a: "Le conseiller apprendra à vous connaître, comprendra vos préoccupations et explorera ce qui vous amène. C’est un espace pour ralentir et commencer à comprendre les schémas entre vous." },
      { q: "Et si nous ne savons pas si nous voulons rester ensemble?", a: "Cette incertitude est bienvenue. Le counselling peut vous aider à explorer la relation avec plus de clarté, d’honnêteté et de soin." },
      { q: "Devons-nous assister à toutes les séances ensemble?", a: "La plupart des séances se font ensemble, mais des séances individuelles peuvent parfois être recommandées. Cela sera discuté clairement avec les deux partenaires." },
      { q: "Pouvez-vous aider avec une coparentalité très conflictuelle?", a: "Oui, le counselling peut soutenir la communication, les limites et la régulation émotionnelle. Nous ne donnons toutefois pas d’avis juridique, de recommandations de garde ni d’évaluations parentales formelles." },
      { q: "Le thérapeute prendra-t-il parti?", a: "Non. Votre conseiller demeure neutre et travaille au service de la relation, afin que chacun se sente entendu, respecté et compris." },
      { q: "Et si nous ne sommes pas d’accord sur le thérapeute?", a: "Il est important que les deux partenaires soient à l’aise. Une consultation gratuite peut vous aider à poser vos questions et à sentir si le jumelage convient." },
      { q: "À quelle fréquence devons-nous consulter?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling de couple?", a: "Il n’y a pas de durée fixe. Certains couples viennent pour un soutien court terme, d’autres ont besoin de plus de temps pour travailler des schémas, blessures ou enjeux de confiance." },
      { q: "Peut-on faire le counselling de couple en ligne?", a: "Oui. Les partenaires peuvent participer en ligne depuis le même endroit ou depuis des lieux différents." },
      { q: "Offrez-vous des conseils juridiques ou financiers?", a: "Non. Le counselling ne remplace pas les conseils juridiques ou financiers. Nous pouvons soutenir la communication émotionnelle et la prise de décision, mais ces questions doivent être abordées avec les professionnels appropriés." },
      { q: "Le counselling de couple est-il couvert par les assurances?", a: "Plusieurs régimes couvrent le counselling avec un conseiller clinique agréé. La couverture dépend de votre assureur, et nous fournissons des reçus pour remboursement." },
    ],
    fa: [
      { q: "چه زمانی زوج‌ها باید برای زوج درمانی اقدام کنند؟", a: "زوج درمانی زمانی‌که در تعارض‌های تکراری، فاصله عاطفی، مشکل اعتماد، دشواری ارتباط یا تغییرات مهم زندگی گیر کرده‌اید می‌تواند مفید باشد. لزومی ندارد صبر کنید تا اوضاع خیلی سخت شود." },
      { q: "در جلسه اول زوج درمانی چه انتظاری می‌توانیم داشته باشیم؟", a: "تراپیست با هر دوی شما آشنا می‌شود، دغدغه‌هایتان را می‌شنود و بررسی می‌کند چه چیزی شما را به مشاوره آورده است. این فضا کمک می‌کند آرام‌تر شوید و الگوهای بین خودتان را بهتر ببینید." },
      { q: "اگر مطمئن نباشیم می‌خواهیم با هم بمانیم چه؟", a: "این تردید در فضای زوج‌درمانی، طبیعی است. زوج درمانی کمک می‌کند رابطه را با وضوح، صداقت و مراقبت بیشتری بررسی کنید." },
      { q: "آیا باید همه جلسات را با هم شرکت کنیم؟", a: "بیشتر جلسات با حضور هر دو نفر برگزار می‌شود، اما گاهی ممکن است جلسه فردی هم بخشی از روند درمان باشد. این موضوع از قبل با هر دو نفر به‌صورت شفاف مطرح می‌شود." },
      { q: "آیا برای هم‌والدگری پرتنش کمک می‌کنید؟", a: "بله، مشاوره می‌تواند به ارتباط، مرزبندی و تنظیم هیجان در رابطه هم‌والدگری کمک کند. اما ما مشاوره حقوقی، توصیه درباره حضانت یا ارزیابی رسمی والدگری ارائه نمی‌دهیم." },
      { q: "آیا درمانگر طرف یکی از ما را می‌گیرد؟", a: "خیر. مشاور بی‌طرف می‌ماند و روی رابطه کار می‌کند تا هر دو نفر احساس شنیده شدن، احترام و فهمیده شدن داشته باشند." },
      { q: "اگر روی انتخاب درمانگر توافق نداشته باشیم چه؟", a: "مهم است هر دو نفر با درمانگر احساس راحتی داشته باشند. جلسه مشاوره رایگان می‌تواند کمک کند سؤال‌هایتان را بپرسید و ببینید این انتخاب مناسب هست یا نه." },
      { q: "هر چند وقت یک‌بار باید جلسه داشته باشیم؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "زوج درمانی چقدر طول می‌کشد؟", a: "زمان ثابتی وجود ندارد. بعضی زوج‌ها برای تراپی کوتاه‌مدت مراجعه می‌کنند و بعضی برای کار روی الگوهای عمیق‌تر، زخم‌ها یا مساله اعتماد زمان بیشتری نیاز دارند." },
      { q: "آیا زوج درمانی آنلاین انجام می‌شود؟", a: "بله. زوج درمانی می‌تواند آنلاین برگزار شود و پارتنرها می‌توانند از یک مکان یا مکان‌های متفاوت در جلسه شرکت کنند." },
      { q: "آیا مشاوره حقوقی یا مالی ارائه می‌دهید؟", a: "خیر. زوج درمانی جایگزین مشاوره حقوقی یا مالی نیست. ما می‌توانیم در حوزه ارتباط عاطفی و تصمیم‌گیری به شما کمک کنیم، اما مسائل حقوقی و مالی باید با متخصصان مربوطه مطرح شوند." },
      { q: "اگر مطمئن نباشم این سرویس برای ما مناسب است چه؟", a: "می‌توانید یک وقت جلسه مشاوره رایگان رزرو کنید، باهم درباره شرایطتان، نیازها و انتظاراتتان صحبت کنیم تا ببینیم زوج درمانی نقطه مناسبی برای شروع هست یا نه." },
      { q: "آیا زوج درمانی تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. پوشش به بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  "family-counselling": {
    en: [
      { q: "When should a family consider family counselling?", a: "Family counselling can be helpful when conflict, distance, stress, parenting challenges, life transitions, or communication breakdowns are affecting the family system." },
      { q: "Who should attend family counselling?", a: "This depends on your goals. Your counsellor can help decide who should be included and when, so sessions feel useful and emotionally safe." },
      { q: "What can we expect in the first session?", a: "Your counsellor will get to know your family, understand the concerns, and begin identifying patterns in communication, roles, conflict, and emotional needs." },
      { q: "Can you help with high-conflict co-parenting?", a: "Yes, counselling can support communication, boundaries, and emotional regulation in co-parenting relationships. However, we do not provide legal advice, custody recommendations, or formal parenting assessments." },
      { q: "Can family counselling be done online?", a: "Yes. Family counselling can be offered online, and family members can join from the same or different locations." },
      { q: "How often do we need to attend sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does family counselling take?", a: "There is no fixed timeline. Some families come for short-term support, while others need more time to work through deeper patterns." },
      { q: "Do you provide legal or financial advice?", a: "No. Family counselling is not a substitute for legal or financial advice. We can support emotional communication and decision-making, but legal or financial questions should be discussed with the appropriate professionals." },
      { q: "What if not everyone wants to attend?", a: "That is common. Meaningful change can still begin with the family members who are ready to participate." },
      { q: "Is family counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your insurance provider, and we provide receipts you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Quand une famille devrait-elle envisager le counselling familial?", a: "Le counselling familial peut aider lorsque les conflits, la distance, le stress, les défis parentaux, les transitions ou les ruptures de communication touchent le système familial." },
      { q: "Qui devrait participer au counselling familial?", a: "Cela dépend de vos objectifs. Votre conseiller peut vous aider à décider qui inclure et à quel moment, afin que les séances soient utiles et sécurisantes." },
      { q: "À quoi s’attendre lors de la première séance?", a: "Le conseiller apprendra à connaître votre famille, comprendra les préoccupations et commencera à identifier les schémas de communication, de rôles, de conflits et de besoins émotionnels." },
      { q: "Pouvez-vous aider avec une coparentalité très conflictuelle?", a: "Oui, le counselling peut soutenir la communication, les limites et la régulation émotionnelle. Nous ne fournissons toutefois pas d’avis juridique, de recommandations de garde ni d’évaluations parentales formelles." },
      { q: "Le counselling familial peut-il se faire en ligne?", a: "Oui. Le counselling familial peut être offert en ligne, et les membres de la famille peuvent participer du même endroit ou de lieux différents." },
      { q: "À quelle fréquence devons-nous consulter?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling familial?", a: "Il n’y a pas de durée fixe. Certaines familles viennent pour un soutien court terme, tandis que d’autres ont besoin de plus de temps pour travailler des schémas plus profonds." },
      { q: "Offrez-vous des conseils juridiques ou financiers?", a: "Non. Le counselling familial ne remplace pas les conseils juridiques ou financiers. Nous pouvons soutenir la communication émotionnelle et la prise de décision, mais ces questions doivent être discutées avec les professionnels appropriés." },
      { q: "Et si tout le monde ne veut pas participer?", a: "C’est fréquent. Un changement significatif peut tout de même commencer avec les membres de la famille qui sont prêts à participer." },
      { q: "Le counselling familial est-il couvert par les assurances?", a: "Plusieurs régimes couvrent le counselling avec un conseiller clinique agréé. La couverture dépend de votre assureur, et nous fournissons des reçus à soumettre pour remboursement." },
    ],
    fa: [
      { q: "چه زمانی خانواده باید مشاوره خانواده را در نظر بگیرد؟", a: "وقتی تعارض، فاصله، استرس، چالش‌های والدگری، تغییرات زندگی یا اختلال در گفت‌وگو روی کل خانواده اثر می‌گذارد، مشاوره خانواده می‌تواند کمک‌کننده باشد." },
      { q: "چه کسانی باید در مشاوره خانواده شرکت کنند؟", a: "این موضوع به هدف شما از مشاوره بستگی دارد. مشاور کمک می‌کند تصمیم بگیرید چه کسانی و در چه زمانی در جلسات حضور داشته باشند تا روند درمان مفید و امن باشد." },
      { q: "در جلسه اول چه انتظاری داشته باشیم؟", a: "مشاور با خانواده شما آشنا می‌شود، دغدغه‌ها را می‌شنود و شروع می‌کند به شناخت الگوهای ارتباطی، نقش‌ها، تعارض‌ها و نیازهای عاطفی." },
      { q: "آیا برای هم‌والدگری پرتنش کمک می‌کنید؟", a: "بله، مشاوره می‌تواند به ارتباط، مرزبندی و تنظیم هیجان در رابطه هم‌والدگری کمک کند. اما ما مشاوره حقوقی، توصیه درباره حضانت یا ارزیابی رسمی والدگری ارائه نمی‌دهیم." },
      { q: "آیا مشاوره خانواده آنلاین انجام می‌شود؟", a: "بله. مشاوره خانواده می‌تواند آنلاین برگزار شود و اعضای خانواده می‌توانند از یک مکان یا مکان‌های متفاوت در جلسه شرکت کنند." },
      { q: "هر چند وقت یک‌بار باید جلسه داشته باشیم؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره خانواده چقدر طول می‌کشد؟", a: "زمان ثابتی وجود ندارد. بعضی خانواده‌ها برای مشاوره کوتاه‌مدت مراجعه می‌کنند و برخی دیگر برای کار روی الگوهای عمیق‌تر به زمان بیشتری نیاز دارند." },
      { q: "آیا مشاوره حقوقی یا مالی ارائه می‌دهید؟", a: "خیر. مشاوره خانواده جایگزین مشاوره حقوقی یا مالی نیست. ما می‌توانیم در زمینه تصمیمات خانوادگی و چالش‌های ارتباطی به شما کمک کنیم، اما مسائل حقوقی و مالی باید با متخصصان مربوطه مطرح شوند." },
      { q: "اگر همه اعضای خانواده نخواهند شرکت کنند چه؟", a: "این موضوع رایج است. تغییر معنادار می‌تواند با همان اعضایی شروع شود که آماده شرکت در فرآیند درمان هستند." },
      { q: "آیا مشاوره خانواده تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. پوشش به بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  anxiety: {
    en: [
      { q: "What is the main cause of my anxiety?", a: "Anxiety can come from stress, past experiences, childhood trauma, relationship patterns, life changes, ongoing pressure, genetics, or a combination of factors. In counselling, we gently explore what may be contributing to your anxiety and how it shows up in daily life." },
      { q: "Is online anxiety counselling as effective as in-person counselling?", a: "Yes. Research shows online anxiety counselling can be as effective as in-person counselling. It offers comfort, flexibility, and easier access to support, especially when anxiety makes attending in person difficult." },
      { q: "Should I take medication for anxiety?", a: "Medication can help some people, but it is not the only option. If you are considering medication, it is best to speak with your family doctor or psychiatrist while also exploring counselling support." },
      { q: "Do you use medication?", a: "No. Counsellors do not prescribe medication. Our work focuses on emotional support, understanding anxiety, building coping tools, and exploring the deeper patterns behind it." },
      { q: "How soon will I feel better?", a: "Many people notice small shifts early on, while deeper change builds over time. Everyone’s process is different, and we move at a pace that feels safe and supportive for you." },
      { q: "Do I have to discuss my past in anxiety counselling?", a: "Not unless it feels helpful or necessary. We can begin with what is happening now, and if past experiences seem connected to your anxiety, we can explore them gently and at your pace." },
      { q: "What if I’ve tried therapy before and it didn’t help my anxiety?", a: "That can feel discouraging, but it does not mean counselling cannot help. Sometimes a different counsellor, pace, or approach—especially one that includes the nervous system and body—can make therapy feel more useful." },
      { q: "What happens if I don’t get anxiety treatment?", a: "Untreated anxiety can become more intense and affect sleep, relationships, work, school, confidence, and daily life. Chronic nervous-system dysregulation can also contribute to depression. Counselling can help you understand and manage anxiety in healthier ways." },
      { q: "How often do I need to attend anxiety counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does anxiety counselling take?", a: "It varies. Some people feel relief within a few sessions, while others benefit from longer-term counselling when anxiety is intense, long-standing, or connected to deeper patterns." },
      { q: "What if I’m not sure anxiety counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is anxiety counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Quelle est la cause principale de mon anxiété?", a: "L’anxiété peut venir du stress, d’expériences passées, de traumas d’enfance, de dynamiques relationnelles, de changements de vie, de pression continue, de facteurs génétiques ou d’un ensemble de facteurs. En counselling, nous explorons doucement ce qui peut y contribuer." },
      { q: "Le counselling en ligne pour l’anxiété est-il aussi efficace qu’en personne?", a: "Oui. La recherche montre que le counselling en ligne peut être aussi efficace qu’en personne. Il offre confort, flexibilité et accès plus facile au soutien, surtout lorsque l’anxiété rend les déplacements difficiles." },
      { q: "Devrais-je prendre des médicaments pour l’anxiété?", a: "Les médicaments peuvent aider certaines personnes, mais ce n’est pas la seule option. Si vous y pensez, parlez-en à votre médecin de famille ou à un psychiatre tout en explorant le counselling." },
      { q: "Utilisez-vous des médicaments?", a: "Non. Les conseillers ne prescrivent pas de médicaments. Notre travail porte sur le soutien émotionnel, la compréhension de l’anxiété, les outils d’adaptation et les schémas plus profonds." },
      { q: "Quand vais-je commencer à me sentir mieux?", a: "Plusieurs personnes remarquent de petits changements assez tôt, tandis que les changements plus profonds prennent du temps. Nous avançons à un rythme sécurisant pour vous." },
      { q: "Dois-je parler de mon passé?", a: "Pas nécessairement. Nous pouvons commencer par ce qui se passe maintenant et explorer le passé seulement si cela semble utile, avec douceur et à votre rythme." },
      { q: "Et si j’ai déjà essayé la thérapie sans résultat?", a: "Cela peut être décourageant, mais cela ne veut pas dire que le counselling ne peut pas aider. Un autre rythme, une autre approche ou un travail qui inclut le corps et le système nerveux peut faire une différence." },
      { q: "Que se passe-t-il si je ne traite pas mon anxiété?", a: "L’anxiété non traitée peut s’intensifier et affecter le sommeil, les relations, le travail, l’école, la confiance et la vie quotidienne. Le counselling aide à mieux la comprendre et à la réguler." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling pour l’anxiété?", a: "Cela varie. Certaines personnes ressentent un soulagement en quelques séances; d’autres bénéficient d’un accompagnement plus long lorsque l’anxiété est ancienne, intense ou liée à des schémas profonds." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. La couverture dépend de votre assureur, et nous fournissons des reçus pour remboursement." },
    ],
    fa: [
      { q: "علت اصلی اضطراب چیست؟", a: "اضطراب می‌تواند از استرس، تجربیات گذشته، تروماهای کودکی، الگوهای ارتباطی، تغییرات زندگی، فشار مداوم، عوامل ژنتیکی یا ترکیبی از چند عامل شکل بگیرد. در مشاوره، باهم بررسی می‌کنیم چه چیزهایی منجر به اضطراب شما شده‌اند." },
      { q: "آیا درمان آنلاین اضطراب به اندازه درمان حضوری مؤثر است؟", a: "بله. پژوهش‌ها نشان داده‌اند جلسات آنلاین اضطراب می‌تواند به اندازه جلسات حضوری مؤثر باشد. این روش راحتی، انعطاف و دسترسی آسان‌تری فراهم می‌کند، به‌خصوص وقتی اضطراب، شرکت در جلسه حضوری را سخت می‌کند." },
      { q: "آیا برای اضطراب باید دارو مصرف کنم؟", a: "دارو برای بعضی افراد مفید است، اما تنها گزینه نیست. اگر به دارو فکر می‌کنید، بهتر است با پزشک خانواده یا روان‌پزشک صحبت کنید و هم‌زمان گزینه مشاوره را هم بررسی کنید." },
      { q: "آیا شما دارو تجویز می‌کنید؟", a: "خیر. مشاوران دارو تجویز نمی‌کنند. کار ما بر ساپورت عاطفی، شناخت اضطراب، ساختن ابزارهای مقابله‌ای و فهم الگوهای عمیق‌تر تمرکز دارد." },
      { q: "چقدر طول می‌کشد حالم بهتر شود؟", a: "بعضی افراد از همان جلسات اول تغییرات کوچکی احساس می‌کنند، اما تغییرات عمیق‌تر معمولاً زمان می‌برد. روند هر فرد متفاوت است و ما با ریتمی پیش می‌رویم که برای شما امن و مناسب باشد." },
      { q: "آیا باید درباره گذشته‌ام صحبت کنم؟", a: "نه مگر اینکه لازم یا کمک‌کننده باشد. می‌توانیم از وضعیت فعلی شروع کنیم و اگر تجربه‌های گذشته با اضطراب شما ارتباط داشت، کم‌کم گذشته را مورد تامل قرار دهیم." },
      { q: "اگر قبلاً تراپی رفته باشم و کمکی نکرده باشد چه؟", a: "این تجربه می‌تواند ناامیدکننده باشد، اما به معنی بی‌اثر بودن تراپی نیست. شخص تراپیست، ریتم یا رویکرد متفاوت—به‌خصوص رویکردی که بدن و سیستم عصبی را هم در نظر بگیرد—همگی می‌توانند تاثیرگذار باشند." },
      { q: "اگر اضطراب را درمان نکنم چه می‌شود؟", a: "اضطراب درمان‌نشده می‌تواند شدیدتر شود و خواب، روابط، کار، تحصیل، اعتمادبه‌نفس و زندگی روزمره را تحت تأثیر قرار دهد. مشاوره کمک می‌کند اضطراب را بهتر بفهمید و سالم‌تر مدیریت کنید." },
      { q: "جلسات درمان اضطراب هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "درمان اضطراب چقدر طول می‌کشد؟", a: "برای هر فرد متفاوت است. بعضی افراد در چند جلسه احساس آرامش بیشتری می‌کنند و بعضی دیگر، به‌خصوص اگر اضطراب طولانی‌مدت یا عمیق‌تر باشد، از روند طولانی‌تر بهره می‌برند." },
      { q: "اگر مطمئن نباشم درمان اضطراب برای من مناسب است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره اضطراب برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا درمان اضطراب تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیستردشده را پوشش می‌دهند. پوشش به بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم. لطفاً پوشش خود را با شرکت بیمه بررسی کنید." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  depression: {
    en: [
      { q: "What is the main cause of depression?", a: "Depression is complex and usually does not have one single cause. It can develop from biology, childhood trauma, personal experiences, emotional stress, burnout, relationship difficulties, family history, and broader life or social pressures." },
      { q: "Does counselling help depression?", a: "Yes. Counselling can help you understand emotions, thoughts, relationships, and patterns, while supporting healthier coping, reconnection with yourself, and meaningful change." },
      { q: "I feel like I’m lazy. Is that depression?", a: "What feels like laziness may be your body and mind feeling overwhelmed or shut down. Depression can affect motivation, energy, focus, and even simple daily tasks." },
      { q: "What is treatment-resistant depression?", a: "Treatment-resistant depression usually means depression has not improved as expected after treatment such as medication, counselling, or both. It does not mean there is no hope; a different approach, more time, or additional support may be needed." },
      { q: "What if I don’t have energy to start counselling?", a: "That is completely understandable. Depression can make small steps feel heavy. We can begin slowly, and you do not need to come prepared or know exactly what to say." },
      { q: "Is medication necessary in addition to counselling?", a: "Medication can help some people, but it is not always necessary. If you are wondering about medication, speak with your family doctor or psychiatrist while also exploring counselling." },
      { q: "What if I don’t experience immediate improvement?", a: "Healing from depression can take time. Some people feel relief early, while others notice progress gradually. We adjust the process based on your needs and progress showing up is more than enough." },
      { q: "How long does it take to start feeling better?", a: "Every journey is unique. Some people feel a little lighter after a few sessions, while others need more time before noticing changes in mood, energy, self-understanding, or daily life." },
      { q: "How is depression counselling different from talking to a friend?", a: "Support from friends is valuable, but counselling offers a private, professional, focused space where a counsellor helps you explore deeper patterns and coping strategies without judgment." },
      { q: "Can depression counselling be conducted online?", a: "Yes. Depression counselling can be offered online from a private, comfortable space and can be especially helpful when low energy or motivation makes in-person sessions difficult." },
      { q: "Can online depression counselling be as effective as in-person counselling?", a: "Yes. Research shows online depression counselling can be just as effective for many people, offering flexibility, comfort, and a meaningful therapeutic connection." },
      { q: "What happens if I don’t receive treatment for depression?", a: "Without support, depression can become more intense and affect sleep, relationships, work, school, confidence, and routines. It can also increase the risk of unhealthy coping habits such as drug and alcohol addiction." },
      { q: "Is it necessary to discuss my past in depression counselling?", a: "Not always. We can begin with what is happening now and explore past experiences only if they seem connected and it feels helpful." },
      { q: "How often do I need to attend depression counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does depression counselling take?", a: "There is no fixed timeline. Some people come for focused short-term support, while others continue longer to work through deeper emotional patterns or long-standing depression." },
      { q: "What if I’m not sure depression counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is depression counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Quelle est la cause principale de la dépression?", a: "La dépression est complexe et n’a généralement pas une seule cause. Elle peut être liée à la biologie, aux traumas d’enfance, au stress, à l’épuisement, aux relations, aux antécédents familiaux ou aux pressions de vie." },
      { q: "Le counselling aide-t-il la dépression?", a: "Oui. Il peut aider à mieux comprendre vos émotions, pensées, relations et schémas, et à retrouver des façons plus saines de faire face et de vous reconnecter à vous-même." },
      { q: "Je me sens paresseux. Est-ce la dépression?", a: "Ce qui ressemble à de la paresse peut être un signe d’épuisement ou de fermeture émotionnelle. La dépression peut toucher l’énergie, la motivation, la concentration et les tâches simples." },
      { q: "Qu’est-ce que la dépression résistante au traitement?", a: "Cela signifie généralement que la dépression ne s’est pas améliorée comme prévu après un traitement. Cela ne veut pas dire qu’il n’y a pas d’espoir; une autre approche ou plus de soutien peut être nécessaire." },
      { q: "Et si je n’ai pas l’énergie de commencer?", a: "C’est très compréhensible. Nous pouvons commencer lentement, à votre rythme, sans que vous ayez besoin d’être préparé ou de savoir quoi dire." },
      { q: "Les médicaments sont-ils nécessaires?", a: "Ils peuvent aider certaines personnes, mais ne sont pas toujours nécessaires. Si vous y pensez, parlez-en à votre médecin ou à un psychiatre tout en explorant le counselling." },
      { q: "Et si je ne vais pas mieux tout de suite?", a: "La guérison de la dépression peut prendre du temps. Certaines personnes ressentent un soulagement rapidement, tandis que d’autres constatent des progrès graduellement. Nous adaptons l’accompagnement à vos besoins et à votre évolution; votre présence suffit déjà largement." },
      { q: "Combien de temps avant de me sentir mieux?", a: "Chaque parcours est unique. Les changements peuvent apparaître par petites étapes dans l’humeur, l’énergie, la compréhension de soi ou la façon de vivre le quotidien." },
      { q: "En quoi est-ce différent de parler à un ami?", a: "Les amis sont précieux, mais le counselling offre un espace privé, professionnel et ciblé pour explorer les schémas plus profonds sans jugement." },
      { q: "Le counselling pour la dépression peut-il se faire en ligne?", a: "Oui. Il peut se faire en ligne depuis un espace privé et confortable, surtout lorsque l’énergie ou la motivation rend les déplacements difficiles." },
      { q: "Le counselling en ligne est-il aussi efficace?", a: "Oui, pour plusieurs personnes. Il peut offrir flexibilité, confort et une relation thérapeutique significative." },
      { q: "Que se passe-t-il si je ne traite pas ma dépression?", a: "Sans soutien, la dépression peut s’intensifier et affecter le sommeil, les relations, le travail, les études, la confiance et les routines. Elle peut aussi augmenter le risque de stratégies d’adaptation malsaines, comme la dépendance aux drogues ou à l’alcool." },
      { q: "Dois-je parler de mon passé?", a: "Pas toujours. Nous pouvons commencer par le présent et explorer le passé seulement si cela semble pertinent et utile." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling?", a: "Il n’y a pas de durée fixe. Certaines personnes viennent à court terme; d’autres poursuivent plus longtemps pour travailler des schémas plus profonds." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus pour remboursement." },
    ],
    fa: [
      { q: "علت اصلی افسردگی چیست؟", a: "افسردگی معمولاً یک علت واحد ندارد. می‌تواند از ترکیب عوامل ژنتیکی، تروماهای کودکی، تجربه‌های شخصی، فشار عاطفی، فرسودگی، مشکلات ارتباطی، سابقه خانوادگی و فشارهای زندگی شکل بگیرد." },
      { q: "آیا مشاوره به افسردگی کمک می‌کند؟", a: "بله. مشاوره کمک می‌کند احساسات، افکار، رابطه‌ها و الگوهایتان را بهتر بفهمید و راه‌های سالم‌تری برای ارتباط دوباره با خودتان پیدا کنید." },
      { q: "احساس می‌کنم تنبلم. ممکن است افسردگی باشد؟", a: "چیزی که شبیه تنبلی به نظر می‌رسد، گاهی نشانه خستگی عمیق یا خاموشی عاطفی است. افسردگی می‌تواند انگیزه، انرژی، تمرکز و حتی کارهای ساده را تحت تأثیر قرار دهد." },
      { q: "افسردگی مقاوم به درمان چیست؟", a: "یعنی افسردگی پس از درمان‌هایی مثل دارو، تراپی یا هر دو، آن‌طور که انتظار می‌رفته بهتر نشده است. این به معنی پایان راه نیست؛ شاید رویکرد، زمان یا فضای متفاوتی لازم باشد." },
      { q: "اگر انرژی شروع مشاوره را نداشته باشم چه؟", a: "کاملاً قابل درک است. افسردگی حتی قدم‌های کوچک را سخت می‌کند. می‌توانیم آرام آرام شروع کنیم. لازم نیست آماده باشید یا دقیقاً بدانید چه بگویید." },
      { q: "آیا دارو همراه با مشاوره لازم است؟", a: "برای بعضی افراد دارو مفید است، اما همیشه لازم نیست. اگر درباره دارو سؤال دارید، بهتر است با پزشک خانواده یا روان‌پزشک مشورت کنید." },
      { q: "اگر فوراً بهتر نشوم چه؟", a: "بهبود افسردگی زمان می‌برد. بعضی افراد زودتر به درمان پاسخ می‌دهند، برخی دیگر به‌‌صورت تدریجی تغییر را تجربه می‌کنند. روند درمان با نیاز و پیشرفت شما تنظیم می‌شود." },
      { q: "چقدر طول می‌کشد بهتر شوم؟", a: "مسیر هر فرد متفاوت است. تغییر ممکن است با قدم‌های کوچک در خلق، انرژی، شناخت خود یا پاسخ به زندگی روزمره دیده شود." },
      { q: "درمان افسردگی چه فرقی با حرف زدن با دوست دارد؟", a: "حمایت دوستان ارزشمند است، اما مشاوره فضایی خصوصی، حرفه‌ای و متمرکز فراهم می‌کند تا بدون قضاوت، الگوها و راهکارهای عمیق‌تر بررسی شوند." },
      { q: "آیا درمان افسردگی آنلاین انجام می‌شود؟", a: "بله. مشاوره آنلاین می‌تواند از فضایی خصوصی و راحت انجام شود و وقتی انرژی یا انگیزه کم است، دسترسی را آسان‌تر کند." },
      { q: "آیا درمان آنلاین افسردگی به اندازه حضوری مؤثر است؟", a: "بله، برای بسیاری از افراد می‌تواند مؤثر باشد و در عین انعطاف و راحتی، رابطه درمانی معناداری ایجاد کند." },
      { q: "اگر افسردگی را درمان نکنم چه می‌شود؟", a: "افسردگی بدون درمان می‌تواند اعتماد به نفس، زندگی روزمره، روابط، تحصیل و کار شما را تحت تاثیر قرار دهد و احتمال مکانیزم‌های مقابله‌ای ناسالم (مثل اعتیاد به الکل و مواد) را بیشتر کند." },
      { q: "آیا باید درباره گذشته‌ام صحبت کنم؟", a: "نه همیشه. می‌توانیم از حال شروع کنیم و اگر گذشته در افسردگی شما نقش داشت، به تدریج به آن بپردازیم." },
      { q: "جلسات درمان افسردگی هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "درمان افسردگی چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد. بعضی افراد برای درمان متمرکز کوتاه‌مدت مراجعه می‌کنند و بعضی برای کار روی الگوهای عمیق‌تر به زمان بیشتری نیاز دارند." },
      { q: "اگر مطمئن نباشم این سرویس مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا درمان افسردگی برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا درمان افسردگی تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  trauma: {
    en: [
      { q: "What is trauma?", a: "Trauma can happen when an experience feels too overwhelming, unsafe, or difficult to process. It may come from one painful event or repeated experiences that affect safety, trust, and connection." },
      { q: "Is therapy effective for healing trauma?", a: "Yes. Therapy can help you feel less controlled by the past, understand your responses, and build more safety, choice, and calm in your life." },
      { q: "Will I have to talk about the details of what happened?", a: "Not unless and until you are ready. We can begin with how trauma affects you now and move at a pace that feels safe and manageable." },
      { q: "Can talking about trauma make me feel worse?", a: "Trauma work can bring up difficult feelings, but it should not feel rushed or overwhelming. A trauma-informed approach focuses on safety, grounding, and staying connected to the present." },
      { q: "Everyone experiences trauma. Why should I seek therapy?", a: "Painful experiences affect people differently. If the past is still affecting your emotions, relationships, sleep, body, self-worth, or daily life, counselling can help." },
      { q: "Am I overreacting, or am I really traumatized?", a: "You are not overreacting. Trauma is not only about the event; it is also about how your mind, body, and nervous system were affected. It is important to recognize that dismissing our emotions or calling them an “overreaction” can create shame, loneliness, and further mental difficulties." },
      { q: "Is getting triggered easily a sign of trauma?", a: "It can be. Trauma can make the nervous system sensitive to reminders, emotions, tones, situations, or relationship dynamics." },
      { q: "Is it too late to heal from old trauma?", a: "No. It is never too late. Trauma counselling can help reduce the emotional weight of old wounds and support safer, more present ways of living." },
      { q: "What happens if I don’t address my trauma?", a: "Unaddressed trauma can affect mood, relationships, sleep, boundaries, self-worth, and how safe you feel in your body. Counselling can help you gently work through what has been carried for too long." },
      { q: "How do I know I am ready for trauma therapy?", a: "You do not need to feel completely ready. If you are tired of carrying it alone or notice the past affecting your present, that may be enough to begin slowly." },
      { q: "Can online trauma counselling be as effective as in-person counselling?", a: "Yes. Online trauma counselling can be effective when you have privacy, a stable internet connection, and a counsellor you feel safe with." },
      { q: "What approaches do you use?", a: "We use trauma-informed and evidence-based methods tailored to your needs, including work with emotions, thoughts, body responses, nervous-system regulation, coping patterns, and relationships." },
      { q: "What if I tried therapy before and it didn’t help?", a: "That can be discouraging, but therapy can still help. Sometimes healing requires a different relationship, pace, or approach that includes safety, the nervous system, and how trauma lives in the body." },
      { q: "How often do I need to attend trauma counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does trauma counselling take?", a: "It varies based on the nature of trauma, your needs, and the approach used. Healing is often gradual, and we work at a pace that feels safe and sustainable." },
      { q: "What if I’m not sure trauma counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is trauma counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Qu’est-ce qu’un trauma?", a: "Un trauma peut survenir lorsqu’une expérience est trop intense, dangereuse ou difficile à intégrer, qu’elle soit ponctuelle ou répétée." },
      { q: "La thérapie aide-t-elle à guérir un trauma?", a: "Oui. Elle peut aider à se sentir moins contrôlé par le passé, à comprendre ses réactions et à retrouver plus de sécurité, de choix et de calme." },
      { q: "Devrai-je raconter les détails?", a: "Seulement si et quand vous êtes prêt. Nous pouvons commencer par l’impact actuel du trauma et avancer à un rythme sécurisant." },
      { q: "Parler du trauma peut-il me faire sentir pire?", a: "Des émotions difficiles peuvent surgir, mais le travail ne doit pas être précipité. L’approche sensible au trauma priorise la sécurité et l’ancrage." },
      { q: "Pourquoi consulter si tout le monde vit des choses difficiles?", a: "Les expériences touchent chacun différemment. Si le passé affecte encore vos émotions, relations, sommeil, corps ou vie quotidienne, le counselling peut aider." },
      { q: "Est-ce que j’exagère?", a: "Non. Le trauma concerne aussi la façon dont votre corps, votre esprit et votre système nerveux ont été touchés. Il est important de reconnaître que minimiser nos émotions ou les qualifier de « réaction excessive » peut engendrer de la honte, de la solitude et d’autres difficultés psychologiques." },
      { q: "Être facilement déclenché est-il un signe de trauma?", a: "Cela peut l’être. Le système nerveux peut devenir sensible à certains rappels, tons, situations ou dynamiques relationnelles." },
      { q: "Est-il trop tard pour guérir d’un vieux trauma?", a: "Non. Il n’est jamais trop tard pour réduire le poids émotionnel d’anciennes blessures." },
      { q: "Que se passe-t-il si je ne m’en occupe pas?", a: "Un trauma non abordé peut affecter l’humeur, les relations, le sommeil, les limites, l’estime de soi et le sentiment de sécurité." },
      { q: "Comment savoir si je suis prêt?", a: "Vous n’avez pas besoin d’être complètement prêt. Vouloir ne plus porter cela seul peut suffire pour commencer doucement." },
      { q: "Le counselling en ligne est-il efficace?", a: "Oui, s’il y a intimité, connexion stable et un conseiller avec qui vous vous sentez en sécurité." },
      { q: "Quelles approches utilisez-vous?", a: "Nous utilisons des méthodes sensibles au trauma et fondées sur les données probantes, adaptées à vos besoins." },
      { q: "Et si la thérapie n’a pas aidé avant?", a: "Cela ne veut pas dire que la thérapie ne peut pas aider. Un autre rythme, lien thérapeutique ou type d’approche peut faire une différence." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps cela prend-il?", a: "Cela varie. La guérison du trauma est souvent graduelle et doit respecter un rythme sécurisant." },
      { q: "Et si je ne suis pas certain?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus." },
    ],
    fa: [
      { q: "تروما چیست؟", a: "تروما زمانی شکل می‌گیرد که تجربه‌ای بیش از حد سنگین یا دشوار برای پردازش باشد؛ چه یک اتفاق باشد و چه تجربه‌های تکرارشونده‌ای که حس امنیت، اعتماد و ارتباط را تحت تأثیر قرار داده‌اند." },
      { q: "آیا تراپی برای بهبود تروما مؤثر است؟", a: "بله. تراپی کمک می‌کند گذشته کمتر شما را کنترل کند، واکنش‌هایتان را بهتر بفهمید و در زندگی احساس امنیت، انتخاب و آرامش بیشتری داشته باشید." },
      { q: "آیا باید جزئیات اتفاق را تعریف کنم؟", a: "نه مگر زمانی که آماده باشید. می‌توانیم از تأثیر تروما در امروز شروع کنیم و با ریتمی امن و قابل تحمل پیش برویم." },
      { q: "آیا صحبت درباره تروما حالم را بدتر می‌کند؟", a: "ممکن است احساسات سختی بالا بیاید، اما کار با تروما نباید عجولانه یا پریشان‌کننده باشد. رویکرد متمرکز بر تروما بر احساس امنیت و آرامش تاکید دارد." },
      { q: "همه تجربیات دردناک دارند، چرا من باید تراپی بگیرم؟", a: "تجربیات سخت روی هر فردی تاثیر متفاوتی دارند. اگر گذشته هنوز روی احساسات، روابط، بدن، خواب، احساس ارزشمندی یا زندگی روزمره شما اثر دارد، بهتر است از تراپی کمک بگیرید." },
      { q: "آیا دارم اغراق می‌کنم؟", a: "نه. تروما فقط درباره خود آن اتفاق نیست؛ درباره اثری است که روی ذهن، بدن و سیستم عصبی شما گذاشته است. مهم است بدانیم نادیده گرفتن احساساتمان یا نامیدن آن‌ها به‌عنوان «اغراق» می‌تواند شرم، تنهایی و دشواری‌های بیشتر روانی ایجاد کند." },
      { q: "زود تحریک شدن عصبی می‌تواند نشانه تروما باشد؟", a: "بله، می‌تواند باشد. تروما سیستم عصبی را نسبت به یادآورها، لحن‌ها، موقعیت‌ها یا روابط حساس‌تر می‌کند." },
      { q: "برای درمان تروماهای قدیمی دیر نیست؟", a: "نه. هیچ‌وقت برای بهبود دیر نیست. مشاوره می‌تواند وزن عاطفی زخم‌های قدیمی را کمتر کند." },
      { q: "اگر به تروما رسیدگی نکنم چه می‌شود؟", a: "تروما می‌تواند روی خلق، روابط، عزت نفس و احساس امنیت شما تاثیر جدی بگذارد. مشاوره کمک می‌کند به آرامی با آنچه مدتها حمل کرده‌اید روبه‌رو شوید." },
      { q: "از کجا بدانم آماده درمان تروما هستم؟", a: "لازم نیست کاملاً آماده باشید. اگر از تنها حمل کردنش خسته شده‌اید یا می‌بینید گذشته هنوز امروزتان را تحت تأثیر قرار می‌دهد، همین می‌تواند نقطه شروع باشد." },
      { q: "آیا مشاوره آنلاین تروما مؤثر است؟", a: "بله، اگر فضای خصوصی، اینترنت پایدار و درمانگری داشته باشید که با او احساس امنیت کنید." },
      { q: "از چه رویکردهایی استفاده می‌کنید؟", a: "ما از رویکرد متمرکز بر تروما متناسب با نیاز شما و با توجه به احساسات ، افکار، تنظیم سیستم عصبی و الگوهای ارتباطی استفاده می‌کنیم." },
      { q: "اگر قبلاً تراپی کمک نکرده باشد چه؟", a: "این تجربه ناامیدکننده است، اما به معنی بی‌فایده بودن تراپی نیست. گاهی رابطه درمانی، ریتم یا رویکرد متفاوت لازم است." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "درمان تروما چقدر طول می‌کشد؟", a: "بسته به نوع تروما و نیازهای شما متفاوت است. بهبود معمولاً تدریجی است و با ریتمی امن پیش می‌رود." },
      { q: "اگر مطمئن نباشم مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا درمان تروما برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا درمان تروما تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  "grief-and-loss": {
    en: [
      { q: "What is grief counselling?", a: "Grief counselling offers a therapeutic space to process loss, understand your emotions, and find ways to live with grief over time without being rushed to move on." },
      { q: "Is it normal to still grieve after a long time?", a: "Yes. Grief has no deadline. Memories, dates, places, and life changes can bring strong emotions back even months or years later." },
      { q: "How do I know if I need professional help for my grief?", a: "You may benefit from grief counselling if grief feels overwhelming, isolating, hard to manage alone, or is interfering with daily life. It can also be helpful when you need a place to share your grief openly, without feeling that you have to protect your loved ones from your pain." },
      { q: "Will grief counselling take away the painful emotions?", a: "Counselling does not erase the pain of loss, but it can help you understand and move through emotions in a gentler, more supported way." },
      { q: "Is it normal to feel angry during grief?", a: "Yes. Anger can be a natural part of grief. You may feel angry at the situation, yourself, others, or even the person you lost. Counselling can help you explore it without judgment." },
      { q: "Will therapy make me forget?", a: "No. Grief counselling is about remembering, honouring, and living while making space for your grief." },
      { q: "Can grief counselling help with non-death-related loss?", a: "Yes. Grief can follow separation, divorce, infertility, immigration, illness, job loss, life transitions, or loss of identity or safety." },
      { q: "I feel relieved after my loved one died. Is this normal?", a: "Yes. This can happen after illness, caregiving stress, or complicated relationships. Relief does not mean you did not love them." },
      { q: "How can I support a person who is grieving?", a: "Listen, be patient, check in, prepare meals, and avoid trying to fix or rush their grief. Steady support often matters more than perfect words." },
      { q: "Do you offer online grief counselling?", a: "Yes. Online grief counselling can help when grief makes travel, leaving home, or scheduling feel difficult." },
      { q: "How often do I need to attend grief counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does grief counselling take?", a: "There is no fixed timeline. Some people come short-term after a recent loss, while others continue longer for complicated grief or deeper pain." },
      { q: "What if I’m not sure grief counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is grief counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Qu’est-ce que le counselling de deuil?", a: "C’est un espace thérapeutique pour vivre la perte, comprendre vos émotions et apprendre à porter le deuil sans pression de passer à autre chose." },
      { q: "Est-ce normal de vivre encore le deuil longtemps après?", a: "Oui. Le deuil n’a pas d’échéance. Des souvenirs, dates ou changements peuvent raviver les émotions." },
      { q: "Comment savoir si j’ai besoin d’aide professionnelle?", a: "Le counselling peut aider si le deuil est envahissant, isolant, difficile à gérer seul ou nuit au quotidien. Il peut aussi être utile lorsque vous avez besoin d’un espace pour partager votre deuil ouvertement, sans avoir l’impression de devoir protéger vos proches de votre douleur." },
      { q: "Le counselling enlèvera-t-il la douleur?", a: "Il n’efface pas la perte, mais aide à traverser les émotions avec plus de douceur et de soutien." },
      { q: "Est-ce normal d’être en colère?", a: "Oui. La colère peut faire naturellement partie du deuil. Vous pouvez ressentir de la colère envers la situation, envers vous-même, envers les autres ou même envers la personne que vous avez perdue. Le counselling peut vous aider à l’explorer sans jugement." },
      { q: "La thérapie me fera-t-elle oublier?", a: "Non. Il s’agit de se souvenir, d’honorer et de vivre en faisant une place au deuil." },
      { q: "Aidez-vous les pertes qui ne sont pas liées à un décès?", a: "Oui, y compris séparation, infertilité, immigration, maladie, perte d’emploi, transition de vie ou perte d’identité." },
      { q: "Je ressens du soulagement après un décès. Est-ce normal?", a: "Oui. Cela peut arriver après une maladie, du stress de proche aidance ou une relation compliquée." },
      { q: "Comment soutenir quelqu’un en deuil?", a: "Écouter, être patient, prendre des nouvelles, aider concrètement et ne pas presser son deuil." },
      { q: "Offrez-vous le counselling de deuil en ligne?", a: "Oui. Cela peut être utile lorsque sortir, se déplacer ou organiser son horaire est difficile." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps cela prend-il?", a: "Il n’y a pas de durée fixe; cela dépend de la perte et de vos besoins." },
      { q: "Et si je ne suis pas certain?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus." },
    ],
    fa: [
      { q: "مشاوره سوگ چیست؟", a: "مشاوره سوگ فضایی درمانی برای پردازش فقدان، فهم احساسات و پیدا کردن راهی برای زندگی با سوگ فراهم می‌کند، بدون فشار برای اینکه زودتر عبور کنید." },
      { q: "طبیعی است بعد از مدت طولانی هنوز سوگوار باشم؟", a: "بله. سوگ زمان‌بندی مشخصی ندارد. خاطره‌ها، تاریخ‌ها، مکان‌ها یا تغییرات زندگی می‌توانند حتی سال‌ها بعد احساسات شدید ایجاد کنند." },
      { q: "از کجا بدانم برای سوگ به کمک حرفه‌ای نیاز دارم؟", a: "اگر سوگ برایتان سنگین و غیرقابل تحمل شده یا زندگی روزمره‌تان را مختل کرده، مشاوره می‌تواند کمک‌کننده باشد. همچنین وقتی به فضایی نیاز دارید که بتوانید سوگتان را آزادانه در میان بگذارید، بدون اینکه احساس کنید باید عزیزانتان را از درد خود محافظت کنید، کمک‌گرفتن می‌تواند مفید باشد." },
      { q: "آیا مشاوره سوگ درد را از بین می‌برد؟", a: "مشاوره، درد فقدان را پاک نمی‌کند، اما کمک می‌کند احساساتتان را با درک و مهربانی بفهمید و از میانشان عبور کنید." },
      { q: "خشم در سوگ طبیعی است؟", a: "بله. خشم می‌تواند بخش طبیعی سوگ باشد. ممکن است از موقعیت، خودتان، دیگران یا حتی فردی که از دست داده‌اید عصبانی باشید. مشاوره کمک می‌کند بدون قضاوت آن را تجربه کنید." },
      { q: "آیا تراپی باعث می‌شود فراموش کنم؟", a: "خیر. هدف مشاوره سوگ فراموش کردن نیست؛ بلکه هدف به یاد داشتن، احترام گذاشتن و زندگی کردن در کنار سوگ است." },
      { q: "آیا برای فقدان‌هایی غیر از مرگ هم کمک می‌کنید؟", a: "بله. سوگ می‌تواند بعد از جدایی، طلاق، ناباروری، مهاجرت، بیماری، از دست دادن شغل، تغییرات زندگی یا از دست دادن حس هویت و امنیت رخ دهد." },
      { q: "بعد از مرگ عزیزم احساس آرامش دارم. طبیعی است؟", a: "بله، به‌خصوص بعد از بیماری طولانی، فشار مراقبت یا رابطه پیچیده. احساس آرامش هرگز به معنی نبود عشق نیست." },
      { q: "چطور از فرد سوگوار حمایت کنم؟", a: "به او گوش دهید، صبور باشید، سر بزنید، کمک عملی کنید و برای درست کردن حالش یا فراموش کردن سوگ فشار نیاورید." },
      { q: "آیا مشاوره سوگ آنلاین ارائه می‌دهید؟", a: "بله. وقتی سوگ رفت‌وآمد یا برنامه‌ریزی را دشوار کرده، مشاوره آنلاین می‌تواند مفید باشد." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره سوگ چقدر طول می‌کشد؟", a: "زمان ثابتی وجود ندارد. بعضی افراد کوتاه‌مدت مراجعه می‌کنند و بعضی برای سوگ پیچیده یا درد عمیق‌تر زمان بیشتری نیاز دارند." },
      { q: "اگر مطمئن نباشم مشاوره سوگ مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره سوگ برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره سوگ تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
  "anger-management": {
    en: [
      { q: "Is anger always a problem?", a: "No. Anger is a normal emotion that can signal something feels unfair, hurtful, or unsafe. It becomes a concern when it feels out of control or affects relationships, work, family, or wellbeing." },
      { q: "How do I know if I have anger issues?", a: "Support may help if anger feels intense, hard to calm, or leads to yelling, blaming, shutting down, breaking trust, or regretting what you said or did." },
      { q: "What is the difference between anger and aggression?", a: "Anger is an emotion; aggression is a behaviour. Counselling helps you express anger in safer, clearer, more respectful ways." },
      { q: "Do I need severe anger issues to benefit from therapy?", a: "No. Counselling can help even if anger is simply affecting communication, stress, parenting, relationships, or self-esteem." },
      { q: "Will I have to suppress my feelings?", a: "Not at all. Anger management counselling is about understanding anger and expressing feelings without harming yourself or others." },
      { q: "Why do my anger management skills sometimes not work?", a: "Skills may not work when emotions are too intense, the nervous system is overwhelmed, or deeper hurt, fear, stress, or trauma has not been addressed." },
      { q: "What is the best treatment for anger?", a: "There is no one-size-fits-all treatment. Helpful counselling often includes emotional awareness, Communication skills, coping tools, nervous-system regulation, and exploring deeper patterns." },
      { q: "Will I have to talk about my past?", a: "Not always. We can begin with what is happening now and explore the past only if it seems connected and helpful." },
      { q: "Can anger management therapy be done online?", a: "Yes. Online counselling can support self-awareness, emotional regulation, and healthier communication from a private, comfortable space." },
      { q: "How often do I need sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does anger management counselling take?", a: "There is no fixed timeline. Some people come short-term for tools, while others continue longer to explore deeper patterns." },
      { q: "What if I’m not sure this is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is anger management counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "La colère est-elle toujours un problème?", a: "Non. C’est une émotion normale. Elle devient préoccupante lorsqu’elle semble hors de contrôle ou nuit aux relations, au travail, à la famille ou au bien-être." },
      { q: "Comment savoir si j’ai un problème de colère?", a: "Le soutien peut aider si la colère est intense, difficile à calmer, ou mène aux cris, au blâme, au retrait ou aux regrets." },
      { q: "Quelle est la différence entre colère et agressivité?", a: "La colère est une émotion; l’agressivité est un comportement. Le counselling aide à l’exprimer plus clairement et respectueusement." },
      { q: "Dois-je avoir un problème sévère pour consulter?", a: "Non. Le counselling peut aider dès que la colère affecte la communication, le stress, la parentalité, les relations ou l’estime de soi." },
      { q: "Devrai-je réprimer mes émotions?", a: "Pas du tout. Il s’agit de comprendre la colère et d’exprimer les émotions sans se blesser ni blesser les autres." },
      { q: "Pourquoi mes outils ne fonctionnent-ils pas toujours?", a: "Ils peuvent échouer quand l’émotion est trop intense ou que des blessures, peurs, stress ou traumas plus profonds ne sont pas abordés." },
      { q: "Quel est le meilleur traitement?", a: "Il n’y a pas de solution unique. Le travail peut inclure conscience émotionnelle, communication, outils concrets et régulation du système nerveux." },
      { q: "Devrai-je parler du passé?", a: "Pas toujours. Nous pouvons commencer par le présent et explorer le passé seulement si cela semble utile." },
      { q: "Est-ce possible en ligne?", a: "Oui. Le counselling en ligne peut soutenir la régulation émotionnelle et la communication depuis un espace privé." },
      { q: "À quelle fréquence venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps cela prend-il?", a: "Il n’y a pas de durée fixe; certains viennent pour des outils à court terme, d’autres pour un travail plus profond." },
      { q: "Et si je ne suis pas certain?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus." },
    ],
    fa: [
      { q: "آیا خشم همیشه یک مشکل است؟", a: "خیر. خشم یک احساس طبیعی است و می‌تواند نشان دهد چیزی ناعادلانه، دردناک یا ناامن تحربه می‌شود. وقتی خشم از کنترل خارج شود، تبدیل به پرخاشگری شود و روی روابط، کار، خانواده یا سلامت شما اثر بگذارد، نیاز به رسیدگی دارد." },
      { q: "از کجا بدانم در مدیریت خشم مشکل دارم؟", a: "اگر خشم شما شدید است، سخت آرام می‌شود یا باعث پرخاشگری، فریاد، سرزنش، سکوت، پشیمانی یا آسیب به اعتماد می‌شود، مشاوره می‌تواند کمک کند." },
      { q: "فرق خشم و پرخاشگری چیست؟", a: "خشم احساس است؛ پرخاشگری رفتار. هدف مشاوره حذف خشم نیست، بلکه بیان امن‌تر، روشن‌تر و محترمانه‌تر آن است." },
      { q: "آیا باید مشکل خشم شدید داشته باشم تا به فکر تراپی باشم؟", a: "خیر. حتی اگر خشم روی ارتباط، استرس، والدگری، رابطه یا عزت‌نفس شما اثر گذاشته باشد، مشاوره می‌تواند مفید باشد." },
      { q: "آیا باید احساساتم را سرکوب کنم؟", a: "اصلاً. مشاوره مدیریت خشم به معنای پنهان کردن احساسات نیست؛ بلکه درباره فهم خشم و بیان احساسات بدون آسیب به خود یا دیگران است." },
      { q: "چرا مهارت‌های کنترل خشم همیشه جواب نمی‌دهند؟", a: "وقتی احساسات خیلی شدید باشند، سیستم عصبی پریشان شده باشد یا ترس، استرس یا ترومای عمیق‌تری برانگیخته شده باشد، مهارت‌های ساده دیگر کافی نیستند." },
      { q: "بهترین درمان برای خشم چیست؟", a: "یک نسخه واحد وجود ندارد. اما معمولاً آگاهی عاطفی، مهارت‌های ارتباطی، ابزارهای مقابله‌ای، تنظیم سیستم عصبی و شناخت الگوهای عمیق‌تر کمک‌کننده‌اند." },
      { q: "آیا باید درباره گذشته‌ام حرف بزنم؟", a: "نه ازوما. می‌توانیم از وضعیت فعلی شروع کنیم و اگر گذشته مرتبط و کمک‌کننده بود، به آن بپردازیم." },
      { q: "آیا مشاوره مدیریت خشم آنلاین انجام می‌شود؟", a: "بله. مشاوره آنلاین می‌تواند از فضای خصوصی و راحت شما به خودآگاهی، تنظیم هیجان و ارتباط سالم‌تر کمک کند." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره مدیریت خشم چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد. بعضی افراد برای ابزارهای کوتاه‌مدت مراجعه می‌کنند و بعضی برای الگوهای عمیق‌تر زمان بیشتری نیاز دارند." },
      { q: "اگر مطمئن نباشم مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره مدیریت خشم برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره مدیریت خشم تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  adhd: {
    en: [
      { q: "Do you provide an ADHD diagnosis?", a: "No. ADHD counselling does not include a formal ADHD diagnosis. If you are looking for an assessment or diagnosis, we recommend speaking with a family doctor, psychologist, psychiatrist, or another qualified healthcare provider." },
      { q: "Can therapy help ADHD without medication?", a: "Yes. Medication can be helpful for some people, but therapy can also support ADHD by helping with routines, emotional regulation, organization, self-esteem, procrastination, and relationship challenges. If you are wondering about medication, it is best to speak with your doctor or psychiatrist." },
      { q: "Is ADHD counselling for adults or children?", a: "At ChangeMoment Mental Health Center, ADHD counselling is mainly for adults. If you are looking for support for a child or teen, we can briefly discuss your needs and help you decide what kind of support may be the best fit." },
      { q: "How does ADHD therapy differ for children and adults?", a: "For children, ADHD support often includes parents, caregivers, school routines, and behaviour strategies. For adults, therapy often focuses more on daily responsibilities, work, relationships, emotional regulation, time management, and the stress or shame that can come from living with ADHD." },
      { q: "What unique perspective does an ADHD-informed therapist bring to therapy?", a: "An ADHD-informed therapist understands that ADHD is not about laziness or lack of effort. Therapy can help you understand how your brain works, reduce self-blame, and build strategies that feel realistic for your life." },
      { q: "Do you offer online ADHD counselling?", a: "Yes. ADHD counselling can be offered online, allowing you to attend from a private and comfortable space. Online sessions can be especially helpful if travel, scheduling, or transitions feel difficult." },
      { q: "Can online ADHD counselling be as effective as in-person sessions?", a: "Absolutely! Online ADHD counselling can be effective for many people, especially when the session is structured, supportive, and focused on your needs. Research on online ADHD interventions also suggests they can be helpful for ADHD symptoms and daily functioning." },
      { q: "How often do I need to attend ADHD counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does ADHD counselling take?", a: "There is no fixed timeline. Some people come for short-term or focused support around routines, organization, or emotional regulation, while others continue longer to work through deeper patterns, self-esteem, relationships, or long-standing ADHD-related challenges." },
      { q: "What if I’m not sure ADHD counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is ADHD counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your insurance provider, and we provide receipts you can submit for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Proposez-vous un diagnostic de TDAH?", a: "Non. Le counselling TDAH ne comprend pas de diagnostic formel de TDAH. Si vous cherchez une évaluation ou un diagnostic, nous vous recommandons de consulter un médecin de famille, un psychologue, un psychiatre ou un autre professionnel de la santé qualifié." },
      { q: "La thérapie peut-elle aider le TDAH sans médicament?", a: "Oui. Les médicaments peuvent aider certaines personnes, mais la thérapie peut aussi soutenir le TDAH en travaillant les routines, la régulation émotionnelle, l’organisation, l’estime de soi, la procrastination et les défis relationnels. Si vous vous questionnez sur les médicaments, le mieux est d’en parler avec votre médecin ou votre psychiatre." },
      { q: "Le counselling TDAH s’adresse-t-il aux adultes ou aux enfants?", a: "Chez ChangeMoment Mental Health Center, le counselling TDAH s’adresse surtout aux adultes. Si vous cherchez du soutien pour un enfant ou un adolescent, nous pouvons discuter brièvement de vos besoins et vous aider à déterminer quel type de soutien conviendrait le mieux." },
      { q: "En quoi la thérapie TDAH diffère-t-elle pour les enfants et les adultes?", a: "Pour les enfants, le soutien TDAH inclut souvent les parents, les proches aidants, les routines scolaires et des stratégies comportementales. Pour les adultes, la thérapie se concentre davantage sur les responsabilités quotidiennes, le travail, les relations, la régulation émotionnelle, la gestion du temps et le stress ou la honte qui peuvent accompagner le TDAH." },
      { q: "Quelle perspective particulière un thérapeute informé sur le TDAH apporte-t-il?", a: "Un thérapeute informé sur le TDAH comprend que le TDAH n’est ni de la paresse ni un manque d’effort. La thérapie peut vous aider à comprendre le fonctionnement de votre cerveau, à réduire l’autocritique et à bâtir des stratégies réalistes pour votre vie." },
      { q: "Offrez-vous du counselling TDAH en ligne?", a: "Oui. Le counselling TDAH peut être offert en ligne depuis un espace privé et confortable. Les séances en ligne peuvent être particulièrement utiles si les déplacements, l’horaire ou les transitions sont difficiles." },
      { q: "Le counselling TDAH en ligne peut-il être aussi efficace qu’en personne?", a: "Absolument. Le counselling TDAH en ligne peut être efficace pour de nombreuses personnes, surtout lorsque les séances sont structurées, soutenantes et centrées sur vos besoins. Les recherches sur les interventions TDAH en ligne suggèrent aussi qu’elles peuvent aider les symptômes et le fonctionnement au quotidien." },
      { q: "À quelle fréquence dois-je suivre des séances de counselling TDAH?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling TDAH?", a: "Il n’y a pas de durée fixe. Certaines personnes viennent pour un soutien court terme ou ciblé autour des routines, de l’organisation ou de la régulation émotionnelle; d’autres poursuivent plus longtemps pour travailler des schémas plus profonds, l’estime de soi, les relations ou des défis liés au TDAH de longue date." },
      { q: "Et si je ne suis pas certain que le counselling TDAH me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Le counselling TDAH est-il couvert par les assurances?", a: "De nombreux régimes d’assurance complémentaire couvrent le counselling offert par un conseiller clinique agréé. La couverture dépend de votre assureur, et nous fournissons des reçus que vous pouvez soumettre pour remboursement. Veuillez vérifier votre couverture auprès de votre assureur." },
    ],
    fa: [
      { q: "آیا تشخیص ADHD انجام می‌دهید؟", a: "خیر. درمان اختلال نقص توجه و بیش فعالی شامل تشخیص رسمی ADHD نمی‌شود. اگر به دنبال ارزیابی یا تشخیص هستید، توصیه می‌کنیم با پزشک خانواده، روان‌شناس، روان‌پزشک یا دیگر متخصصان واجد شرایط مشورت کنید." },
      { q: "آیا تراپی بدون دارو می‌تواند به ADHD کمک کند؟", a: "بله. دارو برای بعضی افراد مفید است، اما تراپی نیز می‌تواند با ساختن روتین‌ها، تنظیم هیجان، سازمان‌دهی، عزت‌نفس، مدیریت اهمال‌کاری و چالش‌های ارتباطی به بهبود ADHD کمک کند. اگر درباره دارو سؤال دارید، بهتر است با پزشک یا روان‌پزشک خود صحبت کنید." },
      { q: "درمان ADHD برای بزرگسالان است یا کودکان؟", a: "در مرکز سلامت روان ChangeMoment، درمان ADHD عمدتاً برای بزرگسالان ارائه می‌شود. اگر برای کودک یا نوجوانی به دنبال حمایت هستید، می‌توانیم باهم درباره نیازها و انتظاراتتان صحبت کنیم و به شما کمک کنیم بهترین نوع حمایت را پیدا کنید." },
      { q: "تراپی ADHD برای کودکان و بزرگسالان چه تفاوتی دارد؟", a: "برای کودکان، حمایت از ADHD اغلب شامل والدین، مراقبان، روتین‌های مدرسه و راهکارهای رفتاری است. برای بزرگسالان، تراپی بیشتر بر مسئولیت‌های روزمره، کار، روابط، تنظیم هیجان، مدیریت زمان و استرس یا شرمی تمرکز دارد که ممکن است با ADHD همراه باشد." },
      { q: "درمانگر متخصص ADHD چه رویکرد ویژه‌ای به تراپی می‌آورد؟", a: "درمانگر متخصص اختلال نقص توجه و بیش فعالی می‌داند که ADHD به معنای تنبلی یا کم‌تلاشی نیست. تراپی می‌تواند کمک کند مغز خود را بهتر بشناسید، خودسرزنشی را کنار بگذارید و راهکارهایی واقع‌بینانه برای زندگی‌تان بسازید." },
      { q: "آیا درمان آنلاین ADHD ارائه می‌دهید؟", a: "بله. درمان ADHD می‌تواند آنلاین و در فضایی خصوصی و راحت برگزار شود. جلسات آنلاین به‌ویژه وقتی رفت‌وآمد، برنامه‌ریزی یا جابه‌جایی بین کارها دشوار است، می‌توانند مفید باشند." },
      { q: "آیا درمان آنلاین ADHD به اندازه جلسات حضوری مؤثر است؟", a: "قطعا! درمان آنلاین اختلال نقص توجه و بیش فعالی برای بسیاری از افراد می‌تواند مؤثر باشد، به‌خصوص وقتی جلسه ساختارمند، حمایتگر و متمرکز بر نیازهای شما باشد. پژوهش‌ها درباره مداخلات آنلاین ADHD نیز نشان می‌دهند که این روش‌ها می‌توانند برای علائم ADHD و عملکرد روزمره مفید باشند." },
      { q: "جلسات درمان ADHD هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "درمان ADHD چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد. بعضی افراد برای مشاوره کوتاه‌مدت و متمرکز درباره روتین‌ها، سازمان‌دهی یا تنظیم هیجان مراجعه می‌کنند و بعضی دیگر برای کار روی الگوهای عمیق‌تر، عزت‌نفس، روابط یا چالش‌های دیرینه مرتبط با اختلال نقص توجه و بیش فعالی زمان بیشتری ادامه می‌دهند." },
      { q: "اگر مطمئن نباشم درمان ADHD برای من مناسب است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا درمان ADHD برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا درمان ADHD تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. پوشش به شرکت بیمه شما بستگی دارد و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم. لطفاً پوشش خود را با شرکت بیمه بررسی کنید." },
    ],
  },
});

Object.assign(serviceFaqOverrides, {
  "prenatal-and-pregnancy": {
    en: [
      { q: "What is pregnancy and postpartum counselling?", a: "Pregnancy and postpartum counselling offers emotional support during pregnancy, after birth, and through the transition into parenthood. It can help with anxiety, low mood, identity changes, relationship stress, birth experiences, and the many emotions of this stage." },
      { q: "Is it normal to feel emotional during pregnancy or after having a baby?", a: "Absolutely. Pregnancy and postpartum can bring joy, fear, sadness, irritability, guilt, and overwhelm. Counselling can help when these feelings feel heavy, confusing, or hard to manage alone." },
      { q: "What is the difference between baby blues and postpartum depression or anxiety?", a: "Baby blues are usually temporary and often improve within the first couple of weeks after birth. Postpartum depression or anxiety may last longer, feel more intense, or affect sleep, mood, bonding, relationships, or daily functioning." },
      { q: "How do I know if I need professional support?", a: "You may benefit from counselling if you feel overwhelmed, anxious, disconnected, sad, angry, guilty, or unlike yourself, or if coping, bonding, sleeping, or adjusting feels difficult." },
      { q: "I feel guilty because I am not enjoying pregnancy or motherhood. Is this normal?", a: "Yes. Many people feel this way, even when they love their baby or wanted to become a parent. Counselling gives you a space to speak honestly without judgment." },
      { q: "Can counselling help if I feel disconnected from my baby or myself?", a: "Yes. Disconnection can happen for many reasons, including stress, anxiety, depression, exhaustion, birth experiences, or major life changes. Counselling can help gently rebuild connection with yourself and your body." },
      { q: "Can counselling help after a difficult birth, miscarriage, infertility, or pregnancy loss?", a: "Yes. Pregnancy and postpartum counselling can support difficult birth experiences, pregnancy loss, infertility stress, and changes in hopes or expectations." },
      { q: "Is counselling only for mothers?", a: "No. Partners and non-birthing parents can also experience emotional distress, anxiety, depression, relationship stress, or identity changes during pregnancy and postpartum." },
      { q: "Is medication necessary for postpartum depression or anxiety?", a: "Medication can help some people, but it is not always necessary. Counselling can be an important part of support. If you are considering medication, speak with your doctor, midwife, nurse practitioner, or psychiatrist." },
      { q: "Do you offer online pregnancy and postpartum counselling?", a: "Yes. Online counselling can be especially helpful when leaving home, arranging childcare, or travelling feels difficult." },
      { q: "Can online pregnancy and postpartum counselling be as effective as in-person counselling?", a: "Yes. Online counselling can be helpful for many clients, offering flexibility, comfort, and meaningful therapeutic connection." },
      { q: "Can counselling support my relationship during pregnancy or postpartum?", a: "Yes. This stage can bring changes in roles, intimacy, communication, sleep, responsibilities, and emotional needs. Counselling can support more care and clarity." },
      { q: "How often do I need to attend pregnancy and postpartum counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does pregnancy and postpartum counselling take?", a: "There is no fixed timeline. Some people come for short-term support, while others continue longer to work through deeper patterns, birth experiences, relationship changes, or adjustment to parenthood." },
      { q: "What if I’m not sure pregnancy and postpartum counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is pregnancy and postpartum counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Qu’est-ce que le counselling grossesse et postpartum?", a: "C’est un soutien émotionnel pendant la grossesse, après la naissance et dans la transition vers la parentalité, pour l’anxiété, l’humeur basse, l’identité, le couple, la naissance et les émotions de cette période." },
      { q: "Est-ce normal d’être émotive pendant la grossesse ou après?", a: "Absolument. Joie, peur, tristesse, irritabilité, culpabilité ou surcharge peuvent coexister. Le counselling aide lorsque ces émotions deviennent lourdes ou difficiles à gérer seul." },
      { q: "Quelle est la différence entre baby blues et dépression ou anxiété postpartum?", a: "Le baby blues est souvent temporaire et s’améliore après les premières semaines. La dépression ou l’anxiété postpartum dure plus longtemps, est plus intense ou affecte le sommeil, l’humeur, le lien, les relations ou le quotidien." },
      { q: "Comment savoir si j’ai besoin d’aide professionnelle?", a: "Le counselling peut aider si vous vous sentez dépassé, anxieux, déconnecté, triste, en colère, coupable ou différent de vous-même." },
      { q: "Je culpabilise de ne pas aimer la grossesse ou la maternité. Est-ce normal?", a: "Oui. Beaucoup de personnes vivent cela, même lorsqu’elles aiment leur bébé. Le counselling offre un espace honnête et sans jugement." },
      { q: "Le counselling peut-il aider si je me sens déconnectée de mon bébé ou de moi-même?", a: "Oui. La déconnexion peut venir du stress, de l’anxiété, de la dépression, de l’épuisement, de la naissance ou de grands changements." },
      { q: "Aidez-vous après une naissance difficile, une fausse couche, l’infertilité ou une perte?", a: "Oui. Nous soutenons plusieurs expériences reproductives et parentales, dont la perte de grossesse, l’infertilité et les naissances difficiles." },
      { q: "Est-ce seulement pour les mères?", a: "Non. Les partenaires et parents non gestationnels peuvent aussi vivre détresse, anxiété, dépression, stress relationnel ou changements identitaires." },
      { q: "Les médicaments sont-ils nécessaires?", a: "Ils peuvent aider certaines personnes, mais ne sont pas toujours nécessaires. Parlez-en à votre médecin, sage-femme, infirmière praticienne ou psychiatre." },
      { q: "Offrez-vous le counselling en ligne?", a: "Oui. Il peut être particulièrement utile lorsque sortir, organiser la garde ou se déplacer est difficile." },
      { q: "Le counselling en ligne peut-il être aussi efficace?", a: "Oui. Il peut offrir flexibilité, confort et un lien thérapeutique significatif." },
      { q: "Le counselling peut-il soutenir mon couple?", a: "Oui. Cette période change les rôles, l’intimité, la communication, le sommeil, les responsabilités et les besoins émotionnels." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps cela prend-il?", a: "Il n’y a pas de durée fixe. Certaines personnes viennent à court terme; d’autres poursuivent pour des enjeux plus profonds ou l’adaptation à la parentalité." },
      { q: "Et si je ne suis pas certain?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus." },
    ],
    fa: [
      { q: "مشاوره بارداری و پس از زایمان چیست؟", a: "این مشاوره حمایت حرفه‌ای در دوران بارداری، بعد از تولد و در مسیر ورود به والدگری فراهم می‌کند و می‌تواند به اضطراب، خلق پایین، تغییر هویت، بحران رابطه، تجربه زایمان و احساسات این دوره کمک کند." },
      { q: "طبیعی است در بارداری یا بعد از بچه‌دار شدن احساساتی باشم؟", a: "کاملاً. این دوره می‌تواند شادی، ترس، غم، تحریک‌پذیری، احساس گناه و آشفتگی را هم‌زمان بیاورد. وقتی این احساسات سنگین یا گیج‌کننده می‌شوند، مشاوره کمک‌کننده است." },
      { q: "فرق baby blues با افسردگی یا اضطراب پس از زایمان چیست؟", a: "baby blues معمولاً موقتی است و طی چند هفته اول بهتر می‌شود. افسردگی یا اضطراب پس از زایمان طولانی‌تر، شدیدتر یا مختل‌کننده خواب، خلق، پیوند با نوزاد، رابطه‌ها و عملکرد روزانه است." },
      { q: "از کجا بدانم به کمک حرفه‌ای نیاز دارم؟", a: "اگر احساس پریشانی، اضطراب، قطع ارتباط، غم، خشم، گناه یا غریبه بودن با خودتان دارید، یا پیوند با نوزاد، خواب یا سازگاری سخت شده، مشاوره می‌تواند به شما کمک کند." },
      { q: "چون از بارداری یا مادر/والد بودن لذت نمی‌برم احساس گناه دارم. طبیعی است؟", a: "بله. خیلی‌ها چنین احساسی دارند، حتی اگر کودکشان را دوست داشته باشند. مشاوره فضایی بدون قضاوت و همدلانه برای حرف زدن صادقانه فراهم می‌کند." },
      { q: "اگر از نوزادم یا خودم به لحاظ احساسی دور باشم مشاوره کمک می‌کند؟", a: "بله. این حس می‌تواند به دلیل استرس، اضطراب، افسردگی، خستگی، تجربه زایمان یا تغییرات بزرگ زندگی رخ دهد. مشاوره به بازسازی آرام پیوند کمک می‌کند." },
      { q: "آیا مشاوره به تجربه زایمان سخت، سقط جنین و ناباروری هم کمک می‌کند؟", a: "بله. مشاوره بارداری و پس از زایمان از تجربه‌های دشوار زایمان، فقدان بارداری، استرس ناباروری و تغییر امیدها و انتظارات حمایت می‌کند." },
      { q: "آیا این مشاوره فقط برای مادران است؟", a: "خیر. پارتنرها و پدران هم ممکن است در این دوره اضطراب، افسردگی، چالش ارتباطی یا تغییر هویت را تجربه کنند." },
      { q: "آیا دارو برای افسردگی یا اضطراب پس از زایمان لازم است؟", a: "برای بعضی افراد دارو مفید است، اما همیشه لازم نیست. اگر درباره دارو فکر می‌کنید، با پزشک، ماما یا روان‌پزشک صحبت کنید." },
      { q: "آیا مشاوره آنلاین بارداری و پس از زایمان دارید؟", a: "بله. وقتی بیرون رفتن از خانه، پیدا کردن مراقبت کودک یا رفت‌وآمد سخت است، مشاوره آنلاین می‌تواند بسیار کمک‌کننده باشد." },
      { q: "آیا مشاوره آنلاین به اندازه حضوری مؤثر است؟", a: "بله، برای بسیاری از مراجعان می‌تواند مفید باشد و انعطاف، راحتی و ارتباط درمانی معنادار ایجاد کند." },
      { q: "آیا مشاوره می‌تواند به رابطه من کمک کند؟", a: "بله. این دوره نقش‌ها، صمیمیت، ارتباط، خواب، مسئولیت‌ها و نیازهای عاطفی را تغییر می‌دهد و مشاوره به گفت‌وگوی روشن‌تر کمک می‌کند." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره بارداری و پس از زایمان چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد. بعضی افراد کوتاه‌مدت مراجعه می‌کنند و بعضی برای تجربه زایمان، تغییرات رابطه‌ای یا سازگاری با والدگری زمان بیشتری نیاز دارند." },
      { q: "اگر مطمئن نباشم مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره بارداری و پس از زایمان برای شما انتخاب مناسبی هست یا نه." },
      { q: " آیا مشاوره بارداری و پس از زایمان تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
});


Object.assign(serviceFaqOverrides, {
  lgbtqia2s: {
    en: [
      { q: "Is your LGBTQ+ care genuinely affirming?", a: "Definitely. LGBTQ+ counselling at ChangeMoment Mental Health Center is grounded in respect, safety, and acceptance. You do not need to hide, minimize, or defend who you are in therapy." },
      { q: "Do I have to explain or justify my LGBTQ+ identity?", a: "Not at all. You do not have to prove, explain, or justify your identity. Your experience is taken seriously, and we meet you with curiosity, care, and respect." },
      { q: "Is LGBTQ+ counselling confidential?", a: "Absolutely. What you share is kept confidential within the usual legal and ethical limits of counselling." },
      { q: "Do I need to be out to come to LGBTQ+ therapy?", a: "No. You do not need to be out to family, friends, work, or anyone else. Counselling can support you whether you are questioning, exploring, or privately understanding your identity." },
      { q: "What is gender-affirming care in therapy?", a: "It means respecting and supporting your gender identity without trying to change or fix it. It may include exploring identity, emotions, relationships, safety, transition-related stress, family dynamics, or stigma." },
      { q: "Can LGBTQ+ counselling help with relationship or family issues?", a: "Yes. It can support dating, partnership concerns, family conflict, communication, boundaries, coming out, acceptance, and feeling misunderstood by people close to you." },
      { q: "Do I have to be LGBTQ+ to seek this counselling?", a: "No. You may seek this service if you are questioning your identity, supporting someone you love, or wanting a space that understands LGBTQ+ experiences and relationships." },
      { q: "Does LGBTQ+ counselling help with bullying?", a: "Yes. Counselling can help you process bullying, discrimination, rejection, or feeling unsafe, while supporting confidence, boundaries, coping skills, and safer support systems." },
      { q: "How often do I need to attend LGBTQ+ counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does LGBTQ+ counselling take?", a: "There is no fixed timeline. Some people come for focused support, while others continue longer to explore identity, relationships, family experiences, trauma, self-acceptance, or deeper patterns." },
      { q: "What if I’m not sure LGBTQ+ counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is LGBTQ+ counselling covered by insurance?", a: "Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts for reimbursement. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Vos soins LGBTQ+ sont-ils réellement affirmatifs?", a: "Oui. Le counselling LGBTQ+ au Centre de santé mentale ChangeMoment repose sur le respect, la sécurité et l’acceptation. Vous n’avez pas à cacher, minimiser ou défendre qui vous êtes." },
      { q: "Dois-je expliquer ou justifier mon identité LGBTQ+?", a: "Pas du tout. Vous n’avez rien à prouver ni à justifier. Votre expérience est prise au sérieux, avec curiosité, bienveillance et respect." },
      { q: "Le counselling LGBTQ+ est-il confidentiel?", a: "Absolument. Ce que vous partagez demeure confidentiel, dans les limites éthiques et légales habituelles du counselling." },
      { q: "Dois-je avoir fait mon coming out pour commencer?", a: "Non. Vous n’avez pas besoin d’en avoir parlé à votre famille, vos amis, votre travail ou qui que ce soit. Le counselling peut vous accompagner là où vous en êtes." },
      { q: "Qu’est-ce que des soins affirmatifs de genre en thérapie?", a: "C’est soutenir et respecter votre identité de genre sans chercher à la changer ou à la corriger. Cela peut inclure l’identité, les émotions, les relations, la sécurité, la transition ou l’impact de la stigmatisation." },
      { q: "Ce counselling peut-il aider avec le couple ou la famille?", a: "Oui. Il peut soutenir les préoccupations relationnelles, les conflits familiaux, la communication, les limites, le coming out, l’acceptation et le sentiment d’être incompris." },
      { q: "Dois-je être LGBTQ+ pour consulter?", a: "Non. Ce service peut aussi convenir si vous vous questionnez, soutenez une personne proche ou cherchez un espace qui comprend les réalités LGBTQ+." },
      { q: "Le counselling LGBTQ+ aide-t-il face à l’intimidation?", a: "Oui. Il peut aider à traverser l’impact de l’intimidation, de la discrimination, du rejet ou de l’insécurité, et à renforcer confiance, limites et soutien." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling?", a: "Il n’y a pas de durée fixe. Certaines personnes viennent pour un soutien ciblé; d’autres poursuivent pour explorer l’identité, les relations, la famille, le trauma ou l’acceptation de soi." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Est-ce couvert par les assurances?", a: "Plusieurs régimes couvrent les services d’un conseiller clinique agréé. Nous fournissons des reçus pour remboursement." },
    ],
    fa: [
      { q: "آیا فضای درمانی LGBTQ+ واقعاً تأییدگر است؟", a: "بله، کاملاً. مشاوره LGBTQ+ در مرکز سلامت روان ChangeMoment بر پایه احترام، امنیت و پذیرش است. هیچ لزومی ندارد که در فضای تراپی، هویت خودتان را پنهان کنید، کوچک جلوه دهید یا از خودتان دفاع کنید." },
      { q: "آیا باید هویت LGBTQ+ خودم را توضیح بدهم یا توجیه کنم؟", a: "اصلاً. لازم نیست چیزی را ثابت یا توجیه کنید. تجربه شما با کنجکاوی، مراقبت و احترام جدی گرفته می‌شود." },
      { q: "آیا مشاوره LGBTQ+ محرمانه است؟", a: "بله. آنچه در جلسه مطرح می‌کنید، در چارچوب استاندارد قانونی و اخلاقی مشاوره محرمانه می‌ماند." },
      { q: "آیا برای شروع تراپی باید تغییر هویت خود را افشا کرده باشم؟", a: "خیر. لازم نیست هویتتان را با خانواده، دوستان، محل کار یا هیچ‌کس دیگری در میان گذاشته باشید. مشاوره در هر مرحله‌ای که هستید کنارتان است." },
      { q: "مراقبت تأییدگر جنسیت در درمان یعنی چه؟", a: "یعنی هویت جنسیتی شما بدون تلاش برای تغییر یا اصلاح آن، محترم شمرده می‌شود و حمایت می‌شود. این مساله می‌تواند شامل هویت، احساسات، روابط، امنیت، فشارهای مربوط به گذار یا اثر انگ اجتماعی باشد." },
      { q: "آیا مشاوره LGBTQ+ به مسائل رابطه یا خانواده کمک می‌کند؟", a: "بله. این مشاوره می‌تواند در آشنایی و رابطه، تعارض خانوادگی، ارتباط، مرزها، آشکارسازی هویت، پذیرش و حس درک‌ نشدن همراهتان باشد." },
      { q: "آیا باید LGBTQ+ باشم تا از این مشاوره استفاده کنم؟", a: "خیر. اگر درباره هویتتان تردید دارید، فردی نزدیک به شما LGBTQ+ است و می‌خواهید او را ساپورت کنید این سرویس می‌تواند برای شما مناسب باشد." },
      { q: "آیا این مشاوره به مقابله با قلدری کمک می‌کند؟", a: "بله. مشاوره کمک می‌کند اثر قلدری، تبعیض، طردشدگی یا ناامنی را پردازش کنید و اعتمادبه‌نفس، مرزها و مهارت‌های مقابله‌ای خود را تقویت کنید." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره LGBTQ+ چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد. بعضی افراد برای حمایت متمرکز مراجعه می‌کنند و بعضی برای کاوش هویت، رابطه‌ها، تجربه‌های خانوادگی، تروما یا پذیرش خود ادامه می‌دهند." },
      { q: "اگر مطمئن نباشم این مشاوره برای من مناسب است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره LGBTQ+ برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره LGBTQ+ تحت پوشش بیمه است؟", a: "بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. و ما رسید لازم جهت بازپرداخت بیمه ارائه می‌دهیم." },
    ],
  },
  "cvap-clients": {
    en: [
      { q: "What is CVAP?", a: "CVAP is the Crime Victim Assistance Program, a B.C. government program that may provide benefits including counselling to help victims, immediate family members, and some witnesses cope with violent crime." },
      { q: "Who is eligible for CVAP counselling?", a: "You may be eligible if you were physically or psychologically harmed by a violent crime in British Columbia, or if you are an immediate family member or certain witness affected by it. CVAP decides eligibility after you apply." },
      { q: "How do I apply for CVAP funding?", a: "You can complete the CVAP application and submit it by email, fax, or mail. A local victim service program can also help with the application." },
      { q: "Is the care trauma-informed?", a: "Yes. Our CVAP counselling uses a trauma-informed approach that centres safety, trust, choice, emotional regulation at a manageable pace for you." },
      { q: "How many sessions are covered by CVAP?", a: "The number of sessions or hours depends on CVAP’s written decision. If more support is needed, a reassessment may be requested." },
      { q: "Can I choose my counsellor?", a: "Yes. You can choose a counsellor registered with CVAP. All ChangeMoment team members are approved to provide this service." },
      { q: "How often do I need to attend sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does CVAP counselling take?", a: "There is no fixed timeline. The length depends on your needs, the emotional impact of violence, and the number of sessions CVAP approves." },
      { q: "What if I’m not sure CVAP counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is CVAP counselling covered by insurance?", a: "If approved, CVAP counselling is usually funded through the Crime Victim Assistance Program. This is separate from private extended health insurance. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "Qu’est-ce que le CVAP?", a: "Le CVAP est le Crime Victim Assistance Program, un programme du gouvernement de la Colombie-Britannique qui peut offrir des prestations, dont le counselling, aux victimes, à certains proches et témoins de crimes violents." },
      { q: "Qui est admissible au counselling CVAP?", a: "Vous pourriez être admissible si un crime violent en Colombie-Britannique vous a causé un préjudice physique ou psychologique, ou si vous êtes un proche immédiat ou un témoin touché. Le CVAP décide après votre demande." },
      { q: "Comment demander le financement CVAP?", a: "Vous pouvez remplir le formulaire CVAP et le soumettre par courriel, télécopieur ou poste. Un service local d’aide aux victimes peut également vous accompagner." },
      { q: "L’approche est-elle sensible au trauma?", a: "Oui. Notre counselling CVAP s’appuie sur une approche sensible au trauma qui met l’accent sur la sécurité, la confiance, le choix et la régulation émotionnelle, à un rythme qui vous convient." },
      { q: "Combien de séances le CVAP couvre-t-il?", a: "Le nombre d’heures ou de séances dépend de la décision écrite du CVAP. Une réévaluation peut être demandée si vous avez besoin de plus de soutien." },
      { q: "Puis-je choisir mon conseiller?", a: "Oui. Vous pouvez choisir un conseiller inscrit au CVAP. Tous les membres de notre équipe sont approuvés pour ce service." },
      { q: "À quelle fréquence devrais-je consulter?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling CVAP?", a: "Il n’y a pas de durée fixe. Cela dépend de vos besoins, de l’impact émotionnel de la violence et des séances approuvées." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Le counselling CVAP est-il couvert par les assurances?", a: "S’il est approuvé, il est généralement financé par le CVAP; il est distinct des assurances santé complémentaires privées." },
    ],
    fa: [
      { q: "CVAP چیست؟", a: "CVAP یا Crime Victim Assistance Program برنامه‌ای دولتی در استان بریتیش کلمبیاست که برای کمک به درمان آثار روحی و روانی خشونت‌، به قربانیان، اعضای نزدیک خانواده و بعضی شاهدان کمک می‌کند." },
      { q: "چه کسانی واجد شرایط مشاوره CVAP هستند؟", a: "اگر در اثر جرم خشونت‌آمیز در استان بریتیش کلمبیا آسیب جسمی یا روانی دیده‌اید، یا عضو نزدیک خانواده یا شاهدی هستید که از آن جرم تأثیر گرفته، ممکن است واجد شرایط این پروگرم باشید. CVAP پس از درخواست شما، اپلیکیشن شما را بررسی می‌کند و تصمیم می‌گیرد." },
      { q: "چطور برای حمایت مالی CVAP درخواست بدهم؟", a: "می‌توانید فرم CVAP را تکمیل و از طریق ایمیل، فکس یا پست ارسال کنید. برنامه‌های محلی خدمات قربانیان هم می‌تواند در فرایند اپلیکیشن به شما کمک کند." },
      { q: "آیا رویکرد درمانی شما متمرکز بر تروماست؟", a: "بله. مشاوره CVAP ما با رویکردی متمرکز بر تروما ارائه می‌شود که بر امنیت، اعتماد، حق انتخاب و تنظیم هیجان تمرکز دارد و با ریتمی متناسب با شرایط شما پیش می‌رود." },
      { q: "CVAP چند جلسه را پوشش می‌دهد؟", a: "تعداد جلسات به تصمیم کتبی CVAP بستگی دارد. اگر بعداً به جلسات مشاوره بیشتری نیاز باشد، می‌توانید مجدد درخواست بدهید." },
      { q: "آیا می‌توانم مشاورم را انتخاب کنم؟", a: "بله. باید مشاوری را انتخاب کنید که در CVAP رجیسترد شده است. همه اعضای تیم ما برای ارائه این سرویس رجیسترد شده‌اند." },
      { q: "جلسات هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره CVAP چقدر طول می‌کشد؟", a: "زمان ثابتی ندارد و به نیازهای شما، اثر عاطفی خشونت و تعداد جلساتی که CVAP تأیید می‌کند بستگی دارد." },
      { q: "اگر مطمئن نباشم مشاوره CVAP مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره CVAP برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره CVAP تحت پوشش بیمه است؟", a: "اگر درخواستتان تأیید شود، مشاوره CVAP معمولاً از طریق همین برنامه تأمین مالی می‌شود و جدا از بیمه تکمیلی خصوصی است." },
    ],
  },
  "icbc-clients": {
    en: [
      { q: "Does ICBC cover counselling?", a: "Yes. If you were injured in a motor vehicle accident in B.C., ICBC may cover counselling as part of your recovery benefits. Under Enhanced Care, counselling is among the pre-approved treatments in the first 12 weeks after the crash." },
      { q: "What if I wasn’t physically injured?", a: "Counselling can still help if the accident affected your mental health or psychological well-being. Anxiety, fear of driving, stress, sleep problems, panic, or trauma responses can happen without a major physical injury." },
      { q: "Do I need to contact ICBC directly for approval?", a: "For the first 12 weeks, ICBC states that you do not need a doctor’s referral or special approval to begin pre-approved treatments, including counselling." },
      { q: "How many ICBC counselling sessions are covered?", a: "During the first 12 weeks after a crash, ICBC lists 12 counselling sessions as pre-approved, up to ICBC’s approved session rate." },
      { q: "What if I need more counselling than initially approved?", a: "Additional counselling may need ICBC approval after the first sessions or first 12 weeks. Your counsellor can usually help explain the information needed to request continued support." },
      { q: "How long does it take to get approval?", a: "In the first 12 weeks, you can usually begin once you have an ICBC claim number because counselling is pre-approved. Later approvals vary based on ICBC’s review and decision." },
      { q: "What if I don’t have a claim number?", a: "You need to submit a claim to ICBC first. Your claim number is created when you submit it and is needed to access pre-approved treatment." },
      { q: "What types of therapy are available?", a: "ICBC counselling can support anxiety, trauma, stress, fear of driving, sleep difficulties, and adjustment after an accident. Our trauma-informed approach focuses on mental safety, nervous-system regulation, coping tools, and gradual recovery." },
      { q: "How often do I need to attend ICBC counselling sessions?", a: "Many clients start with weekly sessions to build momentum. Frequency can be adjusted based on your needs, goals, progress, and availability." },
      { q: "How long does ICBC counselling take?", a: "The length of counselling depends on ICBC’s approval and coverage." },
      { q: "What if I’m not sure ICBC counselling is right for me?", a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit." },
      { q: "Is ICBC counselling covered by insurance?", a: "ICBC counselling may be covered through your ICBC claim if you are eligible. This is separate from private extended health insurance. Please check with your insurance provider to confirm your coverage." },
    ],
    fr: [
      { q: "L’ICBC couvre-t-elle le counselling?", a: "Oui. Si vous avez été blessé dans un accident de la route en Colombie-Britannique, l’ICBC peut couvrir le counselling dans vos prestations de rétablissement. Avec Enhanced Care, il fait partie des traitements préautorisés durant les 12 premières semaines." },
      { q: "Et si je n’ai pas été blessé physiquement?", a: "Le counselling peut quand même aider si l’accident a affecté votre santé mentale ou votre bien-être psychologique. Anxiété, peur de conduire, stress, problèmes de sommeil, panique ou réactions traumatiques peuvent survenir sans blessure majeure." },
      { q: "Dois-je contacter l’ICBC pour obtenir une autorisation?", a: "Durant les 12 premières semaines, l’ICBC indique qu’aucune recommandation médicale ni autorisation spéciale n’est requise pour commencer les traitements préautorisés, dont le counselling." },
      { q: "Combien de séances l’ICBC couvre-t-elle?", a: "Au cours des 12 premières semaines, l’ICBC prévoit 12 séances de counselling préautorisées, jusqu’à son tarif approuvé." },
      { q: "Et si j’ai besoin de plus de séances?", a: "Un soutien supplémentaire peut nécessiter l’approbation de l’ICBC. Votre conseiller peut habituellement aider à expliquer les informations nécessaires." },
      { q: "Combien de temps faut-il pour l’autorisation?", a: "Durant les 12 premières semaines, vous pouvez généralement commencer dès que vous avez un numéro de réclamation. Les approbations ultérieures varient selon l’examen de l’ICBC." },
      { q: "Et si je n’ai pas de numéro de réclamation?", a: "Vous devez d’abord soumettre une demande à l’ICBC. Le numéro est créé lors de la demande et est nécessaire pour les traitements préautorisés." },
      { q: "Quels types de thérapie sont offerts?", a: "Le counselling ICBC peut aider avec l’anxiété, le trauma, le stress, la peur de conduire, le sommeil et l’adaptation après l’accident. Notre approche sensible au trauma privilégie sécurité mentale et rétablissement graduel." },
      { q: "À quelle fréquence devrais-je venir?", a: "De nombreuses personnes commencent par des séances hebdomadaires pour créer un bon élan. La fréquence peut être ajustée en fonction de vos besoins, de vos objectifs, de vos progrès et de vos disponibilités." },
      { q: "Combien de temps dure le counselling ICBC?", a: "La durée dépend de l’approbation et de la couverture de l’ICBC." },
      { q: "Et si je ne suis pas certain que ce service me convient?", a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient." },
      { q: "Le counselling ICBC est-il couvert par les assurances?", a: "Il peut être couvert par votre réclamation ICBC si vous êtes admissible. Cela est distinct de l’assurance santé complémentaire privée." },
    ],
    fa: [
      { q: "آیا ICBC هزینه مشاوره را پرداخت می‌کند؟", a: "بله. اگر در استان بریتیش کلمبیا در یک تصادف رانندگی آسیب دیده‌اید، ICBC هزینه مشاوره را در قالب بخشی از بیمه شما پوشش می‌دهد. در برنامه Enhanced Care، مشاوره در ۱۲ هفته اول پس از تصادف جزو خدمات ازپیش‌تأییدشده است." },
      { q: "اگر آسیب جسمی ندیده باشم چه؟", a: "اگر تصادف از نظر روانی شما را تحت تاثیر قرار داده باشد، مشاوره همچنان می‌تواند کمک کند. اضطراب، ترس از رانندگی، استرس، مشکلات خواب، پانیک یا واکنش‌های ناشی از تروما حتی بدون آسیب جسمی جدی هم ممکن است رخ دهند." },
      { q: "آیا باید مستقیم با ICBC تماس بگیرم تا جلسات تأیید شوند؟", a: "در ۱۲ هفته اول پس از تصادف، برای شروع مشاوره نیازی به ارجاع ندارید." },
      { q: "ICBC چند جلسه مشاوره را پوشش می‌دهد؟", a: "در ۱۲ هفته اول بعد از تصادف، ICBC تعداد ۱۲ جلسه مشاوره را تا سقف نرخ مصوب خود پوشش می‌دهد." },
      { q: "اگر بیشتر از ۱۲ جلسه نیاز به مشاوره داشته باشم چه؟ ", a: "پس از پایان ۱۲ جلسه ، در صورت نیاز به ادامه جلسات مشاوره، می‌توانید دوباره اپلای کنید. مشاور شما در این فرایند شما را راهنمایی می‌کند." },
      { q: "تأیید ICBC چقدر طول می‌کشد؟", a: "در ۱۲ هفته اول پس از تصادف، با داشتن claim number می‌توانید جلسات خود را شروع کنید. اما اگر نیاز به جلسات بیشتری داشته باشید، مدت زمان تایید ICBC بسته به پرونده شما متفاوت است." },
      { q: "اگر شماره پرونده نداشته باشم چه؟", a: "باید ابتدا درخواست خود را به ICBC ثبت کنید. شماره پرونده هنگام ثبت درخواست ایجاد می‌شود که برای استفاده از خدمات تأییدشده لازم است." },
      { q: "چه نوع درمانی در مشاوره ICBC ارائه می‌شود؟", a: "مشاوره ICBC می‌تواند به اضطراب، تروما، استرس، ترس از رانندگی، اختلال خواب و سازگاری بعد از تصادف کمک کند. رویکرد متمرکز بر تروما بر امنیت روانی، تنظیم سیستم عصبی، ابزارهای مقابله‌ای و بهبود تدریجی تمرکز دارد." },
      { q: "جلسات مشاوره ICBC هر چند وقت یک‌بار است؟", a: "بسیاری از مراجعان با جلسات هفتگی شروع می‌کنند تا روند درمان شکل بگیرد. تعداد جلسات را می‌توان بر اساس نیازها، اهداف، پیشرفت و برنامه هفتگی شما تنظیم کرد." },
      { q: "مشاوره ICBC چقدر طول می‌کشد؟", a: "مدت مشاوره به تأیید و پوشش ICBC بستگی دارد." },
      { q: "اگر مطمئن نباشم مشاوره ICBC مناسب من است چه؟", a: "می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا مشاوره ICBC برای شما انتخاب مناسبی هست یا نه." },
      { q: "آیا مشاوره ICBC تحت پوشش بیمه است؟", a: "در صورت واجد شرایط بودن، مشاوره ICBC هرینه جلسات شما را پوشش می‌دهد. این موضوع جدا از بیمه تکمیلی خصوصی است." },
    ],
  },
});

Object.assign(serviceFaqOverrides, {
  ifhp: {
    en: [
      { q: "What is the Interim Federal Health Program (IFHP)?", a: "The Interim Federal Health Program (IFHP) is a Government of Canada program that provides limited, temporary health coverage — including mental health counselling — to eligible refugees, protected persons, refugee claimants, and certain other groups who are not yet covered by a provincial health insurance plan." },
      { q: "Who is eligible for IFHP counselling?", a: "Eligibility is determined by the Government of Canada. You may be eligible if you are a resettled refugee, government-assisted or privately sponsored refugee, protected person, refugee claimant, or belong to another IFHP-eligible group. If you hold valid IFHP coverage that includes mental health services, we can help you get started." },
      { q: "Does IFHP cover mental health counselling?", a: "IFHP coverage can include mental health services provided by a Registered Clinical Counsellor. Coverage depends on your specific IFHP category and the benefits associated with it. We recommend confirming your coverage details with your IFHP documentation before booking." },
      { q: "Is the counselling trauma-informed?", a: "Yes. Our counselling is grounded in trauma-informed, culturally sensitive practice that honours your experience and meets you with dignity, patience, and respect — wherever you are in your process." },
      { q: "Can I receive IFHP counselling online?", a: "Yes. We offer both in-person IFHP counselling in Coquitlam, BC, and online counselling for those living elsewhere in British Columbia. Online sessions can be especially helpful if transportation, childcare, work, or other responsibilities make in-person visits difficult." },
      { q: "What languages are sessions available in?", a: "We offer counselling in English, French, and Farsi (Persian). Language access is important to us, and we strive to match you with a counsellor who can support you in your preferred language or with the cultural knowledge that matters to your experience." },
      { q: "What kind of support does IFHP counselling offer?", a: "IFHP counselling at ChangeMoment can help with trauma recovery, processing grief and loss, managing anxiety and depression, adjusting to a new country and culture, family stress, sleep difficulties, identity challenges, and building a sense of safety and belonging in your new home." },
      { q: "How many sessions will I receive?", a: "The number of sessions covered depends on your individual IFHP benefits. We can help you navigate the process and ensure your sessions are documented appropriately for coverage purposes." },
      { q: "How do I get started with IFHP counselling?", a: "You can book a free consultation with our team. We will confirm your coverage, answer your questions, and match you with a counsellor who is well-suited to your needs. Bring your IFHP documentation to your first session." },
      { q: "What if I am not sure whether IFHP counselling is right for me?", a: "You are welcome to reach out for a free consultation. We can talk briefly about your situation, answer your questions, and help you figure out whether this service is a good fit — with no pressure or commitment." },
      { q: "What if I need support but do not have IFHP coverage?", a: "If you are uncertain about your coverage or do not currently hold IFHP benefits, please still reach out. We can discuss other options and help connect you with the right support for your situation." },
    ],
    fr: [
      { q: "Qu'est-ce que le Programme fédéral de santé intérimaire (PFSI)?", a: "Le Programme fédéral de santé intérimaire (PFSI) est un programme du gouvernement du Canada qui offre une couverture de santé limitée et temporaire — incluant le counselling en santé mentale — aux réfugiés admissibles, aux personnes protégées, aux demandeurs d'asile et à certains autres groupes qui ne sont pas encore couverts par un régime provincial d'assurance maladie." },
      { q: "Qui est admissible au counselling PFSI?", a: "L'admissibilité est déterminée par le gouvernement du Canada. Vous pouvez être admissible si vous êtes un réfugié réinstallé, une personne protégée, un demandeur d'asile ou si vous appartenez à un autre groupe admissible au PFSI. Si vous avez une couverture PFSI valide incluant les services de santé mentale, nous pouvons vous aider à commencer." },
      { q: "Le PFSI couvre-t-il le counselling en santé mentale?", a: "La couverture PFSI peut inclure des services de santé mentale fournis par un conseiller clinique agréé. La couverture dépend de votre catégorie PFSI spécifique. Nous vous recommandons de confirmer les détails de votre couverture avant de prendre rendez-vous." },
      { q: "Le counselling est-il axé sur le trauma?", a: "Oui. Notre approche est fondée sur des pratiques sensibles au trauma et à la culture, qui honorent votre vécu avec dignité, patience et respect — là où vous en êtes dans votre processus." },
      { q: "Puis-je recevoir le counselling PFSI en ligne?", a: "Oui. Nous offrons le counselling en personne à Coquitlam, BC, et en ligne pour les personnes résidant ailleurs en Colombie-Britannique. Les séances en ligne peuvent être particulièrement utiles si les déplacements, la garde d'enfants ou d'autres responsabilités rendent les visites en personne difficiles." },
      { q: "Dans quelles langues les séances sont-elles disponibles?", a: "Nous offrons le counselling en anglais, en français et en persan (farsi). L'accès linguistique est important pour nous et nous nous efforçons de vous jumeler avec un conseiller qui peut vous soutenir dans votre langue préférée." },
      { q: "Quel type de soutien le counselling PFSI offre-t-il?", a: "Le counselling PFSI chez ChangeMoment peut aider avec le rétablissement après un trauma, le deuil et la perte, l'anxiété et la dépression, l'adaptation à un nouveau pays et une nouvelle culture, le stress familial, les difficultés de sommeil, et la construction d'un sentiment de sécurité et d'appartenance." },
      { q: "Combien de séances me seront accordées?", a: "Le nombre de séances couvertes dépend de vos avantages PFSI individuels. Nous pouvons vous aider à naviguer dans ce processus et à vous assurer que vos séances sont documentées correctement." },
      { q: "Comment puis-je commencer?", a: "Vous pouvez réserver une consultation gratuite avec notre équipe. Nous confirmerons votre couverture, répondrons à vos questions et vous jumèlerons avec un conseiller bien adapté à vos besoins. Apportez vos documents PFSI à votre première séance." },
      { q: "Et si je ne suis pas certain que le counselling PFSI me convient?", a: "Vous êtes invité à nous contacter pour une consultation gratuite. Nous pouvons discuter brièvement de votre situation, répondre à vos questions et vous aider à déterminer si ce service vous convient — sans pression ni engagement." },
      { q: "Et si j'ai besoin de soutien mais n'ai pas de couverture PFSI?", a: "Si vous n'êtes pas certain de votre couverture ou si vous n'avez pas encore de prestations PFSI, contactez-nous quand même. Nous pouvons discuter d'autres options et vous aider à accéder au bon soutien pour votre situation." },
    ],
    fa: [
      { q: "برنامه موقت فدرال سلامت (IFHP) چیست؟", a: "برنامه موقت فدرال سلامت (IFHP) برنامه‌ای از دولت کانادا است که پوشش بهداشتی محدود و موقت — از جمله مشاوره سلامت روان — به پناهندگان واجد شرایط، افراد تحت حمایت، متقاضیان پناهندگی و برخی گروه‌های دیگری که هنوز تحت پوشش بیمه سلامت استانی نیستند ارائه می‌دهد." },
      { q: "چه کسانی واجد شرایط مشاوره IFHP هستند؟", a: "شرایط پذیرش توسط دولت کانادا تعیین می‌شود. اگر پناهنده اسکان‌یافته، شخص تحت حمایت، متقاضی پناهندگی یا عضوی از گروه‌های واجد شرایط IFHP هستید، ممکن است بتوانید از این پوشش استفاده کنید. اگر پوشش معتبر IFHP که شامل خدمات سلامت روان باشد دارید، می‌توانیم به شما کمک کنیم." },
      { q: "آیا IFHP مشاوره سلامت روان را پوشش می‌دهد؟", a: "پوشش IFHP می‌تواند شامل خدمات سلامت روان توسط مشاوران رجیسترد باشد. پوشش به دسته‌بندی خاص IFHP شما بستگی دارد. توصیه می‌کنیم قبل از رزرو وقت، جزئیات پوشش خود را با مستندات IFHP تأیید کنید." },
      { q: "آیا مشاوره آگاه از تروما است؟", a: "بله. مشاوره ما بر پایه رویکرد آگاه از تروما و حساس به فرهنگ است که تجربه شما را با کرامت، صبر و احترام می‌پذیرد — در هر جایی که در مسیر خود قرار داشته باشید." },
      { q: "آیا می‌توانم مشاوره IFHP را به صورت آنلاین دریافت کنم؟", a: "بله. هم مشاوره حضوری در کوکیتلام، بریتیش کلمبیا و هم مشاوره آنلاین برای ساکنان سایر نقاط بریتیش کلمبیا ارائه می‌دهیم. جلسات آنلاین در صورتی که رفت‌وآمد، مراقبت از کودک یا مسئولیت‌های دیگر حضور حضوری را دشوار می‌کند، بسیار مفید است." },
      { q: "جلسات به چه زبان‌هایی ارائه می‌شوند؟", a: "مشاوره به زبان‌های انگلیسی، فرانسوی و فارسی ارائه می‌دهیم. دسترسی به زبان برای ما اهمیت دارد و تلاش می‌کنیم شما را با مشاوری که می‌تواند به زبان دلخواه یا با آگاهی فرهنگی مرتبط با تجربه شما کنارتان باشد تطبیق دهیم." },
      { q: "مشاوره IFHP چه نوع حمایتی ارائه می‌دهد؟", a: "مشاوره IFHP در ChangeMoment می‌تواند در بهبود از تروما، پردازش سوگ و فقدان، مدیریت اضطراب و افسردگی، سازگاری با کشور و فرهنگ جدید، استرس خانوادگی، مشکلات خواب و ساختن حس امنیت و تعلق در خانه جدیدتان کمک کند." },
      { q: "چند جلسه دریافت خواهم کرد؟", a: "تعداد جلسات تحت پوشش به مزایای فردی IFHP شما بستگی دارد. می‌توانیم در ناوبری این فرایند کمک کنیم و اطمینان حاصل کنیم که جلسات شما برای اهداف پوشش به درستی مستند شده‌اند." },
      { q: "چگونه شروع کنم؟", a: "می‌توانید یک وقت مشاوره رایگان با تیم ما رزرو کنید. پوشش شما را تأیید می‌کنیم، به سوالاتتان پاسخ می‌دهیم و شما را با مشاوری که با نیازهایتان مطابقت دارد تطبیق می‌دهیم. مستندات IFHP خود را به اولین جلسه بیاورید." },
      { q: "اگر مطمئن نیستم که مشاوره IFHP برای من مناسب است چه کنم؟", a: "می‌توانید برای یک مشاوره رایگان با ما تماس بگیرید. می‌توانیم کوتاه درباره وضعیت شما صحبت کنیم، به سوالاتتان پاسخ دهیم و کمک کنیم بفهمید آیا این سرویس برای شما مناسب است — بدون فشار یا تعهد." },
      { q: "اگر به حمایت نیاز دارم اما پوشش IFHP ندارم چه کنم؟", a: "اگر در مورد پوشش خود مطمئن نیستید یا در حال حاضر مزایای IFHP ندارید، لطفاً باز هم با ما تماس بگیرید. می‌توانیم درباره گزینه‌های دیگر بحث کنیم و به شما کمک کنیم با حمایت مناسب برای وضعیتتان ارتباط برقرار کنید." },
    ],
  },
});

const mobileServiceHeroImages: Record<string, string> = {
  "online-counselling": onlineMobileOpeningImage,
  "individual-counselling": individualMobileOpeningImage,
  "relationship-and-couples-counselling": couplesMobileOpeningImage,
  "family-counselling": familyMobileOpeningImage,
  anxiety: anxietyMobileOpeningImage,
  depression: depressionMobileOpeningImage,
  trauma: traumaMobileOpeningImage,
  "grief-and-loss": griefMobileOpeningImage,
  "anger-management": angerMobileOpeningImage,
  adhd: adhdMobileOpeningImage,
  "prenatal-and-pregnancy": pregnancyMobileOpeningImage,
  lgbtqia2s: lgbtqMobileOpeningImage,
  "cvap-clients": cvapMobileOpeningImage,
  "icbc-clients": icbcMobileOpeningImage,
  ifhp: ifhpMobileOpeningImage,
};

const modernServicePages = {
  "online-counselling": { opening: onlineOpeningImage, section2: onlineSectionImage2, section3: onlineSectionImage3, section4: onlineSectionImage4, copy: onlineCounsellingCopy },
  "individual-counselling": { opening: individualOpeningImage, section2: individualSectionImage2, section3: individualSectionImage3, section4: individualSectionImage4, copy: individualCounsellingCopy },
  "relationship-and-couples-counselling": { opening: couplesOpeningImage, section2: couplesSectionImage2, section3: couplesSectionImage4, section4: couplesSectionImage3, copy: couplesCounsellingCopy },
  "family-counselling": { opening: familyOpeningImage, section2: familySectionImage2, section3: familySectionImage3, section4: familySectionImage4, copy: familyCounsellingCopy },
  "anxiety": { opening: anxietyOpeningImage, section2: anxietySectionImage2, section3: anxietySectionImage4, section4: anxietyProgressImage, copy: anxietyCounsellingCopy },
  "depression": { opening: depressionOpeningImage, section2: depressionSectionImage2, section3: depressionSectionImage3, section4: depressionProgressImage, copy: depressionCounsellingCopy },
  "trauma": { opening: traumaOpeningImage, section2: traumaSectionImage2, section3: traumaSectionImage4, section4: traumaProgressImage, copy: traumaCounsellingCopy },
  "grief-and-loss": { opening: griefOpeningImage, section2: griefSectionImage2, section3: griefSectionImage3, section4: griefSectionImage4, copy: griefCounsellingCopy },
  "anger-management": { opening: angerOpeningImage, section2: angerIntroImage, section3: angerSectionImage3, section4: angerSectionImage4, copy: angerCounsellingCopy },
  "adhd": { opening: adhdOpeningImage, section2: adhdSectionImage2, section3: adhdSectionImage3, section4: adhdSectionImage4, copy: adhdCounsellingCopy },
  "prenatal-and-pregnancy": { opening: pregnancyOpeningImage, section2: pregnancySectionImage2, section3: pregnancySectionImage3, section4: pregnancySectionImage4, copy: pregnancyCounsellingCopy },
  "lgbtqia2s": { opening: lgbtqOpeningImage, section2: lgbtqSectionImage2, section3: lgbtqSectionImage3, section4: lgbtqSectionImage4, copy: lgbtqCounsellingCopy },
  "cvap-clients": { opening: cvapOpeningImage, section2: cvapSectionImage2, section3: cvapSectionImage3, section4: cvapSectionImage4, copy: cvapCounsellingCopy },
  "icbc-clients": { opening: icbcOpeningImage, section2: icbcSectionImage2, section3: icbcSectionImage3, section4: icbcSectionImage4, copy: icbcCounsellingCopy },
  ifhp: { opening: ifhpOpeningImage, section2: ifhpSectionImage2, section3: ifhpSectionImage3, section4: ifhpSectionImage4, copy: ifhpCounsellingCopy },
} as const;

type ModernServicePage = (typeof modernServicePages)[keyof typeof modernServicePages];

/**
 * Every piece of localized body copy actually rendered on a service page,
 * flattened into one string. Used by the services search so that in-content
 * matches work in Persian and French too, not just English.
 */
export function getServiceBodyText(serviceId: string, lang: "en" | "fr" | "fa"): string {
  const parts: string[] = [];

  const copy = modernServicePages[serviceId as keyof typeof modernServicePages]?.copy[lang];
  if (copy) {
    parts.push(
      copy.heroTitle,
      copy.heroIntro,
      copy.introTitle,
      copy.introBody,
      copy.whoTitle,
      copy.howTitle,
      copy.progressTitle,
      copy.progressBody,
      copy.ctaTitle,
    );
    copy.whoItems.forEach((i) => parts.push(i.title, i.body));
    copy.howItems.forEach((i) => parts.push(i.title, i.body));
    if (copy.extraListTitle) parts.push(copy.extraListTitle);
    if (copy.extraListIntro) parts.push(copy.extraListIntro);
    if (copy.extraListItems) parts.push(...copy.extraListItems);
    if (copy.extraBodyTitle) parts.push(copy.extraBodyTitle);
    if (copy.extraBody) parts.push(copy.extraBody);
  }

  const localized = lang === "fr" ? frServiceContent[serviceId] : lang === "fa" ? faServiceContent[serviceId] : undefined;
  const base = services.find((s) => s.id === serviceId);
  const content = localized ?? base;
  if (content) {
    parts.push(...content.help, ...content.experiencing, ...content.expect, ...content.who);
    content.faqs.forEach((f) => parts.push(f.q, f.a));
  }

  const faqOverride = serviceFaqOverrides[serviceId]?.[lang];
  faqOverride?.forEach((f) => parts.push(f.q, f.a));

  return parts.join(" ");
}

const serviceWhoIcons: Record<string, typeof Laptop[]> = {
  // Each of the 84 "may be helpful" cards uses a distinct, content-specific icon.
  "online-counselling": [BriefcaseBusiness, Baby, MapPinned, Accessibility, House, CalendarClock],
  "individual-counselling": [BrainCircuit, HeartPulse, CloudSun, GitFork, Scale, Compass],
  "relationship-and-couples-counselling": [HeartCrack, MessagesSquare, Unplug, MessageCircleWarning, Milestone, LockKeyhole],
  "family-counselling": [HousePlus, UserRoundCheck, MessageSquareMore, Languages, Network, Workflow],
  anxiety: [BadgeAlert, BrainCog, ScanHeart, Footprints, RadioTower, MoonStar],
  depression: [CloudRain, CircleOff, BatteryLow, BedDouble, ThumbsDown, UserMinus],
  trauma: [History, EyeOff, ShieldAlert, CloudFog, HeartCrack, Handshake],
  "grief-and-loss": [CloudLightning, CloudDrizzle, CalendarDays, ArchiveX, ClockAlert, FileQuestion],
  "anger-management": [Flame, Annoyed, VolumeX, Archive, Activity, Swords],
  adhd: [ListTodo, TimerReset, FolderKanban, CloudCog, MousePointer2, CircleUserRound],
  "prenatal-and-pregnancy": [Heart, BadgeHelp, Vibrate, Link2, Award, GitCompareArrows],
  lgbtqia2s: [Rainbow, Fingerprint, DoorOpen, VenusAndMars, Shield, UserRound],
  "cvap-clients": [Siren, ShieldCheck, UsersRound, Eye, ShieldQuestion, Route],
  "icbc-clients": [Car, Scan, Moon, Brain, Ban, PersonStanding],
  ifhp: [Globe, MountainSnow, FileHeart, TreePine, MessageCircleHeart, Landmark],
};
const onlineHowIcons = [ShieldCheck, Link2, ReceiptText];

function OnlineCounsellingContent({ lang, page, serviceId }: { lang: "en" | "fr" | "fa"; page: ModernServicePage; serviceId: string }) {
  const copy = page.copy[lang];
  const isFa = lang === "fa";
  const whoIcons = serviceWhoIcons[serviceId] ?? serviceWhoIcons["online-counselling"];
  const formatQuestionTitle = (title: string) => {
    const isQuestion = lang === "en"
      ? /^(what|when|where|who|why|how|which|can|do|does|is|are|will)\b/i.test(title)
      : lang === "fr"
        ? /^(à qui|à quoi|quand|comment|pourquoi|quel|quelle|quels|quelles|est-ce|peut|doit)\b/i.test(title)
        : /^(چه|چطور|چگونه|آیا|کی|کدام)/.test(title);
    return isQuestion && !/[?؟]$/.test(title) ? `${title}${isFa ? "؟" : "?"}` : title;
  };
  const ServiceTitle = ({ title, subtitle, center = false, className = "", subtitleClassName = "" }: { title: string; subtitle?: string; center?: boolean; className?: string; subtitleClassName?: string }) => (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <h2 style={isFa ? { lineHeight: 1.82 } : undefined}>{formatLgbtqia2sText(formatQuestionTitle(title))}</h2>
      {subtitle && <p className={`mt-4 text-[var(--brand-ink-muted)] ${subtitleClassName}`}>{formatLgbtqia2sText(subtitle)}</p>}
    </div>
  );
  const isCouplesService = page === modernServicePages["relationship-and-couples-counselling"];
  const isFamilyService = page === modernServicePages["family-counselling"];
  const isTraumaService = page === modernServicePages.trauma;
  const isCvapService = serviceId === "cvap-clients";
  const isIcbcService = serviceId === "icbc-clients";
  const isIfhpService = serviceId === "ifhp";
  const usesRelatedServicesBackground = ["prenatal-and-pregnancy", "lgbtqia2s", "depression", "anxiety", "family-counselling", "ifhp"].includes(serviceId);
  const isAnxietyService = page === modernServicePages.anxiety;
  const isAnxietyEnglish = serviceId === "anxiety" && lang === "en";
  const isAnxietyEnOrFr = serviceId === "anxiety" && lang !== "fa";
  const isLgbtqEnglish = serviceId === "lgbtqia2s" && lang === "en";
  const isPrenatalFa = serviceId === "prenatal-and-pregnancy" && lang === "fa";
  return (
    <div className="service-modern-body">
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal>
            <div>
              {isFa && copy.introTitle.includes("ChangeMoment Mental Health Center") ? (
                <h2 className="service-intro-heading online-fa-mixed-title leading-[1.5]">
                  {formatLgbtqia2sText(copy.introTitle.replace("ChangeMoment Mental Health Center", "").trim())} <span className="align-baseline text-[0.78em] leading-none">ChangeMoment Mental Health Center</span>
                </h2>
              ) : (
                <ServiceTitle className="service-intro-heading" title={copy.introTitle} />
              )}
              <p className="mt-6 text-lg leading-8 text-[var(--brand-ink-muted)] md:leading-9">{formatLgbtqia2sText(copy.introBody)}</p>
            </div>
          </Reveal>
          <div className="h-[420px] w-full max-w-full overflow-hidden rounded-[2.75rem] rounded-tl-none border-8 border-white bg-[var(--brand-bone)] shadow-[0_30px_70px_-42px_rgba(91,61,44,0.45)] lg:h-[620px]">
            <ImageWithFallback src={page.section2} alt={copy.introTitle} className="block size-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section bg="bone-soft">
        <Reveal>
          <ServiceTitle
            center
            className="service-who-heading lg:max-w-5xl"
            title={copy.whoTitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.whoItems.map((item, i) => {
            const Icon = whoIcons[i] ?? CheckCircle2;
            return (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <article className="h-full rounded-[2rem] border border-[var(--brand-muted-olive)]/18 bg-white/82 p-6 shadow-[0_22px_56px_-44px_rgba(52,56,45,0.42)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#C0C79E] text-[#3c4322]">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="online-who-card-title mt-5 text-[1.35rem] leading-tight text-[var(--brand-ink)]" style={isFa ? { lineHeight: 1.65, whiteSpace: "normal", overflowWrap: "anywhere" } : undefined}>{formatLgbtqia2sText(item.title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">{formatLgbtqia2sText(item.body)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {copy.extraListTitle && copy.extraListItems ? (
        <Section className={isCvapService || isIcbcService || isIfhpService ? "!pt-36 !pb-12 md:!pt-44 md:!pb-20" : ""}>
          <div className={`grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 ${isCouplesService || isTraumaService || isCvapService || isIcbcService || isIfhpService ? "lg:items-center" : ""}`}>
            <Reveal>
              <div className={isCouplesService || isTraumaService || isCvapService || isIcbcService || isIfhpService ? "" : "sticky top-28"}>
                <ServiceTitle
                  title={copy.extraListTitle}
                  subtitle={copy.extraListIntro}
                  className={isCouplesService && isFa ? "couples-fa-list-heading" : ""}
                  subtitleClassName={isCouplesService ? "text-[#82905f]" : ""}
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.extraListItems!.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-2xl border border-[var(--brand-muted-olive)]/16 ${isCvapService || isIcbcService || isIfhpService ? "bg-[var(--brand-sage-soft)]" : "bg-[var(--brand-bone-soft)]"} px-4 py-3 text-sm text-[var(--brand-ink-muted)] ${(isAnxietyService || (isCouplesService && copy.extraListItems!.length % 2 === 1)) && index === copy.extraListItems!.length - 1 ? "sm:col-span-2 sm:w-[calc(50%-0.375rem)] sm:justify-self-center" : ""}`}
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-deep-olive)]" strokeWidth={1.7} aria-hidden="true" />
                    <span>{formatLgbtqia2sText(item)}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {copy.extraBodyTitle && copy.extraBody && copy.extraBodyPlacement === "beforeHow" ? (
        <Section>
          <Reveal>
            <div className={`mx-auto max-w-4xl rounded-[2.5rem] rounded-tr-none border border-[var(--brand-muted-olive)]/22 p-7 shadow-[0_24px_70px_-52px_rgba(52,56,45,0.4)] md:p-10 ${usesRelatedServicesBackground ? "bg-[var(--brand-sage-soft)]" : "bg-[var(--brand-bone-soft)]"}`}>
              <ServiceTitle className={isFamilyService && isFa ? "family-fa-teen-heading" : isLgbtqEnglish || isPrenatalFa || isAnxietyEnOrFr ? "lg:max-w-none" : ""} title={copy.extraBodyTitle} />
              <p className="mt-6 text-lg leading-8 text-[var(--brand-ink-muted)] md:leading-9">{formatLgbtqia2sText(copy.extraBody)}</p>
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section className={isCvapService || isIcbcService || isIfhpService ? "!pt-16 md:!pt-24" : ""}>
        <div className="online-how-grid grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="online-how-visual relative mx-auto w-full max-w-[36rem] overflow-visible lg:mx-0">
            <div className="online-how-glow absolute right-0 -top-6 h-36 w-36 rounded-full bg-[#DDBDA6]/35 blur-2xl sm:-right-6" aria-hidden="true" />
            <div className="online-how-frame relative rounded-[2.25rem] rounded-bl-none bg-[var(--brand-bone-soft)] p-2 shadow-[0_28px_70px_-50px_rgba(91,61,44,0.42)] sm:rounded-[2.75rem] sm:p-3 md:mb-16">
              <div className="aspect-[5/4] min-h-[300px] overflow-hidden rounded-[2.15rem] rounded-bl-none">
                <ImageWithFallback src={page.section3} alt={copy.howTitle} className="block size-full object-cover" loading="lazy" />
              </div>
              <div className="online-how-note mt-3 rounded-[1.5rem] border border-[var(--brand-muted-olive)]/18 bg-white/95 px-4 py-4 shadow-[0_18px_48px_-34px_rgba(52,56,45,0.5)] backdrop-blur md:absolute md:-bottom-14 md:left-8 md:mt-0 md:max-w-[22rem] md:px-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#C0C79E] text-[#3c4322]">
                    <ShieldCheck className="size-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <p className="min-w-0 text-sm leading-6 text-[var(--brand-ink-muted)]">
                    {page === modernServicePages["online-counselling"]
                      ? isFa ? "لینک امن، زمان مشخص و فضای آرام شما؛ همه چیز ساده و قابل‌دسترس" : lang === "fr" ? "Un lien sécurisé, une heure claire et votre espace calme — tout reste simple et accessible." : "A secure link, a clear time, and your calm space — everything stays simple and accessible."
                      : isFa ? "ساختاری آرام، گام بعدی روشن و فضایی برای حرکت با ریتم شما." : lang === "fr" ? "Une structure calme, un prochain pas clair et l’espace d’avancer à votre rythme." : "A calm structure, a clear next step, and room to move at your pace."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="online-how-copy min-w-0">
              <ServiceTitle className={isFa ? "online-fa-nowrap-heading" : ""} title={copy.howTitle} />
              <div className="mt-8 space-y-4">
                {copy.howItems.map((item, i) => {
                  const Icon = onlineHowIcons[i] ?? CheckCircle2;
                  return (
                    <div key={item.title} className="rounded-[1.75rem] border border-[var(--brand-muted-olive)]/18 bg-white p-5 shadow-[0_18px_44px_-38px_rgba(52,56,45,0.42)]">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-bone)] text-[#B18369]">
                          <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="online-how-card-title text-[1.2rem] leading-snug text-[var(--brand-ink)]" style={isFa ? { lineHeight: 1.65, whiteSpace: "normal", overflowWrap: "anywhere" } : undefined}>{formatLgbtqia2sText(item.title)}</h3>
                          <p className="mt-2 text-sm leading-6 text-[var(--brand-ink-muted)]">{formatLgbtqia2sText(item.body)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {copy.extraBodyTitle && copy.extraBody && copy.extraBodyPlacement !== "beforeHow" ? (
        <Section>
          <Reveal>
            <div className={`mx-auto max-w-4xl rounded-[2.5rem] rounded-tr-none border border-[var(--brand-muted-olive)]/22 bg-[var(--brand-bone-soft)] p-7 shadow-[0_24px_70px_-52px_rgba(52,56,45,0.4)] md:p-10 ${isAnxietyEnglish ? "lg:max-w-6xl" : ""}`}>
              <ServiceTitle className={isAnxietyEnglish || isPrenatalFa ? "lg:max-w-none" : ""} title={copy.extraBodyTitle} />
              <p className="mt-6 text-lg leading-8 text-[var(--brand-ink-muted)] md:leading-9">{formatLgbtqia2sText(copy.extraBody)}</p>
            </div>
          </Reveal>
        </Section>
      ) : null}

      <section className="relative isolate overflow-hidden bg-[var(--brand-deep-olive)] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#C0C79E]/20 blur-3xl" />
          <div className="absolute -bottom-28 right-0 size-96 rounded-full bg-[#B18369]/16 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto w-full max-w-[34rem] lg:order-2 lg:mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] rounded-tl-none border border-white/20 bg-white/10 p-3 shadow-[0_32px_90px_-48px_rgba(0,0,0,0.72)]">
                  <ImageWithFallback src={page.section4} alt={copy.progressTitle} className="aspect-[4/5] w-full rounded-[2.35rem] rounded-tl-none object-cover" loading="lazy" />
                </div>
                <div className="relative -mt-10 ml-auto max-w-[17rem] rounded-[2rem] rounded-br-none border border-[var(--brand-bone)]/50 bg-[var(--brand-bone)] p-5 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.62)]">
                  <p className="font-heading text-[1.35rem] leading-[1.22] text-[var(--brand-deep-olive)] fa:leading-[1.55]" style={isFa ? { fontSize: "1rem", lineHeight: 1.75 } : undefined}>
                    {isFa ? "امید، هر لحظه را به پیشرفتی تازه تبدیل می‌کند." : lang === "fr" ? "L’espoir transforme chaque instant en progrès." : "Hope turns each moment into Progress."}
                  </p>
                </div>
              </div>
              <div className="max-w-3xl lg:order-1">
                <h2 className="font-heading text-[clamp(1.78rem,3vw,2.7rem)] font-bold leading-[1.1] text-white lg:whitespace-nowrap fa:text-[clamp(1.5rem,2.6vw,2.15rem)] fa:normal-case fa:tracking-normal fa:leading-[1.55]" style={isFa ? { lineHeight: 1.82, letterSpacing: 0, wordSpacing: 0 } : undefined}>
                  {formatLgbtqia2sText(formatQuestionTitle(copy.progressTitle))}
                </h2>
                <p className="mt-7 text-lg leading-8 text-white/78 md:text-xl md:leading-9">{formatLgbtqia2sText(copy.progressBody)}</p>
                <div className="mt-9 border-t border-white/20 pt-7">
                  <p className="mb-4 max-w-2xl text-[1.1rem] font-bold leading-7 text-[#E8DDD0] md:text-[1.22rem] md:leading-8 fa:text-[1.1rem] fa:leading-8">
                    {formatLgbtqia2sText(copy.ctaTitle)}
                  </p>
                  <LinkButton to="/book" variant="ghost" size="lg" className="w-fit whitespace-nowrap !bg-[#B18369] !text-white shadow-[0_16px_34px_-18px_rgba(0,0,0,0.68)] hover:!bg-[#DDBDA6] hover:!text-[var(--brand-ink)]" arrow>
                    <CalendarHeart className="size-5" aria-hidden="true" />
                    {copy.ctaButton}
                  </LinkButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLang();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const content = lang === "fr" ? frServiceContent[service.id] : lang === "fa" ? faServiceContent[service.id] : undefined;
  const modernPage = modernServicePages[service.id as keyof typeof modernServicePages];
  const isModernService = Boolean(modernPage);
  const modernCopy = modernPage?.copy[lang];
  const heroImage = modernPage?.opening ?? serviceImages[service.id] ?? serviceImages[services[0]?.id] ?? "";
  const mobileHeroImage = mobileServiceHeroImages[service.id];
  const heroBookLabel = lang === "fa" && service.id === "online-counselling"
    ? "رزرو وقت مشاوره رایگان"
    : t("cta.book");
  const localizedName = modernCopy?.heroTitle ?? service.name[lang] ?? service.name.en;
  const localizedShort = modernCopy?.heroIntro ?? service.short[lang] ?? service.short.en;
  const localizedIntro = modernCopy?.heroIntro ?? service.intro[lang] ?? service.intro.en;
  const serviceSeoDescription = `${localizedShort} ${
    lang === "fa"
      ? "خدمات حضوری در کوکیتلام و آنلاین در سراسر بریتیش کلمبیا ارائه می‌شود."
      : lang === "fr"
        ? "Services en personne à Coquitlam et en ligne partout en Colombie-Britannique."
        : "Available in person in Coquitlam and online across British Columbia."
  }`;
  const related = service.related
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as typeof services;

  const overviewTitle =
    lang === "fa"
      ? `فضایی حمایتگر برای ${localizedName}`
      : lang === "fr"
        ? `Un espace de soutien pour ${localizedName.toLowerCase()}`
        : `A supportive space for ${localizedName}`;

  const overviewParagraphs =
    lang === "fa"
      ? [
          service.intro.fa,
          `در ${service.name.fa}، هدف این نیست که به شما بگوییم باید چه احساسی داشته باشید. ما فضایی آرام و محرمانه فراهم می‌کنیم تا بتوانید آنچه درونتان می‌گذرد را با امنیت بیشتری ببینید، نام‌گذاری کنید و قدم بعدی را پیدا کنید.`,
          "روند درمان با توجه به نیاز، ریتم و تجربه زیسته شما شکل می‌گیرد؛ با تمرکز بر فهم عمیق‌تر، ابزارهای کاربردی و تغییری که در زندگی روزمره قابل لمس باشد.",
        ]
      : lang === "fr"
        ? [
            service.intro.fr,
            `Dans le cadre de ${service.name.fr.toLowerCase()}, l’objectif n’est pas de vous dire quoi ressentir. Nous offrons un espace calme et confidentiel pour mieux comprendre ce que vous vivez et trouver un prochain pas qui vous respecte.`,
            "Le soutien s’adapte à vos besoins, à votre rythme et à votre histoire, avec une attention portée à la compréhension, aux outils concrets et aux changements qui peuvent soutenir votre quotidien.",
          ]
        : [
            service.intro.en,
            `${service.name.en} is not about being told what to feel or how quickly to change. It offers a calm, confidential space to understand what is happening and find a next step that feels grounded and possible.`,
            "Support is shaped around your needs, pace, and lived experience — with attention to deeper understanding, practical tools, and changes that can support everyday life.",
          ];

  const processItems =
    lang === "fa"
      ? ["گفت‌وگوی اولیه برای شناخت آنچه شما را به اینجا آورده", "روشن کردن هدف‌ها و آنچه در حال حاضر بیشترین فشار را ایجاد می‌کند", "ساختن برنامه حمایتی متناسب با نیاز و ریتم شما", "جلسات پیوسته با تمرین، بازتاب و تنظیم مسیر", "بازبینی روند درمان و تغییر آن در صورت نیاز"]
      : lang === "fr"
        ? ["Une première conversation pour comprendre ce qui vous amène", "Clarifier vos objectifs et ce qui pèse le plus en ce moment", "Créer un plan de soutien adapté à vos besoins et à votre rythme", "Des séances continues avec pratique, réflexion et ajustements", "Réviser le processus et l’adapter lorsque vos besoins changent"]
        : ["A first conversation to understand what brings you here", "Clarifying your goals and what feels most important right now", "Creating a support plan that fits your needs and pace", "Ongoing sessions with reflection, practice, and adjustment", "Reviewing the process and adapting care as your needs change"];

  const approaches =
    lang === "fa"
      ? ["CBT", "ذهن‌آگاهی", "رویکردهای آگاه از تروما", "درمان متمرکز بر هیجان", "تنظیم سیستم عصبی"]
      : lang === "fr"
        ? ["TCC", "pleine conscience", "approches sensibles au trauma", "thérapie centrée sur les émotions", "régulation du système nerveux"]
        : ["CBT", "mindfulness", "trauma-informed approaches", "emotion-focused therapy", "nervous-system regulation"];

  const approachIntro =
    lang === "fa"
      ? "بسته به نیاز شما و تناسب با درمانگر، حمایت ممکن است از رویکردهای آگاهانه و مبتنی بر شواهد زیر الهام بگیرد:"
      : lang === "fr"
        ? "Selon vos besoins et le jumelage thérapeutique, le soutien peut s’appuyer sur des approches éclairées par les données probantes, telles que :"
        : "Depending on your needs and therapist fit, support may draw from evidence-informed approaches such as:";

  const quote =
    lang === "fa"
      ? "تغییر اغلب از لحظه‌ای آغاز می‌شود که در امنیت، واقعاً دیده می‌شویم."
      : lang === "fr"
        ? "Le changement commence souvent au moment où l’on se sent accueilli en sécurité."
        : "Change often begins in the moment we feel safely met.";

  const overrideFaqs = serviceFaqOverrides[service.id]?.[lang];
  const faqSource = overrideFaqs ?? content?.faqs ?? service.faqs;
  const consultationFaq = lang === "fa"
    ? {
        q: "اگر مطمئن نباشم این سرویس برای من مناسب است چه؟",
        a: `می‌توانید یک وقت مشاوره رایگان رزرو کنید. با هم درباره نیازها و انتظاراتتان صحبت می‌کنیم تا ببینید آیا ${localizedName} برای شما انتخاب مناسبی هست یا نه.`,
      }
    : lang === "fr"
      ? {
          q: "Et si je ne suis pas certain que ce service me convient ?",
          a: "Vous pouvez réserver une consultation gratuite. Nous pourrons discuter brièvement de vos besoins et de vos attentes afin de vous aider à déterminer si ce service vous convient.",
        }
      : {
          q: "What if I’m not sure this service is right for me?",
          a: "You are welcome to book a free consultation. We can talk briefly about your needs and expectations and help you decide whether this service feels like a good fit.",
        };
  const hasConsultationFaq = lang === "fa"
    ? faqSource.some((faq) => faq.q.includes("اگر مطمئن نباشم"))
    : lang === "fr"
      ? faqSource.some((faq) => faq.q.startsWith("Et si je ne suis pas certain"))
      : faqSource.some((faq) => faq.q.startsWith("What if I’m not sure"));
  const displayFaqs = hasConsultationFaq
    ? faqSource
    : [...faqSource.slice(0, -1), consultationFaq, faqSource.at(-1)!];

  const insuranceFaqMatch = lang === "fa" ? /بیمه/ : lang === "fr" ? /assurance/i : /insurance/i;
  const insuranceNote = lang === "fa"
    ? "لطفاً پوشش خود را با شرکت بیمه بررسی کنید."
    : lang === "fr"
      ? "Veuillez vérifier votre couverture auprès de votre assureur."
      : "Please check with your insurance provider to confirm your coverage.";
  const insuranceQuestion = lang === "fa"
    ? "آیا این مشاوره تحت پوشش بیمه است؟"
    : lang === "fr"
      ? "Ce counselling est-il couvert par les assurances?"
      : `Is ${localizedName} counselling covered by insurance?`;
  const insuranceAnswer = lang === "fa"
    ? `بسیاری از بیمه‌های تکمیلی مشاوره با مشاور رجیسترد را پوشش می‌دهند. ${insuranceNote}`
    : lang === "fr"
      ? `Plusieurs régimes d’assurance couvrent les services d’un conseiller clinique agréé. ${insuranceNote}`
      : `Many extended health plans cover counselling with a Registered Clinical Counsellor. Coverage depends on your provider, and we provide receipts for reimbursement. ${insuranceNote}`;
  const localizedFaqs = displayFaqs.some((faq) => insuranceFaqMatch.test(faq.q))
    ? displayFaqs.map((faq) => {
        if (!insuranceFaqMatch.test(faq.q)) return faq;
        const answerWithoutNote = faq.a.endsWith(insuranceNote)
          ? faq.a.slice(0, -insuranceNote.length).trim()
          : faq.a.trim();
        return { ...faq, a: `${answerWithoutNote} ${insuranceNote}` };
      })
    : [...displayFaqs, { q: insuranceQuestion, a: insuranceAnswer }];

  const serviceUrl = localizedUrl(`/services/${service.slug}`, lang);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: localizedName,
      description: serviceSeoDescription,
      serviceType: localizedName,
      inLanguage: SEO_LOCALES[lang],
      provider: { "@id": "https://changemoment.ca/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" },
      url: serviceUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: localizedFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.breadcrumbHome"), item: localizedUrl("/", lang) },
        { "@type": "ListItem", position: 2, name: t("services.detail.breadcrumbServices"), item: localizedUrl("/services", lang) },
        { "@type": "ListItem", position: 3, name: localizedName, item: serviceUrl },
      ],
    },
  ];

  const desktopHeroPosition =
    service.id === "anxiety"
      ? lang === "fa"
        ? "lg:object-[30%_50%]"
        : "lg:object-[70%_50%]"
      : service.id === "depression"
        ? lang === "fa"
          ? "lg:object-[27%_50%]"
          : "lg:object-[73%_50%]"
        : service.id === "cvap-clients"
          ? lang === "fa"
            ? "lg:object-[24%_50%]"
            : "lg:object-[76%_50%]"
          : "";

  const isLgbtqService = service.id === "lgbtqia2s";
  const isIndividualService = service.id === "individual-counselling";
  const isOnlineService = service.id === "online-counselling";
  const isDepressionService = service.id === "depression";
  const hasMobileSubtitleGradient = ["anxiety", "family-counselling", "depression", "trauma", "anger-management"].includes(service.id);

  const mobileHeroPosition =
    service.id === "lgbtqia2s"
      ? "object-[62%_50%]"
      : service.id === "relationship-and-couples-counselling"
        ? "object-[70%_50%]"
        : service.id === "depression"
          ? "object-[70%_50%]"
          : service.id === "trauma"
            ? "object-[70%_50%]"
            : service.id === "grief-and-loss"
              ? "object-[70%_50%]"
              : service.id === "anger-management"
                ? "object-[70%_50%]"
                : service.id === "adhd"
                  ? "object-[70%_50%]"
                  : service.id === "prenatal-and-pregnancy"
                    ? "object-[70%_50%]"
                    : service.id === "cvap-clients"
                      ? "object-[70%_50%]"
        : "object-[100%_50%]";

  return (
    <>
      <Seo
        title={localizedName}
        description={serviceSeoDescription}
        path={`/services/${service.slug}`}
        image={heroImage}
        imageAlt={localizedName}
        jsonLd={jsonLd}
      />

      {/* Cinematic service hero */}
      <section className={`relative isolate overflow-hidden bg-[var(--brand-bone-soft)] pt-24 md:pt-28 ${isModernService ? "min-h-[780px] md:min-h-[864px]" : "min-h-[650px] md:min-h-[720px]"}`}>
        <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--brand-olive-soft)]">
          {mobileHeroImage ? (
            <>
              <ImageWithFallback
                src={mobileHeroImage}
                alt={localizedName}
                className={`service-hero-image size-full object-cover opacity-100 md:hidden motion-safe:animate-[serviceHeroDrift_18s_ease-out_forwards] ${mobileHeroPosition}`}
                loading="eager"
                fetchPriority="high"
              />
              <ImageWithFallback
                src={heroImage}
                alt={localizedName}
                className={`service-hero-image hidden size-full object-cover opacity-90 md:block md:object-center motion-safe:animate-[serviceHeroDrift_18s_ease-out_forwards] ${desktopHeroPosition}`}
                style={isDepressionService && lang === "fa" ? { transform: "scaleX(-1)" } : undefined}
                loading="eager"
                fetchPriority="high"
              />
            </>
          ) : (
            <ImageWithFallback
              src={heroImage}
              alt={localizedName}
              className={`service-hero-image size-full object-cover opacity-100 md:object-center md:opacity-90 motion-safe:animate-[serviceHeroDrift_18s_ease-out_forwards] ${mobileHeroPosition} ${desktopHeroPosition}`}
              loading="eager"
              fetchPriority="high"
            />
          )}
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 md:bg-white/18" />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(248,244,239,0.56)_42%,rgba(248,244,239,0.2)_72%,rgba(255,255,255,0.04)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(248,244,239,0.78)_34%,rgba(248,244,239,0.38)_58%,rgba(255,255,255,0.08)_100%)] rtl:bg-[linear-gradient(270deg,rgba(255,255,255,0.78)_0%,rgba(248,244,239,0.56)_42%,rgba(248,244,239,0.2)_72%,rgba(255,255,255,0.04)_100%)] rtl:md:bg-[linear-gradient(270deg,rgba(255,255,255,0.88)_0%,rgba(248,244,239,0.78)_34%,rgba(248,244,239,0.38)_58%,rgba(255,255,255,0.08)_100%)]" />
        {isLgbtqService && (
          <div className="absolute inset-x-0 bottom-0 z-[3] h-[85%] bg-[linear-gradient(to_top,rgba(248,244,239,0.85)_0%,rgba(248,244,239,0.55)_45%,rgba(248,244,239,0)_100%)] md:hidden" aria-hidden="true" />
        )}
        {isIndividualService && (
          <div className="absolute inset-x-0 bottom-0 z-[3] h-[72%] bg-[linear-gradient(to_top,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.48)_55%,rgba(255,255,255,0)_100%)] md:hidden" aria-hidden="true" />
        )}
        {isOnlineService && (
          <div className="absolute inset-x-0 bottom-0 z-[3] h-[72%] bg-[linear-gradient(to_top,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.48)_55%,rgba(255,255,255,0)_100%)] md:hidden" aria-hidden="true" />
        )}
        {hasMobileSubtitleGradient && (
          <div className="absolute inset-x-0 bottom-0 z-[3] h-[80%] bg-[linear-gradient(to_top,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.60)_45%,rgba(255,255,255,0)_100%)] md:hidden" aria-hidden="true" />
        )}
        <div className={`relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 sm:px-8 ${isModernService ? "min-h-[672px] pb-6 pt-24 md:min-h-[744px] md:pb-8 md:pt-32" : "min-h-[560px] pb-16 md:min-h-[620px]"}`}>
          <div className={`max-w-2xl ${isModernService ? "translate-y-10 md:translate-y-14" : ""}`}>
            <Reveal>
              <h1 className="max-w-[42rem] text-[clamp(2.7rem,5vw,5.25rem)] leading-[1.02] text-[var(--brand-ink)] fa:text-[clamp(2rem,4vw,3.2rem)] fa:leading-[1.34]">
                {formatLgbtqia2sText(localizedName)}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--brand-ink-muted)] md:text-xl md:leading-9">
                {formatLgbtqia2sText(localizedIntro)}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LinkButton to="/book" size="lg" className="whitespace-nowrap">
                  <CalendarHeart className="size-5" aria-hidden="true" />
                  {heroBookLabel}
                </LinkButton>
                <LinkButton to="/contact" variant="outline" size="lg" className="whitespace-nowrap" arrow>
                  {t("cta.contact")}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {modernPage ? (
        <OnlineCounsellingContent lang={lang} page={modernPage} serviceId={service.id} />
      ) : (
        <>
          {/* Overview */}
          <Section>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal>
            <div className="sticky top-28">
              <h2>{overviewTitle}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-8 text-[var(--brand-ink-muted)]">
              {overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Help + experiencing */}
      <Section bg="bone-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading title={t("services.detail.help")} />
              <div className="mt-8 grid gap-4">
                {(content?.help ?? service.help).slice(0, 6).map((item, i) => (
                  <div key={item} className="flex items-start gap-4 rounded-3xl border border-[var(--brand-muted-olive)]/18 bg-white/78 p-5 shadow-[0_20px_50px_-40px_rgba(52,56,45,0.45)]">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#C0C79E] text-[#3c4322]">
                      {i + 1}
                    </span>
                    <p className="text-[var(--brand-ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_24px_70px_-50px_rgba(52,56,45,0.42)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[var(--brand-sage-soft)] text-[var(--brand-deep-olive)]">
                  <Heart className="size-5" strokeWidth={1.5} />
                </span>
                <h2 style={{ fontSize: "1.7rem" }}>{t("services.detail.experiencing")}</h2>
              </div>
              <ul className="mt-6 space-y-3.5">
                {(content?.experiencing ?? service.experiencing).slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--brand-sage)]" aria-hidden="true" />
                    <span className="text-[var(--brand-ink-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Session process */}
      <Section>
        <Reveal>
          <SectionHeading center title={t("services.detail.sessions")} subtitle={t("services.detail.sessionsSubtitle")} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processItems.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="h-full rounded-[1.5rem] border border-[var(--brand-muted-olive)]/18 bg-white p-5">
                <span className="font-heading text-4xl text-[var(--brand-muted-olive)]">0{i + 1}</span>
                <p className="mt-4 text-sm leading-6 text-[var(--brand-ink-muted)]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who + approaches */}
      <Section bg="sage-soft">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <div className="rounded-[2rem] bg-white/75 p-7">
              <h2>{t("services.detail.who")}</h2>
              <ul className="mt-6 grid gap-3">
                {(content?.who ?? service.who).slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4">
                    <Compass className="mt-0.5 size-5 shrink-0 text-[var(--brand-deep-olive)]" strokeWidth={1.5} />
                    <span className="text-[var(--brand-ink-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[var(--brand-muted-olive)]/20 bg-[var(--brand-deep-olive)] p-7 text-white">
              <h2 className="text-white">{t("services.detail.approaches")}</h2>
              <p className="mt-4 text-white/75">{approachIntro}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {approaches.map((item) => (
                  <span key={item} className="rounded-full bg-white/12 px-3 py-1.5 text-sm text-white/90">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Moment of change accent */}
      <section className="bg-[var(--brand-bone-soft)] py-18 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <MomentCurve className="mx-auto h-24 w-full max-w-md" />
            <p className="mx-auto mt-5 max-w-2xl font-heading text-[clamp(2rem,4vw,3.35rem)] leading-[1.15] text-[var(--brand-deep-olive)] fa:text-[clamp(1.45rem,3vw,2.35rem)] fa:leading-[1.45]">
              {quote}
            </p>
          </Reveal>
        </div>
      </section>

        </>
      )}

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2>{t("services.detail.faq")}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8">
              <FAQ items={localizedFaqs.map((f) => ({ ...f, q: f.q, a: f.a }))} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Related services */}
      <Section bg="sage-soft">
        <Reveal>
          <SectionHeading title={t("services.detail.related")} />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.slice(0, 3).map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link to={localizedPath("/services", lang)} className="inline-flex items-center gap-1.5 text-[var(--brand-deep-olive)] transition-all hover:gap-2.5">
            {t("cta.viewAll")}
          </Link>
        </div>
      </Section>

      <CTABand heading={t("home.finalCta.heading")} body={t("home.finalCta.body")} />

    </>
  );
}
