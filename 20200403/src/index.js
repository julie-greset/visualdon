import * as d3 from 'd3';
import { geoPath, geoMercator, select } from 'd3'

// import du fichier GeoJSON
const data = require('../neighbourhoods.geojson')
console.log(data);

// taille de la carte
const WIDTH = 800
const HEIGHT = 500

const svg = d3.select('#chart').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("#chart").attr("align", "center"); // alignement du graphique

// définir la projection
const projection = d3.geoMercator()
// passer la projection à pathCreator
const pathCreator = d3.geoPath().projection(projection)
  
svg.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', pathCreator)