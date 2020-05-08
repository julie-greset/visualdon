import * as d3 from 'd3';
const DATA = require('../../data/dispoProd.json');
const dataProduits = require('../../data/produits.json');
const jquery = require("jquery");
import d3Tip from "d3-tip";
d3.tip = d3Tip;
import { pates, coca } from './prepareData-Ingrid.js'

// produits totaux 

const tab = DATA.map(p=> p.nb);
var sum = (resultat, chiffre) => resultat + chiffre
const nbProd = tab.reduce(sum, 0);

export default graphique6 => {

	var getPieData = d3.pie().value(d => d.nb)
	var pieData = getPieData(DATA)

	var tip1 = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function (d) {
		console.log(d.data.nb)
		let num = (Math.round((d.data.nb/nbProd ) * 100)).toString() + '%';
		return num;
	})

	const WIDTH = 600;
	const HEIGHT = 350;
	const svg = d3.select('#graphique6').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
	d3.select("#graphique6").attr("align", "right"); // alignement du graphique

	const arcCreator = d3.arc()
		.innerRadius(0)
		.outerRadius(HEIGHT / 2)

	const color = ({ data }) => {
		switch (data.type) {
			case 'Produit habituel': return '#fff0a3'
			case 'Produit inhabituel': return '#BBD6FE'
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
		.on('mouseover', tip1.show)
        .on('mouseout', tip1.hide)
        .call(tip1);

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
		.attr('height', RECT_WIDTH - 3)
		.attr('fill', color)
		.attr('rx', 4)

	// les noms des légendes
	legend.selectAll('text')
		.data(pieData)
		.enter()
		.append('text')
		.attr('x', RECT_WIDTH * 1.5)
		.attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
		.attr('width', RECT_WIDTH)
		.attr('height', RECT_WIDTH)
		.text(d => d.data.type)

/*********** Informations textuelles ***********/
	jquery("#pates").text(pates(dataProduits))
	jquery("#coca").text(coca(dataProduits))

}


