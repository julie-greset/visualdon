import dessinerGraphique1 from './graph/graphique1'
const jquery = require("jquery");

dessinerGraphique1('graphique1');

/*********** Show/Hide ***********/

jquery(".bouton-julie").on("click", () => {
    jquery("#container-ingrid").hide();
    jquery("#container-julie").show();
})

jquery(".bouton-ingrid").on("click", () => {
    jquery("#container-julie").hide();
    jquery("#container-ingrid").show();
})