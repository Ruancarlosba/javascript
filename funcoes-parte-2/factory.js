/*Uma função fábrica em JavaScript serve para criar e retornar objetos personalizados. Ela permite criar múltiplas instâncias de objetos com propriedades e comportamentos definidos, sem a necessidade de usar classes ou construtores. É uma maneira prática de gerar objetos de forma reutilizável e flexível. */

function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, "está latindo")
        },
        andar(distancia) {
            posicao+=distancia
            console.log(this.name, "andou", distancia, "m")
        },
        comer() {},

        pegaposicao() {
            return posicao
        }
    }
}

const rex = criarCachorro("rex")
rex.andar(10)
rex.andar(5)
console.log(rex.pegaposicao())


const toto = criarCachorro("toto")
toto.andar(20)
toto.andar(-3)
console.log(toto.pegaposicao())