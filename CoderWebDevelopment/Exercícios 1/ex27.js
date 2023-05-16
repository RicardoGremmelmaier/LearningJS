 /* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function vaiPassar(altura1, cresc1, altura2, cresc2){
    let ano = 0
    let crianca1= altura1
    let crianca2 = altura2
    if(crianca1 > crianca2){
        
        while(crianca2 < crianca1 && ano < 100){
            crianca1 += crianca1*cresc1
            crianca2 += crianca2*cresc2
            ano++
        }

        if(crianca2 > crianca1)
            return 'A criança2 ultrapassará a criança1 em ' + ano + ' ano(s)'
        return 'A criança2 não ultrapassará a criança1'

    }else if(crianca2 > crianca1){
        
        while(crianca1 < crianca2 && ano < 100){
            crianca1 += crianca1*cresc1
            crianca2 += crianca2*cresc2
            ano++
        }

        if(crianca1 > crianca2)
            return 'A criança1 ultrapassará a criança2 em ' + ano + 'ano(s)'
        return 'A criança1 não ultrapassará a criança2'
    }
}

console.log(vaiPassar(160, 0, 159, 0.1))
console.log(vaiPassar(160, 0.2, 159, 0.1))
console.log(vaiPassar(159, 0, 160, 0.1))
console.log(vaiPassar(159, 0.2, 160, 0.1))