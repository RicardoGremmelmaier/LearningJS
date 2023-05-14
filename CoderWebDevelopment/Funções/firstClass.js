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