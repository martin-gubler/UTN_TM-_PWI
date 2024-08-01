/* ## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido */

//hecho por mi

/* function obtenerHistorial() {
    let historial = localStorage.getItem('historial');
    if (historial === null){ 
        historial = []
    } else { historial = JSON.parse(historial);

    }
    return historial
}

function guardarEnHistorial(objeto) {
    const historial = obtenerHistorial();
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}

console.log (guardarEnHistorial(pepe))
console.log (obtenerHistorial) */

//hecho por el profe

if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))
const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}
const pepe = {nombre: 'pepe'}
console.log (guardarEnHistorial(pepe))
console.log (obtenerHistorial())