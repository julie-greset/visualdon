import dessinerGraphique1 from './graph/graphique1'
import dessinerGraphique4 from './graph/graphique4'
import dessinerGraphique5 from './graph/graphique5'
import dessinerGraphique6 from './graph/graphique6'
const jquery = require("jquery");

dessinerGraphique1('graphique1');
dessinerGraphique4('graphique4');
dessinerGraphique5('graphique5');
dessinerGraphique6('graphique6');


/*********** Show/Hide ***********/

jquery(".bouton-julie").on("click", () => {
    jquery("#container-ingrid").hide();
    jquery("#container-julie").show();
})

jquery(".bouton-ingrid").on("click", () => {
    jquery("#container-julie").hide();
    jquery("#container-ingrid").show();
})