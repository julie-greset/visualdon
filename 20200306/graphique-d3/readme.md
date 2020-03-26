## Données utilisées

**Source des données** : https://www.kaggle.com/leonardopena/top50spotify2019/data

**Type de format** : CSV

## Déroulement

### Fichier data.js

- Création d'un fichier data.js afin de pouvoir trier le tableau des données avant d'exécuter le code
- Le tableau des données est repris de l'exercice 2 du cours du 28 février 2020 (donc pas besoin de créer un fichier `prepare.js` et `data.json`, les données ont déjà été triées)
- Sélection des 5 premiers genres de musique pour représenter un pie chart

### Fichier index.js

- Importation de D3
- Importation de data.js
- Création d'un pie chart

### Fichier index.html

- Création d'un fichier `index.html` lié à `index.js` pour gérer l'affichage du graphique et la mise en page

### Live-server

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub/20200306/graphique-d3`

`npm run batons:dev-suite`

### GitHub

Dans le Terminal :

`cd /Users/juliegreset/Documents/HEIG/VisualDon/GitHub` 

`git add .`

`git commit -m "Exercice 2"`

`git push -u origin master`