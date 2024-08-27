function fn(cb) {
    console.log("executar açao de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb() /* Esta linha verifica se cb é realmente uma função. Se for, a função cb é chamada.*/ 
}

fn(function(){ // essa funçao anonima é a cb()
    console.log("funçaõ passada por parametro")
})


function callback() {
    console.log("funçao de callback")
}

// atruindo funçoes a propriedades de objeto

const obj = {
    callback // ou callback: callback
}

obj.callback()

// retornando uma funçao em outra funçao

function fn2(n1) {
    return function(n2) {
        return n1 * n2
    }
}

const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult)

