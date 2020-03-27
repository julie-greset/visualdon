**1. Comment et pourquoi le code est-il divisé en plusieurs fichiers ?**

- **Comment :**
  - `index.html` : éléments constituation la page
  - `index.css` : décoration des éléments
  - `config.js` : dimensions du graphique
  - `scales.js`: échelles pour l'axe x, l'axe y et le rayon de chaque bulle
  - `elements.js` : l'année, la signification des axes, le nom du pays lors d'un hover
- **Pourquoi : ** pour ne pas tout écrire dans le même script (`index.js`). Cela nous permet de changer une seule fois un paramètre dans son fichier de config et qu'il s'actualise automatiquement dans `index.js`.

**2. Comment le nom du pays est-il affiché quand la souris passe sur une bulle ?**

- dans `elements.js` : fonction `countryDisplay` qui détermine l'élément (`bubblesGroup`) et les attributs de présentation `font-size` et `text-anchor`
- dans `index.js` : événement `mouseover` lorsque la souris passe sur une bulle. Définition du positionnement au-dessus de la souris grâce à l'attribut `y` et `d.name` devient le contenu de `countryDisplay`