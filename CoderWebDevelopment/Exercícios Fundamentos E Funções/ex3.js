//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponencial(base, exp){
    if(exp < 0)
        return 'Não pode elevar exp negativo'
    else if (exp == 0)
        return 1
    else{
        resultado = 1
        for(let i = 0; i < exp; i++)
            resultado *= base
        return resultado
    }
}

console.log(exponencial(2,3))
console.log(exponencial(2,0))
console.log(exponencial(0,3))
console.log(exponencial(2,-1))
console.log(exponencial(-2,2))
console.log(exponencial(3,4))