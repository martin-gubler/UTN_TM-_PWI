const login = () => {
const resultado ={
    email: null,
    password: null,
}


let UserPassword = prompt ('Ingrese su email')  
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(UserPassword)){
        alert ('Usuario ingresado correctamente')
    }
    else { 
        alert('Email no valido')
        prompt ('Ingrese su email nuevamente')
    }
}
resultado.email = UserPassword


let UserPassword = prompt ('ingrese su password, debe contener al menos 6 caracteres y 1 Mayus')
    if (password(length) => 6 && (password.toLowerCase() !== password){
        alert ('Password registrada correctamente')
    }
    else if (password === '' || password === null){
        alert ('Password no valida, intente nuevamente')
        prompt ('ingrese su password, debe contener al menos 6 caracteres y 1 Mayus')
    }
    else { 
        alert ('Password no valida, intente nuevamente')
        prompt ('ingrese su password, debe contener al menos 6 caracteres y 1 Mayus')
    }

resultado.password = UserPassword





