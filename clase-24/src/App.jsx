import React, { useState } from 'react'
import { ColorCardForm, ColorCardList } from './Components'
import { colorCardList } from './data'
import Counter from './Components/Counter'


function App() {


  /* 
  Reglas de oro:
  Un ESTADO ES INMUTABLE
  Si queremos modificar el valor de un estado debemos hacerlo con la funcion Setter
  Si uso la funcion Setter el componente donde se creo el estado se re-renderizara y los componentes hijos
  */
  /* 
  useState es una funcion que nos trae un array con 2 valores
  Estructura: [valorDelEstado, funcionParaCambiarValor]
  */
  
  /* console.log('me renderizo') */
  /* 
  1)Crear el boton para decrementar 
  2)El decrementador no puede ser menos de 0
  3)Si el contador es 10 que no se muestre el boton de <button>+</button> y se muestre un <span>No se puede incrementar mas de 10</span>
  4) Crear un componente llamado Counter que va a recibir una prop llamada limit
  el limit sera el numero limite que tendra el contador, ya que no sera siempre 10
  */

  const [colorCardLista, setColorCardLista] = useState(colorCardList)

  const handleSubmit = (e, formValues) => {
    e.preventDefault()
    console.log('enviado', formValues)
    const colors = []
    for(let i = 1; i < 5; i = i + 1){
      colors.push(formValues['color_' + i])
    }
    setColorCardLista([...colorCardLista, {colors: colors, likes: 0, id: 5, time: formValues.time}])
  }

  return (
    <>
    <ColorCardList colorCardList={colorCardLista}/>
    <Counter limit = {15}/>
    <ColorCardForm handleSubmit = {handleSubmit}/>
    </>
  )
}

export default App
