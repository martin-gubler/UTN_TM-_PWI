/* java script es un lenguaje de interpretacion por V8engine
    java script es un lenguaje case sensitive, distingue entre Mayus y Minus
*/

/*alert('hola mundo') */

//Tipos de datos;

/* 
PRIMITIVOS;

string = (cadena= texto entre comillas) 'hola'. 'pepe', "hola mundo", '3'

boolean = para representar estados booleano, true o false

number = para representar datos numericos 1, -1, 1.1, NaN (Not a Number), Infinity

null = para representar nulidad, (null)

undefined = para representar un estado indefinido, (undefined)

*/

/*
CONSTRUCTORES
Number()= transformar un dato a numer
String()= transformar un dato a string
Boolean() = trasnformar un dato a boolean
 */


//Operadores aritmeticos

/* 
+ = concatenacion (ocurre cuando HAY un o mas datos string)
+ =suma
- =resta
* =multiplicacion
/ =division
% =resto de la division
*/

/* 
1 + true
subproceso: 1 + Number(true)
subproceso: 1 + 1 =2
*/

/* 
1 + '1'
string(1) = '1'
'1' + '1' ='11'

null + 'juan' = 'nulljuan'

5 + true =6

null + undefined
Number(Null) + Number(undefined)
0 + NaN = Nan

'700000' + 10000
'70000010000'

Number('700000') + 10000 =7010000

'700000' - 10000 (va a funcionar porque es - no va a hacaer una concatenacion)

EJERCICIOS

9 + 0 number 9

0 + false //number 0

false * null //number  0

'' + 0 //string  '0'

'pepe' * 3 //number NaN

undefined - null + 'pepe' //string

(undefined - null) + 'pepe'

NaN + 'pepe' 

String(NaN) + 'pepe'

'NaN' + 'pepe' = 'NaNpepe'

*/



//Comparadores SIEMPRE DEVUELVEN BOOLEAN (siempre devuelven o true o false)

/* EXCEPCIONES
null solo es igual a null o a undefined, no es igual a 0
NaN no es igual a NINGUN OTRO DATO, en caso de querer comparar con NaN debemos usar la funcion isNaN()
*/

/* 

== igualdad
=== igualdad de valor y tipo de dato (estricta igualdad)
!=
!==
>
<
>=
<=

*/


/* 
Valores thurty y falsy;
Para saber si un valor es thurty o falsy debemos pasarlo a boolean
boolean(valor_a_verificar) //true o false

Falsy:
''
0
-0
NaN
false
undefined
null

*/

/* 
NaN == NaN false
8 == NaN boolean false
5 == '5' boolean true
1 === Boolean ('1') boolean false
3 + ' ' === '3'

*/