/* ponteiros existem, passar obj por associação é dada o end de memoria dele
*  ja ao associar valores primitivos, de uma var pra outra, é copiada o valor e atribuido
*/
let valor
console.log(valor) // undefined, não inicializada

valor = null // ausência de valor, inicializada
console.log(valor)
//console.log(valor.toString()) acessar um toString de algo nao existe, gera erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar
console.log(!!produto.preco)
//delete produto.preco caso queira deletar, e nao undefined
console.log(preco)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)