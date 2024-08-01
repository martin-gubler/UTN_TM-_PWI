/* DOM = Document Object Model = modelo objeto del documento */
//document es una variable global la cual se genera al crear la pagina
/* console.log(document) */
console.dir(document)

//obtiene un elemento por ID, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)


/* let nombre = prompt('ingresa tu nombre') */
titulo.innerText = 'hola '

const cajaProducto = document.getElementById('caja-producto')
console.log(cajaProducto)
cajaProducto.innerHTML = `
<h2>soy un subtitulo</h2>
<p>Tv muy linda</p>
<span>Precio: <b>$500</b></span>
`

/* 
const usuario = {
    nombre,
    apellido,
    adress,
    edad;
}


Mostrarlo dentro de un div 

h2 nombre completo: {nombre} {apellido}
span: Edad: {Edad}
span: Direccion: {direccion}
*/

const usuario = {
    nombre: 'Martin',
    apellido: 'Gubler',
    adress: 'Belgrano 123',
    edad: 19
}

const usuariohtml = document.getElementById("usuarioEjemplo")
console.dir(usuariohtml)
usuariohtml.innerHTML = `
<h2> ${usuario.nombre} ${usuario.apellido}</h2>
<span> ${usuario.edad}</span>
<span> ${usuario.adress}</span>`





const productos = [
    {
        nombre: 'tv samsumg',
        precio: 500,
        id: 1,
        descripcion: '',
        thumbnail: '',
    }
]
const productosHTML = document.getElementById('productos')

let plantillaProductos = ''
for(const producto of productos){
    plantillaProductos = plantillaProductos + `
    <div>
        <h2> ${producto.nombre}</h2>
        <img width = '200px' src="${producto.thumbnail}"
        <span>${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button>Comprar</button>
    <div>
    <hr>
    `
}


productosHTML.innerHTML = plantillaProductos


