const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log("Nome: " + nome + ", Indice: " + (indice+1))
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem call back

const notasBaixas =[]
for(let i in notas)
    if(notas[i] < 7)
        notasBaixas.push(notas[i])

console.log(notasBaixas)

//Com call back

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)