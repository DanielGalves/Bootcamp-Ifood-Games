function calcularQuantidadeDeLitros(distancia, kmPorLitros) {
    return distancia / kmPorLitros;
}

function calcularValorGasto(tipoCombustivel, distancia, kmPorLitros, gasolina, etanol) {
    var valorGasto = calcularQuantidadeDeLitros(distancia, kmPorLitros) * selecionarTipoCombustivel(tipoCombustivel, gasolina, etanol);
    return 'R$' + valorGasto.toFixed(2);
}

function selecionarTipoCombustivel(tipoCombustivel, gasolina, etanol) {
    if (tipoCombustivel === 'gasolina') {
        return gasolina;
    } else if (tipoCombustivel === 'etanol') {
        return etanol;
    } else {
        return 'Combustivel inválido';
    }
}
function main() {

    const gasolina = 5.79;
    const etanol = 3.65;
    const kmPorLitros = 14;
    const distancia = 1000;
    const tipoCombustivel = 'gasolina';
    const litrosPorKm = calcularQuantidadeDeLitros(distancia, kmPorLitros);
    console.log(calcularValorGasto(tipoCombustivel, distancia, kmPorLitros, gasolina, etanol));
}

main();