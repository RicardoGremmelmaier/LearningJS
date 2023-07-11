//func q recebe um obj como param e retorna o obj invertido, com as keys no lugar dos values e vice versa

function inverter(obj){
    const objInvertido = {}
    Object.entries(obj).forEach(function([key, value]) {
        objInvertido[value] = key})
    return objInvertido
}

console.log(inverter({a: 1, b: 2, c: 3}))