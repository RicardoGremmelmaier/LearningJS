const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil
}))

const ehFragil = p => p.fragil
const ehCaro = p => p.preco > 499

console.log(produtos.filter(ehCaro).filter(ehFragil))

//Implementando

Array.prototype.filter2() = function(callback){
    const out = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            out.push(this[i])
    }
    return out
}