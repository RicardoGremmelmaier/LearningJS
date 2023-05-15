/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function classificaDia(dia){
    switch(dia%7){
        case 0:
        case 1:
            console.log('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia de semana')
            break
        default:
            console.log('Dia inválido')
    }
}

classificaDia(8)
classificaDia(14)
classificaDia(15)
classificaDia(4)
classificaDia(31)
classificaDia(0)
classificaDia(1)