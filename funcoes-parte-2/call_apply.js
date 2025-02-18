/*Os métodos apply e call no JavaScript são usados para invocar uma função, permitindo que você defina o valor do this e passe argumentos de forma personalizada. Ambos os métodos são muito semelhantes, mas com uma diferença no modo como os argumentos são passados. */

function teste(str, n) {
    console.log(this)
    console.log(str,n)
}

teste.call({name: "Maria"}, "string", 20)
teste.apply({name: "Joaõ"}, ["da silva", 28])
teste.call({name: "Joaõ"},... ["da silva", 28])