import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'


const Input = forwardRef((props, ref) => {
    const [count, setCoumt] = useState(0)
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            focus() {
               inputRef.current.focus()
            }
        }
    }, [count])


    return (
        <>
            <input ref={inputRef} type={props.type} placeholder={props.placeholder} />
            <button
                onClick={() => {
                    setCoumt(count + 1)
                }}
            >CLICK ME</button>
        </>
    )
})

export default Input