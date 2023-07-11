//Crie uma funçao q gera uma copia um objeto e remove um certo atributo, ambos passados por parametro. A func deve retornar esse NOVO objeto com o atributo removido

function removerPropriedade (obj, attr){
    const novObj = Object.assign({}, obj)
    delete novObj[attr]
    return novObj
}

const obj = {a: 1, b: 2}

console.log(removerPropriedade(obj, 'a'))
console.log(Object.is(removerPropriedade(obj, 'a'), obj))

