### Données utilisées

**Source des données** : https://www.kaggle.com/leonardopena/top50spotify2019/data
**Type de format** : CSV

### Déroulement

- Récupération des données *Top 50 songs listened in 2019 on Spotify* en format CSV
- Formatage du CSV sur Excel pour délimiter les colonnes des données
- Récupération des données dans un fichier prepare.js
- Choix des informations à filtrer dans le fichier prepare.js
- Création d'une colonne "genre" dans le fichier CSV afin de réduire le nombre de genres possibles en les regroupant dans des catégories plus générales
- Filtrage du nombre de musiques par genre dans le fichier prepare.js
- Création d'un fichier data.json avec le nombre de musiques par genre grâce à la commande *node prepare > data.json* dans le Terminal
- 