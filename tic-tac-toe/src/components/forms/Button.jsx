import React from 'react'

function Button({ children, ...props }) {
    const { handler } = props
    return (
        <button
            onClick={handler}
        >
            {children || 'button'}
        </button>
    )
}

export default Button