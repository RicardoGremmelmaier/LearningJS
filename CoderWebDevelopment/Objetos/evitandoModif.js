// Object.preventExtensions previne que aumente a quantidade de attbutos, pode diminuir ou alterar existentes

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal nao adiciona nem exclui, mas altera
const pessoa = {nome: 'Julia', idade: 18}
Object.seal(pessoa)

pessoa.nome = 'Ricardo'
delete pessoa.nome
pessoa.idade = 22
console.log(pessoa)

// Freeze é o selado sem alteração