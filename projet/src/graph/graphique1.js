import { select } from 'd3'
//import * as d3 from 'd3';
import bb from 'billboard.js'

const data = require('../../data/dates.json');

export default graphique1 => {
    const div = select(`#${graphique1}`)
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
            pattern : ["#A5C8FE", "#FFF0A2"]
        },
        bindto: graphique1,
      })  
  }