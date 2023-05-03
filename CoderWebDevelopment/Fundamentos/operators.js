//Atribuição

const a = 7
let b = 3

b += a
b -= 4
b *= 2
b /= 2
b %= 2

//Destructuring

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Em array
const [d] = [10]
console.log(d)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8 ,8], [9, 6, 8]]
console.log(nota)

//Em funções
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))

function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand2([50,40]))

//Aritméticos
const [j, k, l, m] = [3, 5, 1, 15]

const soma = j + k + l + m
const subtracao2 = l - k
const multiplicacao = j * k
const divisao = j/k
const modulo = m % 2

console.log(soma,subtracao2,multiplicacao,divisao,modulo)

//Relacionais

console.log('1' == 1)
console.log('1' === 1)
console.log('3' != 3)
console.log('3' !== 3)
console.log(3 < 2)
console.log(3 > 2)
console.log(3 >= 2)
console.log(3 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 == d2)
console.log(d1 === d2)
console.log(d1.getTime() === d2.getTime())

console.log(undefined == null)
console.log(undefined === null)

//Lógicos

function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprar50Pol = trab1 && trab2
    const comprar32Pol = trab1 != trab2 
    //const comprar32Pol = !!(trab1 ^ trab2) bitwise xor
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprar50Pol, comprar32Pol, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

//Unários
let num1 = 1
let num2 = 2

num1++
--num1

console.log(++num1 === num2--)

//Ternarios
const resultado = nota => nota >= 7 ? 'Passou' : 'Reprovou'

console.log(resultado(7.1))
console.log(resultado(6))
