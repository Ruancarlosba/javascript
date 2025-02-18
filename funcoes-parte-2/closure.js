/*é um conceito que se refere à capacidade de uma função de acessar variáveis de seu escopo externo, mesmo após a execução do escopo que as define ter sido concluída. Em outras palavras, um closure ocorre quando uma função "lembra" das variáveis de seu escopo de origem, mesmo depois de o contexto em que foi criada ter sido encerrado. */

const teste = (function(){
    let n = 0
    return function testeInterno() {
        console.log("testeInterno chamado", n)
        return "retorno de testeInterno" + n
    }
})()

let str = teste()
console.log(teste)