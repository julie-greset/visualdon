import dessinerGraphique1 from './graph/graphique1'
import ecrireLausanne from './graph/infosLausanne'
import dessinerGraphiqueJulie from './graph/graphiqueJulie'
import ecrireGeneve from './graph/infosGeneve'

const jquery = require("jquery");
const dataLausanne = require('../data/lausanne.json');
const dataGeneve = require('../data/geneve.json');
const divLausanne = "graphiqueLausanne";
const divGeneve = "graphiqueGeneve";

dessinerGraphique1('graphique1');
ecrireLausanne('ecrireLausanne');
dessinerGraphiqueJulie(dataLausanne, divLausanne);
ecrireGeneve('ecrireGeneve');
dessinerGraphiqueJulie(dataGeneve, divGeneve)

/*********** Show/Hide ***********/

jquery(".bouton-julie").on("click", () => {
    jquery("#container-ingrid").hide();
    jquery("#container-julie").slideDown();
})

jquery(".bouton-ingrid").on("click", () => {
    jquery("#container-julie").hide();
    jquery("#container-ingrid").show();
})