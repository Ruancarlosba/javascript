function Cachorro(name) {
    let posicao = 0
    this.name = name

    this.latir  = function() {
        console.log(this.name,"está latindo")

    this.andar = function(distancia) {
        posicao += distancia
        console.log(this.name, "andou", distancia, "m")
        console.log("A posiçao atual é",  posicao)
    }    
    }

}

const rex = new Cachorro("rex")
const toto = new Cachorro("toto")

rex.latir()