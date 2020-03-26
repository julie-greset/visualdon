import * as d3 from 'd3';
import DATA from './data' // chargement du fichier data.js

const getPieData = d3.pie().value(d => d.nb);
const pieData = getPieData(DATA);

const WIDTH = 800;
const HEIGHT = 400;

const svg = d3.select('#chart').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("#chart").attr("align", "center"); // alignement du graphique

// une fonction pour transformer les angles en attribut d
const arcCreator = d3.arc()
    .innerRadius(0)
    .outerRadius(HEIGHT / 2 - 10) // pour que tout le camembert soit visible

// Echelle couleur
const fillScale = d3.scaleOrdinal()
    .domain([0, d3.max(DATA, d => d.nb)]) // données en entrée
    .range(['#DBF9E6', '#1ED760']); // données en sortie

// // une fonction pour la couleur
// const color = ({ data }) => {
//   switch (data.genre) {
//     case 'latin': return 'gold'
//     case 'pop': return 'limegreen'
//     case 'rap': return 'yellow'
//     case 'reggaeton': return 'magenta'
//     default: return 'indianred'
//   }
// }

// un groupe pour centrer le camembert
const pie = svg.append('g')
.attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)

pie.selectAll('path')
.data(pieData)
.enter()
.append('path')
.attr('d', arcCreator)
// .attr('fill', color)
.attr('fill', d => fillScale(d.nb))
.attr("stroke", "white")
.style("stroke-width", "2px")

// un texte pour chaque tranche
pie.selectAll('text')
.data(pieData)
.enter()
.append('text')
// .centroid permet de trouver le centre de la tranche
.attr('transform', d => `translate(${arcCreator.centroid(d)})`)
.attr('text-anchor', 'middle')
.text(d => d.data.genre)

// la légende
const legend = svg.append('g')
.attr('transform', `translate(${HEIGHT+50})`)

const RECT_WIDTH = 20

// les carrés de couleur
legend.selectAll('rect')
.data(pieData)
.enter()
.append('rect')
.attr('y', (d, i) => i * RECT_WIDTH)
.attr('width', RECT_WIDTH)
.attr('height', RECT_WIDTH)
.attr('fill', d => fillScale(d.nb))

// les noms des genres
legend.selectAll('text')
.data(pieData)
.enter()
.append('text')
.attr('x', RECT_WIDTH * 1.5)
.attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
.attr('width', RECT_WIDTH)
.attr('height', RECT_WIDTH)
.text(d => d.data.genre)