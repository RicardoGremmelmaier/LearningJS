//func q recebe um obj e retorne array de arrays, pra cada atributo e seu valor

function objParaArray(obj){
    return Object.entries(obj)
}

console.log(objParaArray({a: 1, b: 2, c: 3}))