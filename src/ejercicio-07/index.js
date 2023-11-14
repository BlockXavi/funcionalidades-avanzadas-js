// Ejercicio 07: Usando Spread Operator
// Dados dos arreglos, utiliza el spread operator para combinarlos en uno solo.

// Defino los dos arrays a unir
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// Aplico el Spread Operator para unirlos
const arrayUnion = [...array1, ...array2]
const arrayUnionReves = [...array2, ...array1]

// Los muestro
console.log(arrayUnion)
console.log(arrayUnionReves)
// Resultado:
// [1, 2, 3, 4, 5, 6]
// [4, 5, 6, 1, 2, 3]
