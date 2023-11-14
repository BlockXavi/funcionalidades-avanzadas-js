// Ejercicio 06: Destructuring de Arreglos
// Dado un arreglo con nombres de frutas, utiliza destructuring para obtener el primer y último elemento.

// Defino el array frutas
const frutas = ['Manzana', 'Plátano', 'Naranja', 'Uva']

// Destructuring para seleccionar el primer y último elemento
const [primeraFruta, , , ultimaFruta] = frutas

// Las muestro por pantalla
console.log(`Primera fruta: ${primeraFruta}`)
console.log(`Última fruta: ${ultimaFruta}`)

// Respuesta:
// Primera fruta: Manzana
// Última fruta: Uva
