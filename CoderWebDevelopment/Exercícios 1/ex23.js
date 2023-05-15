/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPonderada(codigo, p1, p2, p3){
    media = (p1*4 + p2*3 + p3*3)/10
    if(media > 4)
        console.log(`Código: ${codigo} e suas notas foram: ${p1},${p2},${p3}, sua média é: ${media}. APROVADO`)
    else if(media < 4)
        console.log(`Código: ${codigo} e suas notas foram: ${p1},${p2},${p3}, sua média é: ${media}. REPROVADO`)
}

let codigo = parseInt(Math.random() * 125 - 25)
let n1 = parseInt(Math.random() * 10)
let n2 = parseInt(Math.random() * 10)
let n3 = parseInt(Math.random() * 10)
while(codigo > 0){
     mediaPonderada(codigo, n1, n2, n3)
     codigo = parseInt(Math.random() * 125 - 25)
     n1 = parseInt(Math.random() * 10)
     n2 = parseInt(Math.random() * 10)
     n3 = parseInt(Math.random() * 10)
}
console.log('Código negativo ' + codigo)