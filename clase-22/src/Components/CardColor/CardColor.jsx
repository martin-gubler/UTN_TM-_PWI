import React from 'react' 

import './CardColor.css'
import Color from '../Color/Color'

const CardColor = (props /* object */) => {
    const colores /* array de strings */= props.color 
    const time /* string */= props.time
    const likes /* number */= props.likes
    return (
        <div className='colors-cards'>
            <div className='color'>
                <Color colores ={colores}/>
            </div>
            <div className="card-controls">
                <button className='btn-like'>
                    <i className='bi bi-heart'></i>
                    {likes}
                </button>
                <span className="time">
                    {time}
                </span>
            </div>
        </div>
    )
}

export default CardColor