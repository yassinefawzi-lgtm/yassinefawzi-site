export const site = {
  name: "Yassine Fawzi",
  role: "Growth Marketing · Automatisation · IA",
  description:
    "Du besoin métier à la solution concrète : acquisition, automatisation et outils digitaux. Découvrez le parcours et les projets de Yassine Fawzi.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yassinefawzi.fr",
  location: "Projet de retour en Normandie · Caen — Rouen",
  availability: "À l’écoute d’opportunités et de projets",
  email: "yassinefawzi@hotmail.fr",
  phone: "06 27 35 38 84",
  phoneHref: "+33627353884",
  linkedin: "https://www.linkedin.com/in/yassine-fawzi/",
  photo: "/images/yassine-fawzi.png",
  photoAlt: "Portrait de Yassine Fawzi",
  cvPdf: "/cv/yassine-fawzi.pdf",
  indexable:
    process.env.NEXT_PUBLIC_INDEXABLE === "true" &&
    (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production"),
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
};

export const navigation = [
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/journal", label: "Journal" },
  { href: "/growth-lab", label: "Growth Lab" },
];

export const profile = {
  experiences: [
    {
      title: "Consultant marketing digital",
      organization: "Freelance · Entrepreneurs, avocats et petites entreprises",
      period: "Depuis 2023",
      description:
        "Campagnes Google Ads et Instagram, visibilité en ligne et prospection. Conception d’outils métiers et d’automatisations sur mesure, dont la génération d’offres de reprise et l’organisation d’une activité de wedding planner.",
    },
    {
      title: "Growth Hacker en alternance",
      organization: "GR.APP&CO · Saint-Étienne",
      period: "2022 — 2023",
      description:
        "Constitution et enrichissement d’une base de 10 000 contacts professionnels par scraping. Campagnes Google Ads et Meta Ads, prospection LinkedIn et email auprès de CSE en France, rédaction et mise en page de 7 articles SEO.",
    },
    {
      title: "Missions en intérim et périscolaire",
      organization: "Différentes missions",
      period: "2020 — 2022",
      description:
        "Une période de missions en intérim et dans le périscolaire, avant la reconversion vers le marketing digital.",
    },
    {
      title: "Chargé d’études",
      organization: "Fiber Academy · Colombelles",
      period: "2018 — 2020",
      description:
        "Analyse des besoins d’ENEDIS, études de faisabilité et présentation aux décideurs. Gestion de projet, recrutement et formation d’alternants.",
    },
  ],
  education: {
    title:
      "Responsable marketing et commercial spécialisé en acquisition numérique",
    details:
      "Rocket School Lyon · 2022 — 2024. Parcours en marketing digital et Growth Hacking, bootcamp et alternance.",
  },
  previousEducation: {
    title: "DUT Mesures physiques",
    details: "Campus 2, Caen · 2013 — 2015.",
  },
  interests: ["Triathlon", "Badminton", "Taekwondo"],
};

export const capabilities = [
  {
    number: "01",
    title: "Trouver les bons leviers.",
    label: "Acquisition & Growth",
    text: "Relier un objectif commercial à une campagne, une audience et une mesure utile.",
    example:
      "Accompagnement Google Ads d’un cabinet d’avocat au lancement de son activité.",
    href: "/projets/acquisition-cabinet-avocat",
    tools: ["Google Ads", "Génération de leads", "Ciblage géographique"],
  },
  {
    number: "02",
    title: "Enlever les frictions.",
    label: "Automatisation & métiers",
    text: "Comprendre les tâches répétitives et construire un fonctionnement plus simple.",
    example:
      "Outil de génération d’offres de reprise et organisation de l’activité d’une wedding planner.",
    href: "/projets/offres-de-reprise",
    tools: [
      "Workflows",
      "Structuration des données",
      "Génération documentaire",
    ],
  },
  {
    number: "03",
    title: "Construire pour apprendre.",
    label: "IA & produits digitaux",
    text: "Transformer une idée en prototype, identifier les limites, puis améliorer ce qui compte.",
    example:
      "Projet personnel de centralisation d’offres d’emploi et concept de vérification des loyers.",
    href: "/projets/veille-emploi",
    tools: ["Prototypage", "Intégrations API", "Expérimentation"],
  },
];

export const skillGroups = [
  {
    title: "Growth & acquisition",
    items: [
      "Growth Marketing",
      "Prospection B2B",
      "Lead generation",
      "Cold emailing",
      "Google Ads",
      "Meta Ads",
      "Optimisation des conversions",
    ],
  },
  {
    title: "SEO & contenu",
    items: [
      "Référencement naturel (SEO)",
      "Rédaction d’articles SEO",
      "Copywriting",
      "Landing pages",
      "WordPress",
      "Webflow",
    ],
  },
  {
    title: "Automatisation & données",
    items: [
      "Make",
      "Zapier",
      "Google Sheets",
      "Scraping",
      "Enrichissement de données",
      "Workflows",
    ],
  },
  {
    title: "Prospection & ciblage",
    items: [
      "LinkedIn Sales Navigator",
      "Lemlist",
      "Waalaxy",
      "LaGrowthMachine",
      "PhantomBuster",
      "Dropcontact",
      "Lusha",
      "Octoparse",
    ],
  },
  {
    title: "IA & produits digitaux",
    items: [
      "Modèles d’IA",
      "IA générative",
      "Analyse des besoins clients",
      "Conception d’outils métiers",
      "Gestion de projet",
    ],
  },
];
