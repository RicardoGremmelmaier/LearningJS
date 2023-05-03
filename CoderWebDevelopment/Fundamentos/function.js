console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,11,23,23,44,45)
imprimirSoma()

//Função com retorno
function soma(a, b = 0){
    return a+b
}
console.log(soma(2,3))

//Armazenando uma fun em uma var

const imprimirSoma2 = function (a, b){
    console.log(a + b)
}
imprimirSoma2(2, 1)

//Armazenando função arrow em uma variavel
const soma2 = (a,b) => {
    return a + b
}
console.log(soma2(4,2))

//Retorno implicto
const subtracao = (a,b) => a-b
console.log(subtracao(8,3))