function Animal(tipo) {
    this.tipo = tipo
} 

Animal.prototype.obterTipo = function(){
    return this.tipo
}

let cachorro = new Animal("mamifero")
let cat = new Animal("mamifero")
let snake = new Animal("reptil")