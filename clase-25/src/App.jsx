import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {Cart, Detail, Home, Login, NewProduct, NotFound, Review} from './Pages'
function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/detail/:producto_id' element={<Detail/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/product/new' element={<NewProduct/>} />
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/reviews' element={<Review/>}/>
      </Routes>
  )
}

export default App
