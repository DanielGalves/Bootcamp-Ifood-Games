var gasolina = 5.79;
var etanol = 3.65;
var kmPorLitros = 14;
var distancia = 1000;
var tipoCombustivel = 'gasolina';

var valorGasto = (distancia / kmPorLitros) * gasolina;

if (tipoCombustivel === 'gasolina') {
    var valorGasto = (distancia / kmPorLitros) * gasolina;
    console.log('R$' + valorGasto.toFixed(2));
} else if (tipoCombustivel === 'etanol') {
    var valorGasto = (distancia / kmPorLitros) * etanol;
    console.log('R$' + valorGasto.toFixed(2));
} else {
    console.log('Combustível inválido');
}