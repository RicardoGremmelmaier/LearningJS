//func q recebe um array de obj e retorna o total das despesas desses produtos

function despesasTotais(arrObj){
    return arrObj.map(obj => obj.preco).reduce((acumulador, atual) => acumulador + atual)
}

console.log(despesasTotais([
    {nome: 'Jornal', categoria: 'informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'entretenimento', preco: 150}  
]))