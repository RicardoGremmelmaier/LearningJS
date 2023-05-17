/* Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function atualizaSalario(plano, salarioAtual){
    switch(plano){
        case('A'):
            console.log('Seu salário atual é de ' + salarioAtual + ' e o salário final, com o seu plano A, será de ' + (salarioAtual + salarioAtual*0.1))
            break
        case('B'):
            console.log('Seu salário atual é de ' + salarioAtual + ' e o salário final, com o seu plano B, será de ' + (salarioAtual + salarioAtual*0.15))
            break
        case('C'):
            console.log('Seu salário atual é de ' + salarioAtual + ' e o salário final, com o seu plano C, será de ' + (salarioAtual + salarioAtual*0.2))
            break
        default: 
            console.log('Plano inválido')
    }
}

atualizaSalario('A', 1200)
atualizaSalario('B', 1500)
atualizaSalario('C', 1000)