const data = new Date()
console.log(data)
console.log(data.getDay()) // dia da semana
console.log(data.getDate()) // dia do mes 
console.log(data.getMonth()) // mes atual
console.log(data.getTime()) // número de milisegundos
console.log(data.getFullYear()) // ano atual
console.log(data.getHours()) // horário atual
console.log(data.getUTCHours()) // horas de uma data no formato de tempo UTC (Coordinated Universal Time).

console.log("-------------")


console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleString())
console.log(data.toUTCString())
