//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 
//os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.

function resolveBhaskara(a,b,c){
    if(a == 0)
        return "a não pode ser zero"
    delta = Math.sqrt( Math.pow(b,2) - (4 * a * c))
    if(delta > 0)
        return [(-b+delta)/(2*a), (-b-delta)/(2*a)]
    else if(delta == 0)
        return [(-b+delta)/(2*a), (-b-delta)/(2*a)]
    else 
        return "Delta negativo, solução imaginária"
}

console.log(resolveBhaskara(3,-5,-12))