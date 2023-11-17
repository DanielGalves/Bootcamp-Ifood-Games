
const nota1 = 6;
const nota2 = 7;
const nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Aluno Reprovado!');
} else if (media >= 5 && media < 7) {
    console.log('Aluno está de Recuperação!');
} else {
    console.log('Aluno Aprovado!');
}