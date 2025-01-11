/* Math.min() - Retorna o menor valor entre os argumentos fornecidos.

Math.max() - Retorna o maior valor entre os argumentos fornecidos.

Math.round() - é usada para arredondar um número para o inteiro mais próximo. Se a parte decimal for igual ou maior que 0.5, o número é arredondado para cima (para o próximo inteiro). Caso contrário, é arredondado para baixo (para o inteiro anterior).

Math.floor() - Arredonda um número para baixo, ou seja, para o inteiro mais próximo que seja menor ou igual ao número original. Mesmo que a parte decimal seja maior que 0.5, o número sempre será arredondado para o inteiro inferior.

Math.ceil() - Arredonda um número para cima, ou seja, para o inteiro mais próximo que seja maior ou igual ao número original. Mesmo que a parte decimal seja menor que 0.5, o número sempre será arredondado para o inteiro superior.

Math.pow() - é usada para calcular a potência de um número, ou seja, ela eleva um número a um determinado expoente.

Math.sqrt() - é utilizada para calcular a raiz quadrada de um número.

Math.cbrt() -  é usada para calcular a raiz cúbica de um número.

Math.random() - é utilizada para gerar um número pseudo-aleatório no intervalo de 0 (inclusivo) a 1 (exclusivo). Ou seja, ela retorna um número de ponto flutuante maior ou igual a 0 e menor que 1.
 */

console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,10,4,5))

console.log("-----Math.round--------")

console.log(Math.round(45.5))

console.log("-----Math.floor--------")

console.log(Math.floor(49.9999999))

console.log("------Math.ceil---------")

console.log(Math.ceil(49.99999999))


console.log("----Math.pow--------------")

console.log(Math.pow(2, 3))


console.log("-----Math.sqrt--------------")

console.log(Math.sqrt(4))


console.log("-----Math.cbrt---------------")

console.log(Math.cbrt(8))

console.log("-------Math.random------------")

console.log(Math.random())