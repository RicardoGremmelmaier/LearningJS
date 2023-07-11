//func q recebe array de num e soma todos os num

function somarNumeros(arr){
    return arr.reduce((acumulador, elemento) => acumulador + elemento)
}

console.log(somarNumeros([1,2,3,4]))
console.log(somarNumeros([10,10,10]))