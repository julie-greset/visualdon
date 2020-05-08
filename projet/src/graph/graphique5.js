import * as d3 from 'd3';
const dataProduits = require('../../data/produits.json');
const DATA = require('../../data/typeProduit.json');
const dataCourses = require('../../data/courses.json');
const jquery = require("jquery");
import { achats, indispo, depenses } from './prepareData-Ingrid.js'

// produits totaux 

const tab = DATA.map(p=> p.nb);
var sum = (resultat, chiffre) => resultat + chiffre
const nbProd = tab.reduce(sum, 0);

export default graphique5 => {

	var getPieData = d3.pie().value(d => d.nb)
	var pieData = getPieData(DATA)
	const WIDTH = 550;
	const HEIGHT = 450;

	var div = d3.select("#graphique5").append("div")
		.attr("class", "tooltip-donut")
		.style("opacity", 0);

	const svg = d3.select('#graphique5').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
	d3.select("#graphique5").attr("align", "right"); // alignement du graphique

	const arcCreator = d3.arc()
		.innerRadius(0)
		.outerRadius(HEIGHT / 2)

	const color = ({ data }) => {
		switch (data.type) {
			case 'durable': return '#fff0a3'
			case 'frais': return '#BBD6FE'
			case 'peu durable': return '#FF7589'
			default: return 'indianred'
		}
	}

	const pie = svg.append('g')
		.attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)

	pie.selectAll('path')
		.data(pieData)
		.enter()
		.append('path')
		.attr('d', arcCreator)
		.attr('fill', color)
		.attr("stroke", "#fff")
		.attr("stroke-width", "2px")
		.on('mouseover', function (d, i) {
			d3.select(this).transition()
				.duration('50')
				.attr('opacity', '.60');
			//Makes the new div appear on hover:
			div.transition()
			.duration(50)
			.style("opacity", 1);
	   let num = (Math.round((d.data.nb/nbProd ) * 100)).toString() + '%';
	   div.html(num)
				.style("left", (d3.event.pageX+ 10) + "px")
				.style("top", (d3.event.pageY - 15) + "px");
		})
		.on('mouseout', function (d, i) {
			d3.select(this).transition()
				.duration('50')
				.attr('opacity', '1');
			//Makes the new div disappear:
			div.transition()
				.duration('50')
				.style("opacity", 0);
		});

	// la légende
	const legend = svg.append('g')
		.attr('transform', `translate(${HEIGHT - 25})`)

	const RECT_WIDTH = 20

	// les carrés de couleur
	legend.selectAll('rect')
		.data(pieData)
		.enter()
		.append('rect')
		.attr('y', (d, i) => i * RECT_WIDTH)
		.attr('width', RECT_WIDTH)
		.attr('height', RECT_WIDTH -3)
		.attr('fill', color)
		.attr('rx', 4)

	// les types de produits 
	legend.selectAll('text')
		.data(pieData)
		.enter()
		.append('text')
		.attr('x', RECT_WIDTH * 1.5)
		.attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
		.attr('width', RECT_WIDTH)
		.attr('height', RECT_WIDTH)
		.text(d => (d.data.type).charAt(0).toUpperCase()+d.data.type.slice(1))

	/*********** Informations textuelles ***********/
	jquery("#nbProduit").text(achats(dataProduits))
	jquery("#indispo").text(indispo(dataProduits))
	jquery("#depenses").text(depenses(dataCourses)+" CHF")
}







