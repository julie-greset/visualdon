import { select } from 'd3'
import * as d3 from 'd3';
import bb from 'billboard.js'

const data = require('../../data/dates.json');

export default graphique1 => {
    const div = select(`#${graphique1}`)
    
    const villes = [
        { nom: 'Lausanne', population: 138905, superficie: 41.38 },
        { nom: 'Yverdon', population: 30143, superficie: 11.28 },
        { nom: 'Montreux', population: 26574, superficie: 33.37 },
        { nom: 'Renens', population: 21036, superficie: 2.96 },
        { nom: 'Nyon', population: 20533, superficie: 6.79 },
        { nom: 'Vevey', population: 19827, superficie: 2.38 },
      ]
      
      bb.generate({
        data: {
          json: {
            population: villes.map(({ population }) => population),
            superficie: villes.map(({ superficie }) => superficie),
          },
          // définir les axes y et y2
          axes: {
            population: 'y',
            superficie: 'y2',
          },
          type: 'bar',
        },
        axis: {
          x: {
            type: 'category',
            categories: villes.map(({ nom }) => nom)
          },
          // Nommer l'axe y
          y: {
            tick:{
              format: x => `${x/1000}k`
            },
            label: 'Population',
          },
          // Montrer et nommer l'axe y2
          y2: {
            show: true,
            label: 'Superficie',
          }
        },
        bindto: graphique1,
      })
  }