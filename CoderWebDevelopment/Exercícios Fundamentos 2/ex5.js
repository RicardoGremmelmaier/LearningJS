//func q recebe dois param, o primeiro que repetira, o segundo a quantidade de vezes que vai repetir, retornando o array

function repetir(elem, repeticoes) {
    if (repeticoes < 0)
        return 'Numero de repetições nao suportado'
    else{
        const arrayFinal = []
        for(let i = 0; i < repeticoes; i++)
            arrayFinal.push(elem)
        return arrayFinal
    }
}

console.log(repetir('codigo', 2))
console.log(repetir(7, 3))