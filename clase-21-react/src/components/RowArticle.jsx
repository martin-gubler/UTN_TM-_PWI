import React from 'react'

const RowArticle = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <a href='developer.mozilla.org'>{props.direccion_author}</a>
            <span>{props.fecha}</span>
        </div>
    )
}
export default RowArticle;