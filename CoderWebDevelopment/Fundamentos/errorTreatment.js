function TratarErroELancar(erro){
    //throw new Error ('...')
    //throw 10
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        TratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {
    name: 'Roberto'
}
imprimirNomeGritado(obj)