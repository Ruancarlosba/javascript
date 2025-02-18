/*é uma coleção de valores únicos, ou seja, não permite valores duplicados. Você pode armazenar qualquer tipo de valor, incluindo objetos, funções, números, etc.

Principais Características:

Armazena valores únicos: não permite valores repetidos.

Pode armazenar qualquer tipo de valor, incluindo tipos primitivos (números, strings) e objetos.

Permite iterar sobre os valores na ordem em que foram adicionados.

Oferece métodos como add(), has(), delete(), e clear().

Iteração: Você pode iterar sobre os valores de um Set usando um for...of ou forEach:


weakset() - é semelhante ao Set, mas com uma diferença crucial: as chaves (valores) armazenadas no WeakSet devem ser objetos. Além disso, o WeakSet não impede que esses objetos sejam removidos do conjunto quando não houver mais referências a eles, ajudando no gerenciamento de memória (garbage collection).

Principais Características:

Armazena somente objetos como valores. Tipos primitivos como números e strings não podem ser armazenados.
As chaves podem ser garbage-collected: se um objeto no WeakSet não for mais referenciado em outro lugar, ele pode ser removido automaticamente da coleção.
Não oferece iteração: não é possível iterar sobre os elementos de um WeakSet como no Set, porque os objetos podem ser removidos a qualquer momento durante a coleta de lixo.
Oferece métodos como add(), has(), e delete(), mas não tem métodos de iteração como forEach().

 */

const _set = new Set()
const _weakset = new WeakSet()

const arr = [1,2,3,4,2,3,5]

_set.add(1)
_set.add(2)
_set.add(3)
_set.add(8)

console.log(_set.size)
console.log(_set.has(8))


console.log("----------------------------------------")

const weakset = new WeakSet();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakset.add(obj1);
weakset.add(obj2);

console.log(weakset.has(obj1)); // true
console.log(weakset.has(obj2)); // true

obj1 = null; // Agora o objeto pode ser coletado pelo garbage collector

// O objeto obj1 pode ser removido automaticamente do WeakSet
