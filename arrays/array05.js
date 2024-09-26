// push
let arr = [1,3,5,7,9]

let teste = arr.push(11, 13, true, "Olá") // adiciona o final
console.log(arr)
console.log(teste)

console.log("----------------pop-------------------------------")

//pop

//let ultimo_item = arr[arr.length - 1]
let ultimo_item = arr.pop() // remove o ultimo elemento e retorna
console.log(ultimo_item)
console.log(arr)

console.log("----------------shift-------------------------------")


//shift

let primeiro_item = arr.shift()
console.log(primeiro_item)
console.log(arr)
console.log("primeiro elemnto")

console.log("----------------unshift-------------------------------")

//unshift 

teste = arr.unshift(4, 5, 6)
console.log(teste)
console.log(arr)

console.log("----------------slice-------------------------------")

//slice

let arr2  = arr.slice(2, 4)
console.log(arr2)
console.log(arr)

//splice

console.log("----------------splice-------------------------------")

let arr3 = arr.splice(2,1,"Olá mundo")
console.log(arr)
console.log(arr3)


