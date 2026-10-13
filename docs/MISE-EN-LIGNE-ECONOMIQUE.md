# Mise en ligne à coût minimal

Recommandation au 13 octobre 2026 : **Netlify Free** pour démarrer le site Next.js actuel sans abonnement d’hébergement. L’offre inclut le domaine personnalisé et le HTTPS. Elle repose sur 300 crédits mensuels ; les projets peuvent être suspendus lorsque le quota est atteint. Ce n’est pas un hébergement illimité. Le domaine déjà acheté reste à renouveler auprès du fournisseur actuel.

Netlify annonce la possibilité d’héberger des projets commerciaux sur Free. Vercel Hobby est réservé à l’usage personnel non commercial : pour un site visant aussi les missions freelance, ne pas considérer automatiquement Hobby comme admissible. Les comptes Vercel/GitHub installés n’obligent pas à souscrire un abonnement.

## Étape 1 — Compte et domaine

Créer ou ouvrir un compte Netlify et choisir **Free**. Ne pas acheter de domaine supplémentaire. Noter le fournisseur actuel et l’orthographe exacte du domaine (Fawzi/Fauzi à confirmer). Ne modifier aucun DNS à ce stade.

## Étape 2 — Dépôt GitHub

Créer un dépôt dédié sous le compte voulu, idéalement privé durant la préparation. Mettre le contenu du dossier `yassinefawzi-site` à la racine du dépôt. Ne pas envoyer `.next`, `node_modules`, `.env.local` ni de fichiers secrets. Les portraits, le CV et les coordonnées du site feront partie des contenus publiés : vérifier que cette version est bien celle souhaitée pour le public.

Le projet n’a pas encore été envoyé à un dépôt GitHub distant. Le connecter en lecture/écriture n’a pas créé de dépôt à lui seul.

## Étape 3 — Premier déploiement

Dans Netlify, importer un projet existant depuis GitHub, choisir uniquement le dépôt du site et suivre la détection Next.js. Le fichier `netlify.toml` prépare :

- Node.js 24 ; pnpm 11.25 via `packageManager` ;
- commande de build `pnpm build` ;
- dossier de publication `.next` ;
- paramètre pnpm de hoisting demandé par Netlify ;
- noindex des previews et branches de travail.

Ne pas utiliser un simple glisser-déposer de fichiers : cette version Next.js possède un formulaire serveur et demande une compilation.

Définir `NEXT_PUBLIC_SITE_URL=https://DOMAINE-CONFIRME` et `NEXT_PUBLIC_INDEXABLE=false`. Laisser GTM vide. Attendre que le build se termine et ouvrir l’aperçu. Tester les pages, les images, le CV et les liens. La compatibilité est documentée par Netlify, mais le premier déploiement de ce projet sur leur infrastructure reste à vérifier réellement.

## Étape 4 — Contact sans abonnement supplémentaire au lancement

L’email et le lien LinkedIn du CV sont déjà fonctionnels comme liens directs. Ils permettent de démarrer sans acheter de service de formulaire. Le formulaire affiche son état inactif tant que ses paramètres ne sont pas configurés.

Si le formulaire est souhaité dès le lancement, configurer Resend et Turnstile selon `DEPLOIEMENT.md`, en vérifiant leurs offres et quotas à ce moment-là. Ne pas saisir des valeurs factices simplement pour activer le bouton.

## Étape 5 — Relier le domaine

Dans les paramètres de domaine du projet Netlify, choisir l’ajout d’un domaine existant. Ajouter l’adresse exacte et sa variante www. Recopier chez le fournisseur de domaine les enregistrements DNS indiqués pour CE projet. Le détail dépend du fournisseur : attendre ses instructions précises plutôt que modifier les nameservers à l’aveugle.

Préserver MX/SPF/DKIM/DMARC s’il existe une messagerie. Garder le domaine chez le fournisseur actuel évite un transfert inutile. Vérifier la validation DNS, le certificat HTTPS et la redirection vers l’adresse canonique.

## Étape 6 — Ouvrir à l’indexation

Compléter les mentions légales et la confidentialité selon l’hébergement réel. Vérifier les contenus et le contact. Passer NEXT_PUBLIC_INDEXABLE à true en production, redéployer puis vérifier robots, sitemap, canonical et absence de noindex sur les pages publiques.

Configurer ensuite Search Console par vérification DNS et soumettre le sitemap. La mesure Google Analytics/Ads est facultative et peut attendre.

## Garder les coûts bas

Surveiller les crédits de build, trafic, fonctions et bande passante dans Netlify. Faire les ajustements localement et regrouper les publications. Le quota est partagé à l’échelle du compte selon le plan. Une hausse de trafic peut nécessiter une adaptation ou une offre payante, à décider avant d’activer des recharges ou options payantes.

## Sources vérifiées

- Tarifs et quota : https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/
- Usage commercial : https://www.netlify.com/blog/introducing-netlify-free-plan/
- Next.js : https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- Configuration pnpm : https://docs.netlify.com/snippets/frameworks/nextjs-pnpm-support/
- Restriction Vercel Hobby : https://vercel.com/docs/plans/hobby
