import React from 'react'

export const RowInfo = (props) => {
    return (<>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
        </>
    )
}
