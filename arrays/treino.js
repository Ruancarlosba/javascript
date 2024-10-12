const arr = ["maça", "banana","banana", "Uva"]

let multi = arr.reduce(function(acumulador, fruta, indiceAtual, ArrayOriginal){
     acumulador[fruta] = (acumulador[fruta] || 0) + 1
    return acumulador
}, {})

console.log(multi)