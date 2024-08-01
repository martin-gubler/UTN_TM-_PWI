/* WHILE,
el bucle while repite una accion o un bloque de codigo mientras se cumpla x condicion 

*/

/* let numer = prompt('ingrese un numero')

while(!numer || isNaN(numero)){
    alert('NO ingresaste un dato numerico')
    numero = prompt ('ingresa un dato numerico porfavor')
}
 */



/* 
Solicitar un string al usuario y validar que sea un string valido 
Casos invalidos"
''
null
number (cualquier tipo de number excepto el NaN) 
*/

/* let texto = prompt ('ingrese un texto')

while (!texto || !isNaN(texto)){
    alert('NO ingresaste texto correctamente')
    texto = prompt ('ingrese un texto porfavor')
} */




//FOR

/* Es un bucle que usamos cuando queremos repetir un bloque de codigo a una determinada cantidad de veces */

/* Di por consola 5 hola mundo */

//DRY = dont repeat yourself
/* 
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
 */

// inicio           ;     limite   ; ritmo de actualizacion
/* 
for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('Hola mundo' + iterador)
}
 */


/* 
    for (let iterador = 1; iterador <= 3; iterador = iterador + 1){
        let nombre = prompt ('ingrese su nombre: ')
        alert (nombre)
    }

 */


/* Solicitar 3 nombres y al final mostrarlos en lista
lista de nombres:
-pepe
-juan
-ezequiel
 */


/* 

let ListaDeNombres = 'Lista de nombres'
for(let iterador = 1; iterador <=3; iterador = iterador + 1){
    let nombre = prompt ('ingrese su nombre')
    ListaDeNombres = ListaDeNombres + nombre
}

alert(ListaDeNombres) */



/* Vamos a solicitar un numero 3 veces al gfinalizar mostrar el resultado de la sumatoria entre los 3 numeros

EJ:
3
2
2
Resultado: 8
*/

/* let lista_de_numeros = ''
let sumaNumeros = 0
for(let iterador = 1; iterador <= 3; iterador = iterador + 1) {
    let numero = Number(prompt('ingrese su numero'))
    lista_de_numeros = lista_de_numeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero 
}

alert (lista_de_numeros)
alert (sumaNumeros) */




/* 
vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
validar que la cantidadDeRepeticiones ingresada sea un numero, en caso de que no volver a solicitarlo
 */



let cantidadDeRepeticiones = prompt ('cuantos numeros sumamos?')
let suma = 0
while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)){
    alert('Dato no valido')
    cantidadDeRepeticiones = prompt('Ingrese un dato numerico')
}
for (let i = 1; i <= cantidadDeRepeticiones; i = i + 1)  {
    numero = prompt ('ingrese un numero')
    while (!numero || isNaN(numero)){
        alert ('dato no valido')
        numero = prompt ('ingrese un numero')
    }
    suma = suma + Number(numero)
}
alert ('el resultado es:' + suma)





//FUNCIONES 

/* //Declarar una funcion
function saludar(nombre){
    alert('hola a' + nombre)
} */

//invocar a mi funcion
/* 
saludar('pepe')
saludar('juan')
 */

/* 
Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola el resultadod de la suma de ambos numeros
*/
/* 
function sumar(numero1,  numero2) {
    let suma = numero1 + numero2
    console.log (suma)
} 
 */


/* 
Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio
ej: calcularIva(100) => console: 21
*/

/* 
function calcularIVA (precio) {
    console.log (precio*0.21)
}
 */