# Mener une expérimentation

`src/content/experiments.ts` contient une configuration centrale et les pistes du Growth Lab. `/experiences` est une prévisualisation noindex, exclue du sitemap. Activer `enabled` et choisir `variant` change l’accroche pour tous les visiteurs après redéploiement : ce n’est PAS une randomisation A/B.

## Avant de lancer

1. Décrire le problème observé et la preuve disponible.
2. Écrire une hypothèse falsifiable et ne modifier qu’un facteur principal.
3. Choisir une métrique principale et des garde-fous (erreurs, accessibilité, qualité des demandes).
4. Fixer la population, la durée minimale et le seuil d’effet utile avant de voir les résultats.
5. Estimer le volume nécessaire à partir d’un taux de référence réel. Sans volume suffisant, préférer un test qualitatif ou reconnaître l’incertitude.
6. Prévoir le consentement, les exclusions internes et une version exacte du site.

## Si un vrai A/B est ajouté

Mettre en œuvre une affectation stable, vérifier la répartition des groupes, enregistrer l’exposition avant la conversion, séparer identifiant d’expérience et variante. Décider si le dispositif de stockage et de mesure exige un accord et ne pas contourner ce choix. Aucun identifiant personnel n’est nécessaire.

Ne pas conclure à partir de comparaisons avant/après sans discuter saisonnalité, campagnes et changements d’audience. Ne pas arrêter le test dès qu’un résultat semble favorable. Rapporter échantillons, périodes, intervalles d’incertitude et limites ; une absence de preuve n’est pas une preuve d’absence d’effet.

## Landing pages

Ajouter une route sous `/experiences/...`, métadonnées noindex et exclusion du sitemap. Réutiliser les composants et les événements. Ne pas publier de pages locales proches uniquement pour couvrir des mots-clés. Une landing page de campagne doit avoir un message et une offre réellement spécifiques.

## Archiver les résultats

Un compte rendu doit distinguer hypothèse, méthode, état initial, résultat mesuré, limites, décision et prochaine étape. Ajouter une source vérifiable ou un rapport anonymisé. Le Growth Lab actuel contient des pistes sans chiffres inventés.
