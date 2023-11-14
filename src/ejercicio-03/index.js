// Ejercicio 03: Interpolación de Variables
// Dado un objeto con información personal (nombre, edad, ciudad), utiliza template literals para crear una frase que lo muestre.

// Defino el objeto
const persona = {
    nombre: 'Alex',
    edad: 32,
    ciudad: 'Madrid'
}

// Defino el mensaje con template literals
const mensaje = `Hola, mi nombre es
${persona.nombre}, tengo ${persona.edad} años y vivo
en ${persona.ciudad}.`

// Muestro el mensaje por pantalla
console.log(mensaje) 

// Respuesta:
// Hola, mi nombre es
// Alex, tengo 32 años y vivo 
// en Madrid.