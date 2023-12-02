
class Pessoa{
    constructor(name,idade){
        this.name = name,
        this.idade = idade

    }
}



const lista = [1,2,3,4,5,6,7,8,9,10];


console.log(lista.join('*'));


const listaNomes = [new Pessoa('Airton',20),new Pessoa('Bueno',30),new Pessoa('Claudio',15),new Pessoa('Victor',22),new Pessoa('Jonatas',19)]

console.log(listaNomes
    .filter((elemento) => (elemento.name.startsWith('B')))
    .map( elemento => `${elemento.name}`)
    .join('-'))