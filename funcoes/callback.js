//funçao de callback
function teste(cb) {
    console.log("funcao teste")
    cb()
}

// chamando com a funçao anonima
/*teste(function(){
    console.log("funçao anonima de callback")
})*/

// chamando com funçoes declaráveis
function fn() {
    console.log("funçao declarativa de callback")
}
teste(fn)