const pessoa ={
    genero: 'masculino'
}

const daniel = {
    nome: 'Daniel',
    idade: 40,
    __proto__: pessoa
}

console.log(daniel.genero);
