//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capIni, juros, tempo){
    let montante = capIni
    const adicional = capIni*juros
    
    for(let i = 0; i < tempo; i++){
        montante += adicional
    }

    return montante
}

function jurosCompostos(capIni, juros, tempo){
    let montante = capIni
    let adicional = capIni*juros
    
    for(let i = 0; i < tempo; i++){ 
        montante += adicional
        adicional = montante*juros
    }

    return montante.toFixed(2)
}

console.log(jurosSimples(10000, 0.01, 6))
console.log(jurosCompostos(10000, 0.01, 6))