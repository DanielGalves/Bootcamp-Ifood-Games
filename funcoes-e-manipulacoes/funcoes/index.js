 // formas de declarar funções

 //literal
  function formaLiteral(){
    console.log(this);
  }

  //forma Expression
  const formaExpression = function(){
    console.log('Forma Expression');
  }

  //Arrow function
  const arrowFunction = () => {
    console.log(this)
  }

  const pessoa = {
    nome: 'Matusalem',
    formaLiteral,
    arrowFunction
  }

  pessoa.formaLiteral();
  pessoa.arrowFunction();


  