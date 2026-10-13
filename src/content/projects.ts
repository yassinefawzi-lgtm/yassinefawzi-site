export const categories = [
  "Tous",
  "Growth & Acquisition",
  "Automatisation",
  "Intelligence artificielle",
  "Développement web",
  "Marketing digital",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: Exclude<Category, "Tous">;
  tags: string[];
  status: string;
  visual:
    "document" | "planner" | "ads" | "jobs" | "rent" | "site" | "campaign";
  context: string;
  role: string;
  solution: string;
  tools: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};
export const projects: Project[] = [
  {
    slug: "offres-de-reprise",
    title: "Génération d’offres de reprise",
    subtitle: "Génération d’offres de reprise",
    summary:
      "Un outil de génération documentaire conçu autour des besoins d’un avocat en restructuring.",
    category: "Automatisation",
    tags: ["Outil métier", "Génération documentaire"],
    status: "Mission client",
    visual: "document",
    featured: true,
    context:
      "Un avocat spécialisé en restructuring prépare des offres de reprise dans le cadre de ses dossiers professionnels.",
    role: "Analyse du besoin et conception d’un outil de génération de documents ou de propositions structurées.",
    solution:
      "Un outil de génération d’offres de reprise à partir des informations du dossier, conçu pour un avocat spécialisé en restructuring.",
    tools: [],
  },
  {
    slug: "organisation-wedding-planner",
    title: "Organisation d’une wedding planner",
    subtitle: "Organisation d’une wedding planner",
    summary:
      "Centraliser les informations, organiser les événements et simplifier le suivi des tâches.",
    category: "Automatisation",
    tags: ["Organisation", "Workflows"],
    status: "Logiciel métier",
    visual: "planner",
    featured: true,
    context:
      "Une wedding planner doit coordonner des informations, des échéances et des tâches liées à son activité.",
    role: "Conception d’un outil d’organisation et de suivi de l’activité.",
    solution:
      "Un logiciel pour centraliser les informations, suivre les tâches et automatiser les relances auprès des invités et des prestataires d’une wedding planner.",
    tools: [],
  },
  {
    slug: "acquisition-cabinet-avocat",
    title: "Google Ads pour un cabinet d’avocat",
    subtitle: "Google Ads pour un cabinet d’avocat",
    summary:
      "Accompagner le lancement d’un cabinet avec des campagnes locales et un budget ajusté à sa capacité d’accueil.",
    category: "Growth & Acquisition",
    tags: ["Google Ads", "Acquisition locale"],
    status: "Mission client",
    visual: "ads",
    featured: true,
    context:
      "Un avocat pénaliste lance son cabinet et souhaite développer sa visibilité locale et les demandes de rendez-vous.",
    role: "Accompagnement à la prise en main de Google Ads, configuration des campagnes, recherche de mots-clés, ciblage géographique et suivi.",
    solution:
      "Configuration et suivi de campagnes Google Ads : choix des mots-clés, ciblage géographique et ajustement du budget selon la capacité d’accueil du cabinet.",
    tools: ["Google Ads"],
  },
  {
    slug: "campagnes-restaurants-reflexologie",
    title: "Restaurants & école de réflexologie",
    subtitle: "Restaurants & école de réflexologie",
    summary:
      "Des campagnes publicitaires sur Instagram pour des restaurants et une école de réflexologie.",
    category: "Marketing digital",
    tags: ["Instagram", "Campagnes"],
    status: "Missions clients",
    visual: "campaign",
    context:
      "Des interventions publicitaires ont été réalisées pour des restaurants et une école de réflexologie.",
    role: "Configuration, diffusion et optimisation de campagnes Instagram.",
    solution:
      "Configuration, diffusion et optimisation de campagnes publicitaires sur Instagram pour des restaurants et une école de réflexologie.",
    tools: ["Instagram / Meta Ads"],
  },
  {
    slug: "veille-emploi",
    title: "Un outil de veille d’offres d’emploi",
    subtitle: "Un outil de veille d’offres d’emploi",
    summary:
      "Un projet personnel pour centraliser les annonces et explorer leur pertinence selon un profil.",
    category: "Intelligence artificielle",
    tags: ["Données", "Projet personnel"],
    status: "Projet personnel",
    visual: "jobs",
    context:
      "Projet personnel de centralisation et d’analyse des offres d’emploi.",
    role: "Conception du périmètre et du parcours de recherche.",
    solution:
      "Ce projet personnel porte sur la centralisation des offres d’emploi et leur comparaison selon les critères d’un candidat. Le périmètre étudié comprend la collecte multisource, le dédoublonnage et les filtres.",
    tools: [],
  },
  {
    slug: "verification-loyer",
    title: "Vérification de l’encadrement des loyers",
    subtitle: "Vérification de l’encadrement des loyers",
    summary:
      "Un concept de service pour aider les locataires à comprendre les plafonds applicables à leur loyer.",
    category: "Développement web",
    tags: ["Données publiques", "Concept"],
    status: "Concept de service",
    visual: "rent",
    context:
      "Projet de MVP destiné aux locataires français concernés par l’encadrement des loyers.",
    role: "Conception d’un parcours simple de vérification et de restitution pédagogique.",
    solution:
      "Un concept associant formulaire guidé, données publiques et explication du plafond de loyer applicable. Il s’agit d’une intention de produit, pas d’un service juridique disponible.",
    tools: [],
  },
  {
    slug: "site-personnel",
    title: "Création de yassinefawzi.fr",
    subtitle: "Création de yassinefawzi.fr",
    summary:
      "Un site personnel pour présenter mes missions, publier mon CV et travailler le référencement naturel.",
    category: "Développement web",
    tags: ["Next.js", "SEO", "Expérimentation"],
    status: "En ligne",
    visual: "site",
    context:
      "Créer une présence professionnelle et un espace pour expérimenter le marketing digital.",
    role: "Définition des contenus et du parcours de navigation, avec un développement assisté par IA.",
    solution:
      "Un site publié sur yassinefawzi.fr, avec un portfolio filtrable, un CV téléchargeable, un journal et un formulaire de contact. Le site est hébergé sur Netlify ; le domaine est enregistré chez OVH et les DNS sont gérés chez Cloudflare.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Netlify",
      "Cloudflare",
    ],
  },
];
