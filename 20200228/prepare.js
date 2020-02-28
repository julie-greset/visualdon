// Fonction qui vient de base avec node
const fs = require('fs');

const fichier = fs.readFileSync('data.csv', 'utf-8');

// \n = retour à la ligne
const result = fichier
    // Séparation des données après chaque retour à la ligne
    .split('\n')
    // Séparation des données après chaque point-virgule
    .map(ligne => ligne.split(';'))
    // Affichage des titres
    .map(c => ({
        titre: c[1],
        artiste: c[2],
        genre: c[3],
        beats: c[4],
        valence : c[9]
    }))
    .filter(c => c.genre === 'pop')
    //.filter(c => Math.max(c.beats))
;

console.log(
    JSON.stringify(result, null, 2)
);

/*
indexes

1 - titre
2 - artiste
3 - genre
4 - beats par minute
5 - energie
6 - dancability
7 - volume en db
8 - liveness
9 - valence (positive mood)
10 - durée
11 - accousticness
12 - speechiness
13 - popularité
*/