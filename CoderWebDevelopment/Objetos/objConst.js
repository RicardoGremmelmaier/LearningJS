
const pessoa = {nome: "Joao"}
pessoa.nome = 'Pedro'

//vc altera o valor dentro do armazenamento de memoria, e nao o local 
//do armazenamento, assim é possivel alterar mesmo sendo const
//mas ao tentar alterar pra um novo objeto, da erro

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome) //Pedro, o freeze nao altera os dados mais do obj ate sair dele  
