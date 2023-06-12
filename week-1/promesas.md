## 1. Creación de una promesa: Crea una promesa que se resuelva con el mensaje "¡Promesa resuelta!" después de 2 segundos.
```javascript
let promesa2Segundos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Soy una promesa')
    }, 2000)
})
```

## 2. Consumir una promesa: Consume la promesa que creaste en el ejercicio 1 usando los métodos .then() y .catch().
```javascript
let promesa2Segundos = new Promise((resolve, reject) => {
    let flag = false
    setTimeout(() => {
        if(flag) {
            return resolve('La bandera esta activa')
        } else {
            return reject('La bandera esta desactivada')
        }
    }, 2000)
})

promesa2Segundos
    .then(response => console.log(response))
    .catch(error => console.log(error))
```

## 3. Encadenamiento de promesas: Crea una cadena de promesas que se resuelvan una tras otra. Cada promesa debe agregar un número a un valor inicial, y la cadena completa debe sumar un total de 10 al valor inicial.
```javascript
let valorInicial = 0
function agregarNumero(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            valorInicial += numero
            console.log(`Se agregó ${numero}. Valor actual: ${valorInicial}`)
            resolve(valorInicial)
        }, 1000)
    })
}

agregarNumero(2)
    .then(agregarNumero(3))
    .then(agregarNumero(4))
    .then(agregarNumero(1))
    .catch(error => console.log(error))

console.log(valorInicial)
```

## 4. Manejo de errores: Crea una promesa que se rechace con un Error. Consume la promesa y maneja el error correctamente.
```javascript
let flag = false
function promesa2Segundos() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(!flag) {
                rej('La bandera esta desactivada')
            } else {
                res('La bandera esta activa')
            }
        }, 2000)
    })
}
 
promesa2Segundos()
    .then(response => console.log(response))
    .catch(error => {
        console.log('Error:', error)
    })
```

## 5. Promesa que se resuelve inmediatamente: Crea una promesa que se resuelva inmediatamente, y consume su resultado.
```javascript
function promesa2Segundos() {
    return new Promise((res, rej) => {
        res('Promesa inmediata')
    })
}
 
promesa2Segundos()
    .then(response => console.log(response))
    .catch(error => {
        console.log('Error:', error)
    })
```

## 6. Promesa que se rechaza inmediatamente: Crea una promesa que se rechace inmediatamente, y maneja el error.
```javascript
function promesa2Segundos() {
    return new Promise((res, rej) => {
        rej('Promesa inmediata')
    })
}
 
promesa2Segundos()
    .then(response => console.log(response))
    .catch(error => {
        console.log('Error:', error)
    })
```

## 7. Promesas en paralelo: Crea tres promesas que se resuelvan después de 1, 2 y 3 segundos respectivamente. Utiliza Promise.all() para esperar a que todas ellas se resuelvan.
```javascript
function promesa1() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 1')}, 1000)
    })
}
function promesa2() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 2')}, 2000)
    })
}
function promesa3() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 3')}, 3000)
    })
}

promesa1().then(response => console.log(response))
promesa2().then(response => console.log(response))
promesa3().then(response => console.log(response))

Promise.all([promesa1(), promesa2(), promesa3()])
    .then(values => console.log(values))
```

## 8. Promesas en serie: Crea tres promesas similares a las del ejercicio 7, pero en lugar de resolverlas en paralelo, encadena las promesas para que se resuelvan en serie, una tras otra.
```javascript
function promesa1() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 1')}, 1000)
    })
}
function promesa2() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 2')}, 2000)
    })
}
function promesa3() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 3')}, 3000)
    })
}

promesa1()
    .then(response => {
        console.log(response)
        promesa2()
            .then(response => {
                console.log(response)
                promesa3()
                    .then(response => {
                        console.log(response)
                    })
            })
    })
```

## 9. Promise.race(): Crea dos promesas, una que se resuelva después de 1 segundo y otra que se rechace después de 2 segundos. Utiliza Promise.race() y maneja tanto la resolución como el rechazo.
```javascript
function promesa1() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 1')}, 1000)
    })
}
function promesa2() {
    return new Promise((res, rej) => {
        setTimeout(() => {rej('Promesa 2')}, 2000)
    })
}

Promise.race([promesa1(), promesa2()])
    .then(value => {
        console.log(value)
    }, reason => {
        console.log(reason)
    })
```

## 10. Async/await: Reescribe el ejercicio 7 utilizando async/await en lugar de .then() y .catch().
```javascript
function promesa1() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 1')}, 1000)
    })
}
function promesa2() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 2')}, 2000)
    })
}
function promesa3() {
    return new Promise((res, rej) => {
        setTimeout(() => {res('Promesa 3')}, 3000)
    })
}

async function ejecutarPromesas() {
    try {
        let promesas = await Promise.all([promesa1(), promesa2(), promesa3()])
        console.log(promesas)
    } catch (error) {
        console.log(error)
    }
}
ejecutarPromesas()
```