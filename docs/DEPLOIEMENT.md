# Mise en ligne sur Vercel

## 1. Préparer les informations

Confirmer le domaine réellement acheté. Compléter photo, CV, coordonnées et informations légales. Vérifier les autorisations de publication et les études de cas. Aucun domaine n’a été transféré et aucune zone DNS n’a été modifiée par la création du code.

## 2. Versionner

Le dossier est un projet autonome. Créer un dépôt GitHub dédié dans le compte voulu, de préférence privé pendant la préparation. Depuis la racine :

```sh
git init -b main
git add .
git commit -m "Build personal portfolio and growth lab"
git remote add origin URL_DU_DEPOT_CONFIRME
git push -u origin main
```

Si Git est déjà initialisé, ignorer la première étape. Ne jamais committer `.env.local`, `node_modules`, `.next` ni les secrets. Un dépôt local peut être créé sans qu’un dépôt distant existe.

## 3. Créer une preview Vercel

Dans Vercel : Add New → Project → importer le dépôt. Choisir le compte/équipe voulu et le dossier racine du projet. Framework : Next.js. Installation : `pnpm install --frozen-lockfile`. Build : `pnpm build`. Version Node : 24. Aucun output directory personnalisé nécessaire.

Utiliser le gestionnaire et le lockfile du projet. Vérifier le plan : les conditions d’utilisation et quotas d’hébergement peuvent différer entre portfolio personnel et activité commerciale ; contrôler l’éligibilité du plan avant d’y héberger l’activité freelance. Ne pas supposer que toutes les utilisations sont gratuites.

Laisser `NEXT_PUBLIC_INDEXABLE=false` et les identifiants de tracking vides. Activer la protection de déploiement pour une preview privée. Vérifier le rendu et tous les parcours avant de relier le domaine public.

## 4. Variables d’environnement

| Variable | Rôle |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | URL canonique https du domaine confirmé |
| NEXT_PUBLIC_INDEXABLE | false en préparation ; true uniquement en production validée |
| RESEND_API_KEY | Secret du service d’envoi |
| CONTACT_FROM | Expéditeur sur un domaine vérifié par Resend |
| CONTACT_TO | Adresse destinataire réelle |
| NEXT_PUBLIC_TURNSTILE_SITE_KEY | Clé publique du widget antispam |
| TURNSTILE_SECRET_KEY | Secret de validation serveur |
| TURNSTILE_ALLOWED_HOSTNAMES | Liste séparée par virgules des hôtes réels autorisés |
| NEXT_PUBLIC_GTM_ID | Identifiant GTM, vide jusqu’à validation du tracking |
| GOOGLE_SITE_VERIFICATION | Jeton public de vérification Search Console si méthode HTML |

Configurer les secrets directement dans Vercel, jamais dans la conversation, le dépôt ou une URL. Les variables NEXT_PUBLIC sont intégrées au build : redéployer après modification. La page contact est dynamique pour vérifier les paramètres serveur à l’exécution.

## 5. Activer le formulaire

1. Créer/configurer Resend, vérifier le domaine d’expédition avec les enregistrements fournis par Resend et créer une clé d’envoi restreinte.
2. Définir l’expéditeur vérifié et le destinataire réel dans Vercel.
3. Créer un widget Cloudflare Turnstile pour les domaines autorisés et récupérer ses clés dans les environnements appropriés.
4. Ajouter les mêmes hôtes dans TURNSTILE_ALLOWED_HOSTNAMES ; l’action attendue par le serveur est `contact`.
5. Redéployer. Le formulaire doit devenir actif. Turnstile ne se charge qu’au clic sur son bouton.
6. Tester une soumission autorisée, la réception effective, le reply-to, les erreurs et le renouvellement du challenge. Les tests automatisés du dépôt simulent les fournisseurs, sans livraison réelle.
7. En production, ajouter une règle de limitation de débit sur POST `/api/contact` dans le pare-feu de l’hébergeur selon les capacités du plan. Turnstile, le honeypot, la limite de taille et le temps minimum sont déjà intégrés ; aucune limitation distribuée persistante n’est prétendue par ce code.

La réponse 200 signifie que le fournisseur a accepté la demande. Pour suivre rebonds et livraison, ajouter ultérieurement un webhook validé. Les erreurs réseau ne sont pas affichées comme des succès.

## 6. Domaine, DNS et HTTPS

1. Dans le projet Vercel, Settings → Domains, ajouter le domaine confirmé et sa variante www.
2. Choisir l’adresse canonique et rediriger la variante vers celle-ci.
3. Dans la zone DNS du fournisseur actuel, recopier **les enregistrements exacts demandés par Vercel pour ce projet** : A/CNAME et, si demandé, TXT de propriété. Ne pas utiliser une adresse IP générique trouvée dans un ancien tutoriel.
4. Préserver les enregistrements de messagerie MX, SPF, DKIM et DMARC existants. Il n’est pas nécessaire de transférer le domaine.
5. Attendre la validation DNS et l’émission du certificat HTTPS. Tester http → https, www → canonique, les liens et le formulaire sur l’adresse réelle.
6. Définir NEXT_PUBLIC_SITE_URL sur cette adresse, vérifier les contenus puis activer l’indexation en production et redéployer.

## 7. Après mise en ligne

Créer la propriété Search Console, vérifier le domaine par TXT et soumettre le sitemap. Activer les outils de mesure seulement après configuration de leurs finalités et de la politique de confidentialité. Mesurer Lighthouse sur la version de production et suivre les Core Web Vitals terrain lorsque les données seront suffisantes.

Références :
- https://vercel.com/docs/domains/working-with-domains/add-a-domain
- https://vercel.com/docs/environment-variables
- https://resend.com/docs/api-reference/emails/send-email
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
