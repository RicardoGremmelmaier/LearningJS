//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

const vetorInt = [4, 6, 100, -5, 124, 12341, -1000]

let maior = vetorInt[0]
let menor = vetorInt[0]

for(i in vetorInt){
    if(vetorInt[i] > maior)
        maior = vetorInt[i]
    else if(vetorInt[i] < menor)
        menor = vetorInt[i]
}

console.log(`O maior é ${maior} e o menor é ${menor}`)