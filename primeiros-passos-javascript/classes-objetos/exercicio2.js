class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso /Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            console.log('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
           console.log('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            console.log('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            console.log('Obeso');
        } else {
            console.log('Obesidade Grave');
        }
    
    }

}

const pessoa = new Pessoa('José', 70, 1.75);

console.log(pessoa);
pessoa.classificarImc();