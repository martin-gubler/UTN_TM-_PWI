/* TIPOS DE DATOS, OBJETOS */


let edadUsuario = 19

let nombreUsuario = 'pepe'

let apellidoUsuario = 'suarez'


// Formato key-value
let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo': {
        "nombre": 'juan'
    }
}

console.log('hola ' + usuario['nombre']) 

/*
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/


let objeto ={
    preco: 100000,
    nombre: 'computadora',
    marca : 'samsumg',
    id : 123456789,
    descricion : 'Computadora para usos multiples'
}

console.log()




const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/19/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}
/*s
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
'El usuario {name} {lastname}d creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}
*/
console.log('El usuario: ' + user['name'] + ' ' + user['lastname'] + 'tiene las preferencias de usuario en: ',
'\n'+ user['user preferences']['theme'] +
'\n'+ user['user preferences']['lang']
)


console.log('El usuario: '+ user['name'] + ' ' + user['lastname'] + 'creo su cuenta en fecha' + user['user info']['created_at'] + 'vive en ',
'\n'+ user['user info']['adress'] + 'y su telefono es ' + user['user info']['tel'])



/* PASAR LOS MENSAJES DE CONSOLA  A TEMPLATE STRING */

console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -lenguaje ${user['user preferences']['lang']} 
`)

/* pasar nuestro mensaje a notacion de . siempre que se pueda */


console.log(`
    El usuario ${user.name} ${user.lastname} tiene las preferencias en:
    -Modo: ${user['user preferences'].theme}
    -lenguaje ${user['user preferences'].lang} 
`)




/*
Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}
*/


/* 
const calcularIva = (precio, tipo_factura) => {
    let precioConIva = (precio * 0.21)
    let IVA = 21
    if (tipo_factura == 'C' || tipo_factura == 'B'){
        return {
            precio: precio,
            IVA: IVA,
            preicoConIva: precioConIva,
            factura: tipo_factura
        }
    }
    else if (tipo_factura == 'A'){
        return {
            precio: precioConIva,
            IVA: IVA,
            preicoConIva: precioConIva,
            factura: tipo_factura
        }
    }
}

 */



