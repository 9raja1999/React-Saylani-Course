import {
    forwardRef,
    useImperativeHandle,
    useState
} from 'react'


const TextField = forwardRef(({ placeholder }, ref) => {
    useImperativeHandle(ref , ()=>{
        return {
            getChildData : () =>{
                return "this data"
            }
        }
    })

    return (
        <input
            placeholder={placeholder}
            ref={ref}
            style={{
                padding: '5px 10px',
                border: '1px solid black',
                borderRadius: '5px',
                width : '100%'
            }}
            value={"jkkljkljkljkljklj"}
        />
    )
})

export default TextField;