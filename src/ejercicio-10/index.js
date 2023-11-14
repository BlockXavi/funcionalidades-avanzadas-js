// Ejercicio 10: Uso de Map
// Crea un Map llamado personas que almacene nombres como claves y edades como valore## Ejercicio Agrega algunas personas al Map y luego realiza operaciones como obtener la edad de una persona y eliminar a alguien del Map.

// Defino el Map personas
const personas = new Map()

// Añado nuevos elementos al Map personas
personas.set('Sonia', 49)
personas.set('Anna', 18)
personas.set('Mar', 17)
personas.set('Laia', 11)
personas.set('Thor', 3)

// Muestro el Map personas
console.log('Personas en el Map: ', personas)

// Muestro algún valor del Map personas
console.log(`Edad de Sonia: ${personas.get('Sonia')}`)

// Elimino a Thor del Map personas
personas.delete('Thor')

// Muestro el Map personas
console.log('Personas en el Map tras eliminar a Thor:', personas)
