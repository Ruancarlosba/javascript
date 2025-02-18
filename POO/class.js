function Animal(tipo) {
    this.tipo = tipo
} 

Animal.prototype.obterTipo = function(){
    return this.tipo
}

let cachorro = new Animal("mamifero")
let cat = new Animal("mamifero")
let snake = new Animal("reptil")


// versaõ atualizada
class Animalc{
    constructor(tipo) {
        this.tipo = tipo
    }

    obterTipo() {
        return this.tipo
    }
}


// versaõ atualizada
class GatoC extends Animalc {
    
    constructor(nome) {
        super("mamifero")
        this.nome = nome
    }
}


let animal = new Animalc("anfibio")
console.log(animal)

let mingal = new GatoC("mingal")
console.log(mingal)