import React, { useMemo, useDeferredValue, useEffect } from 'react'

function List({ value }) {
    const defferedInput = useDeferredValue(value)


    const list = useMemo(() => {
        let data = []
        for (var i = 0; i < 2000; i++) {
            data.push(defferedInput)
        }

        return data
    }, [defferedInput])


    // useEffect(() => {
    //     console.log("DATA", {
    //         value,
    //         defferedInput
    //     });
    // }, [defferedInput, value])

    return (
        <div> 
            {
                list.map((el, index) => {
                    return <div key={index}>{el}</div>
                })
            }
        </div>
    )
}

export default List