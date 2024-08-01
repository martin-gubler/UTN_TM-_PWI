import React from 'react'
import {nombre as pepe, persona as person} from './funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'
import RowArticle from './components/RowArticle'
import matematicas from './matematicas'
// import { restar } from './components/variables' funciona pero mala practica tener 2 cosas que vengan del mismo archivo

/* 
Los archivos .jsx permiten la sintaxis JSX (html) (si tiene js y html es .jsx)
*/

// function App = () => {} tambien es valido

console.log(sumar(8,8))

console.log(restar(10, 5))

function App() {
  console.log(matematicas.sumar(5,5))
  console.log(person)
  let nombreUsuario = 'Julieta'
  const obtenerRandom = () => 'dato random'
  return (
    <>
      <div>
        <h1>HOLA {nombreUsuario}</h1>
        <Button text={'boton 1'}/>
        <Carta/>
      </div>
      <div>
        <h1>HOLA {obtenerRandom()}</h1>
        <Button text={'agregar a favoritos'}/>
        <Carta/>
        </div>
        <RowArticle titulo={'Lift-off: The MDN Curriculum launch'} fecha={'4 months ago'} direccion_author={'developer.mozilla.org'}/>
        <RowArticle titulo={"Baseline's evolution on MDN"} fecha={'7 months ago'} direccion_author={'developer.mozilla.org'}/>
        <RowArticle titulo={'Introducing the MDN Playground: Bring your code to life!'} fecha={'a year ago'} direccion_author={'developer.mozilla.org'}/>
    </>
  )
}

/* 
las funciones que retornan HTML/JSX se llamaran como Componentes
los componentes es buena practica declararlos con la primera letra en Mayuscula 
*/

/* 
el fragmento (<> </>) nos permite hacer una etiqueta padre que al instanciarse/invocarse el componente se desechara
*/


export default App
