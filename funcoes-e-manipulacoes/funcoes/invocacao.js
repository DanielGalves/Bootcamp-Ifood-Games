
const pessoa = {
    nome: 'Messi',
    idade: 36
}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}


function teste(){
    console.log('Teste');
}




//forma direta
teste()

//apply
gritar.apply(pessoa, [' é um jogador']);

//call
gritar.call(pessoa, 'quem é ');


