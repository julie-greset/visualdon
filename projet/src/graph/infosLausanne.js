const dataIngridJulie = require('../../data/dates.json');
const data = require('../../data/lausanne.json');
const jquery = require("jquery");

export default ecrireLausanne => {

    // /*********** Titre ***********/
   
    // var drawJulie = SVG().addTo('#row-julie-titre').size('100%', 150);
    // drawJulie.rect('100%', 80).fill('#A5C8FF').move(40, 37.5);
    // drawJulie.text("Qu'est-ce que Julie a fait avec 62'127 pas ?").move(200, 75);
    // drawJulie.image(images[julieImage]).size(150, 150).move;

    /*********** Informations textuelles avant graphique ***********/

    // Nombre de pas
    const pasTotaux = dataIngridJulie.julie.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue);
    const pasLausanne = 23831;
    jquery("#pasLausanne").text(pasLausanne)

    const pourcentagePas = ((pasLausanne/pasTotaux)*100).toFixed(0);
    jquery("#pourcentagePasLausanne").text(pourcentagePas+"%")

    // Nombre d'activités
    const nbActivites = data.activites.length
    jquery("#nb-activites-lausanne").text(nbActivites)

    // Le plus d'activités en un jour
    const nbActivitesParDate = {};
    data.activites.forEach(item => {
        item.dates.forEach(date => {
            if(!nbActivitesParDate[date]) {
                nbActivitesParDate[date] = 0;
            }
            nbActivitesParDate[date]++;
        })
    })
    // const nbActivitesParDateTable = Object.entries(nbActivitesParDate).sort((a, b) => )
    var jourAvecMaxActivites = [];
    Object.entries(nbActivitesParDate).forEach(item => {
        if(jourAvecMaxActivites.length == 0) {
            jourAvecMaxActivites = item;
        }
        else {
            if(jourAvecMaxActivites[1] < item[1]) {
                jourAvecMaxActivites = item;
            }
        }
    })
    jquery("#nb-max-activites-lausanne").text(jourAvecMaxActivites[1]);
    jquery("#jour-max-activites-lausanne").text(jourAvecMaxActivites[0])

    /*********** Graphique ***********/
    

    /*********** Informations textuelles après graphique ***********/

    // Activité favorite
    const activitesReports = {};
    // On met chaque activités dans un objet avec le nombre de dates où elle a été reporté
    data.activites.forEach(item => {
        activitesReports[item.nom] = item.dates.length
    })
    // Tableau de l'activité favorite
    var activiteFavorite = [];
    Object.entries(activitesReports).forEach(item => {
        if(activiteFavorite.length == 0) {
            activiteFavorite = item;
        }
        else {
            if(activiteFavorite[1] < item[1]) {
                activiteFavorite = item;
            }
        }
    })
    jquery("#activite-favorite-lausanne").text(activiteFavorite[0])

    ///////// Total des reports d'activités
    const nbDatesparActivites = {}; // On commence par faire le total de report de chaque activités
    data.activites.forEach(item => {
        var nb = item.dates.length;
        if(!nbDatesparActivites[item.nom]) {
            nbDatesparActivites[item.nom] = 0;
        }
        nbDatesparActivites[item.nom] += nb;
    })
    const reportsTotaux = Object.entries(nbDatesparActivites).map(item => item[1]).reduce((accumulator, currentValue) => accumulator + currentValue);

    ////////// Activités extérieures
    const nbActivitesExtParDate = {}; // on commence par faire un objet du nombre de date où une activité extérieure a été reportée
    data.activites.forEach(item => {
        var nb = item.dates.length;
        if(item.ext == "oui") {
                if(!nbActivitesExtParDate[item.nom]) {
                    nbActivitesExtParDate[item.nom] = 0;
                }
                nbActivitesExtParDate[item.nom]+=nb;
            
        }
    })
    const reportsExtTotaux = Object.entries(nbActivitesExtParDate).map(item => item[1]).reduce((accumulator, currentValue) => accumulator + currentValue);
    const pourcentageNbActivitesExt = (((reportsExtTotaux/reportsTotaux))*100).toFixed(0);
    jquery("#pourcentage-activites-ext").text(pourcentageNbActivitesExt+"%");

    // Activités devant un écran
    /////////// Activités sur les écrans
    const nbActivitesEcranParDate = {}; // on commence par faire un objet du nombre de date où une activité extérieure a été reportée
    data.activites.forEach(item => {
        var nb = item.dates.length;
        if(item.ecran == "oui") {
            
                if(!nbActivitesEcranParDate[item.nom]) {
                    nbActivitesEcranParDate[item.nom] = 0;
                }
                nbActivitesEcranParDate[item.nom]+=nb;
            
        }
    })
    const reportsEcranTotaux = Object.entries(nbActivitesEcranParDate).map(item => item[1]).reduce((accumulator, currentValue) => accumulator + currentValue);
    const pourcentageNbActivitesEcran = (((reportsEcranTotaux/reportsTotaux))*100).toFixed(0);
    jquery("#pourcentage-activites-ecran").text(pourcentageNbActivitesEcran+"%");

    // Nombre de fois qu'une activité a été faite
    const nbThemesParDate = {}; // on commence par faire un objet du nombre de date où un thème a été reporté
    data.activites.forEach(item => {
        var nb = item.dates.length;
        item.thèmes.forEach(theme => {
            if(!nbThemesParDate[theme]) {
                nbThemesParDate[theme] = 0;
            }
            nbThemesParDate[theme]+=nb;
        })
    })
}