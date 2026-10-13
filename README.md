# Yassine Fawzi — Portfolio & Growth Lab

Site personnel multipage en français : présentation, parcours, sept études de cas, compétences, CV imprimable, journal MDX, laboratoire marketing et contact.

## Démarrer

Prérequis : Node.js 22 ou 24 et pnpm 11 (le projet a été construit avec Node 24 et pnpm 11.25).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Ouvrir http://localhost:3000. Copier `.env.example` vers `.env.local` seulement pour configurer les intégrations. Le site fonctionne sans secret ; le formulaire indique alors honnêtement qu’il est inactif et aucun tag analytique n’est chargé.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
# Dans un autre terminal, après pnpm start :
pnpm test:e2e
pnpm check:publication
```

Les tests navigateur utilisent Edge par défaut sur cet environnement Windows. Sur un autre environnement, installer Chromium via `pnpm exec playwright install chromium`, puis définir `PLAYWRIGHT_CHANNEL=chromium`. Les tests démarrent sur `BASE_URL` ou http://localhost:3000 ; ils ne démarrent pas de serveur eux-mêmes.

## Architecture

```text
src/
  app/                 Pages App Router, SEO et API de contact
    projets/[slug]/    Études de cas générées statiquement
    journal/[slug]/    Articles MDX publiés seulement
    api/contact/       Validation, antispam et envoi serveur
  components/          Navigation, visuels, consentement, formulaire
  content/             Identité, parcours, projets et expériences
  lib/                 SEO, lecture des articles, tracking, validation
content/articles/      Articles MDX indépendants des composants
public/                Photos, CV et captures à fournir
docs/                  Guides d’exploitation et décisions
tests/                 Tests unitaires/API et navigateur
scripts/               Contrôle de préparation à la publication
```

## Décisions de conception

- **Next.js 16.4 / React 19.3 / TypeScript strict / Tailwind 4** : rendu statique pour les contenus et route serveur pour le formulaire. Versions exactes et lockfile conservés.
- **Manrope et DM Sans auto-hébergées** via Fontsource ; serif système pour les accents éditoriaux. Aucun appel à Google Fonts.
- **Aucune base de données** : fichiers typés pour le portfolio et MDX pour les articles. Les soumissions sont transmises par email, sans stockage applicatif.
- **Pas de résultats fictifs** : les projets indiquent leurs limites, les prototypes ne sont pas présentés comme des produits livrés, le journal n’inclut aucun faux article publié.
- **Peu d’effets** : transitions CSS, respect du mouvement réduit, pas de bibliothèque Motion inutile.
- **Pas de mode sombre global pour cette première version** : une direction éditoriale claire avec des sections sombres, moins de variantes à maintenir.
- **Prépublication** : indexation désactivée par défaut. Ce n’est pas un contrôle d’accès : protéger les previews dans Vercel lorsqu’une confidentialité est nécessaire.

## État des services

Code développé et configuration préparée. Aucune adresse email, clé, compte externe, DNS, propriété Search Console ou campagne publicitaire n’a été inventé ni configuré implicitement.

Le formulaire devient actif uniquement si les six paramètres de service sont présents. La livraison réelle en boîte de réception doit ensuite être testée. Les tests de l’API utilisent des fournisseurs simulés et n’envoient aucun email réel.

## Documentation

- [Contenu et informations manquantes](docs/CONTENU.md)
- [Design et composants](docs/COMPOSANTS.md)
- [Ajouter une étude de cas](docs/AJOUTER-UN-PROJET.md)
- [Publier un article](docs/PUBLIER-UN-ARTICLE.md)
- [SEO et plan éditorial](docs/SEO.md)
- [Tracking, GA4 et Google Ads](docs/MESURE.md)
- [Protocoles d’expérimentation](docs/EXPERIMENTATIONS.md)
- [Déploiement, domaine et formulaire](docs/DEPLOIEMENT.md)
- [Mise en ligne à coût minimal avec Netlify](docs/MISE-EN-LIGNE-ECONOMIQUE.md)
- [Vérifications](docs/VERIFICATION.md)
- [Améliorations futures](docs/EVOLUTIONS.md)

## Publication

Ne pas activer `NEXT_PUBLIC_INDEXABLE=true` avant la validation des coordonnées, mentions légales, contenu et fonctionnement du contact. `pnpm check:publication` signale plusieurs champs manquants, mais ne remplace pas cette revue. Voir le guide de déploiement pour les étapes exactes.

## Dépendances de contrôle

TypeScript 6.0 et ESLint 9 ont été retenus pour compatibilité avec la chaîne `eslint-config-next` et ses plugins. ESLint 9 est signalé en fin de support par son éditeur ; prévoir la migration lorsque les plugins requis annoncent leur compatibilité avec ESLint 10. Les versions 7 de TypeScript et 10 d’ESLint ont provoqué des incompatibilités réelles pendant la validation.
