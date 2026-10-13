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
  problem: string;
  role: string;
  objectives: string[];
  approach: string[];
  solution: string;
  tools: string[];
  results: string;
  lessons: string;
  pending: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};
export const projects: Project[] = [
  {
    slug: "offres-de-reprise",
    title: "Moins de saisie. Plus de temps pour le dossier.",
    subtitle: "Génération d’offres de reprise",
    summary:
      "Un outil de génération documentaire conçu autour des besoins d’un avocat en restructuring.",
    category: "Automatisation",
    tags: ["Outil métier", "Génération documentaire"],
    status: "Mission · résultats à documenter",
    visual: "document",
    featured: true,
    context:
      "Un avocat spécialisé en restructuring prépare des offres de reprise dans le cadre de ses dossiers professionnels.",
    problem:
      "La production de documents structurés comporte des tâches manuelles et répétitives. L’enjeu est de faciliter cette préparation sans perdre les particularités de chaque dossier.",
    role: "Analyse du besoin et conception d’un outil de génération de documents ou de propositions structurées.",
    objectives: [
      "Structurer les informations nécessaires à une offre.",
      "Réduire les opérations répétitives.",
      "Adapter la solution aux contraintes du métier.",
    ],
    approach: [
      "Partir du document attendu et des informations nécessaires à sa préparation.",
      "Organiser la logique de génération autour de ces informations.",
      "Conserver la validation du contenu dans le processus professionnel.",
    ],
    solution:
      "Un outil capable de produire des documents ou propositions structurés. Les écrans et les détails de mise en œuvre restent à documenter ; aucun dossier client n’est exposé ici.",
    tools: ["Stack technique à confirmer"],
    results:
      "Le gain de productivité est l’objectif recherché. Aucun gain de temps ni résultat chiffré n’est annoncé sans mesure vérifiée.",
    lessons:
      "Retour d’expérience à compléter : difficultés rencontrées, gestion des variantes de documents et méthode de validation.",
    pending: [
      "Stack et périmètre livré",
      "Captures anonymisées autorisées",
      "Mesure du temps avant/après",
      "Difficultés et enseignements vérifiés",
    ],
  },
  {
    slug: "organisation-wedding-planner",
    title: "Un événement. Une vue d’ensemble.",
    subtitle: "Organisation d’une wedding planner",
    summary:
      "Centraliser les informations, organiser les événements et simplifier le suivi des tâches.",
    category: "Automatisation",
    tags: ["Organisation", "Workflows"],
    status: "Logiciel métier · résultats à documenter",
    visual: "planner",
    featured: true,
    context:
      "Une wedding planner doit coordonner des informations, des échéances et des tâches liées à son activité.",
    problem:
      "Le suivi des événements demande une vision cohérente et des relances organisées.",
    role: "Conception d’un outil d’organisation et de suivi de l’activité.",
    objectives: [
      "Centraliser les informations.",
      "Organiser les événements et les tâches.",
      "Faciliter les relances.",
    ],
    approach: [
      "Comprendre les besoins métiers.",
      "Structurer une expérience de suivi lisible.",
      "Relier organisation des tâches et relances automatisées.",
    ],
    solution:
      "Un logiciel métier pour organiser l’activité et automatiser les relances auprès des invités et des prestataires. Les fonctionnalités connues couvrent aussi la centralisation des informations et le suivi des tâches. La stack et le détail des écrans restent à documenter.",
    tools: ["Stack technique à confirmer"],
    results:
      "La simplification des workflows est l’objectif du projet. Les effets mesurés et retours utilisateurs restent à documenter.",
    lessons:
      "À compléter avec les retours d’usage : adoption, contraintes d’organisation et ajustements effectués.",
    pending: [
      "Détail du périmètre et des écrans",
      "Stack",
      "Retours utilisateurs",
      "Captures autorisées",
    ],
  },
  {
    slug: "acquisition-cabinet-avocat",
    title: "Une acquisition à la mesure du cabinet.",
    subtitle: "Google Ads pour un cabinet d’avocat",
    summary:
      "Accompagner le lancement d’un cabinet avec des campagnes locales et un budget ajusté à sa capacité d’accueil.",
    category: "Growth & Acquisition",
    tags: ["Google Ads", "Acquisition locale"],
    status: "Mission · données à confirmer",
    visual: "ads",
    featured: true,
    context:
      "Un avocat pénaliste lance son cabinet et souhaite développer sa visibilité locale et les demandes de rendez-vous.",
    problem:
      "Mettre en place une acquisition adaptée au démarrage, puis faire évoluer les dépenses selon la capacité d’accueil du cabinet.",
    role: "Accompagnement à la prise en main de Google Ads, configuration des campagnes, recherche de mots-clés, ciblage géographique et suivi.",
    objectives: [
      "Développer la visibilité locale.",
      "Favoriser les demandes de rendez-vous.",
      "Adapter les dépenses au fonctionnement du cabinet.",
    ],
    approach: [
      "Sélection de mots-clés et du périmètre géographique.",
      "Lancement avec un budget limité.",
      "Ajustements et évolution progressive des dépenses.",
    ],
    solution:
      "Un accompagnement des campagnes dans le temps. Les souvenirs disponibles évoquent un budget initial d’environ 50 à 60 €, puis 400 à 500 € selon les périodes. Ces montants et leur périodicité sont à confirmer ; ils ne constituent pas des résultats de performance.",
    tools: ["Google Ads"],
    results:
      "Aucun CPL, ROAS, volume de conversions ou chiffre d’affaires vérifié n’est disponible. La collaboration était décrite comme active lors des dernières informations fournies ; son statut actuel reste à confirmer.",
    lessons:
      "L’ajustement des dépenses à la capacité d’accueil constitue un axe documenté de l’accompagnement. Les apprentissages détaillés restent à compléter.",
    pending: [
      "Dates et statut actuel",
      "Budgets et périodes exactes",
      "Données de conversion vérifiées",
      "Difficultés rencontrées",
    ],
  },
  {
    slug: "campagnes-restaurants-reflexologie",
    title: "Des campagnes, des contextes différents.",
    subtitle: "Restaurants & école de réflexologie",
    summary:
      "Des campagnes publicitaires sur Instagram pour des restaurants et une école de réflexologie.",
    category: "Marketing digital",
    tags: ["Instagram", "Campagnes"],
    status: "Expériences · détails à compléter",
    visual: "campaign",
    context:
      "Des interventions publicitaires ont été réalisées pour des restaurants et une école de réflexologie.",
    problem: "Les objectifs spécifiques à chaque structure restent à préciser.",
    role: "Configuration, diffusion et optimisation de campagnes.",
    objectives: ["Documenter chaque contexte et son objectif réel."],
    approach: [
      "Les étapes propres à chaque mission seront détaillées à partir des éléments disponibles.",
    ],
    solution:
      "Cette fiche regroupe temporairement les expériences connues. Des études de cas distinctes seront publiées lorsque leur contexte et leurs interventions seront suffisamment documentés.",
    tools: ["Instagram / Meta Ads"],
    results:
      "Aucun budget, audience, création ou résultat n’est publié sans confirmation.",
    lessons: "À compléter pour chaque mission.",
    pending: ["Objectifs", "Interventions détaillées", "Résultats vérifiés"],
  },
  {
    slug: "veille-emploi",
    title: "Faire le tri. Trouver ce qui compte.",
    subtitle: "Un outil de veille d’offres d’emploi",
    summary:
      "Un projet personnel pour centraliser les annonces et explorer leur pertinence selon un profil.",
    category: "Intelligence artificielle",
    tags: ["Données", "Projet personnel"],
    status: "Projet personnel · avancement à confirmer",
    visual: "jobs",
    context:
      "Projet personnel de centralisation et d’analyse des offres d’emploi.",
    problem:
      "Les annonces peuvent être dispersées, dupliquées et difficiles à comparer selon ses propres critères.",
    role: "Conception d’un outil orienté produit, automatisation et traitement de données.",
    objectives: [
      "Regrouper plusieurs sources d’offres.",
      "Limiter les doublons.",
      "Faciliter une lecture par pertinence.",
    ],
    approach: [
      "Définir les critères utiles à la recherche.",
      "Étudier les sources accessibles, dont France Travail.",
      "Prévoir un processus de collecte, dédoublonnage et filtrage.",
    ],
    solution:
      "Le périmètre envisagé ou travaillé comprend agrégation multisource, France Travail, dédoublonnage, filtres, scoring, historique, export Google Sheets et rafraîchissement. Aucun de ces éléments n’est présenté comme livré tant que son état n’a pas été confirmé. L’usage effectif d’IA reste également à préciser.",
    tools: [
      "France Travail et Google Sheets : intégrations envisagées ou travaillées",
    ],
    results: "Aucune démonstration ni mesure de fiabilité vérifiée à ce stade.",
    lessons:
      "À documenter : couverture des sources, pertinence du scoring, qualité des données et conditions d’accès aux annonces.",
    pending: [
      "Fonctionnalités effectivement développées",
      "Stack et usage réel d’IA",
      "Démonstration",
      "Évaluation de pertinence",
    ],
  },
  {
    slug: "verification-loyer",
    title: "Rendre une règle plus lisible.",
    subtitle: "Vérification de l’encadrement des loyers",
    summary:
      "Un concept de service pour aider les locataires à comprendre les plafonds applicables à leur loyer.",
    category: "Développement web",
    tags: ["Données publiques", "Concept"],
    status: "Concept · statut du MVP à confirmer",
    visual: "rent",
    context:
      "Projet de MVP destiné aux locataires français concernés par l’encadrement des loyers.",
    problem:
      "Comprendre les données et critères applicables à un logement peut demander plusieurs recherches.",
    role: "Conception d’un parcours simple de vérification et de restitution pédagogique.",
    objectives: [
      "Simplifier la saisie des informations.",
      "Exploiter des données publiques adaptées.",
      "Expliquer le résultat et ses limites.",
    ],
    approach: [
      "Définir un formulaire guidé.",
      "Identifier les jeux de données nécessaires.",
      "Concevoir une restitution compréhensible.",
    ],
    solution:
      "Le concept associe formulaire, données publiques, calcul et explication d’un éventuel dépassement. Cette page décrit une intention de produit, pas un service juridique disponible.",
    tools: ["Sources et stack à confirmer"],
    results:
      "Aucun calcul fonctionnel, périmètre territorial couvert ou résultat juridique n’est revendiqué sur ce site.",
    lessons:
      "Points à étudier : actualisation des données, cas particuliers et validation du calcul.",
    pending: [
      "Statut du prototype",
      "Territoires et sources",
      "Validation réglementaire",
      "Tests de calcul",
    ],
  },
  {
    slug: "site-personnel",
    title: "Ce site est aussi un terrain d’essai.",
    subtitle: "YassineFawzi.fr · Growth Lab",
    summary:
      "Un portfolio pensé comme un produit évolutif : contenu, expérience, mesure et expérimentation.",
    category: "Développement web",
    tags: ["Next.js", "SEO", "Expérimentation"],
    status: "En construction · première version",
    visual: "site",
    context:
      "Créer une présence professionnelle et un espace pour expérimenter le marketing digital.",
    problem:
      "Réunir présentation, études de cas et apprentissage sans inventer de preuves ni surcharger l’expérience.",
    role: "Définition du besoin et du positionnement. Développement de cette version assisté par IA, à distinguer des compétences professionnelles déjà pratiquées.",
    objectives: [
      "Présenter le profil clairement.",
      "Documenter des projets réels.",
      "Préparer une mesure respectueuse du consentement.",
    ],
    approach: [
      "Contenus structurés séparés des composants.",
      "Pages rendues côté serveur et métadonnées dédiées.",
      "Mesure désactivée par défaut et protocoles d’expérimentation documentés.",
    ],
    solution:
      "Un site Next.js avec portfolio filtrable, journal MDX, CV imprimable, Growth Lab et formulaire doté de validations serveur. Les services externes nécessitent encore leur configuration.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    results:
      "Les scores de performance et les résultats d’acquisition devront être relevés sur la version effectivement déployée. Aucun résultat commercial n’est revendiqué.",
    lessons:
      "La première contrainte est éditoriale : rendre visibles les informations confirmées et garder les éléments manquants explicites.",
    pending: [
      "Revue éditoriale et informations légales",
      "Configuration de contact",
      "Mesures en production",
      "Première expérimentation",
    ],
  },
];
