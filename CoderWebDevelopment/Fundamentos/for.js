let contador = 1

while(contador <= 10){
    console.log(contador)
    contador++
}

for(let i = 0; i <= 10; i++){
    console.log(i)
}

const notas = [6.7, 7.4, 9.8, 8.1, 4.5]
for (let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 45
}

for(let atributo in pessoa){
    console.log(atributo + ' = ' + pessoa[atributo])
}