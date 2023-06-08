## 1. Declaración de variables: Declara tres variables usando var, let y const. Asigna a cada una un valor de un tipo de dato diferente.
```javascript
var variable1 = 1;
let variable = "2";
const variable3 = [];
```

## 2. Reasignación de variables: Intenta reasignar las variables declaradas en el ejercicio 1.
### ¿Qué sucede con cada tipo de variable?
```javascript
variable1 = 5;     // Se agina el valor 5 a la variable
variable = "Hola"; // Se asina el valor Hola a la variable
variable3 = 5;     // Mostraria un error, ya que no es posible reasignar una variable const
```

## 3. Alcance de las variables: Crea una función e intenta acceder a una variable let definida dentro de la función desde fuera de la función. 
### ¿Qué sucede?
```javascript
function sumar(a, b) {
    let suma = a + b
}
console.log(suma) // Da un error que se refiere a que la variable 'suma' no esta definida
```

## 4. Alcance de las variables (parte 2): Ahora declara una variable var dentro de la función. 
### ¿Puedes acceder a ella desde fuera de la función?
```javascript
function sumar(a, b) {
    var suma = a + b
}
console.log(suma) // Da un error que se refiere a que la variable 'suma' no esta definida aunque el scope de var es global, pero al estar dentro de una funcion el scope que adquiere es de bloque, solo que si se puede reasignar fuera de la funcion.
```

## 5. Hoisting: Declara una variable con var después de un bloque de código que intenta acceder a esa variable. 
### ¿Qué valor se obtiene al acceder a la variable antes de su declaración?
```javascript
console.log(suma) // Al invocar la variable antes de ser declarada se crea en el scope global con un valor "undefined"
var suma = 0
console.log(suma) // Ya creada e inicializada adquiere el valor que se le dio respectivamente.
```

## 6. Hoisting (parte 2): Repite el ejercicio 5, pero esta vez con una variable let. 
### ¿Qué sucede?
```javascript
console.log(suma) // Al invocar la variable antes de ser declarada arroja un error ya que no puede ser llamada antes de ser declarada 
let suma = 0
console.log(suma) // Ya creada e inicializada adquiere el valor que se le dio respectivamente.
```

## 7. Hoisting de funciones: Declara una función después de un bloque de código que intenta llamar a esa función. 
### ¿Se puede ejecutar la función antes de su declaración?
```javascript
sumar(5, 5) 
// Si invocamos una función sin haber sido declarada antes, nos mostrara un error de que no ha sido definida dicha función; Sin embargo si la declaramos justo despues de invocarla la ejecutara de igual manera.
function sumar(a,b) {
    return a + b
}
```

## 8. Tipos de datos: Declara variables y asigna a cada una un valor de un tipo de datos diferente. Luego, utiliza typeof para verificar el tipo de cada variable.
```javascript
let numeros = 897
let boleano = true
let cadenaTexto = 'Hola'
let objeto = {
    nombre: 'Edgar'
}
let arreglo = ['manzana', 'peras', 'melon']
console.log(typeof numeros) // number
console.log(typeof boleano) // Bolean
console.log(typeof cadenaTexto) // String
console.log(typeof objeto) // Object
console.log(typeof arreglo) // Object
```

## 9. Conversión de tipos: Declara una variable con un número como una cadena (por ejemplo, "123"). Luego, intenta convertirlo en un número usando el objeto Number.
```javascript
let numero = "123"
console.log(Number(numero)) // 123
```

## 10. Objetos y arrays: Declara una variable como un objeto con algunas propiedades y un array con algunos elementos. Luego, intenta agregar, modificar y eliminar propiedades y elementos.
```javascript
let objeto = {
    name: 'Edgar'
}
let arreglo = [1, 2, 3]

// Agregar datos
objeto.lastName = 'Osorio'
arreglo.push(4)

// Modificar datos
objeto.lastName = 'Oso'
arreglo.splice(1, 1, 4)

// Eliminar datos
delete objeto.lastName
arreglo.pop()
```