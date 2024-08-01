//LocalStorage y sessionStorage




/* let nombre = prompt('ingrese su nombre') */


//localStorage.xxxxx(key)

/* localStorage.setItem('username', nombre)

localStorage.getItem('username')

localStorage.removeItem('username')

localStorage.clear()



const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user) )

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre)  
 */


//JSON javascript object notation

//String escrito en formato JSON
/* '{"nombre": "pepe"}' */

//parse permite transformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}')) */

//stringify, a un objeto lo puede transformar a string


/* const producto = {
    nombre: 'tv samsumg',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto) */


//para guardarlo se tiene que guardar en string, y para llamarlo, dependiendo lo que guardes, va a ser en string o con parse(si tiene notacion de objeto/es un objeto)


/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */

/* 
let usuarioRegistrado = login() */

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = email
    usuario.password = password

    alert(`usuario ${usuario.email} registrado`)

    let objetoString = JSON.stringify(usuario)
    localStorage.setItem('usuario', objetoString)
    
    return usuario

}

    let objetoString = JSON.stringify(login())
    localStorage.setItem('usuario', objetoString)
    
    console.log(objetoString)





