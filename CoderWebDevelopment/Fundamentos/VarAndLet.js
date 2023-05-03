// a variavel var tem dois escopos possiveis, ela é "global" ou dentro de uma função
// Se dentro da função, só funfa dentro dela e depois some

var numero = 1
{
    var numero = 2
    console.log(numero) //2
}

console.log(numero) //2

//Let nao

let numero2 = 1
{
    let numero2 = 3
    console.log(numero2) //3
}

console.log(numero2) //1

//Var em loop
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log(i)

//let em loop
for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log(i) let em escopo só do for

const funcs = []

for (var j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(j)
    })
}

funcs[2]()//10
funcs[8]()//10 var nao tem escopo, altera sem dó e printa 10

const funcs2 = []

for (let j = 0; j < 10; j++){
    funcs2.push(function(){
        console.log(j)
    })
}

funcs2[2]()//2
funcs2[8]()//8