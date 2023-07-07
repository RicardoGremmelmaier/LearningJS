//Similar a muitas linguagens

//podemos usar push pra adicionar ao vetor, delete pra remover no certo indice, sort altera o proprio vetor
//o splice corta e remove a partir de dois indices, tambem podendo adicionar indices, ou apenas adicionar se o segundo indice for zero

const aprovados = []

aprovados.push('Julia')
aprovados.push('Jeca')
aprovados.push('Jao')
aprovados.push('Jeronimo')

console.log(aprovados)

delete aprovados[1]

console.log(aprovados)

aprovados.sort()

console.log(aprovados)

aprovados.splice(1,2, 'Ricardo', 'Julia')

console.log(aprovados)

//similar a pilhas, temos o pop e o push, que remove o ultimo e adiciona ao ultimo index e temos tambem o shift, que remove o primeiro e muda as posições e o unshift, que coloca na primeira pos e rearranja

aprovados.pop()
aprovados.shift()
aprovados.unshift('Luiz')

console.log(aprovados)

//Tem tambem o slice, que retorna o novo vetor a partir do indice ate o indice anterior ao colocado

const poucosAprovados = aprovados.slice(2,4) // pega ate o 3