//função é first class object (citizens)
// High order function

//Criar de forma literal
function fun1(){}

//Armazenar em variavel
const fun2 = function(){}

//Armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

//Passar func como param
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma func pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

//Parametros variaveis
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))

//Parametro padrao
//strat 1 valor padrao
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(1), soma1(3), soma1(1,2,3), soma1(0,0,0))

//strat 2, 3, 4
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrao
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))