//Função que recebe idade em anos e retorna em dias, desconsiderand dias bissextos e dias decorridos apos o ultimo aniversario

function converterAnosParaDias (anos){
    return anos*365 
}

console.log(converterAnosParaDias(25))
console.log(converterAnosParaDias(70))