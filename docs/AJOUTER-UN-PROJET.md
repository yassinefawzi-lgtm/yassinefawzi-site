# Ajouter une étude de cas

1. Ouvrir `src/content/projects.ts`.
2. Ajouter un objet conforme au type `Project` avec un slug unique sans accent.
3. Choisir une catégorie existante ou adapter simultanément le type et les filtres.
4. Renseigner le contexte, le rôle et la solution avec les faits connus. Laisser les outils vides lorsque la stack est inconnue : la rubrique sera masquée.
5. Conserver les questions dans les notes de travail, jamais dans le contenu public. Le champ `status` distingue mission, projet personnel et concept.
6. Pour une vraie capture autorisée, déposer un WebP/AVIF dans `public/images/projets/`, puis renseigner `image` et `imageAlt`. Ne jamais exposer de dossier ou de données personnelles de client.
7. Utiliser `featured: true` pour la sélection de l’accueil. Viser trois ou quatre projets et vérifier le rythme de la grille.
8. Lancer `pnpm typecheck`, `pnpm build`, puis ouvrir `/projets/votre-slug`.

La route, les métadonnées, le projet suivant et l’entrée dans le sitemap sont générés à partir de ces données. Le sitemap n’expose rien pendant la prépublication.

Les illustrations existantes sont des compositions CSS réutilisables, pas des représentations certifiées des outils livrés. Pour vidéo ou schéma externe : préférer un lien explicite ou un chargement au clic ; préserver le consentement pour les lecteurs tiers.
