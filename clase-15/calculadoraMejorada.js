const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && password.toLowerCase() !== password
}

//                    (        parametros        )   fn_function validacion /* CALL BACK, se llama cuando llamamos una funcion en un parametro  */
const solicitarDato = (mensaje, error, fn_validacion) =>{
    let dato = prompt(mensaje)
    while(!validacion(dato)){
        dato = prompt(error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email, por favor.',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail
    },
    PASSWORD:{
        mensaje: 'Ingrese una password',
        error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacion: validacionPassword
    } 
}

//const es una funcion
const login = () => {
    const usuario = {
        email: null,
        password: null
    }
    
    usuario.email = solicitarDato(DATOS.EMAILl)
    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`usuario ${usuario.email} registrado`)

    return usuario
}


/*     usuario.password = solicitarDato(
        'Ingrese una password',
        'Error password incorrecta: ingresar una password de 6 caracteres y una mayuscula',
        validacionPassword /* CALL BACK, se llama cuando llamamos una funcion en un parametro  */
