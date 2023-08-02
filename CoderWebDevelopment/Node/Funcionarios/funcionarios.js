const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = func => func.genero === 'F'
const chineses = func => func.pais === 'China'
const menorSalario = function (func, atualFunc){
    return func.salario < atualFunc.salario ? func : atualFunc
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const desafio = funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario) 
    console.log(desafio)
})