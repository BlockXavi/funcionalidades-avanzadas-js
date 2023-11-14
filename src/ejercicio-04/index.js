// Ejercicio 04: Expresiones en Template Literals
// Dado un arreglo de números, utiliza template literals para mostrar si cada número es par o impar.

// Defino el Array numeros
const numeros = [2, 7, 4, 9, 6]

// Utilizo una ArrowFunction y template literals para decir si cada numero es par o impar
numeros.forEach((numero) => {
    console.log(`El número ${numero} es ${numero % 2 === 0? 'par' : 'impar'}.`)
})

// Resultado:
// El número 2 es par.
// El número 7 es impar.
// El número 4 es par.
// El número 9 es impar.
// El número 6 es par.