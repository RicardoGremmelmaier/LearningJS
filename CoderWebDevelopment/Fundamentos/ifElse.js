function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})

function teste1(num){
    if(num > 7)
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if (num > 7); { //cuidado com ;
        console.log(num)
    }
}

teste2(6)
teste2(8)

const imprimirResultado = function(nota) {
    if (nota >= 7)
        console.log('Aprovado')
    else
        console.log('Reprovado')
}

imprimirResultado(10)
imprimirResultado(4)//cuidado com valores nao numericos

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado2 = function(nota) {
    if (nota.entre(9,10))
        console.log('Aluno de honra')
    else if (nota.entre(7,8.99))
        console.log('Aprovado')
    else if (nota.entre(4, 6.99))
        console.log('Recuperação')
    else if (nota.entre(4, 6.99))
        console.log('Reprovado')
    else    
        console.log('Nota inválida')
}

imprimirResultado2(10)
imprimirResultado2(6.55)
imprimirResultado2(8.9)
imprimirResultado2(4)
imprimirResultado2(-1)