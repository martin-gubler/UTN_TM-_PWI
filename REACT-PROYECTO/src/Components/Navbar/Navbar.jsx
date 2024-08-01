import React from 'react'
import './Navbar.css'

const Navbar = (props /* OBJETO */) => {
    const userData = props.userData
    return (
    <div className='container'>
            <div>
                <h2 className='logo'>Logo</h2>
            </div>
        <div className='links'>
            {
                userData.lang == 'es' ? <h2>Inicio</h2> : <h2>Home</h2>
            }
            {
                userData.isAdmin ? ( userData.lang == 'es'? <button className='button'>Crear producto</button> : <button className='button'>Create product</button> ) : null
            }
            {
                userData.isLogged ? ( userData.lang == 'es'? <button className='button'>Iniciar Sesion</button> : <button className='button'>Login</button> ) : null
            }
        </div>
    </div>

    )
}

export default Navbar