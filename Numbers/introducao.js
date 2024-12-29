/*toFixed() - é usado para formatar um número em uma string, fixando o número de casas decimais. Ele recebe um argumento que define o número de casas decimais que você quer.

toPrecision() - formata um número com base no número total de dígitos significativos (contando os dígitos antes e depois do ponto decimal). Ele é útil quando você deseja especificar a quantidade total de dígitos significativos, em vez de apenas casas decimais.

toExponential() - é utilizado para formatar um número em notação científica, ou seja, representá-lo como um número com uma base e um expoente.

toString - converte diferentes tipos de dados para uma representação em string.
Para números, ele pode ser usado para convertê-los diretamente em strings, ou até em outras bases (como binário, octal ou hexadecimal).

toLocaleString() - é utilizado para formatar números, datas e objetos em uma string de acordo com a convenção de uma localidade (ou várias localidades), com base no idioma e as configurações culturais do ambiente em que o código está sendo executado.

 */

let numero = 1234567.890


console.log("------toFixed e  toPrecision-------------")

console.log(numero.toFixed(2))
console.log(typeof numero.toFixed(2))

console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(7))

console.log("------toExponential--------------------")

numero = 12.34567
console.log(numero.toExponential())


console.log("--------toString------------------------")
// transformando para número binário (base -(2))

numero = 15
console.log(0 .toString(2))
console.log(1 .toString(2))
console.log(2 .toString(2))
console.log(3 .toString(2))
console.log(4 .toString(2))

// transformando para número hexadecimal (base - (16))
// 10 - a, 11 - b, 12.... 15 - f
console.log(15 .toString(16))
console.log(10 .toString(16))

// transformando para octal base - (8)

console.log(255 .toString(8))


console.log("-------toLocaleString------------------------")

numero = 12345
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("en-US", {style: "currency", currency: "USD"}))
console.log(numero.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}))