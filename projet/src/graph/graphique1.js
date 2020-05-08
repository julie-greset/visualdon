// import { select } from 'd3'
// import * as d3 from 'd3';
import bb from 'billboard.js'
import { SVG } from '@svgdotjs/svg.js'
import images from '../img/*.png';

import pasTotaux from './prepareGraphique1'
import {pourcent} from './prepareData-Ingrid.js'

const data = require('../../data/dates.json');
const julieImage  = 'julie_rounded';
const ingridImage  = 'ingrid_rounded';
const jquery = require("jquery");

export default graphique1 => {

  /*********** Nombre de pas totaux de chacunes ***********/

  const pasJulie = pasTotaux(data.julie);
  const pasIngrid = pasTotaux(data.ingrid);

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

  const chart = bb.generate({
    data: {
      json: {
        julie: data.julie.map(item => item.pas),
        ingrid: data.ingrid.map(item => item.pas),
      },
    type: 'bar',
    },
    axis: {
        x: {
            type: 'category',
            categories: data.julie.map(item => item.date),
        },
        // Nommer l'axe y
        y: {
            tick: {
                format: function(x) {
                    return Math.round(x / 1000) * 1000;
                },
                values: [0, 1000, 2000, 3000, 4000, 5000, 6000]             
            }
        }
        
    },
    color : {
        pattern : ["#A5C8FF", "#FFF0A2"]
    },
    bindto: "#graphique1",
  })

  /*********** Informations textuelles ***********/
  const pourcentageJulie = (((pasJulie-pasIngrid)/pasJulie)*100).toFixed(0);
  console.log(pourcentageJulie);
  jquery("#pourcentageJulie").text(pourcentageJulie+"%")
  jquery("#pourcentageIngrid").text(pourcent(data.ingrid)+"%")
}