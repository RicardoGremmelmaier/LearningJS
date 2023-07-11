//uma func q recebe array de numeros e retorna um array que tenha todos os valores par de indice par no primeiro array

function paresDeIndicePar(arr){
    return arr.filter((elemento, indice) => elemento % 2 === 0 && indice % 2 === 0)
}

console.log(paresDeIndicePar([1,2,3,4]))
console.log(paresDeIndicePar([10,70,22,43]))