// Fonction qui vient de base avec node
const fs = require('fs');

const fichier = fs.readFileSync('data.csv', 'utf-8');

// \n = retour à la ligne
const result = fichier
    // Séparation des données après chaque retour à la ligne
    .split('\n')
    // Séparation des données après chaque point-virgule
    .map(ligne => ligne.split(';'))
    // Attributation de titres aux index
    .map(c => ({
        titre: c[1],
        artiste: c[2],
        sous_genre: c[3],
        genre: c[4],
        beats: c[5],
        valence : c[10]
    }))
    // Création d'un tableau avec les genres de chaque titres
    .map(c => c.genre)
    // Obtention du nombre de chaque genre
    .reduce((res, genre) => {
        const exist = res.find(d => d.genre === genre)
        if (exist) {
            return [
                ...res.filter(d => d.genre !== genre),
                {
            ...exist,
            nb: exist.nb + 1
                }
            ]
        }
        // Si le genre n'existait pas encore, on créé l'entrée et on commence la comptabilisation
        return [
            ...res,
            {
                genre,
                nb: 1
            }
        ]
    } ,[])
    ;

console.log(
    JSON.stringify(result, null, 2)
);

/*
indexes

1 - titre
2 - artiste
3 - sous-genre
4 - genre
5 - beats par minute
6 - energie
7 - dancability
8 - volume en db
9 - liveness
10 - valence (positive mood)
11 - durée
12 - accousticness
13 - speechiness
14 - popularité
*/