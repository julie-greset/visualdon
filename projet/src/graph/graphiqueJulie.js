import * as d3 from 'd3';
import d3Tip from "d3-tip";
d3.tip = d3Tip;


export default (data, divId) => {
    const nbDatesparActivites = {}; // On commence par faire le total de report de chaque activités
    data.activites.forEach(item => {
        var nb = item.dates.length;
        if(!nbDatesparActivites[item.nom]) {
            nbDatesparActivites[item.nom] = {"nb": 0, "ext": item.ext};
        }
        nbDatesparActivites[item.nom].nb += nb;
    })
    const activitesTab = Object.entries(nbDatesparActivites);
    activitesTab.sort((a, b) => b[1].nb - a[1].nb)

    const WIDTH = 1200
    const HEIGHT = 700
    const MARGIN = 20 // espace entre les batons
    const MARGIN_TOP = HEIGHT / 10
    const MARGIN_BOTTOM = HEIGHT - 400 // on fait de la place pour les noms
    const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
    const MARGIN_LEFT = WIDTH / 10
    const GRAPH_WIDTH = WIDTH - MARGIN_LEFT

    const svg = d3.select('#'+divId).append('svg').attr('width', WIDTH).attr('height', HEIGHT);
    d3.select('#'+divId).attr("align", "center"); // alignement du graphique

    const BAR_WIDTH = GRAPH_WIDTH / activitesTab.length // largeur des batons

    // Echelle hauteur
    // Conversion du range des données en range de pixel
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(activitesTab, d => d[1].nb)])
        .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

    const bars = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

    var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<strong>Activité réalisée <span>" + d[1].nb + "x</strong></span>";
    })

    ///////////// Bars
    bars.selectAll('rect')
        .data(activitesTab)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * BAR_WIDTH) // position horizontale
        .attr('width', BAR_WIDTH - MARGIN) // largeur
        .attr('y', d => yScale(d[1].nb)) // position verticale
        .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d[1].nb)) // hauteur
        .attr('fill', d => {
            if(d[1].ext == "oui") {
                return '#F77F89';
            }
            else {return '#A5C8FF'}
        })
        .attr('rx', 3)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .call(tip);

    const activites = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT+12}, 20)`)

    activites.selectAll('text')
        .data(activitesTab)
        .enter()
        .append('text')
        .attr('class', 'd3-graph-julie-text')
        .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
        .attr('y', HEIGHT - MARGIN_BOTTOM + 0)
        .attr('text-anchor', 'end')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 13)
        .style('fill', 'black')
        .attr('transform', (d, i) => {
            const x = i * BAR_WIDTH + BAR_WIDTH / 2
            const y = HEIGHT - MARGIN_BOTTOM + 20
            return `rotate(-65, ${x}, ${y})`
        })
        .text(d => d[0])
        

    const axisY = d3.axisLeft().scale(yScale)
        .tickFormat(d => `${d / 1}x`)
        .ticks(5)
        .tickSizeOuter(0)

    ///////// Légendes

    var legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(900, 100)');

    const extOuInt = [["Activité intérieure", "#A5C8FF"], ["Activité extérieure", "#F77F89"]]

    legend.selectAll('rect')
        .data(extOuInt)
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
        .data(extOuInt)
        .enter()
        .append('text')
        .text(d => {
            return d[0];
        })
        .attr('x', 25)
        .attr('y', function(d, i){
            return i * 25 + 16;
        })
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'hanging');

    svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 20}, ${MARGIN_TOP})`)
        .call(axisY)
        .attr('font-size', 15)
        .attr('font-family', 'Roboto')
        .attr('font-weight', '700')
        .attr('color', 'black')
}