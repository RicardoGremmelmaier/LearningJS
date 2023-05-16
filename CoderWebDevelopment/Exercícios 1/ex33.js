/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console */

const vetorString = ['abc', 'def', 'ghi']
const vetorInt = [1,2,3]
const vetorDouble = [0.5, 1.5, 2.5]

const vetorResultado1 = vetorInt.concat(vetorString)
const vetorResultado2 = vetorInt.concat(vetorDouble)

console.log(vetorResultado1)
console.log(vetorResultado2)
