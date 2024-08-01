import Navbar from './Components/Navbar/Navbar'
import Conversacion from './Components/Conversacion'
import data from './data/data'
import { Route, Routes } from 'react-router-dom'
import ListaContactos from './Components/ListaContactos'
import InfoContacto from './Components/InfoContacto'


function App() {
  
  return (
    <Routes>
      <Route path='/' element = {<ListaContactos data = {data}/>}/>
      <Route path='/conversacion/:id' element={ <Conversacion/>}/>
      <Route path='/infoContacto/:id' element={ <InfoContacto data = {data}/> }/>
    </Routes>
  )
}

export default App

/* <div>
{
  condicion ? <h2>Se cumplio</h2> : <h3>No se cumplio</h3>
}
{
  condicion && <h2>Se cumple la condicion</h2>
}
{
  estaRegistrado && <h2>Logueado</h2>
}
</div> */


/*   let condicion = true
  let estaRegistrado = true

  const UserData = {
    isLogged: true,
    isAdmin: true,
    lang: 'en'
  }


  return (
    <Navbar userData={UserData}/>
  ) */