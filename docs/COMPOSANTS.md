# Design et composants

## Système visuel

Palette : ivoire `#f5f4ee`, texte `#232d28`, vert `#214c3d`, texte secondaire `#60685f`, séparation `#d4d8ce`. Tokens dans `src/app/globals.css`, avec exposition de quelques couleurs dans `@theme` Tailwind.

Titres : Manrope Variable. Corps : DM Sans Variable. Accents : Georgia italique. Espacements principaux : 20, 28, 40, 60, 75 et 110 px ; conteneur maximal 1240 px. Rayons discrets de 3 à 5 px, bordures fines, peu d’ombres. Aucun pourcentage de compétence ni métrique décorative.

## Composants

| Composant | Responsabilité |
| --- | --- |
| Header | Navigation active, menu mobile, fermeture Escape |
| Footer | Liens utiles, confidentialité et accès aux préférences |
| PageIntro / Eyebrow | Hiérarchie commune des pages |
| Breadcrumb / JsonLd | Fil d’Ariane visible et structuré |
| ProjectArt | Illustrations CSS de principe ou image fournie |
| ProjectCard / ProjectGallery | Cartes, filtre, résultat annoncé aux aides techniques |
| ContactForm | Validation locale, états d’envoi, Turnstile explicite |
| ConsentManager | Choix séparés, chargement GTM conditionnel, retrait |
| TrackedLink / ProjectView | Événements typés et sans coordonnées personnelles |
| PrintButton / CvDownload | Impression et téléchargement lorsque disponible |

## Accessibilité

HTML sémantique, un h1 par page, lien d’évitement, focus visible, boutons natifs, formulaires étiquetés et états annoncés. Le menu mobile est une navigation dépliable non modale ; Tab suit le flux et Escape revient au bouton. Pas de piège de focus.

Le filtre utilise `aria-pressed` et une zone de résultat `role=status`. Les illustrations de principe ont une description globale. Les éléments internes ne portent aucune information unique indispensable.

Les mouvements sont limités à des transitions de survol et neutralisés avec `prefers-reduced-motion`. Les captures ne remplacent pas une vérification clavier et un essai avec lecteur d’écran.

## Maintenance

Les composants interactifs sont clients ; les pages de contenu restent serveur. La galerie embarque des données descriptives : si le portfolio dépasse quelques dizaines de projets, introduire un index léger et une pagination. La configuration complète de projet n’a pas besoin de traverser cette frontière à grande échelle.

Conserver les styles de composants par section clairement identifiée lors des prochaines évolutions ; scinder la feuille en modules si le nombre de variantes augmente.
