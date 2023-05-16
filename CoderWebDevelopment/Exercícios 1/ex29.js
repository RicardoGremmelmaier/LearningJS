/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function inInterval(vetor){
    let noIntervalo = 0
    for(i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20)
            noIntervalo++
    }
    let foraDoIntervalo = vetor.length - noIntervalo

    console.log(`No intervalo: ${noIntervalo} e Fora do intervalo: ${foraDoIntervalo}`)
}

inInterval([1,4,6,10,15,19,20,21,23])