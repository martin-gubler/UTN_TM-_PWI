import React from 'react';
import './Color.css'

const Color = (props) => {
    const colores/* array de strings */ = props.colores
    return (
        <div className="Color">
                {colores.map((color /* string */) => {
                    return (
                        <div className="color-container">
                            <div className="color" style={{backgroundColor: color}}>
                                <span className='bi bi-heart'>#aaaa</span>
                            </div>
                        </div>
                    )
                })
                }
    </div>
    )
}

export default Color