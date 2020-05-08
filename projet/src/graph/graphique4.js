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

    function color(p) {
        switch (p.date) {
            case '14.03.20': return '#ff7589'
            case '16.03.20': return '#ff7589'
            case '19.03.20': return '#ff7589'
            case '24.03.20': return '#ff7589'
            case '04.04.20': return '#ff7589'
            default: return '#fff0a3'
        }
    }

    const svg = d3.select('#graphique4').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
    d3.select("#graphique4").attr("align", "center"); // alignement du graphique

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
        .attr('fill', function (d) { return color(d); })
        .attr('x', (d, i) => (i * BAR_WIDTH)) // position horizontale
        .attr('width', BAR_WIDTH - MARGIN) // largeur
        .attr('y', d => yScale(d.pas)) // position verticale
        .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
        .attr('rx', 4)
        .on('mouseover', tip1.show)
        .on('mouseout', tip1.hide)
        .call(tip1);

    const dates = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 9}, 20)`)

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
        .tickSizeOuter(0)


    ///////// Légendes

    var legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(900, 100)');

    const coursesOuAutres = [["Courses", "#F77F89"], ["Autres", "#FFF0A2"]]

    legend.selectAll('rect')
        .data(coursesOuAutres)
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', function(d, i){
            return i * 25;
        })
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', d => d[1])
        .attr('rx', 3)
    
    legend.selectAll('text')
        .data(coursesOuAutres)
        .enter()
        .append('text')
        .text(d => {
            return d[0];
        })
        .attr('x', 25)
        .attr('y', function(d, i){
            return i * 25 + 3;
        })
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'hanging');

    svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 3}, ${MARGIN_TOP})`)
        .call(axisY)
        .attr('font-size', 13)

    /*********** Informations textuelles ***********/
    jquery("#sorties").text(sorties(data))
    jquery("#pasCourses").text(sortiesCourses(data))
}
