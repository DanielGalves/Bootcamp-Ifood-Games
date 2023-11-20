

const pessoa = {
    nome: 'Daniel Gama Alves',
    idade: 40,
    descrever : function(){
       console.log(`Meu nome é  ${this.nome} e tenho  ${this.idade} anos`); 
    }
}


pessoa.altura = 1.65;


pessoa.descrever();