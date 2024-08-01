/* Operadores Logicos */

/*  
! NOT => negacion (devuelve el valor opuesto booleano del dato)

|| OR => o logico (si el primer valor es un thruly develve el primer valor, sino, devuelve el segundo valor)

&& AND => y logico (si el primer valor no es un thruly delvuelve el segundo valor, sino devuelve el primero)

 */


/* quiero dejar pasar a alguien que tenga mas de 18 a;os o tenga 100000 pesos

edad =28 
dinero =100

condicion = edad > 18 || dinero > 100000

condicion= true || false

condicion = true


edad = 10
dinero 10

condicion = edad > 18 || dinero > 100000

condicion = false || false

condicion = false (es el segundo false)\



si el usuario tiene nombre y email lo registro

condicion = nombre || email

condicion = 'pepe@gmail.com'

nombre = 'pepe'

email ='pepe@gmail.com'

condicion =



nombre_usuario = solicitarNombre() || 'unknown'
*/



/* 
Dejo pasar al usuario si tiene mas de 18 y mas de 6000 pesos

edad = 70
dinero = 90000

condicion = edad >= 18 && dinero > 6000

            true    &&  true

            true




edad = 10
dinero = 90000

condicion = edad >= 18 && dinero > 6000

            flase   && true

condicion = false





edad = 60
dinero = 900

condicion = edad >= 18 && dinero > 6000

            true   &&  false

condicion = false





TABLAS DE LA VERDAD:

OR
true || true = true
false || true = true
true || false = true
false || false = false

AND
true && true= true
false && true= false
true && false= false
false && false= false
*/



/* 

! (NaN == NaN) || 'pepe'

        false       true

        true


'pepe' * 1 + '' && 0
NaN + '' && 0
'NaN' && 0 = 0
*/


/* 
    9 * '9' * null || 'pepe' && 'juan'        JS lo lee asi:    ((((9 * '9') * null) || 'pepe') && 'juan')
    81 * null || 'pepe' & 'juan'
    0 || 'pepe' && 'juan'
    (!'pepe) || (!'juan')
    false || false
*/


/* 
!('' + 0 - 0 * !null + false) && 'juan' || 'pepe' || 'maria'

    true & juan

    'juan' || 'pepe' || 'maria'

    'juan



    (!false || true) && false
    true || true && false
    true && false
    false

ORDEN => NOT, AND, OR


CASO CORRECTO
    !false || (true && false)
    true || false
    true
*/




/* 
    VARIABLES


Sintaxis

<tipo_variable> identificador = dato
*/

//VAR 

//El valor por defecto implicito es undefined

//declaracion
//inicializar la variable (implicito)
/* var edad

//inicializar la variable (explicito)
var nombre ='pepe'

//Re asignacion
edad = 90

/*
alert(nombre)*/

/* console.log(edad) */


/*  
//HOISTING
var apellido = undefined // esto lo hace JS por detras
console.log(apellido)

apellido = 'suarez'

console.log(apellido)
*/

/* var nombre

nombre = 'pepe'

console.log(nombre) */

/* 
VAR

Tiene Hoisting? SI
Tiene valor implicito en undefined? SI
Se puede reasginar? SI
Se puede redeclarar? SI
*/


//LET
/* 
Tiene Hoisting? NO
Tiene valor implicito en undefined? SI
Se puede reasginar? SI
Se puede redeclarar? NO (POR EL MOMENTO)
*/

/*
//Declarando e inicializando mi variable de manera implicita
let edad


//Declarando e inicializando mi variable de manera explicita
let nombre = 'pepe'

nombre = 'juan'

console.log(nombre)
*/

/* 
Tiene Hoisting? NO (no se puede llamar antes de ser declarado)
Tiene valor implicito en undefined? NO
Se puede reasginar? NO
Se puede redeclarar? NO
*/

/* //NO SE HACE
nombre = 'juan'
 */




/* 
Scope y block (Bloques y alcance)
*/



//Crear un bloque de codigo
//VAR tiene un alcance o scope global, se puede llamar de fuera de el bloque
/* {
    var nombre ='pepe'
    console.log('hola mundo')
}

console.log(nombre) */


// let en este caso tiene un alcance local
/* {
    let nombre = 'pepe'
    console.log(nombre)
}
//esto va a dar error
console.log(nombre) */


/* //scope global
let nombre = 'juan'
{
    //scope local
    let nombre = 'pepe'
    console.log(nombre)
}

console.log(nombre) */


/* ///scope global
var nombre = 'juan'

{
    //scope local
    var nombre = 'juan'
    console.log(nombre)
}

console.log(nombre) */

/* aca falta uno */

/* aca falta la practica */


//IF (CONDICIONAL)


/* Si el usuario se llama pepe lo dejo pasar */

/* 
Sintaxis:
if(condicion){
    bloque de codigo
} 

if verifica que la condicion sea un thruly

else se ejecuta cuando la condicion del if sea falsy
ELSE DEBE IR LUEGO DEL CIERRE DEL BODY O DEL BLOQUE DEL IF 
*/

/* let nombre = 'pepe'

if(nombre === 'pepe'){
    console.log('te dejo pasar')
}
else{
    console.log('no te dejo pasar')
}
 */


/* let email = prompt('ingresa tu email')
if(email){
    console.log('correcto')
}
else{
    console.log('ERROR: mail ingresado incorrectamente')  
}
 */



/* 
Solicitar al usuario una edad y un leguanje favorito

si su edad es mayo a 16 y su lenguaje favorito es 'JS'
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/

let edad = prompt('ingrese su edad')
let lenguaje_fav = prompt('ingrese su l;enguaje')
if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}
else{
    console.log( 'No se puede ser perfecto en todo')
}
