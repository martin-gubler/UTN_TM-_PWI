import React from 'react'
import './ColorsContainer.css'
import CardColor from '../CardColor/CardColor'




const ColorsContainer = (props) => {
    const cartas_colores = props.cartas_colores
    return (
        <div className='ColorsCardsContainer'>
            {cartas_colores.map((carta_color) => {
                return (
                    <CardColor
                        color={carta_color.color}
                        likes={carta_color.likes}
                        time={carta_color.time}
                    />
                )
            })
        }
        </div>
    )
}

export default ColorsContainer