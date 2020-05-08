const dataNbPas = require('../../data/nbPas-Ingrid.json');
const dataProduits = require('../../data/produits.json');
const dataCourses = require('../../data/courses.json');
const R = require('ramda')


export const nbPas = () => {

  // NOMBRE TOTAL DE PAS 
  const tabPas = dataNbPas.map(nbpas => nbpas.pas);
  var sum = (resultat, chiffre) => resultat + chiffre
  const nbPas = tabPas.reduce(sum, 0);

  return nbPas;
}

export function pasCourses(data){
  // NOMBRE TOTAL DE PAS 
  const tabPas = filtreTab(data)
  return tabPas;
}


export function depenses(dataCourses) {

  // NOMBRE TOTAL DE PAS 
  const depenses = dataCourses.map(p => p.prix);
  var sum = (resultat, chiffre) => resultat + chiffre
  const total = depenses.reduce(sum, 0);

  return total;

}
export function achats(data) {

  // NOMBRE TOTAL DE PRODUITS ACHETES

  const tabQtte = data.map(nbProd => nbProd.Qtte);
  var sum = (resultat, chiffre) => resultat + chiffre
  const nbProduits = tabQtte.reduce(sum, 0);

  return nbProduits;

}

export function sorties(data) {

  //NOMBRE DE SORTIES
  const tabPas = dataNbPas.map(nbpas => nbpas.pas);
  const nbSorties = tabPas.filter(d => d>= '1000');
  return nbSorties.length;


}

export function sortiesCourses(data) {

  //NOMBRE DE SORTIES
  const sortiesCourses = filtreTab(data);
  const tabPas = sortiesCourses.map(nbpas => nbpas.pas);
  var sum = (resultat, chiffre) => resultat + chiffre
  const pasCourses = tabPas.reduce(sum, 0);

  return pasCourses
}

export function pourcent(data) {

  //NOMBRE DE SORTIES
  const tabPas = data
  .filter(d => d.pas >= '1000')
  .map(nbpas => nbpas.pas);
  var sum = (resultat, chiffre) => resultat + chiffre
  const pasCourses = tabPas.reduce(sum, 0);
  
  const tab = data.map(nbpas => nbpas.pas);
  const nbPas = tab.reduce(sum, 0);

  const pourcent = Math.round((pasCourses/nbPas)*100);

  return pourcent;
}


export function pates() {

  // NOMBRE DE PAQUET DE PATES ACHETES 

  const pates = dataProduits
  .filter(p => p.Produit === "Spaghetti" || p === "Pates")
  .map(nb => nb.Qtte);;
  var sum = (resultat, chiffre) => resultat + chiffre
  const nbpates = pates.reduce(sum, 0);

  return nbpates*500 + " g";
}

export function coca(dataProduits) {

  // NOMBRE DE PAQUET DE PATES ACHETES 
  const coca = dataProduits
  .filter(p => p.Produit === "Coca Zero")
  .map(nb => nb.Qtte);;
  var sum = (resultat, chiffre) => resultat + chiffre
  const nbcoca = coca.reduce(sum, 0);

  return " x" +nbcoca; 
}

export function indispo(dataProduits) {

  // PRODUITS PAS TROUVES

  const dispo = dataProduits
    .filter(p => p.Disponible === "non")
    .map(d => ({ produit: d.Produit }))

  const nbProd = dispo.length;

  return nbProd;

}

export function type() {

  // TYPE DE PRODUIT

  // Types uniques

  const tabTypes = R.uniq(dataProduits.map(d => d.type));
  // compter les occurences en filtrant par type et en retournant le nombre d'éléments avec `.length`
  const occurencesParType = type => dataProduits.filter(d => d.type === type).length
  const resultat = tabTypes.map(type => ({
    type,
    nb: occurencesParType(type)
  }))
  console.log(
    JSON.stringify(
      resultat,
      null,
      2
    )
  )

  return resultat;

}


function filtreTab(data) {

//NOMBRE DE SORTIES
//const nbSorties = tabPas.filter(d => d>= '1000');
const nbSorties = data
  .filter(p => p.date === "14.03.20" || 
  p.date === "16.03.20"||
  p.date === "19.03.20" ||
  p.date === "24.03.20" ||
  p.date === "04.04.20")
  .map(d => ({ 
    date: d.date, 
    pas : d.pas
  
  }))
  console.log(nbSorties)
  return nbSorties;
}




















