//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const notas = [6, 7, 8.5, 9, 10]
let somatorio = 0

for(let i = 0; i < notas.length; i++){
    somatorio += notas[i]
}

let media = (somatorio/notas.length).toFixed(2)

console.log(`A média é ${media}`)