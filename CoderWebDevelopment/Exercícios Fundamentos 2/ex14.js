//func q retorna o menor valor num array de num

function menorNumero(arr){
    return arr.reduce((anterior, atual) => anterior > atual ? atual : anterior)
}

console.log(menorNumero([10,5,35,65]))