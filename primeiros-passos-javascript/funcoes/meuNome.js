function escrevaNome(nome){
    return nome;
};

function verificaIdade(idade){
    if(idade < 18){
        return 'Menor de idade';
    }else {
        return 'Maior de idade';
    }
};


(function (){
    const nome = 'Daniel';
    const idade = 17;
    console.log("Meu nome é " + escrevaNome(nome) +
                "\nVocê é " + verificaIdade(idade)   );
})();
