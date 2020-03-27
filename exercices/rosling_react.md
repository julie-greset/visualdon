**1. Comment les bulles sont-elles crées dans cette version ?**

A l'aide de deux composants :

- Composant `Bulle` qui génère une bulle : prend un objet avec les clés `data` (données pour cette bulle) et `yearIndex` (index pour sortir la valeur pour une année en particulier)
- Composant `Bulles` qui génère plusieurs bulles à l'aide de la fonction `map` sur les données et retourne un élément `Bubble`pour chaque données.

**2. Comment les données sont-elles jointes aux éléments DOM avec `react` ?**

On récupère d'abord le div dans lequel le graphique ira :

```jsx
const div = document.getElementById('graph')
```

On créé notre variable :

```jsx
const Graph = year =>
  <p>L'année est {year}</p>
```

On utilise `render` pour la joindre au DOM :

```jsx
render(Graph(2020), div)
```

