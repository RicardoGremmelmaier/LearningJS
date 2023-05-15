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