//Crie func q recebe um array de elementos e retorne um array somente com numeros presentes no primeiro array

function filtrarNumeros(array){
    arrayNum = array.filter(a => typeof a === 'number')
    return arrayNum
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]))
console.log(filtrarNumeros(['a', 'c']))