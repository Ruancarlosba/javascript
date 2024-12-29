/*split() - é usado para dividir uma string em uma lista (ou array) de substrings com base em um delimitador especificado. */

function formatarNomes(nomeCompleto) {
    let nomeAsArry = nomeCompleto.split(" ")

    if(nomeAsArry.length === 1 ) {
        return nomeCompleto
    }
    let primeiroNome = nomeAsArry.shift()
    return nomeAsArry.join(" ") + "," +primeiroNome
}

console.log(formatarNomes("Daniel"))
console.log(formatarNomes("Daniel Morales"))
console.log(formatarNomes("Daniel Tapias Morales"))