/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisívelPorTres(dividendo){
    return (dividendo % 3 == 0)
}

console.log(divisívelPorTres(9))
console.log(divisívelPorTres(5))
console.log(divisívelPorTres(6))
console.log(divisívelPorTres(0))
console.log(divisívelPorTres(27))
console.log(divisívelPorTres(29))