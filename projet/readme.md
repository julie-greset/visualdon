# Jeu de données

Pour la réalisation de ce projet nous avons utilisé nos données personnelles en format JSON. 

Pour certaines données, nous avons utilisé l’application « Health » d’iPhone, laquelle nous a permis de récolter le nombre de pas exact que l’on a marché durant les 30 premiers jours du confinement. Ces informations nous ont aidé à reconstruire nos activités, pour finalement identifier tout ce que nous avions fait durant cette période. 

Nous avons également utilisé des tickets de courses (dates, produits et prix) pour obtenir les données de la partie d’Ingrid.

Depuis le début de ce confinement nos vies ont drastiquement changé, surtout d’un point de vue physique. Au départ, nous imaginions des données assez basses pour notre nombre de pas. Nous avons finalement été surprises de découvrir que, malgré le fait que nous avons passé la plupart de temps à la maison, nous avions toutes les deux pas mal bougé. 

# Transformation des données

Nous avons commencé par dresser un tableau Excel de ce qu'on voulait représenter. Ce tableau se représentait de la manière suivante : 

|                           | Dates |
| ------------------------- | ----- |
| Repas                     |       |
| Boissons                  |       |
| Alcool                    |       |
| Séries                    |       |
| Films                     |       |
| Jeux                      |       |
| Argent dépensé            |       |
| Activités                 |       |
| Nb de pas                 |       |
| Photos et vidéos          |       |
| Habits                    |       |
| Temps d'écran Switch      |       |
| Temps passé à l'extérieur |       |

Il nous a permis d’identifier sur quelles activités se concentrer pour chacune d’entre nous. Nous avons ensuite créé d’autres tableau Excel avec uniquement les informations que nous souhaitions utiliser. 

Après réflexion, nous avons décidé de coder en dur les données `JSON` pour plus de souplesse (il y avait beaucoup de sous-tableaux, irreprésentables en Excel). Nous avons finalement écrit 7 fichiers `JSON` (ces fichiers sont disponibles dans le dossier `data`)

Notre projet contient 2 types de données visuelles, pour lesquelles nous avons utilisé les fichier `JSON` de manière différente.

## Les graphiques 

Ce projet contient 6 graphiques en total. Pour la plupart d’entre eux nous avons tout simplement pris les données directement des fichiers `JSON` en les important dans chacun des fichiers `.js` de nos graphiques. 

## Données textuelles 

Nous avons en total 25 données textuelles. Celles-ci ont été traités dans un fichier à part ou directement sur un `.js`, lesquels sont composés de fonctions qui nous ont permis de trier et filtrer les données afin d’obtenir uniquement ce qui nous intéressait. 

# Lien vers le code source

https://github.com/julie-greset/visualdon/tree/master/projet 

# Lien vers le la visualisation publiée

https://ingridsorg.github.io/index.html

# Scripts nécessaires

## Installations

```
npm install d3
```

```
npm install d3-tip
```

```
npm install @svgdotjs/svg.js
```

## Autres librairies utilisées

```
Bootstrap
```

```
Jquery
```

 Ces 2 libraires sont directement importées dans le dossier `src`

## Script pour lancer le projet avec parcel 

Le fichier `package.json` est nécessaire pour lancer le projet. Il se trouve dans le même repo que le dossier `projet`, à la racine.

Si toutefois celui-ci n'était pas disponible, voici la ligne à ajouter dans votre `package.json` :

`"projet": "parcel src/index.html --out-dir dist"`

Ensuite, lancer le script :

`npm run projet`