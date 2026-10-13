# Vérifications effectuées

## Première version (avant intégration du CV)

Environnement : Windows, Node 24.19, Next 16.4, build de production local, Edge headless. Les scores en production ne sont pas extrapolés depuis ces tests.

- Compilation Next.js : réussie, génération de 24 entrées statiques.
- TypeScript strict : aucune erreur.
- ESLint : aucune erreur après correction de l’avertissement de configuration PostCSS.
- Tests unitaires/API : **17 réussis**, dont validation, taille maximale, origine, honeypot, antispam, erreurs fournisseur, succès simulé et consentement.
- Tests Playwright : **12 réussis**, répartis entre ordinateur et mobile.
- Axe WCAG A/AA : aucune violation détectée sur les six parcours couverts, dans les deux tailles testées, après correction de contrastes.
- Parcours vérifiés : accueil, filtres, étude de cas, pages secondaires, 404, brouillon inaccessible, lien d’évitement, menu mobile et formulaire non configuré.
- Aucun tag Google chargé dans la configuration initiale.

## Limites

- Les appels Turnstile/Resend sont simulés dans les tests serveur : pas d’email envoyé ni de validation réelle de la livraison.
- Le conteneur GTM réel et ses règles de consentement ne sont pas configurés ni testés.
- Lighthouse n’a pas pu être lancé : le système de vérification des autorisations a atteint sa limite d’utilisation. **Aucun score Lighthouse n’est revendiqué.**
- Pas de données terrain Core Web Vitals, aucun audit humain complet avec lecteur d’écran.
- Aucun DNS, hébergement distant, dépôt GitHub distant ou service email n’a été configuré.

## Intégration du CV

Source : PDF original communiqué par Yassine. Lecture visuelle et extraction de texte/liens. Le PDF téléchargeable est copié sans modification ; le portrait est extrait de l’image intégrée au document.

Informations mises à jour : email, téléphone sur la page CV, LinkedIn, dates, Fiber Academy, formation Rocket School, DUT, compétences et précision des campagnes Instagram. Le titre « Responsable marketing et commercial spécialisé en acquisition numérique » est confirmé directement par Yassine. Aucun niveau académique supplémentaire n’est déduit.

Les résultats de vérification de cette mise à jour sont consignés lors de la validation finale ; ils ne sont pas supposés identiques à ceux de la première version.

Validation après intégration du CV : compilation de production réussie ; TypeScript et ESLint sans erreur ; **14 tests navigateur réussis** sur ordinateur et mobile, y compris présence du titre confirmé, réponse PDF valide et chargement du portrait. Aucune violation Axe détectée sur les six parcours testés. Le fichier PDF copié a la même empreinte SHA-256 que l’original.
