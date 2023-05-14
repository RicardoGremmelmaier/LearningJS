function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome = 'Nao registrado', preco = 'Sem preço'){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Celular', 1199.49))

//Classe vs factory

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log("Meu nome é " + this.nome)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const novaPessoa = nome => {
    return {
        falar: () => console.log('Meu nome é ' + nome)
    }
}

const p2 = novaPessoa('João')
p2.falar()