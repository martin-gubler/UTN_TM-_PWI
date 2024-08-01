import React, { useState } from 'react'
import Mensaje from './Mensaje'
import './Conversacion.css'
import { Link, useParams } from 'react-router-dom'
import data from '../data/data'
const Conversacion = () => {

    const { id } = useParams()
    const contacto = data.find(contacto => contacto.id === parseInt(id))
    console.log(id)

    const [mensaje, setMensaje] = useState('')
    const [dataHistory, setDataHistory] = useState(contacto ? contacto.mensajes : [])
    console.log(dataHistory)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
    const nuevoMensaje = {
        author: 'yo',
        content: mensaje,
        fecha: 'hoy',
        estado: 'entregado',
        id: crypto.randomUUID() 
    }
    setDataHistory([...dataHistory, nuevoMensaje])
    setMensaje('')

}
    const handleMensajeCambiado = (e) => {
        setMensaje(e.target.value)
    }
    if (!contacto) {
        return <div>Contacto no encontrado</div>
    }
    
    return (
    <div className='conversacion'>
            <div className='info-contacto'>
                <div className='div_volver'>
                    <button className='boton-volver'><Link className='link'to={'/'}><i className="bi bi-chevron-compact-left"></i></Link></button>
                </div>
                <div className='imagen-div'>
                    <img className='imagen' src={contacto.thumbnail} alt={contacto.nombre_contacto}></img>
                </div>
                <div className='contacto'>
                    <h3 className='nombre_contacto'><Link className='link' to={'/InfoContacto/' + contacto.id}>{contacto.nombre_contacto}</Link></h3>
                </div>
                <div className='botones'>
                    <div className='btn-div-top'>
                        <button className='boton-videollamada'><i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className='btn-div-top' >
                        <button className='boton-buscar'><i className="bi bi-search"></i></button>   
                    </div>
                    <div className='btn-div-top'>
                        <button className='boton-menu'><i className="bi bi-three-dots-vertical"></i></button>
                    </div>
                </div>
            </div>
        
        <div className='mensajes-container'>
        {dataHistory.map(mensaje => (
            <Mensaje
            key={mensaje.id}
            author={mensaje.author}
            content={mensaje.content}
            fecha={mensaje.fecha}
            estado={mensaje.estado}
            />
            ))}
        </div>
        <form onSubmit = {handleSubmit} className='escribir-mensaje'>
            <div className='btn-div-bottom-1'>
                <button className='boton-emoji'><i className="bi bi-emoji-smile"></i></button>
            </div>
            <div className='btn-div-bottom-2'>
                <button className='boton-clip'><i className="bi bi-paperclip"></i></button>
            </div>
            <div className='input-div'>
                <input type='text' onChange={handleMensajeCambiado} value={mensaje} className='escribir' placeholder='Escribe un mensaje'></input>
            </div>
            <div className='btn-div-bottom-3'>
                <button type='submit' className='boton-enviar'><i className="bi bi-send"></i></button>
            </div>
        </form>
    </div>
    )
}

export default Conversacion