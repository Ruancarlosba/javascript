/*Map() - Map é uma coleção de pares chave-valor, onde as chaves podem ser de qualquer tipo (não apenas strings ou símbolos, como em objetos normais).

weakMap () também é uma coleção de pares chave-valor, mas com algumas diferenças importantes. Em um WeakMap, as chaves devem ser objetos, e o comportamento de gerenciamento de memória é diferente.
 */

let obj = { id: 1 };
const weakmap = new WeakMap();

weakmap.set(obj, 'Valor associado');

console.log(weakmap.get(obj)); // Valor associado

obj = null; // O objeto agora está pronto para ser coletado pelo garbage collector

// Após a coleta de lixo, o valor pode ser removido, e o weakmap não terá mais o valor associado
