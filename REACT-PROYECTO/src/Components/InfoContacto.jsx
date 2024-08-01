import React from 'react'
import data from '../data/data'
import { Link, useParams } from 'react-router-dom'
import './InfoContacto.css'
const InfoContacto = () => {

  const { id } = useParams()
  const contacto = data.find(contacto => contacto.id === parseInt(id))
  console.log(id)

  return (
    <div className='infoContacto-container'>
      <div className='div-titulo'>
        <div className='div-boton-volver'>
          <button className='boton-volver'><Link className='link' to={'/conversacion/' + contacto.id }><i className="bi bi-chevron-compact-left"></i></Link></button>
        </div>
        <h2 className='titulo'>Informacion del contacto</h2>
      </div>
      <div className='div-imagen'>
        <img className='imagen' src={contacto.thumbnail} alt="" />
      </div>
      <div>
        <h2>{contacto.nombre_contacto}</h2>
      </div>
      <div className='div-botones'>
        <div className='div-boton-1'>
          <button className='boton-llamada'><i class="bi bi-telephone"></i></button>
          <span>Llamar</span>
        </div>
        <div className='div-boton-2'>
          <button className='boton-videollamada'><i class="bi bi-camera-video"></i></button>
          <span>Video</span>
        </div>
        <div className='div-boton-3'>
          <button className='boton-buscar'><i class="bi bi-search"></i></button>
          <span>Buscar</span>
        </div>
      </div>
        <div className='div-funciones'>
          <h3>Archivos multimedia</h3>
          <h3>Mensajes destacados</h3>
          <h3>Notificaciones</h3>
          <h3>Fondo</h3>
          <h3>Guardar en Fotos</h3>
          <h3>Mensajes temporales</h3>
        </div>
    </div>
  )
}

export default InfoContacto