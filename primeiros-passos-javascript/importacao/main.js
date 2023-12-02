const {gets, print } = require('./funcoes-auxiliares');

const quandtidadeDeAlunos = gets()
const numerosSorteados = [];
let maiorValor=0;

for( let i =0; i< quandtidadeDeAlunos; i++){
    
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}


print(maiorValor);