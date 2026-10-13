# SEO et contenu

## Ce qui est implémenté

Rendu serveur/statique, titre et description par page, URL canonique, Open Graph, Twitter Card, image sociale générée, favicon, sitemap automatique, robots.txt, fil d’Ariane, WebSite, ProfilePage/Person et BlogPosting pour les articles publiés. Redirections 308 de `/portfolio` vers `/projets` et `/lab` vers `/growth-lab`. Page 404 personnalisée.

`NEXT_PUBLIC_INDEXABLE=false` par défaut. Les previews Vercel restent noindex même si cette variable a été mal copiée depuis la production. `/experiences`, les mentions légales et la confidentialité restent noindex. Les robots peuvent lire les pages pour détecter noindex ; ne pas interdire tout le crawl en croyant que cela garantit la désindexation.

L’image sociale est locale ; les typographies sont auto-hébergées. Les images ajoutées passent par Next Image. Les illustrations CSS n’impliquent pas de téléchargement raster.

## Avant indexation

Confirmer le domaine, le contenu, le contact et les informations légales ; définir `NEXT_PUBLIC_SITE_URL` puis `NEXT_PUBLIC_INDEXABLE=true` uniquement en production ; redéployer. Vérifier le canonical, l’absence de noindex sur les pages voulues, `/sitemap.xml` et `/robots.txt`. Les pages de campagne ne doivent pas être ajoutées automatiquement au sitemap.

Créer une propriété de domaine Google Search Console, copier l’enregistrement TXT fourni dans la zone DNS du registrar, valider, puis soumettre `https://yassinefawzi.fr/sitemap.xml`. Inspecter quelques URL. Les accès et la validation doivent être réalisés avec le compte du propriétaire.

## Intentions de recherche

L’accueil situe le profil ; `/competences` explique les interventions ; les études de cas prouvent une démarche. Le journal pourra développer des sujets spécifiques : automatisation, Google Ads, acquisition B2B et IA appliquée. La Normandie figure naturellement dans le parcours et le contact. Aucune série de pages locales artificielles n’est créée.

## Plan éditorial initial — sujets, pas articles publiés

1. Passer d’une tâche répétitive à un premier workflow : les questions à poser.
2. Génération documentaire : séparer données, modèle et validation métier.
3. Google Ads pour un cabinet qui démarre : cadrer les objectifs avant le budget.
4. Adapter une campagne à la capacité d’accueil d’une petite structure.
5. Définir une conversion utile sur un site personnel.
6. Pourquoi un clic sur un bouton n’est pas une demande reçue.
7. Auditer le SEO technique d’un portfolio multipage.
8. Ce que les Core Web Vitals racontent — et ce qu’ils ne racontent pas.
9. Structurer un tableau de suivi avant d’automatiser les relances.
10. Centraliser des offres d’emploi : sources, doublons et limites de couverture.
11. Évaluer la pertinence d’un scoring sans se contenter d’une démonstration.
12. Quand une IA aide un workflow métier, et quand une règle simple suffit.
13. Concevoir un premier test de CTA avec peu de trafic.
14. Documenter une expérimentation non concluante.
15. Construire ce portfolio : décisions, compromis et améliorations mesurées.

## Références

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- https://search.google.com/search-console/about

Les scores Lighthouse 95+ sont des objectifs, pas une garantie de classement ni une preuve de Core Web Vitals réels. Les données terrain demandent un déploiement et un volume suffisant.
