//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let pares = 0
let impares = 0

const intVector = [3, 5, 6, 8, 10, 12, 11, 15, 325, 124]

for(i in intVector){
    if(intVector[i]%2 == 0)
        pares++
    else    
        impares++
}

console.log(`Pares: ${pares} e Impares: ${impares}`)