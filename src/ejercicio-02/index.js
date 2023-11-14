// Ejercicio 02: Arrow Functions y this
// Crea un objeto con un método que utilice `this## Ejercicio Luego, cambia el método a una arrow function y observa cómo cambia el comportamiento.


// Objeto con método con this
const person = {
    name: 'Xavi',
    saludo: function () {
        console.log(`Hola, soy ${this.name}`)
    }
}

// Objeto con método con Arrow Function
const person2 = {
    name: 'Sonia',
    saludo: () => {
        console.log(`Hola, soy ${this.name}`)
    }
}

person.saludo() // Resultado: Hola, soy Xavi
person2.saludo() // Resultado: Hola, soy undefined
