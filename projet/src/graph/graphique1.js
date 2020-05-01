import { select } from 'd3'
//import * as d3 from 'd3';
import bb from 'billboard.js'

const data = require('../../data/dates.json');

export default graphique1 => {
    const div = select(`#${graphique1}`)
      bb.generate({
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
                tick: {
                    
                }
            },
            // Nommer l'axe y
            y: {
                tick: {
                    format: x => `${x} pas`
                }
            } 
        },
        bindto: graphique1,
      })  
  }