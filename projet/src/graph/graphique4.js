import { select } from 'd3'
import * as d3 from 'd3';
import d3Tip from "d3-tip";
d3.tip = d3Tip;
const data = require('../../data/nbPas-Ingrid.json');
const jquery = require("jquery");
import { sorties, sortiesCourses} from './prepareData-Ingrid.js'



export default graphique4 => {

    const WIDTH = 1400
    const HEIGHT = 500
    const MARGIN = 5 // espace entre les batons
    const MARGIN_TOP = HEIGHT / 10
    const MARGIN_BOTTOM = HEIGHT / 7 // on fait de la place pour les noms
    const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
    const MARGIN_LEFT = WIDTH / 20
    const GRAPH_WIDTH = WIDTH - MARGIN_LEFT

    // mouseover 

    var tip1 = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function (d) {
            return "Pas : " + d.pas;
        })

    const svg = d3.select('#graphique4').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
    d3.select("#graphique4"); // alignement du graphique

    // NOUVEAU diviser par 2 pour avoir la place
    const BAR_WIDTH = GRAPH_WIDTH / data.length // largeur des batons

    // Echelle hauteur
    // Conversion du range des données en range de pixel
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.pas)])
        .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

    const bars = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
    bars.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        // NOUVEAU multiplié par 2
        .attr('fill', '#FFF0A3')
        .attr('x', (d, i) => (i * BAR_WIDTH)) // position horizontale
        .attr('width', BAR_WIDTH - MARGIN) // largeur
        .attr('y', d => yScale(d.pas)) // position verticale
        .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
        .attr('rx', 4)
        .on('mouseover', tip1.show)
        .on('mouseout', tip1.hide)
        .call(tip1);

    const dates = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 20}, 20)`)

    dates.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
        .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 13)
        .attr('transform', (d, i) => {
            const x = i * BAR_WIDTH + BAR_WIDTH / 2
            const y = HEIGHT - MARGIN_BOTTOM + 20
            return `rotate(-65, ${x}, ${y})`
        })
        .text(d => d.date)
    
    const axisY = d3.axisLeft().scale(yScale)

        .tickFormat(d => `${d / 1} pas`)
        .ticks(5)

    svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 3}, ${MARGIN_TOP})`)
        .call(axisY)
        .attr('font-size', 13)

    /*********** Informations textuelles ***********/
    jquery("#sorties").text(sorties(data))
    jquery("#pasCourses").text(sortiesCourses(data))
}
