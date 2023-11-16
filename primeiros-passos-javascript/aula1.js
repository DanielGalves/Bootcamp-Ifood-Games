var gasolina = 5.79;
var kmPorLitros = 14;
var distancia = 1000;

var valorGasto = (distancia/kmPorLitros) * gasolina;
console.log('R$' + valorGasto.toFixed(2));