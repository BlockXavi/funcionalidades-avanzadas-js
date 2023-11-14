// Ejercicio 08: Rest Parameters en una Función
// Crea una función que acepte un número indefinido de argumentos y devuelva su suma utilizando rest parameters.

// Creo funcion sum() con un Spread Operator en el argumento
function sum(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0)
}

// Defino la variable resultado utilizando la función suma
// const resultado = sum(1, 2, 3, 4, 5)

// Muestro el resultado
console.log(`La suma es: ${sum(1, 2, 3, 4, 5)}`)

// Resultado: La suma es: 16 (con valor inicial para reduce = 0)
