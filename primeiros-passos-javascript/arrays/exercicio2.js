

const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i =0; i < numeros.length; i++){
    const par = (numeros[i] % 2) === 0;
    if(par){
        console.log(numeros[i]);
    }
}