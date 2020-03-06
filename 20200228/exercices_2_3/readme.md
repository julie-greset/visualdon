## Données utilisées

**Source des données** : https://www.kaggle.com/leonardopena/top50spotify2019/data

**Autres données qui pourraient être intéressantes pour le projet** : https://www.kaggle.com/leonardopena/top-spotify-songs-from-20102019-by-year et https://www.kaggle.com/leonardopena/top-50-spotify-songs-by-each-country

**Type de format** : CSV

## Déroulement

### Fichier CSV

- Récupération des données *Top 50 songs listened in 2019 on Spotify* en format CSV
- Formatage du CSV sur Excel pour délimiter les colonnes des données

### Fichier prepare.js

- Récupération des données dans un fichier prepare.js
- Choix des informations à filtrer dans le fichier prepare.js
- Création d'une colonne "genre" dans le fichier CSV afin de réduire le nombre de genres possibles en les regroupant dans des catégories plus générales
- Filtrage du nombre de musiques par genre dans le fichier prepare.js

### Fichier data.json

- Création d'un fichier data.json avec le nombre de musiques par genre grâce à la commande *node prepare > data.json* dans le Terminal

### Fichier index.html
