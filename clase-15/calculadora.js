



const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && password.toLowerCase() !== password
}

//const es una funcion
const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingresa nuevamente el email')
    }
    usuario.email = email


    let password = prompt ('Ingrese la password')
    while(!validacionPassword(password)){
        password = prompt('Error password incorrecta: ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert(`usuario ${usuario.email} registrado`)

    return usuario
}