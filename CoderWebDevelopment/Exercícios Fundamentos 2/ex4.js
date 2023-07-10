//Func q recebe um booleano ou numerico, se for boolean, retorna o valor inverso. Se for numerico, vai o valor com sinal oposto. Se nao for nenhum dos dois, retorna "parametro xxx nao suportado"

function inverso(param){
    if(typeof param == 'boolean')
        return !param
    else if (typeof(param) == 'number')
        return param * -1
    else 
        return (`Parametro ${typeof param} não suportado`)
}

console.log(inverso(true))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso('programacao'))