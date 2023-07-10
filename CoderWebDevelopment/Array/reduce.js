const alunos = [
    {nome: 'Joao', nota: 7.7, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: true},
    {nome: 'Maria', nota: 8.1, bolsista: false},
    {nome: 'Pedro', nota: 9.2, bolsista: false}
]

const resultado = (alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador + atual)
    return acumulador + atual
})) //adicionei um valor inicial


//desafio: tdos os alunos sao bolsistas?
const todosBolsistas = function (resultado, bolsista){
        return resultado && bolsista
} 

const desafio1 = (alunos.map(a => a.bolsista).reduce(todosBolsistas))
console.log(desafio1)

//desafio: algum aluno é bolsista?
const temBolsistas = function (resultado, bolsista){
    return resultado || bolsista
} 

const desafio2 = (alunos.map(a => a.bolsista).reduce(temBolsistas))
console.log(desafio2)

//Implementando

Array.prototype.reduce2 = function(callback){
    let acumulador = 0
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}