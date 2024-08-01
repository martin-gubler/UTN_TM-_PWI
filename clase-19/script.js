const alertar = () => {
    alert('hola mundo')
}

const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar

// .btn-3 el punto es para llamar un elemento por clase
const btn3HTML = document.querySelector('.btn-3')

/* btn3HTML.addEventListener('click', alertar) */
btn3HTML.addEventListener('mouseover', alertar)

btn3HTML.textContent = 'pepe'
/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1


Crear el boton para decrementar 

(Opcional) que no se pueda decrementar a - de 1
*/


const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.getElementById('btnIncrementar')
const btnDecrementarHTML = document.getElementById('btnDecrementar')
const errorContadorHTML = document.getElementById('errorContador')


const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}

const renderizarError = (textoError) =>{
    errorContadorHTML.innerText = textoError
}

const limpiarError = ( ) =>{
    if(errorContadorHTML.innerText){
        renderizarError('')
    }
}

const handleIncrementarContador = ( evento ) =>{
    estadoContador = estadoContador + 1
    renderizarContador()
    limpiarError()
}

const handleDecrementarContador = ( evento ) =>{
    if(estadoContador > 1){
        estadoContador = estadoContador - 1
        renderizarContador()
    }
    else{
        errorContadorHTML.innerText ='no se puede decrementar a 0'
    }
    renderizarContador()
}


let estadoContador = 1
renderizarContador()

btnIncrementarHTML.addEventListener('click', handleIncrementarContador)
btnDecrementarHTML.addEventListener('click', handleDecrementarContador)


const formularioLoginHTML = document.getElementById('formularioLogin')

console.dir(formularioLoginHTML.password.value)
console.dir(formularioLoginHTML.username.value)

const handleLogin = ( evento ) =>{
    //prevenimos que se recargue la pagina cuando enviamos el formulario
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formularioLoginHTML.password.value)
    console.dir(formularioLoginHTML.username.value)
}
formularioLoginHTML.addEventListener('submit', handleLogin)