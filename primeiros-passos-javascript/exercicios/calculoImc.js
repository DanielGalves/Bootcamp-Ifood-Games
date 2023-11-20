function calculoImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        console.log('Obeso');
    } else {
        return 'Obesidade Grave';
    }

}

function main() {
    const altura = 1.65;
    const peso = 70;

    var imc = calculoImc(peso, altura);
    console.log(classificarImc(imc));
}

main();