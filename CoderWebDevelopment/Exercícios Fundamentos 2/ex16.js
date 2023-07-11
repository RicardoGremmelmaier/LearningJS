//func q recebe uma palavra e um array de palavras, devera filtrar as palavras que contem a string do primeiro param

function buscarPalavrasSemelhantes(palavra, array){
    return array.filter(word => word.includes(palavra))
}

console.log(buscarPalavrasSemelhantes('pro', ['programacao','java', 'profissional']))