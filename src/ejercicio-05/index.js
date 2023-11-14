// Ejercicio 05: Destructuring de Objetos
// Dado un objeto con información de un producto (nombre, precio, categoría), utiliza destructuring para extraer y mostrar cada propiedad.

// Defino el objeto producto
const producto = {
    nombre: 'Smartphone',
    precio: 499.99,
    categoria: 'Electrónica'
}

// Destructuring del objeto con {}
// Defino 3 variables desde el objeto producto
const {nombre, precio, categoria} = producto

// Muestro las variables destructuradas
console.log(`Nombre: ${nombre}`)
console.log(`Precio: ${precio}`)
console.log(`Categoría: ${categoria}`)

// Resultado:
// Nombre: Smartphone
// Precio: 499.99
// Categoría: Electrónica