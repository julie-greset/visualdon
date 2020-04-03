import * as d3 from 'd3';
import { geoPath, geoMercator, select } from 'd3'
import * as turf from '@turf/turf'

// import du fichier GeoJSON
const data = require('../neighbourhoods.json')
console.log(data);

const quartiersBbox = turf.bbox(data)

// taille de la carte
const [xMin, yMin, xMax, yMax] = quartiersBbox
const WIDTH = 1000
const HEIGHT = 700

// le svg
const svg = d3.select('#chart').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("#chart").attr("align", "center"); // alignement du graphique

// définir la projection
const projection = geoMercator()
  .fitExtent([[0, 0], [WIDTH, HEIGHT]], data) // centrer la carte sur les quartiers
// passer la projection à pathCreator
const pathCreator = geoPath().projection(projection)
  
// dessin du SVG
svg.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', pathCreator)
    // appliquer le style
    .attr('fill', 'white')
    .attr('stroke', 'black')
