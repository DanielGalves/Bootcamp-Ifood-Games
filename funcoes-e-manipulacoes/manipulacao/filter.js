

const lista = [1,2,3,4,5,6,7,8,9,10];


// o forEach mostra um valor por vez
const listaDeParesForEach = lista.forEach((value) => {
    return(value % 2 === 0)
})

//com o filter e retornado nova lista
const listaDeParesFilter = lista.filter((value) =>{
    return (value % 2 === 0)
})

console.log(listaDeParesForEach)
console.log(listaDeParesFilter)


