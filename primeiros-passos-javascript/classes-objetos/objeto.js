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
const alice = new Pessoa('Alice', 40);


daniel.descrever();
alice.descrever();
console.log(daniel);
console.log(alice);

function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);

    }
}


compararIdade(daniel,alice);