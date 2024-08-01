/* Fetch es una funcion que me permite hacer peticiones HTTP, recibe 2 parametros
1) URL (un string que sera la url a la que vamos a consultar o consultar) 
2) Un objeto de configuracion de la peticion
*/


/*  async await */

const solicitarUsuarios = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET' 
    })
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}

solicitarUsuarios()


/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/

const containerPostsHTML = document.getElementById('containerPosts')


const solicitarPost = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    })
    const resultado = await respuesta.json();
    renderizarPost(resultado);
}

const renderizarPost = () =>{
    let plantilla = ``;
    for(const post of resultado){
        plantilla +=`
        <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button>♥</button>
        </div>
        `
    }
    containerPostsHTML.innerHTML = plantilla;
}       

solicitarPost()