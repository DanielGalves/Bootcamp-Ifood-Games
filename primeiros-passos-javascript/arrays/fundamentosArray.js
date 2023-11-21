
function imprimirLetras(){
    
    const nome = 'Daniel Gama Alves';
    
    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i];
        console.log(letra);
        
    }
}

function adicionarNotas(){
    const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);
    notas.push(8);

    console.log(notas);
}

imprimirLetras();
adicionarNotas();