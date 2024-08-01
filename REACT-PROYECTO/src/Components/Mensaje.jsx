import React from 'react'
import './Mensaje.css'


const Mensaje = ({author, content, fecha, estado}) => {
    const miMensaje = author ==='yo';
    const estadoMensaje = () => {
    if (estado === 'visto') {
        return <i className="bi bi-check2-all celeste"></i>;
    }
    else if (estado === 'entregado') {
        return <i className="bi bi-check2-all gris"></i>;
    }
    return null;
    }
    return (
    <div className={`mensaje ${miMensaje? 'yo' : 'otro'}`}> 
        <div className='contenido-mensaje'>
        <p>{content}</p>
        <span className='fecha'>{fecha}</span>
        {miMensaje && estadoMensaje()}
        </div>
    </div>
    )
}

export default Mensaje