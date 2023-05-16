/*  Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicaVetor(vetor, multiplo){
    let vetorFinal = vetor
    for(i in vetorFinal){
        vetorFinal[i] *= multiplo
    }
    return vetorFinal
}

function multiplicaVetor2(vetor,multiplo){
    let vetorFinal = vetor
    for(i in vetorFinal){
        if(vetorFinal[i] > 5)
            vetorFinal[i] *= 3
    }
    return vetorFinal
}

const vetor = [4, 2, 1, 7, -6, 10]

console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetor2(vetor, 3))