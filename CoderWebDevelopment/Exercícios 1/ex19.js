/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function lanchonete(codigo, quantidade){
    switch(codigo){
        case(100):
            return 'R$'+(quantidade * 3)
        case(200):
            return 'R$'+(quantidade * 4)
        case(300):
            return 'R$'+(quantidade * 5.5)
        case(400):
            return 'R$'+(quantidade * 7.5)
        case(500):
            return 'R$'+(quantidade * 3.5)
        case(600):
            return 'R$'+(quantidade * 2.8)
        default:
            return 'Código não válido'
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))
console.log(lanchonete(700, 2))