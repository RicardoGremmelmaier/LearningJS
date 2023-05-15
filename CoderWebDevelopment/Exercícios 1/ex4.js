// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores

function imprimirResultadoEResto(dividendo,divisor){
    console.log('Resultado: ' + (dividendo/divisor))
    console.log('Resto: ' + (dividendo%divisor))
}

imprimirResultadoEResto(4,2)
imprimirResultadoEResto(4,0)
imprimirResultadoEResto(0,4)
imprimirResultadoEResto(2,4)
imprimirResultadoEResto(10,30)