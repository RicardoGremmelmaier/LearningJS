/* Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

function comparaRecordes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(' ')
    let recordeNovo = 0
    let piorJogo = 0
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 0; i < pontuacoes.length; i++){
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            recordeNovo++
        }else if(parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1    
        }
    }

    return [recordeNovo, piorJogo]
}

console.log(comparaRecordes("30 40 20 4 51 25 42 38 56 0"))
