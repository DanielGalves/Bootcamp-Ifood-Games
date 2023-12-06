const fs = require('fs')

const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1)) 
    .then((linhasSemoCabecalho) => linhasSemoCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito === 'true'
        }
    }))
    .then((listadeTarefas) => console.log(listadeTarefas))   
    .catch((error) => console.log('Deu ruim!',error))

   console.log(promessaDaLeituraDoArquivo)