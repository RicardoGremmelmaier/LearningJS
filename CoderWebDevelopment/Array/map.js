//Serve para mapear e criar um novo array baseado no primeiro, de mesmo tamanho

const nums = [1,2,3,4,5]

//For com propósito

let resultado = nums.map(function(e){
    return e*2 
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const parseReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(parseReal)

console.log(resultado)

const carrinho = [
    '{"nome": "Carrinho", "preco": 5.50}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//retornar array só com preços
const retornarPreco = prod => prod.preco
const paraObj = json => JSON.parse(json)

const precos = carrinho.map(paraObj).map(retornarPreco)

console.log(precos)