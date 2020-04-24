import * as d3 from 'd3';
import DATA from './data' // chargement du fichier data.js

const WIDTH = 1200
const HEIGHT = 500
const MARGIN = 20 // espace entre les batons
const MARGIN_TOP = HEIGHT / 10
const MARGIN_BOTTOM = HEIGHT / 7 // on fait de la place pour les noms
const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
const MARGIN_LEFT = WIDTH / 10
const GRAPH_WIDTH = WIDTH - MARGIN_LEFT

const svg = d3.select('#chart').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("#chart").attr("align", "center"); // alignement du graphique

const BAR_WIDTH = GRAPH_WIDTH / DATA.length // largeur des batons

// Echelle hauteur
// Conversion du range des données en range de pixel
const yScale = d3.scaleLinear()
    .domain([0, d3.max(DATA, d => d.nb)])
    .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

const bars = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

bars.selectAll('rect')
    .data(DATA)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * BAR_WIDTH) // position horizontale
    .attr('width', BAR_WIDTH - MARGIN) // largeur
    .attr('y', d => yScale(d.nb)) // position verticale
    .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.nb)) // hauteur
    .attr('fill', '#ECC35A')
    .attr('rx', 3);

const dates = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT-17}, 20)`)

dates.selectAll('text')
    .data(DATA)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 13)
    .style('fill', 'white')
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
    .attr('transform', `translate(${MARGIN_LEFT - 20}, ${MARGIN_TOP})`)
    .call(axisY)
    .attr('font-size', 13)
    .attr('color', 'white')

    