// Faça um algoritmo que calcule o fatorial de um número.

function factorial(num){
    let fatorial = 1
    for (let i = 0; i < num; i++)
        fatorial*=i+1
    return fatorial
}

console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(2))
console.log(factorial(6))