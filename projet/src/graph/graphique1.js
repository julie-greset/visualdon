import * as d3 from 'd3';
import d3Tip from "d3-tip";
d3.tip = d3Tip;
import { SVG } from '@svgdotjs/svg.js'
import images from '../img/*.png';

const data = require('../../data/dates.json');
const pasTotaux = data.julie.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue) + data.julie.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue);
const julieImage  = 'julie_rounded';
const ingridImage  = 'ingrid_rounded';
const jquery = require("jquery");

export default graphique1 => {

  /*********** Nombre de pas totaux de chacunes ***********/

  const pasJulie = data.julie.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue);;
  const pasIngrid = data.ingrid.map(item => item.pas).reduce((accumulator, currentValue) => accumulator + currentValue);;

  const pourcentage = (pasIngrid*100/pasJulie).toFixed(2);
  
  const drawJulie = SVG().addTo('#pasJulie').size(500,70);
  drawJulie.rect(400, 30).fill('#A5C8FF').radius(10).move(0, 15);
  drawJulie.text('Julie').move(80, 20);
  drawJulie.text(`${pasJulie} pas`).move(420, 20)
  drawJulie.image(images[julieImage]).size(60, 60);

  const drawIngrid = SVG().addTo('#pasIngrid').size(500,70);
  drawIngrid.rect(((400/100)*pourcentage), 30).fill('#FFF0A2').radius(10).move(0, 15);
  drawIngrid.text('Ingrid').move(80, 20);
  drawIngrid.text(`${pasIngrid} pas`).move(((400/100)*pourcentage)+20, 20)
  drawIngrid.image(images[ingridImage]).size(60, 60);

  /*********** Graphique 1 : nombre de pas ***********/

  const dataJulie = data.julie;
  const dataIngrid = data.ingrid;

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
        return "<strong>Ingrid : " + d.pas +" pas</strong>";
    })

  var tip2 = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "<strong>Julie : " + d.pas + " pas</strong>";
    })

  const svg = d3.select('#graphique1').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
  d3.select("#graphique1").attr("align", "center"); // alignement du graphique

  // Diviser par 2 pour avoir la place
  const BAR_WIDTH = GRAPH_WIDTH / data.ingrid.length / 2 // largeur des batons

  // Echelle hauteur
  // Conversion du range des données en range de pixel
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataIngrid, d => d.pas)])
    .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

  const bars = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
  bars.selectAll('rect')
    .data(dataIngrid)
    .enter()
    .append('rect')
    // NOUVEAU multiplié par 2
    .attr('x', (d, i) => (i * BAR_WIDTH * 2)) // position horizontale
    .attr('width', BAR_WIDTH - MARGIN) // largeur
    .attr('y', d => yScale(d.pas)) // position verticale
    .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
    .attr('fill', '#fff0a3')
    .attr('rx', 4)
    .on('mouseover', tip1.show)
    .on('mouseout', tip1.hide)
    .call(tip1);

  // NOUVEAU une 2e serie de batons

  const bars2 = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
  bars2.selectAll('rect')
    .data(dataJulie)
    .enter()
    .append('rect')
    .attr('x', (d, i) => (i * BAR_WIDTH * 2) + BAR_WIDTH) // position horizontale
    .attr('width', BAR_WIDTH - MARGIN) // largeur
    .attr('y', d => yScale(d.pas)) // position verticale
    .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
    .attr('fill', '#A5C8FE')
    .attr('rx', 4)
    .on('mouseover', tip2.show)
    .on('mouseout', tip2.hide)
    .call(tip2);

  // FIN NOUVEAUX BATONS
  const dates = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT - 30}, 20)`)
  dates.selectAll('text')
    .data(dataIngrid)
    .enter()
    .append('text')
    // Multiplié par 2
    .attr('x', (d, i) => i * BAR_WIDTH * 2 + BAR_WIDTH * 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr('text-anchor', 'middle')
    .attr('transform', (d, i) => {
  // Multiplié par 2
  const x = i * BAR_WIDTH * 2 + BAR_WIDTH * 2
  const y = HEIGHT - MARGIN_BOTTOM + 20
  return `rotate(-65, ${x}, ${y})`
    })
    .text(d => d.date)
  const axisY = d3.axisLeft().scale(yScale)
    .tickFormat(d => `${d / 1} pas`)
    .ticks(5)
    .tickSizeOuter(0)
  svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT - 3}, ${MARGIN_TOP})`)
    .call(axisY)

  /*********** Informations textuelles ***********/
  const pourcentageJulie = (((pasJulie-pasIngrid)/pasJulie)*100).toFixed(0);
  jquery("#pourcentageJulie").text(pourcentageJulie+"%")
}