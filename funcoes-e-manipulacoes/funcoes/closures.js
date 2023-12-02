
/*
function soma(x){
    return function(y){
        return x + y;
    }
}
*/


function soma(x){
    return (y) => {
        return x+y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))