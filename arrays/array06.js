// método reverse
let arr = [1, 2, 3]
console.log(arr.reverse())

// método reduce

console.log("---------------reduce-------------------------------")

let soma = arr.reduce(function(acumulador, atual,indice,_arr){
    return acumulador + atual
})

console.log(soma)
console.log(arr)

console.log("------------- Outro exemplo com reduce------------")

const nomes = ["Daniel", "Maria", "Joaõ", "Joana"]

let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){

    let primeiraLetra = nomeAtual[0]

    if(nomes[primeiraLetra]) {

        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }

    return nomes
}, {})

console.log(nomesPorOrdem)