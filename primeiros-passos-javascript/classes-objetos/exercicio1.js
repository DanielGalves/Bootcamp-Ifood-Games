class Carro{
    marca;
    cor;
    gastoMedio;

    constructor (marca,cor,gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
        
    calculaValorGasto(distancia,valorCombustivel){        
        console.log (`O valor gasto para realizar a viagem é R$ ` + ((distancia/this.gastoMedio)*valorCombustivel).toFixed(2));
    }

}
const distancia = 100;
const valorCombustivel = 5.50;


const carro1 = new Carro('Gol','Prata',14);

console.log(carro1);
carro1.calculaValorGasto(distancia,valorCombustivel);