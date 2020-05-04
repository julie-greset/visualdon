const data = require('../../data/dates.json');

/*export default pasTotaux => {
    pasJulie = data.julie.map(item => item.pas);
    pasIngrid = data.ingrid.map(item => item.pas);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    pasJulieTotal = pasJulie.reduce(reducer);
    pasIngridTotal = pasIngrid.reduce(reducer);
}

console.log(pasJulieTotal);
console.log(pasIngridTotal);*/

export default data => {
    return data.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue);
}