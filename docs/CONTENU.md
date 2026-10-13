# Mettre à jour les contenus

## Identité et coordonnées

Modifier `src/content/site.ts` : nom, rôle, description, localisation, disponibilité, email, LinkedIn, photo et CV. Les champs vides ne produisent pas de liens fictifs. Conserver l’email vide tant que l’adresse réelle n’est pas connue.

Ajouter la photo dans `public/images/portrait.webp` puis définir `photo: '/images/portrait.webp'`. Renseigner un texte alternatif pertinent. Le site utilise `next/image` avec dimensions réservées par le conteneur pour éviter les sauts de mise en page. La photo n’est pas générée à partir d’une identité supposée.

Ajouter le CV réel dans `public/cv/yassine-fawzi.pdf` puis définir `cvPdf: '/cv/yassine-fawzi.pdf'`. La page `/cv` est déjà imprimable via le navigateur. Son impression est une version web de travail, pas le PDF original de Yassine.

## À confirmer avant publication

1. Domaine acheté : le dernier brief indique **yassinefawzi.fr**, la première conversation utilisait une autre orthographe.
2. Email, LinkedIn, photo et CV original : intégrés depuis le PDF fourni. Le téléphone apparaît dans la page CV et le PDF original ; il ne s’agit pas d’un document anonymisé.
3. Dates intégrées : freelance depuis 2023, GR.APP&CO 2022–2023, Fiber Academy 2018–2020, missions intérim/périscolaire 2020–2022, Rocket School Lyon 2022–2024, DUT à Caen 2013–2015. Titre confirmé : Responsable marketing et commercial spécialisé en acquisition numérique. Aucun niveau Bac+2/Bac+3 n’est déduit.
4. Outils effectivement pratiqués, niveau d’autonomie et exemples.
5. Stack, périmètre livré et difficultés propres à chaque projet.
6. Autorisation des captures et présentation des missions clients.
7. Budgets Google Ads : montants approximatifs et périodes à confirmer ; aucun ROAS/CPL/volume de conversions déduit.
8. Statut actuel de la collaboration Google Ads.
9. Fonctions réellement développées du projet emploi ; usage réel d’IA.
10. État du MVP loyers et éventuelle validation réglementaire avant toute mise à disposition du service.
11. Mentions légales, statut professionnel, coordonnées du responsable et politique de conservation.

L’âge n’est pas affiché : cette donnée vieillit sans ajouter d’information utile au positionnement.

## Précision éditoriale

Ne pas convertir un objectif en résultat. Une illustration conceptuelle n’est pas une capture. Ne pas faire disparaître les réserves pour rendre une fiche plus persuasive. Les résultats doivent être accompagnés de leur période, de leur source et de leurs limites.

Les compétences affichées sont désormais centrées sur celles du CV fourni. Les technologies de ce nouveau site sont séparées des expériences professionnelles antérieures. Les nombres de 10 000 contacts et 7 articles SEO proviennent du CV ; ils ne sont pas des résultats commerciaux extrapolés.
