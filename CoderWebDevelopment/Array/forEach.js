const aprovados = ['Jao', 'Pimposo', 'Daniel', 'Rafael']

//A func callback recebe 3 parametros, o nome, o indice e o array 
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//Tambem é possivel usar arrow func ou usar uma const func pra isso

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)