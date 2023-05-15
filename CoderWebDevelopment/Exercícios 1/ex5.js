// Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function normaliza(valor){
    valorFinal = valor.toFixed(2)
    valorFinal = valorFinal.replace('.', ',')
    return "R$ " + valorFinal
}

console.log(normaliza(0.30000000004))
console.log(normaliza(0.00000030000))
console.log(normaliza(0.05000000000))
console.log(normaliza(10.0400000000))
console.log(normaliza(10.0400000000))