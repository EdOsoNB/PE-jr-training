## 1. Creación de objetos: Crea un objeto para representar un libro, que incluya propiedades para el título, el autor y el año de publicación.
```javascript
let libro = {
    titulo: 'El gran libro de HTML5, CSS3 y Javascript',
    autor: 'Juan Diego Gauchat',
    fecha_publicacion: 2012
}
```

## 2. Acceso a las propiedades de un objeto: Accede a cada una de las propiedades del objeto que creaste en el ejercicio 1 e imprímelas.

```javascript
for(let key in libro) {
    console.log(libro[key])
}
```

## 3. Modificar propiedades de un objeto: Cambia el valor de la propiedad "año de publicación" en el objeto del ejercicio 1.
```javascript
libro['fecha_publicacion'] = 2015
```

## 4. Agregar propiedades a un objeto: Agrega una nueva propiedad al objeto del ejercicio 1, como la cantidad de páginas del libro.
```javascript
libro['total_paginas'] = 500
```

## 5. Eliminar propiedades de un objeto: Utiliza el operador delete para eliminar la propiedad que agregaste en el ejercicio 4.
```javascript
delete libro['total_paginas']
```

## 6. Recorrer las propiedades de un objeto: Utiliza un bucle for...in para recorrer todas las propiedades del objeto del ejercicio 1 e imprimir su nombre y valor.
```javascript
for(let key in libro) {
    console.log(libro[key])
}
```

## 7. Uso de métodos en objetos: Añade un método al objeto del ejercicio 1 que retorne una cadena con una descripción completa del libro.
```javascript
libro.descripcion = function() {
    return 'Descripción del libro'
}
```

## 8. El operador this en métodos de objetos: Modifica el método del ejercicio 7 para que utilice this para acceder a las propiedades del objeto.
```javascript
libro.descripcion = function() {
    return `El libro llamado ${this.titulo} fue elaborado por ${this.autor}`
}
```

## 9. Optional chaining: Crea un objeto con propiedades anidadas y utiliza el operador optional chaining (?.) para acceder a una propiedad que puede no existir.
```javascript
console.log(libro?.precio)
```

## 10. Nullish coalescing operator: Crea un objeto con una propiedad que puede ser null o undefined y utiliza el operador Nullish coalescing (??) para proporcionar un valor por defecto.
```javascript
libro.edicion = null
let edicionCorrecta = libro.edicion ?? 'Primera edicion'
console.log(edicionCorrecta) // Imprime: Primera edicion

```