/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function progressãoAritmetica(n, a1, r){
    let somatorio = 0
    let termoAtual = a1
    for (let i = 0; i < n; i++){
        console.log(termoAtual)
        somatorio += termoAtual
        termoAtual += r
    }
    console.log(somatorio)
}

function progressãoGeometrica(n, a1, r){
    let somatorio = 0
    let termoAtual = a1
    for (let i = 0; i < n; i++){
        console.log(termoAtual)
        somatorio += termoAtual
        termoAtual *= r
    }
    console.log(somatorio)
}

progressãoAritmetica(5, 0, 2)
progressãoGeometrica(5, 1, 2)
