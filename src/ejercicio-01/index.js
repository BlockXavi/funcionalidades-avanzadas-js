// Ejercicio 01: Arrow Functions en Iteraciones
// Dado un arreglo de números, utiliza una arrow function para elevar cada número al cuadrado y crea un nuevo arreglo con los resultados.

// Defino el arreglo (array) numeros
const numeros = [2, 3, 5, 7, 10]

// Defino un nuevo array numerosAlCuadrado
// utilizando el método .map de los arrays para manipular los elementos de numeros
const numerosAlCuadrado = numeros.map((numero) => numero * numero)

// Muestro numeros
console.log(numeros)

// Muestro numerosAlCuadrado
console.log(numerosAlCuadrado)

// Resultado
// [ 2, 3, 5, 7, 10 ]
// [ 4, 9, 25, 49, 100 ]

