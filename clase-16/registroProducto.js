/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

function registrarProducto(){ 

let titulo = prompt('ingrese un titulo')
    while(titulo.length < 4 )
        {
        titulo = prompt('ingrese un titulo con al menos 4 caracteres')
    }
    

let precio = prompt('ingrese un precio')
    while(precio && precio < 1 && !isNaN(precio)) //isNaN es una funcion
        {
        precio = prompt('ingrese un precio mayor a 1 y sin letras')
    }

let descripcion = prompt('ingrese una descripcion')
    while(descripcion.length < 10)
        {
        descripcion = prompt('la descripcion debe contener al menos 10 caracteres')
    }

let categoria = prompt('ingrese una categoria')
    while(!(categoria == 'tecnologia' || categoria == 'hogar' || categoria == 'otros')){
        categoria = prompt('la categoria ingresada es incorrecta o inexistente')
    }


let marca = prompt('ingrese una marca')
    while(marca.length < 3){
        marca = prompt('la marca debe contener al menos 3 caracteres')
    }

let plantilla = 
    (`titulo: ${titulo}
    precio: ${precio}
    Descripcion: ${descripcion}
    categoria: ${categoria}
    marca: ${marca}`)

let confirmarProducto = prompt ('confirmar producto? \n ' + plantilla)
    while(confirmarProducto === 'cancelar' || confirmarProducto === 'no' || confirmarProducto === null){
        prompt = registrarProducto
    }
}

registrarProducto()




