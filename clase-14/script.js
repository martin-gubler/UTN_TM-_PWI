//arrays
//lista de elementos ordenados


let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel'


//posicion/index/indice

//                 0        1        2  
const nombres = ['pepe', 'juan', 'ezequiel']

// siempre con const los arrays


console.log(nombres[1])
console.log('tengo ' + nombres.length + ' nombres')


//METODOS DE ARRAY array = nombres
//ej: array.push    array.pop   array.unshift

//.push()    agrega un elemento al final del array y devuelve la nueva longitud

/* nombres.push('maria') 

console.log(nombres)
*/


//.unshift()    agrega un elemento pero lo agrega al principio de un array y devuelve la nueva longitud

/* nombres.unshift('maria')

console.log(nombres)
 */


//.pop() elimina el ultimo elemento y nos lo retorna

/* let ultimoElemento = nombres.pop()
console.log(ultimoElemento) */


//.shift() elimina el primer elemento y lo retorna

//SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRINGS
//.index0f() devuelve la posicion de un string en el array

/* let posicionDeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posicionDeJuan)
console.log(nombres)
 */


//.splice()
/* 
array.splice()
1er parametro
-Desde donde va posicionarse
2do parametro
-Cantidad de elementos que se quieren borrar
3er parametro
-Elementos a agregar
 */
/* nombres.splice(1, 1) */
//                    0        1        2          3          4
/* 
const nombres2 = [ 'maria', 'pedro', 'leonel', 'ezequiel', 'elias']

let posicionDeEzequiel = nombres2.indexOf('ezequiel')
console.log('la posicion de ezequiel es ' + posicionDeEzequiel)

const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')


console.log(nombres2)
console.log('La lista de eliminados es: ', listaDeEliminados) */



const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']



//eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril

//REGLAS 
//-No se puede mirar el array
//-Si van a poder usar la consola

/* let posicionDeLeonel = nombres3.indexOf('leonel')
nombres3.splice(posicionDeLeonel, 1)

let posicionDeLucas = nombres3.indexOf('lucas')
nombres3.splice((posicionDeLucas - 1),1)

let posicionDeAbril = nombres3.indexOf('abril')
nombres3.splice(posicionDeAbril, 0, 'sofia')

console.log(nombres3)
 */

//PARA SABER SI UN ELEMENTO ESTA DENTRO DE UN ARRAY

/*  console.log(nombres3.includes('leonel'))  */

/* for(let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
}
 */



//string.length => obtener la cantidad de caracteres. 
/* (nombres3) en vez de string */

/* 
Obtener cantidad total de caracteres de una lista de nombres
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres de cada nombre para
al finalizar el recorrido decir 'la cantidad de caracteres es ' :(sumatoria dee caracteres)' */

/* Ejemplo: ['pepe, 'juan'] //la sumatoria de caracteres es 8*/

/* let caracteres = 0
for(let index = 0; index < nombres3.length; index = index + 1){
    caracteres = caracteres + nombres3[index].length
}
    console.log('La cantidad de caracteres es ' + caracteres)

 */


/*   for(let nombre of nombres3){
        console.log(nombre)
    } */
    
    //Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas
    
/*     const array = ['pepe', 'lucas', 'PEDRO', 'JuaN'] */
    
    //esto debe generar un segundo array con ['PEDRO', 'JuaN']\


//Hecho con chat gpt 

/* let mayusculas = []
for(let palabra of array){
    if (/[A-Z]/.test(palabra))
        mayusculas.push(palabra)
}

console.log(mayusculas) */





/* const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
] */


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */
/* 
const samsumg = []
    for(const producto of productos){
        if (producto.marca === 'samsumg'){
            samsumg.push(producto)
        }
    }
console.log(samsumg)

 */



//TAREA

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

const samsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)

/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/