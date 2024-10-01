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
