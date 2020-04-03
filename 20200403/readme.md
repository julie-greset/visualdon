/!\ Exercice pas encore fini, c'est normal je n'y suis pas arrivée avant 16h30 le 03.04.30

## Données utilisées

**Source des données** : https://www.kaggle.com/bbissey/barcelonaairbnbgeojson/data#listings.csv

**Type de format** : GeoJSON

Affichage des Airbnb à Barcelone

## Déroulement

### Fichier index.js

- Importation de D3
- Importation de `neighbourhoods.json` (à la base : `neighbourhoods.geojson` mais cela entraînait des bugs)
- Création d'une cartographie

### Fichier index.html

- Création d'un fichier `index.html` lié à `index.js` pour gérer l'affichage du graphique et la mise en page

### Live-server

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub/20200403`

`npm run carte:dev`

### GitHub

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub` 

`git add .`

`git commit -m "Graph cartographie"`

`git push -u origin master`