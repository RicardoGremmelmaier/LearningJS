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
