// String pode ser delimitada por '' ou "" (tem tambem template string)

const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // nao gera erro, linguagem felizzz
console.log(escola.charCodeAt(5)) // nao gera erro, linguagem felizzz
console.log(escola.indexOf('d'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

//template string

const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

