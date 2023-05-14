function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log("O numero gerado foi: " + opcao)
}
console.log('Parte 2')
opcao = -1
do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log("O numero gerado foi: " + opcao)
} while(opcao != -1)