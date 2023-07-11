//func q recebe um array de num e retorna a media

function calculaMedia(arr){
    return arr.reduce((acumulador, atual) => acumulador + atual)/arr.length
}

console.log(calculaMedia([0,10]))
console.log(calculaMedia([1,2,3,4,5]))