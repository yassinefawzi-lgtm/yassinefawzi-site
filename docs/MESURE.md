# Mesure, GA4 et Google Ads

## État initial

GTM absent tant que `NEXT_PUBLIC_GTM_ID` est vide. Aucun tag Google non essentiel n’est chargé par le code avant consentement. Audience et publicité constituent deux choix séparés, refus et acceptation de même présentation. Le pied de page permet de rouvrir les préférences.

Le mécanisme est un socle technique. Il ne garantit pas la conformité d’un futur conteneur GTM mal configuré ; la liste des tags, cookies, destinataires, durées et transferts devra être validée.

## Événements

| Événement | Paramètres autorisés | Déclenchement |
| --- | --- | --- |
| page_view | page_path | Navigation après consentement audience |
| cta_click | label, destination | Boutons suivis de l’accueil |
| project_view | project_slug | Arrivée sur une étude de cas |
| contact_form_submit | intent | Réponse 200 de l’API, après acceptation par Resend |
| cv_download | source | Clic de téléchargement du vrai CV |
| outbound_link_click | network | Clic LinkedIn configuré |
| consent_ready | UTM filtrées | Chargement du conteneur autorisé |

Un clic de téléchargement ne confirme pas l’ouverture du PDF ; l’acceptation Resend ne confirme pas la lecture ni la livraison finale en boîte de réception. Distinguer ces limites dans les analyses.

Les événements métier sont envoyés uniquement après consentement audience. Une conversion Google Ads requiert également le consentement publicitaire : une personne ayant choisi uniquement publicité ne génère donc pas ces événements métier. Ce choix conservateur est volontaire.

## Configurer GTM / GA4

1. Créer un conteneur web GTM et une propriété GA4 ; inscrire uniquement l’identifiant public GTM dans l’environnement.
2. Créer les variables de couche de données nécessaires et les déclencheurs personnalisés. Les identifiants GA4 restent dans le conteneur.
3. Configurer le tag Google pour ne pas déclencher automatiquement des vues de page. Le site émet `page_view`. Désactiver les vues automatiques sur changement d’historique pour éviter les doublons.
4. Définir `page_location` depuis l’origine et `page_path`, sans query-string ; définir `page_referrer` sans paramètres libres. Ne pas envoyer le contenu du formulaire, le DOM des champs ni des identifiants de visiteur maison.
5. N’autoriser les tags GA4 qu’avec `analytics_storage=granted`. Ne pas utiliser le mode avancé envoyant des signaux avant accord pour cette première version.
6. Pour les tags publicitaires, imposer les permissions pertinentes `ad_storage`, `ad_user_data`, `ad_personalization` et respecter les limitations choisies. Ne pas activer enhanced conversions ni données fournies par les utilisateurs.
7. Vérifier dans GTM Preview et les requêtes réseau : avant choix, refus global, audience seule, publicité seule, accord global et retrait.
8. Mettre à jour la confidentialité selon la configuration effective avant publication.

La couche typée dans `src/lib/analytics.ts` ne met pas en file d’attente les interactions antérieures au consentement. Les UTM libres sont rejetées : ajouter les identifiants de campagnes attendus à `campaigns` plutôt qu’accepter des textes pouvant contenir des données personnelles.

## Google Ads

Créer une action de conversion et la connecter au déclencheur `contact_form_submit`, uniquement avec les consentements requis. Éviter le double comptage entre import GA4 et tag Ads direct : choisir une conversion principale. Tester avec une demande autorisée après configuration du formulaire, puis vérifier le résultat dans les outils de diagnostic. Aucun budget ni campagne n’est créé par ce projet.

## Retrait et rétention

Le choix local expire après 180 jours. Le retrait recharge le document pour arrêter les scripts déjà présents et supprime les cookies Google accessibles sur les domaines connus. Revoir ce nettoyage si de nouveaux tags sont ajoutés. Un site ne peut pas supprimer tous les cookies tiers ou HttpOnly ; définir aussi les règles dans les prestataires. Aucun outil d’enregistrement de sessions n’est ajouté.

Référence : https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
