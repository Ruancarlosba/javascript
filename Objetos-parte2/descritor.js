/*Object.getOwnPropertyDescriptor() -  Esse método retorna uma descrição completa (um descriptor) de uma propriedade específica de um objeto. O descritor contém informações sobre a propriedade, como se ela é enumerável, configurável e gravável.

obj: O objeto de onde você quer obter o descritor da propriedade.
prop: O nome da propriedade que você quer consultar.
O descritor de propriedade contém as seguintes propriedades:
value: O valor da propriedade (se for uma propriedade de dados).
writable: Um booleano que indica se o valor da propriedade pode ser alterado.
enumerable: Um booleano que indica se a propriedade aparece em loops como for...in ou Object.keys().
configurable: Um booleano que indica se a propriedade pode ser excluída ou se suas características podem ser alteradas.

Object.defineProperty() - Esse método permite definir ou modificar uma propriedade específica de um objeto, podendo até mesmo adicionar propriedades novas. Ele é mais poderoso que a simples atribuição de valores, pois você pode controlar todas as características da propriedade (como se ela é writable, enumerable, configurable).

obj: O objeto no qual a propriedade será definida.
prop: O nome da propriedade a ser criada ou modificada.
descriptor: Um objeto que descreve as características da propriedade (como value, writable, enumerable, configurable).
 */




"use strict"

const pessoa = {
    nome: "Daniel"
    
}

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))

Object.defineProperty(pessoa, "sobrenome", {
    value: "Tapias Morales",
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(pessoa, "sobre nome"))


for(let prop in pessoa) {
    console.log(prop)
}
