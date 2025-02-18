/*Object.create() - é usado para criar um novo objeto, usando um objeto existente como o protótipo (ou "base"). Esse método permite criar um novo objeto que herda as propriedades e métodos do objeto passado como parâmetro. Ele também permite definir propriedades adicionais para o novo objeto, se necessário. 
proto: O objeto que será usado como protótipo para o novo objeto.
propertiesObject (opcional): Um objeto que contém as descrições das propriedades a serem adicionadas ao novo objeto.

Object.assign() - é usado para copiar as propriedades de um ou mais objetos de origem para um objeto de destino. Ele faz uma cópia superficial das propriedades, o que significa que, se houver referências a objetos dentro do objeto, essas referências serão copiadas diretamente e não os valores em si.
target: O objeto de destino para o qual as propriedades serão copiadas.
sources: Um ou mais objetos de origem cujas propriedades serão copiadas para o target.
*/

const animal = {
    tipo: 'mamífero',
    emitirSom: function() {
      console.log('Som genérico');
    }
  };
  
  // Cria um novo objeto `cachorro` que herda de `animal`
  const cachorro = Object.create(animal);
  cachorro.nome = 'Rex';
  
  console.log(cachorro.nome);        // 'Rex'
  console.log(cachorro.tipo);        // 'mamífero' (herdado de `animal`)
  cachorro.emitirSom();              // 'Som genérico' (herdado de `animal`)



  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  
  // Copia as propriedades de `obj2` para `obj1`
  const resultado = Object.assign({}, obj1, obj2);
  
  console.log(resultado); // { a: 1, b: 3, c: 4 }
  console.log(Object.keys(obj2))
  console.log(Object.values(obj2))
  console.log(Object.entries(obj2))
  