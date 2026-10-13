export const experimentConfig = {
  enabled: false,
  id: "hero-message-v1",
  // Choix manuel pour prévisualisation, pas de répartition aléatoire ni de stockage visiteur.
  variant: "control" as "control" | "alternative",
  variants: {
    control: "De l’idée à la solution. Puis à l’amélioration.",
    alternative: "Comprendre. Construire. Faire progresser.",
  },
};
export const experiments = [
  {
    id: "01",
    title: "Une accroche, deux angles.",
    topic: "Conversion",
    hypothesis:
      "Une accroche centrée sur le besoin métier pourrait susciter davantage de prises de contact.",
    metric: "Demandes reçues / visiteurs consentants exposés",
    status: "Protocole à préparer",
  },
  {
    id: "02",
    title: "Des projets plus faciles à explorer.",
    topic: "Expérience",
    hypothesis:
      "Une catégorisation plus lisible pourrait faciliter l’accès à une étude de cas pertinente.",
    metric: "Ouvertures d’études de cas / visites du portfolio",
    status: "Protocole à préparer",
  },
  {
    id: "03",
    title: "La vitesse, mesurée dans la durée.",
    topic: "Performance",
    hypothesis:
      "La réduction du poids des visuels pourrait améliorer le chargement sur mobile.",
    metric: "LCP, INP et CLS en conditions documentées",
    status: "Mesure initiale à réaliser",
  },
];
