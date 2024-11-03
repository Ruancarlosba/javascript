const arr = [10,20,30]

const obj = arr.reduce(function(acumulador,valor,indice){
    
     acumulador[indice] = valor
    
     return acumulador
},{})

console.log(obj)