const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.2
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 10
    }, {
        nome: 'Roberto',
        nota: 7.4
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
const notas2 = escola.flatMap(getNotaTurma)
console.log(notas1)
console.log(notas2)

//Flatmap nada mais é do que a concatenação
