 
 const ferrari = {
    modelo: 'F40',
    velMax: 340
 }

 const volvo = {
    modelo: 'V40',
    status(){
      return `${this.modelo}: ${super.status}`
    }
 }

 console.log(ferrari.__proto__)
 console.log(ferrari.__proto__ === Object.prototype)
 console.log(volvo.__proto__ === Object.prototype)
 console.log(Object.prototype.__proto__)

 //Cadeia de prototipos
 Object.prototype.attr0 = '0'
 const avo = {attr1: 'A'}
 const pai = {__proto__: avo, attr2: 'B'}
 const filho = {__proto__: pai, attr3: 'C'}
 console.log(filho.attr1)
 console.log(filho.attr0)

 const carro = {
   velAtual: 0,
   velMax: 200,
   acelerarMais(delta){
      if(this.velAtual + delta <= this.velMax)
         this.velAtual += delta
      else
         this.velAtual = this.velMax
   },
   status(){
      return `${this.velAtual}Km/h de ${this.velMax}`
   }
 }

 //Usando a ferrari,ela da shadowing na velMax do obj carro, similar com status de volvo

 Object.setPrototypeOf(ferrari, carro)
 Object.setPrototypeOf(volvo, carro)

 console.log(ferrari)
 console.log(volvo)

 volvo.acelerarMais(100)
 console.log(volvo.status())

 ferrari.acelerarMais(300)
 console.log(ferrari.status())

 const pai2 = {nome: 'Pedro', corCabelo: 'preto'}

 const filha1 = Object.create(pai2)
 filha1.nome = 'Ana'
 console.log(filha1.corCabelo)

 const filha2 = Object.create(pai2, {
   nome: {value: 'Bia', writable: false, enumerable: true}
 })

 console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
   filha2.hasOwnProperty(key) ?
      console.log(key) : console.log('Por herança: ' + key)
}
