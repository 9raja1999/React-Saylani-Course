import React from 'react'

function List({ children }) {
    return (
        <>
            <ul>
                {children}
            </ul>
        </>
    )
}

export default List