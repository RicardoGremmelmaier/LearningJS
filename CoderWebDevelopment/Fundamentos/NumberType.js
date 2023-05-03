const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 7.651;
const media = (avaliacao1 + avaliacao2)/2;

console.log(media.toFixed(2));
console.log(media.toString(2)); //Em binario
console.log(typeof media);
console.log(typeof Number); //função, diferente da tipagem

//Alguns cuidados
console.log(7/0); //pegou o limite
console.log("10"/2); //verifcou se dava pra transformar em numero e da
console.log("Show"*2)// NAN
console.log(0.1 + 0.7) // 0.79999999
//console.log(10.toString())
console.log((10.345).toFixed(2)) // nao da pra chamar literal, mas em parenteses pode

// Js tem a classe math (objeto quando instanciado)

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(2))