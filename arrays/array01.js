const arr = [1, 5, 10, "ola", true]

let shNumeros = arr.some(function(el){
   
    return typeof el === "number" && el > 20
})

console.log(shNumeros)