
/* 
1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null
6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
 */

/* 
function decirNombre(nombre){
    alert ('Hola ' + nombre)
}

decirNombre("martin")

 */


/* no funciona
/* 
function saludar(nombre){
    console.log ("hola " + nombre)
}

function MostrarSaludo(){
let nombre = "martin"
let mensaje = saludar("martin")
alert(mensaje)
} */

/* 
function sumar(a, b){
let suma =a + b
console.log(suma)
}

sumar(2, 8)
 */



/* 
function restar(a, b){
let resta =a - b
console.log(resta)
}

restar(10, 3) 
*/

/* 
function sumar(a, b){
let suma = a + b
}
function restar(a, b){
let resta =a - b
}

function calcular(operacion, a, b){
if (operacion === +) {return sumar(a, b)}
else if (operacion === -) {return restar(a, b)}
else {mull}
}
 */

function contarHasta(numero){
    for (let iterador = 1; iterador <= contarHasta; iterador = iterador + 1)
}

contarHasta(100)
