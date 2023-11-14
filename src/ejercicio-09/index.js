// Ejercicio 09: Uso de Set
// Crea un Set vacío llamado `colors## Ejercicio Luego, agrega varios colores diferentes al Set y asegúrate de que no haya colores duplicado## Ejercicio Imprime la lista de colores en el Set y verifica si un color específico existe en el Set.

// Defino un Set vacío llamado colors
const colores = new Set()

// Añado elementos al Set colores
colores.add('Rojo')
colores.add('Verde')
colores.add('Azul')
colores.add('Rojo') // Intentar agregar un color duplicado --> NO LO INCLUYE

// Muestro el Set colores
console.log('Colores en el Set: ', colores)

// Chequeo si en el Set está ya el 'Verde'
const color1AChequear = 'Verde'
const color2AChequear = 'Negro'
console.log(`¿El ${color1AChequear} existe en el set? ${colores.has(color1AChequear)}`)
console.log(`¿El ${color2AChequear} existe en el set? ${colores.has(color2AChequear)}`)

// Respuesta:
// Colores en el Set: {'Rojo', 'Verde', 'Azul'}
// ¿El Verde existe en el set? true
// ¿El Negro existe en el set? true