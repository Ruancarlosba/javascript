/*replace - é usado para substituir uma parte de uma string por outra. Ele recebe dois parâmetros: o padrão a ser encontrado (que pode ser uma string ou uma expressão regular) e a string ou função com o valor de substituição.  */

let str1  = "minha string bacanuda"
console.log(str1.replace("i", "o"))
console.log(str1)

console.log("----------------------------")

/*indexOf - é usado para encontrar a posição (índice) de uma determinada substring dentro de uma string. Caso o valor especificado não seja encontrado, o método retorna -1. 
 lastIndexOf - é semelhante ao indexOf(), mas em vez de procurar a primeira ocorrência de uma substring, ele encontra a última ocorrência */

console.log(str1.indexOf("string"))
console.log(str1.lastIndexOf("string"))

console.log("-------------------------------")

/* includes - é usado para verificar se uma determinada substring ou elemento está presente em uma string ou array. O método retorna true se o valor for encontrado e false caso contrário. */

console.log(str1.includes("minha"))

console.log("--------------------------")

console.log(str1.slice(2, 5))

console.log("--------------------------")

/* valueOf - é utilizado para retornar o valor primitivo de um objeto. Esse método é frequentemente utilizado para converter um objeto em seu valor primitivo, o que é útil em operações aritméticas ou comparações. */

let strAsObj = new String("minha string como objeto")
console.log(strAsObj.valueOf())

console.log("----------------------------")

/* trim - é utilizado para remover espaços em branco do início e do final de uma string. Ele não altera a string original, mas retorna uma nova string com os espaços removidos. */

str1 = "         " + str1 + "         "
console.log(str1.trimStart())
console.log(str1.trim())
console.log(str1.trimEnd())


console.log("----------------------")

/* padStart - é usado para preencher o início de uma string com outro valor até que ela atinja um determinado comprimento. Este método é útil quando você precisa garantir que uma string tenha um comprimento mínimo, completando com caracteres adicionais no começo. */

str1 = "0123456789"
console.log(str1.padStart(20))

console.log("--------------------------")

/* startsWith - é usado para verificar se uma string começa com os caracteres especificados. Ele retorna um valor booleano (true ou false), dependendo de a string começar ou não com o prefixo indicado. */

let str2 = "Hoje é sábado"
console.log(str2.startsWith("Hoje"))
console.log(str2.endsWith("Hoje"))

console.log("----------------------------")

/* charAt - é utilizado para retornar o caractere em uma posição específica dentro de uma string. Ele recebe um índice como parâmetro e retorna o caractere localizado nesse índice.

    charCodeAt - é usado para obter o valor numérico (código Unicode) do caractere em uma posição específica dentro de uma string. Esse valor é um número que representa o caractere, e é útil para realizar comparações ou manipulações baseadas no código do caractere.
  */

let str3 = "abcdfgh"
console.log(str3.charAt(1))
console.log(str3.charCodeAt(1))