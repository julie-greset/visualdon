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

### Fichier data.js

- Création d'un fichier data.js en remplacement de data.json afin de pouvoir trier le tableau avant d'exécuter le code

### Fichier index.js

- Importation de D3
- Importation de data.js
- Création d'un graphique en barre

### Fichier index.html

- Création d'un fichier index.html lié à index.js pour gérer l'affichage du graphique et la mise en page

### Live-server

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub/20200228/exercices_2_3`
`npm run batons:dev`

### GitHub

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub` 
`git add .`
`git commit -m "Exercices"`
`git push -u origin master`