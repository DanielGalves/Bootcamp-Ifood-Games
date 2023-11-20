class Pessoa{
    nome;
    idade;
    anodeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anodeNascimento = 2023 - idade;
    }

    descrever(){
       console.log(`Meu nome é  ${this.nome} e tenho  ${this.idade} anos`); 

    }
}

const daniel = new Pessoa('Daniel', 40);
const alice = new Pessoa('Alice', 10);


daniel.descrever();
alice.descrever();
console.log(daniel);
console.log(alice);