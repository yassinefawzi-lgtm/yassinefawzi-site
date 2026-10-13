# Publier dans le journal

Les articles résident dans `content/articles/*.mdx`, indépendamment du code de présentation. Cela reste un workflow de fichiers versionnés, sans interface d’administration.

1. Copier le brouillon existant sous un nom de fichier lisible, par exemple `mesurer-une-conversion.mdx`.
2. Remplir le front matter : `title`, `description`, `category`, `date` au format YYYY-MM-DD, et `published: false`.
3. Rédiger des sections h2/h3. Le titre h1 est généré par la page.
4. Vérifier les faits, liens, sources, images, droits et éventuels chiffres.
5. Passer à `published: true` seulement lorsque le texte est validé et sa date atteinte.
6. Construire et redéployer. Les brouillons et contenus datés dans le futur sont exclus de la liste et renvoient 404 si leur URL est demandée.

`updated` peut porter une date de mise à jour réelle. Les métadonnées et le balisage BlogPosting sont générés. Le sitemap ne publie que les articles accessibles.

## Sécurité MDX

MDX permet d’exécuter du code au rendu. N’accepter que des fichiers écrits ou relus par le propriétaire du dépôt. Ne pas ajouter d’éditeur public, de chargement MDX depuis une URL arbitraire ni de contenu transmis par des visiteurs sans changer le modèle de sécurité.

Le brouillon livré constitue uniquement une trame ; aucun article de démonstration n’est publié.
