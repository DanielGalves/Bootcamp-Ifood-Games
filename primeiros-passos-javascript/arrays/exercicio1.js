
function imprimeTabuada(numero){
    for(let i = 0; i < 11; i++){
        const resultado = i*numero;
        console.log(`${i} X ${numero} = ${resultado}`);
    }
}

const numero = 1;

console.log(imprimeTabuada(numero));