/*function somar(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total+= arr[i]
    }
    return total
}
console.log(somar([1, 2, 3]))*/

function somar() { //  Obs - o argument naõ funciona no Arrow functions

    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total+= arguments[i]
    }
    return total
}
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5))
console.log(somar(1, 2, 3, 4, 5, 12, 14, 50))

