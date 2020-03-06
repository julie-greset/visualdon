import * as d3 from 'd3';

export default [
    {"genre": "trap", "nb": 1},
    {"genre": "rap", "nb": 4},
    {"genre": "reggaeton","nb": 4},
    {"genre": "hip hop", "nb": 4},
    {"genre": "boy band", "nb": 1},
    {"genre": "r&b", "nb": 1},
    {"genre": "latin", "nb": 5},
    {"genre": "brostep", "nb": 2},
    {"genre": "edm", "nb": 3},
    {"genre": "pop", "nb": 25}
].slice().sort((a, b) => d3.ascending(a.nb, b.nb)) 