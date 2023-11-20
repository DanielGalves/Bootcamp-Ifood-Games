class Pessoa{
    nome;
    idade;

    descrever(){
       console.log(`Meu nome é  ${this.nome} e tenho  ${this.idade} anos`); 

    }
}

const daniel = new Pessoa();
daniel.nome = 'Daniel Gama Alves';
daniel.idade = 30;


const alice = new Pessoa()
alice.nome = 'Alice Moraes';
alice.idade = 10;


daniel.descrever();
alice.descrever();
