/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(obj) {
  return Object.values(obj);
}

const obj = {a: 1, b: 2, c: 2}
const values = extractValues(obj);

console.log(values)

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(arr) {
  const resultado = {};
  for (let i = 0; i < arr.length; i++) {
    const cadena = arr [i];
    const longitud = cadena.length;
    resultado[cadena] = longitud; 
  }
return resultado;
}

const cadenas = ['gato', 'perro', 'elefante'];
const contadores = arrayToLengthCounters(cadenas);

console.log(contadores);



/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return keys1.filter(key => keys2.includes (key))

}

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {b: 4, c: 5, d: 6};
const commonKeys = findKeysInCommon(obj1, obj2);

console.log(commonKeys);

 
