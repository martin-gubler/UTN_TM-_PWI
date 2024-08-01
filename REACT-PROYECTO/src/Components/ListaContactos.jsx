import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data'
import './ListaContactos.css'

const ListaContactos = () => {


return (
    <div className='contactos-container'>
        <div className='div-titulo'>
            <h1>Chats</h1>
        </div>
    <div>
        
        {data.map((contacto) => {
            return(            
            <div className='contacto-container' key={contacto.id}>
                <div className='div-foto'>
                    <img className='imagen' src={contacto.thumbnail} alt="" />
                </div>
                <div className='nombre-contacto'>
                    <h2><Link className='link' to={'/conversacion/' + contacto.id }>{contacto.nombre_contacto}</Link> </h2>
                    <div className='ultima-conexion'><span>{contacto.ultima_conexion}</span></div>
                </div>

            </div>)})}
            
    </div>

    </div>
)
}


export default ListaContactos