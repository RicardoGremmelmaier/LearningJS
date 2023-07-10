//Func q recebe a quantidade de horas trabalhadas mensais e quanto recebe por hora, retorno deve ser igual a "Salário igual a R$ " e o salario

function calcularSalario(horas, valorHora){
    const salario = valorHora * horas
    return `Salário igual a R$${salario.toFixed(2)}`
}

console.log(calcularSalario(150, 40.5))