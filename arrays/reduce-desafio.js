const numeros = [1,3,4,1,4,5,3,5,8,9]


const numerosUnicos = numeros.reduce(function( numerosUnicos, numeroAtual){

    if(numerosUnicos.indexOf(numeroAtual) < 0) {
        numerosUnicos.push(numeroAtual) // O numerosUnicos está recebendo um array vazío    
    }
    return numerosUnicos
}, [])

console.log(numerosUnicos) //saída [1,3,4,5,8,9]
