import React, { useState } from 'react'

const Counter = ({limit}) => {
    const [contador, setContador] = useState(0)

    const handleClickAddButtonIncrementar = () =>{
        setContador(contador + 1)
    }
    const handleClickAddButtonDecrementar = () =>{
        if(contador > 0){
        setContador(contador - 1)
        }
        else (contador = 0)
    }   
    return (
    <div>
    {contador != limit  ? <button onClick={handleClickAddButtonIncrementar}>+</button> : <span>Has llegado al limite </span>}
    <span>{contador}</span>
    <button onClick={handleClickAddButtonDecrementar}>-</button>
    </div>
)
}

export default Counter