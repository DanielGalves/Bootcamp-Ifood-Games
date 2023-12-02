

class Pessoa{
    constructor(name,idade){
        this.name = name,
        this.idade = idade

    }
}

const lista = [new Pessoa('Airton',20),new Pessoa('Bueno',30),new Pessoa('Claudio',15),new Pessoa('Victor',22),new Pessoa('Jonatas',19)]

console.log(lista);

// neste exemplo o map transforma uma lista de objetos em uma lista de string
const listaNomes = lista.map((element, i) => {
   return `${element.name} e o ${i} da lista e tem ${element.idade} anos`
})

console.log(listaNomes);