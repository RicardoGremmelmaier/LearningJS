// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.

const vetorInt = [10, 0, 12, 15, -1, -20, -100]
let negativos = 0

for (i in vetorInt){
    if(vetorInt[i] < 0)
        negativos++
}

console.log(`A quantidade de negativos é ${negativos}`)