//JSON é formato de dados, e não um objeto, é um formato textual, simples e usado parar ler em qualquer linguagem

const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1 , "b": 2, "c": 3}'))//Da pra colocar array, obj, string dentro de aspas, etc