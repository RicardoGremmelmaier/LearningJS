 function Carro (velMax = 200, acc = 5){
    //atributo prvado por causa do let
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + acc <= velMax)
            velocidadeAtual += acc
        else    
            velocidadeAtual = velMax
    } 

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
     }
}



 const uno = new Carro()
 uno.acelerar()
 console.log(uno.getVelocidadeAtual())

 const ferrari = new Carro(350,20)
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.getVelocidadeAtual())