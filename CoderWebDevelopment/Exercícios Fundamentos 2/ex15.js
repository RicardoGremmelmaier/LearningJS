//func q recebe uma string e retorna quantas palavras tem, separadas por espaço

function contarPalavras(string){
    return string.split(' ').length
}

console.log(contarPalavras('Sou uma frase'))