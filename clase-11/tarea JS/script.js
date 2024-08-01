


///FUNCIONA//// TP 1

let edad = prompt ('ingrese su edad')

if (edad <= 0 ) {
    console.log ('Edad no valida')}

else if (edad < 13 ) {
    console.log ('Eres un niño')}

else  if (edad >= 13 && edad <= 17 ) { 
    console.log ('Eres un adolescente')}

else if (edad >= 18 && edad <= 64 ) { 
console.log ('Eres un adulto')}

else if (edad >= 65 ){
console.log 
    ('Eres una persona mayor')} 


///FUNCIONA//// TP 2

/* 
let calificacion = prompt ('ingrese una calificacion entre 0 y 100')

if (calificacion < 0 || calificacion > 100) {
    console.log ('Calificación no válida.')
}

else if (calificacion >= 90 && calificacion <= 100) {
    console.log ('A')
}
else if (calificacion >= 80 && calificacion <= 89) {
    console.log ('B')
}
else if (calificacion >= 70 && calificacion <= 79) {
    console.log ('C')
}
else if (calificacion >= 60 && calificacion <= 69) {
    console.log ('D')
}
else if (calificacion >= 0 && calificacion <= 59) {
    console.log ('F')
} */


///FUNCIONA//// TP 3

/* let lado_1 = prompt ('introduce la medida del primer lado del triangulo')
let lado_2 = prompt ('introduce la medida del segundo lado del triangulo')
let lado_3 = prompt ('introduce la medida del tercer lado del triangulo')

if (lado_1 <= 0 || lado_2 <= 0 || lado_3 <= 0) {
    console.log ('longitudes no validas')
}

else if(lado_1 === lado_2 && lado_2 === lado_3){
    console.log ('trigulo equilatero')
}

else if (lado_1 === lado_2 || lado_2 === lado_3 || lado_1 === lado_3)
    console.log ('triangulo isoceles')

else{
    console.log ('triangulo escaleno')
} 
 */



///FUNCIONA//// TP 4

/* let numero = prompt (Number('ingrese un numero entre el 1 y el 7'))

if (numero <= 0 || numero > 7){
    console.log ('numero no valido')
}
else if (numero === 1 ){
    console.log ('lunes')
}
else if (numero === 2){
    console.log ('martes')
}
else if (numero === 3){
    console.log ('miercoles')
}
else if (numero === 4){
    console.log ('jueves')
}
else if (numero === 5){
    console.log ('viernes')
}s
else if (numero === 6){
    console.log ('sabado')
}
else if (numero === 7){
    console.log ('domingo')
}  */



///FUNCIONA//// TP 5


let temperatura = prompt ('ingrese la temperatura en grados celsius')

if(temperatura === '' || temperatura === null || isNaN(temperatura)){
    console.log('Error; temperatura debe ser un dato numerico')
}

else{
    if (temperatura <= 0) {
        console.log ('Solido')
    }
    else if(temperatura > 0 && temperatura < 99) {
        console.log ('Liquido')
    }
    else if(temperatura >= 100) {
        console.log ('Gaseoso')
    } 
}