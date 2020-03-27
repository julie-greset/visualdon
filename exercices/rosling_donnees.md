**1. Expliquez la procédure en quelques points**

- Utilisation de la commande `curl` pour télécharger les données fournies par [gapminder](https://www.gapminder.org/data/documentation/gd000/) et les mettre dans un dossier `temp`
- Conversion automatique des fichiers `xlsx` en `csv` à l'aide d'un script qui utilise la librairie [xlsx](https://www.npmjs.com/package/xlsx). Afin de ne pas se répéter, création d'un script `xslxToCsv.js` qui sera utilisé pour les 4 fichiers.
- Conversion des fichiers `csv` en `json` à l'aide de 3 scripts :
  - `toJSON_year_columns.js` : on garde "geo" pour joindre les données plus tard, et la valeur pour chaque année
  - `toJSON_population.js` : transformation des valeurs de "time" et "population" en nombre. Récupération de la population pour chaque année.
  - `toJSON_region.js` : on garde "geo" (excepté ceux qui sont vides), "name" et "region"
- Jointure des 4 fichiers `json` en un seul dans un fichier `joinData.js`, grâce à l'identifiant pays `geo`. On s'assure que chaque pays a des données pour toutes les années.
- Création d'un script `donnees.sh` afin d'obtenir le fichier final `data.json` en écrivant une seule commande

**2. Quel est l'interet d'avoir des scriptes pour manipuler des données ?**

Cela évite de devoir se répéter : on automatise des actions.

**3. Comment avons nous joint les quatre jeux de données ?**

Grâce à l'identifiant `geo` qui était commun aux 4 fichiers.