const arr = [1, 5, 10, "ola", true]



/*some() - */

/*let some_Numeros = arr.some(function(el){
   
    return typeof el === "number" && el > 20
})

console.log(some_Numeros)*/

/*every() - */

/*let every_Numeros = arr.every(function(el){

    return typeof el === "number"
})

console.log(every_Numeros)*/

/*filter() - */

 let arr1 = arr.filter(function(elemento,indice,_arr){
   
    return typeof elemento === "number"
})

//console.log(arr)
console.log(arr1)

/*forEach - loop mais elegante */

/*arr.forEach(function(el, i, _arr){
   console.log(i, ":",el)
})

console.log(arr)*/

arr1 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr1)