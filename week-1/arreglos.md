## 1. Creación de arreglos: Crea un arreglo con cinco elementos y registra su longitud.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
console.log(frutas.length) // Imprime: 5
```

## 2. Acceso a los elementos del arreglo: Accede al primer y al último elemento del arreglo que creaste en el ejercicio 1.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
let firstPosition = frutas.shif() // manzana
let lastPosition = frutas.pop() // mango
```

## 3. Modificar elementos de un arreglo: Cambia el valor del tercer elemento en el arreglo que creaste en el ejercicio 1.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
let thirdPosition = frutas.splice(2, 1, 'melon')
// Imprime: ['manzana', 'pera', 'melon', 'naranja', 'mango']
```

## 4. Agregar elementos a un arreglo: Utiliza el método push para agregar un elemento al final del arreglo del ejercicio 1.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
frutas.push('platano') // Imprime: ['manzana', 'pera', 'melon', 'naranja', 'mango', 'platano']
```

## 5. Remover elementos de un arreglo: Utiliza el método pop para eliminar el último elemento del arreglo del ejercicio 1.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
frutas.pop() // Imprime: ['manzana', 'pera', 'melon', 'naranja']
```

## 6. Recorrer un arreglo con un bucle for: Escribe un bucle for que recorra todos los elementos del arreglo del ejercicio 1 y los imprima.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
```

## 7. Recorrer un arreglo con el método forEach: Ahora utiliza el método forEach para hacer lo mismo que en el ejercicio 6.
```javascript
const frutas = ['manzana', 'pera', 'sandia', 'naranja', 'mango']
frutas.forEach((fruta) => {
    console.log(fruta)
})
```

## 8. Filtrar elementos de un arreglo: Crea un arreglo de números y utiliza el método filter para obtener un nuevo arreglo con solo los números que son mayores que 10.
```javascript
const numeros = [1, 50, 2, 90, 75, 3]
let numerosFiltrados = numeros.filter(numero => {
    if(numero > 10){
        return numero
    }
})
```

## 9. Transformar elementos de un arreglo: A partir del arreglo de números del ejercicio 8, utiliza el método map para obtener un nuevo arreglo donde cada número se haya multiplicado por 10.
```javascript
const numeros = [1, 50, 2, 90, 75, 3]
let numerosMultiplicados = numeros.map(numero => {
    if(numero > 10){
        let multiplicado = numero * 10;
        return multiplicado
    }
})
```
